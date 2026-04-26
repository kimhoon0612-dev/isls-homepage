import SubLayout from "@/components/SubLayout";

export default function NewsletterPage() {
  const menuItems = [
    { name: "Notice Board", href: "/notice" },
    { name: "E-Newsletter", href: "/notice/newsletter" }
  ];

  const newsletters = [
    { title: "[2026.04] 2nd Newsletter(English)", url: "/newsletter/newsletter_2026_02.html", date: "2026-04-01" },
    { title: "[2026.01] 1st Newsletter(English)", url: "/newsletter/newsletter_2026_01.html", date: "2026-01-01" },
    { title: "[2025.12] 37th Newsletter(English)", url: "/newsletter/newsletter_37_eng.html", date: "2025-12-01" },
    { title: "[2025.09] 36th Newsletter(English)", url: "/newsletter/newsletter_36_eng.html", date: "2025-09-01" },
    { title: "[2025.08] 35th Newsletter(English)", url: "/newsletter/newsletter_35_eng.html", date: "2025-08-15" },
    { title: "[2025.08] 34th Newsletter(English)", url: "/newsletter/newsletter_34_eng.html", date: "2025-08-01" },
    { title: "[2025.06] 33rd Newsletter(English)", url: "/newsletter/newsletter_33_eng.html", date: "2025-06-01" },
    { title: "[2025.05] 32nd Newsletter(English)", url: "/newsletter/newsletter_32_eng.html", date: "2025-05-15" },
    { title: "[2025.05] 31st Newsletter(English)", url: "/newsletter/newsletter_31_eng.html", date: "2025-05-01" },
    { title: "[2025.04] 30th Newsletter(English)", url: "/newsletter/newsletter_30_eng.html", date: "2025-04-15" },
    { title: "[2025.04] 29th Newsletter(English)", url: "/newsletter/newsletter_29_eng.html", date: "2025-04-01" },
    { title: "[2025.02] 28th Newsletter(English)", url: "/newsletter/newsletter_28_eng.html", date: "2025-02-01" },
  ];

  return (
    <SubLayout title="E-Newsletter" menuTitle="News & Notices" menuItems={menuItems} currentPath="/notice/newsletter">
      <div className="flex justify-between items-end mb-6 border-b-2 border-gray-900 pb-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900">ISLS E-Newsletter</h2>
        <p className="text-sm text-gray-500 font-sans">Total {newsletters.length} letters</p>
      </div>

      <div className="w-full font-sans">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-gray-200 bg-gray-50 text-sm font-bold text-gray-600 uppercase tracking-wider text-center">
          <div className="col-span-1">No</div>
          <div className="col-span-8 text-left pl-4">Title</div>
          <div className="col-span-3">Date</div>
        </div>

        {/* Table Body */}
        <div className="flex flex-col">
          {newsletters.map((newsletter, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors items-center text-center group"
            >
              <div className="hidden md:block col-span-1 text-gray-400 text-sm">
                {(newsletters.length - idx)}
              </div>
              <div className="col-span-1 md:col-span-8 text-left pl-4">
                <a 
                  href={newsletter.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-1 flex items-center gap-2"
                >
                  {newsletter.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
              <div className="col-span-1 md:col-span-3 text-sm text-gray-500 flex justify-between md:justify-center px-4 md:px-0">
                <span className="md:hidden font-bold">Date: </span>
                {newsletter.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubLayout>
  );
}
