import SubLayout from '@/components/SubLayout';
import { User, Users, ChevronRight, Activity, Microscope } from 'lucide-react';

export default function Page() {
  const menuItems = [
    { name: "About ISLS Study Group Platform", href: "/study-group/about" },
    { name: "Study Group Leaders", href: "/study-group/leaders" },
  ];

  const categories = [
    {
      title: "Chair, Scientific Committee of ISLS",
      icon: User,
      groups: [
        {
          name: "",
          members: [
            "Deniz Balci (Ankara University, Turkey)"
          ]
        }
      ]
    },
    {
      title: "LIVER TRANSPLANTATION Study Group Leaders",
      icon: Activity,
      groups: [
        {
          name: "LDLT-RECIPIENT",
          members: [
            "Dong-jin Joo (Severance Hospital, Yonsei University, Korea)",
            "Gonzalo Sapisochin (University of Toronto, Canada)"
          ]
        },
        {
          name: "LDLT-DONOR",
          members: [
            "Dong Hwan Jung (Asan Medical Center, University of Ulsan, Korea)",
            "Prashant Bhangui (Medanta Institute, India)"
          ]
        },
        {
          name: "DDLT-RECIPIENT",
          members: [
            "Dong-Sik Kim (Korea University, Korea)",
            "Karim Halazun (Cornell University, USA)"
          ]
        },
        {
          name: "DDLT-DONOR - Basic Science",
          members: [
            "Burcin Ekser (Indiana University, USA)",
            "Cristiano Quintini (Cleveland Clinic, USA)"
          ]
        },
        {
          name: "RAPID PROCEDURE",
          members: [
            "Massimo Malago (University College London, UK)",
            "Pal-Dag Line (University of Oslo, Norway)",
            "Co-investigator Dimitri Raptis (Royal Free Hospital, London, UK)"
          ]
        }
      ]
    },
    {
      title: "HPB SURGERY Study Group Leaders",
      icon: Microscope,
      groups: [
        {
          name: "CHOLANGIO CA",
          members: [
            "Jong Man Kim (Samsung Medical Center, Sungkyunkwan University, Korea)",
            "Silvio Nadalin (Tubingen University, Germany)"
          ]
        },
        {
          name: "HCC",
          members: [
            "Albert Chan (Queen Mary Hospital, Hong Kong)",
            "Parissa Tabrizian (MT. Sinai New York, USA)"
          ]
        },
        {
          name: "METASTATIC LIVER CA",
          members: [
            "Henrik Petrowsky (Zurich University, Switzerland)",
            "Ruslan Alikhanov (MCSC-Moscow, Russia)"
          ]
        },
        {
          name: "PANCREAS",
          members: [
            "Fabrizio Di Benedetto (Modena University, Italy)",
            "Orlando J. Torres (Maranhão Federal University, Brazil)"
          ]
        },
        {
          name: "MINIMALLY INVASIVE LS",
          members: [
            "Alfred Kow (National University of Singapore, Singapore)",
            "Fernando Rotellar (University of Navarra, Pamplona, Spain)"
          ]
        }
      ]
    }
  ];

  return (
    <SubLayout title="Study Group Leaders" menuTitle="Study Group" menuItems={menuItems} currentPath="/study-group/leaders">
      <div className="max-w-5xl mx-auto pb-16">
        
        <h3 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 inline-block pr-12 mb-10">
          Study Group Leaders
        </h3>

        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-slate-50 border-b border-gray-200 p-5 flex items-center">
                <div className="bg-primary/10 p-2.5 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 tracking-wide">{category.title}</h4>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  {category.groups.map((group, gIdx) => (
                    <div key={gIdx} className={category.groups.length === 1 ? "md:col-span-2" : ""}>
                      {group.name && (
                        <h5 className="flex items-center text-sm font-bold text-primary uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">
                          <ChevronRight className="w-4 h-4 mr-1 text-red-500" />
                          {group.name}
                        </h5>
                      )}
                      <ul className="space-y-2.5 mt-2">
                        {group.members.map((member, mIdx) => (
                          <li key={mIdx} className="flex items-start text-gray-700 font-sans text-sm">
                            <span className="bg-gray-200 w-1.5 h-1.5 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span className="leading-relaxed">{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </SubLayout>
  );
}
