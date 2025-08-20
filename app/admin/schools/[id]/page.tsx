"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { useRouter, useParams } from "next/navigation";

import { jsPDF } from "jspdf";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";

interface School {
  id: number;
  name: string;
  status?: string;
  established?: number; // Changed from yearOfEstablishment
  upgradedYear?: string; // Changed from upgradedTo
  udiseCode?: string;
  district?: string;
  block?: string;
  cluster?: string;
  village?: string; // Changed from villageTown
  management?: string;
  type?: string; // Changed from schoolType
  medium?: string;
  inclusive?: boolean;
  coed?: boolean; // Changed from coEducation
  totalArea?: string; // Changed from total
  principal?: string;
  principalSince?: string;
  principalQualification?: string;
  principalProfessionalQualification?: string;
  principalJoiningDate?: string;
  principalExperience?: string;
  principalContact?: string;
  principalEmail?: string;
  midDayMeal?: string;
  drinkingWater?: string;
  electricity?: string;
  internet?: string;
  fireSafety?: string;
  teacherPhotosDisplayed?: boolean;
}

const fields: { label: string; key: keyof School; type?: string }[] = [
  { label: "Name", key: "name", type: "text" },
  { label: "Status", key: "status", type: "text" },
  { label: "Year Of Establishment", key: "established", type: "number" },
  { label: "Upgraded Year", key: "upgradedYear", type: "text" },
  { label: "UDISE Code", key: "udiseCode", type: "text" },
  { label: "District", key: "district", type: "text" },
  { label: "Block", key: "block", type: "text" },
  { label: "Cluster", key: "cluster", type: "text" },
  { label: "Village/Town", key: "village", type: "text" },
  { label: "Management", key: "management", type: "text" },
  { label: "School Type", key: "type", type: "text" },
  { label: "Medium Of Instruction", key: "medium", type: "text" },
  { label: "Inclusive (CWSN)", key: "inclusive", type: "checkbox" },
  { label: "Co-Education", key: "coed", type: "checkbox" },
  { label: "Total Area", key: "totalArea", type: "text" },
  { label: "Principal Name", key: "principal", type: "text" },
  { label: "Principal Since", key: "principalSince", type: "text" },
  { label: "Principal Qualification", key: "principalQualification", type: "text" },
  { label: "Principal Professional Qualification", key: "principalProfessionalQualification", type: "text" },
  { label: "Principal Joining Date", key: "principalJoiningDate", type: "text" },
  { label: "Principal Experience", key: "principalExperience", type: "text" },
  { label: "Principal Contact", key: "principalContact", type: "text" },
  { label: "Principal Email", key: "principalEmail", type: "email" },
  { label: "Mid Day Meal", key: "midDayMeal", type: "text" },
  { label: "Drinking Water", key: "drinkingWater", type: "text" },
  { label: "Electricity", key: "electricity", type: "text" },
  { label: "Internet", key: "internet", type: "text" },
  { label: "Fire Safety", key: "fireSafety", type: "text" },
  { label: "Teacher Photos Displayed", key: "teacherPhotosDisplayed", type: "checkbox" },
];

export default function SchoolDetails() {
  const { id } = useParams() as { id: string };
  const router = useRouter();

  const [school, setSchool] = useState<Partial<School>>({});
  const [formData, setFormData] = useState<Partial<School>>({});
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Force refresh function
  const refreshData = async () => {
    setLoading(true);
    try {
      // Add cache-busting parameter
      const res = await fetch(`/api/schools/${id}?t=${Date.now()}`, {
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      if (!res.ok) {
        alert("School not found");
        router.push("/admin/schools");
        return;
      }
      const data = await res.json();
      console.log("Fetched data:", data); // Debug log
      setSchool(data);
      setFormData(data);
    } catch (error) {
      console.error("Failed to load school:", error);
      alert("Failed to load school");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) refreshData();
  }, [id, router]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = e.target;
    const { name, type, value } = target;
    let val: any;

    if (type === "checkbox") {
      // Type guard: only HTMLInputElement has 'checked' property
      if ('checked' in target) {
        val = target.checked;
      } else {
        val = false; // fallback, though this shouldn't happen
      }
    } else if (type === "number") {
      val = value === "" ? undefined : Number(value);
    } else {
      val = value;
    }

    console.log(`Changing ${name} to:`, val); // Debug log

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  }

  async function handleSave() {
    if (saving) return; // Prevent double-saving
    setSaving(true);

    const allowedKeys: (keyof School)[] = [
      "name",
      "status",
      "established",
      "upgradedYear",
      "udiseCode",
      "district",
      "block",
      "cluster",
      "village",
      "management",
      "type",
      "medium",
      "inclusive",
      "coed",
      "totalArea",
      "principal",
      "principalSince",
      "principalQualification",
      "principalProfessionalQualification",
      "principalJoiningDate",
      "principalExperience",
      "principalContact",
      "principalEmail",
      "midDayMeal",
      "drinkingWater",
      "electricity",
      "internet",
      "fireSafety",
      "teacherPhotosDisplayed",
    ];

    const dataToSend: Partial<School> = {};

    allowedKeys.forEach((key) => {
      if (formData[key] !== undefined) {
        (dataToSend as any)[key] = formData[key];
      }
    });

    console.log("Data being sent:", dataToSend); // Debug log

    try {
      const res = await fetch(`/api/schools/${id}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache", // Prevent caching
        },
        body: JSON.stringify(dataToSend),
      });

      if (res.ok) {
        const updated = await res.json();
        console.log("Updated data received:", updated); // Debug log
        
        // Update both states with the response data
        setSchool(updated);
        setFormData(updated);
        setEditMode(false);
        alert("School updated successfully");
        
        // Optional: Force a fresh fetch to ensure UI reflects DB state
        await refreshData();
      } else {
        const errData = await res.json();
        console.error("Save error:", errData);
        alert(errData.error || "Failed to update school");
      }
    } catch (error) {
      console.error("Save exception:", error);
      alert("Failed to update school");
    } finally {
      setSaving(false);
    }
  }

  function handleCancel() {
    // Reset form data to original school data
    setFormData(school);
    setEditMode(false);
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this school?")) return;

    try {
      const res = await fetch(`/api/schools/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("School deleted successfully");
        router.push("/admin/schools");
      } else {
        alert("Failed to delete school");
      }
    } catch {
      alert("Failed to delete school");
    }
  }

  function generatePDF() {
    if (!school?.id) return;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("School Report", 14, 15);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 22);

    let y = 30;
    doc.setFont("helvetica", "bold");
    doc.text("Field", 14, y);
    doc.text("Value", 80, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    fields.forEach(({ label, key }) => {
      const value = school[key];
      const displayValue = typeof value === "boolean" ? (value ? "Yes" : "No") : value ?? "N/A";
      
      doc.text(label, 14, y);
      doc.text(String(displayValue), 80, y);
      y += 6;
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save(`school-report-${school.id}.pdf`);
  }

  async function generateWord() {
    if (!school?.id) return;

    const rows = [
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph("Field")],
          }),
          new TableCell({
            children: [new Paragraph("Value")],
          }),
        ],
      }),
      ...fields.map(({ label, key }) => {
        const value = school[key];
        const displayValue = typeof value === "boolean" ? (value ? "Yes" : "No") : value ?? "N/A";

        return new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph(label)],
            }),
            new TableCell({
              children: [new Paragraph(String(displayValue))],
            }),
          ],
        });
      }),
    ];

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "School Report",
                  bold: true,
                  size: 28,
                }),
              ],
            }),
            new Paragraph({
              children: [new TextRun({ text: `Generated on: ${new Date().toLocaleDateString()}` })],
            }),
            new Table({ rows }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `school-report-${school.id}.docx`);
  }

  if (loading) return <p>Loading...</p>;
  if (!school?.id) return <p>School not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded shadow border border-gray-200">
      <h1 className="text-3xl font-bold mb-6">School Details</h1>
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setEditMode(!editMode)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          ✏️ {editMode ? "Cancel" : "Edit"}
        </button>
        {editMode && (
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 flex items-center gap-2"
          >
            ↩️ Reset
          </button>
        )}
        <button
          onClick={refreshData}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
          disabled={loading}
        >
          🔄 Refresh
        </button>
        <button
          onClick={generatePDF}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 flex items-center gap-2"
        >
          📄 Download PDF
        </button>
        <button
          onClick={generateWord}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 flex items-center gap-2"
        >
          📝 Download Word
        </button>
      </div>
      <table className="border border-gray-300 w-full text-left text-sm table-fixed">
        <thead className="bg-blue-200">
          <tr>
            <th className="border border-gray-300 p-2 w-1/3">Field</th>
            <th className="border border-gray-300 p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {fields.map(({ label, key, type = "text" }) => (
            <tr key={key}>
              <td className="border border-gray-300 p-2 font-semibold">{label}</td>
              <td className="border border-gray-300 p-2">
                {editMode ? (
                  type === "checkbox" ? (
                    <input
                      type="checkbox"
                      name={key}
                      checked={!!formData[key]}
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      type={type}
                      name={key}
                      value={
                        formData[key] !== undefined && formData[key] !== null
                          ? String(formData[key])
                          : ""
                      }
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  )
                ) : (
                  String(school[key] ?? "N/A")
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editMode && (
        <div className="flex space-x-4 mt-6">
          <button 
            onClick={handleSave} 
            className="bg-green-600 px-6 py-2 rounded text-white hover:bg-green-700 disabled:bg-gray-400"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save"}
          </button>
          <button 
            onClick={handleDelete} 
            className="bg-red-600 px-6 py-2 rounded text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}