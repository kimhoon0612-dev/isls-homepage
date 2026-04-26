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
    { name: "Ahmed ELSABBAGH", affiliation: "University of Pittsburgh, USA" },
    { name: "Albert CHAN", affiliation: "University of Hong Kong, Hong Kong" },
    { name: "Alejandro SERRABLO", affiliation: "Miguel Servet University Hospital, Spain" },
    { name: "Alfred Wei Chieh KOW", affiliation: "National University of Singapore, Singapore" },
    { name: "Burcin EKSER", affiliation: "Indiana University, USA" },
    { name: "Cristiano QUINTINI", affiliation: "Università degli Studi di Milano, Italy" },
    { name: "Dimitri RAPTIS", affiliation: "King Faisal Specialist Hospital and Research Centre, Saudi Arabia" },
    { name: "Dong-Sik KIM", affiliation: "Korea University Anam Hospital, Korea" },
    { name: "Eduardo FERNANDES", affiliation: "Hospital Sao Lucas, Rio de Janeiro Federal University, Brazil" },
    { name: "Fabrizio Di BENEDETTO", affiliation: "Modena University, Italy" },
    { name: "Gonzalo SAPISOCHIN", affiliation: "Hospital Universitario Vall d'Hebron, Spain" },
    { name: "Hugo PINTO MARQUES", affiliation: "Central Lisbon Hospital Centre, Portugal" },
    { name: "Jiri FRONEK", affiliation: "Institute for Clinical and Experimental Medicine, Czech Republic" },
    { name: "Julian CHOI", affiliation: "University of Melbourne, Australia" },
    { name: "Karim HALAZUN", affiliation: "NYU Langone Health, USA" },
    { name: "Krishna MENON", affiliation: "King’s College Hospital NHS Foundation Trust, UK", note: "Congress President, ISLS 2027" },
    { name: "Lucas McCORMACK", affiliation: "Hospital Alemán, Argentina" },
    { name: "Marieke De BOER", affiliation: "University Medical Center Groningen, Netherlands" },
    { name: "Nicholas GOLDARACENA", affiliation: "UVA Health, Canada" },
    { name: "Olivier SCATTON", affiliation: "Pitié-Salpêtrière Hospital, France" },
    { name: "Pal-Dag LINE", affiliation: "Oslo University Hospital, Norway" },
    { name: "Parissa TABRIZIAN", affiliation: "Mount Sinai Medical Center, USA" },
    { name: "Prashant BHANGUI", affiliation: "Medanta-The Medicity, India" },
    { name: "Ruslan ALIKHANOV", affiliation: "Clinical Research Center of Moscow, Russia" },
    { name: "Shintaro YAGI", affiliation: "Kanazawa University, Japan" },
    { name: "Silvio NADALIN", affiliation: "University Hospital Tuebingen, Germany" }
  ];

  return (
    <SubLayout title="ISLS Member-at-Large" menuTitle="About ISLS" menuItems={menuItems} currentPath="/about/member-at-large">
      <div className="max-w-5xl mx-auto pb-12 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-2 border-primary pb-4">
          <h3 className="text-3xl font-serif font-bold text-gray-900">ISLS Member-at-Large</h3>
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
                {member.note && (
                  <span className="inline-block px-2 py-0.5 bg-red-50 text-primary text-[10px] font-bold uppercase tracking-widest rounded-sm mb-2">
                    {member.note}
                  </span>
                )}
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
