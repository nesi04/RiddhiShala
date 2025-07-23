"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { flaggedIssues } from "../constants/flaggedIssues";

export default function FlaggedIssuesTable() {
  const router = useRouter();

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Unique school and category options
  const schoolOptions = useMemo(
    () => ["All", ...new Set(flaggedIssues.map((issue) => issue.school))],
    []
  );
  const categoryOptions = useMemo(
    () => ["All", ...new Set(flaggedIssues.map((issue) => issue.category))],
    []
  );

  // Filter logic
  const filteredIssues = useMemo(() => {
    return flaggedIssues.filter((issue) => {
      const matchesSearch =
        issue.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.school.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSchool =
        selectedSchool === "All" || issue.school === selectedSchool;

      const matchesCategory =
        selectedCategory === "All" || issue.category === selectedCategory;

      return matchesSearch && matchesSchool && matchesCategory;
    });
  }, [searchTerm, selectedSchool, selectedCategory]);

  const handleRowClick = (id: string) => {
    router.push(`/admin/flags/issue/${id}`);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by ID, school or reporter"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded border border-gray-300"
        />
        <select
          value={selectedSchool}
          onChange={(e) => setSelectedSchool(e.target.value)}
          className="p-2 rounded border border-gray-300"
        >
          {schoolOptions.map((school) => (
            <option key={school} value={school}>
              {school}
            </option>
          ))}
        </select>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 rounded border border-gray-300"
        >
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left bg-white border rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Issue ID</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">School Name</th>
            <th className="p-2 border">Reported By</th>
            <th className="p-2 border">Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredIssues.map((issue) => (
            <tr
              key={issue.id}
              onClick={() => handleRowClick(issue.id)}
              className="hover:bg-gray-100 cursor-pointer"
            >
              <td className="p-2 border">{issue.id}</td>
              <td className="p-2 border">{issue.date}</td>
              <td className="p-2 border">{issue.school}</td>
              <td className="p-2 border">{issue.reporter}</td>
              <td className="p-2 border">{issue.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredIssues.length === 0 && (
        <p className="mt-4 text-sm text-gray-500">No matching results found.</p>
      )}
    </div>
  );
}

