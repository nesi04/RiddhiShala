"use client";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
type Props={
  mfa:boolean;
}
const Login = ({mfa}:Props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router= useRouter()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //will be changed later
    console.log(userName, password);
    if(mfa) router.push('/activity/dashboard')
    router.push('/activity/mfa')
  };
  const [showPassword, setShowPassword] = useState(false);
  const passwordType = showPassword ? "text" : "password";
  return (
    <div className="flex items-center border-b-2 border-b-gray-200 md:pt-10 md:h-80 ">
      <div className="w-1/2 flex md:gap-5  flex-col justify-start md:pl-50 ">
        <h2 className="text-2xl font-semibold">Login</h2>
        <p>Please enter your credentials to log in</p>
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="font-semibold">Username</label>
            <input
              type="text"
              value={userName} placeholder="Enter your username"
              onChange={(e) => setUserName(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Password</label>
            <div className="flex relative">
              <input
                type={passwordType}
                value={password} placeholder="Enter you password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
              ></input>
              <button
                className="absolute left-115 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? <EyeOff></EyeOff> : <Eye></Eye>}
              </button>
            </div>
          </div>
          <div className="flex gap-10 items-center justify-center w-2/3">
          <button type="submit" className="flex items-center justify-center rounded-sm border-2 border-black md:w-55 md:py-1">Login</button>
          <button className="flex items-center justify-center rounded-sm border-2 text-white bg-black border-black md:w-55 md:py-1">Login with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
