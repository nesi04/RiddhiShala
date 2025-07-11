"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const router = useRouter();
    const handleForgotPassword = () => {
    router.push('/reset');
  };



  return (
    <div className="mx-auto mt-50 w-1/2 flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Forgot Password</h1>
      <div className="flex flex-col gap-3 w-full">
        <label className="font-semibold">Enter your email</label>
        <input
          type="text"
          value={userId}
          placeholder="Example@domain.com"
          onChange={(e) => setUserId(e.target.value)}
          className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
        />
      </div>
      <button className="w-full rounded-md py-1 hover:border-purple-300 border-2 bg-black text-white" 
      onClick={handleForgotPassword}>Request Reset Link</button>
    </div>
  );
}
