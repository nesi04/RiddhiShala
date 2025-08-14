"use client";

import React from "react";
import { Settings, Activity, Users } from "lucide-react";
import { useRouter } from "next/navigation"; 

export default function AdminDashboard() {
  const user = {
    name: "John Doe",
    role: "Administrator",
    profilePic: "", // Leave empty to test letter avatar
  };

  const router = useRouter();

  const handleSettingsClick = () => {
    router.push("/admin/settings");
  };

  const handleActivityLogsClick = () => {
    router.push("/admin/logs");
  };

  const handleManageUsersClick = () => {
    router.push("/admin/users");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  // Function to render avatar (either image or letter)
  const renderAvatar = (size = "md") => {
    const sizeClasses =
      size === "sm"
        ? "w-10 h-10 text-sm"
        : size === "lg"
        ? "w-24 h-24 text-3xl"
        : "w-12 h-12 text-lg";

    if (user.profilePic) {
      return (
        <img
          src={user.profilePic}
          alt="Profile"
          className={`${size === "lg"
              ? "rounded-full border-4 border-green-700"
              : "rounded-full border-2 border-white"
            } object-cover ${sizeClasses}`}
        />
      );
    } else {
      return (
        <div
          className={`${sizeClasses} rounded-full bg-green-700 text-white flex items-center justify-center font-bold`}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top Bar */}
      <header className="w-full bg-white text-black px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Admin Dashboard - Profile</h1>
        <div className="flex items-center space-x-3">{renderAvatar("sm")}</div>
      </header>

      {/* Profile Section */}
      <section className="max-w-4xl mx-auto mt-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center">{renderAvatar("lg")}</div>
          <h2 className="mt-4 text-lg font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.role}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={handleSettingsClick}
            className="flex items-center justify-center bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            <Settings className="mr-2" size={18} /> Settings
          </button>
          <button
            onClick={handleActivityLogsClick}
            className="flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <Activity className="mr-2" size={18} /> Activity Logs
          </button>
          <button
            onClick={handleManageUsersClick}
            className="flex items-center justify-center bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
          >
            <Users className="mr-2" size={18} /> Manage Users
          </button>
        </div>

        {/* Logout Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow hover:bg-red-700 transition"
          >
            Log Out
          </button>
        </div>
      </section>
    </div>
  );
}
