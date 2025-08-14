"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Role {
  id: number;
  name: string;
}

interface Permission {
  id: number;
  name: string;
}

interface UserFormData {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  roleId: number | "";
  district: string;
  state: string;
  status: "active" | "inactive";
  joinDate: string;
  permissionIds: number[];
}

export default function UserModal({
  isOpen,
  onClose,
  onSubmit,
  role, // optional default role name
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
  role?: string;
}) {
  const [form, setForm] = useState<UserFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    roleId: "",
    district: "",
    state: "",
    status: "active",
    joinDate: new Date().toISOString().split("T")[0],
    permissionIds: [],
  });

  const [roles, setRoles] = useState<Role[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [selectedPermission, setSelectedPermission] = useState<number | "">("");

  // Fetch roles & permissions when modal is opened
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const [rolesRes, permsRes] = await Promise.all([
          fetch("/api/roles"),
          fetch("/api/permissions"),
        ]);
        setRoles(await rolesRes.json());
        setPermissions(await permsRes.json());
      } catch (err) {
        console.error("Failed to load roles/permissions", err);
      }
    };
    if (isOpen) {
      fetchMeta();
      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        roleId: "",
        district: "",
        state: "",
        status: "active",
        joinDate: new Date().toISOString().split("T")[0],
        permissionIds: [],
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "roleId" ? Number(value) : value,
    }));
  };

  const handlePermissionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPermission(Number(e.target.value));
  };

  const addPermission = () => {
    if (selectedPermission && !form.permissionIds.includes(selectedPermission as number)) {
      setForm((prev) => ({
        ...prev,
        permissionIds: [...prev.permissionIds, selectedPermission as number],
      }));
      setSelectedPermission("");
    }
  };

  const removePermission = (id: number) => {
    setForm((prev) => ({
      ...prev,
      permissionIds: prev.permissionIds.filter((pid) => pid !== id),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form); // Pass the final API-ready form data
    onClose();
  };

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
          {/* Main Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
            <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            <InputField label="Phone Number" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} required />
            <InputField label="Password" name="password" type="password" value={form.password} onChange={handleChange} required />

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select name="roleId" value={form.roleId} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
                <option value="">Select Role</option>
                {roles.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            <InputField label="State" name="state" value={form.state} onChange={handleChange} required />
            <InputField label="District" name="district" value={form.district} onChange={handleChange} required />

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select name="status" value={form.status} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <InputField
              label="Join Date"
              name="joinDate"
              type="date"
              value={form.joinDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Permissions */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
            <div className="flex gap-2">
              <select value={selectedPermission} onChange={handlePermissionChange} className="flex-1 border rounded px-3 py-2">
                <option value="">Select Permission</option>
                {permissions.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
              <button type="button" onClick={addPermission} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                Add
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {form.permissionIds.map((pid) => {
                const permName = permissions.find((p) => p.id === pid)?.name || pid;
                return (
                  <div key={pid} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                    <span>{permName}</span>
                    <button
                      type="button"
                      onClick={() => removePermission(pid)}
                      className="text-gray-500 hover:text-black"
                    >
                      <X size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end pt-4">
            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
              {role ? `Add ${role}` : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ✅ Capitalized to make it a valid React component
function InputField({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input {...props} className="w-full border rounded px-3 py-2" />
    </div>
  );
}
