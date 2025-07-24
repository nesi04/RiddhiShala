"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '../utils/auth';
import { Loader2 } from 'lucide-react';

export default function withAuth(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const [checkingAuth, setCheckingAuth] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      // Simulate network delay for better UX (remove in production)
      const timer = setTimeout(() => {
        const authStatus = isAuthenticated();
        setAuthenticated(authStatus);
        setCheckingAuth(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }, []);


    if (!authenticated) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-gray-50">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 animate-fade-in">
            <div className="text-center space-y-2">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Access Denied</h2>
              <p className="text-gray-600">
                You need to be logged in to view this page
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => router.push('/login')}
                className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign In
              </button>
              <button
                onClick={() => router.push('/')}
                className="w-full px-4 py-2 text-green-600 hover:text-green-800 font-medium rounded-md transition duration-200"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      );
    }

    return <Component {...props} />;
  };
}