"use client";

import { useState } from "react";
import { Rocket, Send, Sparkles, Phone, Mail, CheckCircle2 } from "lucide-react";
import CyberButton from "@/components/CyberButton";

export default function MissionCTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Websites & Web Apps",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-transparent text-white overflow-hidden border-t border-white/5">
      {/* Warp Portal Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FFD400]/8 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.015] border border-white/15 p-8 sm:p-14 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Top Amber Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent shadow-[0_0_20px_#FFD400]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Value Prop */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET&apos;S CONNECT | START A CONVERSATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight leading-[1.1] uppercase text-white mb-8">
                HAVE A VISION?
                <br />
                LET&apos;S MAKE IT
                <br />
                HAPPEN.
              </h2>

              <div className="space-y-5 mb-8">
                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                  Whether you&apos;re looking to build smarter technology, accelerate digital growth, create a distinctive brand or produce compelling visual content, RND Technosoft is ready to bring your next big idea to life.
                </p>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                  Tell us what you&apos;re envisioning. Let&apos;s explore the possibilities and build something that moves your business forward.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <a
                  href="mailto:contact@rndtechnosoft.com"
                  className="flex items-start gap-3 text-sm hover:text-[#FFD400] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#FFD400] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-white/50 text-xs font-mono uppercase tracking-wider mb-0.5">EMAIL:</span>
                    <span className="text-white group-hover:text-[#FFD400]">contact@rndtechnosoft.com</span>
                  </div>
                </a>
                <a
                  href="tel:+917304845823"
                  className="flex items-start gap-3 text-sm hover:text-[#FFD400] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#FFD400] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-white/50 text-xs font-mono uppercase tracking-wider mb-0.5">PHONE:</span>
                    <span className="text-white group-hover:text-[#FFD400]">+91 73048 45823</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-9 rounded-2xl bg-[#050608]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-white mb-3">
                  Let&apos;s Start Something Great.
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  Share a few details about your project. Our team will connect with you to understand your requirements and discuss the next steps.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/40 text-center animate-in fade-in">
                    <CheckCircle2 className="w-12 h-12 text-[#FFD400] mx-auto mb-3" />
                    <h4 className="text-xl font-bold font-[family-name:var(--font-syne)] text-white mb-2">
                      Message Received!
                    </h4>
                    <p className="text-sm text-white/70">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm text-white/70 mb-2">
                        Your Name / Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Enter your name or organisation"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FFD400]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white/70 mb-2">
                        Business Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FFD400]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white/70 mb-2">
                        What Can We Help You With?
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFD400]/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="Technology Solutions">Technology Solutions</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Branding & Design">Branding & Design</option>
                        <option value="Media Production">Media Production</option>
                        <option value="Multiple Services/Complete Digital Solutions">Multiple Services/Complete Digital Solutions</option>
                        <option value="Not sure yet - Let's Discuss">Not sure yet - Let&apos;s Discuss</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-white/70 mb-2">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Share your goals, requirements, expectations or ideas..."
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FFD400]/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg bg-[#FFD400] hover:bg-[#ffe033] text-black font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)] hover:shadow-[0_0_30px_rgba(255,212,0,0.5)] flex items-center justify-center gap-2 group"
                    >
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
