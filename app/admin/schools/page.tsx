import SchoolTable from "@/components/SchoolTable";
export default function Flags() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Admin’s Dashboard - All Schools</h1>
      <SchoolTable/>
    </div>
  );
}