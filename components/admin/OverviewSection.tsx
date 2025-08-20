"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ClipboardList, School, UserCheck, Users } from "lucide-react";
import Link from "next/link";

type UserRole = "School Admins" | "Teachers" | "Students" | string;

interface UserSummary {
  role: string;
  description?: string;
  count: number;
  change?: number | null;
}

const roleIcons: Record<UserRole, React.ReactNode> = {
  "School Admins": <School className="text-green-600" size={24} />,
  Teachers: <UserCheck className="text-blue-600" size={24} />,
  Students: <Users className="text-purple-600" size={24} />,
  Default: <ClipboardList className="text-gray-600" size={24} />,
};

const getRoleIcon = (role: UserRole) => roleIcons[role] || roleIcons.Default;

export default function OverallProgressSection() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch("/api/admin/users-summary");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleRoleClick = (role: string) => {
    const rolePath = role.toLowerCase().replace(/\s+/g, "-").replace("/", "-");
    router.push(`/admin/users/${rolePath}`);
  };

  if (loading) return <p className="p-6 text-center text-gray-600">Loading...</p>;

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
            className="cursor-pointer group flex flex-col items-center justify-between min-h-[12rem] bg-white border border-gray-200 rounded-xl p-6 transition-all hover:border-green-500 hover:shadow-md"
          >
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-100 transition">
                {getRoleIcon(user.role)}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{user.role}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {user.description || "Active users in system"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{user.count.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">
                {user.change ? `${user.change} from last month` : "Registered users"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h3 className="font-medium text-gray-700 mb-1">Total System Users</h3>
          <p className="text-2xl font-bold text-gray-900">
            {userData.reduce((acc, u) => acc + u.count, 0).toLocaleString()}
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
    </section>
  );
}
