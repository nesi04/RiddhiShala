
import React from 'react';
import {
  Home,
  Settings,
  Flag,
  User,
  Package,
  AlertTriangle,
  Bell,
  SlidersHorizontal,
  LayoutDashboard,
  HelpCircle,
} from "lucide-react";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800">
          Admin Dashboard
        </div>
        <div className="rounded-full bg-gray-300 h-10 w-10"></div>
      </header>


      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex">

        {/* Sidebar */}
        

        {/* Main Content Area */}
        <main className="flex-1 ml-8">
          <div className="bg-white rounded-md shadow-md overflow-hidden">
            {/* User Profile Header */}
            <div className="bg-gray-200 py-3 px-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">User Profile</h2>
              <div className='relative  bg-white h-10 w-10'>
                <Flag size={30} className=""/>
              
                <div className='absolute rounded-full bg-red-300 size-5 right-[-10] top-[-10] items-center justify-center flex'>
                  1

                </div>
              </div>
            </div>

            {/* User List */}
            <div className="p-4">
              {/* Placeholder Image */}
              <img
                src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                alt="Placeholder"
                className="w-full h-64 object-cover rounded-md"
              />
              <p className="text-center mt-2 text-gray-500">Users in horizontal cards</p>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default App;
