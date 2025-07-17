"use client";

import React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  List,
  Settings,
  User,
  FileText,
  Flag,
} from 'lucide-react';

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SidebarLink = ({ href, label, icon }: SidebarLinkProps) => (
  <li>
    <Link
      href={href}
      className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600"
    >
      {icon}
      <span>{label}</span>
    </Link>
  </li>
);

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-gray-200 dark:bg-gray-800 py-4 px-6">
      <div className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
        Admin's Dashboard
      </div>
      <nav>
        <ul className="space-y-2">
          <SidebarLink href="/admin" label="Dashboard" icon={<LayoutDashboard size={20} />} />
          <SidebarLink href="/admin/logs" label="Logs" icon={<List size={20} />} />
          <SidebarLink href="/admin/settings" label="Settings" icon={<Settings size={20} />} />
          <SidebarLink href="/admin/profile" label="Profile" icon={<User size={20} />} />
          <SidebarLink href="/admin/reports" label="Progress Report" icon={<FileText size={20} />} />
          <SidebarLink href="/admin/flags" label="Flagged Issues" icon={<Flag size={20} />} />
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
