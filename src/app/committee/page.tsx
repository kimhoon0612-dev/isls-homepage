import SubLayout from '@/components/SubLayout';
import { Users, BookOpen, UserPlus, Handshake, Microscope } from 'lucide-react';

export default function Page() {
  const menuItems = [
    { name: "Introduction of the ISLS Committees", href: "/committee" }
  ];

  const committees = [
    {
      name: "Education",
      icon: BookOpen,
      subCommittees: ["Online Textbook", "Webinars"],
      chair: "Myron Schwartz",
      viceChair: "Dieter Broering",
      members: [
        "Nicholas Goldaracena",
        "Albert Chan",
        "Shintaro Yagi",
        "Hugo Pinto Marques",
        "Silvio Nadalin",
        "Fabrizio Di Benedetto",
        "Alejandro Serrablo"
      ]
    },
    {
      name: "Nomination",
      desc: "To appoint key leadership positions including the next president the chairs of each committee.",
      icon: UserPlus,
      chair: "Myron Schwartz",
      viceChair: "Ki-Hun Kim",
      members: [
        "Deniz Balci",
        "Henrik Petrowsky"
      ]
    },
    {
      name: "Membership",
      desc: "To promote the global growth of ISLS membership and develop various membership benefits.",
      icon: Users,
      chair: "Maria Majella Doyle",
      viceChair: "Ki-Hun Kim",
      members: [
        "Prashant Bhangui",
        "Alfred Kow",
        "Ruslan Alikhanov",
        "Marieke De Boer",
        "Lucas Mc Cormack",
        "Karim Halazun",
        "Jiri Fronek",
        "Pal Dag Line",
        "Ahmed Elsabbagh",
        "Krishna Menon"
      ]
    },
    {
      name: "Liaison/Meeting",
      desc: "To support the success of the ISLS biennial congresses including the bid process, to be chaired by the past congress president.",
      icon: Handshake,
      chair: "Gonzalo Sapisochin",
      viceChair: "Krishna Menon",
      members: []
    },
    {
      name: "Scientific",
      icon: Microscope,
      subCommittees: ["Study Group", "Research", "Congress Program"],
      chair: "Deniz Balci",
      viceChair: "Burçin Ekser",
      members: [
        "Dong-Sik Kim",
        "Dimitri Raptis",
        "Olivier Scatton",
        "Cristiano Quintini",
        "Parissa Tabrizian",
        "Eduardo Fernandes"
      ]
    }
  ];

  return (
    <SubLayout title="Committee" menuTitle="Committee" menuItems={menuItems} currentPath="/committee">
      <div className="max-w-5xl mx-auto pb-12 animate-fade-in">
        <h3 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 mb-8">Organization of ISLS Committees</h3>
        
        <div className="bg-gray-50 border-l-4 border-primary p-6 mb-12 rounded-r-xl shadow-sm">
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            Under the <strong>Executive Council</strong>, five committees have been established to support the expansion and development of the society. Each committee contributes to advancing knowledge, supporting education, and fostering networking among ISLS members.
          </p>
        </div>

        {/* Classic Org Chart (Restored Original Design) */}
        <h4 className="text-2xl font-serif font-bold text-gray-900 mb-6 px-2">ISLS Organization Chart</h4>
        <div className="mb-16 overflow-x-auto pb-4">
          <div className="min-w-[900px] flex flex-col items-center select-none pt-10 pb-6">
            
            {/* Top Node */}
            <div className="relative flex flex-col items-center">
              <div className="bg-[#31708f] text-white px-6 py-2 text-[15px] font-sans rounded-sm z-10 w-auto text-center leading-[30px] inline-block whitespace-nowrap border border-[#31708f]">
                Executive Council
              </div>
              {/* Vertical line down */}
              <div className="w-0.5 h-6 bg-[#31708f]"></div>
            </div>

            {/* Horizontal Line connecting children */}
            <div className="relative flex justify-center w-[85%]">
              <div className="absolute top-0 w-full h-0.5 bg-[#31708f]"></div>
              
              {/* Children Nodes */}
              <div className="flex justify-between w-full relative pt-6">
                {committees.map((committee, idx) => (
                  <div key={idx} className="flex flex-col items-center relative w-[19%] px-1">
                    {/* Vertical line up to horizontal line */}
                    <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-[#31708f] -translate-x-1/2"></div>
                    
                    {/* Node Card - exact replica of jquery.orgchart node */}
                    <div className="w-full text-center flex flex-col items-center">
                      <div className="bg-[#31708f] text-white text-[15px] font-sans leading-[30px] px-2 py-0.5 w-full">
                        {committee.name}
                      </div>
                      <div className="border border-[#31708f] bg-white text-left p-2 text-[12px] font-sans leading-[20px] w-full text-gray-800">
                        <div className="mb-2">
                          <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-normal px-1 py-0.5 rounded-sm mr-1">Chair</span> 
                          <em>{committee.chair}</em>
                        </div>
                        {committee.viceChair && (
                          <div className="mb-2">
                            <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-normal px-1 py-0.5 rounded-sm mr-1">Vice-chair</span> 
                            <em>{committee.viceChair}</em>
                          </div>
                        )}
                        {committee.members.length > 0 && (
                          <div>
                            <span className="inline-block bg-gray-200 text-gray-800 text-[10px] font-normal px-1 py-0.5 rounded-sm mb-1">Committee Members</span><br/>
                            {committee.members.map((m, i) => (
                              <div key={i} className="truncate"><em>{m}</em></div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Sub-committees logic for jquery.orgchart */}
                      {committee.subCommittees && (
                        <div className="mt-0 w-full flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-[#31708f]"></div>
                          <div className="flex flex-col gap-2 w-full">
                            {committee.subCommittees.map((sub, sIdx) => (
                              <div key={sIdx} className="w-full flex flex-col items-center">
                                {sIdx > 0 && <div className="w-0.5 h-3 bg-[#31708f]"></div>}
                                <div className="bg-[#31708f] text-white text-[15px] font-sans leading-[30px] px-2 py-0.5 w-4/5 text-center shadow-sm">
                                  {sub}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Premium Cards Layout for Details */}
        <h4 className="text-2xl font-serif font-bold text-gray-900 mb-6 px-2 mt-4">Committee Details & Members</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {committees.map((committee, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all flex flex-col h-full group">
              <div className="flex items-start gap-5 mb-8 border-b border-gray-100 pb-8">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <committee.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold text-gray-900 leading-tight mb-2">{committee.name} Committee</h4>
                  {committee.desc && (
                    <p className="text-sm font-sans text-gray-500 leading-relaxed">{committee.desc}</p>
                  )}
                  {committee.subCommittees && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {committee.subCommittees.map((sub, sIdx) => (
                        <span key={sIdx} className="inline-block px-3 py-1 bg-gray-50 text-gray-600 border border-gray-200 font-sans text-[11px] font-bold uppercase tracking-widest rounded-full">
                          {sub}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-grow flex flex-col gap-6 font-sans">
                {/* Chair & Vice Chair */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-5 rounded-2xl border border-transparent group-hover:border-red-100 transition-colors">
                    <p className="text-xs font-bold text-primary tracking-widest uppercase mb-1">Chair</p>
                    <p className="text-gray-900 font-semibold">{committee.chair}</p>
                  </div>
                  {committee.viceChair && (
                    <div className="bg-gray-50 p-5 rounded-2xl border border-transparent group-hover:border-red-100 transition-colors">
                      <p className="text-xs font-bold text-primary tracking-widest uppercase mb-1">Vice Chair</p>
                      <p className="text-gray-900 font-semibold">{committee.viceChair}</p>
                    </div>
                  )}
                </div>

                {/* Members */}
                {committee.members.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Members</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-600">
                      {committee.members.map((member, mIdx) => (
                        <li key={mIdx} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 flex-shrink-0 group-hover:bg-primary transition-colors"></span>
                          {member}
                        </li>
                      ))}
                    </ul>
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
