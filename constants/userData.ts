// user.ts

export interface UserType {
  role: string;
  count: number;
  link: string;
  description?: string;
  change?: string;
}

export const userData: UserType[] = [
  {
    role: 'State',
    count: 70,
    link: '/state',
    description: 'State-level administrators',
    change: '+5'
  },
  {
    role: 'District',
    count: 120,
    link: '/district',
    description: 'District education officers',
    change: '+8'
  },
  
  {
    role: 'Cluster',
    count: 90,
    link: '/cluster',
    description: 'Cluster-level facilitators',
    change: '-3'
  },
  {
    role: 'Block',
    count: 100,
    link: '/block',
    description: 'Block education leaders',
    change: '+4'
  },
  {
    role: 'Trainer',
    count: 40,
    link: '/trainer',
    description: 'Certified training personnel',
    change: '0'
  },
  {
    role: 'Head of School',
    count: 85,
    link: '/headmaster',
    description: 'School heads and principals',
    change: '+6'
  },
  {
    role: 'Teacher',
    count: 200,
    link: '/teacher',
    description: 'Active teaching staff',
    change: '+10'
  },
  {
    role: 'Students',
    count: 1000,
    link: '/students',
    description: 'Enrolled students in the system',
    change: '+30'
  },
  {
    role: 'Data Entry Operator',
    count: 50,
    link: '/deo',
    description: 'Data Entry Operators',
    change: '+2'
  },
];

export interface UserDetails {
  name: string;
  role: string;
  count: number;
  id: string;
  email: string;
  phone: string;
  assignedSchools: string[];
  joinDate: string;
  lastActive: string;
  status: string;
  permissions: string[];
  address: string;
  bio: string;
  district: string;
}

export const fakeUsers: UserDetails[] = [
  {
    name: 'Mebanlang Syiem',
    role: 'State',
    count: 1,
    id: 'USR001',
    email: 'mebanlang.syiem@edu.meg.gov.in',
    phone: '9863123450',
    assignedSchools: ['Shillong Model School', 'Meghalaya Central School'],
    joinDate: '2022-01-15',
    lastActive: '2025-07-23',
    status: 'active',
    permissions: ['manage-districts', 'view-reports'],
    address: 'Laitumkhrah, Shillong, Meghalaya',
    bio: 'Oversees all education activities across the state.',
    district: 'East Khasi Hills'
  },
  {
    name: 'Daphisha Kharshiing',
    role: 'District',
    count: 1,
    id: 'USR002',
    email: 'daphisha.kharshiing@deo.meg.gov.in',
    phone: '9436112345',
    assignedSchools: ['Ri Bhoi Govt School', 'Umsning High School'],
    joinDate: '2023-03-10',
    lastActive: '2025-07-23',
    status: 'active',
    permissions: ['assign-clusters', 'generate-reports'],
    address: 'Nongpoh, Ri Bhoi, Meghalaya',
    bio: 'Coordinates education for Ri Bhoi district.',
    district: 'Ri Bhoi'
  },
  {
    name: 'Badondor Nongrum',
    role: 'Cluster',
    count: 1,
    id: 'USR003',
    email: 'badondor.nongrum@cluster.gov.in',
    phone: '8798654321',
    assignedSchools: ['Sohra Primary School', 'Laitkynsew Govt School'],
    joinDate: '2023-05-20',
    lastActive: '2025-07-22',
    status: 'inactive',
    permissions: ['view-teachers', 'audit-performance'],
    address: 'Sohra (Cherrapunjee), Meghalaya',
    bio: 'Cluster facilitator monitoring academic quality.',
    district: 'East Khasi Hills'
  },
  {
    name: 'Rilang Marak',
    role: 'Block',
    count: 1,
    id: 'USR004',
    email: 'rilang.marak@block.gov.in',
    phone: '8799111222',
    assignedSchools: ['Tura Govt School', 'Garobadha High School'],
    joinDate: '2022-08-01',
    lastActive: '2025-07-18',
    status: 'active',
    permissions: ['manage-teachers', 'report-issues'],
    address: 'Tura, West Garo Hills, Meghalaya',
    bio: 'Supervises schools at the block level in Garo Hills.',
    district: 'West Garo Hills'
  },
  {
    name: 'Phidalia Wahlang',
    role: 'Trainer',
    count: 1,
    id: 'USR005',
    email: 'phidalia.wahlang@trainer.edu',
    phone: '9482345610',
    assignedSchools: ['Mawlai Girls School'],
    joinDate: '2023-02-05',
    lastActive: '2025-07-24',
    status: 'active',
    permissions: ['conduct-training', 'access-training-material'],
    address: 'Mawlai, Shillong, Meghalaya',
    bio: 'Trainer for capacity-building of educators.',
    district: 'East Khasi Hills'
  },
  {
    name: 'Benedict Sangma',
    role: 'Head of School',
    count: 1,
    id: 'USR006',
    email: 'benedict.sangma@school.edu',
    phone: '9898112233',
    assignedSchools: ['Williamnagar Higher Secondary School'],
    joinDate: '2021-11-20',
    lastActive: '2025-07-20',
    status: 'active',
    permissions: ['manage-school', 'approve-leaves'],
    address: 'Williamnagar, East Garo Hills, Meghalaya',
    bio: 'Dedicated school leader improving student outcomes.',
    district: 'East Garo Hills'
  },
  {
    name: 'Borbora Nongbri',
    role: 'Teacher',
    count: 1,
    id: 'USR007',
    email: 'borbora.nongbri@teacher.edu',
    phone: '9101234567',
    assignedSchools: ['Nongstoin Govt Secondary School'],
    joinDate: '2020-06-15',
    lastActive: '2025-07-23',
    status: 'active',
    permissions: ['access-student-records', 'submit-assessments'],
    address: 'Nongstoin, West Khasi Hills, Meghalaya',
    bio: 'Science teacher committed to inclusive learning.',
    district: 'West Khasi Hills'
  },
  {
    name: 'Elvira Momin',
    role: 'Students',
    count: 1,
    id: 'USR008',
    email: 'elvira.momin@student.edu',
    phone: '9304567890',
    assignedSchools: ['Ampati Secondary School'],
    joinDate: '2024-04-01',
    lastActive: '2025-07-22',
    status: 'active',
    permissions: ['view-marks', 'submit-feedback'],
    address: 'Ampati, South West Garo Hills, Meghalaya',
    bio: 'Class 10 student with interest in sports.',
    district: 'South West Garo Hills'
  },
  {
    name: 'Samantha Khongwir',
    role: 'Data Entry Operator',
    count: 1,
    id: 'USR009',
    email: 'samantha.khongwir@deo.edu',
    phone: '9771122334',
    assignedSchools: ['Shillong Govt Girls School'],
    joinDate: '2023-07-12',
    lastActive: '2025-07-21',
    status: 'active',
    permissions: ['upload-data', 'edit-records'],
    address: 'Jaiaw, Shillong, Meghalaya',
    bio: 'Responsible for managing digital school records.',
    district: 'East Khasi Hills'
  }
];
