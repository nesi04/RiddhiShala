'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Users, MapPin, Layers, BookOpen, UserCheck, School, GraduationCap, UserCog, BookUser 
} from 'lucide-react';

interface Role {
  name: string;
}

interface User {
  id: number;
  role: Role;
  isDisabled: boolean;
}

interface UserGridProps {
  users: User[];
  refreshUsers?: () => void;
}

const UserGrid: React.FC<UserGridProps> = ({ users }) => {
  const router = useRouter();

  // Aggregate users by role
  const roleMap: Record<string, { count: number; disabled: number }> = {};
  users.forEach(user => {
    const roleName = user.role?.name || 'Unknown';
    if (!roleMap[roleName]) roleMap[roleName] = { count: 0, disabled: 0 };
    roleMap[roleName].count += 1;
    if (user.isDisabled) roleMap[roleName].disabled += 1;
  });

  const getRoleIcon = (roleName: string) => {
    switch(roleName.toLowerCase()) {
      case 'state': return <UserCog className="text-blue-600" size={24} />;
      case 'district': return <MapPin className="text-green-600" size={24} />;
      case 'deo': return <Layers className="text-purple-600" size={24} />;
      case 'cluster': return <BookOpen className="text-yellow-600" size={24} />;
      case 'block': return <MapPin className="text-red-600" size={24} />;
      case 'trainer': return <UserCheck className="text-indigo-600" size={24} />;
      case 'headmaster/principal': return <School className="text-orange-600" size={24} />;
      case 'teacher': return <GraduationCap className="text-teal-600" size={24} />;
      case 'student': return <BookUser className="text-pink-600" size={24} />;
      default: return <Users className="text-gray-600" size={24} />;
    }
  };

const handleRoleClick = (roleName: string) => {
  const rolePath = roleName.toLowerCase().replace(/\s+/g, '-').replace('/', '-');
  router.push(`/admin/users/${rolePath}`);
};


  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(roleMap).map(([roleName, { count, disabled }]) => (
          <div
            key={roleName}
            onClick={() => handleRoleClick(roleName)}
            className="group cursor-pointer bg-white border rounded-xl p-6 transition-all hover:border-green-500 hover:shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-green-50 transition mr-4">
                {getRoleIcon(roleName)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{roleName}</h3>
                <p className="text-sm text-gray-500">
                  {count} user{count > 1 ? 's' : ''}
                </p>
              </div>
            </div>

            {disabled > 0 && (
              <span className="inline-block text-sm font-medium px-2 py-1 rounded-full bg-red-100 text-red-800">
                {disabled} disabled
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserGrid;
