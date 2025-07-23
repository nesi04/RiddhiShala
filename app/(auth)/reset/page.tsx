"use client";
import { Eye, EyeOff, Mail, Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "@/components/Header";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<"verify" | "reset">("verify");
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const newPasswordType = showNewPassword ? "text" : "password";
  const confirmPasswordType = showConfirmPassword ? "text" : "password";

  const handleSendOtp = () => {
    // In a real app, this would send OTP to the provided phone/email
    setIsOtpSent(true);
    // For demo, we'll automatically move to OTP verification after 1 second
    setTimeout(() => setStep("reset"), 3000);
  };

  const handleVerifyOtp = () => {
    // In a real app, this would verify the OTP
    setStep("reset");
  };

  const handleResetPassword = () => {
    // Password reset logic would go here
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Government Header Banner */}
      <Header />

      {/* Reset Password Form Container */}
      <div className="flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {step === "verify" ? "Verify Your Identity" : "Reset Your Password"}
          </h1>

          {step === "verify" ? (
            <div className="space-y-6">
              {/* Verification Method Toggle */}
              <div className="flex mb-6 border border-gray-300 rounded-md overflow-hidden">
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

              {/* Phone/Email Input */}
              {loginMethod === "phone" ? (
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-gray-700">Registered Phone Number</label>
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
                  <label className="font-medium text-gray-700">Registered Email Address</label>
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

              {isOtpSent ? (
                <>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-gray-700">OTP Verification</label>
                    <input
                      type="text"
                      value={otp}
                      placeholder="Enter 6-digit OTP"
                      onChange={(e) => setOtp(e.target.value)}
                      className="bg-gray-50 border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      maxLength={6}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      OTP sent to {loginMethod === "phone" ? phone : email}
                    </p>
                  </div>
                  <button
                    onClick={handleVerifyOtp}
                    disabled={otp.length < 6}
                    className={`w-full bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ${otp.length < 6 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'
                      }`}
                  >
                    Verify OTP
                  </button>
                </>
              ) : (
                <button
                  onClick={handleSendOtp}
                  disabled={loginMethod === "phone" ? phone.length < 10 : !email.includes('@')}
                  className={`w-full bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ${loginMethod === "phone" ? phone.length < 10 : !email.includes('@')
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-green-800'
                    }`}
                >
                  Send OTP
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* New Password Input */}
              <div className="flex flex-col gap-2">
                <label className="font-medium text-gray-700">New Password</label>
                <div className="relative">
                  <input
                    type={newPasswordType}
                    value={newPassword}
                    placeholder="Enter new password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
                  />
                  <button
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters with one uppercase, one number, and one special character
                </p>
              </div>

              {/* Confirm Password Input */}
              <div className="flex flex-col gap-2">
                <label className="font-medium text-gray-700">Confirm Password</label>
                <div className="relative">
                  <input
                    type={confirmPasswordType}
                    value={confirmPassword}
                    placeholder="Confirm new password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-10"
                  />
                  <button
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h3>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className={`flex items-center ${newPassword.length >= 8 ? 'text-green-600' : ''}`}>
                    <span className="mr-1">•</span> Minimum 8 characters
                  </li>
                  <li className={`flex items-center ${/[A-Z]/.test(newPassword) ? 'text-green-600' : ''}`}>
                    <span className="mr-1">•</span> At least one uppercase letter
                  </li>
                  <li className={`flex items-center ${/\d/.test(newPassword) ? 'text-green-600' : ''}`}>
                    <span className="mr-1">•</span> At least one number
                  </li>
                  <li className={`flex items-center ${/[^A-Za-z0-9]/.test(newPassword) ? 'text-green-600' : ''}`}>
                    <span className="mr-1">•</span> At least one special character
                  </li>
                  <li className={`flex items-center ${newPassword === confirmPassword && confirmPassword !== '' ? 'text-green-600' : ''}`}>
                    <span className="mr-1">•</span> Passwords must match
                  </li>
                </ul>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleResetPassword}
                disabled={newPassword !== confirmPassword || newPassword.length < 8}
                className={`w-full bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ${newPassword !== confirmPassword || newPassword.length < 8
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-green-800'
                  }`}
              >
                Reset Password
              </button>

              {/* Back to Login Link */}
              <div className="text-center">
                <button
                  onClick={() => router.push('/login')}
                  className="text-sm text-green-700 hover:text-green-800 hover:underline"
                >
                  Back to Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}