import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { isBefore } from 'date-fns';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  if (!token || !email) {
    return NextResponse.json({ message: 'Invalid query parameters' }, { status: 400 });
  }

  const record = await prisma.otp.findFirst({ where: { email, otp: token } });
  if (!record) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
  }

  if (isBefore(record.expiresAt, new Date())) {
    return NextResponse.json({ message: 'Token expired' }, { status: 400 });
  }

  await prisma.user.update({ where: { email }, data: { isVerified: true } });
  await prisma.otp.delete({ where: { id: record.id } });

  return NextResponse.json({ message: 'Account verified. You can now login.' }, { status: 200 });
}
