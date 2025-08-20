import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const schoolId = Number(id);

  if (isNaN(schoolId)) {
    return NextResponse.json({ error: "Invalid school ID" }, { status: 400 });
  }

  try {
    const school = await prisma.school.findUnique({
      where: { id: schoolId },
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
  const schoolId = Number(id);

  if (isNaN(schoolId)) {
    return NextResponse.json({ error: "Invalid school ID" }, { status: 400 });
  }

  try {
    const body = await req.json();
    console.log("Received update data:", body); // Debug log

    const {
      name,
      status,
      established,
      upgradedYear,
      udiseCode,
      district,
      block,
      cluster,
      village,
      management,
      type,
      medium,
      inclusive,
      coed,
      totalArea,
      principal,
      principalSince,
      principalQualification,
      principalProfessionalQualification,
      principalJoiningDate,
      principalExperience,
      principalContact,
      principalEmail,
      midDayMeal,
      drinkingWater,
      electricity,
      internet,
      fireSafety,
      teacherPhotosDisplayed,
    } = body;

    // Build update data object, only including defined fields
    const updateData: any = {};

    // Basic school info
    if (name !== undefined) updateData.name = name;
    if (status !== undefined) updateData.status = status;
    if (established !== undefined) updateData.established = established ? Number(established) : null;
    if (upgradedYear !== undefined) updateData.upgradedYear = upgradedYear;
    if (udiseCode !== undefined) updateData.udiseCode = udiseCode;
    if (district !== undefined) updateData.district = district;
    if (block !== undefined) updateData.block = block;
    if (cluster !== undefined) updateData.cluster = cluster;
    if (village !== undefined) updateData.village = village;
    if (management !== undefined) updateData.management = management;
    if (type !== undefined) updateData.type = type;
    if (medium !== undefined) updateData.medium = medium;
    if (inclusive !== undefined) updateData.inclusive = Boolean(inclusive);
    if (coed !== undefined) updateData.coed = Boolean(coed);
    if (totalArea !== undefined) updateData.totalArea = totalArea;

    // Principal information
    if (principal !== undefined) updateData.principal = principal;
    if (principalSince !== undefined) updateData.principalSince = principalSince;
    if (principalQualification !== undefined) updateData.principalQualification = principalQualification;
    if (principalProfessionalQualification !== undefined) updateData.principalProfessionalQualification = principalProfessionalQualification;
    if (principalJoiningDate !== undefined) updateData.principalJoiningDate = principalJoiningDate;
    if (principalExperience !== undefined) updateData.principalExperience = principalExperience;
    if (principalContact !== undefined) updateData.principalContact = principalContact;
    if (principalEmail !== undefined) updateData.principalEmail = principalEmail;

    // Facilities
    if (midDayMeal !== undefined) updateData.midDayMeal = midDayMeal;
    if (drinkingWater !== undefined) updateData.drinkingWater = drinkingWater;
    if (electricity !== undefined) updateData.electricity = electricity;
    if (internet !== undefined) updateData.internet = internet;
    if (fireSafety !== undefined) updateData.fireSafety = fireSafety;
    if (teacherPhotosDisplayed !== undefined) updateData.teacherPhotosDisplayed = Boolean(teacherPhotosDisplayed);

    console.log("Update data being sent to database:", updateData); // Debug log

    const updatedSchool = await prisma.school.update({
      where: { id: schoolId },
      data: updateData,
    });

    console.log("Updated school from database:", updatedSchool); // Debug log

    return NextResponse.json(updatedSchool);
  } catch (error: any) {
    console.error("Update error:", error);

    if (error.code === "P2025") {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    if (error.code === "P2002") {
      return NextResponse.json({ error: "UDISE code already exists" }, { status: 409 });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const schoolId = Number(id);

  if (isNaN(schoolId)) {
    return NextResponse.json({ error: "Invalid school ID" }, { status: 400 });
  }

  try {
    const existing = await prisma.school.findUnique({
      where: { id: schoolId },
    });
    if (!existing) {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    // Delete related records first to prevent foreign key constraint errors
    await prisma.userSchool.deleteMany({
      where: { schoolId },
    });

    // Delete other related records if they exist
    await prisma.enrollment.deleteMany({
      where: { schoolId },
    });

    await prisma.teacher.deleteMany({
      where: { schoolId },
    });

    await prisma.infrastructure.deleteMany({
      where: { schoolId },
    });

    await prisma.lab.deleteMany({
      where: { schoolId },
    });

    await prisma.pillar.deleteMany({
      where: { schoolId },
    });

    await prisma.innovation.deleteMany({
      where: { schoolId },
    });

    await prisma.challenge.deleteMany({
      where: { schoolId },
    });

    await prisma.school.delete({
      where: { id: schoolId },
    });

    return NextResponse.json({ message: "School deleted successfully" });
  } catch (error: any) {
    console.error("Delete error:", error);

    if (error.code === "P2025") {
      return NextResponse.json({ error: "School not found" }, { status: 404 });
    }

    return NextResponse.json({ error: "Failed to delete school" }, { status: 500 });
  }
}