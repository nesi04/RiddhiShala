import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const roles = await prisma.role.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" }
    });
    return NextResponse.json(roles);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch roles" }, { status: 500 });
  }
}
