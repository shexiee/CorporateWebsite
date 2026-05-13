"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/global-scale", label: "Global Scale" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(4,89,64,0.08)] border-b border-[rgba(4,89,64,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/lifewood.svg"
            alt="Lifewood Logo"
            width={140}
            height={36}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1 bg-white/40 backdrop-blur-md border border-[rgba(4,89,64,0.08)] rounded-full px-2 py-1.5">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  active
                    ? "text-white"
                    : "text-[#0b1f17] hover:text-[#045940]"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59] shadow-[0_6px_20px_-6px_rgba(4,89,64,0.6)]" />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn btn-ghost text-sm py-2.5 px-5">
            Contact
          </Link>
          <Link href="/careers" className="btn btn-secondary text-sm py-2.5 px-5">
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 bg-[#045940] rounded-full transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-[#045940] rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-[#045940] rounded-full transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl border-t border-[rgba(4,89,64,0.08)] px-6 py-6 space-y-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition ${
                  active
                    ? "bg-[#045940] text-white"
                    : "text-[#0b1f17] hover:bg-[#045940]/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex gap-3 pt-3 border-t border-[rgba(4,89,64,0.08)]">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-ghost flex-1 text-sm"
            >
              Contact
            </Link>
            <Link
              href="/careers"
              onClick={() => setMobileOpen(false)}
              className="btn btn-secondary flex-1 text-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
