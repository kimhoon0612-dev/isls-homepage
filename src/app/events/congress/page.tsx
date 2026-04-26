
import SubLayout from '@/components/SubLayout';
import { ExternalLink, FileText, Camera } from 'lucide-react';

const menuItems = [
  { name: "ISLS Congress", href: "/events/congress" },
  { name: "Single Topic Symposia", href: "/events/symposia" },
  { name: "ISLS Webinars", href: "/events/webinars" },
];

const congresses = [
  {
    year: "2026 (Upcoming)",
    title: "7th Congress of International Advanced HBP Surgery",
    dates: "TBA, 2026",
    venue: "TBA",
    links: [] as {label:string;href:string;icon:string}[],
    upcoming: true,
    image: null as string | null,
  },
  {
    year: "2025",
    title: "The 6th Congress of International Advanced HBP Surgery",
    dates: "October 22 (Wed) – 25 (Sat), 2025",
    venue: "Sheraton Centre Toronto Hotel, Canada",
    image: "https://www.isls-liversurgeon.org/images/2024/isls2025_toronto.jpg",
    upcoming: false,
    links: [{ label: "Official Website", href: "https://www.islscongress.com", icon: "web" }],
  },
  {
    year: "2023",
    title: "The 5th Congress of International Advanced HBP Surgery (ISLS 2023)",
    dates: "October 18 (Wed) – 21 (Sat), 2023",
    venue: "Kongresshaus Zurich, Switzerland",
    image: "https://www.isls-liversurgeon.org/images/2023/sub_isls2023.jpg",
    upcoming: false,
    links: [
      { label: "Program", href: "https://www.isls-liversurgeon.org/download/ISLS 2023_Program at a glance.pdf", icon: "pdf" },
      { label: "Photo Gallery", href: "https://sites.google.com/wizmice.com/isls2023", icon: "gallery" },
    ],
  },
  {
    year: "2021",
    title: "4th International Advanced Liver & Pancreas Surgery Symposium (ISLS 2021)",
    dates: "November 25–27, 2021",
    venue: "BEXCO, Busan, Korea",
    image: "https://www.isls-liversurgeon.org/images/past_isls2021.jpg",
    upcoming: false,
    links: [
      { label: "Program", href: "https://www.isls-liversurgeon.org/download/ISLS 2021_Program at a glance.pdf", icon: "pdf" },
      { label: "Photo Gallery", href: "https://sites.google.com/view/isls-2021-photo-gallery", icon: "gallery" },
    ],
  },
  {
    year: "2019",
    title: "3rd International Advanced Liver & Pancreas Surgery Symposium (ISLS 2019)",
    dates: "October 10–12, 2019",
    venue: "Istanbul, Turkey",
    image: "https://www.isls-liversurgeon.org/images/past_isls2019.jpg",
    upcoming: false,
    links: [
      { label: "Photo Gallery (Day 1)", href: "https://photos.app.goo.gl/ktL8dHfYZiMJMG7j6", icon: "gallery" },
      { label: "Photo Gallery (Day 2)", href: "https://photos.app.goo.gl/huSym9WRKyqf1gnL7", icon: "gallery" },
      { label: "Photo Gallery (Day 3)", href: "https://photos.app.goo.gl/XzsxjMuBKxarXdaeA", icon: "gallery" },
    ],
  },
  {
    year: "2018",
    title: "2nd International Advanced Liver & Pancreas Surgery Symposium",
    dates: "October 4–6, 2018",
    venue: "Seoul, Korea",
    image: "https://www.isls-liversurgeon.org/images/past_isls2018.jpg",
    upcoming: false,
    links: [
      { label: "Program", href: "https://www.isls-liversurgeon.org/download/ISLS 2018_Program at a glance.pdf", icon: "pdf" },
    ],
  },
  {
    year: "2017",
    title: "1st International Advanced Liver & Pancreas Surgery Symposium",
    dates: "September 28–30, 2017",
    venue: "Ankara, Turkey",
    image: "https://www.isls-liversurgeon.org/images/past_isls2017.jpg",
    upcoming: false,
    links: [
      { label: "Photo Gallery", href: "https://www.isls-liversurgeon.org/download/ISLS 2017 Photos.pdf", icon: "gallery" },
    ],
  },
];

export default function Page() {
  return (
    <SubLayout title="ISLS Congress" menuTitle="Events" menuItems={menuItems} currentPath="/events/congress">
      <div className="mb-8 border-b-2 border-gray-900 pb-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900">ISLS Congress</h2>
      </div>

      <div className="text-gray-700 font-sans space-y-3 mb-10">
        <p className="leading-relaxed">Since 2017, we have been organizing the International Advanced Liver and Pancreas Symposium. ISLS is now capable of hosting the congress with a fully diverse scientific program. The official name of the regular meeting is <strong>"The ISLS Congress of Advanced HBP Surgery."</strong></p>
        <p className="leading-relaxed">We have changed the annual symposium to a biennial congress. The 6th Congress will be held in Canada in October 2025, and the next congress will be held in 2027.</p>
      </div>

      {/* Future Congress */}
      <div className="mb-10">
        <h3 className="font-serif font-bold text-xl text-gray-900 border-l-4 border-primary pl-4 mb-6">Future Congress</h3>
        {congresses.filter(c => c.upcoming || c.year === "2025").map((congress) => (
          <div key={congress.year} className={`mb-6 bg-white border rounded-md overflow-hidden shadow-sm flex flex-col sm:flex-row ${congress.upcoming ? 'border-primary/30 bg-red-50/20' : 'border-gray-100'}`}>
            {congress.image && (
              <a href={congress.links[0]?.href || '#'} target="_blank" rel="noopener noreferrer" className="sm:w-56 flex-shrink-0">
                <img src={congress.image} alt={congress.title} className="w-full h-48 sm:h-full object-cover" />
              </a>
            )}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-primary mb-2">{congress.year}</span>
                <h4 className="font-serif font-bold text-gray-900 text-lg mb-1">{congress.title}</h4>
                <p className="text-sm text-gray-600 font-sans mb-1">📅 {congress.dates}</p>
                <p className="text-sm text-gray-600 font-sans">📍 {congress.venue}</p>
              </div>
              {congress.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {congress.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider border border-gray-300 text-gray-700 hover:border-primary hover:text-primary hover:bg-red-50 transition-all rounded-sm">
                      {link.icon === 'pdf' ? <FileText className="w-3.5 h-3.5" /> : link.icon === 'gallery' ? <Camera className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Past Congress */}
      <div>
        <h3 className="font-serif font-bold text-xl text-gray-900 border-l-4 border-gray-300 pl-4 mb-6">Past Congress</h3>
        <div className="space-y-4">
          {congresses.filter(c => !c.upcoming && c.year !== "2025").map((congress) => (
            <div key={congress.year} className="bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm flex flex-col sm:flex-row">
              {congress.image && (
                <div className="sm:w-48 flex-shrink-0">
                  <img src={congress.image} alt={congress.title} className="w-full h-40 sm:h-full object-cover opacity-90" />
                </div>
              )}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-gray-400 mb-1">{congress.year}</span>
                  <h4 className="font-serif font-bold text-gray-800 text-base mb-1">{congress.title}</h4>
                  <p className="text-xs text-gray-500 font-sans">{congress.dates} | {congress.venue}</p>
                </div>
                {congress.links.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {congress.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-bold border border-gray-200 text-gray-600 hover:border-primary hover:text-primary hover:bg-red-50 transition-all rounded-sm">
                        {link.icon === 'pdf' ? <FileText className="w-3 h-3" /> : <Camera className="w-3 h-3" />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubLayout>
  );
}
