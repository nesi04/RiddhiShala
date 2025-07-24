import React from 'react';
import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import Link from 'next/link';

const DataCompletionStats = () => {
  // Sample data - in a real app this would come from your API
  const completionData = [
    {
      title: "Teacher Profiles",
      completed: 78,
      total: 120,
      lastUpdated: "2025-07-20",
      status: "in-progress",
      responsible: "Teachers"
    },
    {
      title: "Student Records",
      completed: 92,
      total: 150,
      lastUpdated: "2025-07-22",
      status: "in-progress",
      responsible: "Headmasters"
    },
    {
      title: "Infrastructure Reports",
      completed: 45,
      total: 60,
      lastUpdated: "2025-07-18",
      status: "almost-complete",
      responsible: "Headmasters"
    },
    {
      title: "Exam Results",
      completed: 30,
      total: 60,
      lastUpdated: "2025-07-15",
      status: "needs-attention",
      responsible: "Teachers"
    },
    {
      title: "Attendance Records",
      completed: 58,
      total: 60,
      lastUpdated: "2025-07-23",
      status: "complete",
      responsible: "Teachers"
    },
    {
      title: "Training Completion",
      completed: 40,
      total: 120,
      lastUpdated: "2025-07-10",
      status: "needs-attention",
      responsible: "Teachers"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'complete': return 'bg-green-100 text-green-800';
      case 'almost-complete': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-red-100 text-red-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'complete': return <CheckCircle2 className="text-green-600" size={16} />;
      case 'almost-complete': return <CheckCircle2 className="text-blue-600" size={16} />;
      case 'in-progress': return <Clock className="text-yellow-600" size={16} />;
      default: return <AlertCircle className="text-red-600" size={16} />;
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Data Completion Progress</h2>
        <Link href="/admin/ProgressReports" className="text-green-700 hover:underline text-sm font-medium">
          View Detailed Reports
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {completionData.map((item, index) => {
          const percentage = Math.round((item.completed / item.total) * 100);
          const slug = item.title.toLowerCase().replace(/\s+/g, '-');
          
          return (
            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition">
              <Link href={`/admin/progress/${slug}`} className="block">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(item.status)} flex items-center`}>
                    {getStatusIcon(item.status)}
                    <span className="ml-1 capitalize">{item.status.replace('-', ' ')}</span>
                  </span>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        percentage >= 90 ? 'bg-green-500' :
                        percentage >= 70 ? 'bg-blue-500' :
                        percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                  <div>
                    <p className="text-gray-500">Completed</p>
                    <p className="font-medium">{item.completed}/{item.total}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Responsible</p>
                    <p className="font-medium">{item.responsible}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Last Updated</p>
                    <p className="font-medium">
                      {new Date(item.lastUpdated).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Remaining</p>
                    <p className="font-medium">{item.total - item.completed}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DataCompletionStats;