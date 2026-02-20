"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactSection from "./contact/page"; 
import { title } from "process";
import { desc } from "framer-motion/client";
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const sections = ["home", "who", "what", "customers", "contact"];

  // Scroll Spy + Blur Trigger
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 120;
          const height = section.offsetHeight;
          if (window.scrollY >= offset && window.scrollY < offset + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Glass Morphism Nav Buttons
  const linkClass = (id: string) =>
  `px-4 py-2 rounded-xl text-lg font-bold transition-all duration-300 backdrop-blur-md ${
    active === id
      ? "bg-[#00E5FF]/20 border border-[#00E5FF]/40 text-[#0056D2] shadow-[0_8px_30px_rgba(0,86,210,0.25)]"
      : "bg-white/30 border border-transparent text-[#1A2530] hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/40"
  }`;

        const customers = [
          { name: "PIXCOM", logo: "/pixcom.jpg" },
          { name: "Just Click", logo: "/justclick.png" },
          { name: "Film District", logo: "/film_district.png" },
          { name: "The Laundry Point", logo: "/thelaundrypoint.jpg" },
          { name: "Supernova Photography", logo: "/supernova.png" },
          { name: "Taste of Malabar", logo: "/tasteofmalabar.png" },
          { name: "Services", logo: "/services.png" },
          { name: "Highway 311", logo: "/highway311.png" },
          { name: "BiCXO", logo: "/bicxo.png" },
          { name: "LEADGE", logo: "/Leadge.png" },
          // 10 more for scrolling effect
          { name: "VISHWASWAROOP", logo: "/Vishwaswaroop.png" },
          { name: "AMBIENCE", logo: "/ambience.png" },
          { name: "TSS", logo: "/tss.png" },
          { name: "SNOW WHITE", logo: "/snowwhite.png" },
          { name: "MARIA MARIA", logo: "/mariamaria.png" },
          { name: "ERP PANDIT", logo: "/erp pandit.png" },
          { name: "KUUIZZ", logo: "/kuulzz.png" },
          { name: "LAUKYA", logo: "/laukya.png" },
          { name: "OBL PRINTSTORE", logo: "/obl.png" },
          { name: "YRSK", logo: "/yrsk.png" },
          { name: "eresource", logo: "/eresource.png" },
          { name: "Print Mart", logo: "/printmart.png" }, 
          { name: "DEXA", logo: "/dexa.png" },
        ];
        const topCustomers = customers.slice(0, 10);
        const bottomCustomers = customers.slice(10);
        const LogoCard = ({ item }: any) => (
            <div
              className="
                min-w-45 sm:min-w-55 md:min-w-60
                bg-white backdrop-blur-xl
                border border-[#E2E8F0]
                rounded-2xl p-6 sm:p-8
                flex flex-col items-center justify-center
                shadow-md hover:shadow-xl
                transition-all duration-500
              "
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-12 sm:h-14 md:h-16 object-contain mb-4 sm:mb-6"
              />

              <p className="text-xs sm:text-sm font-semibold text-[#1A2530] text-center">
                {item.name}
              </p>
            </div>
          );


return (
    <main className="bg-[#FFFFFF] text-[#1A2530] scroll-smooth">

      {/* NAVBAR */}
      <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-8xl z-50 rounded-2xl transition-all duration-500 ${
        scrolled
          ? "bg-white/60 backdrop-blur-2xl border border-[#E2E8F0] shadow-xl"
          : "bg-white/70 backdrop-blur-xl border border-[#E2E8F0]"
      }`}
    >
      {/* Animated Gradient Glow */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(30,58,138,0.15), transparent 60%)",
            "radial-gradient(circle at 80% 70%, rgba(59,130,246,0.15), transparent 60%)",
            "radial-gradient(circle at 40% 60%, rgba(30,58,138,0.15), transparent 60%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="px-10 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo-02.png"
            alt="SSM Logo"
            width={100}
            height={80}
            className="object-contain"
            priority
          />
          <h1 className="text-[#1A2530] font-bold text-2xl">
            SSM Future Innovation FZE
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" onClick={() => setActive("home")} className={linkClass("home")}>
            Home
          </a>

          <a href="#who" onClick={() => setActive("who")} className={linkClass("who")}>
            Who We Are
          </a>

          <a href="#what" onClick={() => setActive("what")} className={linkClass("what")}>
            What We Do
          </a>

          <a href="#customers" onClick={() => setActive("customers")} className={linkClass("customers")}>
            Customers
          </a>

          <a href="#contact" onClick={() => setActive("contact")} className={linkClass("contact")}>
            Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-0.5 bg-[#1A2530]"></span>
          <span className="w-6 h-0.5 bg-[#1A2530]"></span>
          <span className="w-6 h-0.5 bg-[#1A2530]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden px-6 pb-6"
            >
              <div className="flex flex-col gap-4 bg-white/60 backdrop-blur-2xl border border-[#E2E8F0] rounded-2xl p-6 shadow-xl">

                <a
                  href="#home"
                  onClick={() => { setActive("home"); setMobileOpen(false); }}
                  className={linkClass("home")}
                >
                  Home
                </a>

                <a
                  href="#who"
                  onClick={() => { setActive("who"); setMobileOpen(false); }}
                  className={linkClass("who")}
                >
                  Who We Are
                </a>

                <a
                  href="#what"
                  onClick={() => { setActive("what"); setMobileOpen(false); }}
                  className={linkClass("what")}
                >
                  What We Do
                </a>

                <a
                  href="#customers"
                  onClick={() => { setActive("customers"); setMobileOpen(false); }}
                  className={linkClass("customers")}
                >
                  Customers
                </a>

                <a
                  href="#contact"
                  onClick={() => { setActive("contact"); setMobileOpen(false); }}
                  className={linkClass("contact")}
                >
                  Contact Us
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </header>

      {/* HERO WITH CORPORATE IMAGE */}
      <section id="home" className="relative pt-35 pb-15 px-8 bg-[#FFFFFF] overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/home1.jpg"
            alt="Corporate Headquarters"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Gradient Overlay for Professional Look */}
        <div className="absolute inset-0 bg-linear-to-r from-[#1A2530]/90 via-[#1A2530]/80 to-[#1A2530]/70" />

        {/* Soft Accent Glow */}
        <div className="absolute top-32 right-0 w-150 h-100 bg-[#00E5FF]/20 blur-[140px] rounded-full" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-left text-white">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Enterprise Innovation <br />
            <span className="text-[#3B82F6]">
              With Measurable Impact
            </span>
          </motion.h1>

          <p className="mt-10 text-xl text-gray-200 leading-relaxed max-w-2xl">
            Delivering strategic transformation frameworks and digital expansion
            architectures that empower enterprises to scale, modernize,
            and lead with confidence across the UAE.
          </p>

          {/* CTA */}
          <div className="mt-14">
            <a
              href="#contact"
              className="px-12 py-5 bg-[#0056D2] text-white rounded-lg text-base font-semibold tracking-wide shadow-lg hover:bg-[#0047B3] transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </div>

        </div>
      </section>


      {/* ABOUT + UAE IMAGE */}
      <section id="who" className="relative bg-[#F0F4F8] py-15 px-8 overflow-hidden scroll-mt-32">

        {/* Subtle Accent Glow */}
        <div className="absolute -top-20 -left-20 w-125 h-100 bg-[#0056D2]/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* IMAGE SIDE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-tr from-[#0056D2]/10 to-transparent rounded-2xl blur-2xl -z-10" />

            <Image
              src="/home.jpg"
              alt="UAE Skyline"
              width={700}
              height={500}
              className="rounded-2xl border border-[#E2E8F0] shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* CONTENT SIDE */}
          <div>
            <span className="text-sm font-semibold tracking-widest text-[#0056D2] uppercase">
              About Us
            </span>

            <h2 className="text-5xl font-extrabold text-[#1A2530] mt-4 leading-tight">
              Strategic Growth <br />
              <span className="text-[#0056D2]">Through Innovation</span>
            </h2>

            <p className="mt-8 text-lg text-[#475569] leading-relaxed max-w-xl">
              Based in Sharjah Publishing City Free Zone, UAE,
              SSM Future Innovation FZE partners with enterprises
              navigating modernization, digital expansion, and
              strategic repositioning in competitive markets.
            </p>

            {/* Highlight Box */}
            <div className="mt-10 border-l-4 border-[#0056D2] pl-6">
              <p className="text-[#1A2530] font-semibold">
                Empowering forward-thinking organizations to scale with confidence and clarity.
              </p>
            </div>

            {/* Optional CTA
            <div className="mt-12">
              <a
                href="#contact"
                className="px-10 py-4 bg-[#0056D2] text-white rounded-lg text-base font-semibold shadow-md hover:bg-[#3B82F6] transition-all duration-300"
              >
                Learn More
              </a>
            </div> */}
          </div>

        </div>
      </section>

      {/* CAPABILITIES WITH IMAGE */}
      <section id="what" className="relative py-15 px-8 bg-[#FFFFFF] overflow-hidden scroll-mt-32">

        {/* Subtle Background Accent */}
        <div className="absolute inset-0 bg-[#F0F4F8] -z-10" />
        <div className="absolute top-15 right-0 w-125 h-100 bg-[#0056D2]/5 blur-[120px] rounded-full -z-10" />

        {/* Section Header */}
        <div className="max-w-7xl mx-auto text-center mb-24">
          <span className="text-s font-semibold tracking-widest text-[#0056D2] uppercase">
            Our Expertise
          </span>
          <h2 className="text-5xl font-extrabold text-[#1A2530] mt-4">
            Core Capabilities Driving Growth
          </h2>
          <p className="mt-6 text-lg text-[#475569] max-w-2xl mx-auto">
            Delivering strategic, creative, and technology-led solutions
            that empower enterprises to innovate, scale, and lead markets.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            {
              id: "it",
              title: "IT Expertise",
              desc: "Comprehensive enterprise-grade infrastructure and application solutions designed for performance, scalability, and security.",
              points: [
                "Network Solutions",
                "Structured Cabling & Rack Stack Installations",
                "Wired & Wireless Network Solutions",
                "Enterprise Data Networks",
                "Wi-Fi Infrastructure Solutions",
                "Cloud Infrastructure Solutions",
                "Datacenter Infrastructure Solutions",
                "Software & IT Application Development",
              ],
              img: "/it1.jpg",
            },
            {
              id: "creative",
              title: "Creativities",
              desc: "Brand strategy, visual identity, and high-impact corporate communication.",
              points: [
                "Logo Ideation, concept & creation",
                "Corporate Collateral",
                "Leaflet, Brochure, Business Stationery",
                "Graphics, Animations"
              ],
              img: "/create.jpg",
            },
            {
              id: "digital",
              title: "Digital Solutions",
              desc: "End-to-end digital transformation, automation, and platform innovation.",
              points:[
                "Website coding, concept & development",
                "Web Banners",
                "E-Mailers",
                "E-Commerce website with payment gateway",
                "Search Engine Optimization (Google)",
                "Social Media Strategies",
                "Multimedia Presentation"
              ],
              img: "/digital.jpg",
            },
            {
              id: "social",
              title: "Social Media Marketing",
              desc: "Strategic campaigns, digital engagement, and performance-driven growth.",
              points:[
                "Facebook Marketing",
                "Twitter Marketing",
                "LinkedIn Marketing",
                "Instagram Marketing",
                "Pinterest Marketing",
                "YouTube Marketing"
              ],
              img: "/marketing.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              id={item.id}
              className="group bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1A2530]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#1A2530] group-hover:text-[#0056D2] transition">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>

                {/* Capability List (Only for IT Expertise) */}
                {item.points && (
                  <ul className="mt-6 space-y-2">
                    {item.points.map((point: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-[#475569]"
                      >
                        <span className="mt-1 mr-2 h-2 w-2 bg-[#0056D2] rounded-full"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 h-1 w-10 bg-[#0056D2] group-hover:w-16 transition-all duration-300 rounded" />
              </div>

            </div>
          ))}

        </div>
      </section>


      {/* DIGITAL FOOTPRINTS */}
      <section id="customers" className="bg-[#F0F4F8] py-15 md:py-15 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center mb-24">
          <span className="text-s font-semibold tracking-widest text-[#0056D2] uppercase">
            Our Customers
          </span>
          <h2 className="text-5xl font-extrabold text-[#1A2530] mt-4 text-center mb-16">
            Global Digital Footprints
          </h2>

          <div className="space-y-10 md:space-y-14">

            {/* TOP ROW */}
            <div className="relative overflow-hidden">
              <div className="flex w-max gap-6 md:gap-12 animate-marquee-left">
                {[...topCustomers, ...topCustomers].map((item, i) => (
                  <LogoCard key={i} item={item} />
                ))}
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="relative overflow-hidden">
              <div className="flex w-max gap-6 md:gap-12 animate-marquee-right">
                {[...bottomCustomers, ...bottomCustomers].map((item, i) => (
                  <LogoCard key={i} item={item} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP
      <section className="py-32 px-8 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold">Leadership & Governance</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
                alt="Executive"
                width={300}
                height={300}
                className="rounded-md mx-auto mb-6"
              />
              <h4 className="font-semibold">
                Executive Leadership
              </h4>
              <p className="text-sm text-[#6B7280] mt-3">
                Dedicated oversight ensuring long-term enterprise growth.
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* CONTACT */}
      <section id="contact" className="relative pt-5 py-5 px-8 bg-[#FFFFFF] overflow-hidden scroll-mt-32">
        <ContactSection />
      </section>

      {/* FOOTER */}
      <footer className="relative text-white">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/footer.jpg"
            alt="Corporate Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A2530]/85" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-4 gap-12">

          {/* Company Overview */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              SSM Future Innovation FZE
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              A UAE-based enterprise delivering strategic IT infrastructure,
              digital transformation, AI automation, and branding solutions
              for modern businesses seeking measurable growth.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Sharjah Publishing City Free Zone, UAE</li>
              <li>+971 58 268 4800</li>
              <li>info@ssmfutureinnovation.com</li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Important Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-[#00E5FF] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#who" className="hover:text-[#00E5FF] transition">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#what" className="hover:text-[#00E5FF] transition">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#customers" className="hover:text-[#00E5FF] transition">
                  Customer List
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00E5FF] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Core Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>IT Infrastructure & Networking</li>
              <li>Cloud & Datacenter Solutions</li>
              <li>AI & Automation</li>
              <li>Digital Transformation</li>
              <li>Branding & Marketing</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-white/20 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} SSM Future Innovation FZE. All rights reserved.
        </div>

      </footer>
    </main>
  );
}
