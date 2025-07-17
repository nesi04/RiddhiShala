import { schools } from "@/constants/schoolData";
import { notFound } from "next/navigation";

type SchoolDetailsProps = {
  params: { id: string };
};

export default function SchoolDetailsPage({ params }: SchoolDetailsProps) {
  const school = schools.find((item) => item.id === params.id);

  if (!school) return notFound();

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Admin’s Dashboard - School Details
      </h1>

      <div className="bg-gray-100 p-6 rounded grid grid-cols-2 gap-8 max-w-4xl">
        <div>
          <p className="text-2xl font-bold">{school.name}</p>
          <p className="text-sm text-gray-500">{school.id}</p>
          <p className="mt-2">
            <span className="font-bold">District: </span>
            {school.district}
          </p>
          <p>
            <span className="font-bold">Principal: </span>
            {school.principal}
          </p>
          <p>
            <span className="font-bold">Established: </span>
            {school.established}
          </p>
          <p>
            <span className="font-bold">Status: </span>
            {school.status}
          </p>
        </div>

        <div>
          <p>
            <span className="font-bold">Address: </span>
            {school.address}
          </p>
          <p>
            <span className="font-bold">Contact: </span>
            {school.contact}
          </p>
          <p>
            <span className="font-bold">Staff Count: </span>
            {school.staff}
          </p>
          <p>
            <span className="font-bold">Students Count: </span>
            {school.students}
          </p>

          <div className="mt-4 w-full h-40 bg-gray-300 rounded overflow-hidden">
            <img
              src={school.imageUrl}
              alt={`${school.name} Image`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
