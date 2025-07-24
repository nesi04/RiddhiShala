'use client'
import SchoolModal from "@/components/forms/AddSchoolForm";
import UserModal from "@/components/forms/AddUserForm";
import SchoolTable from "@/components/SchoolTable";
import { ChevronRight, Home, School } from 'lucide-react';
import Link from 'next/link';
import { useState } from "react";

export default function Flags() {
    const [showModal, setShowModal] = useState(false);
  
    const handleAddUser = (data: any) => {
      console.log("New user added:", data);
      // Add your user logic here
      setShowModal(false);
    };
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
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-green-700 flex items-center">
              <School className="h-4 w-4 mr-1" />
              All Schools
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <School className="text-green-600 mr-2" size={24} />
            School Management
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              All Registered Schools
            </h2>
            <div className="flex space-x-3">
              <button  onClick={() => setShowModal(true)}className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition">
                Add New School
              </button>
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition">
                Export Data
              </button>
            </div>
          </div>
          
          {/* School Table Component */}
          <div className="overflow-x-auto">
            <SchoolTable />
          </div>

          {/* Table Footer */}
          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600">
            <div>
              Showing 1 to 10 of 1245 entries
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border rounded-md hover:bg-gray-100">Previous</button>
              <button className="px-3 py-1 bg-green-700 text-white rounded-md hover:bg-green-800">1</button>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-100">2</button>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-100">3</button>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-100">Next</button>
            </div>
          </div>
        </div>
      </div>
      <SchoolModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              onSubmit={handleAddUser}
            />
          
    </div>
  );
}