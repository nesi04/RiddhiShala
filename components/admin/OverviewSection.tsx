'use client';

import React from 'react';
import { userData } from '../../constants/userData';
import { useRouter } from 'next/navigation';
import { ChevronRight, Users, School, ClipboardList, UserCheck } from 'lucide-react';
import Link from 'next/link';

type UserRole = 'School Admins' | 'Teachers' | 'Students' | string;

const OverallProgressSection = () => {
  const router = useRouter();

  const handleRoleClick = (role: string) => {
    // Convert role to URL-friendly format (lowercase, replace spaces with hyphens)
    const rolePath = role.toLowerCase().replace(/\s+/g, '-').replace('/', '-');
    router.push(`/admin/users/${rolePath}`);
  };

  // Icons mapping for different roles with proper typing
  const roleIcons: Record<UserRole, React.JSX.Element> = {
    'School Admins': <School className="text-green-600" size={24} />,
    'Teachers': <UserCheck className="text-blue-600" size={24} />,
    'Students': <Users className="text-purple-600" size={24} />,
    'Default': <ClipboardList className="text-gray-600" size={24} />
  };

  // Get icon for role with proper typing
  const getRoleIcon = (role: UserRole): React.JSX.Element => {
    return roleIcons[role] || roleIcons['Default'];
  };

  return (
    <section className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <ClipboardList className="text-green-700 mr-2" size={20} />
          User Progress Overview
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {userData.slice(0, 3).map((user, index) => (
          <div
            key={index}
            onClick={() => handleRoleClick(user.role)}
            className="cursor-pointer group flex flex-col items-center justify-between min-h-[12rem] bg-white border border-gray-200 rounded-xl p-6 transition-all hover:border-green-500 hover:shadow-md overflow-hidden"
          >
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-100 transition">
                {getRoleIcon(user.role as UserRole)}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{user.role}</h3>
              <p className="text-sm text-gray-600 mb-3">{user.description || 'Active users in system'}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{user.count.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">
                {user.change ? `${user.change} from last month` : 'Registered users'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Summary */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h3 className="font-medium text-gray-700 mb-1">Total System Users</h3>
            <p className="text-2xl font-bold text-gray-900">
              {userData.reduce((acc, user) => acc + user.count, 0).toLocaleString()}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/admin/users"
              className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              Manage Users
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverallProgressSection;