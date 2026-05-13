"use client";
import Link from "next/link";
import Reveal from "./Reveal";

const values = [
  {
    title: "Innovation",
    body: "We pioneer AI solutions that reshape industries and unlock new possibilities for our partners.",
  },
  {
    title: "Integrity",
    body: "Trust, transparency, and accountability sit at the core of every engagement we deliver.",
  },
  {
    title: "Impact",
    body: "We measure success by the lasting transformation we drive for clients and communities.",
  },
];

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#7be0d3]/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#F9A51A]/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="eyebrow eyebrow-light mb-6 animate-fade-up">Our Story</span>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight animate-fade-up delay-100">
            Empowering progress
            <br />
            <span className="text-gradient-warm">through data.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mt-8 animate-fade-up delay-200">
            Lifewood is a global AI data processing company — engineering the high-quality,
            human-validated datasets that power tomorrow's most advanced AI systems.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="eyebrow mb-5">Our Mission</span>
            <h2 className="mt-4">
              The data layer behind
              <span className="text-gradient"> intelligent AI.</span>
            </h2>
            <p className="mt-6">
              We exist to make AI work in the real world — by processing, labeling, and validating
              the datasets that power production-grade models. From acquisition to annotation,
              curation to evaluation, Lifewood operates the full data pipeline for AI.
            </p>
            <p className="mt-4">
              Our global workforce blends deep technical expertise with rigorous quality systems,
              delivering accuracy at scale across computer vision, NLP, audio, and multimodal AI.
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 mt-8 text-[#045940] font-semibold hover:gap-3 transition-all">
              Explore our services
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#045940] to-[#0a7a59] p-1 shadow-[0_30px_60px_-20px_rgba(4,89,64,0.4)]">
              <div className="w-full h-full rounded-3xl bg-white/95 backdrop-blur p-8 flex flex-col justify-between">
                <div>
                  <div className="text-7xl font-bold text-gradient">10+</div>
                  <div className="text-sm uppercase tracking-wider text-gray-500 mt-2">Years pioneering AI data</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-3xl font-bold text-[#045940]">14</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Offices</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#045940]">120+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Clients</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-[#F9A51A] flex items-center justify-center text-white font-bold text-lg rotate-6 shadow-2xl">
              Be Amazed.
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section pt-0">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-5">Our Values</span>
            <h2 className="mt-4">The principles that guide us.</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="card p-8 group h-full">
                <div className="text-5xl font-bold text-gradient mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-2xl mb-3">{v.title}</h3>
                <p>{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
