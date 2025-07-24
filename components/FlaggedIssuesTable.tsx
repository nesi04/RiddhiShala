"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { flaggedIssues } from "../constants/flaggedIssues";
import { 
  Flag, Search, Filter, ChevronDown, AlertTriangle, 
  AlertCircle, AlertOctagon, CheckCircle2, Clock, 
  School
} from "lucide-react";

export default function FlaggedIssuesTable() {
  const router = useRouter();

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Unique filter options
  const { schoolOptions, categoryOptions, statusOptions } = useMemo(() => {
    const schools = new Set(flaggedIssues.map(issue => issue.school));
    const categories = new Set(flaggedIssues.map(issue => issue.category));
    const statuses = new Set(flaggedIssues.map(issue => issue.status));
    return {
      schoolOptions: ["All", ...Array.from(schools)],
      categoryOptions: ["All", ...Array.from(categories)],
      statusOptions: ["All", ...Array.from(statuses)]
    };
  }, []);

  // Filter logic
  const filteredIssues = useMemo(() => {
    return flaggedIssues.filter(issue => {
      const matchesSearch =
        issue.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSchool = selectedSchool === "All" || issue.school === selectedSchool;
      const matchesCategory = selectedCategory === "All" || issue.category === selectedCategory;
      const matchesStatus = selectedStatus === "All" || issue.status === selectedStatus;

      return matchesSearch && matchesSchool && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedSchool, selectedCategory, selectedStatus]);

  const handleRowClick = (id: string) => {
    router.push(`/admin/flags/issue/${id}`);
  };

  // Get icon based on severity
  const getSeverityIcon = (severity: string) => {
    switch(severity?.toLowerCase()) {
      case 'critical': return <AlertOctagon className="text-red-600" size={16} />;
      case 'high': return <AlertTriangle className="text-orange-500" size={16} />;
      default: return <AlertCircle className="text-yellow-500" size={16} />;
    }
  };

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch(status?.toLowerCase()) {
      case 'resolved': 
        return (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
            <CheckCircle2 className="mr-1" size={12} />
            Resolved
          </span>
        );
      case 'in progress':
        return (
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
            <Clock className="mr-1" size={12} />
            In Progress
          </span>
        );
      default:
        return (
          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
            <Clock className="mr-1" size={12} />
            Pending
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header with Filters */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <Flag className="text-red-500 mr-2" size={20} />
            Flagged Issues
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={16} />
              </div>
              <input
                type="text"
                placeholder="Search issues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <School className="text-gray-400" size={16} />
            </div>
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="pl-10 pr-8 py-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 appearance-none"
            >
              {schoolOptions.map(school => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="text-gray-400" size={16} />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 appearance-none"
            >
              {categoryOptions.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Flag className="text-gray-400" size={16} />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="pl-10 pr-8 py-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 appearance-none"
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Issue
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reported
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                School
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredIssues.map(issue => (
              <tr 
                key={issue.id} 
                onClick={() => handleRowClick(issue.id)}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {getSeverityIcon(issue.severity)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{issue.id}</div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">{issue.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{new Date(issue.timestamp).toLocaleDateString()}</div>
                  <div className="text-sm text-gray-500">{issue.reporter}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{issue.school}</div>
                  <div className="text-sm text-gray-500">{issue.room}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {issue.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(issue.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty state */}
      {filteredIssues.length === 0 && (
        <div className="p-6 text-center">
          <Flag className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No issues found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Footer with pagination */}
      {filteredIssues.length > 0 && (
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredIssues.length}</span> of{' '}
            <span className="font-medium">{flaggedIssues.length}</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-sm font-medium hover:bg-gray-100">
              Previous
            </button>
            <button className="px-3 py-1 border rounded-md text-sm font-medium bg-green-600 text-white">
              1
            </button>
            <button className="px-3 py-1 border rounded-md text-sm font-medium hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 border rounded-md text-sm font-medium hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}