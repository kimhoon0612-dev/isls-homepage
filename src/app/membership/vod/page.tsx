import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SubLayout from "@/components/SubLayout";
import Link from "next/link";
import { Lock, PlayCircle, Video } from "lucide-react";
import MembersOnlyLogin from "@/components/MembersOnlyLogin";

const prisma = new PrismaClient();

export default async function VodPage() {
  const session = await getServerSession(authOptions as any);
  
  const menuItems = [
    { name: "About ISLS Membership", href: "/membership/about" },
    { name: "Join or Renew", href: "/membership/join" },
    { name: "My ISLS Membership", href: "/membership/mypage" },
    { name: "VOD / E-Learning", href: "/membership/vod" },
    { name: "ISLS Members list", href: "/membership/members" },
    { name: "By-laws", href: "/membership/bylaws" },
    { name: "Journal", href: "/membership/journal" },
  ];

  // Access Control Logic
  const isAuthenticated = !!(session as any)?.user;
  const isPaidUser = (session as any)?.user && ((session as any).user.role === "PAID_USER" || (session as any).user.role === "ADMIN");

  if (!isAuthenticated) {
    return (
      <SubLayout title="VOD / E-Learning" menuTitle="Membership" menuItems={menuItems} currentPath="/membership/vod">
        <MembersOnlyLogin message="Please sign in to access the ISLS VOD and E-Learning platform." />
      </SubLayout>
    );
  }

  if (!isPaidUser) {
    return (
      <SubLayout title="VOD / E-Learning" menuTitle="Membership" menuItems={menuItems} currentPath="/membership/vod">
        <div className="py-24 text-center flex flex-col items-center justify-center bg-gray-50/50 rounded-3xl border border-gray-100 shadow-sm mx-auto max-w-4xl">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-8">
            <Video className="w-10 h-10 text-gray-400" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Premium Membership Required</h2>
          <p className="text-lg text-gray-500 font-sans mb-10 max-w-lg leading-relaxed">
            Your current membership status does not include VOD access. Please renew or upgrade your membership to enjoy unlimited access to our educational resources.
          </p>
          <Link href="/membership/join" className="px-10 py-4 rounded-2xl bg-gradient-to-r from-[#990000] to-[#660000] text-white font-sans font-bold uppercase tracking-widest text-sm hover:shadow-[0_8px_20px_rgb(153,0,0,0.3)] hover:-translate-y-0.5 transition-all">
            Upgrade Membership
          </Link>
        </div>
      </SubLayout>
    );
  }

  // Fetch VODs for Paid Users
  const vods = await prisma.vod.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <SubLayout title="VOD / E-Learning" menuTitle="Membership" menuItems={menuItems} currentPath="/membership/vod">
      <div className="mb-10 animate-fade-in">
        <h2 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4">Lecture VODs</h2>
      </div>

      {vods.length === 0 ? (
        <div className="py-24 text-center bg-gray-50/50 rounded-3xl border border-gray-100 flex flex-col items-center">
          <Video className="w-16 h-16 text-gray-200 mb-4" strokeWidth={1} />
          <p className="text-lg text-gray-500 font-sans">No VOD contents available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {vods.map((vod) => (
            <div key={vod.id} className="group cursor-pointer bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.1)] transition-all rounded-[2rem] overflow-hidden flex flex-col hover:-translate-y-1 duration-300">
              <div className="aspect-video bg-gray-900 relative flex items-center justify-center overflow-hidden">
                {vod.thumbnailUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={vod.thumbnailUrl} alt={vod.title} className="object-cover w-full h-full opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#660000] to-black opacity-80" />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <PlayCircle className="absolute w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all z-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" strokeWidth={1.5} />
              </div>
              <div className="p-8 bg-white flex-1 flex flex-col relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-100 group-hover:bg-primary transition-colors"></div>
                <span className="inline-block px-3 py-1 bg-red-50 text-primary border border-red-100 text-[10px] font-sans font-bold tracking-widest uppercase mb-4 rounded-full w-fit">ISLS Congress</span>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {vod.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 line-clamp-2 mt-auto leading-relaxed">
                  {vod.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </SubLayout>
  );
}
