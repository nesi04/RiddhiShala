import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Find all roles with their user counts
    const roles = await prisma.role.findMany({
      include: {
        _count: { select: { users: true } },
      },
    });

    // Map roles to summary format expected by frontend
    const summary = roles.map((role) => ({
      role: role.name,
      description: `Number of ${role.name.toLowerCase()}`,
      count: role._count.users,
      change: null, // You can later add monthly change data here
    }));

    return NextResponse.json(summary);
  } catch (error) {
    console.error("Error fetching user summaries:", error);
    return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
  }
}
