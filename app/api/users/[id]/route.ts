import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

function parseUserId(idParam: string) {
  const numId = Number(idParam);
  if (isNaN(numId)) throw new Error("Invalid user ID");
  return numId;
}

// ------------------ GET — Fetch Single User ------------------
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  let userId: number;

  try {
    userId = parseUserId(id);
  } catch {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        district: true,
        isDisabled: true,
        role: { select: { name: true } },
        permissions: { select: { name: true } },
        assignedSchools: { select: { school: { select: { id: true, name: true } } } }
      }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const formattedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      district: user.district,
      role: user.role?.name ?? "",
      status: user.isDisabled ? "Inactive" : "Active",
      permissions: user.permissions.map(p => p.name),
      assignedSchools: user.assignedSchools.map(s => s.school.id) // ✅ send IDs now
    };

    return NextResponse.json(formattedUser);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}

// ------------------ PUT — Update User ------------------
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  let userId: number;

  try {
    userId = parseUserId(id);
  } catch {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const {
      name,
      email,
      phoneNumber,
      district,
      role,
      status,
      permissions,
      assignedSchools // now array of IDs
    } = body;

    // Convert role name to roleId
    const roleRecord = await prisma.role.findUnique({ where: { name: role } });
    if (!roleRecord) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    // Convert permission names to IDs
    const permissionConnect = await Promise.all(
      (permissions || []).map(async (permName: string) => {
        const perm = await prisma.permission.findUnique({ where: { name: permName } });
        if (!perm) throw new Error(`Permission not found: ${permName}`);
        return { id: perm.id };
      })
    );

    // Directly use IDs for assignedSchools (no extra queries)
    const schoolConnect = (assignedSchools || []).map((schoolId: number) => ({
      school: { connect: { id: schoolId } }
    }));

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        email,
        phoneNumber,
        district,
        isDisabled: status === "Inactive",
        roleId: roleRecord.id,
        permissions: { set: permissionConnect },
        assignedSchools: {
          deleteMany: {}, // remove old
          create: schoolConnect
        }
      },
      include: {
        role: true,
        permissions: true,
        assignedSchools: { include: { school: true } }
      }
    });

    const formattedUser = {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      phoneNumber: updatedUser.phoneNumber,
      district: updatedUser.district,
      role: updatedUser.role?.name ?? "",
      status: updatedUser.isDisabled ? "Inactive" : "Active",
      permissions: updatedUser.permissions.map(p => p.name),
      assignedSchools: updatedUser.assignedSchools.map(s => s.school.id) // keep IDs for frontend
    };

    return NextResponse.json(formattedUser);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

// ------------------ DELETE — Remove User ------------------
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  let userId: number;

  try {
    userId = parseUserId(id);
  } catch {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
  // Remove related assignments first
  await prisma.userSchool.deleteMany({
    where: { userId }
  });

  await prisma.user.delete({
    where: { id: userId }
  });

  return NextResponse.json({ message: "User deleted successfully" });
} catch (err) {
  console.error(err);
  return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
}

}
