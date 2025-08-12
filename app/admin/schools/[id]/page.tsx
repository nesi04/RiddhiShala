'use client';

import { useEffect, useState, ChangeEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

interface School {
  id: number;
  name: string;
  yearOfEstablishment?: number;
  district?: string;
  block?: string;
  cluster?: string;
  villageTown?: string;
  management?: string;
  schoolType?: string;
  mediumOfInstruction?: string;
  inclusiveSchool?: boolean;
  facilitiesForCWSN?: string;
  vocationalTrades?: string;
  availableCourses?: string;
  coEducation?: boolean;
  campusType?: string;
  totalArea?: string;
  campusSize?: string;
  // Add other fields as needed
}

export default function SchoolDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [school, setSchool] = useState<School | null>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<Partial<School>>({});

  useEffect(() => {
    async function fetchSchool() {
      setLoading(true);
      const res = await fetch(`/api/schools/${id}`);
      if (res.ok) {
        const data: School = await res.json();
        setSchool(data);
        setFormData(data); // initialize form with fetched data
      } else {
        setSchool(null);
      }
      setLoading(false);
    }
    if (id) fetchSchool();
  }, [id]);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, type, value } = e.target;
    let val: string | boolean = value;

    if (type === 'checkbox') {
      val = (e.target as HTMLInputElement).checked;
    }

    setFormData(prev => ({
      ...prev,
      [name]: val,
    }));
  }

  async function handleSave() {
    try {
      const res = await fetch(`/api/schools/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const updated = await res.json();
        setSchool(updated);
        setEditMode(false);
        alert('School updated successfully');
      } else {
        alert('Failed to update school');
      }
    } catch (error) {
      console.error(error);
      alert('Error updating school');
    }
  }

  async function handleDelete() {
    if (!confirm('Are you sure you want to delete this school?')) return;
    try {
      const res = await fetch(`/api/schools/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        alert('School deleted successfully');
        router.push('/admin/schools'); // redirect back to list
      } else {
        alert('Failed to delete school');
      }
    } catch (error) {
      console.error(error);
      alert('Error deleting school');
    }
  }

  function generatePDF() {
    if (!school) return;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('School Report', 14, 22);
    doc.setFontSize(12);
    let y = 30;

    Object.entries(school).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        const displayVal = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value);
        doc.text(`${key}: ${displayVal}`, 14, y);
        y += 10;
        if (y > 280) { // Add new page if too long
          doc.addPage();
          y = 20;
        }
      }
    });

    doc.save(`school-report-${school.id}.pdf`);
  }

  async function generateWord() {
    if (!school) return;

    const paragraphs = Object.entries(school).map(([key, value]) => {
      const displayVal = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value ?? 'Not specified';
      return new Paragraph({
        children: [
          new TextRun({ text: `${key}: `, bold: true }),
          new TextRun(String(displayVal)),
        ],
      });
    });

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "School Report",
              heading: "Heading1",
              spacing: { after: 300 },
            }),
            ...paragraphs,
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `school-report-${school.id}.docx`);
  }

  if (loading) return <p>Loading...</p>;
  if (!school) return <p>School not found</p>;

  // Fields to display and edit
  const fields: { label: string; name: keyof School; type?: string }[] = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Year Of Establishment', name: 'yearOfEstablishment', type: 'number' },
    { label: 'District', name: 'district', type: 'text' },
    { label: 'Block', name: 'block', type: 'text' },
    { label: 'Cluster', name: 'cluster', type: 'text' },
    { label: 'Village/Town', name: 'villageTown', type: 'text' },
    { label: 'Management', name: 'management', type: 'text' },
    { label: 'School Type', name: 'schoolType', type: 'text' },
    { label: 'Medium Of Instruction', name: 'mediumOfInstruction', type: 'text' },
    { label: 'Inclusive School', name: 'inclusiveSchool', type: 'checkbox' },
    { label: 'Facilities For CWSN', name: 'facilitiesForCWSN', type: 'text' },
    { label: 'Vocational Trades', name: 'vocationalTrades', type: 'text' },
    { label: 'Available Courses', name: 'availableCourses', type: 'text' },
    { label: 'Co-Education', name: 'coEducation', type: 'checkbox' },
    { label: 'Campus Type', name: 'campusType', type: 'text' },
    { label: 'Total Area', name: 'totalArea', type: 'text' },
    { label: 'Campus Size', name: 'campusSize', type: 'text' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">School Details</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? 'Cancel Edit' : 'Edit School'}
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={generatePDF}
        >
          Download PDF
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          onClick={generateWord}
        >
          Download Word
        </button>
      </div>

      {fields.map(({ label, name, type = 'text' }) => (
        <div key={name as string} className="mb-3">
          <label className="block font-semibold mb-1">{label}:</label>
          {editMode ? (
            type === 'checkbox' ? (
              <input
                type="checkbox"
                name={name as string}
                checked={Boolean(formData[name])}
                onChange={handleChange}
                className="h-5 w-5"
              />
            ) : (
              <input
                type={type}
                name={name as string}
                value={
                  formData[name] !== undefined && formData[name] !== null
                    ? String(formData[name])
                    : ''
                }
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
              />
            )
          ) : (
            <p>{String(school[name] ?? 'Not specified')}</p>
          )}
        </div>
      ))}

      {editMode && (
        <div className="flex space-x-4 mt-6">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
