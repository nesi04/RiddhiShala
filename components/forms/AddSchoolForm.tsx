"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

interface SchoolFormData {
  name: string;
  udise: string;
  district: string;
  block: string;
  cluster: string;
}

export default function SchoolModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SchoolFormData) => void;
}) {
  const [form, setForm] = useState<SchoolFormData>({
    name: "",
    udise: "",
    district: "",
    block: "",
    cluster: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl shadow-green-500 p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New School</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="School Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            name="udise"
            placeholder="UDISE Code"
            value={form.udise}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            name="district"
            placeholder="District"
            value={form.district}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            name="block"
            placeholder="Block"
            value={form.block}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            name="cluster"
            placeholder="Cluster"
            value={form.cluster}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <div className="flex justify-end">
            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
              Add School
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
