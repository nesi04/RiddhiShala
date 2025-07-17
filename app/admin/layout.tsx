"use client";

import AdminSidebar from "@/components/AdminSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar with full height */}
      <div className="w-64 bg-gray-200 h-screen">
        <AdminSidebar />
      </div>

      {/* Main content fills remaining space */}
      <div className="flex-1 p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
}
