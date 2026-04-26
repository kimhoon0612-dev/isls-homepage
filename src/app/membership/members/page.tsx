
import SubLayout from '@/components/SubLayout';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MembersOnlyLogin from "@/components/MembersOnlyLogin";

export default async function Page() {
  const session = await getServerSession(authOptions as any);
  const isAuthenticated = !!(session as any)?.user;

  const menuItems = [
    { name: "About ISLS Membership", href: "/membership/about" },
    { name: "Join or Renew", href: "/membership/join" },
    { name: "My ISLS Membership", href: "/membership/mypage" },
    { name: "VOD / E-Learning", href: "/membership/vod" },
    { name: "ISLS Members list", href: "/membership/members" },
    { name: "By-laws", href: "/membership/bylaws" },
    { name: "Journal", href: "/membership/journal" },
  ];

  return (
    <SubLayout title="ISLS Members list" menuTitle="Membership" menuItems={menuItems} currentPath="/membership/members">
      {!isAuthenticated ? (
        <MembersOnlyLogin message="Please sign in to access the ISLS Members directory." />
      ) : (
        <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-10 animate-fade-in">
          <h3 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 mb-8">ISLS Members Directory</h3>
          <div className="prose max-w-none prose-lg text-gray-700 font-sans leading-relaxed">
            <p className="bg-gray-50 p-6 rounded-2xl border border-gray-100">The members directory is currently being synchronized with our updated database system. Once completed, active members will be able to search and network with other ISLS professionals securely through this platform.</p>
          </div>
        </div>
      )}
    </SubLayout>
  );
}
