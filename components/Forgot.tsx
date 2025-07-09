'use client'
import React, { ReactNode, useState } from 'react'

const Forgot = () => {

    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('');
     const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        setMessage('A password reset link has been sent to your mail')
      };
  return (
    <>
    <div className="flex items-center border-b-2 border-b-gray-200 md:pt-10 md:h-80 ">
      <div className="w-1/2 flex md:gap-5  flex-col justify-start md:pl-50 ">
        <h2 className="text-2xl font-semibold">Forgot Password</h2>
        <p>Please enter your email address to reset password</p>
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="font-semibold">Email</label>
            <input
              type="text"
              value={email} placeholder='Enter your email address'
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
            />
          </div>
          
        
          <div className="flex gap-10 items-center justify-center w-2/3">
          
          <button type='submit'className="flex items-center justify-center rounded-sm border-2 text-white bg-black border-black md:w-55 md:py-1">Request Reset Link</button>
          </div>
        </form>
      </div>

      
      </div>
      <div className="bg-gray-200 w-9/10 h-80 flex items-center justify-center mx-auto">{message}</div>
      </>
  );
}

export default Forgot