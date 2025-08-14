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

  if (id) {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        role: true,
        permissions: true,
        assignedSchools: { include: { school: true } }
      },
    });
    return NextResponse.json(user);
  }

  const users = await prisma.user.findMany({
    where: {
      roleId: roleId ? Number(roleId) : undefined,
      isDisabled: isDisabled != null ? isDisabled === 'true' : undefined,
    },
    include: { role: true, permissions: true },
  });

  return NextResponse.json(users);
}

// CREATE - Add new user
export async function POST(req: NextRequest) {
  const body = await getBody(req);
  const { name, email, phoneNumber, password, roleId, district, permissionIds = [], schoolIds = [] } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      phoneNumber,
      password: hashedPassword,
      district,
      roleId,
      permissions: { connect: permissionIds.map((id: number) => ({ id })) },
      assignedSchools: {
        create: schoolIds.map((sid: number) => ({
          school: { connect: { id: sid } }
        }))
      }
    },
    include: { permissions: true, role: true, assignedSchools: { include: { school: true } } },
  });

  return NextResponse.json(user);
}

// UPDATE - Edit user
export async function PUT(req: NextRequest) {
  const body = await getBody(req);
  const { id, name, email, phoneNumber, roleId, district, permissionIds, schoolIds, password } = body;

  const data: any = { name, email, phoneNumber, roleId, district };

  if (permissionIds) {
    data.permissions = { set: permissionIds.map((id: number) => ({ id })) };
  }
  if (schoolIds) {
    data.assignedSchools = {
      deleteMany: {},
      create: schoolIds.map((sid: number) => ({
        school: { connect: { id: sid } }
      }))
    };
  }
  if (password) {
    data.password = await bcrypt.hash(password, 10);
  }

  const user = await prisma.user.update({
    where: { id: Number(id) },
    data,
    include: { permissions: true, role: true, assignedSchools: { include: { school: true } } },
  });

  return NextResponse.json(user);
}

// DELETE user
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  await prisma.user.delete({ where: { id: Number(id) } });
  return NextResponse.json({ message: 'User deleted' });
}

// PATCH - Disable/Enable
export async function PATCH(req: NextRequest) {
  const body = await getBody(req);
  const { id, isDisabled } = body;

  if (isDisabled === undefined) {
    return NextResponse.json({ error: 'Missing isDisabled' }, { status: 400 });
  }

  const data: any = { isDisabled };

  if (isDisabled) {
    data.permissions = { set: [] };
  }

  const user = await prisma.user.update({
    where: { id: Number(id) },
    data,
    include: { permissions: true },
  });

  return NextResponse.json(user);
}
