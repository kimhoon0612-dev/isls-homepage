import SubLayout from '@/components/SubLayout';
import { Award, CheckCircle2, CalendarDays, DollarSign, ListChecks, Mail, FileText, Send } from 'lucide-react';

export default function Page() {
  const menuItems = [
    { name: "ISLS Paolo Muiesan Fellowship Program", href: "/fellowship" }
  ];

  return (
    <SubLayout title="Fellowship" menuTitle="Fellowship" menuItems={menuItems} currentPath="/fellowship">
      <div className="max-w-5xl mx-auto pb-16">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 inline-block pr-12 mb-8">
            ISLS Paolo Muiesan Fellowship Program
          </h2>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-slate-50 p-8 flex flex-col items-center justify-center border-r border-gray-100">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <img 
                  src="https://www.isls-liversurgeon.org/images/2024/Paolo_Muiesan.jpg" 
                  alt="Professor Paolo Muiesan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-500 italic text-sm mb-1">In Memory of</p>
              <h3 className="text-xl font-bold text-gray-900 text-center">Professor Paolo Muiesan</h3>
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <p className="text-gray-700 font-sans leading-relaxed mb-4 text-lg">
                The ISLS Paolo Muiesan Fellowship Program has been established to commemorate Dr. Paolo Muiesan who sadly passed away in year 2022. Dr. Muiesan made enormous contributions to the field of liver transplantation. His pioneering efforts in the fields of split-liver transplantation, donation after cardiac death, machine perfusion, and many others have hugely benefited mankind.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-800 font-sans text-md leading-relaxed m-0">
                  In the name of Dr. Paolo Muiesan, the ISLS society would like to support <strong className="font-bold">early career surgeons age less than 42 years old</strong> planning a career in HPB surgery who are seeking additional training with a mentor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Eligibility Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900">Eligibility</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                <span className="text-gray-700 leading-relaxed font-sans">Early career surgeons <strong>age less than 42 years old</strong> planning a career in HPB surgery who are seeking additional training with a mentor at the mentor's hospital.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                <span className="text-gray-700 leading-relaxed font-sans">Applicants must be a member of the ISLS at the time of application, and maintain their membership until the end of the fellowship program at least.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                <span className="text-gray-700 leading-relaxed font-sans">Mentor could be a member of the ISLS Executive Council or a Member-at-Large.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                <div className="text-gray-700 leading-relaxed font-sans">
                  <strong>June 30</strong> of each year is the deadline for submitting applications.<br/>
                  The completed application must be sent to the ISLS Office at <a href="mailto:isls@isls-society.org" className="text-primary hover:underline font-bold">isls@isls-society.org</a>.<br/>
                  The selection process will be completed by October, and the results will be formally announced through the ISLS Office e-newsletter or at the biennial congress.
                </div>
              </li>
            </ul>
          </div>

          {/* Amount & Period Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900">Amount & Period</h3>
            </div>
            
            <p className="text-gray-700 font-sans mb-6">
              Applicants may choose a fellowship period of 3 to 6 months. Depending on the fellowship period, the payment amount will differ as below:
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center text-primary font-bold text-lg mb-2">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  3 ~ 6 months
                </div>
                <div className="text-3xl font-serif font-bold text-gray-900 mb-2">
                  $1,500 <span className="text-lg text-gray-500 font-sans font-normal">per month</span>
                </div>
                <div className="flex items-center text-gray-700 font-bold">
                  <span className="text-2xl mr-2">+</span>
                  <span className="text-xl">$1,000 <span className="text-base text-gray-500 font-normal">airfare</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="bg-red-100 p-3 rounded-lg mr-4">
              <ListChecks className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900">Application Process & Requirements</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center font-bold text-gray-700 flex-shrink-0 mr-4 border border-slate-200">1</div>
              <div className="pt-2">
                <p className="text-gray-800 font-sans text-lg">The application will be accepted via email (<a href="mailto:isls@isls-society.org" className="text-primary hover:underline font-bold">isls@isls-society.org</a>)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center font-bold text-gray-700 flex-shrink-0 mr-4 border border-slate-200">2</div>
              <div className="pt-2 w-full">
                <p className="text-gray-800 font-sans text-lg mb-3">The application should include:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex items-start">
                    <FileText className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans">A letter of intent including aim of the fellowship, potential clinical research plan</span>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex items-start">
                    <FileText className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans">Applicant's curriculum vitae</span>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex items-start">
                    <Mail className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans">Recommendation letter of the mentor from the applicant's organization/affiliation</span>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex items-start">
                    <FileText className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-sans">Curriculum vitae of a mentor</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start bg-slate-50 p-4 rounded-xl">
                <div className="text-primary font-bold mr-3">3.</div>
                <p className="text-gray-700 text-sm">ISLS Council will review the documents of the applicants and select the awardee.</p>
              </div>
              <div className="flex items-start bg-slate-50 p-4 rounded-xl">
                <div className="text-primary font-bold mr-3">4.</div>
                <p className="text-gray-700 text-sm">The fellowship may commence at any time after the award has been granted, but no later than six months after the selection.</p>
              </div>
              <div className="flex items-start bg-slate-50 p-4 rounded-xl">
                <div className="text-primary font-bold mr-3">5.</div>
                <p className="text-gray-700 text-sm">The awardee will sign a letter of agreement with ISLS. Payment will be made to the awardee's personal account.</p>
              </div>
              <div className="flex items-start bg-slate-50 p-4 rounded-xl">
                <div className="text-primary font-bold mr-3">6.</div>
                <p className="text-gray-700 text-sm">The awardee has to submit a mid-term report to the ISLS office, which will be posted on the ISLS website.</p>
              </div>
              <div className="flex items-start bg-slate-50 p-4 rounded-xl">
                <div className="text-primary font-bold mr-3">7.</div>
                <p className="text-gray-700 text-sm">The awardee is required to submit a final report to the ISLS official journal and make a presentation at the ISLS biennial congress.</p>
              </div>
              <div className="flex items-start bg-slate-50 p-4 rounded-xl">
                <div className="text-primary font-bold mr-3">8.</div>
                <p className="text-gray-700 text-sm">An official ISLS Fellowship Ceremony will be held at the ISLS biennial congress.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="mt-10 p-8 bg-gradient-to-r from-primary to-primary-dark rounded-md text-white text-center">
          <h3 className="font-serif font-bold text-2xl mb-3">Ready to Apply?</h3>
          <p className="text-white/80 font-sans text-sm mb-6 max-w-xl mx-auto">
            Send your complete application package to the ISLS Office. The deadline is <strong>June 30</strong> of each year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:isls@isls-society.org?subject=ISLS Paolo Muiesan Fellowship Application"
              className="flex items-center justify-center gap-2 bg-white text-primary font-sans font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-gray-100 transition-colors rounded-sm shadow"
            >
              <Mail className="w-5 h-5" />
              Apply via Email
            </a>
            <a
              href="/membership/join"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-sans font-bold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white/10 transition-colors rounded-sm"
            >
              Become an ISLS Member First
            </a>
          </div>
          <p className="text-white/50 text-xs mt-4 font-sans">* Applicants must be an active ISLS member at the time of application.</p>
        </div>

      </div>
    </SubLayout>
  );
}
