'use client';

import { useEffect, useState, ChangeEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType } from 'docx';
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
        setFormData(data);
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
        router.push('/admin/schools');
      } else {
        alert('Failed to delete school');
      }
    } catch (error) {
      console.error(error);
      alert('Error deleting school');
    }
  }

  // Fields
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

  function generatePDF() {
    if (!school) return;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('School Report', 14, 15);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 22);

    // Table header
    let y = 30;
    doc.setFont("helvetica", "bold");
    doc.text("Field", 14, y);
    doc.text("Value", 80, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    fields.forEach(({ label, name }) => {
      const value = school[name];
      const displayVal = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value ?? 'Not specified');

      doc.text(label, 14, y);
      doc.text(displayVal, 80, y);

      y += 6;
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save(`school-report-${school.id}.pdf`);
  }

  async function generateWord() {
    if (!school) return;

    const tableRows: TableRow[] = [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            children: [new Paragraph({ children: [new TextRun({ text: "Field", bold: true })] })],
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            children: [new Paragraph({ children: [new TextRun({ text: "Value", bold: true })] })],
          }),
        ],
      }),
      ...fields.map(({ label, name }) => {
        const value = school[name];
        const displayVal = typeof value === "boolean" ? (value ? "Yes" : "No") : String(value ?? "Not specified");

        return new TableRow({
          children: [
            new TableCell({ children: [new Paragraph(label)] }),
            new TableCell({ children: [new Paragraph(displayVal)] }),
          ],
        });
      }),
    ];

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({ children: [new TextRun({ text: "School Report", bold: true, size: 28 })] }),
            new Paragraph({ children: [new TextRun(`Generated on: ${new Date().toLocaleDateString()}`)] }),
            new Table({ rows: tableRows }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `school-report-${school.id}.docx`);
  }

  if (loading) return <p>Loading...</p>;
  if (!school) return <p>School not found</p>;

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

      {/* Table UI */}
      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-blue-100">
          <tr>
            <th className="border border-gray-300 p-2 text-left w-1/3">Field</th>
            <th className="border border-gray-300 p-2 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          {fields.map(({ label, name, type = 'text' }) => (
            <tr key={name as string}>
              <td className="border border-gray-300 p-2 font-medium">{label}</td>
              <td className="border border-gray-300 p-2">
                {editMode ? (
                  type === 'checkbox' ? (
                    <input
                      type="checkbox"
                      name={name as string}
                      checked={Boolean(formData[name])}
                      onChange={handleChange}
                      className="h-4 w-4"
                    />
                  ) : (
                    <input
                      type={type}
                      name={name as string}
                      value={formData[name] !== undefined && formData[name] !== null ? String(formData[name]) : ''}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full focus:ring-2 focus:ring-blue-400"
                    />
                  )
                ) : (
                  <span>{String(school[name] ?? 'Not specified')}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
