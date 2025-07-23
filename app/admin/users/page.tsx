"use client";

import React from 'react';
import Link from 'next/link';
import { Home, Users, Plus, Download, ChevronDown } from 'lucide-react';
import UserGrid from '@/components/UserGrid';
import withAuth from '@/components/withAuth';

const UserManagementPage = () => {
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
              <Users className="h-4 w-4 mr-1" />
              User Management
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <Users className="text-green-600 mr-2" size={24} />
              User Management
            </h1>
            <div className="flex space-x-3">
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition flex items-center">
                <Plus className="mr-2" size={16} />
                Add User
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
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Users
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name, email or role"
                  className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <div className="relative">
                <select
                  id="role"
                  className="pl-3 pr-8 py-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 appearance-none"
                >
                  <option value="">All Roles</option>
                  <option value="state">State Admin</option>
                  <option value="district">District Admin</option>
                  <option value="deo">DEO</option>
                  <option value="cluster">Cluster</option>
                  <option value="block">Block</option>
                  <option value="trainer">Trainer</option>
                  <option value="principal">Principal</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <div className="relative">
                <select
                  id="status"
                  className="pl-3 pr-8 py-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 appearance-none"
                >
                  <option value="">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
                District
              </label>
              <div className="relative">
                <select
                  id="district"
                  className="pl-3 pr-8 py-2 w-full rounded-md border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 appearance-none"
                >
                  <option value="">All Districts</option>
                  <option value="east">East District</option>
                  <option value="west">West District</option>
                  <option value="north">North District</option>
                  <option value="south">South District</option>
                  <option value="central">Central District</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* User Grid */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <UserGrid />
        </div>
      </div>
    </div>
  );
};

export default withAuth(UserManagementPage);