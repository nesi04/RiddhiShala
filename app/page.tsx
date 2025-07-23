import Head from "next/head";
import QuickLink from "@/components/landingpage/QuickLink";
import AdminFeature from "@/components/landingpage/AdminFeature";
import Announcement from "@/components/landingpage/Announcement";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meghalaya Education Portal - Admin Dashboard</title>
        <meta name="description" content="Official portal for school administrators and teachers" />
        <link rel="icon" href="/govt-favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <Header/>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-12 bg-gradient-to-b from-green-700 to-green-600 px-6 text-white">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              School Administration Portal
            </h1>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Essential tools for managing your school's education programs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <QuickLink title="Student Records" icon="👨‍🎓" />
              <QuickLink title="Attendance" icon="📊" />
              <QuickLink title="Lesson Plans" icon="📝" />
              <QuickLink title="School Reports" icon="📑" />
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-12 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Quick Access</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AdminFeature 
                title="Student Management"
                description="Register students, track progress, and generate reports"
                linkText="Manage Students"
                link="/students"
              />
              <AdminFeature 
                title="Teacher Resources"
                description="Access teaching materials and training programs"
                linkText="View Resources"
                link="/resources"
              />
              <AdminFeature 
                title="School Administration"
                description="Update school information and manage staff"
                linkText="School Dashboard"
                link="/school"
              />
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section className="py-6 bg-blue-50 px-6 border-t border-b border-blue-200">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Important Announcements</h3>
            <div className="space-y-3">
              <Announcement 
                title="Quarterly Reporting Deadline"
                date="15th August 2023"
                description="All school performance reports must be submitted by this date"
              />
              <Announcement 
                title="Teacher Training Workshop"
                date="22nd-24th August 2023"
                description="Register for the upcoming pedagogy training session"
              />
              <Announcement 
                title="New Assessment Guidelines"
                date="Effective Immediately"
                description="Updated evaluation framework now available"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
