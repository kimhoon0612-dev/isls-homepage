import SubLayout from '@/components/SubLayout';
import { ExternalLink, Globe, Target, ShieldCheck } from 'lucide-react';

export default function Page() {
  const menuItems = [
    { name: "About ISLS Study Group Platform", href: "/study-group/about" },
    { name: "Study Group Leaders", href: "/study-group/leaders" },
  ];

  return (
    <SubLayout title="About ISLS Study Group Platform" menuTitle="Study Group" menuItems={menuItems} currentPath="/study-group/about">
      <div className="max-w-5xl mx-auto pb-16">
        
        {/* Header Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 inline-block pr-12 mb-6">
            About ISLS Study Group Platform
          </h3>
          <p className="text-xl text-gray-600 font-sans leading-relaxed max-w-4xl">
            A unique platform developed to enhance international collaboration and data capture for the academic activities of ISLS Study Groups.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Our Ultimate Aim</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              To increase people's survival and quality of life by sharing research and innovation in the field of liver transplantation and HPB surgery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Global Collaboration</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Enhancing international collaboration and secure data capture across borders for high-impact academic activities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-red-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Exclusive Access</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              The ISLS Study Groups Platform is exclusively supported by ISLS and accessible only to verified ISLS Study Group Members.
            </p>
          </div>
        </div>

        {/* Banner and CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
          <div className="max-w-3xl mx-auto">
            <a href="https://www.islssg.org/" target="_blank" rel="noopener noreferrer" className="block mb-8 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://www.isls-liversurgeon.org/images/Announcement-ISLS-SG.jpg" 
                alt="ISLS Study Group Platform Announcement" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </a>
            
            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-4">Ready to collaborate?</h4>
            <p className="text-gray-600 mb-8">For more detailed information and access to the portal, please visit the official Study Group platform website.</p>
            
            <a 
              href="https://www.islssg.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Go to ISLS Study Group Platform
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </SubLayout>
  );
}
