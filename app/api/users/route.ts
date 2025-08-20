import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@/lib/generated/prisma";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function getBody(req: NextRequest) {
  return req.json();
}

// GET all or single user
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const roleId = searchParams.get('roleId');
  const isDisabled = searchParams.get('isDisabled');
  const isVerified = searchParams.get('isVerified');

  try {
    if (id) {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: {
          role: true,
          permissions: true,
          assignedSchools: { include: { school: true } }
        },
      });
      
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      
      return NextResponse.json(user);
    }

    const users = await prisma.user.findMany({
      where: {
        roleId: roleId ? Number(roleId) : undefined,
        isDisabled: isDisabled != null ? isDisabled === 'true' : undefined,
        isVerified: isVerified != null ? isVerified === 'true' : undefined,
      },
      include: { 
        role: true, 
        permissions: true,
        assignedSchools: { include: { school: true } }
      },
      orderBy: { joinDate: 'desc' }
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error('GET users error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// CREATE - Add new user
export async function POST(req: NextRequest) {
  try {
    const body = await getBody(req);
    const { 
      name, 
      email, 
      phoneNumber, 
      password, 
      roleId, 
      district, 
      address,
      bio,
      isVerified = false,
      permissionIds = [], 
      schoolIds = [] 
    } = body;

    // Validate required fields
    if (!name || !email || !password || !roleId) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, password, roleId' }, 
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already exists' }, 
        { status: 409 }
      );
    }

    // Check if phone number already exists (if provided)
    if (phoneNumber) {
      const existingPhone = await prisma.user.findUnique({
        where: { phoneNumber }
      });
      
      if (existingPhone) {
        return NextResponse.json(
          { error: 'Phone number already exists' }, 
          { status: 409 }
        );
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber: phoneNumber || null,
        password: hashedPassword,
        roleId: Number(roleId),
        district,
        address,
        bio,
        isVerified: Boolean(isVerified),
        permissions: { connect: permissionIds.map((id: number) => ({ id })) },
        assignedSchools: {
          create: schoolIds.map((sid: number) => ({
            school: { connect: { id: sid } }
          }))
        }
      },
      include: { 
        permissions: true, 
        role: true, 
        assignedSchools: { include: { school: true } } 
      },
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } catch (error: any) {
    console.error('POST user error:', error);
    
    if (error.code === 'P2002') {
      const field = error.meta?.target?.includes('email') ? 'email' : 'phone number';
      return NextResponse.json(
        { error: `${field} already exists` }, 
        { status: 409 }
      );
    }
    
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// UPDATE - Edit user
export async function PUT(req: NextRequest) {
  try {
    const body = await getBody(req);
    const { 
      id, 
      name, 
      email, 
      phoneNumber, 
      roleId, 
      district, 
      address,
      bio,
      isVerified,
      isDisabled,
      permissionIds, 
      schoolIds, 
      password 
    } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing user id' }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: Number(id) }
    });

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Build update data object
    const data: any = {};

    if (name !== undefined) data.name = name;
    if (email !== undefined) data.email = email;
    if (phoneNumber !== undefined) data.phoneNumber = phoneNumber || null;
    if (roleId !== undefined) data.roleId = Number(roleId);
    if (district !== undefined) data.district = district;
    if (address !== undefined) data.address = address;
    if (bio !== undefined) data.bio = bio;
    if (isVerified !== undefined) data.isVerified = Boolean(isVerified);
    if (isDisabled !== undefined) data.isDisabled = Boolean(isDisabled);

    // Update lastActive when user data is modified
    data.lastActive = new Date();

    // Handle permissions
    if (permissionIds !== undefined) {
      data.permissions = { set: permissionIds.map((id: number) => ({ id })) };
    }

    // Handle school assignments
    if (schoolIds !== undefined) {
      data.assignedSchools = {
        deleteMany: {},
        create: schoolIds.map((sid: number) => ({
          school: { connect: { id: sid } }
        }))
      };
    }

    // Handle password update
    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data,
      include: { 
        permissions: true, 
        role: true, 
        assignedSchools: { include: { school: true } } 
      },
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } catch (error: any) {
    console.error('PUT user error:', error);

    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (error.code === 'P2002') {
      const field = error.meta?.target?.includes('email') ? 'email' : 'phone number';
      return NextResponse.json(
        { error: `${field} already exists` }, 
        { status: 409 }
      );
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE user
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: Number(id) }
    });

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Delete related records first
    await prisma.userSchool.deleteMany({
      where: { userId: Number(id) }
    });

    await prisma.refreshToken.deleteMany({
      where: { userId: Number(id) }
    });

    // Delete the user
    await prisma.user.delete({ 
      where: { id: Number(id) } 
    });

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error: any) {
    console.error('DELETE user error:', error);

    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PATCH - Disable/Enable or update specific fields
export async function PATCH(req: NextRequest) {
  try {
    const body = await getBody(req);
    const { id, isDisabled, isVerified, lastActive } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing user id' }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: Number(id) }
    });

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const data: any = {};

    if (isDisabled !== undefined) {
      data.isDisabled = Boolean(isDisabled);
      
      // If disabling user, remove all permissions
      if (isDisabled) {
        data.permissions = { set: [] };
      }
    }

    if (isVerified !== undefined) {
      data.isVerified = Boolean(isVerified);
    }

    if (lastActive !== undefined || isDisabled !== undefined || isVerified !== undefined) {
      data.lastActive = new Date();
    }

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data,
      include: { 
        permissions: true, 
        role: true,
        assignedSchools: { include: { school: true } }
      },
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } catch (error: any) {
    console.error('PATCH user error:', error);

    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}