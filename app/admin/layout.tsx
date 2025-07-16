// app/admin/layout.tsx
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-gray-100">
      {/* This wraps all admin pages — each page should decide if it needs sidebar */}
      {children}
    </section>
  );
}
