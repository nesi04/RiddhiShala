"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  email: string;
  name: string;
  roleId: number;
  role?: {
    name: string;
  } | null;
  isVerified: boolean;
  phoneNumber?: string | null;
  address?: string | null;
  bio?: string | null;
  district?: string | null;
  assignedSchools: {
    school: {
      id: number;
      name: string;
      status: string;
      district?: string | null;
    };
  }[];
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [district, setDistrict] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("No access token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Failed to fetch user");
        }
        const data = await res.json();

        setUser({
          ...data,
          assignedSchools: data.assignedSchools ?? [],
        });

        setName(data.name || "");
        setPhoneNumber(data.phoneNumber || "");
        setAddress(data.address || "");
        setBio(data.bio || "");
        setDistrict(data.district || "");
        setError("");
      } catch (err: any) {
        setError(err.message || "Could not load user data. Please login again.");
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleSave = async () => {
    setError("");
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const res = await fetch("/api/user/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, phoneNumber, address, bio, district }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Failed to update");
        return;
      }

      const updatedUser = await res.json();

      setUser({
        ...updatedUser,
        assignedSchools: updatedUser.assignedSchools ?? [],
      });
      alert("Profile updated successfully");
    } catch {
      setError("Failed to update profile. Please try again.");
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Loading your dashboard...</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
        Your Dashboard
      </h1>

      {error && (
        <div className="mb-8 p-4 bg-red-100 text-red-800 rounded-lg border border-red-300 shadow-sm">
          {error}
        </div>
      )}

      {user && (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-10 space-y-8">
          {/* Basic Info */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2">
              Account Information
            </h2>
            <div>
              <p className="text-sm font-medium text-gray-600">Email Address</p>
              <p className="text-base font-semibold text-gray-900">{user.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Role</p>
              <p className="text-base font-semibold text-gray-900">
                {user.role?.name ?? "No role found"}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Verified</p>
              <p
                className={`font-semibold ${
                  user.isVerified ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.isVerified ? "Yes ✅" : "No ❌"}
              </p>
            </div>
          </section>

          {/* Editable Profile Fields */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2">
              Edit Profile
            </h2>

            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block mb-1 font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="address" className="block mb-1 font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your address"
              />
            </div>

            <div>
              <label htmlFor="bio" className="block mb-1 font-medium text-gray-700">
                Bio
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                placeholder="Write a short bio"
              />
            </div>

            <div>
              <label htmlFor="district" className="block mb-1 font-medium text-gray-700">
                District
              </label>
              <select
                id="district"
                value={district || ""}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
              >
                <option value="" disabled>
                  Select your district
                </option>
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
                  "East Jaintia Hills",
                ].map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSave}
              className="w-full rounded-md bg-green-700 py-3 text-white font-semibold shadow hover:bg-green-800 transition"
            >
              Save Changes
            </button>
          </section>

          {/* Assigned Schools */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">Assigned Schools</h2>
            {(user.assignedSchools?.length ?? 0) === 0 ? (
              <p className="text-gray-600 italic">No assigned schools.</p>
            ) : (
              <ul className="space-y-6">
                {user.assignedSchools.map(({ school }) => (
                  <li
                    key={school.id}
                    className="rounded-lg border border-gray-300 p-6 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">{school.name}</h3>
                    <p className="text-gray-700">
                      <span className="font-semibold">Status: </span>
                      {school.status}
                    </p>
                    {school.district && (
                      <p className="text-gray-700">
                        <span className="font-semibold">District: </span>
                        {school.district}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
