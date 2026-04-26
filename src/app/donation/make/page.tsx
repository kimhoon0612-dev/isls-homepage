"use client";

import SubLayout from '@/components/SubLayout';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, Heart } from 'lucide-react';

const menuItems = [
  { name: "Why donation", href: "/donation/why" },
  { name: "Donation Wall", href: "/donation/wall" },
  { name: "Make a donation", href: "/donation/make" },
];

const DONATION_AMOUNTS = [100, 200, 300];

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    if (status === 'unauthenticated') {
      router.push('/login?from=/donation/make');
      return;
    }
    if (!selectedAmount) {
      alert('Please select a donation amount.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: selectedAmount,
          currency: 'USD',
          type: 'DONATION',
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      const paymentId = data.paymentId;
      const eximbayMid = process.env.NEXT_PUBLIC_EXIMBAY_MID || '1849571CA0';
      const returnUrl = `${window.location.origin}/api/payment/callback?paymentId=${paymentId}`;
      const cancelUrl = `${window.location.origin}/donation/make?cancelled=1`;

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://api.eximbay.com/v1/payments/ready';
      form.target = '_self';

      const fields: Record<string, string> = {
        mid: eximbayMid,
        ref: `ISLS-DON-${Date.now()}`,
        cur: 'USD',
        amt: String(selectedAmount),
        goodname: 'ISLS Donation',
        buyerName: session?.user?.name || '',
        buyerEmail: session?.user?.email || '',
        returnUrl,
        statusUrl: returnUrl,
        cancelUrl,
        lang: 'EN',
        displaytype: 'P',
        paymentId,
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (err: any) {
      alert(err.message || 'An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <SubLayout title="Make a donation" menuTitle="Donation" menuItems={menuItems} currentPath="/donation/make">
      <div className="mb-10 animate-fade-in">
        <h2 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4">Make a Donation</h2>
        <p className="text-lg text-gray-600 font-sans mt-4">Support the advancement of liver surgery worldwide.</p>
      </div>

      {!session && status !== 'loading' && (
        <div className="mb-10 p-6 bg-red-50/50 border-l-4 border-primary rounded-r-2xl text-sm font-sans text-gray-700 shadow-sm flex flex-col gap-2">
          <div>
            <span className="font-bold text-primary flex items-center gap-2 mb-1"><ShieldCheck className="w-5 h-5"/> Account Required</span>
            You must be signed in to make a donation via credit card.{' '}
            <Link href="/login?from=/donation/make" className="font-bold text-primary hover:underline transition-all">Sign in</Link>{' '}
            or{' '}
            <Link href="/join" className="font-bold text-primary hover:underline transition-all">create an account</Link>.
          </div>
          <span className="text-xs text-red-800/70 font-medium">Note: Donations are also open to non-members via wire transfer.</span>
        </div>
      )}

      {/* Amount Selection */}
      <div className="mb-10 animate-fade-in">
        <h3 className="font-serif font-bold text-gray-900 text-2xl mb-6">Select Donation Amount (Credit Card)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
          {DONATION_AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setSelectedAmount(amount)}
              className={`relative border-2 rounded-3xl p-8 text-center cursor-pointer transition-all overflow-hidden group ${
                selectedAmount === amount
                  ? 'border-primary bg-primary/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
                  : 'border-gray-100 bg-white hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5'
              }`}
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 transition-colors ${selectedAmount === amount ? "bg-primary" : "bg-gray-100 group-hover:bg-red-200"}`}></div>
              {selectedAmount === amount && (
                <CheckCircle2 className="absolute top-6 right-6 w-6 h-6 text-primary animate-scale-in" />
              )}
              <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-colors ${selectedAmount === amount ? 'bg-primary text-white' : 'bg-red-50 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                <Heart className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400 mb-1">One-time Donation</div>
              <div className="text-3xl font-serif font-bold text-gray-900">USD {amount}</div>
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500 font-sans bg-gray-50 p-4 rounded-xl border border-gray-100 inline-block">* Credit card donations available for amounts up to USD 300. For larger donations, please use wire transfer.</p>
      </div>

      {/* Pay Button */}
      <div className="flex flex-col items-center gap-5 pt-8 animate-fade-in">
        <button
          type="button"
          onClick={handleDonate}
          disabled={loading || !selectedAmount}
          className="w-full max-w-lg bg-primary hover:bg-primary-dark text-white font-sans font-bold uppercase tracking-widest px-8 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_20px_rgb(153,0,0,0.2)] hover:shadow-[0_12px_25px_rgb(153,0,0,0.3)] hover:-translate-y-0.5 text-base"
        >
          <CreditCard className="w-6 h-6" />
          {loading ? 'Processing...' : selectedAmount ? `Donate USD ${selectedAmount} via Eximbay` : 'Select an Amount'}
        </button>
        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-sans bg-gray-50 px-5 py-2.5 rounded-full border border-gray-100">
          <ShieldCheck className="w-4 h-4 text-gray-400" />
          Secure payment by Eximbay. Statement will show 'Eximbay'.
        </div>
      </div>

      {/* Wire Transfer */}
      <div className="mt-16 border border-gray-100 rounded-3xl overflow-hidden shadow-sm bg-white animate-fade-in">
        <div className="bg-gray-50 px-8 py-5 border-b border-gray-100">
          <h4 className="font-serif font-bold text-gray-900 text-xl">Wire Transfer <span className="text-sm font-sans font-normal text-gray-500 ml-2">(For donations over USD 300)</span></h4>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-sans bg-white">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <p className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">For International Members</p>
            <table className="w-full text-sm">
              <tbody>
                {[['Account Name', 'ISLS'], ['Account No.', '1081-100-820442'], ['Bank Name', 'Woori Bank'], ['Swift Code', 'HVBKKRSEXXX']].map(([k, v]) => (
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
                {[['은행명', '우리은행'], ['계좌번호', '1005-103-466897'], ['예금주', '국제간외과학회']].map(([k, v]) => (
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
    </SubLayout>
  );
}
