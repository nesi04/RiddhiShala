import { flaggedIssues } from "@/constants/flaggedIssues";
import { notFound } from "next/navigation";
import { Flag, Home } from "lucide-react";
import Link from "next/link";

type IssueDetailsProps = {
  params: { id: string };
};

export default function IssueDetailsPage({ params }: IssueDetailsProps) {
  const issue = flaggedIssues.find((item) => item.id === params.id);

  if (!issue) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Link href="/admin" className="hover:text-green-700 flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Dashboard
            </Link>
            <span className="mx-1">/</span>
            <Link href="/admin/flags" className="hover:text-green-700 flex items-center">
              <Flag className="h-4 w-4 mr-1" />
              Flagged Issues
            </Link>
            <span className="mx-1">/</span>
            <span className="text-green-700">Issue Details</span>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <Flag className="text-red-500 mr-2" size={24} />
              Issue Details: {issue.id}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-6 mt-5">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Basic Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Reported Date</p>
                    <p className="font-medium">{issue.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Reported By</p>
                    <p className="font-medium">{issue.reporter}</p>
                    <p className="text-sm text-gray-600">{issue.school}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Class / Room</p>
                    <p className="font-medium">{issue.room}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-gray-700">{issue.description}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Issue Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">{issue.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium">{issue.status}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Attachment</h2>
                <div className="border border-gray-200 rounded overflow-hidden">
                  {issue.attachmentUrl ? (
                    <img 
                      src={issue.attachmentUrl} 
                      alt="Issue attachment" 
                      className="w-full h-64 object-contain bg-gray-100"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400">
                      No attachment available
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}