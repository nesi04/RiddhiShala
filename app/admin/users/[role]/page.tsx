'use client'
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import UserModal from '@/components/forms/AddUserForm';
import { ChevronLeft, Plus, Download } from 'lucide-react';

const RoleUsersPage = () => {
  const router = useRouter();
  const params = useParams();
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Extract role param safely
  const roleParamRaw = params?.role;
  const roleParam =
    typeof roleParamRaw === 'string'
      ? roleParamRaw
      : Array.isArray(roleParamRaw)
      ? roleParamRaw.join('/')
      : '';

  useEffect(() => {
    if (!roleParam) return;

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/users/role/${roleParam}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [roleParam]);

  const handleAddUser = (data: any) => {
    console.log('New user added:', data);
    setShowModal(false);
    // Refresh users if needed
  };

  const handleRowClick = (id: string | number) => {
    router.push(`/admin/users/${roleParam}/${id}`);
  };

  if (!roleParam) return <div className="p-6 text-red-600 font-semibold">Invalid role</div>;
  if (loading) return <div className="p-6">Loading users...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Back link */}
      <button
        onClick={() => router.push('/admin/users')}
        className="flex items-center text-sm text-green-700 hover:text-green-800 mb-6"
      >
        <ChevronLeft className="mr-1" size={16} />
        Back to User Management
      </button>

      <h1 className="text-2xl font-bold capitalize mb-6">{roleParam.replace(/-/g, ' ')} Users</h1>

      <div className="flex space-x-3 mb-4">
      
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                  No users found for this role
                </td>
              </tr>
            )}
            {users.map((user) => (
              <tr
                key={user.id}
                onClick={() => handleRowClick(user.id)}
                className="hover:bg-gray-50 cursor-pointer transition"
              >
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : user.status === 'Inactive'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <UserModal isOpen={showModal} onClose={() => setShowModal(false)} onSubmit={handleAddUser} />
    </div>
  );
};

export default RoleUsersPage;
