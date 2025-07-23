import React from 'react';
import { flaggedIssues } from "@/constants/flaggedIssues";
import Link from "next/link";
import { ChevronRight, Flag, AlertTriangle, AlertCircle, AlertOctagon } from 'lucide-react';

const FlaggedIssuesSection = () => {
  // Icon mapping based on issue severity/category
  const getIssueIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'critical':
        return <AlertOctagon className="text-red-600" size={16} />;
      case 'high':
        return <AlertTriangle className="text-orange-500" size={16} />;
      default:
        return <AlertCircle className="text-yellow-500" size={16} />;
    }
  };

  return (
    <section className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <Flag className="text-red-500 mr-2" size={20} />
          Flagged Issues
        </h2>
        <Link
          href="/admin/flags"
          className="text-green-700 hover:underline flex items-center text-sm font-medium"
        >
          View All Issues <ChevronRight className="ml-1" size={16} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Issue
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Reported
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                School
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[...flaggedIssues]
              .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
              .slice(0, 5)
              .map((issue) => (
                <tr 
                  key={issue.id} 
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => {/* Add click handler for issue details */}}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {getIssueIcon(issue.severity || issue.category)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{issue.id}</div>
                        <div className="text-sm text-gray-500">{issue.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(issue.timestamp).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{issue.school}</div>
                    <div className="text-sm text-gray-500">{issue.district}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      issue.status === 'Resolved' 
                        ? 'bg-green-100 text-green-800'
                        : issue.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {issue.status || 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-6 py-3 text-right text-sm">
        Showing {Math.min(5, flaggedIssues.length)} of {flaggedIssues.length} issues
      </div>
    </section>
  );
};

export default FlaggedIssuesSection;