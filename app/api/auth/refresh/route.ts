import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { isBefore, addMinutes } from "date-fns";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { refreshToken } = body;

  if (!refreshToken || typeof refreshToken !== "string") {
    return NextResponse.json({ message: "Refresh token required" }, { status: 400 });
  }

  const stored = await prisma.refreshToken.findUnique({ where: { token: refreshToken } });
  if (!stored || isBefore(stored.expiresAt, new Date())) {
    return NextResponse.json({ message: "Invalid refresh token" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { id: stored.userId } });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 401 });
  }

  const payload = { sub: user.id, email: user.email };
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
  const newRefreshToken = uuid();
  const expiresAt = addMinutes(new Date(), 60 * 24 * 7);

  await prisma.refreshToken.create({
    data: { token: newRefreshToken, userId: user.id, expiresAt },
  });

  return NextResponse.json({ accessToken, refreshToken: newRefreshToken }, { status: 200 });
}
