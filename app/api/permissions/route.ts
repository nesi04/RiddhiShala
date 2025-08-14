import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const permissions = await prisma.permission.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" }
    });
    return NextResponse.json(permissions);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch permissions" }, { status: 500 });
  }
}

