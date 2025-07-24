"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface UserFormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  district: string;
  state: string;
  status: "active" | "inactive";
  joinDate: string;
  permissions: string[];
}

export default function UserModal({
  isOpen,
  onClose,
  onSubmit,
  role,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
  role?: string; // This will be passed when the modal is under admin/users/[role]
}) {
  const [form, setForm] = useState<UserFormData>({
    name: "",
    email: "",
    phone: "",
    role: "",
    district: "",
    state: "",
    status: "active",
    joinDate: new Date().toISOString().split('T')[0],
    permissions: [],
  });

  const [selectedPermission, setSelectedPermission] = useState("");

  // Reset form when modal opens or role changes
  useEffect(() => {
    if (isOpen) {
      setForm({
        name: "",
        email: "",
        phone: "",
        role: role || "",
        district: "",
        state: "",
        status: "active",
        joinDate: new Date().toISOString().split('T')[0],
        permissions: [],
      });
    }
  }, [isOpen, role]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handlePermissionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPermission(e.target.value);
  };

  const addPermission = () => {
    if (selectedPermission && !form.permissions.includes(selectedPermission)) {
      setForm((prev) => ({
        ...prev,
        permissions: [...prev.permissions, selectedPermission],
      }));
      setSelectedPermission("");
    }
  };

  const removePermission = (permission: string) => {
    setForm((prev) => ({
      ...prev,
      permissions: prev.permissions.filter((p) => p !== permission),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  const permissionOptions = [
    "manage-users",
    "manage-districts",
    "manage-schools",
    "view-reports",
    "manage-content",
    "manage-assessments",
  ];

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl shadow-green-500 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{role ? `Add New ${role}` : "Add New User"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                name="phone"
                placeholder="Phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {!role && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
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
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
              <input
                name="district"
                placeholder="District"
                value={form.district}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
              <input
                name="joinDate"
                type="date"
                value={form.joinDate}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
            <div className="flex gap-2">
              <select
                value={selectedPermission}
                onChange={handlePermissionChange}
                className="flex-1 border rounded px-3 py-2"
              >
                <option value="">Select Permission</option>
                {permissionOptions.map((permission) => (
                  <option key={permission} value={permission}>
                    {permission}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={addPermission}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Add
              </button>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {form.permissions.map((permission) => (
                <div
                  key={permission}
                  className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1"
                >
                  <span>{permission}</span>
                  <button
                    type="button"
                    onClick={() => removePermission(permission)}
                    className="text-gray-500 hover:text-black"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800"
            >
              {role ? `Add ${role}` : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}