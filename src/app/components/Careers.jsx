"use client";
import Link from "next/link";
import Reveal from "./Reveal";

const perks = [
  {
    title: "Growth Without Limits",
    body: "Annual learning stipends, mentorship, and clear paths into leadership and specialist tracks.",
  },
  {
    title: "Global, Human-First Culture",
    body: "Distributed teams across 14 offices — connected by curiosity, respect, and impact.",
  },
  {
    title: "Work That Matters",
    body: "Build AI systems used by enterprises and communities to solve problems that matter.",
  },
];

const roles = [
  { team: "Engineering", title: "Senior ML Engineer", location: "Remote · Global" },
  { team: "Operations", title: "Data Annotation Lead", location: "Cebu, PH" },
  { team: "Product", title: "Product Designer", location: "Hybrid · APAC" },
  { team: "Sales", title: "Enterprise Account Executive", location: "Remote · US" },
];

export default function Careers() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F9A51A]/15 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#7be0d3]/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="eyebrow eyebrow-light mb-6 animate-fade-up">Join Us</span>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight animate-fade-up delay-100">
            Build the future
            <br />
            <span className="text-gradient-warm">of intelligence.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mt-8 animate-fade-up delay-200">
            Join a team of innovators, engineers, and creators driving the AI revolution
            for the world's most ambitious organizations.
          </p>
          <div className="mt-10 animate-fade-up delay-300">
            <Link href="#openings">
              <button className="btn btn-secondary">View Open Roles</button>
            </Link>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="section">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-5">Why Lifewood</span>
            <h2 className="mt-4">
              More than a job,
              <span className="text-gradient"> a launchpad.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perks.map((perk, i) => (
            <Reveal key={perk.title} delay={i * 100}>
              <div className="card p-8 group h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#045940] to-[#0a7a59] flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_10px_30px_-10px_rgba(4,89,64,0.5)] group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-xl mb-3">{perk.title}</h3>
                <p>{perk.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="openings" className="section pt-0">
        <Reveal>
        <div className="card-glass p-8 md:p-12">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow mb-3">Open Positions</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Find your role.</h2>
            </div>
            <Link href="/contact" className="text-[#045940] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              Don't see a fit? Get in touch
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="divide-y divide-[rgba(4,89,64,0.08)]">
            {roles.map((role) => (
              <div
                key={role.title}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-3 py-6 hover:px-3 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#F9A51A]">
                    {role.team}
                  </span>
                  <h3 className="text-xl md:text-2xl mt-1 group-hover:text-[#045940] transition-colors">
                    {role.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-gray-600">{role.location}</span>
                  <div className="w-10 h-10 rounded-full bg-[#045940]/10 flex items-center justify-center group-hover:bg-[#045940] group-hover:text-white text-[#045940] transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
