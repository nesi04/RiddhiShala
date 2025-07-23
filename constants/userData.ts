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
    role: 'DEO',
    count: 50,
    link: '/deo',
    description: 'Data Entry Operators',
    change: '+2'
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
  }
];
