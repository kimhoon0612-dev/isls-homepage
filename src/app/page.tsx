import Image from "next/image";
import Link from "next/link";
import { Calendar, FileText, Users, ArrowRight, PlayCircle, MapPin, CheckCircle2, Mail, ExternalLink, Video, Contact2, ChevronRight, Globe, Award, BookOpen } from "lucide-react";
import sponsorsData from "@/data/sponsors.json";
import CongressPopup from "@/components/CongressPopup";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[520px] sm:h-[80vh] sm:min-h-[600px] lg:h-[85vh] lg:min-h-[700px] flex flex-col justify-center items-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#111]">
          <Image
            src="/isls_hero_bg.png"
            alt="ISLS Background"
            fill
            className="object-cover scale-105 animate-zoom-in opacity-80"
            priority
          />
          {/* Deep elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#3a0000]/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFAFA]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="max-w-4xl relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-80 hidden md:block"></div>
            <h2 className="text-[#ffb3b3] font-sans tracking-[0.3em] uppercase mb-6 text-xs md:text-sm font-bold pl-0 md:pl-2">
              Advancing Liver Surgery Worldwide
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] font-serif text-white mb-5 sm:mb-8 leading-[1.1] drop-shadow-2xl font-semibold tracking-tight">
              International Society of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcccc] to-white italic font-light">Liver Surgeons</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 mb-7 sm:mb-12 font-sans font-light leading-relaxed max-w-2xl opacity-90 drop-shadow-md">
              Dedicated to education, research, and international collaboration in all aspects of liver transplantation and surgery.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <CongressPopup />
              <Link href="/membership/join" className="group relative overflow-hidden bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-3 sm:px-8 sm:py-4 font-sans font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 rounded-sm">
                <span className="relative z-10 flex items-center">
                  Join ISLS Now <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / Members Space (Glassmorphism Cards) */}
      <section className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-6 sm:mt-8 lg:-mt-24 mb-12 sm:mb-20 lg:mb-32 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {[
            { title: "VODs", desc: "Watch past webinars & lectures", icon: Video, link: "/membership/vod", bg: "bg-primary text-white border-primary-light shadow-[0_20px_40px_-15px_rgba(153,0,0,0.4)]", iconColor: "text-white" },
            { title: "Members Directory", desc: "Connect with professionals", icon: Contact2, link: "/membership/members", bg: "bg-white/95 backdrop-blur-xl border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]", iconColor: "text-primary" },
            { title: "Upcoming Events", desc: "ISLS Congress & Symposia", icon: Calendar, link: "/events/congress", bg: "bg-white/95 backdrop-blur-xl border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]", iconColor: "text-primary" },
            { title: "Donation", desc: "Support ISLS missions", icon: Users, link: "/donation/why", bg: "bg-white/95 backdrop-blur-xl border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]", iconColor: "text-primary" },
          ].map((card, idx) => (
            <Link 
              href={card.link} 
              key={idx} 
              className={`group block border rounded-xl sm:rounded-2xl p-3.5 sm:p-5 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg animate-slide-up opacity-0 ${card.bg}`}
              style={{ animationDelay: `${0.8 + (idx * 0.1)}s` }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className={`mb-2 sm:mb-4 lg:mb-6 inline-flex p-2 sm:p-3 rounded-full ${card.title === 'VODs' ? 'bg-white/20' : 'bg-red-50'} transition-transform duration-500 group-hover:scale-110`}>
                    <card.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 ${card.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-sm sm:text-base lg:text-2xl font-bold mb-1 sm:mb-2 lg:mb-3 leading-tight">{card.title}</h3>
                  <p className={`font-sans text-[11px] sm:text-xs lg:text-sm mb-2 sm:mb-4 lg:mb-8 hidden sm:block ${card.title === 'VODs' ? 'text-white/80' : 'text-gray-500'}`}>{card.desc}</p>
                </div>
                <div className={`flex items-center font-sans font-bold text-[10px] sm:text-xs tracking-[0.15em] uppercase mt-auto ${card.title === 'VODs' ? 'text-white' : 'text-primary'}`}>
                  Access <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bento Box Layout: News & E-Newsletter */}
      <section className="py-16 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Latest News (Large Bento Box) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900">Latest News</h2>
              <Link href="/notice" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="flex flex-col gap-5">
              {[
                { date: "2025-07-25", title: "Invitation the Bid for Single Topic Symposium 2026", type: "Notice" },
                { date: "2024-10-28", title: "Announcement for the 2024 Fellowship Awardee", type: "News" },
                { date: "2023-10-26", title: "ISLS Paolo Muiesan Fellowship Program", type: "Fellowship" },
                { date: "2023-09-01", title: "Abstract Submission Deadline Extended", type: "Congress" },
              ].map((news, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-gray-50/50 hover:bg-white rounded-2xl p-6 border border-transparent hover:border-gray-200 transition-all duration-300 cursor-pointer">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-red-50 font-sans text-[10px] font-bold tracking-widest uppercase text-primary mb-3">
                        {news.type}
                      </span>
                      <h3 className="font-serif text-xl font-medium text-gray-900 group-hover:text-primary transition-colors leading-snug">
                        {news.title}
                      </h3>
                    </div>
                    <span className="font-sans text-sm text-gray-400 font-medium whitespace-nowrap">
                      {news.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* E-Newsletter (Tall Bento Box) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#111] to-[#222] rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.1)] relative overflow-hidden group">
            {/* Decorative background element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-700"></div>
            
            <div className="relative z-10 flex justify-between items-center mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white">E-Newsletter</h2>
              <Link href="/notice/newsletter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-all backdrop-blur-md">
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative z-10 flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-3 custom-scrollbar">
              {[
                { title: "[2026.04] 2nd Newsletter(English)", url: "/newsletter/newsletter_2026_02.html" },
                { title: "[2026.01] 1st Newsletter(English)", url: "/newsletter/newsletter_2026_01.html" },
                { title: "[2025.12] 37th Newsletter(English)", url: "/newsletter/newsletter_37_eng.html" },
                { title: "[2025.09] 36th Newsletter(English)", url: "/newsletter/newsletter_36_eng.html" },
                { title: "[2025.08] 35th Newsletter(English)", url: "/newsletter/newsletter_35_eng.html" },
                { title: "[2025.08] 34th Newsletter(English)", url: "/newsletter/newsletter_34_eng.html" },
              ].map((nl, idx) => (
                <a href={nl.url} target="_blank" rel="noopener noreferrer" key={idx} className="group/link bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/5 hover:border-white/20 p-5 rounded-xl transition-all flex items-center justify-between">
                  <h3 className="font-sans text-gray-300 group-hover/link:text-white transition-colors text-sm font-medium line-clamp-1">
                    {nl.title}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover/link:text-primary group-hover/link:translate-x-1 flex-shrink-0 ml-3 transition-all" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Modern Grid Membership Benefits */}
      <section className="py-24 bg-white w-full border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-primary font-sans font-bold text-xs tracking-[0.3em] uppercase mb-4">Why ISLS?</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">Membership <br className="hidden md:block"/> Exclusive Benefits</h2>
            </div>
            <Link href="/membership/join" className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 font-sans font-bold tracking-widest uppercase text-sm rounded-full transition-all hover:shadow-[0_10px_20px_rgba(153,0,0,0.3)] hover:-translate-y-1">
              Join ISLS Today
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { text: "Professional liver and pancreas surgeons network", icon: Globe },
              { text: "Discounts on biennial symposiums and meetings", icon: FileText },
              { text: "Access to lecture VODs (congress & webinars)", icon: PlayCircle },
              { text: "Access to comprehensive ISLS member directories", icon: Users },
              { text: "Eligibility to join the ISLS Study Group", icon: BookOpen },
              { text: "Eligible for Paolo Muiesan Fellowship Program", icon: Award },
            ].map((benefit, idx) => (
              <div key={idx} className="group bg-gray-50 hover:bg-white p-5 sm:p-6 lg:p-8 rounded-3xl border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-400 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Benefit 0{idx + 1}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect with ISLS / Mailing List (Refined) */}
      <section className="py-24 bg-[#111] w-full text-white relative overflow-hidden">
        {/* Subtle texture/gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6">Stay Connected</h2>
            <p className="font-sans text-gray-400 text-sm sm:text-base lg:text-lg mb-5 sm:mb-8 max-w-xl leading-relaxed">
              Join our mailing list to receive the latest updates, newsletters, and announcements directly to your inbox.
            </p>
            <a href="mailto:isls@isls-society.org" className="group inline-flex items-center font-sans font-medium hover:text-white text-gray-300 transition-colors bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:bg-white/10">
              <Mail className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" /> 
              isls@isls-society.org
            </a>
          </div>
          
          <div className="w-full md:w-[450px] bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md">
            <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">Subscribe to updates</h3>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
              />
              <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white px-6 py-4 rounded-xl font-sans font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(153,0,0,0)] hover:shadow-[0_0_20px_rgba(153,0,0,0.5)] mt-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Sponsors & Partners Section */}
      <section className="py-24 bg-[#FAFAFA] w-full overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-[0.3em]">Sponsorship & Endorsement</h2>
          </div>
          
          {/* Sponsor Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
            {sponsorsData.map((sponsor, idx) => (
              <Link 
                href={sponsor.href !== "#" && sponsor.href !== "javascript:void(0);" ? sponsor.href : "#"} 
                key={idx} 
                target={sponsor.href !== "#" && sponsor.href !== "javascript:void(0);" ? "_blank" : "_self"}
                rel={sponsor.href !== "#" && sponsor.href !== "javascript:void(0);" ? "noopener noreferrer" : ""}
                className="relative w-32 h-16 md:w-40 md:h-20 transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={`/images/sponsor/${sponsor.filename}`}
                  alt={`Sponsor ${idx + 1}`}
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start border-b border-gray-100 pb-16 mb-8">
          <div className="mb-12 lg:mb-0 max-w-sm">
            <h2 className="text-primary font-serif text-2xl sm:text-3xl lg:text-4xl mb-3 font-bold">ISLS</h2>
            <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase mb-8 text-gray-400">International Society of Liver Surgeons</p>
            <div className="flex flex-col gap-3 font-sans text-sm text-gray-500 leading-relaxed">
              <p>7th Floor, 22 Teheran-ro 7-gil, Gangnam-gu, Seoul, Korea</p>
              <p>Email: <a href="mailto:isls@isls-society.org" className="text-gray-800 hover:text-primary transition-colors font-medium">isls@isls-society.org</a></p>
              <p>Tel: +82-2-6207-8178 / Fax: +82-2-521-8683</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h3 className="font-sans font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">About</h3>
              <ul className="flex flex-col gap-4 font-sans text-sm text-gray-500">
                <li><Link href="/about/greetings" className="hover:text-primary transition-colors">Greetings</Link></li>
                <li><Link href="/about/council" className="hover:text-primary transition-colors">Council</Link></li>
                <li><Link href="/about/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Membership</h3>
              <ul className="flex flex-col gap-4 font-sans text-sm text-gray-500">
                <li><Link href="/membership/join" className="hover:text-primary transition-colors">Join or Renew</Link></li>
                <li><Link href="/membership/mypage" className="hover:text-primary transition-colors">My Page</Link></li>
                <li><Link href="/membership/bylaws" className="hover:text-primary transition-colors">By-laws</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-sans font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Events</h3>
              <ul className="flex flex-col gap-4 font-sans text-sm text-gray-500">
                <li><Link href="/events/congress" className="hover:text-primary transition-colors">Congress</Link></li>
                <li><Link href="/events/symposia" className="hover:text-primary transition-colors">Symposia</Link></li>
                <li><Link href="/events/webinars" className="hover:text-primary transition-colors">Webinars</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-gray-400">
          <p>© 2026 International Society of Liver Surgeons. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-800 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
