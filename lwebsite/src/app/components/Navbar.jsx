"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b border-gray-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/lifewood.svg" alt="Lifewood Logo" width={150} height={40} />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/about" className="hover:text-green-600">About</Link>
          <Link href="/projects" className="hover:text-green-600">Projects</Link>
          <Link href="/services" className="hover:text-green-600">Services</Link>
          <Link href="/careers" className="hover:text-green-600">Careers</Link>
          <Link href="/globalscale" className="hover:text-green-600">Global Scale</Link>
        </div>

        {/* Apply Now Button */}
        <Link href="/apply-now">
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
            Apply Now
          </button>
        </Link>
      </div>
    </nav>
  );
}
