"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { schools } from "../constants/schoolData";
import { ChevronDown, School, MapPin, Users, User } from 'lucide-react';

export default function SchoolTable() {
  const router = useRouter();
  const [schoolFilter, setSchoolFilter] = useState("All");
  const [districtFilter, setDistrictFilter] = useState("All");

  // Generate unique dropdown options
  const schoolOptions = ["All", ...new Set(schools.map((s) => s.name))];
  const districtOptions = ["All", ...new Set(schools.map((s) => s.district))];

  // Filter logic
  const filteredSchools = schools.filter((school) => {
    if (schoolFilter !== "All" && school.name !== schoolFilter) return false;
    if (districtFilter !== "All" && school.district !== districtFilter) return false;
    return true;
  });

  // Row click handler
  const handleRowClick = (id: string) => {
    router.push(`/admin/schools/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <School className="text-green-600 mr-2" size={20} />
          Schools Overview
        </h2>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none min-w-[180px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <School size={16} />
            </div>
            <select
              className="pl-10 pr-8 py-2 w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 appearance-none bg-white"
              value={schoolFilter}
              onChange={(e) => setSchoolFilter(e.target.value)}
            >
              {schoolOptions.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          <div className="relative flex-1 sm:flex-none min-w-[180px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <MapPin size={16} />
            </div>
            <select
              className="pl-10 pr-8 py-2 w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 appearance-none bg-white"
              value={districtFilter}
              onChange={(e) => setDistrictFilter(e.target.value)}
            >
              {districtOptions.map((district) => (
                <option key={district} value={district}>{district}</option>
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
                School Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                District
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <User className="mr-1" size={14} /> Staff
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <Users className="mr-1" size={14} /> Students
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredSchools.map((school) => (
              <tr
                key={school.id}
                onClick={() => handleRowClick(school.id)}
                className="hover:bg-green-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{school.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{school.district}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{school.staff}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{school.students}</div>
                </td>
              </tr>
            ))}
            {filteredSchools.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                  No schools match the selected filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      {filteredSchools.length > 0 && (
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 text-xs text-gray-500">
          Showing {filteredSchools.length} of {schools.length} schools
        </div>
      )}
    </div>
  );
}