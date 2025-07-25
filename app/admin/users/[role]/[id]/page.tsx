"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Shield,
  School,
  Calendar,
  BookOpen,
  MapPin,
  Users,
  CheckCircle2,
  Edit,
  Save,
  X,
  Plus,
  GraduationCap,
  Activity
} from "lucide-react";
import { fakeUsers as userData } from "@/constants/userData";

export interface UserDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  assignedSchools: string[];
  joinDate: string;
  lastActive: string;
  status: string;
  district: string;
  permissions: string[];
  address: string;
  bio: string;
  role: string;
}

const DetailItem = ({ icon, label, value, isEditing, name, formData, onChange }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isEditing: boolean;
  name: string;
  formData: UserDetails | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex items-start">
    <div className="text-gray-500 mr-3 mt-0.5">{icon}</div>
    <div className="flex-1">
      <p className="text-sm text-gray-500">{label}</p>
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={formData?.[name as keyof UserDetails] || ""}
          onChange={onChange}
          className="w-full border rounded p-1 text-sm mt-1"
        />
      ) : (
        <p className="text-sm font-medium">{value}</p>
      )}
    </div>
  </div>
);

const DistrictOfficerDetails = ({ data, isEditing, onChange }: {
  data: UserDetails;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="space-y-4">
    <DetailItem
      icon={<School size={16} />}
      label="Assigned Schools"
      value={data.assignedSchools.join(", ")}
      isEditing={isEditing}
      name="assignedSchools"
      formData={data}
      onChange={onChange}
    />
    <DetailItem
      icon={<MapPin size={16} />}
      label="District"
      value={data.district}
      isEditing={isEditing}
      name="district"
      formData={data}
      onChange={onChange}
    />
  </div>
);

const SchoolPrincipalDetails = ({ data, isEditing, onChange }: {
  data: UserDetails;
  isEditing: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="space-y-4">
    <DetailItem
      icon={<School size={16} />}
      label="School"
      value={data.assignedSchools[0] || "Not assigned"}
      isEditing={isEditing}
      name="assignedSchools"
      formData={data}
      onChange={onChange}
    />
    <DetailItem
      icon={<GraduationCap size={16} />}
      label="Staff Count"
      value="24"
      isEditing={false}
      name=""
      formData={null}
      onChange={() => {}}
    />
  </div>
);

export default function UserRolePage() {
  const router = useRouter();
  const params = useParams();
  const roleParam = Array.isArray(params.role) ? params.role[0] : params.role;

  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<UserDetails | null>(null);
  const [formData, setFormData] = useState<UserDetails | null>(null);

  useEffect(() => {
    if (!roleParam) return;

    const matchedUser = userData.find(u =>
      u.role.toLowerCase().replace(/\s+/g, "-").replace("/", "-") === roleParam.toLowerCase()
    );

    if (matchedUser) {
      const userDetails: UserDetails = {
        ...matchedUser,
        id: matchedUser.id,
        name: matchedUser.name,
        email: matchedUser.email,
        phone: matchedUser.phone,
        assignedSchools: matchedUser.assignedSchools || ["GreenTown High"],
        joinDate: matchedUser.joinDate || "2023-01-15",
        lastActive: matchedUser.lastActive || "2023-06-20",
        status: matchedUser.status,
        district: matchedUser.district,
        permissions: matchedUser.permissions || ["view_reports"],
        address: matchedUser.address || "123 Education Lane",
        bio: matchedUser.bio || `${matchedUser.role} with years of experience`,
        role: matchedUser.role
      };

      setUser(userDetails);
      setFormData(userDetails);
    } else {
      router.push("/admin/users");
    }
  }, [roleParam, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...(prev as UserDetails),
      [name]: value
    }));
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  if (!user) return <div className="p-6">Loading user data...</div>;

  



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <button
              onClick={() => router.push("/admin/users")}
              className="hover:text-green-700 flex items-center"
            >
              <Users className="h-4 w-4 mr-1" />
              Users
            </button>
            <span className="mx-1">/</span>
            <span className="text-green-700">{user.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <User className="text-green-600 mr-2" size={24} />
              User Management
            </h1>
            <div className="flex space-x-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
                  >
                    <Save className="mr-2" size={16} />
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
                  >
                    <X className="mr-2" size={16} />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
                >
                  <Edit className="mr-2" size={16} />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600 mb-4">
                    {user.name.charAt(0)}
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData?.name || ""}
                      onChange={handleInputChange}
                      className="text-xl font-bold text-center mb-1 border rounded p-1 w-full"
                    />
                  ) : (
                    <h2 className="text-xl font-bold text-center mb-1">{user.name}</h2>
                  )}
                  <div className="flex items-center mb-4">
                    <Shield className="text-green-600 mr-1" size={16} />
                    {isEditing ? (
                      <select
                        name="role"
                        value={formData?.role || ""}
                        onChange={(e) => handleInputChange(e as any)}
                        className="border rounded p-1 text-sm"
                      >
                        {userData.map((userType) => (
                          <option key={userType.role} value={userType.role}>
                            {userType.role}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-sm text-gray-600">{user.role}</span>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {user.status}
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <DetailItem icon={<Mail size={16} />} label="Email" value={user.email} isEditing={isEditing} name="email" formData={formData} onChange={handleInputChange} />
                  <DetailItem icon={<Phone size={16} />} label="Phone" value={user.phone} isEditing={isEditing} name="phone" formData={formData} onChange={handleInputChange} />
                  <DetailItem icon={<MapPin size={16} />} label="District" value={user.district} isEditing={isEditing} name="district" formData={formData} onChange={handleInputChange} />
                  <DetailItem icon={<Calendar size={16} />} label="Join Date" value={user.joinDate} isEditing={isEditing} name="joinDate" formData={formData} onChange={handleInputChange} />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-medium text-gray-800 flex items-center">
                  <Shield className="text-green-600 mr-2" size={18} />
                  Role Information
                </h3>
              </div>
              <div className="p-6">
                {user.role === 'District' && <DistrictOfficerDetails data={user} isEditing={isEditing} onChange={handleInputChange} />}
                {user.role === 'Head of School' && <SchoolPrincipalDetails data={user} isEditing={isEditing} onChange={handleInputChange} />}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-medium text-gray-800 flex items-center">
                  <CheckCircle2 className="text-green-600 mr-2" size={18} />
                  Permissions
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {user.permissions?.map((permission: string) => (
                    <div key={permission} className="flex items-center">
                      <input type="checkbox" checked readOnly className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                      <label className="ml-2 block text-sm text-gray-700 capitalize">
                        {permission.replace("_", " ")}
                      </label>
                    </div>
                  ))}
                </div>
                {isEditing && (
                  <button className="mt-4 text-sm text-green-700 hover:text-green-800 flex items-center">
                    <Plus className="mr-1" size={14} />
                    Add Permission
                  </button>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-medium text-gray-800 flex items-center">
                  <Activity className="text-green-600 mr-2" size={18} />
                  Recent Activity
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <DetailItem icon={<BookOpen size={16} />} label="Viewed school reports" value="2023-06-20 14:30" isEditing={false} name="" formData={null} onChange={() => {}} />
                <DetailItem icon={<School size={16} />} label="Updated student records" value="2023-06-18 10:15" isEditing={false} name="" formData={null} onChange={() => {}} />
                <DetailItem icon={<User size={16} />} label="Logged in to system" value="2023-06-15 09:00" isEditing={false} name="" formData={null} onChange={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
