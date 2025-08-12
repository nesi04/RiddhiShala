import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const school = await prisma.school.findUnique({
      where: { id: Number(id) },
    });

    if (!school) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    return NextResponse.json(school);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const body = await req.json();

    const updatedSchool = await prisma.school.update({
      where: { id: Number(id) },
      data: body,
    });

    return NextResponse.json(updatedSchool);
  } catch (error) {
    console.error(error);
    if ((error as any).code === 'P2025') { // Prisma record not found error
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await prisma.school.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "School deleted successfully" });
  } catch (error) {
    console.error(error);
    if ((error as any).code === 'P2025') { // Prisma record not found error
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
