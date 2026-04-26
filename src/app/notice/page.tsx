import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import SubLayout from "@/components/SubLayout";

const prisma = new PrismaClient();

export default async function NoticePage() {
  const notices = await prisma.notice.findMany({
    orderBy: [
      { isImportant: 'desc' },
      { createdAt: 'desc' }
    ]
  });

  const menuItems = [
    { name: "Notice Board", href: "/notice" },
    { name: "E-Newsletter", href: "/notice/newsletter" }
  ];

  return (
    <SubLayout title="Notice" menuTitle="News & Notices" menuItems={menuItems} currentPath="/notice">
      <div className="flex justify-between items-end mb-6 border-b-2 border-gray-900 pb-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900">Notice Board</h2>
        <p className="text-sm text-gray-500 font-sans">Total {notices.length} articles</p>
      </div>

      <div className="w-full font-sans">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-gray-200 bg-gray-50 text-sm font-bold text-gray-600 uppercase tracking-wider text-center">
          <div className="col-span-1">No</div>
          <div className="col-span-7 text-left pl-4">Title</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Views</div>
        </div>

        {/* Table Body */}
        <div className="flex flex-col">
          {notices.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              No notices available.
            </div>
          ) : (
            notices.map((notice, idx) => (
              <div 
                key={notice.id} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors items-center text-center ${notice.isImportant ? 'bg-red-50/50' : ''}`}
              >
                <div className="hidden md:block col-span-1 text-gray-400 text-sm">
                  {notice.isImportant ? <span className="inline-block px-2 py-1 bg-primary text-white text-xs font-bold rounded-sm">NOTICE</span> : (notices.length - idx)}
                </div>
                <div className="col-span-1 md:col-span-7 text-left pl-4">
                  <Link href={`/notice/${notice.id}`} className="text-lg font-medium text-gray-900 hover:text-primary transition-colors line-clamp-1">
                    {notice.title}
                  </Link>
                </div>
                <div className="col-span-1 md:col-span-2 text-sm text-gray-500 flex justify-between md:justify-center px-4 md:px-0">
                  <span className="md:hidden font-bold">Date: </span>
                  {new Date(notice.createdAt).toISOString().split('T')[0]}
                </div>
                <div className="hidden md:block col-span-2 text-sm text-gray-500">
                  {notice.viewCount}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </SubLayout>
  );
}
