"use client";

import { Suspense } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubLayout from "@/components/SubLayout";
import { User, Mail, Building2, ShieldCheck, Calendar, CreditCard, CheckCircle2, ArrowRight } from "lucide-react";

const menuItems = [
  { name: "About ISLS Membership", href: "/membership/about" },
  { name: "Join or Renew", href: "/membership/join" },
  { name: "My ISLS Membership", href: "/membership/mypage" },
  { name: "VOD / E-Learning", href: "/membership/vod" },
  { name: "ISLS Members list", href: "/membership/members" },
  { name: "By-laws", href: "/membership/bylaws" },
  { name: "Journal", href: "/membership/journal" },
];

const roleLabel: Record<string, { label: string; color: string }> = {
  ADMIN: { label: "Administrator", color: "bg-purple-100 text-purple-800" },
  PAID_USER: { label: "Active Member", color: "bg-green-100 text-green-800" },
  USER: { label: "Registered", color: "bg-gray-100 text-gray-700" },
};

// Inner component that uses useSearchParams — must be inside Suspense
function MyPageContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const paymentSuccess = searchParams.get("payment") === "success";
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?from=/membership/mypage");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      fetch("/api/user/me")
        .then((r) => r.json())
        .then((data) => setProfile(data))
        .catch(() => {});
    }
  }, [session]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!session) return null;

  const user = session.user as any;
  const roleInfo = roleLabel[(profile?.role || user?.role || "USER")] ?? roleLabel.USER;
  const joinDate = profile?.createdAt
    ? new Date(profile.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "—";

  return (
    <>
      {paymentSuccess && (
        <div className="mb-8 flex items-center gap-4 bg-green-50 border-l-4 border-green-500 rounded-r-2xl px-6 py-5 shadow-sm animate-fade-in">
          <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
          <p className="text-base text-green-800 font-sans font-semibold">Payment successful! Your membership has been activated.</p>
        </div>
      )}

      <div className="mb-10 animate-fade-in">
        <h2 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4">My ISLS Membership</h2>
        <p className="text-lg text-gray-600 font-sans mt-4">Manage your profile and membership details</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="xl:col-span-2 space-y-8">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
            <div className="bg-gradient-to-r from-primary to-[#660000] px-8 py-8 flex items-center gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20 shadow-inner">
                <User className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <div className="relative z-10">
                <h3 className="text-white font-serif font-bold text-3xl leading-tight mb-2">{user.name}</h3>
                <span className={`inline-block text-xs font-sans font-bold px-3 py-1 rounded-full ${roleInfo.color} shadow-sm border border-white/20`}>
                  {roleInfo.label}
                </span>
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-red-100 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-gray-400">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-sans font-semibold text-gray-900 break-all">{user.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-red-100 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-gray-400">
                  <Building2 className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-1">Affiliation</p>
                  <p className="text-sm font-sans font-semibold text-gray-900">{profile?.affiliation || "—"}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-red-100 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-gray-400">
                  <Calendar className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-1">Member Since</p>
                  <p className="text-sm font-sans font-semibold text-gray-900">{joinDate}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-red-100 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-gray-400">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-1">Member Status</p>
                  <p className={`text-sm font-sans font-bold ${profile?.role === "PAID_USER" ? "text-green-600" : "text-gray-600"}`}>
                    {profile?.role === "PAID_USER" ? "Active (Paid)" : profile?.role === "ADMIN" ? "Administrator" : "Registered (Not Paid)"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
              <h4 className="font-serif font-bold text-xl text-gray-900">Payment History</h4>
            </div>
            <div className="p-8">
              {profile?.payments && profile.payments.length > 0 ? (
                <div className="space-y-4">
                  {profile.payments.map((p: any) => (
                    <div key={p.id} className="flex items-center justify-between py-4 px-6 border border-gray-100 rounded-2xl hover:border-red-100 hover:shadow-sm transition-all bg-white">
                      <div>
                        <p className="text-sm font-sans font-bold text-gray-900 mb-1">{p.type}</p>
                        <p className="text-xs text-gray-500 font-sans">{new Date(p.createdAt).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-serif font-bold text-gray-900 mb-1">{p.currency} {p.amount}</p>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${p.status === "COMPLETED" ? "bg-green-50 text-green-700 border border-green-200" : p.status === "PENDING" ? "bg-yellow-50 text-yellow-700 border border-yellow-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                          {p.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                  <CreditCard className="w-10 h-10 text-gray-300 mx-auto mb-3" strokeWidth={1} />
                  <p className="text-sm text-gray-500 font-sans">No payment records found.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Side actions */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary to-[#660000] rounded-3xl p-8 text-white shadow-[0_8px_30px_rgb(153,0,0,0.2)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
            <CreditCard className="w-10 h-10 mb-4 text-red-200" strokeWidth={1.5} />
            <h4 className="font-serif font-bold text-2xl mb-2 relative z-10">Renew Membership</h4>
            <p className="text-sm text-red-100 font-sans mb-6 relative z-10 leading-relaxed">Keep your ISLS membership active to enjoy all exclusive member benefits and resources.</p>
            <Link href="/membership/join"
              className="flex items-center justify-between bg-white text-primary px-5 py-4 font-sans font-bold text-sm hover:bg-gray-50 transition-all rounded-2xl shadow-md group relative z-10 hover:-translate-y-0.5">
              Renew Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </Link>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 className="font-serif font-bold text-xl text-gray-900 mb-5 border-b border-gray-100 pb-3">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "VOD / E-Learning", href: "/membership/vod" },
                { label: "ISLS Members List", href: "/membership/members" },
                { label: "Donation", href: "/donation/make" },
                { label: "Notice Board", href: "/notice" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center justify-between text-sm text-gray-600 hover:text-primary font-sans font-medium transition-colors p-3 rounded-xl hover:bg-red-50 group border border-transparent hover:border-red-100">
                    {link.label}
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// Outer wrapper with Suspense boundary (required for useSearchParams in Next.js App Router)
export default function MyPage() {
  return (
    <SubLayout title="My ISLS Membership" menuTitle="Membership" menuItems={menuItems} currentPath="/membership/mypage">
      <Suspense fallback={
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
        </div>
      }>
        <MyPageContent />
      </Suspense>
    </SubLayout>
  );
}
