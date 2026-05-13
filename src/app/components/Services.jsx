"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const modalities = [
  {
    title: "Text",
    tag: "01",
    description: "Large-scale text collection, labeling, transcription, and sentiment analysis powered by domain-specialized linguistic teams.",
    bullets: ["NER & Classification", "Multilingual Transcription", "Sentiment & Intent Analysis"],
  },
  {
    title: "Audio",
    tag: "02",
    description: "Voice categorization, music intelligence, and speech datasets engineered for production-grade ASR and TTS models.",
    bullets: ["Speech Collection", "Voice Tagging", "Music Intelligence"],
  },
  {
    title: "Image",
    tag: "03",
    description: "Pixel-perfect image labeling, classification, object detection and segmentation for computer vision pipelines.",
    bullets: ["Bounding Boxes", "Semantic Segmentation", "Keypoint Annotation"],
  },
  {
    title: "Video",
    tag: "04",
    description: "Frame-by-frame video annotation, live broadcast intelligence, and subtitle generation at global scale.",
    bullets: ["Video Audit", "Live Broadcast", "Subtitle Generation"],
  },
];

const services = [
  {
    title: "Data Acquisition",
    description: "Comprehensive sourcing strategies fueling AI training and ongoing model evolution.",
  },
  {
    title: "Data Collection",
    description: "Multi-modal text, speech, and video gathering with rigorous categorization frameworks.",
  },
  {
    title: "Data Annotation",
    description: "High-precision annotation across text, image, audio, and video at enterprise volume.",
  },
  {
    title: "Data Curation",
    description: "Structured organization for reliable accessibility, lineage, and classification.",
  },
  {
    title: "Data Validation",
    description: "Multi-layer quality checks ensuring accuracy, consistency, and zero-defect delivery.",
  },
  {
    title: "Model Evaluation",
    description: "Independent benchmarks and continuous testing to keep your models production-ready.",
  },
];

const pipeline = [
  {
    step: "01",
    title: "Discover",
    desc: "We map your model objectives, data gaps, and success metrics — defining a clear plan for the pipeline.",
  },
  {
    step: "02",
    title: "Acquire & Collect",
    desc: "Sourcing and gathering balanced, representative datasets across modalities and demographics.",
  },
  {
    step: "03",
    title: "Annotate",
    desc: "Specialist teams label data with rigorous guidelines, double-blind review, and edge-case calibration.",
  },
  {
    step: "04",
    title: "Validate",
    desc: "Statistical sampling, golden datasets, and model-in-the-loop QA catch errors before delivery.",
  },
  {
    step: "05",
    title: "Deliver & Iterate",
    desc: "Model-ready datasets shipped to your environment with continuous feedback loops for retraining.",
  },
];

const faqs = [
  {
    q: "How do you ensure annotation quality at scale?",
    a: "Every project ships with documented guidelines, multi-pass review, golden datasets, and statistical sampling. Most engagements maintain 99%+ accuracy with model-in-the-loop validation.",
  },
  {
    q: "What modalities and industries do you cover?",
    a: "We process text, audio, image, video, LiDAR, and multimodal data — across automotive, healthcare, finance, retail, AgriTech, robotics, and more.",
  },
  {
    q: "How quickly can a project start?",
    a: "Kickoff for standard pipelines is typically 5–10 business days from scoping. Specialist projects (medical, autonomous, multilingual) ramp in 2–3 weeks with dedicated teams.",
  },
  {
    q: "Do you handle sensitive or regulated data?",
    a: "Yes. We operate ISO-aligned workflows with role-based access, on-prem and air-gapped delivery options, and compliance support for HIPAA, GDPR, and SOC 2 environments.",
  },
];

export default function Services() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/services.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#023324]/95 via-[#045940]/80 to-[#023324]/70" />
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[#7be0d3]/20 blur-3xl animate-float" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-light mb-6 animate-fade-up">What We Do</span>
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight animate-fade-up delay-100">
              AI Data Services
              <br />
              <span className="text-gradient-warm">engineered to scale.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mt-6 max-w-xl animate-fade-up delay-200">
              Optimizing organizational outcomes through end-to-end AI data solutions —
              built by experts, trusted by enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* MODALITIES */}
      <section className="section">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-5">Modalities</span>
            <h2 className="mt-4">
              Every data type,
              <span className="text-gradient"> handled with precision.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {modalities.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`relative text-left p-5 rounded-2xl transition-all duration-500 whitespace-nowrap lg:whitespace-normal min-w-[180px] lg:min-w-0 ${
                  selectedTab === index
                    ? "bg-gradient-to-br from-[#023324] to-[#045940] text-white shadow-[0_20px_40px_-15px_rgba(4,89,64,0.5)]"
                    : "bg-white/60 backdrop-blur-md border border-[rgba(4,89,64,0.08)] hover:border-[#045940]/40"
                }`}
              >
                <div className={`text-xs font-semibold tracking-widest mb-1 ${
                  selectedTab === index ? "text-[#7be0d3]" : "text-gray-500"
                }`}>
                  {item.tag}
                </div>
                <div className={`text-xl font-bold ${
                  selectedTab === index ? "text-white" : "text-[#0b1f17]"
                }`}>
                  {item.title}
                </div>
              </button>
            ))}
          </div>

          <div key={selectedTab} className="card-glass p-8 md:p-12 animate-fade-in">
            <div className="text-7xl font-bold text-gradient mb-2">
              {modalities[selectedTab].tag}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0b1f17] mb-5">
              {modalities[selectedTab].title}
            </h3>
            <p className="text-lg leading-relaxed">
              {modalities[selectedTab].description}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {modalities[selectedTab].bullets.map((b) => (
                <div key={b} className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-[rgba(4,89,64,0.08)]">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#F9A51A] to-[#fbbf5b]" />
                  <span className="text-sm font-medium text-[#0b1f17]">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE / PROCESS */}
      <section className="section pt-0">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow mb-5">Our Pipeline</span>
            <h2 className="mt-4">
              From raw data to
              <span className="text-gradient"> production-ready AI.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#045940]/30 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pipeline.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative text-center group">
                  <div className="relative inline-flex w-24 h-24 rounded-full bg-white border-2 border-[#045940]/20 items-center justify-center mb-5 shadow-[0_10px_30px_-15px_rgba(4,89,64,0.3)] group-hover:border-[#F9A51A] transition-colors">
                    <span className="text-2xl font-bold text-gradient">{p.step}</span>
                  </div>
                  <h3 className="text-lg mb-2">{p.title}</h3>
                  <p className="text-sm">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F9A51A]/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#7be0d3]/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow eyebrow-light mb-5">Full Suite</span>
              <h2 className="text-white mt-4 text-3xl md:text-5xl">
                A wide variety of services
                <span className="text-gradient-warm"> for AI training data.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="group relative bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-7 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="absolute top-6 right-6 text-xs font-mono text-[#7be0d3]/70">
                    0{index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F9A51A] to-[#fbbf5b] mb-5 flex items-center justify-center text-[#2b1c00] font-bold text-lg shadow-[0_10px_30px_-10px_rgba(249,165,26,0.6)]">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-[#7be0d3] text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:gap-3 transition-all">
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12">
          <Reveal>
            <div>
              <span className="eyebrow mb-5">FAQs</span>
              <h2 className="mt-4">
                Common questions,
                <span className="text-gradient"> clear answers.</span>
              </h2>
              <p className="mt-6">
                Everything you need to know about partnering with Lifewood —
                from quality to compliance to delivery timelines.
              </p>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 80}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className={`w-full text-left card p-6 transition-all ${
                    openFaq === i ? "border-[#045940]/30" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg flex-1">{faq.q}</h3>
                    <div className={`w-8 h-8 rounded-full bg-[#045940]/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-45 bg-[#045940] text-white" : "text-[#045940]"
                    }`}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </div>
                  <div className={`grid transition-all duration-500 ${
                    openFaq === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
