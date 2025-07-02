'use client'
import Forgot from '@/components/Activity/Forgot'
import Login from '@/components/Activity/Login'
import React, { useState } from 'react'

export default function page(){
    const [isMfa,setIsMfa]=useState(false)
    return(
        <>
        <div className="flex flex-col gap-4 pt-5">
            <Login mfa={isMfa}></Login>
            <div className="border-b-2 border-gray-200 text-3xl font-bold h-50 pl-50 flex items-center">Or</div>
            <Forgot></Forgot>
        </div>
        </>
    )
}