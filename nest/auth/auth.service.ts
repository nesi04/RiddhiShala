import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { randomInt } from 'crypto';
import nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  private prisma = new PrismaClient();

  constructor(private readonly jwtService: JwtService) {}

  private async generateOTP(): Promise<string> {
    return randomInt(100000, 999999).toString();
  }

  private async sendOTP(destination: string, otp: string) {
    const isEmail = /\S+@\S+\.\S+/.test(destination);

    if (isEmail) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: destination,
        subject: 'Your OTP Code',
        text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to email ${destination}`);
      } catch (error) {
        console.error('Error sending email:', error);
        throw new BadRequestException('Failed to send OTP email');
      }
    } else {
      console.log(`Sending OTP ${otp} to phone ${destination}`);
      // TODO: Integrate SMS provider
    }
  }

  async requestOtp(data: { email?: string; phone?: string; roleId: number }) {
    const destination = data.email || data.phone;
    if (!destination) throw new BadRequestException('Email or phone required');

    const otp = await this.generateOTP();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await this.prisma.oTPVerification.create({
      data: {
        email: data.email,
        phone: data.phone,
        roleId: data.roleId,
        otp,
        expiresAt,
      },
    });

    await this.sendOTP(destination, otp);
    return { message: 'OTP sent' };
  }

  async verifyOtpAndRegister(data: {
    name: string;
    email?: string;
    phone?: string;
    password: string;
    roleId: number;
    otp: string;
  }) {
    const record = await this.prisma.oTPVerification.findFirst({
      where: {
        roleId: data.roleId,
        email: data.email,
        phone: data.phone,
        otp: data.otp,
        expiresAt: { gte: new Date() },
      },
    });

    if (!record) throw new UnauthorizedException('Invalid or expired OTP');

    const existingUser = await this.prisma.user.findFirst({
      where: {
        roleId: data.roleId,
        OR: [{ email: data.email }, { phoneNumber: data.phone }],
      },
    });

    if (existingUser) throw new BadRequestException('User already exists');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phone,
        password: hashedPassword,
        roleId: data.roleId,
      },
    });

    await this.prisma.oTPVerification.delete({ where: { id: record.id } });

    return { message: 'User created', userId: user.id };
  }

  async login(data: { email?: string; phone?: string; password: string }) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }, { phoneNumber: data.phone }],
      },
    });

    if (!user) throw new UnauthorizedException('User not found');

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, roleId: user.roleId };
    const token = this.jwtService.sign(payload);

    return { message: 'Login successful', token, user };
  }
}
