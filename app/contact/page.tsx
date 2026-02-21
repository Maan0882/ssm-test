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
      const res = await fetch("https://formspree.io/f/mvzbbbpy", {
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
  <div className="max-w-4xl mx-auto">
    <div className="bg-[#1A2530] text-white rounded-3xl px-5 py-6 md:p-10 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#00E5FF]/20 blur-[120px] rounded-full"></div>

      {/* Header */}
      <div className="mb-10 relative z-10">
        <span className="text-sm font-semibold tracking-widest text-[#00E5FF] uppercase">
          Corporate Inquiries
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 leading-tight">
          Let’s Start a
          <span className="text-[#00E5FF]"> Strategic Discussion</span>
        </h2>

        <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
          Engage with our enterprise team to explore IT infrastructure,
          digital transformation, and scalable innovation solutions
          tailored to your organization.
        </p>
      </div>

      {/* TWO COLUMN SECTION */}
      <div className="grid md:grid-cols-2 gap-10 relative z-10">

        {/* LEFT SIDE - CONTACT DETAILS */}
        <div className="space-y-4 md:space-y-8">

          <div>
            <h3 className="text-[#00E5FF] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-1">
              Email
            </h3>
            <p className="text-white/80 text-sm sm:text-base wrap-break-word">
              info@ssmfutureinnovation.com
            </p>
          </div>

          <div>
            <h3 className="text-[#00E5FF] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-1">
              Contact Number
            </h3>
            <p className="text-white/80 text-sm sm:text-base">
              +971 58 268 4800
            </p>
          </div>

          <div>
            <h3 className="text-[#00E5FF] font-semibold text-xs sm:text-sm uppercase tracking-widest mb-1">
              Address
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Sharjah Publishing City Free Zone<br/>
              Sharjah, United Arab Emirates
            </p>
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full bg-[#F8FAFC] text-[#1A2530] rounded-xl px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-[#0056D2] outline-none"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full bg-[#F8FAFC] text-[#1A2530] rounded-xl px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-[#0056D2] outline-none"
            />

            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="Contact Number"
              className="w-full bg-[#F8FAFC] text-[#1A2530] rounded-xl px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-[#0056D2] outline-none"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full bg-[#F8FAFC] text-[#1A2530] rounded-xl px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-[#0056D2] outline-none"
          />

          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="How can we support your organization?"
            className="w-full bg-[#F8FAFC] text-[#1A2530] rounded-xl px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-[#0056D2] outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0056D2] hover:bg-[#0047B3] text-white py-2.5 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-300"
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