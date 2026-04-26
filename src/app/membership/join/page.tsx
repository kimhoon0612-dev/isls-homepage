"use client";

import { useState } from "react";
import SubLayout from "@/components/SubLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CreditCard, ShieldCheck, CheckCircle2, ChevronDown, Lock } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "About ISLS Membership", href: "/membership/about" },
  { name: "Join or Renew", href: "/membership/join" },
  { name: "My ISLS Membership", href: "/membership/mypage" },
  { name: "VOD / E-Learning", href: "/membership/vod" },
  { name: "ISLS Members list", href: "/membership/members" },
  { name: "By-laws", href: "/membership/bylaws" },
  { name: "Journal", href: "/membership/journal" },
];

const membershipPlans = [
  {
    id: "standard",
    name: "Standard",
    price: 100,
    currency: "USD",
    description: "Full membership for established liver surgeons and professionals.",
    features: ["Access to all ISLS resources", "Voting rights", "Congress discounts", "E-Newsletter", "VOD access"],
  },
  {
    id: "junior",
    name: "Junior",
    price: 60,
    currency: "USD",
    description: "For trainees and early-career surgeons (under 35 years of age).",
    features: ["Access to ISLS resources", "Congress discounts", "E-Newsletter", "VOD access", "Mentorship opportunities"],
  },
  {
    id: "associate",
    name: "Associate",
    price: 60,
    currency: "USD",
    description: "For allied health members supporting liver surgery.",
    features: ["Access to ISLS resources", "Congress discounts", "E-Newsletter", "VOD access"],
  },
];

export default function MembershipJoinPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showWireDetails, setShowWireDetails] = useState(false);

  const handleEximbayPayment = async () => {
    if (status === "unauthenticated") {
      alert("Please sign in first to join or renew your membership.");
      router.push("/login?from=/membership/join");
      return;
    }
    if (!selectedPlan) {
      alert("Please select a membership category first.");
      return;
    }

    const plan = membershipPlans.find((p) => p.id === selectedPlan);
    if (!plan) return;

    setLoading(true);

    try {
      // Create a pending payment record
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: plan.price,
          currency: plan.currency,
          type: "MEMBERSHIP",
          membershipCategory: plan.name,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create payment record");

      const paymentId = data.paymentId;

      // Eximbay payment form POST (redirect method)
      // Build the form and submit
      const eximbayMid = process.env.NEXT_PUBLIC_EXIMBAY_MID || "1849571CA0";
      const returnUrl = `${window.location.origin}/api/payment/callback?paymentId=${paymentId}`;
      const cancelUrl = `${window.location.origin}/membership/join?cancelled=1`;
      const refNo = `ISLS-${Date.now()}`;
      const orderName = `ISLS ${plan.name} Membership`;

      // Create a hidden form and submit to Eximbay
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://api.eximbay.com/v1/payments/ready";
      form.target = "_self";

      const fields: Record<string, string> = {
        mid: eximbayMid,
        ref: refNo,
        cur: plan.currency,
        amt: String(plan.price),
        goodname: orderName,
        buyerName: session?.user?.name || "",
        buyerEmail: session?.user?.email || "",
        returnUrl: returnUrl,
        statusUrl: returnUrl,
        cancelUrl: cancelUrl,
        lang: "EN",
        displaytype: "P", // Popup mode
        paymentId: paymentId,
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (err: any) {
      alert(err.message || "An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <SubLayout title="Join or Renew" menuTitle="Membership" menuItems={menuItems} currentPath="/membership/join">

      {/* Header */}
      <div className="mb-6 sm:mb-10 animate-fade-in">
        <h2 className="text-xl sm:text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-3 sm:pb-4">Join or Renew Membership</h2>
        <p className="text-sm sm:text-lg text-gray-600 font-sans mt-3 sm:mt-4">Select your membership category and proceed to secure payment via Eximbay.</p>
      </div>

      {/* Steps */}
      <div className="mb-6 sm:mb-12 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 animate-fade-in">
        {["Sign up", "Select Category", "Payment", "Complete"].map((step, i) => (
          <div key={step} className={`flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl sm:rounded-3xl text-center text-xs sm:text-sm font-sans border-2 transition-all shadow-sm ${i < 2 ? "bg-primary/5 border-primary/20 text-primary font-bold shadow-primary/5" : "bg-white border-gray-100 text-gray-400"}`}>
            <span className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold mb-1.5 sm:mb-3 ${i < 2 ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-gray-100 text-gray-400"}`}>{i + 1}</span>
            {step}
          </div>
        ))}
      </div>

      {/* Membership Plans */}
      <h3 className="font-serif font-bold text-gray-900 text-lg sm:text-2xl mb-4 sm:mb-6">Select Membership Category</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {membershipPlans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => setSelectedPlan(plan.id)}
            className={`relative text-left rounded-3xl border-2 p-8 transition-all cursor-pointer overflow-hidden group ${selectedPlan === plan.id ? "border-primary bg-primary/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" : "border-gray-100 bg-white hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5"}`}
          >
            <div className={`absolute top-0 left-0 w-full h-1.5 transition-colors ${selectedPlan === plan.id ? "bg-primary" : "bg-gray-100 group-hover:bg-red-200"}`}></div>
            {selectedPlan === plan.id && (
              <CheckCircle2 className="absolute top-6 right-6 w-6 h-6 text-primary animate-scale-in" />
            )}
            <div className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400 mb-2">{plan.id === "associate" ? "Associate" : plan.id.charAt(0).toUpperCase() + plan.id.slice(1)}</div>
            <div className="text-3xl font-serif font-bold text-gray-900 mb-1">USD {plan.price}</div>
            <div className="text-xs text-gray-500 font-sans mb-5 font-medium">per year</div>
            <p className="text-sm text-gray-600 font-sans mb-6 min-h-[40px]">{plan.description}</p>
            <div className="pt-5 border-t border-gray-100/80">
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </div>

      {/* Notice */}
      <div className="mb-10 text-sm text-gray-700 font-sans space-y-2 border-l-4 border-primary pl-5 bg-red-50/40 p-6 rounded-r-3xl shadow-sm">
        <p className="text-primary font-bold text-base mb-3 flex items-center gap-2"><ShieldCheck className="w-5 h-5"/> Important Notes</p>
        <p>Active Members will be required to pay an annual subscription to maintain their membership.</p>
        <p>The membership year runs from <strong>January 1 to December 31</strong> regardless of the date of application.</p>
        <p>For corporate membership, please contact: <a href="mailto:isls@isls-society.org" className="text-primary font-bold hover:underline transition-all">isls@isls-society.org</a></p>
      </div>

      {/* Wire Transfer info (collapsible) */}
      <div className="mb-12 border border-gray-100 rounded-3xl overflow-hidden shadow-sm bg-white">
        <button
          type="button"
          className="w-full flex items-center justify-between px-8 py-5 bg-gray-50 hover:bg-gray-100/50 transition-colors text-base font-serif font-bold text-gray-900"
          onClick={() => setShowWireDetails(!showWireDetails)}
        >
          Wire Transfer Bank Details
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showWireDetails ? "rotate-180" : ""}`} />
        </button>
        <div className={`transition-all duration-300 overflow-hidden ${showWireDetails ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-sans bg-white">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">For International Members</p>
              <table className="w-full text-sm">
                <tbody>
                  {[["Account Name", "ISLS"], ["Account No.", "1081-100-820442"], ["Bank Name", "Woori Bank"], ["Swift Code", "HVBKKRSEXXX"]].map(([k, v]) => (
                    <tr key={k} className="border-b border-gray-100/50 last:border-0">
                      <td className="py-3 pr-3 font-medium text-gray-500 w-2/5">{k}</td>
                      <td className="py-3 text-gray-900 font-semibold">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">For Domestic Members (Korea)</p>
              <table className="w-full text-sm">
                <tbody>
                  {[["은행명", "우리은행"], ["계좌번호", "1005-103-466897"], ["예금주", "국제간외과학회"]].map(([k, v]) => (
                    <tr key={k} className="border-b border-gray-100/50 last:border-0">
                      <td className="py-3 pr-3 font-medium text-gray-500 w-2/5">{k}</td>
                      <td className="py-3 text-gray-900 font-semibold">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Payment CTA */}
      <div className="flex flex-col items-center gap-5 pt-4">
        {!session && (
          <div className="w-full max-w-lg text-center bg-red-50 border border-red-100 rounded-2xl px-6 py-4 text-sm text-red-800 font-sans flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> You must <Link href="/login?from=/membership/join" className="font-bold text-primary hover:underline transition-all">Sign In</Link> before proceeding to payment.
          </div>
        )}
        <button
          type="button"
          onClick={handleEximbayPayment}
          disabled={loading || !selectedPlan}
          className="w-full max-w-lg bg-primary hover:bg-primary-dark text-white font-sans font-bold uppercase tracking-widest px-8 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_20px_rgb(153,0,0,0.2)] hover:shadow-[0_12px_25px_rgb(153,0,0,0.3)] hover:-translate-y-0.5 text-base"
        >
          <CreditCard className="w-6 h-6" />
          {loading ? "Processing..." : selectedPlan ? `Pay USD ${membershipPlans.find(p => p.id === selectedPlan)?.price} via Eximbay` : "Select a Plan to Pay"}
        </button>
        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-sans bg-gray-50 px-5 py-2.5 rounded-full border border-gray-100">
          <ShieldCheck className="w-4 h-4 text-gray-400" />
          Secure payment by Eximbay. Statement will show 'Eximbay'.
        </div>
        <p className="text-xs text-primary font-sans font-bold tracking-widest uppercase mt-2">※ No Refund Policy</p>
      </div>
    </SubLayout>
  );
}
