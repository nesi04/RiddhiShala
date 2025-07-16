
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import Footer from '@/components/Footer';
import {
  Settings,
  User,
  ListChecks,
  AlertTriangle,
  LayoutDashboard,
  Activity,
  School,
  Users,
  UserSquare2,
  Building2,
  GraduationCap,
  UserRoundCog,
  LogOut,
} from "lucide-react";

const seemore = () => {
  return (
   <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800">Admin Dashboard</div>
        <div className="rounded-full bg-gray-300 h-10 w-10"></div>
      </header>

      {/* Main Content */}
      <div className="bg-white flex flex-1">
        <div className="flex flex-1">
        
          {/* Sidebar */}
          
          <AdminSidebar/> 
          

          {/* Content Area */}
          <main className="flex-grow p-6">
            <div className="mb-8">
              <h1 className="text-lg font-semibold mb-4 text-gray-800">See More</h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* State Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200 transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">State</h3>
                  <p className="text-sm text-gray-500">70 users</p>
                  <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="State" className="mt-2 rounded-md" />
                </div>

                {/* District Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200 transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">District</h3>
                  <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="District" className="mt-2 rounded-md" />
                </div>

                {/* DED Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200 transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">DED</h3>
                  <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="DED" className="mt-2 rounded-md" />
                </div>

                {/* Cluster Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200 transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Cluster</h3>
                  <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Cluster" className="mt-2 rounded-md" />
                </div>

                {/* Block Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200 transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Block</h3>
                  <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Block" className="mt-2 rounded-md" />
                </div>

                {/* Trainer Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200 transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Trainer</h3>
                  <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Trainer" className="mt-2 rounded-md" />
                </div>

                {/* Headmaster/Principal Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200 transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Headmaster/Principal</h3>
                  <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Headmaster/Principal" className="mt-2 rounded-md" />
                </div>

                {/* Teacher Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200 transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Teacher</h3>
                  <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Teacher" className="mt-2 rounded-md" />
                </div>

                {/* Students Card */}
                <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200 transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Students</h3>
                  <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Students" className="mt-2 rounded-md" />
                </div>
              </div>

              {/* View All Schools Button */}
              <div className="mt-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  View All Schools
                </button>
              </div>
            </div>
          </main>
          </div>
        
      </div>

      {/* Footer */}    

      
     
    </div>
  );
};

export default seemore;
