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

interface School {
  id: number;
  name: string;
  district?: string;
}

interface UserFormData {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  roleId: number | "";
  district: string;
  address: string;
  bio: string;
  isVerified: boolean;
  permissionIds: number[];
  schoolIds: number[];
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
    address: "",
    bio: "",
    isVerified: false,
    permissionIds: [],
    schoolIds: [],
  });

  const [roles, setRoles] = useState<Role[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [schools, setSchools] = useState<School[]>([]);
  const [selectedPermission, setSelectedPermission] = useState<number | "">("");
  const [selectedSchool, setSelectedSchool] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  // Fetch roles, permissions & schools when modal is opened
  useEffect(() => {
    const fetchMeta = async () => {
      setLoading(true);
      try {
        const [rolesRes, permsRes, schoolsRes] = await Promise.all([
          fetch("/api/roles"),
          fetch("/api/permissions"),
          fetch("/api/schools"),
        ]);
        
        const [rolesData, permsData, schoolsData] = await Promise.all([
          rolesRes.json(),
          permsRes.json(),
          schoolsRes.json(),
        ]);
        
        setRoles(rolesData);
        setPermissions(permsData);
        setSchools(schoolsData);
      } catch (err) {
        console.error("Failed to load data:", err);
        alert("Failed to load form data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchMeta();
      // Reset form when modal opens
      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        roleId: "",
        district: "",
        address: "",
        bio: "",
        isVerified: false,
        permissionIds: [],
        schoolIds: [],
      });
      setSelectedPermission("");
      setSelectedSchool("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: name === "roleId" ? Number(value) || "" : value,
      }));
    }
  };

  const handlePermissionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPermission(Number(e.target.value) || "");
  };

  const handleSchoolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSchool(Number(e.target.value) || "");
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

  const addSchool = () => {
    if (selectedSchool && !form.schoolIds.includes(selectedSchool as number)) {
      setForm((prev) => ({
        ...prev,
        schoolIds: [...prev.schoolIds, selectedSchool as number],
      }));
      setSelectedSchool("");
    }
  };

  const removeSchool = (id: number) => {
    setForm((prev) => ({
      ...prev,
      schoolIds: prev.schoolIds.filter((sid) => sid !== id),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!form.name || !form.email || !form.password || !form.roleId) {
      alert("Please fill in all required fields");
      return;
    }
    
    if (form.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    onSubmit(form);
    onClose();
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl shadow-green-500 p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {role ? `Add New ${role}` : "Add New User"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-800">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField 
                label="Full Name *" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                required 
              />
              <InputField 
                label="Email *" 
                name="email" 
                type="email" 
                value={form.email} 
                onChange={handleChange} 
                required 
              />
              <InputField 
                label="Phone Number" 
                name="phoneNumber" 
                value={form.phoneNumber} 
                onChange={handleChange} 
                placeholder="Optional"
              />
              <InputField 
                label="Password *" 
                name="password" 
                type="password" 
                value={form.password} 
                onChange={handleChange} 
                required 
                minLength={6}
              />
            </div>
          </div>

          {/* Role and Location */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-800">Role & Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
                <select 
                  name="roleId" 
                  value={form.roleId} 
                  onChange={handleChange} 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                  required
                >
                  <option value="">Select Role</option>
                  {roles.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <InputField 
                label="District" 
                name="district" 
                value={form.district} 
                onChange={handleChange} 
              />
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-800">Additional Details</h3>
            <div className="space-y-4">
              <InputField 
                label="Address" 
                name="address" 
                value={form.address} 
                onChange={handleChange} 
                placeholder="Full address"
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Brief description about the user"
                />
              </div>

              {/* Verification Status */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="isVerified"
                  checked={form.isVerified}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Mark as verified user
                </label>
              </div>
            </div>
          </div>

          {/* Permissions */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-800">Permissions</h3>
            <div className="flex gap-2 mb-3">
              <select 
                value={selectedPermission} 
                onChange={handlePermissionChange} 
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Permission</option>
                {permissions.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
              <button 
                type="button" 
                onClick={addPermission} 
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                disabled={!selectedPermission}
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.permissionIds.map((pid) => {
                const permName = permissions.find((p) => p.id === pid)?.name || `Permission ${pid}`;
                return (
                  <div key={pid} className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                    <span>{permName}</span>
                    <button
                      type="button"
                      onClick={() => removePermission(pid)}
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* School Assignments */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-gray-800">School Assignments</h3>
            <div className="flex gap-2 mb-3">
              <select 
                value={selectedSchool} 
                onChange={handleSchoolChange} 
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select School</option>
                {schools.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} {s.district && `(${s.district})`}
                  </option>
                ))}
              </select>
              <button 
                type="button" 
                onClick={addSchool} 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                disabled={!selectedSchool}
              >
                Assign
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.schoolIds.map((sid) => {
                const school = schools.find((s) => s.id === sid);
                const schoolName = school ? `${school.name}${school.district ? ` (${school.district})` : ''}` : `School ${sid}`;
                return (
                  <div key={sid} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                    <span>{schoolName}</span>
                    <button
                      type="button"
                      onClick={() => removeSchool(sid)}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-3 pt-6 border-t">
            <button 
              type="button" 
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
            >
              {role ? `Add ${role}` : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// InputField component
function InputField({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input 
        {...props} 
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent" 
      />
    </div>
  );
}