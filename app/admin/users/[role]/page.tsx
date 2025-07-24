'use client';
import { useRouter, useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { fakeUsers } from '@/constants/userData';
import Link from 'next/link';
import { ChevronLeft, Download, Plus } from 'lucide-react';
import UserModal from '@/components/forms/AddUserForm';

const RoleUsersPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (data: any) => {
    console.log("New user added:", data);
    // Add your user logic here
    setShowModal(false);
  };
  const router = useRouter();
  const params = useParams();

  const roleRaw = params?.role;
  const roleStr = typeof roleRaw === 'string'
    ? roleRaw
    : Array.isArray(roleRaw)
      ? roleRaw[0]
      : '';

  const users = useMemo(() => {
    return fakeUsers.filter(u =>
      u.role.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-') === roleStr
    );
  }, [roleStr]);

  const handleRowClick = (id: string) => {
    router.push(`/admin/users/${roleStr}/${id}`);
  };

  if (!roleStr) {
    return (
      <div className="p-6 text-red-600 font-semibold">
        Invalid or missing role in URL.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Link
          href="/admin/users"
          className="flex items-center text-sm text-green-700 hover:text-green-800"
        >
          <ChevronLeft className="mr-1" size={16} />
          Back to User Management
        </Link>
      </div>

      <h1 className="text-2xl font-bold capitalize mb-6">
        {roleStr.replace(/-/g, ' ')} Users
      </h1>
      <div className="flex space-x-3">
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
        >
          <Plus className="mr-2" size={16} />
          Add User
        </button>
        <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition flex items-center">
          <Download className="mr-2" size={16} />
          Export
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider">District</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map(user => (
              <tr
                key={user.id}
                onClick={() => handleRowClick(user.id)}
                className="hover:bg-gray-50 cursor-pointer transition"
              >
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${user.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : user.status === 'Inactive'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.district}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UserModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export default RoleUsersPage;