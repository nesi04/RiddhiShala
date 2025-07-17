import React from 'react'
import { flaggedIssues } from "@/constants/flaggedIssues";
import Link from "next/link"; // Optional: for "See more"
import { LucideChevronRight } from 'lucide-react';

const FlaggedIssuesSection = () => {
  return (
     <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Flagged Issues
            </h2>
            <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
              <table className="min-w-full table-auto text-sm text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Issue ID</th>
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">School</th>
                    <th className="p-2 border">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {[...flaggedIssues]
                    .sort(
                      (a, b) =>
                        new Date(b.timestamp).getTime() -
                        new Date(a.timestamp).getTime()
                    )
                    .slice(0, 3)
                    .map((issue) => (
                      <tr key={issue.id} className="hover:bg-gray-50">
                        <td className="p-2 border">{issue.id}</td>
                        <td className="p-2 border">{issue.date}</td>
                        <td className="p-2 border">{issue.school}</td>
                        <td className="p-2 border">{issue.category}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="text-right mt-2">
              <Link
                href="/admin/flags"
                className="text-blue-500 hover:underline text-sm"
              >
                See more <LucideChevronRight className="inline h-4 w-4 ml-1" />
              </Link>
            </div>
          </section>
  )
}

export default FlaggedIssuesSection