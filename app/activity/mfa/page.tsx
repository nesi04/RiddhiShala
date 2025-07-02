'use client'
import { useRouter } from "next/navigation"

export default function page(){
    const router = useRouter()
    const handleSubmit=()=>{
        router.push('/activity/dashboard')
    }
    return(
        <>
        <div className="flex flex-col items-center justify-center md:pt-20 md:gap-4">
            <h1 className="font-semibold text-4xl ">Multi Factor Authentication Setup</h1>
            <p>Secure your account by setting up multi factor authentication</p>
            <button onClick={handleSubmit} className="w-60 py-2 bg-black rounded-lg text-white">Verify</button>
        </div>
        </>
    )
}