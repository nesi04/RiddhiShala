import React from 'react';
import Footer from '@/components/Footer';
import AdminSidebar from '@/components/AdminSidebar';
import {
  LucideChevronRight,
} from 'lucide-react';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800">Admin Dashboard</div>
        <div className="rounded-full bg-gray-300 h-10 w-10"></div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Content Area */}
        <main className="flex-grow p-6">
          {/* Overall Progress Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Overall Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <p className="text-gray-600">State</p>
                <p className="text-2xl font-bold text-gray-800">70 users</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <p className="text-gray-600">District</p>
                <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" className="mx-auto h-20 w-20 rounded-md" />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <p className="text-gray-600">DEO</p>
                <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" className="mx-auto h-20 w-20 rounded-md" />
              </div>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                See more <LucideChevronRight className="inline h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 mt-4 text-center">
              <p className="text-gray-600 mb-2">View all Schools</p>
              <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" className="mx-auto h-20 w-full rounded-md" />
            </div>
          </section>

          {/* Flagged Issues Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Flagged Issues</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" className="mx-auto h-20 w-full object-cover rounded-md mb-4" />
              <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" className="mx-auto h-20 w-full object-cover rounded-md" />
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                See more <LucideChevronRight className="inline h-4 w-4 ml-1" />
              </a>
            </div>
          </section>

          {/* Data Completion Stats Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Data Completion Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="bg-white rounded-full shadow-md p-4 flex justify-center items-center">
                  <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" className="h-32 w-32 rounded-full object-cover" />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default App;
