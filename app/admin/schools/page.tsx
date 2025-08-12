// app/admin/schools/page.tsx
'use client';
import { useEffect, useState } from "react";
import SchoolModal from "@/components/forms/AddSchoolForm";
import SchoolTable from "@/components/SchoolTable";
import { ChevronRight, Home, School } from 'lucide-react';
import Link from 'next/link';

export default function SchoolPage() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchSchools() {
      const res = await fetch("/api/schools");
      const data = await res.json();
      setSchools(data);
      setLoading(false);
    }
    fetchSchools();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header omitted for brevity */}

      <div className="max-w-7xl mx-auto py-6 px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              All Registered Schools
            </h2>
            <div className="flex space-x-3">
              <button onClick={() => setShowModal(true)} className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium">
                Add New School
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <p className="p-4">Loading...</p>
            ) : (
              <SchoolTable data={schools} />
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <SchoolModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={() => {}}
        />
      )}
    </div>
  );
}
