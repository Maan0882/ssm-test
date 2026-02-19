'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  contact: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    contact: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulated submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setStatus("Thank you! Your inquiry has been sent successfully.");
      setFormData({ name: '', email: '', contact: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 max-w-7xl mx-auto">
      
      {/* Left Side: Info */}
      <div className="lg:col-span-2 flex flex-col justify-between">
        <div>
          <span className="text-sm font-semibold tracking-widest text-[#1E3A8A] uppercase mb-4 block">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#0F172A]">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">Touch.</span>
          </h2>
          <p className="text-[#475569] mb-10 text-lg leading-relaxed max-w-xl">
            Ready to transform your brand experience? Our team of innovative and creative individuals 
            is ready to leverage our expertise for your next project.
          </p>

          <div className="space-y-8 font-medium">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-[#E2E8F0] shadow-sm group-hover:border-[#3B82F6]/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 shrink-0">
                <Mail size={24} className="text-[#1E3A8A] group-hover:scale-110 transition-transform duration-300"/>
              </div>
              <div>
                <p className="text-[#64748B] text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                <a href="mailto:info@ssmfutureinnovationfze.com" className="text-[#0F172A] hover:text-[#3B82F6] transition-colors text-base font-semibold">
                  info@ssmfutureinnovationfze.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-[#E2E8F0] shadow-sm group-hover:border-[#3B82F6]/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 shrink-0">
                <Phone size={24} className="text-[#1E3A8A] group-hover:scale-110 transition-transform duration-300"/>
              </div>
              <div>
                <p className="text-[#64748B] text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                <a href="tel:+971582684800" className="block text-[#0F172A] hover:text-[#3B82F6] transition-colors text-base font-semibold">+971 58 268 4800</a>
               </div>
            </div>
            
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-[#E2E8F0] shadow-sm group-hover:border-[#3B82F6]/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 shrink-0">
                <MapPin size={24} className="text-[#1E3A8A] group-hover:scale-110 transition-transform duration-300"/>
              </div>
              <div>
                <p className="text-[#64748B] text-xs font-bold uppercase tracking-widest mb-1">Locations</p>
                <p className="text-base text-[#475569] leading-relaxed font-semibold">
                  Business Centre, Sharjah Publishing City Free Zone,<br/>
                  Sharjah, United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-[#94A3B8] font-bold text-xs tracking-[0.3em] uppercase hidden lg:block border-l-2 border-[#1E3A8A] pl-4">
          Commit & Deliver Excellence
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="lg:col-span-3 bg-white border border-[#E2E8F0] p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
        {/* Decorative subtle glow matching the corporate theme */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

        <h3 className="text-2xl font-extrabold text-[#0F172A] mb-8 relative z-10">Corporate Inquiry</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">Full Name</label>
            <input
              type="text" name="name" value={formData.name} onChange={handleChange} required
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] outline-none transition-all font-medium text-[#0F172A] placeholder-[#94A3B8]"
              placeholder="Your Full Name"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">Email</label>
              <input
                type="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] outline-none transition-all font-medium text-[#0F172A] placeholder-[#94A3B8]"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">Contact Number</label>
              <input
                type="text" name="contact" value={formData.contact} onChange={handleChange} required maxLength={20}
                className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] outline-none transition-all font-medium text-[#0F172A] placeholder-[#94A3B8]"
                placeholder="+971 -- --- ----"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">Subject</label>
            <input
              type="text" name="subject" value={formData.subject} onChange={handleChange} required
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] outline-none transition-all font-medium text-[#0F172A] placeholder-[#94A3B8]"
              placeholder="IT Solutions / Digital / Creative"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">Message</label>
            <textarea
              name="message" rows={4} value={formData.message} onChange={handleChange} required
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] outline-none transition-all font-medium text-[#0F172A] resize-none placeholder-[#94A3B8]"
              placeholder="How can we help empower your enterprise?"
            />
          </div>

          {status && (
            <div className={`p-4 rounded-xl text-sm font-semibold border ${success ? "bg-[#EFF6FF] text-[#1E3A8A] border-[#BFDBFE]" : "bg-red-50 text-red-600 border-red-200"}`}>
              {status}
            </div>
          )}

          <button
            type="submit" disabled={loading}
            className="w-full bg-[#1E3A8A] hover:bg-[#3B82F6] text-white py-5 rounded-xl text-base font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#3B82F6]/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 mt-4"
          >
            {loading ? "Processing..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;