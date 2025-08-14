import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: Promise<{ role: string }> }
) {
  const { role } = await params;
  // Convert slug to DB name: e.g. "cluster-head" → "Cluster Head"
  // Also handles "cluster" → "Cluster"
  const convertToRoleName = (roleSlug: string) => {
    if (!roleSlug) return "";
    // Replace dashes with spaces, split, capitalize each word, join
    return roleSlug
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  };

  const roleName = convertToRoleName(role);

  try {
    const users = await prisma.user.findMany({
      where: {
        role: {
          name: {
            equals: roleName,
            mode: "insensitive", // match regardless of case
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        district: true,
        isDisabled: true,
        role: { select: { name: true } },
      },
    });

    const formattedUsers = users.map((user) => ({
      ...user,
      status: user.isDisabled ? "Inactive" : "Active",
    }));

    return NextResponse.json(formattedUsers);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
