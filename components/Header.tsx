'use client';

import Image from 'next/image';
import React from 'react';
import Emblem_of_Meghalaya from '../assets/Emblem_of_Meghalaya.png';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Fake auth for now – can replace with real logic later
  const isAuthenticated = false;

  const handleLogin = () => {
    router.push('/login');
  };

  const isLandingPage = pathname === '/';
  const isAdminDashboard = pathname?.startsWith('/admin') || pathname?.startsWith('/dashboard');

  return (
    <header className="bg-white py-4 px-6 border-b-4 border-green-700 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-auto relative">
            <Image
              src={Emblem_of_Meghalaya}
              alt="Meghalaya Government Emblem"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Government of Meghalaya</h1>
            <h2 className="text-sm text-gray-600">
              {isAdminDashboard ? 'Education Department - Admin Dashboard' : 'Education Administration Portal'}
            </h2>
          </div>
        </div>

        {/* Right-side actions */}
        {isLandingPage && !isAuthenticated && (
          <button
            onClick={handleLogin}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md transition font-medium"
          >
            Portal Login
          </button>
        )}

        {isAdminDashboard && (
          <div className="h-10 w-10 rounded-full bg-green-100 border-2 border-green-700 flex items-center justify-center text-green-800 font-medium">
            A
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
