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
      
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Report Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            href="/admin/ProgressReports/export" 
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <h3 className="font-medium text-gray-800">Export All Reports</h3>
            <p className="text-sm text-gray-500 mt-1">Download complete progress data</p>
          </Link>
          <Link 
            href="/admin/ProgressReports/configure" 
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <h3 className="font-medium text-gray-800">Configure Reports</h3>
            <p className="text-sm text-gray-500 mt-1">Customize report settings</p>
          </Link>
          <Link 
            href="/admin/ProgressReports/history" 
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <h3 className="font-medium text-gray-800">View History</h3>
            <p className="text-sm text-gray-500 mt-1">Past report versions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgressReportsPage;