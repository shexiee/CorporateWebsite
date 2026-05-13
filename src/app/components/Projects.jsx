"use client";
import Link from "next/link";
import Reveal from "./Reveal";

const projects = [
  {
    id: 1,
    title: "Autonomous Vehicle Perception",
    category: "Computer Vision",
    tag: "AV/01",
    description:
      "Multi-million frame LiDAR and camera annotation pipeline powering object detection, lane segmentation, and pedestrian intent prediction for a Tier-1 mobility OEM.",
    metrics: [
      { value: "12M+", label: "Frames labeled" },
      { value: "99.7%", label: "Label accuracy" },
    ],
    gradient: "from-[#023324] via-[#045940] to-[#0a7a59]",
    accent: "#7be0d3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="3" y="11" width="18" height="6" rx="2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M5 11l2-4h10l2 4M9 14h6" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Medical Imaging Intelligence",
    category: "Healthcare AI",
    tag: "MED/02",
    description:
      "Radiology-grade annotation for MRI, CT, and X-ray datasets — enabling AI-assisted diagnosis tools that flag anomalies with clinician-level precision.",
    metrics: [
      { value: "2.4M", label: "Scans annotated" },
      { value: "30+", label: "Pathology classes" },
    ],
    gradient: "from-[#045940] via-[#0a7a59] to-[#7be0d3]",
    accent: "#F9A51A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2v6m0 8v6M2 12h6m8 0h6" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Conversational AI Training",
    category: "Natural Language",
    tag: "NLP/03",
    description:
      "Multilingual transcription, intent labeling, and dialogue curation across 30+ languages powering enterprise virtual assistants and customer-service LLMs.",
    metrics: [
      { value: "180K", label: "Conversation hours" },
      { value: "32", label: "Languages" },
    ],
    gradient: "from-[#F9A51A] via-[#fbbf5b] to-[#7be0d3]",
    accent: "#045940",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Retail Analytics Engine",
    category: "Commerce AI",
    tag: "RTL/04",
    description:
      "End-to-end product cataloging, attribute extraction, and shelf-image classification fueling personalization engines for a global e-commerce leader.",
    metrics: [
      { value: "45M", label: "SKUs processed" },
      { value: "18", label: "Markets" },
    ],
    gradient: "from-[#0a7a59] via-[#045940] to-[#023324]",
    accent: "#F9A51A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 11-8 0" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Agricultural Vision",
    category: "AgriTech AI",
    tag: "AGR/05",
    description:
      "Satellite and drone imagery annotation for crop health monitoring, yield prediction, and reforestation analytics deployed across 18 countries.",
    metrics: [
      { value: "8.6M", label: "Hectares mapped" },
      { value: "18", label: "Countries" },
    ],
    gradient: "from-[#7be0d3] via-[#0a7a59] to-[#045940]",
    accent: "#F9A51A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 22V8M5 12c0-5 3-8 7-8s7 3 7 8c0 3-2 5-5 5H10c-3 0-5-2-5-5z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Financial Fraud Detection",
    category: "FinTech AI",
    tag: "FIN/06",
    description:
      "Transaction labeling and adversarial dataset curation that trains fraud-detection models for global banks — reducing false positives by 38%.",
    metrics: [
      { value: "1.2B", label: "Transactions" },
      { value: "38%", label: "Fewer false alerts" },
    ],
    gradient: "from-[#023324] via-[#045940] to-[#F9A51A]",
    accent: "#7be0d3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-[#7be0d3]/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-[#F9A51A]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <span className="eyebrow eyebrow-light mb-6 animate-fade-up">Case Studies</span>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight max-w-4xl animate-fade-up delay-100">
            AI data projects
            <br />
            <span className="text-gradient-warm">that move the needle.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mt-6 animate-fade-up delay-200">
            From perception systems to fraud detection — explore how Lifewood transforms raw data
            into production-grade AI for the world's leading enterprises.
          </p>

          <div className="flex flex-wrap gap-3 mt-10 animate-fade-up delay-300">
            {["All", "Computer Vision", "Healthcare", "NLP", "Commerce", "AgriTech", "FinTech"].map((f, i) => (
              <button
                key={f}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-[#F9A51A] text-[#2b1c00]"
                    : "bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur border border-white/15"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS BENTO GRID */}
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
            <article
              className="group relative overflow-hidden rounded-3xl bg-white border border-[rgba(4,89,64,0.08)] hover:border-[rgba(4,89,64,0.25)] shadow-[0_2px_10px_rgba(4,89,64,0.06)] hover:shadow-[0_30px_60px_-20px_rgba(4,89,64,0.25)] transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full"
            >
              {/* Visual header */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }} />
                <div
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-50"
                  style={{ background: project.accent }}
                />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/15 backdrop-blur text-white border border-white/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/60 tracking-widest">{project.tag}</span>
                </div>
                <div className="absolute bottom-5 left-5">
                  <div
                    className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform duration-500"
                  >
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-7">
                <h3 className="text-xl mb-3 group-hover:text-[#045940] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed">{project.description}</p>

                <div className="mt-6 pt-5 border-t border-[rgba(4,89,64,0.08)] grid grid-cols-2 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl font-bold text-gradient">{m.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 text-[#045940] text-sm font-semibold group-hover:gap-3 transition-all">
                  View case study
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <Reveal>
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59]">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#F9A51A]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#7be0d3]/15 blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow eyebrow-light mb-5">Have a project?</span>
              <h2 className="text-white mt-4 text-3xl md:text-4xl">
                Let's process your data
                <span className="text-gradient-warm"> into intelligence.</span>
              </h2>
            </div>
            <div className="flex md:justify-end gap-3 flex-wrap">
              <Link href="/contact">
                <button className="btn btn-secondary">Start a Project</button>
              </Link>
              <Link href="/services">
                <button className="btn btn-outline">Explore Services</button>
              </Link>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
