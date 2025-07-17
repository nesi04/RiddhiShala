"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer'; // Use absolute path if your tsconfig supports it

import {
  LayoutDashboard,
  List,
  Settings,
  User,
  FileText,
  Flag,
  Mail,
  Lock,
  History,
  Sun,
  HelpCircle,
  LogOut,
  Moon,
} from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">

     

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="bg-white dark:bg-gray-700 shadow">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="text-gray-700 dark:text-gray-100 font-semibold">Settings</div>
            <div className="relative">
              <button
                className="rounded-full h-10 w-10 bg-gray-300 dark:bg-gray-600 flex items-center justify-center"
                aria-label="User Profile"
              >
                <User size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Settings Content */}
        <main className="flex-1 bg-gray-100 dark:bg-gray-900 p-8 overflow-y-scroll">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Account Settings</h2>
            <div className="grid grid-cols-1 gap-4">
              <SettingRow label="Change Email" action="Edit" icon={<Mail size={16} />} />
              <SettingRow label="Change Password" action="Edit" icon={<Lock size={16} />} />
              <SettingRow label="View Login History" action="View" icon={<History size={16} />} />
              <SettingRow label="Theme Mode" action="Toggle" icon={<Sun size={16} />} additionalContent={<ThemeSwitcher />} />
              <SettingRow label="Help & Support" action="Open" icon={<HelpCircle size={16} />} />
            </div>
            <div className="mt-6">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <LogOut className="inline mr-2" size={18} />
                Log Out
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
      
      </div>
    </div>
  );
};

const SidebarLink = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => (
  <li>
    <Link href={href} className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600">
      {icon}
      <span>{label}</span>
    </Link>
  </li>
);

const SettingRow = ({
  label,
  action,
  icon,
  additionalContent,
}: {
  label: string;
  action: string;
  icon: React.ReactNode;
  additionalContent?: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-2 text-gray-900 dark:text-white">
        {icon}
        <span>{label}</span>
      </div>
      <div className="flex items-center space-x-4">
        {additionalContent}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {action}
        </button>
      </div>
    </div>
  );
};

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== "undefined" && window.document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDarkMode(html.classList.contains("dark"));
  };

  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      {isDarkMode ? <Moon size={20} className="text-gray-700 dark:text-gray-100" /> : <Sun size={20} className="text-gray-700" />}
    </button>
    
  );
};

export default SettingsPage;
