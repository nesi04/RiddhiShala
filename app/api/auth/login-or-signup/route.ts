import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import { hashPassword, comparePassword, issueTokens, sendVerificationMail } from '../../../../utils/auth';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const hashedPassword = await hashPassword(password);

    user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        isVerified: false,
        roleId: 1,
        name: 'New User',
      },
    });

    await sendVerificationMail(email);

    return NextResponse.json({ message: 'Verification link sent to your email' });
  }

  if (!user.isVerified) {
    await sendVerificationMail(email);
    return NextResponse.json({ message: 'Please verify your email. Link resent.' });
  }

  const valid = await comparePassword(password, user.password);
  if (!valid) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const tokens = await issueTokens(user.id, user.email);
  return NextResponse.json(tokens);
}
