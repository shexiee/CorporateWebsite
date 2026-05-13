"use client";
import Link from "next/link";
import Reveal from "./Reveal";

const regions = [
  { name: "Asia Pacific", offices: 6, flag: "APAC" },
  { name: "Europe", offices: 3, flag: "EU" },
  { name: "Americas", offices: 3, flag: "AM" },
  { name: "Middle East", offices: 2, flag: "ME" },
];

const stats = [
  { value: "14", label: "Global Offices" },
  { value: "30+", label: "Languages Supported" },
  { value: "120+", label: "Enterprise Clients" },
  { value: "24/7", label: "Operations Coverage" },
];

export default function GlobalScale() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59]" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #7be0d3 1px, transparent 1px), radial-gradient(circle at 70% 60%, #F9A51A 1px, transparent 1px), radial-gradient(circle at 50% 80%, #7be0d3 1px, transparent 1px)",
          backgroundSize: "150px 150px",
        }} />
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[#7be0d3]/20 blur-3xl animate-float" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="eyebrow eyebrow-light mb-6 animate-fade-up">Worldwide Presence</span>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight animate-fade-up delay-100">
            Global scale.
            <br />
            <span className="text-gradient-warm">Local intelligence.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mt-8 animate-fade-up delay-200">
            Our impact spans continents — enabling businesses and communities worldwide
            to harness the power of AI for a smarter, more sustainable future.
          </p>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="section pb-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="card p-8 text-center h-full">
                <div className="text-5xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mt-3">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REGIONS */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow mb-5">Where We Operate</span>
            <h2 className="mt-4">
              One global team,
              <span className="text-gradient"> connected by purpose.</span>
            </h2>
            <p className="mt-6">
              From bustling Asia-Pacific hubs to engineering centers across Europe and the Americas,
              Lifewood's footprint enables 24/7 delivery, cultural fluency, and unmatched scale —
              wherever your business operates.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-[#045940] font-semibold hover:gap-3 transition-all">
              Partner with us
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {regions.map((region, i) => (
              <Reveal key={region.name} delay={i * 100}>
                <div
                  className="card p-6 group cursor-pointer h-full"
                  style={{ transform: i % 2 === 0 ? "translateY(0)" : "translateY(24px)" }}
                >
                  <div className="text-xs font-mono text-[#F9A51A] tracking-widest mb-2">
                    {region.flag}
                  </div>
                  <h3 className="text-lg mb-3">{region.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gradient">{region.offices}</span>
                    <span className="text-sm text-gray-500">Offices</span>
                  </div>
                  <div className="mt-4 h-1 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#045940] to-[#7be0d3] transition-all duration-700 group-hover:scale-x-110 origin-left"
                      style={{ width: `${region.offices * 15}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
