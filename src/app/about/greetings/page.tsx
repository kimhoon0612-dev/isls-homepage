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

  return (
    <SubLayout title="Greetings" menuTitle="About ISLS" menuItems={menuItems} currentPath="/about/greetings">
      <div className="max-w-4xl mx-auto pb-12 animate-fade-in">
        <h3 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 mb-10">Greetings</h3>
        
        <div className="prose prose-lg max-w-none text-gray-600 font-sans leading-loose">
          <p className="text-justify first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
            Welcome to the International Society of Liver Surgeons! I am Myron Schwartz, a liver surgeon at The Mount Sinai Hospital in New York, and I am excited to begin my two-year term as President of the Society. In the short eight years since its inception, the ISLS has grown to become the leading forum for liver transplant and hepatobiliary surgeons to share our experience as we advance our chosen field.
          </p>
          <p className="text-justify mt-6">
            While no one can deny the importance of multidisciplinary care in the management of patients with liver or biliary tract cancer, our focus is squarely on the craft of surgery. Our biannual Congress of Advanced HBP Surgery and our Single Topic Symposia and Consensus Conferences feature presentations on the latest developments in surgical technique and technology by the innovators who conceive them with animated discussion and debate among the acknowledged experts in the field, as well as open paper sessions where researchers from around the world can present their work.
          </p>

          <div className="bg-gray-50 border-l-4 border-primary p-8 my-10 rounded-r-2xl shadow-sm italic text-gray-700">
            "Our Society promotes research aiming to advance the scientific basis of liver surgery through the formation of Study Groups led by surgeons who propose a research topic, design a protocol, enlist centers to participate, conduct the study, and present/publish the results."
          </div>

          <p className="text-justify mt-6">
            The Society has developed an online platform for data entry and provides study design and statistical support. The initial cadre of twelve groups has completed their projects, and the selection of studies for the next cycle is underway. The International Journal of Surgery (impact factor 15.3) has been designated as the official journal of the Society; abstracts presented at our Congress are published in a supplemental volume.
          </p>
          <p className="text-justify mt-6">
            Education is a key aspect of our mission. The Society website is a treasure trove of educational material comprising webinars and videos as well as the complete proceedings of the Congresses, Consensus Conferences, and Single Topic Symposia. We have also established a Fellowship in honor of the late pioneering surgeon Paolo Muiesan that enables an early-career surgeon to spend up to one year studying under the tutelage of a chosen mentor.
          </p>
          <p className="text-justify mt-6 mb-12">
            As our Society evolves from a relatively informal gathering of friends and colleagues who share a common interest to a more formal organization that now boasts over 500 members from over 50 countries, we will do our best to maintain the spirit of friendship and collegiality that have distinguished us among the plethora of surgical societies that are out there. I am honored and proud to serve you. I look forward to meeting you all at the next Congress of Advanced HBP Surgery in CANADA in October, 2025.
          </p>
        </div>

        {/* Profile Card */}
        <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-red-50 shadow-lg flex-shrink-0 group">
            <Image 
              src="https://www.isls-liversurgeon.org/images/2024/Myron_SCHWARTZ.jpg" 
              alt="Myron Schwartz" 
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="text-center sm:text-left pt-2">
            <h4 className="text-2xl font-serif text-gray-900 font-bold mb-2">Myron SCHWARTZ, <span className="text-base text-gray-500 font-sans font-normal">M.D</span></h4>
            <div className="inline-block px-4 py-1 bg-red-50 text-primary font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
              President, ISLS
            </div>
            <p className="text-gray-500 font-sans text-sm">Liver surgeon at The Mount Sinai Hospital in New York</p>
          </div>
        </div>
      </div>
    </SubLayout>
  );
}
