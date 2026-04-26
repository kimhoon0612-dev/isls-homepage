
import SubLayout from '@/components/SubLayout';

export default function Page() {
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
    <SubLayout title="Journal" menuTitle="Membership" menuItems={menuItems} currentPath="/membership/journal">
      <div className="max-w-4xl">
        <h3 className="text-2xl font-serif font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6">About Journal</h3>
        
        <h4 className="font-sans font-bold text-[#990000] text-center text-xl leading-relaxed mb-8">
          International Journal of Surgery (IJS)<br />
          has been selected as the official Journal of ISLS symposium
        </h4>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="flex-shrink-0 w-48">
            <img 
              src="https://www.isls-liversurgeon.org/images/ijs_cover.jpg" 
              alt="IJS Cover" 
              className="w-full h-auto rounded shadow-md border border-gray-300"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-2">International Journal of Surgery</h4>
            <h4 className="text-xl font-bold text-[#990000] mb-2">SCIE, IF 12.5</h4>
            <h4 className="text-lg text-gray-600 font-medium">Wolters Kluwer</h4>
          </div>
        </div>          
        
        <div className="text-gray-700 font-sans text-lg leading-relaxed mb-10">
          <p className="mb-4">
            International Journal of Surgery (IJS) is Q1 Journal and its impact factor is 12.5. The ISLS council is publishing abstracts presented in ISLS biennial symposium. You can discover Journal Supplements featuring abstracts from past ISLS Congresses.
          </p>
          <p>
            Abstracts presented at ISLS 2025 symposium will also be published as IJS supplement.
          </p>
        </div>
        
        <div className="flex justify-center md:justify-start">
          <a 
            href="https://journals.lww.com/ijsu/pages/default.aspx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#eab308] hover:bg-[#ca8a04] text-white font-bold text-lg py-4 px-12 rounded-md shadow-md transition-all text-center inline-block"
          >
            Go to read IJS
          </a>
        </div>
      </div>
    </SubLayout>
  );
}
