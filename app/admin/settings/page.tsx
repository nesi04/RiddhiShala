"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
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
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useRouter } from 'next/navigation';
import { logout } from '@/utils/auth';

const SettingsPage = () => {
    const router = useRouter();
    const handleLogout = () => {
      logout();
      router.push('/login');
    };
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="flex items-center justify-between h-16 px-6">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Settings</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <HelpCircle className="text-gray-500 dark:text-gray-400" size={20} />
              </button>
              <button className="relative">
                <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  <User size={18} />
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Settings Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Account Settings</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your account preferences</p>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <SettingRow 
                  label="Change Email" 
                  description="Update your email address" 
                  icon={<Mail size={18} className="text-blue-500" />} 
                />
                <SettingRow 
                  label="Change Password" 
                  description="Set a new password" 
                  icon={<Lock size={18} className="text-green-500" />} 
                />
                <SettingRow 
                  label="Login History" 
                  description="View recent account activity" 
                  icon={<History size={18} className="text-purple-500" />} 
                />
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                      {typeof window !== "undefined" && document.documentElement.classList.contains("dark") ? (
                        <Moon size={18} className="text-amber-500" />
                      ) : (
                        <Sun size={18} className="text-amber-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Theme</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Switch between light and dark mode</p>
                    </div>
                  </div>
                  <ThemeSwitcher />
                </div>
                <SettingRow 
                  label="Help & Support" 
                  description="Get help with your account" 
                  icon={<HelpCircle size={18} className="text-red-500" />} 
                />
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <button onClick={handleLogout} className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                  <LogOut size={18} />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const SettingRow = ({
  label,
  description,
  icon,
}: {
  label: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link href="#" className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
            {icon}
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">{label}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
          </div>
        </div>
        <ChevronRight className="text-gray-400" size={18} />
      </div>
    </Link>
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
    // You might want to save preference to localStorage here
    localStorage.setItem('theme', html.classList.contains("dark") ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-600 transition-colors"
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        isDarkMode ? 'translate-x-6' : 'translate-x-1'
      }`} />
    </button>
  );
};

export default SettingsPage;