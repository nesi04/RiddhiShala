import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

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
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  try {
    const body = await req.json();
    const updatedSchool = await prisma.school.update({
      where: { id: Number(id) },
      data: body,
    });
    return NextResponse.json(updatedSchool);
  } catch (error) {
    console.error(error);
    if ((error as any).code === "P2025") {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const schoolId = Number(id);

  if (isNaN(schoolId)) {
    return NextResponse.json({ error: "Invalid school ID" }, { status: 400 });
  }

  try {
    // Optional: Check if exists
    const existing = await prisma.school.findUnique({
      where: { id: schoolId },
    });
    if (!existing) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    // First delete related UserSchool entries
    await prisma.userSchool.deleteMany({
      where: { schoolId }
    });

    // Then delete the school
    await prisma.school.delete({
      where: { id: schoolId },
    });

    return NextResponse.json({ message: "School deleted successfully" });
  } catch (err: any) {
    console.error(err);

    // Handle Prisma-specific "not found" error
    if (err.code === "P2025") {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    return NextResponse.json({ error: "Failed to delete school" }, { status: 500 });
  }
}
