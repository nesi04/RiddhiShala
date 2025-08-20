"use client";
import { ChevronRight, Router, School } from "lucide-react";
import FlaggedIssuesSection from "@/components/admin/FlaggedIssuesSection";
import Link from "next/link";
import DataCompletionStats from "@/components/admin/DataCompletionStats";
import OverallProgressSection from "@/components/admin/OverviewSection";
import Header from "@/components/Header";

import { useRouter } from "next/navigation";


const App = () => {
  const router = useRouter();
  const handleLogout = () => {
 
    router.push('/login');
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Government Header Banner */}
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-6">
        {/* Overall Progress Section */}
        <section className="mb-8">
          <OverallProgressSection />
          <div className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-green-50 to-gray-50 hover:from-green-100 hover:to-gray-100 transition-all duration-300 shadow-sm border border-gray-200 hover:border-green-300 mt-6">
            <Link
              href={'/admin/schools'}
              className="flex items-center justify-center py-5 px-6 transition-colors duration-200"
            >
              <span className="text-lg font-semibold text-green-700 group-hover:text-green-800 flex items-center">
                View All Schools
                <ChevronRight
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </section>

        {/* Flagged Issues Section */}
        <FlaggedIssuesSection />

        {/* Data Completion Stats Section */}
        <DataCompletionStats />
      </div>
    </div>
  );
};

export default App;