import SubLayout from '@/components/SubLayout';
import { FileText, Download, Mail, CalendarDays, ArrowRight } from 'lucide-react';

const menuItems = [
  { name: "Greetings", href: "/about/greetings" },
  { name: "Council", href: "/about/council" },
  { name: "ISLS Member-at-Large", href: "/about/member-at-large" },
  { name: "ISLS Study Group Board", href: "/about/study-group-board" },
  { name: "Endorsement", href: "/about/endorsement" },
  { name: "ISLS Bid Manual", href: "/about/bid-manual" },
  { name: "Contact us", href: "/about/contact" },
];

export default function Page() {
  return (
    <SubLayout title="ISLS Bid Manual" menuTitle="About ISLS" menuItems={menuItems} currentPath="/about/bid-manual">
      <div className="max-w-4xl mx-auto pb-12 animate-fade-in">
        <h3 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 mb-8">ISLS Bid Manual</h3>

        <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 lg:p-10 mb-12">
          <p className="text-xl font-serif font-bold text-primary mb-6 leading-relaxed">
            It is a great honor to invite you to bid to host the 7th Congress of International Advanced HBP Surgery (ISLS 2027).
          </p>
          <div className="prose max-w-none text-gray-600 font-sans leading-loose">
            <p className="text-justify mb-4">
              The Congress of International Advanced HBP Surgery is the representative event of the ISLS society. It aims to disseminate scientific advances in surgery for hepatobiliary and pancreatic diseases and provide continuing education related to the practice of liver surgery.
            </p>
            <p className="text-justify">
              The call for bids to host the congress is open to all countries around the world, and we are delighted to invite national chapters or ISLS members to submit a bid. If you are interested, please refer to the Bid Manual below and submit the Bid Document (Proposal) by the due dates.
            </p>
          </div>
        </div>

        {/* Bento Box Layout for Timeline & Contact & Download */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Timeline Card */}
          <div className="bg-red-50 rounded-3xl p-8 border border-red-100 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <CalendarDays className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-xl">Important Deadlines</h3>
            </div>
            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-red-200">
              {[
                { label: "Bid Intention Letter", date: "Due by Nov 30, 2024" },
                { label: "Bid Documents (Proposal)", date: "Due by Apr 30, 2025" },
                { label: "Host City Selection", date: "May, 2025" },
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-red-50 rounded-full border-[3px] border-primary z-10"></div>
                  <h4 className="font-bold text-gray-900 font-sans">{item.label}</h4>
                  <p className="text-sm text-primary font-bold tracking-wide mt-1">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Download Card */}
            <a
              href="https://www.isls-liversurgeon.org/download/ISLS bid manual_Invitation to bid.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-red-100 transition-all hover:-translate-y-1 group flex-grow flex flex-col justify-center items-center text-center"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <FileText className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors">Download Bid Manual</h4>
              <p className="text-sm font-sans text-gray-500 mb-4">Detailed guidelines and requirements</p>
              <span className="flex items-center text-xs font-sans font-bold text-gray-400 tracking-widest uppercase">
                PDF Format <Download className="w-3 h-3 ml-1" />
              </span>
            </a>

            {/* Contact Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                <Mail className="w-5 h-5 text-gray-500" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 font-sans mb-1 text-sm uppercase tracking-widest">Submit To</h4>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">All documents should be sent electronically to the ISLS Office.</p>
                <a href="mailto:isls@isls-society.org" className="inline-flex items-center font-bold text-primary hover:underline">
                  isls@isls-society.org <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SubLayout>
  );
}
