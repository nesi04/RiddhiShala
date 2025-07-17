import { flaggedIssues } from "@/constants/flaggedIssues";
import { notFound } from "next/navigation";

type IssueDetailsProps = {
  params: { id: string };
};

export default function IssueDetailsPage({ params }: IssueDetailsProps) {
  const issue = flaggedIssues.find((item) => item.id === params.id);

  if (!issue) return notFound();

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin’s Dashboard - Issues Details</h1>

      <div className="bg-gray-100 p-6 rounded grid grid-cols-2 gap-8 max-w-4xl">
        <div>
          <p className="font-bold text-lg">{issue.id}</p>
          <p>{issue.date}</p>

          <div className="mt-4">
            <p className="font-bold">Reported By</p>
            <p>{issue.reporter}</p>
            <p className="text-sm">{issue.school}</p>
          </div>

          <div className="mt-4">
            <p className="font-bold">Class / Room</p>
            <p>{issue.room}</p>
          </div>

          <div className="mt-4">
            <p className="font-bold">Description</p>
            <p>{issue.description}</p>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <p className="font-bold">Issue Category</p>
            <p>{issue.category}</p>
          </div>

          <div className="mb-4">
            <p className="font-bold">Status</p>
            <p>{issue.status}</p>
          </div>

          <div className="mb-4">
            <p className="font-bold">Attachment</p>
            <div className="w-full h-40 bg-gray-400 rounded overflow-hidden">
              {/* Placeholder for image or PDF preview */}
              <img src={issue.attachmentUrl} alt="Attachment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
