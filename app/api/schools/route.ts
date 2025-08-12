  import { NextResponse } from "next/server";
  import { PrismaClient } from "@/lib/generated/prisma";

  const prisma = new PrismaClient();

  export async function POST(req: Request) {
    try {
      const body = await req.json();

      const {
        name,
        yearOfEstablishment,
        upgradedTo,
        udiseCode,
        district,
        block,
        cluster,
        villageTown,
        management,
        schoolType,
        mediumOfInstruction,
        inclusiveSchool,
        facilitiesForCWSN,
        vocationalTrades,
        availableCourses,
        coEducation,
        campusType,
        totalArea,
        campusSize
      } = body;

      if (!name) {
        return NextResponse.json(
          { error: "School name is required" },
          { status: 400 }
        );
      }

      const newSchool = await prisma.school.create({
        data: {
          name,
          yearOfEstablishment,
          upgradedTo,
          udiseCode,
          district,
          block,
          cluster,
          villageTown,
          management,
          schoolType,
          mediumOfInstruction,
          inclusiveSchool,
          facilitiesForCWSN,
          vocationalTrades,
          availableCourses,
          coEducation,
          campusType,
          totalArea,
          campusSize
        }
      });

      return NextResponse.json(newSchool, { status: 201 });
    } catch (error) {
      console.error("Error creating school:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  }



  export async function GET() {
    const schools = await prisma.school.findMany({
      orderBy: { id: "desc" },
    });
    return NextResponse.json(schools);
  }

