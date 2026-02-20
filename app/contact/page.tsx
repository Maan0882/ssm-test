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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setSuccess(false);

    try {
      const res = await fetch("https://formspree.io/f/xkovzeoy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "",contact:"", subject: "", message: "" });
      }
      setStatus(data.message);
    } catch {
      setStatus("Something went wrong. Please try again.");
      setSuccess(false);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-12 gap-16 items-start">

      {/* LEFT EXECUTIVE PANEL */}
      <div className="lg:col-span-5 bg-[#1A2530] text-white rounded-3xl p-10 md:p-14 relative overflow-hidden">

        {/* Subtle Tech Glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#00E5FF]/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10">

          <span className="text-sm font-semibold tracking-widest text-[#00E5FF] uppercase">
            Corporate Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
            Let’s Start a
            <span className="text-[#00E5FF]"> Strategic Discussion</span>
          </h2>

          <p className="mt-8 text-white/80 text-lg leading-relaxed">
            Engage with our enterprise team to explore IT infrastructure,
            digital transformation, and scalable innovation solutions
            tailored to your organization.
          </p>

          {/* Contact Details */}
          <div className="mt-12 space-y-8">

            {/* Email */}
            <div className="flex items-start gap-5">
              <Mail size={26} className="text-[#00E5FF] mt-1" />
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">
                  Email
                </p>
                <a href="mailto:info@ssmfutureinnovationfze.com"
                  className="text-lg font-semibold hover:text-[#00E5FF] transition">
                  info@ssmfutureinnovationfze.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <Phone size={26} className="text-[#00E5FF] mt-1" />
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">
                  Phone
                </p>
                <a href="tel:+971582684800"
                  className="text-lg font-semibold hover:text-[#00E5FF] transition">
                  +971 58 268 4800
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-5">
              <MapPin size={26} className="text-[#00E5FF] mt-1" />
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">
                  Office Location
                </p>
                <p className="text-lg font-semibold text-white/90">
                  Sharjah Publishing City Free Zone,<br/>
                  Sharjah, United Arab Emirates
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* RIGHT FORM PANEL */}
      <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-[#E2E8F0] p-10 md:p-14 relative overflow-hidden">

        {/* Soft Corporate Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0056D2]/10 blur-[120px] rounded-full"></div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A2530] mb-10 relative z-10">
          Corporate Inquiry
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0056D2] focus:border-[#0056D2] outline-none transition-all font-medium text-[#1A2530]"
              placeholder="Your Full Name"
            />
          </div>

          {/* Email + Contact */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0056D2] focus:border-[#0056D2] outline-none"
            />

            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="Contact Number"
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0056D2] focus:border-[#0056D2] outline-none"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0056D2] focus:border-[#0056D2] outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="How can we support your organization?"
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#0056D2] focus:border-[#0056D2] outline-none resize-none"
          />

          {/* Status */}
          {status && (
            <div className={`p-4 rounded-xl text-sm font-semibold border ${
              success
                ? "bg-[#F0F4F8] text-[#0056D2] border-[#BFDBFE]"
                : "bg-red-50 text-red-600 border-red-200"
            }`}>
              {status}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0056D2] hover:bg-[#0047B3] text-white py-5 rounded-xl text-base font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#0056D2]/30 active:scale-95 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Submit Inquiry"}
          </button>

        </form>
      </div>

    </div>
  </div>
  );
};

export default ContactSection;