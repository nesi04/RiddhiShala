import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import { addMinutes } from 'date-fns';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma';

const smtpTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,           // e.g., smtp.gmail.com
  port: Number(process.env.SMTP_PORT),   // e.g., 587
  secure: false,                         // true if using port 465
  auth: {
    user: process.env.SMTP_USER,         // your SMTP username/email
    pass: process.env.SMTP_PASSWORD,     // your SMTP password or app password
  },
});

export async function sendVerificationMail(email: string) {
  const token = uuidv4();
  const expiresAt = addMinutes(new Date(), 15);

  await prisma.otp.create({
    data: { email, otp: token, expiresAt },
  });

 const verifyUrl = `http://localhost:3000/verify?token=${token}&email=${email}`;


  await smtpTransporter.sendMail({
    from: `neeraj579singh@gmail.com`,
    to: email,
    subject: 'Verify your account',
    html: `<p>Click <a href="${verifyUrl}">here</a> to verify your account.</p>`,
  });
}

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

const JWT_SECRET = process.env.JWT_SECRET!;

export async function issueTokens(userId: number, email: string) {
  const payload = { sub: userId, email };

  const accessToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '15m',
  });

  const refreshToken = uuidv4();
  const expiresAt = addMinutes(new Date(), 60 * 24 * 7); // 7 days

  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId,
      expiresAt,
    },
  });

  return { accessToken, refreshToken };
}
