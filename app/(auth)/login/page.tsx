"use client";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "@/components/Header";

const ADMIN_PASSWORD = "riddhishala123"; // Replace with your actual admin password

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAdminChecked, setIsAdminChecked] = useState(false);
  const router = useRouter();
  const passwordType = showPassword ? "text" : "password";

const handleLogin = async () => {
  setError("");

  if (isAdminChecked) {
    // Check hardcoded admin password BEFORE calling API
    if (adminPassword !== ADMIN_PASSWORD) {
      setError("Incorrect admin password.");
      return;
    }

    // For admin, skip API call and redirect directly to /admin
    router.push("/admin");
    return;
  }

  // Regular user login
  try {
    const response = await fetch("/api/auth/login-or-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Login failed");
      return;
    }

    if (data.message && data.message.includes("Verification")) {
      setError(data.message);
      return;
    }

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);

    router.push("/dashboard");
  } catch {
    setError("Network error. Please try again later.");
  }
};

  const handleResetPassword = () => {
    router.push("/reset");
  };

  const handleForgotPassword = () => {
    router.push("/forgot");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login to Your Account
          </h1>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="space-y-6">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-gray-500" size={18} />
                </div>
                <input
                  type="email"
                  value={email}
                  placeholder="demo@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-md w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={passwordType}
                  value={password}
                  placeholder="password123"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Admin Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isAdmin"
                checked={isAdminChecked}
                onChange={(e) => setIsAdminChecked(e.target.checked)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="isAdmin" className="block text-sm text-gray-700">
                Admin?
              </label>
            </div>

            {/* Admin Password Input (shown conditionally) */}
            {isAdminChecked && (
              <div className="flex flex-col gap-2">
                <label className="font-medium text-gray-700">Admin Password</label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter admin password"
                />
              </div>
            )}

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md transition duration-200"
            >
              Log In
            </button>

            {/* Forgot Password Link */}
            <div className="text-center">
              <button
                onClick={handleForgotPassword}
                className="text-sm text-green-700 hover:text-green-800 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
