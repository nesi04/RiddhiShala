
import React from 'react';
import { Flag, Activity, Users, ArrowRight, LogOut } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Admin's Dashboard - Profile</h1>
          <div className="flex items-center space-x-4">
            <button className="text-blue-500 hover:text-blue-700 focus:outline-none">Notifications</button>
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4">
        {/* Profile Section */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 rounded-full bg-gray-200">
              <img 
                src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" 
                alt="Profile Placeholder" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-600">You are logged in as: Admin</p>
            </div>
          </div>
        </section>

        {/* Dashboard Actions */}
        <section className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Dashboard Actions</h3>
          <nav>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <Flag className="w-5 h-5 text-gray-500" />
                  <span>Go to Settings</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <Activity className="w-5 h-5 text-gray-500" />
                  <span>View Activity Logs</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span>Manage Users</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="mt-6">
            <button className="bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 mt-8">
        <div className="container mx-auto px-4 flex justify-center space-x-6 text-gray-600">
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500">Terms of Service</a>
          <a href="#" className="hover:text-blue-500">Help Center</a>
        </div>
      </footer>
    </div>
  );
};

export default SettingsPage;
