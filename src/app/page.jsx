"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";

const features = [
  {
    title: "AI-Powered Insights",
    description: "Transform raw data into strategic intelligence with adaptive machine learning at enterprise scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Scalable Solutions",
    description: "Customized AI infrastructure that grows with your business — from startup to global enterprise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M3 7h18M3 12h18M3 17h18" />
        <circle cx="6" cy="7" r="1" fill="currentColor" />
        <circle cx="9" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade encryption, audited workflows, and global compliance baked into every layer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "120+", label: "Enterprise clients" },
  { value: "30M+", label: "Records processed" },
  { value: "14", label: "Global offices" },
  { value: "99.9%", label: "Data accuracy" },
];

const industries = [
  { name: "Automotive", desc: "Perception & ADAS data" },
  { name: "Healthcare", desc: "Medical imaging AI" },
  { name: "Finance", desc: "Fraud & risk models" },
  { name: "Retail", desc: "Catalog intelligence" },
  { name: "AgriTech", desc: "Crop & yield analytics" },
  { name: "Robotics", desc: "Spatial understanding" },
];

const process = [
  { step: "01", title: "Acquire", desc: "Sourcing high-quality datasets across modalities." },
  { step: "02", title: "Annotate", desc: "Human-in-the-loop labeling at production scale." },
  { step: "03", title: "Validate", desc: "Multi-layer QA ensuring zero-defect delivery." },
  { step: "04", title: "Deploy", desc: "Model-ready data delivered to your pipeline." },
];

const testimonials = [
  {
    quote: "Lifewood became the data backbone of our perception stack. Their annotation precision is genuinely category-defining.",
    name: "Marcus Chen",
    role: "VP of Engineering, AutoVision",
  },
  {
    quote: "We scaled our medical imaging models 4x faster after partnering with Lifewood. Quality and speed in one team.",
    name: "Dr. Priya Raman",
    role: "Head of AI, MedScope Health",
  },
  {
    quote: "From acquisition to validation, they own the full pipeline. It's like having a world-class data org embedded with us.",
    name: "Sofia Alvarez",
    role: "Chief Data Officer, FinNorth",
  },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner.jpg"
            alt="Be Amazed"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#023324]/95 via-[#045940]/85 to-[#0a7a59]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#023324]/80 via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#7be0d3]/20 blur-3xl animate-float" />
        <div className="absolute bottom-32 left-10 w-96 h-96 rounded-full bg-[#F9A51A]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <span className="eyebrow eyebrow-light mb-6">
                <span className="w-2 h-2 rounded-full bg-[#7be0d3] animate-pulse" />
                AI Data Processing Company
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 text-white text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Processing data.
              <br />
              Powering the
              <br />
              <span className="text-gradient-warm">future of AI.</span>
            </h1>

            <p className="animate-fade-up delay-200 text-white/80 text-lg md:text-xl mt-8 max-w-xl leading-relaxed">
              Lifewood is a global AI data processing company — turning raw data into
              precision-labeled, model-ready intelligence for the world's most ambitious teams.
            </p>

            <div className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="btn btn-secondary">
                  Get Started
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
              <Link href="/services">
                <button className="btn btn-outline">Explore Services</button>
              </Link>
            </div>

            <div className="animate-fade-up delay-400 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-[#7be0d3]/40 pl-4">
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">{s.value}</div>
                  <div className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* ===== TRUST / LOGO WALL ===== */}
      <section className="relative border-y border-[rgba(4,89,64,0.08)] bg-white/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold mb-8">
              Trusted by global teams building the next era of AI
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {["AutoVision", "MedScope", "FinNorth", "AgriOne", "RetailIQ", "Neurobyte"].map((brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center h-10 text-lg font-bold tracking-tight text-[#045940]/60 hover:text-[#045940] transition-colors"
                >
                  {brand}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-5">Why Lifewood</span>
            <h2 className="mt-4">
              Built for the era of
              <span className="text-gradient"> intelligent enterprise.</span>
            </h2>
            <p className="mt-5">
              Three pillars that make Lifewood the trusted partner for global teams building the next generation of AI products.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 100}>
              <div className="card group p-8 lg:p-10 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7be0d3]/0 to-[#7be0d3]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#045940] to-[#0a7a59] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_10px_30px_-10px_rgba(4,89,64,0.5)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl mb-3">{feature.title}</h3>
                  <p className="text-base">{feature.description}</p>

                  <div className="mt-6 flex items-center gap-2 text-[#045940] font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== PROCESS PIPELINE ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59]" />
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#7be0d3]/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#F9A51A]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow eyebrow-light mb-5">How We Work</span>
              <h2 className="text-white mt-4 text-3xl md:text-5xl">
                A pipeline engineered
                <span className="text-gradient-warm"> for precision.</span>
              </h2>
            </div>
          </Reveal>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#7be0d3]/40 to-transparent" />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 120}>
                <div className="relative text-center">
                  <div className="relative inline-flex w-24 h-24 rounded-full bg-gradient-to-br from-[#045940] to-[#0a7a59] border border-white/20 items-center justify-center mb-5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)]">
                    <span className="text-2xl font-bold text-white">{p.step}</span>
                    <div className="absolute inset-0 rounded-full ring-1 ring-[#7be0d3]/30 animate-pulse" />
                  </div>
                  <h3 className="text-xl text-white mb-2">{p.title}</h3>
                  <p className="text-white/70 text-sm">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <Reveal>
            <div>
              <span className="eyebrow mb-5">Industries We Serve</span>
              <h2 className="mt-4">
                Domain expertise,
                <span className="text-gradient"> globally deployed.</span>
              </h2>
              <p className="mt-6">
                From perception systems for autonomous vehicles to medical-grade
                diagnostic AI — our teams specialize across the verticals that matter.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 mt-8 text-[#045940] font-semibold hover:gap-3 transition-all">
                See all services
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 60}>
                <div className="card p-5 group cursor-pointer h-full">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F9A51A]/20 to-[#7be0d3]/20 mb-4 flex items-center justify-center text-[#045940] font-bold group-hover:scale-110 transition-transform">
                    {ind.name.charAt(0)}
                  </div>
                  <h3 className="text-base mb-1">{ind.name}</h3>
                  <p className="text-xs text-gray-500">{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section pt-0">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-5">Client Voices</span>
            <h2 className="mt-4">
              Trusted by leaders
              <span className="text-gradient"> shipping real AI.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="card p-8 h-full flex flex-col">
                <svg className="w-10 h-10 text-[#F9A51A] mb-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.13 9.5c0-2.5 2.4-4.5 4.87-4.5v2c-1.93 0-3 1.5-3 2.5 0 .8.27 1.34.81 1.61L13 12c.71.36 1.5 1.39 1.5 2.5 0 1.66-1.34 3-3 3s-3-1.34-3-3v-5zM2 9.5C2 7 4.4 5 6.87 5v2c-1.93 0-3 1.5-3 2.5 0 .8.27 1.34.81 1.61L5.87 12c.71.36 1.5 1.39 1.5 2.5 0 1.66-1.34 3-3 3s-3-1.34-3-3v-5z" />
                </svg>
                <p className="text-base leading-relaxed flex-grow italic">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-[rgba(4,89,64,0.1)] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#045940] to-[#0a7a59] flex items-center justify-center text-white font-bold">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0b1f17] text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59]">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#F9A51A]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#7be0d3]/15 blur-3xl" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="eyebrow eyebrow-light mb-5">Start the conversation</span>
                <h2 className="text-white mt-4 text-3xl md:text-4xl">
                  Ready to build something
                  <span className="text-gradient-warm"> extraordinary?</span>
                </h2>
                <p className="text-white/75 mt-5">
                  Let's discuss how Lifewood can transform your data into a strategic advantage.
                </p>
              </div>
              <div className="flex md:justify-end gap-3 flex-wrap">
                <Link href="/contact">
                  <button className="btn btn-secondary">Contact Sales</button>
                </Link>
                <Link href="/about">
                  <button className="btn btn-outline">Learn About Us</button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
