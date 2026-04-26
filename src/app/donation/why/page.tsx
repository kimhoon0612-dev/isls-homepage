
import SubLayout from '@/components/SubLayout';

export default function Page() {
  const menuItems = [
    { name: "Why donation", href: "/donation/why" },
    { name: "Donation Wall", href: "/donation/wall" },
    { name: "Make a donation", href: "/donation/make" },
  ];

  return (
    <SubLayout title="Why donation" menuTitle="Donation" menuItems={menuItems} currentPath="/donation/why">
      <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-10 lg:p-14 animate-fade-in">
        <div className="prose max-w-none prose-lg text-gray-700 font-sans leading-relaxed" dangerouslySetInnerHTML={{ __html: `
						<h3 class="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 mb-8">Why Donation</h3>
						<div class="section space-y-10">
              <div>
                <h4 class="text-xl font-bold text-primary mb-4 flex items-center gap-2"><i class="fa fa-square" aria-hidden="true"></i> Donation Goal</h4>
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-base space-y-4">
                  <p>Our goal is to achieve our core mission of providing clinical training and educational opportunities for liver surgeons.</p>
                  <p>Donation funds will support the ISLS in pursuing its main education programs including the organization of fellowships and mentor-mentee initiatives and the presentation of various awards for outstanding abstracts as well as travel grants at regular ISLS congresses.</p>
                  <p>Additionally, the funds will help strengthen communication and networking to facilitate exchange and collaboration among liver surgeons.</p>
                </div>
              </div>
              
              <div>
                <h4 class="text-xl font-bold text-primary mb-4 flex items-center gap-2"><i class="fa fa-square" aria-hidden="true"></i> Donation Fund Beneficiaries</h4>
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-base space-y-4">
                  <p>The primary purpose of the donation fund is to effectively support designated individuals in gaining up-to-date knowledge and cutting-edging clinical training. Beneficiaries will not only contribute to the advancement of the ISLS, but positively impact liver surgery practices worldwide.</p>
                  <p>The beneficiaries of the fund will be the next generation of liver transplantation, liver and pancreas surgery, and endoscopic and laparoscopic liver surgery. They include medical doctors, scientists, nurses, coordinators, and allied health practitioners whose dedication and expertise will help raise the standard of care in liver and pancreas surgery to the highest level and deliver the best outcomes for patients.</p>
                </div>
              </div>

              <div>
                <h4 class="text-xl font-bold text-primary mb-4 flex items-center gap-2"><i class="fa fa-square" aria-hidden="true"></i> Who Can Donate?</h4>
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-base">
                  <p>We invite support not only from ISLS members but also industry partners and individual supporters who are interested in advancing liver transplantation, liver and pancreas surgery, and endoscopic and laparoscopic liver surgery. Anyone with an interest in supporting the growth and development of the liver surgery field is welcome to contribute.</p>
                </div>
              </div>

              <div>
                <h4 class="text-xl font-bold text-primary mb-4 flex items-center gap-2"><i class="fa fa-square" aria-hidden="true"></i> How to Donate?</h4>
                <div class="bg-red-50 p-6 rounded-2xl border border-red-100 text-base space-y-2 text-red-900">
                  <p>To access your donation history and issue receipts, signing up for an ISLS account is required.</p>
                  <p>If you have not yet signed up, please create your account on our website.</p>
                  <p class="font-bold text-primary mt-4">Donations are open to both members and non-members, including individuals and organizations from the industry.</p>
                </div>
              </div>
						</div><!--section-->
					` }} />

        <div className="flex justify-center mt-14 mb-4">
          <a href="/donation/make" className="bg-gradient-to-r from-[#990000] to-[#660000] text-white font-sans font-bold text-sm uppercase tracking-widest py-5 px-14 rounded-2xl shadow-[0_8px_20px_rgb(153,0,0,0.2)] hover:shadow-[0_12px_25px_rgb(153,0,0,0.3)] hover:-translate-y-0.5 transition-all text-center inline-block">Make a donation</a>
        </div>
      </div>
    </SubLayout>
  );
}
