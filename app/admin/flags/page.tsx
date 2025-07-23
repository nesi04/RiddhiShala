
import FlaggedIssuesTable from "@/components/FlaggedIssuesTable";
import React from "react";


export default function Flags() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Flagged Issues</h1>
      <FlaggedIssuesTable    />
    </div>
  );
}
