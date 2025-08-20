'use client';
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { User, CheckCircle2, Edit, Save, X, Trash2 } from "lucide-react";

export interface UserDetails {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  status: string;
  district?: string;
  permissions: string[];      // permission names only
  assignedSchools: number[];  // school IDs
}

interface Permission {
  id: number;
  name: string;
}

interface School {
  id: number;
  name: string;
}

interface Role {
  id: number;
  name: string;
}

export default function UserRolePage() {
  const router = useRouter();
  const params = useParams();
  const userId = Array.isArray(params.id) ? params.id[0] : params.id;

  const [user, setUser] = useState<UserDetails | null>(null);
  const [formData, setFormData] = useState<UserDetails | null>(null);
  const [allPermissions, setAllPermissions] = useState<Permission[]>([]);
  const [allSchools, setAllSchools] = useState<School[]>([]);
  const [allRoles, setAllRoles] = useState<Role[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  // Only allow certain keys for scalar fields
  type ScalarFields = "name" | "email" | "phoneNumber" | "district" | "role" | "status";
  const getFieldValue = (field: ScalarFields) =>
    (formData?.[field] as string) ?? "";

  // Fetch user details
  useEffect(() => {
    if (!userId) return;
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/users/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        setUser(data);
        setFormData(data);
      } catch (err) {
        console.error(err);
        router.push("/admin/users");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId, router]);

  // Fetch dropdown/filter data
  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const [rolesRes, permRes, schoolRes] = await Promise.all([
          fetch("/api/roles"),
          fetch("/api/permissions"),
          fetch("/api/schools"),
        ]);
        setAllRoles(await rolesRes.json());
        setAllPermissions(await permRes.json());
        setAllSchools(await schoolRes.json());
      } catch (err) {
        console.error(err);
      }
    };
    fetchMeta();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      const checked = target.checked;
      setFormData(prev => {
        if (!prev) return prev;
        if (name === "permissions") {
          return {
            ...prev,
            permissions: checked
              ? [...prev.permissions, value]
              : prev.permissions.filter(p => p !== value)
          };
        }
        if (name === "assignedSchools") {
          const schoolId = Number(value);
          return {
            ...prev,
            assignedSchools: checked
              ? [...prev.assignedSchools, schoolId]
              : prev.assignedSchools.filter(id => id !== schoolId)
          };
        }
        return prev;
      });
    } else {
      setFormData(prev => (prev ? { ...prev, [name]: value } : prev));
    }
  };

  const handleSave = async () => {
    if (!formData) return;
    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to save");
      const updatedUser = await res.json();
      setUser(updatedUser);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`/api/users/${userId}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete user");
      router.push("/admin/users");
    } catch (err) {
      console.error(err);
      alert("Failed to delete user");
    }
  };

  if (loading) return <div className="p-6">Loading user...</div>;
  if (!user) return <div className="p-6 text-red-600">User not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <User className="text-green-600 mr-2" size={24} /> {user.name}
        </h1>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm flex items-center">
                <Save className="mr-2" size={16} /> Save Changes
              </button>
              <button onClick={() => { setFormData(user); setIsEditing(false); }} className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm flex items-center">
                <X className="mr-2" size={16} /> Cancel
              </button>
              <button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
                <Trash2 className="mr-2" size={16} /> Delete
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEditing(true)} className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm flex items-center">
                <Edit className="mr-2" size={16} /> Edit User
              </button>
              <button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
                <Trash2 className="mr-2" size={16} /> Delete
              </button>
            </>
          )}
        </div>
      </div>

      {/* User Info */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {(["name", "email", "phoneNumber", ] as ScalarFields[]).map(field => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
            <input
              type={field === "email" ? "email" : field === "phoneNumber" ? "tel" : "text"}
              name={field}
              value={String(getFieldValue(field))}
              disabled={!isEditing}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        ))}
        <div>
  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="district">
    District
  </label>
  <select
    id="district"
    name="district"
    value={formData?.district || ""}
    disabled={!isEditing}
    onChange={handleInputChange}
    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    <option value="">Select District</option>
    {[
      "East Garo Hills",
      "East Khasi Hills",
      "Jaintia Hills",
      "Ri-Bhoi",
      "South Garo Hills",
      "West Garo Hills",
      "West Khasi Hills",
      "South West Garo Hills",
      "North Garo Hills",
      "South West Khasi Hills",
      "East Jaintia Hills"
    ].map((district) => (
      <option key={district} value={district}>
        {district}
      </option>
    ))}
  </select>
</div>


        {/* Role Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            name="role"
            value={formData?.role || ""}
            disabled={!isEditing}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="">Select role</option>
            {allRoles.map(r => (
              <option key={r.id} value={r.name}>{r.name}</option>
            ))}
          </select>
        </div>

        {/* Status Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={formData?.status || "Active"}
            disabled={!isEditing}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Permissions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-800 flex items-center">
            <CheckCircle2 className="text-green-600 mr-2" size={18} /> Permissions
          </h3>
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allPermissions.map((permission) => (
            <label key={permission.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="permissions"
                value={permission.name}
                checked={formData?.permissions?.includes(permission.name) ?? false}
                disabled={!isEditing}
                onChange={handleInputChange}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700 capitalize">{permission.name.replace("-", " ")}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Assigned Schools */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-800 flex items-center">
            <CheckCircle2 className="text-green-600 mr-2" size={18} /> Assigned Schools
          </h3>
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allSchools.map((school) => (
            <label key={school.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="assignedSchools"
                value={String(school.id)} // HTML wants string
                checked={formData?.assignedSchools?.includes(school.id) ?? false}
                disabled={!isEditing}
                onChange={handleInputChange}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">{school.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
