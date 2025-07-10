"use client";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password,setPassword]=useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
    const passwordType = showPassword ? "text" : "password";
    const handleForgotPassword =()=>{
        router.push('/forgot')
    }
  return (
    <div className="mx-auto mt-50 w-1/2 flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Login</h1>
      <div className="flex flex-col gap-3 w-full">
        <label className="font-semibold">User ID</label>
        <input
          type="text"
          value={userId}
          placeholder="Enter your user ID"
          onChange={(e) => setUserId(e.target.value)}
          className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w- py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
        />
      </div>
      <div className="flex flex-col">
            <label className="font-semibold">Password</label>
            <div className="flex relative">
              <input
                type={passwordType}
                value={password} placeholder="Enter you password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
              ></input>
              <button
                className="absolute right-2 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? <EyeOff></EyeOff> : <Eye></Eye>}
              </button>
            </div>
          </div>
      <button className="w-full rounded-md py-1 hover:border-purple-300 border-2 border-black bg-black text-white" onClick={handleForgotPassword}>Forgot Password?</button>
      <button className="w-full rounded-md py-1 hover:border-purple-300 border-2 border-black">Log In</button>
    </div>
  );
}
