// app/verify/VerifyClient.tsx
"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState("Verifying your account...");
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    if (!token || !email) {
      setMessage("Invalid verification link.");
      setError(true);
      return;
    }

    async function verify() {
      try {
        const res = await fetch(`/api/auth/verify?token=${token}&email=${email}`);
        const data = await res.json();

        if (res.ok) {
          setMessage("Your account has been successfully verified! Redirecting...");
          setError(false);
          setTimeout(() => router.push("/dashboard"), 3500);
        } else {
          setMessage(data.message || "Verification failed.");
          setError(true);
        }
      } catch {
        setMessage("Network error. Please try again later.");
        setError(true);
      }
    }

    verify();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <h1 className={`text-2xl font-semibold mb-4 ${error ? "text-red-600" : "text-green-600"}`}>
        {error ? "Verification Error" : "Verification Status"}
      </h1>
      <p className="text-center text-gray-700 max-w-md">{message}</p>
    </div>
  );
}
