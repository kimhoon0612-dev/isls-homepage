import SubLayout from '@/components/SubLayout';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

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
    <SubLayout title="Endorsement" menuTitle="About ISLS" menuItems={menuItems} currentPath="/about/endorsement">
      <div className="max-w-4xl mx-auto pb-12 animate-fade-in">
        <h3 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 mb-8">Endorsement</h3>

        <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 lg:p-10 mb-10">
          <div className="prose max-w-none text-gray-600 font-sans leading-loose">
            <p className="text-justify mb-6">
              With the objective to disseminate scientific advances in surgery for hepatobiliary and pancreatic diseases 
              and to provide continuing education related to the practice of liver surgery, the ISLS will grant its support 
              to related societies by endorsing meetings or events organized by such societies. 
            </p>
            
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 my-8">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Endorsement Review Process</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Endorsements will be granted after reviewing the scientific programs, which must be submitted at the time of application. Please read the guideline below and submit the application form if you wish to grant ISLS endorsement.
                </p>
              </div>
            </div>

            <p className="text-sm font-bold italic text-gray-500 border-l-2 border-gray-300 pl-4">
              * ISLS endorsement does not include financial support or guarantees.
            </p>
          </div>
        </div>

        {/* Premium Download Cards */}
        <h4 className="text-xl font-serif font-bold text-gray-900 mb-6 px-2">Required Documents</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://www.isls-liversurgeon.org/download/ISLS_Endorsement guideline.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-10 bg-white border border-gray-100 shadow-sm hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-red-100 rounded-3xl transition-all hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <FileText className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h5 className="font-serif font-bold text-gray-900 text-lg mb-2 text-center group-hover:text-primary transition-colors">Endorsement Guideline</h5>
            <span className="flex items-center text-xs font-sans font-bold text-gray-400 tracking-widest uppercase">
              Download PDF <Download className="w-3 h-3 ml-1" />
            </span>
          </a>

          <a
            href="https://www.isls-liversurgeon.org/download/?dfname=ISLS_Endorsement Application Form_Applicant Name.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-10 bg-white border border-gray-100 shadow-sm hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-gray-300 rounded-3xl transition-all hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
              <FileText className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
            </div>
            <h5 className="font-serif font-bold text-gray-900 text-lg mb-2 text-center group-hover:text-gray-800 transition-colors">Application Form</h5>
            <span className="flex items-center text-xs font-sans font-bold text-gray-400 tracking-widest uppercase">
              Download DOCX <Download className="w-3 h-3 ml-1" />
            </span>
          </a>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-sm text-gray-500 font-sans text-center">
          <p>Files will be downloaded from the official ISLS server. If a download does not start automatically,<br/>please contact the ISLS office at <a href="mailto:isls@isls-society.org" className="font-bold text-primary hover:underline">isls@isls-society.org</a>.</p>
        </div>
      </div>
    </SubLayout>
  );
}
