
import SubLayout from '@/components/SubLayout';
import { Quote, Award, Gem, Star, HeartHandshake } from 'lucide-react';

export default function Page() {
  const menuItems = [
    { name: "Why donation", href: "/donation/why" },
    { name: "Donation Wall", href: "/donation/wall" },
    { name: "Make a donation", href: "/donation/make" },
  ];

  const tiers = [
    {
      title: "Leaders",
      amount: "$3,000 and up",
      icon: Award,
      gradient: "from-slate-800 to-slate-900",
      textColor: "text-slate-800",
      donors: ["Ki-Hun Kim, Korea"]
    },
    {
      title: "Diamonds",
      amount: "$1,000 ~ $2,999",
      icon: Gem,
      gradient: "from-cyan-500 to-blue-600",
      textColor: "text-blue-600",
      donors: []
    },
    {
      title: "Ruby",
      amount: "$500 ~ $999",
      icon: Gem,
      gradient: "from-rose-500 to-red-600",
      textColor: "text-rose-600",
      donors: []
    },
    {
      title: "Gold",
      amount: "$301 ~ $499",
      icon: Star,
      gradient: "from-amber-400 to-yellow-600",
      textColor: "text-amber-600",
      donors: []
    },
    {
      title: "Friends",
      amount: "~$300",
      icon: HeartHandshake,
      gradient: "from-emerald-400 to-teal-600",
      textColor: "text-teal-600",
      donors: []
    }
  ];

  return (
    <SubLayout title="Donation Wall" menuTitle="Donation" menuItems={menuItems} currentPath="/donation/wall">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <h2 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4">Donation Wall</h2>
        </div>
        
        {/* Quote Section */}
        <div className="bg-red-50/50 border-l-4 border-primary p-8 md:p-10 mb-14 relative rounded-r-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-fade-in">
          <Quote className="absolute top-4 left-4 w-16 h-16 text-primary/10" strokeWidth={1.5} />
          <p className="relative z-10 text-lg md:text-xl font-serif text-gray-800 italic leading-relaxed pl-14 font-medium">
            "We gratefully acknowledge our donors, whose generous support is essential to the ISLS mission—promoting academic activities for members and advancing training programs for young surgeons in the fields of liver transplantation, hepatopancreatic surgery, and endoscopic and laparoscopic liver surgery."
          </p>
        </div>

        {/* Leaders Tier - Full Width */}
        <div className="mb-10 animate-fade-in">
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 duration-300 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className={"bg-gradient-to-r " + tiers[0].gradient + " p-8 text-center text-white flex flex-col items-center justify-center relative overflow-hidden"}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              {(() => {
                const LeaderIcon = tiers[0].icon;
                return <LeaderIcon className="w-12 h-12 mb-3 opacity-90 drop-shadow-md relative z-10" />;
              })()}
              <h4 className="text-3xl font-serif font-bold tracking-widest uppercase relative z-10 drop-shadow-md">{tiers[0].title}</h4>
              <p className="text-sm font-sans font-medium tracking-widest bg-black/20 px-4 py-1.5 rounded-full mt-4 border border-white/20 relative z-10">{tiers[0].amount}</p>
            </div>
            <div className="p-10 text-center min-h-[160px] flex items-center justify-center flex-col bg-white/60 backdrop-blur-sm">
              {tiers[0].donors.map((donor, idx) => (
                <div key={idx} className={"text-3xl font-serif font-bold italic drop-shadow-sm " + tiers[0].textColor}>
                  {donor}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Tiers - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in delay-100">
          {tiers.slice(1).map((tier, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100 transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 duration-300 flex flex-col group">
              <div className={"bg-gradient-to-br " + tier.gradient + " p-6 text-center text-white flex flex-col items-center justify-center relative overflow-hidden"}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                <tier.icon className="w-8 h-8 mb-3 opacity-90 relative z-10 drop-shadow-sm" />
                <h4 className="text-2xl font-serif font-bold tracking-widest uppercase relative z-10 drop-shadow-sm">{tier.title}</h4>
                <p className="text-xs font-sans font-bold tracking-widest bg-black/20 px-3 py-1 rounded-full mt-3 border border-white/20 relative z-10">{tier.amount}</p>
              </div>
              <div className="p-8 text-center flex-1 flex flex-col items-center justify-center bg-gray-50/30 group-hover:bg-gray-50/50 transition-colors">
                {tier.donors.length > 0 ? (
                  tier.donors.map((donor, i) => (
                    <div key={i} className={"text-xl font-serif font-bold italic " + tier.textColor}>
                      {donor}
                    </div>
                  ))
                ) : (
                  <span className="text-gray-400/80 font-sans text-sm italic font-medium">Waiting for our first generous donor...</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubLayout>
  );
}
