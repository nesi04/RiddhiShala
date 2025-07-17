import React from "react";
import { LucideChevronRight } from "lucide-react";
import FlaggedIssuesSection from "@/components/FlaggedIssuesSection";
import Link from "next/link";
import DataCompletionStats from "@/components/DataCompletionStats";
import OverallProgressSection from "@/components/OverviewSection";


const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800">
          Admin Dashboard
        </div>
        <div className="rounded-full bg-gray-300 h-10 w-10"></div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
       
        <main className="flex-grow p-6">
          {/* Overall Progress Section */}
          <section>
            <OverallProgressSection/>
            <div className="w-full rounded-full bg-gray-200 flex justify-center items-center py-5">
              <Link href={'/admin/schools'} className="text-2xl font-semibold">
               View All Schools 
              </Link>
            </div>
          </section>

          {/* Flagged Issues Section */}
         <FlaggedIssuesSection/>

          {/* Data Completion Stats Section */}
          <DataCompletionStats/>
        </main>
      </div>

      {/* Footer */}
    </div>
  );
};

export default App;
