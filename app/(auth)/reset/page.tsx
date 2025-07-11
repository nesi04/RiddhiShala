"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const handleResetPassword = () => {
    router.push('/login');
  };


  return (
    <div className="mx-auto mt-20 w-1/2 flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Reset Password</h1>
      <input
          type="text"
          value={userId}
          placeholder="Enter Your Password"
          onChange={(e) => setUserId(e.target.value)}
          className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
        />
      <input
          type="text"
          value={userId}
          placeholder="Confirm Password"
          onChange= {(e) => setUserId(e.target.value)}
          className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
        />

      <button
        className="w-full rounded-md py-2 bg-black text-white border-2 border-black hover:border-purple-300 transition-all duration-200"
        onClick={handleResetPassword}
      >
        Reset Password
      </button>
    </div>
  );
}
