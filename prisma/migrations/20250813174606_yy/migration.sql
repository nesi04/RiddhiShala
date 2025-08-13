-- CreateTable
CREATE TABLE "public"."roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."permissions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "joinDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastActive" TIMESTAMP(3),
    "isDisabled" BOOLEAN NOT NULL DEFAULT false,
    "address" TEXT,
    "bio" TEXT,
    "district" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserSchool" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "schoolId" INTEGER NOT NULL,

    CONSTRAINT "UserSchool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."schools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "yearOfEstablishment" INTEGER,
    "upgradedTo" TEXT,
    "udiseCode" TEXT,
    "district" TEXT,
    "block" TEXT,
    "cluster" TEXT,
    "villageTown" TEXT,
    "management" TEXT,
    "schoolType" TEXT,
    "mediumOfInstruction" TEXT,
    "inclusiveSchool" BOOLEAN NOT NULL DEFAULT false,
    "vocationalTrades" TEXT,
    "coEducation" BOOLEAN,
    "totalArea" TEXT,
    "campusType" TEXT,
    "campusSize" TEXT,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."head_of_school" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT,
    "holdingChargeSince" TEXT,
    "academicQualification" TEXT,
    "professionalQualification" TEXT,
    "dateOfJoining" TIMESTAMP(3),
    "teachingExperience" TEXT,
    "contactNumber" TEXT,
    "email" TEXT,

    CONSTRAINT "head_of_school_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."teachers" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT,
    "subject" TEXT,
    "qualification" TEXT,
    "experience" TEXT,
    "contactNumber" TEXT,
    "email" TEXT,
    "classesTaking" TEXT,
    "attendedIECTraining" BOOLEAN,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."students" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT,
    "grade" TEXT,
    "section" TEXT,
    "dob" TIMESTAMP(3),
    "contactNumber" TEXT,
    "email" TEXT,
    "cwsn" BOOLEAN,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."data_entry_operators" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "contactNumber" TEXT,
    "email" TEXT,

    CONSTRAINT "data_entry_operators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Infrastructure" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "facility" TEXT NOT NULL,
    "quantity" INTEGER,
    "status" TEXT,
    "remarks" TEXT,
    "photoUrl" TEXT,

    CONSTRAINT "Infrastructure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lab" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "labType" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,
    "equipment" TEXT,
    "remarks" TEXT,
    "photoUrl" TEXT,

    CONSTRAINT "Lab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PMShriPillar" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "pillar" TEXT NOT NULL,
    "subAspect" TEXT NOT NULL,
    "observations" TEXT,
    "remarks" TEXT,
    "photoUrl" TEXT,

    CONSTRAINT "PMShriPillar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Innovation" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoUrl" TEXT,

    CONSTRAINT "Innovation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Challenge" (
    "id" SERIAL NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "area" TEXT NOT NULL,
    "challenge" TEXT NOT NULL,
    "supportNeeded" TEXT,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OtpVerification" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "roleId" INTEGER NOT NULL,
    "otp" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OtpVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_UserPermissions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserPermissions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_RolePermissions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RolePermissions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "public"."roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_name_key" ON "public"."permissions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phoneNumber_key" ON "public"."users"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "head_of_school_schoolId_key" ON "public"."head_of_school"("schoolId");

-- CreateIndex
CREATE INDEX "_UserPermissions_B_index" ON "public"."_UserPermissions"("B");

-- CreateIndex
CREATE INDEX "_RolePermissions_B_index" ON "public"."_RolePermissions"("B");

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserSchool" ADD CONSTRAINT "UserSchool_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserSchool" ADD CONSTRAINT "UserSchool_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."head_of_school" ADD CONSTRAINT "head_of_school_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."teachers" ADD CONSTRAINT "teachers_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."students" ADD CONSTRAINT "students_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."data_entry_operators" ADD CONSTRAINT "data_entry_operators_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Infrastructure" ADD CONSTRAINT "Infrastructure_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Lab" ADD CONSTRAINT "Lab_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PMShriPillar" ADD CONSTRAINT "PMShriPillar_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Innovation" ADD CONSTRAINT "Innovation_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Challenge" ADD CONSTRAINT "Challenge_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "public"."schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserPermissions" ADD CONSTRAINT "_UserPermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserPermissions" ADD CONSTRAINT "_UserPermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_RolePermissions" ADD CONSTRAINT "_RolePermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_RolePermissions" ADD CONSTRAINT "_RolePermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
