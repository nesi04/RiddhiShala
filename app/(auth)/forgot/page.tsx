// app/forgot-password/page.tsx
"use client";
import { Mail, Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import MeghalyaEmblem from "../../../assets/Emblem_of_Meghalaya.svg.png";
import Header from "@/components/Header";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // this would send a reset link/OTP
    setIsSubmitted(true);
    // For demo, redirect to reset page after 1 second
    setTimeout(() => router.push('/reset-password'), 1000);
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
                Enter your registered {loginMethod} to receive reset instructions
              </p>

              {/* Method Toggle */}
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={() => setLoginMethod("phone")}
                  className={`flex-1 py-2 px-4 flex items-center justify-center space-x-2 ${loginMethod === "phone" ? "bg-green-700 text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  <Smartphone size={18} />
                  <span>Phone</span>
                </button>
                <button
                  onClick={() => setLoginMethod("email")}
                  className={`flex-1 py-2 px-4 flex items-center justify-center space-x-2 ${loginMethod === "email" ? "bg-green-700 text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  <Mail size={18} />
                  <span>Email</span>
                </button>
              </div>

              {/* Input Field */}
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
                      placeholder="your.email@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 rounded-md w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={loginMethod === "phone" ? phone.length < 10 : !email.includes('@')}
                className={`w-full bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ${loginMethod === "phone" ? phone.length < 10 : !email.includes('@')
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-green-800'
                  }`}
              >
                Send Reset Link
              </button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                <p>We've sent reset instructions to your {loginMethod === "phone" ? "phone" : "email"}</p>
              </div>
              <p className="text-gray-600">
                Didn't receive anything? <button className="text-green-700 hover:underline">Resend</button>
              </p>
              <button
                onClick={() => router.push('/login')}
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