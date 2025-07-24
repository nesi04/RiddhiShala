// app/admin/users/[role]/page.tsx

'use client';
import { useRouter, useParams } from 'next/navigation';
import { useMemo } from 'react';
import { fakeUsers } from '@/constants/userData';

const RoleUsersPage = () => {
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
    <div className="p-6">
      <h1 className="text-2xl font-bold capitalize mb-4">
        {roleStr.replace(/-/g, ' ')}
      </h1>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Phone</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">District</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr
              key={user.id}
              onClick={() => handleRowClick(user.id)}
              className="cursor-pointer hover:bg-green-50 transition"
            >
              <td className="p-3 border">{user.name}</td>
              <td className="p-3 border">{user.email}</td>
              <td className="p-3 border">{user.phone}</td>
              <td className="p-3 border">{user.status}</td>
              <td className="p-3 border">{user.district}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleUsersPage;
