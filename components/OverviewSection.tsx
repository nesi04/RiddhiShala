'use client';

import React from 'react';
import { userData } from '../constants/userData';
import { useRouter } from 'next/navigation';
import { LucideChevronRight } from 'lucide-react';

const OverallProgressSection = () => {
  const router = useRouter();

  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Overall Progress
      </h2>

      {/* Custom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {userData.slice(0, 3).map((user, index) => (
          <div
            key={index}
            onClick={() => router.push(user.link)}
            className="cursor-pointer flex flex-col items-center justify-center h-48 bg-gray-200 rounded-3xl p-4 transition hover:bg-gray-300"
          >
            <p className="text-lg font-semibold text-gray-800">{user.role}</p>
            <p className="text-xl text-gray-700">{user.count} users</p>
          </div>
        ))}
      </div>

      <div className="text-right mt-2">
        <a href="/admin/logs" className="text-blue-500 hover:underline text-sm">
          See more <LucideChevronRight className="inline h-4 w-4 ml-1" />
        </a>
      </div>
    </section>
  );
};

export default OverallProgressSection;
