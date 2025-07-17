"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { schools } from "../constants/schoolData"; // Adjust path as needed

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
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold mb-4">Schools Overview</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <select
          className="p-2 rounded border"
          value={schoolFilter}
          onChange={(e) => setSchoolFilter(e.target.value)}
        >
          {schoolOptions.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>

        <select
          className="p-2 rounded border"
          value={districtFilter}
          onChange={(e) => setDistrictFilter(e.target.value)}
        >
          {districtOptions.map((district) => (
            <option key={district}>{district}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left bg-white border rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">School Name</th>
            <th className="p-2 border">District</th>
            <th className="p-2 border">Staff</th>
            <th className="p-2 border">Students</th>
          </tr>
        </thead>
        <tbody>
          {filteredSchools.map((school) => (
            <tr
              key={school.id}
              onClick={() => handleRowClick(school.id)}
              className="hover:bg-gray-100 cursor-pointer"
            >
              <td className="p-2 border">{school.name}</td>
              <td className="p-2 border">{school.district}</td>
              <td className="p-2 border">{school.staff}</td>
              <td className="p-2 border">{school.students}</td>
            </tr>
          ))}
          {filteredSchools.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500">
                No schools match the selected filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
