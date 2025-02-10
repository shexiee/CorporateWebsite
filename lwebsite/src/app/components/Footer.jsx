"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h4 className="text-2xl font-bold mb-3">You can help shape the future</h4>
        </div>

        {/* Right Section - Links & Button */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <Link href="/" className="block hover:underline">Home</Link>
            <Link href="/about" className="block hover:underline">About</Link>
          </div>
          <div>
            <Link href="/projects" className="block hover:underline">Projects</Link>
            <Link href="/services" className="block hover:underline">Services</Link>
          </div>
          <div>
            <Link href="/careers" className="block hover:underline">Careers</Link>
            <Link href="/globalscale" className="block hover:underline">Global Scale</Link>
          </div>
          <div>
            <Link href="/contact">
              <button className="bg-white text-green-800 font-bold px-4 py-2 rounded-full hover:bg-green-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 mt-8 pt-6 flex justify-between items-center">
        {/* Logo */}
        <Image src="/lifelogo.svg" alt="Lifewood Logo" width={120} height={30} />

        {/* Copyright */}
        <p className="text-sm">&copy; 2025 Lifewood. Be Amazed.</p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.youtube.com/@LifewoodDataTechnology" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-xl hover:text-gray-300" />
          </a>
          <a href="https://web.facebook.com/LifewoodPH/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-xl hover:text-gray-300" />
          </a>
          <a href="https://www.linkedin.com/company/lifewood-data-technology-ltd./" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-xl hover:text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
