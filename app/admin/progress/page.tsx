// app/admin/ProgressReports/page.tsx
import React from 'react';
import DataCompletionStats from '@/components/admin/DataCompletionStats';
import Link from 'next/link';

const ProgressReportsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Progress Reports Dashboard</h1>
        <Link 
          href="/admin" 
          className="text-sm text-green-700 hover:underline"
        >
          Back to Dashboard
        </Link>
      </div>
      
      <DataCompletionStats />
    </div>
  );
};

export default ProgressReportsPage;