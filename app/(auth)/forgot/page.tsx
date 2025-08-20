"use client";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "@/components/Header";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Normally you would send the reset link request here
    setIsSubmitted(true);
    // Removed redirect, message changes immediately
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Government Header Banner */}
      <Header />

      <div className="flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {isSubmitted ? "Check Your Inbox" : "Reset Your Password"}
          </h1>

          {!isSubmitted ? (
            <div className="space-y-6">
              <p className="text-gray-600 text-center">
                Enter your registered email to receive reset instructions
              </p>

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
                    placeholder="your.email@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 rounded-md w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Send Reset Link Button */}
              <button
                onClick={handleSubmit}
                disabled={!email.includes("@")}
                className={`w-full bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ${
                  !email.includes("@") ? "opacity-50 cursor-not-allowed" : "hover:bg-green-800"
                }`}
              >
                Send Reset Link
              </button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                <p>We've sent reset instructions to your email.</p>
              </div>
              <p className="text-gray-600">
                Didn't receive anything?{" "}
                <button className="text-green-700 hover:underline" onClick={handleSubmit}>
                  Resend
                </button>
              </p>
              <button
                onClick={() => router.push("/login")}
                className="text-sm text-green-700 hover:text-green-800 hover:underline"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
