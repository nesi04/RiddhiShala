'use client'
import React from 'react';
import { userData } from '../../../constants/userData';
import { useRouter } from 'next/navigation';
import { 
  Users, MapPin, Layers, BookOpen, UserCheck, School, GraduationCap, UserCog, BookUser 
} from 'lucide-react';

const UserGrid = () => {
  const router = useRouter();

  // Icon mapping for different user roles
  const getRoleIcon = (role: string) => {
    switch(role.toLowerCase()) {
      case 'state': return <UserCog className="text-blue-600" size={24} />;
      case 'district': return <MapPin className="text-green-600" size={24} />;
      case 'deo': return <Layers className="text-purple-600" size={24} />;
      case 'cluster': return <BookOpen className="text-yellow-600" size={24} />;
      case 'block': return <MapPin className="text-red-600" size={24} />;
      case 'trainer': return <UserCheck className="text-indigo-600" size={24} />;
      case 'headmaster/principal': return <School className="text-orange-600" size={24} />;
      case 'teacher': return <GraduationCap className="text-teal-600" size={24} />;
      case 'students': return <BookUser className="text-pink-600" size={24} />;
      default: return <Users className="text-gray-600" size={24} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <Users className="text-green-600 mr-2" size={24} />
        User Management Dashboard
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userData.map((user, index) => (
          <div
            key={index}
            onClick={() => router.push(user.link)}
            className="group cursor-pointer bg-white border border-gray-200 rounded-xl p-6 transition-all hover:border-green-500 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-green-50 transition mr-4">
                  {getRoleIcon(user.role)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{user.role}</h3>
                  <p className="text-sm text-gray-500">{user.description}</p>
                </div>
              </div>
              <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                user.change?.startsWith('+') 
                  ? 'bg-green-100 text-green-800' 
                  : user.change === '0' 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-red-100 text-red-800'
              }`}>
                {user.change}
              </div>
            </div>
            
            <div className="mt-4 flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900">{user.count}</p>
              <span className="text-sm text-gray-500">users</span>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(user.link);
                }}
                className="text-sm text-green-700 hover:text-green-800 hover:underline flex items-center"
              >
                View details
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserGrid;