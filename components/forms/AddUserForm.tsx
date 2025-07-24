"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

interface UserFormData {
  name: string;
  email: string;
  role: string;
  district: string;
}

export default function UserModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
}) {
  const [form, setForm] = useState<UserFormData>({
    name: "",
    email: "",
    role: "",
    district: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          <h2 className="text-xl font-semibold">Add New User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select Role</option>
            <option value="state">State Admin</option>
            <option value="district">District Admin</option>
            <option value="cluster">Cluster</option>
            <option value="block">Block</option>
            <option value="trainer">Trainer</option>
            <option value="principal">Principal</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="deo">Data Entry Operator</option>
          </select>
          <input
            name="district"
            placeholder="District"
            value={form.district}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <div className="flex justify-end">
            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
