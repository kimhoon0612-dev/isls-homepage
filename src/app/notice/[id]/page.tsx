import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import SubLayout from "@/components/SubLayout";
import { ArrowLeft } from "lucide-react";

const prisma = new PrismaClient();

export default async function NoticeDetailPage({ params }: { params: { id: string } }) {
  // We use Promise.resolve(params) or just access params directly in Next 14/15 depending on version. 
  // In Next.js 15, `params` is an asynchronous concept, so we should `await params`. Since we're on Next 16/15 logic, let's await it.
  const resolvedParams = await params;

  const notice = await prisma.notice.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!notice) {
    notFound();
  }

  // Increment view count
  await prisma.notice.update({
    where: { id: resolvedParams.id },
    data: { viewCount: notice.viewCount + 1 }
  });

  const menuItems = [
    { name: "Notice Board", href: "/notice" },
    { name: "E-Newsletter", href: "/notice/newsletter" }
  ];

  return (
    <SubLayout title="Notice" menuTitle="News & Notices" menuItems={menuItems} currentPath="/notice">
      <div className="bg-white border border-gray-200">
        <div className="p-8 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3 mb-4">
            {notice.isImportant && (
              <span className="px-2 py-1 bg-primary text-white text-xs font-bold rounded-sm tracking-wider">NOTICE</span>
            )}
            <span className="text-gray-500 font-sans text-sm">
              {new Date(notice.createdAt).toISOString().split('T')[0]}
            </span>
            <span className="text-gray-400 font-sans text-sm">|</span>
            <span className="text-gray-500 font-sans text-sm">Views: {notice.viewCount + 1}</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 leading-tight">
            {notice.title}
          </h1>
        </div>
        
        <div className="p-8 min-h-[400px] prose max-w-none prose-lg text-gray-700">
          <div dangerouslySetInnerHTML={{ __html: notice.content }} />
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/notice" className="inline-flex items-center px-8 py-3 bg-gray-900 hover:bg-black text-white font-sans font-bold uppercase tracking-widest text-sm transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to List
        </Link>
      </div>
    </SubLayout>
  );
}
