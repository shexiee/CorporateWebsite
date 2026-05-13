"use client";
import { useState } from "react";
import Reveal from "./Reveal";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023324] via-[#045940] to-[#0a7a59]" />
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-[#7be0d3]/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#F9A51A]/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="eyebrow eyebrow-light mb-6 animate-fade-up">Get in Touch</span>
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight animate-fade-up delay-100">
            Let's build something
            <br />
            <span className="text-gradient-warm">remarkable, together.</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto mt-6 animate-fade-up delay-200">
            We'd love to hear from you. Tell us about your project and our team will respond within one business day.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="section pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
          {/* Left info column */}
          <Reveal className="space-y-6">
            <div className="card p-8">
              <h3 className="text-xl mb-3">Email us</h3>
              <p className="text-sm">For general inquiries and project conversations.</p>
              <a href="mailto:hello@lifewood.com" className="mt-4 inline-block text-[#045940] font-semibold hover:underline">
                hello@lifewood.com
              </a>
            </div>
            <div className="card p-8">
              <h3 className="text-xl mb-3">Visit us</h3>
              <p className="text-sm">Headquartered globally with 14 offices spanning four continents.</p>
              <div className="mt-4 flex items-center gap-2 text-[#045940] font-semibold">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Global · Remote-friendly
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-[#023324] to-[#045940] text-white">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F9A51A]/20 blur-2xl" />
              <h3 className="text-xl text-white mb-3">Response Promise</h3>
              <p className="text-white/75 text-sm">
                Every inquiry receives a personal reply within 24 hours, Monday through Friday.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="card-glass p-8 md:p-12">
            <h2 className="text-3xl mb-2">Send a message</h2>
            <p className="text-sm mb-8">Fill out the form and we'll be in touch shortly.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#045940] mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Doe"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#045940] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className="input-field"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#045940] mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 123 4567"
                  className="input-field"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#045940] mb-2">How can we help?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Tell us about your project..."
                  className="input-field resize-none"
                />
              </div>
              <div className="md:col-span-2 flex items-start gap-3 p-4 rounded-xl bg-[#045940]/5 border border-[rgba(4,89,64,0.08)]">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 accent-[#045940] cursor-pointer"
                />
                <label className="text-sm text-gray-700 leading-relaxed">
                  I agree to let Lifewood store my information to respond to my inquiry. View our privacy policy.
                </label>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
