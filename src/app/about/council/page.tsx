import SubLayout from '@/components/SubLayout';
import Image from 'next/image';

export default function Page() {
  const menuItems = [
    { name: "Greetings", href: "/about/greetings" },
    { name: "Council", href: "/about/council" },
    { name: "ISLS Member-at-Large", href: "/about/member-at-large" },
    { name: "ISLS Study Group Board", href: "/about/study-group-board" },
    { name: "Endorsement", href: "/about/endorsement" },
    { name: "ISLS Bid Manual", href: "/about/bid-manual" },
    { name: "Contact us", href: "/about/contact" },
  ];

  const councilMembers = [
    {
      name: "Myron SCHWARTZ",
      degree: "M.D",
      title: "President",
      affiliation: "The Henry Kaufmann Professor of Surgery, Icahn School of Medicine at Mount Sinai, USA",
      image: "https://www.isls-liversurgeon.org/images/2024/Myron_SCHWARTZ.jpg"
    },
    {
      name: "Dieter BROERING",
      degree: "MD, PhD, FEBS, FACS",
      title: "Vice-President",
      affiliation: "King Faisal Specialist Hospital & Research Center, Saudi Arabia",
      image: "https://www.isls-liversurgeon.org/images/2024/Dieter_BROERING.jpg"
    },
    {
      name: "Maria B. Majella DOYLE",
      degree: "MD, MBA, FRCS",
      title: "Vice-President",
      affiliation: "St. Louis Children's Hospital, USA",
      image: "https://www.isls-liversurgeon.org/images/2024/Majella_DOYLE.jpg"
    },
    {
      name: "Ki-Hun KIM",
      degree: "M.D, Ph.D.",
      title: "Secretary General",
      affiliation: "Asan Medical Center, University of Ulsan, Korea",
      image: "https://www.isls-liversurgeon.org/images/2024/Ki_Hun_Kim.jpg"
    },
    {
      name: "Henrik PETROWSKY",
      degree: "M.D., FEBS, FACS",
      title: "Treasurer",
      affiliation: "University Hospital Zürich, Switzerland",
      image: "https://www.isls-liversurgeon.org/images/2024/Henrik_Petrowsky.jpg"
    },
    {
      name: "Deniz BALCI",
      degree: "M.D, Ph.D.",
      title: "Chair, Scientific Committee",
      affiliation: "Bahçeşehir University School of Medicine, Türkiye",
      image: "https://www.isls-liversurgeon.org/images/2024/Deniz_Balci.jpg"
    }
  ];

  return (
    <SubLayout title="Council" menuTitle="About ISLS" menuItems={menuItems} currentPath="/about/council">
      <div className="max-w-6xl mx-auto pb-12 animate-fade-in">
        <h3 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 mb-4">ISLS Council</h3>
        <p className="text-gray-500 font-sans mb-12 text-lg">The dedicated leaders guiding the International Society of Liver Surgeons.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {councilMembers.map((member, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] transition-all duration-500 group flex flex-col hover:-translate-y-1">
              <div className="h-[320px] w-full relative bg-gray-50 overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white relative z-10 -mt-4 rounded-t-3xl">
                <div className="inline-block self-start px-3 py-1 bg-red-50 text-primary font-sans font-bold text-[10px] tracking-widest uppercase rounded-full mb-4">
                  {member.title}
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <span className="text-sm font-sans text-gray-400 mb-4">{member.degree}</span>
                <p className="text-sm font-sans text-gray-600 leading-relaxed mt-auto pt-4 border-t border-gray-100">
                  {member.affiliation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubLayout>
  );
}
