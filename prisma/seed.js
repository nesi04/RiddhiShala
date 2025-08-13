const { PrismaClient } = require('../lib/generated/prisma');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // -------------------- Roles --------------------
  const roleNames = [
    'State',
    'District',
    'Cluster',
    'Block',
    'Trainer',
    'Head of School',
    'Teacher',
    'Student',
    'Data Entry Operator',
  ];

  const roles = {};
  for (const name of roleNames) {
    roles[name] = await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  // -------------------- Permissions --------------------
  const permissionsData = [
    'manage-districts',
    'view-reports',
    'assign-clusters',
    'generate-reports',
    'view-teachers',
    'audit-performance',
    'manage-teachers',
    'report-issues',
    'conduct-training',
    'access-training-material',
    'manage-school',
    'approve-leaves',
    'access-student-records',
    'submit-assessments',
    'view-marks',
    'submit-feedback',
    'upload-data',
    'edit-records',
  ];

  const permissions = {};
  for (const name of permissionsData) {
    permissions[name] = await prisma.permission.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  // -------------------- Schools --------------------
  const schoolsData = [
    {
      name: 'Shillong Model School',
      district: 'East Khasi Hills',
      block: 'Shillong Block',
      cluster: 'Shillong Cluster',
      yearOfEstablishment: 1995,
      mediumOfInstruction: 'English',
      inclusiveSchool: true,
      coEducation: true,
      totalArea: '2000 sqm',
      campusType: 'Multi-Story',
    },
    {
      name: 'Ri Bhoi Govt School',
      district: 'Ri Bhoi',
      block: 'Nongpoh Block',
      cluster: 'Ri Bhoi Cluster',
      yearOfEstablishment: 2000,
      mediumOfInstruction: 'English',
      inclusiveSchool: false,
      coEducation: true,
      totalArea: '1500 sqm',
      campusType: 'Single Story',
    },
  ];

  const schools = {};
  for (const s of schoolsData) {
    schools[s.name] = await prisma.school.upsert({
      where: {
        name_district: {
          name: s.name,
          district: s.district,
        },
      },
      update: {},
      create: s,
    });
  }

  // -------------------- Users --------------------
  const usersData = [
    {
      name: 'Mebanlang Syiem',
      role: 'State',
      email: 'mebanlang.syiem@edu.meg.gov.in',
      phoneNumber: '9863123450',
      password: 'State123!',
      permissions: ['manage-districts', 'view-reports'],
      assignedSchools: [],
    },
    {
      name: 'Daphisha Kharshiing',
      role: 'District',
      email: 'daphisha.kharshiing@deo.meg.gov.in',
      phoneNumber: '9436112345',
      password: 'District123!',
      permissions: ['assign-clusters', 'generate-reports'],
      assignedSchools: ['Ri Bhoi Govt School'],
    },
    {
      name: 'Badondor Nongrum',
      role: 'Cluster',
      email: 'badondor.nongrum@cluster.gov.in',
      phoneNumber: '8798654321',
      password: 'Cluster123!',
      permissions: ['view-teachers', 'audit-performance'],
      assignedSchools: ['Shillong Model School'],
    },
    {
      name: 'Rilang Marak',
      role: 'Block',
      email: 'rilang.marak@block.gov.in',
      phoneNumber: '8799111222',
      password: 'Block123!',
      permissions: ['manage-teachers', 'report-issues'],
      assignedSchools: ['Ri Bhoi Govt School'],
    },
    {
      name: 'Phidalia Wahlang',
      role: 'Trainer',
      email: 'phidalia.wahlang@trainer.edu',
      phoneNumber: '9482345610',
      password: 'Trainer123!',
      permissions: ['conduct-training', 'access-training-material'],
      assignedSchools: ['Shillong Model School'],
    },
    {
      name: 'Benedict Sangma',
      role: 'Head of School',
      email: 'benedict.sangma@school.edu',
      phoneNumber: '9898112233',
      password: 'Head123!',
      permissions: ['manage-school', 'approve-leaves'],
      assignedSchools: ['Shillong Model School'],
    },
    {
      name: 'Borbora Nongbri',
      role: 'Teacher',
      email: 'borbora.nongbri@teacher.edu',
      phoneNumber: '9101234567',
      password: 'Teacher123!',
      permissions: ['access-student-records', 'submit-assessments'],
      assignedSchools: ['Shillong Model School'],
    },
    {
      name: 'Elvira Momin',
      role: 'Student',
      email: 'elvira.momin@student.edu',
      phoneNumber: '9304567890',
      password: 'Student123!',
      permissions: ['view-marks', 'submit-feedback'],
      assignedSchools: ['Shillong Model School'],
    },
    {
      name: 'Samantha Khongwir',
      role: 'Data Entry Operator',
      email: 'samantha.khongwir@deo.edu',
      phoneNumber: '9771122334',
      password: 'DEO123!',
      permissions: ['upload-data', 'edit-records'],
      assignedSchools: ['Shillong Model School'],
    },
  ];

  for (const u of usersData) {
    const hashedPassword = await bcrypt.hash(u.password, 10);

    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: {
        name: u.name,
        email: u.email,
        phoneNumber: u.phoneNumber,
        password: hashedPassword,
        roleId: roles[u.role].id,
        joinDate: new Date(),
      },
    });

    // Assign permissions
    for (const perm of u.permissions) {
      await prisma.user.update({
        where: { id: user.id },
        data: { permissions: { connect: { id: permissions[perm].id } } },
      });
    }

    // Assign schools
    for (const schoolName of u.assignedSchools) {
      await prisma.userSchool.upsert({
        where: {
          userId_schoolId: {
            userId: user.id,
            schoolId: schools[schoolName].id,
          },
        },
        update: {},
        create: {
          userId: user.id,
          schoolId: schools[schoolName].id,
        },
      });
    }
  }

  // -------------------- Head of School --------------------
  await prisma.headOfSchool.upsert({
    where: { schoolId: schools['Shillong Model School'].id },
    update: {},
    create: {
      schoolId: schools['Shillong Model School'].id,
      name: 'Benedict Sangma',
      designation: 'Principal',
      holdingChargeSince: '2020',
      academicQualification: 'M.Ed',
      professionalQualification: 'B.Ed',
      dateOfJoining: new Date('2020-06-01'),
      teachingExperience: '15 years',
      contactNumber: '9898112233',
      email: 'benedict.sangma@school.edu',
    },
  });

  console.log('Seeding completed with passwords!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
