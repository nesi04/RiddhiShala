import FlaggedIssuesTable from "@/components/FlaggedIssuesTable";
import React from "react";
import { Flag, Filter, Plus, Download, ChevronDown, Home } from "lucide-react";
import Link from "next/link";

export default function Flags() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Link href="/admin" className="hover:text-green-700 flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Dashboard
            </Link>
            <span className="mx-1">/</span>
            <span className="text-green-700 flex items-center">
              <Flag className="h-4 w-4 mr-1" />
              Flagged Issues
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <Flag className="text-red-500 mr-2" size={24} />
              Flagged Issues Management
            </h1>
            <div className="flex space-x-3">
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition flex items-center">
                <Plus className="mr-2" size={16} />
                New Flag
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition flex items-center">
                <Download className="mr-2" size={16} />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-6 mt-5">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <FlaggedIssuesTable />
        </div>
      </div>
    </div>
  );
}