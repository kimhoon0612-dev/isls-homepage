import SubLayout from '@/components/SubLayout';
import { UserCheck } from 'lucide-react';

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

  const members = [
    { name: "Albert CHAN", affiliation: "University of Hong Kong, Hong Kong" },
    { name: "Alfred KOW", affiliation: "National University of Singapore, Singapore" },
    { name: "Burcin EKSER", affiliation: "Indiana University, USA" },
    { name: "Cristiano QUINTINI", affiliation: "Università degli Studi di Milano, Italy" },
    { name: "Dimitri RAPTIS", affiliation: "King Faisal Specialist Hospital and Research Centre, Saudi Arabia" },
    { name: "Dong Hwan JUNG", affiliation: "Asan Medical Center, University of Ulsan, Korea" },
    { name: "Dong-jin JOO", affiliation: "Severance Hospital, Yonsei University, Korea" },
    { name: "Dong-Sik KIM", affiliation: "Korea University, Korea" },
    { name: "Fabrizio Di BENEDETTO", affiliation: "Modena University, Italy" },
    { name: "Fernando ROTELLAR", affiliation: "University of Navarra, Pamplona, Spain" },
    { name: "Gonzalo SAPISOCHIN", affiliation: "Hospital Universitario Vall d'Hebron, Spain" },
    { name: "Henrik PETROWSKY", affiliation: "Zurich University, Switzerland" },
    { name: "Jong Man KIM", affiliation: "Samsung Medical Center, Sungkyunkwan University, Korea" },
    { name: "Karim HALAZUN", affiliation: "NYU Langone Health, USA" },
    { name: "Massimo MALAGO", affiliation: "University College London, UK" },
    { name: "Orlando J. TORRES", affiliation: "Maranhão Federal University, Brazil" },
    { name: "Pal-Dag LINE", affiliation: "University of Oslo, Norway" },
    { name: "Parissa TABRIZIAN", affiliation: "MT. Sinai New York, USA" },
    { name: "Prashant BHANGUI", affiliation: "Medanta Institute, India" },
    { name: "Ruslan ALIKHANOV", affiliation: "MCSC-Moscow, Russia" },
    { name: "Silvio NADALIN", affiliation: "Tubingen University, Germany" }
  ];

  return (
    <SubLayout title="ISLS Study Group Board" menuTitle="About ISLS" menuItems={menuItems} currentPath="/about/study-group-board">
      <div className="max-w-5xl mx-auto pb-12 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-2 border-primary pb-4">
          <h3 className="text-3xl font-serif font-bold text-gray-900">ISLS Study Group Board</h3>
          <p className="text-sm text-gray-400 font-sans mt-2 md:mt-0">
            <span className="text-primary mr-1">*</span>First Name Alphabetical Order
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {members.map((member, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-red-100 transition-all flex items-start group">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-red-50 transition-colors flex-shrink-0">
                <UserCheck className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h4>
                <p className="text-sm font-sans text-gray-600 leading-relaxed">
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
