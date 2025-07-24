'use client'
import { useParams, useRouter } from 'next/navigation';
import { CheckCircle2, AlertCircle, Clock, ChevronLeft, Download, Bell, History } from 'lucide-react';
import Link from 'next/link';
import { completionData } from '@/constants/completionData';
// Enhanced data structure

const getStatusColor = (status: string) => {
  switch (status) {
    case 'complete': return 'bg-green-100 text-green-800';
    case 'almost-complete': return 'bg-blue-100 text-blue-800';
    case 'in-progress': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-red-100 text-red-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'complete': return <CheckCircle2 className="text-green-600" size={20} />;
    case 'almost-complete': return <CheckCircle2 className="text-blue-600" size={20} />;
    case 'in-progress': return <Clock className="text-yellow-600" size={20} />;
    default: return <AlertCircle className="text-red-600" size={20} />;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case 'critical': return 'bg-red-100 text-red-800';
    case 'high': return 'bg-orange-100 text-orange-800';
    case 'medium': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const ProgressReportDetail = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;

  const report = completionData.find(item => item.slug === slug);

  if (!report) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Report Not Found</h1>
          <p className="text-gray-600 mb-6">The requested report could not be found.</p>
          <Link href="/admin/progress" className="inline-flex items-center text-green-700 hover:underline">
            <ChevronLeft size={18} className="mr-1" /> Back to all reports
          </Link>
        </div>
      </div>
    );
  }

  const percentage = Math.round((report.completed / report.total) * 100);
  const remainingDays = Math.ceil((new Date(report.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/admin/progress" className="inline-flex items-center text-green-700 hover:underline">
            <ChevronLeft size={18} className="mr-1" /> Back to all reports
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{report.title}</h1>
                <p className="text-gray-600 mt-2">{report.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-2">
                <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(report.status)} flex items-center justify-center`}>
                  {getStatusIcon(report.status)}
                  <span className="ml-1 capitalize">{report.status.replace('-', ' ')}</span>
                </span>
                <span className={`text-sm px-3 py-1 rounded-full ${getPriorityColor(report.priority)} flex items-center justify-center`}>
                  <span className="capitalize">{report.priority} Priority</span>
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6">
            {/* Left Column - Progress and Details */}
            <div className="lg:col-span-2 p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
              {/* Progress Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Completion Progress</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{percentage}% ({report.completed}/{report.total})</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${percentage >= 90 ? 'bg-green-500' :
                          percentage >= 70 ? 'bg-blue-500' :
                            percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500">Responsible</p>
                      <p className="font-medium">{report.responsible}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500">Last Updated</p>
                      <p className="font-medium">
                        {new Date(report.lastUpdated).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500">Remaining</p>
                      <p className="font-medium">{report.total - report.completed} items</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500">Deadline</p>
                      <p className={`font-medium ${remainingDays <= 7 ? 'text-red-600' : 'text-gray-800'}`}>
                        {new Date(report.deadline).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short'
                        })} ({Math.floor(remainingDays)} days)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Requirements</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    {report.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 mt-1 mr-2">
                          <CheckCircle2 className="text-green-500" size={16} />
                        </span>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Updates and Actions */}
            <div className="p-6">
              {/* Updates Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <History className="mr-2" size={18} /> Recent Updates
                </h2>
                <div className="space-y-4">
                  {report.updates.map((update, index) => (
                    <div key={index} className="border-l-2 border-gray-300 pl-4 py-1">
                      <p className="text-sm text-gray-500">
                        {new Date(update.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                      <p className="font-medium text-gray-800">{update.changes}</p>
                      <p className="text-sm text-gray-600">by {update.updatedBy}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Section */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Actions</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition">
                    <Download className="mr-2" size={18} /> Export Report
                  </button>
                  <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
                    <Bell className="mr-2" size={18} /> Notify Responsible Team
                  </button>
                  <button className="w-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition">
                    View Full History
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressReportDetail;