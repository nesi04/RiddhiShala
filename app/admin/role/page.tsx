
import React from 'react';
import {
  LayoutGrid,
  ListChecks,
  Settings,
  User,
  Activity,
  Flag,
  Search,
  FilePlus,
  UserPlus,
  Edit,
  Github,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";


const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <LayoutGrid className="mr-2 text-gray-700" size={24} />
          <h1 className="text-2xl font-semibold text-gray-800">Admin's Dashboard</h1>
        </div>
        <div className="rounded-full bg-gray-400 h-12 w-12">
          <img  src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="Profile" className="rounded-full" />
        </div>
      </header>

      {/* Main Content */}
     <div className="container mx-auto py-6">
 
          {/* Add User Section */}
           <main className="space-y-4 px-6 py-6">
          <div className="bg-white shadow-md rounded-md p-4 flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <FilePlus className="mr-2" size={16} />
              Add State users via Csv / Excel
            </button>
          </div>

          {/* Search and Add New User */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="  Search users"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
              <UserPlus className="mr-2" size={16} />
              Add a new state user
            </button>
          </div>

          {/* User List */}
          <div className="bg-white shadow-md rounded-md p-4">
            <ul>
              {/* User Item 1 */}
              <li className="border-b border-gray-200 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-700">Name</div>
                    <div className="text-sm text-gray-500">Details</div>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    <Edit className="mr-2 inline-block" size={16} />
                    Edit User
                  </button>
                </div>
              </li>

              {/* User Item 2 */}
              <li className="border-b border-gray-200 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-700">Name</div>
                    <div className="text-sm text-gray-500">Details</div>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    <Edit className="mr-2 inline-block" size={16} />
                    Edit User
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* Users in Horizontal Cards */}
         
        </main>
      </div>

      {/* Footer */}

    </div>
  );
};

export default App;
