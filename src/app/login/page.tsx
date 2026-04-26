"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Lock, Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
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
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    } else {
      router.push("/membership/mypage");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/sub_img01.jpg" 
          alt="ISLS Background" 
          fill 
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 via-gray-50/80 to-gray-50"></div>
      </div>

      <div className="max-w-[1000px] w-full flex flex-col md:flex-row bg-white rounded-[2rem] shadow-[0_20px_60px_rgb(0,0,0,0.08)] overflow-hidden z-10 animate-fade-in border border-gray-100">
        
        {/* Left Side - Graphic & Text */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#990000] to-[#660000] p-12 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <Link href="/" className="inline-block bg-white p-3 rounded-2xl mb-12 shadow-lg">
              <Image src="/images/header_logo.png" alt="ISLS Logo" width={140} height={40} className="h-auto" />
            </Link>
            <h2 className="text-3xl font-serif font-bold leading-tight mb-4 text-white">Welcome back to the ISLS Member Space.</h2>
            <p className="text-red-100 font-sans text-sm leading-relaxed">
              Sign in to access exclusive educational resources, VOD lectures, member directory, and manage your membership status.
            </p>
          </div>
          
          <div className="relative z-10 flex items-center gap-3 bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
            <ShieldCheck className="w-8 h-8 text-red-200" strokeWidth={1.5} />
            <p className="text-xs font-sans text-red-100">Your connection is secure and encrypted.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-7/12 p-10 lg:p-14 bg-white flex flex-col justify-center relative">
          <div className="md:hidden text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/header_logo.png" alt="ISLS Logo" width={160} height={45} className="h-auto mx-auto" />
            </Link>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight mb-2">Sign In</h2>
            <p className="text-gray-500 font-sans text-sm">Please enter your credentials to access your account.</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-6 flex items-start gap-3 animate-fade-in">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 font-bold text-xs">!</span>
              </div>
              <p className="text-red-800 text-sm font-sans font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-sans font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <input
                  type="email"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white font-sans text-gray-900 transition-all"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-sans font-bold uppercase tracking-widest text-gray-500">Password</label>
                <a href="#" className="text-xs font-sans font-bold text-primary hover:text-primary-dark transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <input
                  type="password"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white font-sans text-gray-900 transition-all"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center pt-2">
              <input id="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 font-sans cursor-pointer select-none">
                Remember me for 30 days
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-4 px-4 rounded-2xl text-sm font-bold font-sans uppercase tracking-widest text-white bg-primary hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {loading ? "Signing in..." : "Sign In to Account"}
                {!loading && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />}
              </button>
            </div>
          </form>

          <div className="mt-10 text-center pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 font-sans">
              Not a member yet?{" "}
              <Link href="/join" className="font-bold text-gray-900 hover:text-primary transition-colors">
                Create an Account
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
