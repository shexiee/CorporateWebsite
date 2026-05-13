"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const linkGroups = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/services", label: "Services" },
      { href: "/projects", label: "Projects" },
      { href: "/global-scale", label: "Global Scale" },
    ],
  },
  {
    title: "Get in Touch",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/careers", label: "Apply Now" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59] text-white mt-20">
      {/* Decorative orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#7be0d3]/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#F9A51A]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        {/* CTA banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-14 mb-14 border-b border-white/10">
          <div>
            <span className="eyebrow eyebrow-light mb-4">Help shape what's next</span>
            <h2 className="text-white text-3xl md:text-5xl mt-4 leading-tight">
              You can help shape
              <br />
              <span className="text-gradient-warm">the future.</span>
            </h2>
          </div>
          <div className="flex lg:justify-end gap-3 flex-wrap">
            <Link href="/contact">
              <button className="btn btn-secondary">
                Contact Us
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
            <Link href="/careers">
              <button className="btn btn-outline">Join the Team</button>
            </Link>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image src="/lifelogo.svg" alt="Lifewood Logo" width={140} height={36} className="brightness-0 invert" />
            <p className="text-white/70 mt-5 max-w-sm text-sm leading-relaxed">
              Lifewood empowers businesses with AI-driven data solutions —
              from acquisition and annotation to deployment at global scale.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.youtube.com/@LifewoodDataTechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-[#F9A51A] hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white" />
              </a>
              <a
                href="https://web.facebook.com/LifewoodPH/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-[#F9A51A] hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/lifewood-data-technology-ltd./"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-[#F9A51A] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white" />
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm uppercase tracking-widest text-[#7be0d3] font-semibold mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/75 hover:text-white transition-colors text-sm relative group inline-block"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#F9A51A] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Lifewood Data Technology. All rights reserved.</p>
          <p className="italic font-medium text-white/80">Be Amazed.</p>
        </div>
      </div>
    </footer>
  );
}
