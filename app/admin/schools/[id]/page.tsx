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
  upgradedTo?: string;
  udiseCode?: string;
  district?: string;
  block?: string;
  cluster?: string;
  villageTown?: string;
  management?: string;
  schoolType?: string;
  mediumOfInstruction?: string;
  inclusiveSchool: boolean;
  vocationalTrades?: string;
  coEducation?: boolean;
  totalArea?: string;
  campusType?: string;
  campusSize?: string;
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

  // Title
  doc.setFontSize(20);
  doc.text('School Report', 14, 20);
  doc.setFontSize(12);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 28);

  // Table-like display
  let y = 40;
  fields.forEach(({ label, name }) => {
    const value = school[name as keyof typeof school];
    const displayVal = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value ?? 'Not specified');

    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, 14, y);
    doc.setFont("helvetica", "normal");
    doc.text(displayVal, 60, y);

    y += 8;
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save(`school-report-${school.id}.pdf`);
}



async function generateWord() {
  if (!school) return;

  const paragraphs = fields.map(({ label, name }) => {
    const value = school[name as keyof typeof school];
    const displayVal = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value ?? 'Not specified');

    return new Paragraph({
      children: [
        new TextRun({ text: `${label}: `, bold: true }),
        new TextRun(displayVal),
      ],
      spacing: { after: 200 },
    });
  });

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: "School Report",
            heading: "Heading1",
            spacing: { after: 300 },
          }),
          new Paragraph({
            text: `Generated on: ${new Date().toLocaleDateString()}`,
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
  { label: 'Upgraded To', name: 'upgradedTo', type: 'text' },
  { label: 'UDISE Code', name: 'udiseCode', type: 'text' },
  { label: 'District', name: 'district', type: 'text' },
  { label: 'Block', name: 'block', type: 'text' },
  { label: 'Cluster', name: 'cluster', type: 'text' },
  { label: 'Village/Town', name: 'villageTown', type: 'text' },
  { label: 'Management', name: 'management', type: 'text' },
  { label: 'School Type', name: 'schoolType', type: 'text' },
  { label: 'Medium Of Instruction', name: 'mediumOfInstruction', type: 'text' },
  { label: 'Inclusive School', name: 'inclusiveSchool', type: 'checkbox' },
  { label: 'Vocational Trades', name: 'vocationalTrades', type: 'text' },
  { label: 'Co-Education', name: 'coEducation', type: 'checkbox' },
  { label: 'Total Area', name: 'totalArea', type: 'text' },
  { label: 'Campus Type', name: 'campusType', type: 'text' },
  { label: 'Campus Size', name: 'campusSize', type: 'text' },
];

return (
  <div className="max-w-5xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg border border-gray-200">
    <h1 className="text-3xl font-bold mb-6 text-gray-800">School Details</h1>

    {/* Action Buttons */}
    <div className="flex flex-wrap gap-3 mb-6">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => setEditMode(!editMode)}
      >
        ✏️ {editMode ? 'Cancel Edit' : 'Edit School'}
      </button>
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
        onClick={generatePDF}
      >
        📄 Download PDF
      </button>
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
        onClick={generateWord}
      >
        📝 Download Word
      </button>
    </div>

    {/* Form / Display Fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {fields.map(({ label, name, type = 'text' }) => (
        <div key={name as string} className="bg-white p-4 rounded shadow-sm border border-gray-200">
          <label className="block font-semibold mb-1 text-gray-700">{label}:</label>
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
                className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400"
              />
            )
          ) : (
            <p className="text-gray-800">{String(school[name] ?? 'Not specified')}</p>
          )}
        </div>
      ))}
    </div>

    {/* Save / Delete */}
    {editMode && (
      <div className="flex gap-4 mt-8">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          💾 Save
        </button>
        <button
          onClick={handleDelete}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          🗑️ Delete
        </button>
      </div>
    )}
  </div>
);
}