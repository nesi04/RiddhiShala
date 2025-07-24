"use client";
import { Eye, EyeOff, Smartphone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "@/components/Header";

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const router = useRouter();
  const passwordType = showPassword ? "text" : "password";

  // Hardcoded credentials for demo purposes
  const DEMO_CREDENTIALS = {
    phone: "9876543210",
    email: "demo@example.com",
    password: "password123"
  };

  const handleLogin = () => {
    setError("");
    
    // Validate credentials
    let isValid = false;
    
    if (loginMethod === "phone") {
      isValid = phone === DEMO_CREDENTIALS.phone && 
                password === DEMO_CREDENTIALS.password;
    } else {
      isValid = email === DEMO_CREDENTIALS.email && 
                password === DEMO_CREDENTIALS.password;
    }

    if (isValid) {
      // Store simple auth state in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/admin');
    } else {
      setError("Invalid credentials. Use phone: 9876543210 or email: demo@example.com with password: password123");
    }
  };

  const handleResetPassword = () => {
    router.push('/reset');
  };

  const handleForgotPassword = () => {
    router.push('/forgot');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Government Header Banner */}
      <Header />

      {/* Login Form Container */}
      <div className="flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h1>

          {/* Error message */}
          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Login Method Toggle */}
          <div className="flex mb-6 border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => setLoginMethod("phone")}
              className={'flex-1 py-2 px-4 flex items-center justify-center space-x-2 ${loginMethod === "phone" ? "bg-green-700 text-white" : "bg-gray-100 text-gray-700"}'}
            >
              <Smartphone size={18} />
              <span>Phone</span>
            </button>
            <button
              onClick={() => setLoginMethod("email")}
              className={'flex-1 py-2 px-4 flex items-center justify-center space-x-2 ${loginMethod === "email" ? "bg-green-700 text-white" : "bg-gray-100 text-gray-700"}'}
            >
              <Mail size={18} />
              <span>Email</span>
            </button>
          </div>

          <div className="space-y-6">
            {/* Phone/Email Input */}
            {loginMethod === "phone" ? (
              <div className="flex flex-col gap-2">
                <label className="font-medium text-gray-700">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    placeholder="9876543210"
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-gray-50 border border-gray-300 rounded-md w-full py-2 px-12 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    maxLength={10}
                  />
                </div>
              </div>
            ) : (
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
            )}

            {/* Password Input - Only show if not first time user */}
            {!isFirstTimeUser && (
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
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            )}

            {/* First time user checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="firstTimeUser"
                checked={isFirstTimeUser}
                onChange={(e) => setIsFirstTimeUser(e.target.checked)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="firstTimeUser" className="ml-2 block text-sm text-gray-700">
                Are you a first time user?
              </label>
            </div>

            {/* Login/Reset Password Button */}
            <button
              onClick={isFirstTimeUser ? handleResetPassword : handleLogin}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md transition duration-200"
            >
              {isFirstTimeUser ? "Reset Password" : "Log In"}
            </button>

            {/* Forgot Password Link - Only show if not first time user */}
            {!isFirstTimeUser && (
              <div className="text-center">
                <button
                  onClick={handleForgotPassword}
                  className="text-sm text-green-700 hover:text-green-800 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
