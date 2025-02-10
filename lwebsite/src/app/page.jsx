"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center text-center text-white bg-primary">
        <Image src="/banner.jpg" alt="Be Amazed" layout="fill" objectFit="cover" className="absolute inset-0 opacity-50" />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">Data-Driven Decisions</h1>
          <p className="text-xl mt-2">Unlock innovation with AI</p>
          <Link href="/contact">
            <button className="btn btn-secondary mt-6">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section text-center">
        <h2>Why Choose Lifewood?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
            <p>Transform data into actionable insights with cutting-edge AI.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Scalable Solutions</h3>
            <p>We provide customized AI solutions for businesses of any size.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Security & Compliance</h3>
            <p>Data privacy and security are our top priorities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
