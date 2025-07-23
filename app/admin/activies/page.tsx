
import React from 'react';
import { Search, User, Settings, Bell, LogOut } from "lucide-react";

const App = () => {
  const activityData = [
    { userId: 'John Doe', loginAttempts: 3 },
    { userId: 'Jane Smith', loginAttempts: 5 },
    { userId: 'David Lee', loginAttempts: 2 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4  sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
              alt="Logo"
              className="h-8 w-8 mr-2 rounded-full"
            />
            <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard - Activity Logs</h1>
          </div>


          <div className="flex items-center space-x-4">
            <div className="relative">
              
            </div>

            <div className="flex items-center">
              
            </div>
            
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 flex-grow">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Number of Login Attempts
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activityData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.userId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.loginAttempts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
     
    </div>
  );
};

export default App;
