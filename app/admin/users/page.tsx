"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Users, Plus, Download, ChevronDown } from "lucide-react";
import UserGrid from "@/components/UserGrid";

import UserModal from "@/components/forms/AddUserForm";

const UserManagementPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from API
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (data: any) => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const newUser = await res.json();
      setUsers((prev) => [...prev, newUser]);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Link href="/admin" className="hover:text-green-700 flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Dashboard
            </Link>
            <span className="mx-1">/</span>
            <span className="text-green-700 flex items-center">
              <Users className="h-4 w-4 mr-1" />
              User Management
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <Users className="text-green-600 mr-2" size={24} />
              User Management
            </h1>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowModal(true)}
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
              >
                <Plus className="mr-2" size={16} />
                Add User
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-6 mt-5">
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6">
          {/* Add filters here if needed */}
        </div>

        {/* User Grid */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="p-6 text-center text-gray-500">Loading users...</div>
          ) : (
            <UserGrid users={users} refreshUsers={fetchUsers} />
          )}
        </div>
      </div>

      <UserModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export default UserManagementPage;
