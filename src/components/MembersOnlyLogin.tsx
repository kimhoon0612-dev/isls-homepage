"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

interface MembersOnlyLoginProps {
  message?: string;
}

export default function MembersOnlyLogin({ message = "Please sign in to access the ISLS platform." }: MembersOnlyLoginProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.refresh();
    }
  };

  return (
    <div className="py-16 text-center flex flex-col items-center justify-center max-w-md mx-auto">
      <Lock className="w-16 h-16 text-gray-300 mb-6" strokeWidth={1} />
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Members Only Access</h2>
      <p className="text-gray-500 font-sans mb-10">{message}</p>

      {error && (
        <div className="bg-red-50 border-l-4 border-[#990000] p-4 mb-6 w-full text-left">
          <p className="text-[#990000] text-sm font-sans font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full space-y-5 text-left">
        <div>
          <label className="block text-sm font-sans font-medium text-gray-700 mb-1">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              required
              className="w-full pl-10 pr-3 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#990000] focus:border-[#990000] font-sans transition-colors bg-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-sans font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="password"
              required
              className="w-full pl-10 pr-3 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#990000] focus:border-[#990000] font-sans transition-colors bg-white"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-4 px-4 border border-transparent text-sm font-bold font-sans uppercase tracking-widest text-white bg-[#990000] hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#990000] transition-all disabled:opacity-70 shadow-md hover:shadow-lg"
          >
            {loading ? "Signing in..." : "Sign in to access"}
            {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
          </button>
        </div>
      </form>

      <div className="mt-8 text-sm text-gray-500 font-sans border-t border-gray-100 w-full pt-6">
        Not a member yet?{" "}
        <Link href="/membership/join" className="font-medium text-[#990000] hover:underline transition-colors">
          Join or Renew ISLS
        </Link>
      </div>
    </div>
  );
}
