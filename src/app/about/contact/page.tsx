"use client";

import SubLayout from '@/components/SubLayout';
import { Phone, Mail, Send, MapPin } from 'lucide-react';
import { useState } from 'react';

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
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || 'ISLS Website Inquiry');
    window.open(`mailto:isls@isls-society.org?subject=${subject}&body=${body}`, '_blank');
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 500);
  };

  return (
    <SubLayout title="Contact us" menuTitle="About ISLS" menuItems={menuItems} currentPath="/about/contact">
      <div className="max-w-6xl mx-auto pb-12 animate-fade-in">
        <h3 className="text-3xl font-serif font-bold text-gray-900 border-b-2 border-primary pb-4 mb-10">Management Office</h3>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Contact Info Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#990000] to-[#660000] rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="font-serif font-bold text-2xl mb-2">ISLS Office</h3>
              <p className="text-white/70 text-sm font-sans mb-10 leading-relaxed border-b border-white/10 pb-6">
                International Society of Liver Surgeons (ISLS) Management Office
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5 text-red-100" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-sans font-bold uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:+82-2-6951-0122" className="text-lg text-white font-sans font-bold hover:text-red-200 transition-colors">
                      +82-2-6951-0122
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5 text-red-100" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-sans font-bold uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:isls@isls-society.org" className="text-lg text-white font-sans font-bold hover:text-red-200 transition-colors break-all">
                      isls@isls-society.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-xs text-white/50 font-sans mb-2 font-bold uppercase tracking-widest">Official Website</p>
                <a href="https://www.isls-liversurgeon.org" target="_blank" rel="noopener noreferrer" className="text-white font-sans text-sm hover:text-red-200 underline underline-offset-4">
                  www.isls-liversurgeon.org
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Box */}
          <div className="lg:col-span-3 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-10">
            <h3 className="font-serif font-bold text-gray-900 text-2xl mb-8">Send us a Message</h3>
            
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="font-serif font-bold text-gray-900 text-2xl mb-3">Message Sent!</h4>
                <p className="text-gray-500 font-sans leading-relaxed max-w-sm mb-8">Your email client has been opened with your pre-filled message. Thank you for contacting ISLS.</p>
                <button
                  type="button"
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="px-6 py-3 bg-gray-50 text-gray-600 font-sans font-bold text-sm rounded-full hover:bg-gray-100 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-gray-50 border border-gray-100 px-5 py-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-2xl placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-gray-50 border border-gray-100 px-5 py-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-2xl placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full bg-gray-50 border border-gray-100 px-5 py-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-2xl placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-sans font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full bg-gray-50 border border-gray-100 px-5 py-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-2xl placeholder-gray-400 resize-none"
                  />
                </div>
                
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-gray-400 font-sans order-2 sm:order-1 text-center sm:text-left">
                    <span className="font-bold">*</span> This will open your default email client.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto order-1 sm:order-2 flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-[#800000] text-white font-sans font-bold text-sm uppercase tracking-widest transition-all disabled:opacity-70 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                  >
                    {loading ? 'Opening...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </SubLayout>
  );
}
