"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, ClipboardCheck, Settings, User, FileText,
  Flag, School, Users, X
} from 'lucide-react';
import Image from 'next/image';
import MeghalyaEmblem from "../assets/Emblem_of_Meghalaya.png";

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
}

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarLink = ({ href, label, icon, isActive }: SidebarLinkProps) => (
  <li>
    <Link
      href={href}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
        isActive 
          ? 'bg-green-700 text-white shadow-md'
          : 'text-gray-700 hover:bg-green-100 hover:text-green-800'
      }`}
    >
      <span className={`${isActive ? 'text-white' : 'text-green-600'}`}>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </Link>
  </li>
);

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed z-50 top-0 left-0 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex md:flex-col`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center space-x-3 justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 relative">
            <Image 
              src={MeghalyaEmblem} 
              alt="Meghalaya Government Logo" 
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">Education Portal</h1>
            <p className="text-xs text-gray-500">Admin Dashboard</p>
          </div>
        </div>

        {/* Close button (mobile only) */}
        <button
          onClick={onClose}
          className="md:hidden text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          <SidebarLink href="/admin" label="Dashboard" icon={<LayoutDashboard size={20} />} isActive={pathname === '/admin'} />
          <SidebarLink href="/admin/schools" label="School Management" icon={<School size={20} />} isActive={pathname.startsWith('/admin/schools')} />
          <SidebarLink href="/admin/users" label="User Management" icon={<Users size={20} />} isActive={pathname.startsWith('/admin/users')} />
          <SidebarLink href="/admin/progress" label="Progress Reports" icon={<FileText size={20} />} isActive={pathname.startsWith('/admin/progress')} />
          <SidebarLink href="/admin/flags" label="Flagged Issues" icon={<Flag size={20} />} isActive={pathname.startsWith('/admin/flags')} />
          <SidebarLink href="/admin/logs" label="Logs" icon={<ClipboardCheck size={20} />} isActive={pathname.startsWith('/admin/logs')} />
        </ul>

        <div className="mt-8 pt-4 border-t border-gray-100">
          <ul className="space-y-2">
            {/* <SidebarLink href="/admin/settings" label="System Settings" icon={<Settings size={20} />} isActive={pathname.startsWith('/admin/settings')} /> */}
            <SidebarLink href="/admin/profile" label="My Profile" icon={<User size={20} />} isActive={pathname.startsWith('/admin/profile')} />
          </ul>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Government of Meghalaya</p>
        <p>Education Department</p>
      </div>
    </aside>
  );
};

export default AdminSidebar;
