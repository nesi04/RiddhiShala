
import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { Role } from '@prisma/client';


@Injectable()
export class AuthService {
  constructor(

    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}


  // ✅ Register a new user
  async registerUser(
    email: string,
    password: string,
    role: Role,
    name: string,
    mustChangePassword = false,
    enrollmentNumber?: string, // from Excel
    employeeNumber?: string, // from Excel
    branchId?: number, // from Excel (required for student)
    semesterId?: number, // from Excel (required for student)
  ): Promise<{
    access_token: string;
    refresh_token: string;
    role: Role;
    mustChangePassword: boolean;
  }> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });


    if (existingUser) {
      throw new ConflictException('Email already in use');
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    let studentId: string | undefined;
    let teacherId: string | undefined;


    if (role === Role.STUDENT) {
      if (!enrollmentNumber || !branchId || !semesterId) {
        throw new ConflictException('Missing student details from Excel');
      }


      const student = await this.prisma.student.create({
        data: {
          name,
          email,
          enrollmentNumber,
          branch: { connect: { id: branchId } },
          semester: { connect: { id: semesterId } },
        },
      });
      studentId = student.id;
    }


    if (role === Role.TEACHER) {
      if (!employeeNumber) {
        throw new ConflictException('Missing teacher details from Excel');
      }


      const teacher = await this.prisma.teacher.create({
        data: {
          name,
          email,
          employeeNumber,
        },
      });
      teacherId = teacher.id;
    }


    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
        mustChangePassword,
        studentId,
        teacherId,
      },
    });


    const access_token = this.generateAccessToken(user.id, user.role);
    const refresh_token = this.generateRefreshToken(user.id, user.role);
    const hashedRefreshToken = this.hashToken(refresh_token);


    await this.prisma.refreshToken.create({
      data: {
        tokenHash: hashedRefreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });


    return {
      access_token,
      refresh_token,
      role: user.role,
      mustChangePassword: user.mustChangePassword,
    };
  }


  // ✅ Validate user during login
  async validateUser(
  identifier: string, // email or mobile
  password: string,
): Promise<{
  access_token: string;
  refresh_token: string;
  role: Role;
  mustChangePassword: boolean;
}> {
  const user = await this.prisma.user.findFirst({
    where: {
      OR: [
        { email: identifier },
        { mobile: identifier },
      ],
    },
    select: {
      id: true,
      password: true,
      role: true,
      mustChangePassword: true,
    },
  });

  if (!user) throw new NotFoundException('User not found');

  const pwOk = await bcrypt.compare(password, user.password);
  if (!pwOk) throw new UnauthorizedException('Invalid credentials');

  const access_token = this.generateAccessToken(user.id, user.role);
  const refresh_token = this.generateRefreshToken(user.id, user.role);
  const hashedRefreshToken = this.hashToken(refresh_token);

  await this.prisma.refreshToken.create({
    data: {
      tokenHash: hashedRefreshToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  return {
    access_token,
    refresh_token,
    role: user.role,
    mustChangePassword: user.mustChangePassword,
  };
}


  // ✅ Change password (typically used for mustChangePassword flow)
  async changePassword(userId: string, newPassword: string): Promise<void> {
    const hashedPassword = await bcrypt.hash(newPassword, 10);


    await this.prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
        mustChangePassword: false,
      },
    });
  }


  // ✅ Refresh token
  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });


      const hashedRefreshToken = this.hashToken(refreshToken);


      const storedToken = await this.prisma.refreshToken.findUnique({
        where: { tokenHash: hashedRefreshToken },
      });


      if (!storedToken || new Date() > storedToken.expiresAt) {
        throw new UnauthorizedException('Invalid or expired token');
      }


      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
        select: { role: true },
      });


      if (!user) throw new UnauthorizedException('User not found');


      const newAccessToken = this.generateAccessToken(payload.sub, user.role);
      const newRefreshToken = this.generateRefreshToken(payload.sub, user.role);
      const newHashedRefresh = this.hashToken(newRefreshToken);


      await this.prisma.$transaction([
        this.prisma.refreshToken.delete({
          where: { tokenHash: hashedRefreshToken },
        }),
        this.prisma.refreshToken.create({
          data: {
            tokenHash: newHashedRefresh,
            userId: payload.sub,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        }),
      ]);


      return {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
        role: user.role,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }


  // ✅ Get user profile
  async getUserProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        mustChangePassword: true,
        createdAt: true,
        student: {
          select: { name: true },
        },
        teacher: {
          select: { name: true },
        },
      },
    });


    if (!user) return null;


    const name = user.student?.name || user.teacher?.name || null;


    return {
      id: user.id,
      email: user.email,
      role: user.role,
      mustChangePassword: user.mustChangePassword,
      createdAt: user.createdAt,
      name,
    };
  }


  // 🔐 Access token generator
  private generateAccessToken(userId: string, role: Role): string {
    return this.jwtService.sign(
      { sub: userId, roles: [role] },
      {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '15m',
      },
    );
  }


  // 🔁 Refresh token generator
  private generateRefreshToken(userId: string, role: Role): string {
    return this.jwtService.sign(
      { sub: userId, roles: [role] },
      {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      },
    );
  }


  // 🔒 Token hashing
  private hashToken(token: string): string {
    return crypto.createHash('sha256').update(token).digest('hex');
  }
}












