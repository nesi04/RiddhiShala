// user.ts
export interface UserType {
  role: string;
  count: number;
  link: string;
}

export const userData: UserType[] = [
  { role: 'State', count: 70, link: '/state' },
  { role: 'District', count: 120, link: '/district' },
  { role: 'DEO', count: 50, link: '/deo' },
  { role: 'Cluster', count: 90, link: '/cluster' },
  { role: 'Block', count: 100, link: '/block' },
  { role: 'Trainer', count: 40, link: '/trainer' },
  { role: 'Headmaster/Principal', count: 85, link: '/headmaster' },
  { role: 'Teacher', count: 200, link: '/teacher' },
  { role: 'Students', count: 1000, link: '/students' }
];
