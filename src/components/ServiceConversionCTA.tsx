"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  Zap,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  Calendar,
  Lock,
  ArrowUpRight,
  Check,
} from "lucide-react";

export interface ServiceConversionCTAProps {
  id?: string;
  category?: string;
  defaultService?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  sourcePage?: string;
  projectSlug?: string;
}

const SERVICE_OPTIONS = [
  "Website Design & Development",
  "Web Application Development",
  "Mobile App Development",
  "Custom Software Development",
  "ERP & CRM Development",
  "SaaS & Cloud Solutions",
  "E-Commerce Website Development",
  "API Development & Integration",
  "Website Maintenance & Support",
  "Other Technology Requirements",
];

const BUDGET_OPTIONS = [
  "Below ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Flexible / Need Consultation",
];

const PHONE_CODES = [
  { code: "+91", label: "+91 (IN)" },
  { code: "+1", label: "+1 (US/CA)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+49", label: "+49 (DE)" },
  { code: "+971", label: "+971 (UAE)" },
  { code: "+61", label: "+61 (AU)" },
  { code: "+65", label: "+65 (SG)" },
  { code: "+33", label: "+33 (FR)" },
  { code: "+31", label: "+31 (NL)" },
  { code: "+41", label: "+41 (CH)" },
];

export default function ServiceConversionCTA({
  id = "conversion-cta",
  category,
  defaultService,
  title,
  subtitle,
  badge = "✳ DIVISION 01 // START YOUR PROJECT",
  sourcePage,
  projectSlug,
}: ServiceConversionCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    service: defaultService || "Website Design & Development",
    budget: "Flexible / Need Consultation",
    message: "",
    consentAgreed: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const currentSource = sourcePage || (typeof window !== "undefined" ? window.location.pathname : "/portfolio");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneCode: formData.phoneCode,
          phone: formData.phone,
          service: formData.service,
          project_type: formData.service,
          budget: formData.budget,
          timeline: "",
          message: formData.message,
          source: currentSource,
          source_page: currentSource,
          project_slug: projectSlug || "",
          collection: "portfolio_inquiries",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to deliver inquiry. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error("ServiceConversionCTA error:", err);
      setErrorMessage(err.message || "Failed to send enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phoneCode: "+91",
      phone: "",
      service: defaultService || "Website Design & Development",
      budget: "Flexible / Need Consultation",
      message: "",
      consentAgreed: true,
    });
    setIsSubmitted(false);
  };

  return (
    <section id={id} className="relative py-20 sm:py-28 scroll-mt-20">
      {/* Anchor for alternate hashes so existing links always land here */}
      <span id="inquire-form" className="sr-only" />
      <span id="conversion-cta" className="sr-only" />

      {/* Ambient glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-blue-600/10 via-[#FFD400]/12 to-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0d1017]/95 via-[#090b10]/95 to-[#0d1017]/95 border border-white/15 p-6 sm:p-12 lg:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
            {/* Subtle Cyber Grid Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            {/* Top Section Header */}
            <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/85 border border-[#FFD400]/40 text-[#FFD400] shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                {title ? (
                  title
                ) : (
                  <>
                    LET&apos;S ENGINEER YOUR{" "}
                    <span className="text-[#FFD400]">NEXT BIG IDEA.</span>
                  </>
                )}
              </h2>

              <p className="text-sm sm:text-base font-normal mt-4 leading-relaxed text-neutral-300">
                {subtitle ||
                  "From custom website development and mobile applications to enterprise software and e-commerce platforms, let's turn your business requirements into powerful digital solutions."}
              </p>
            </div>

            {/* Main Form Container */}
            <div className="relative z-10 max-w-4xl mx-auto mb-14">
              <div className="bg-[#0c0e14] p-6 sm:p-9 rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl relative transform-gpu [backface-visibility:hidden]">
                {/* Corner Flare */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD400]/5 blur-3xl rounded-full pointer-events-none" />

                {isSubmitted ? (
                  <div className="py-12 sm:py-16 text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-[#FFD400] text-black mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(255,212,0,0.5)]">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-widest">
                      <Lock className="w-3 h-3" />
                      <span>ENCRYPTED &amp; DISPATCHED</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white uppercase">
                      Inquiry Confirmed
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name || "Partner"}</span>. Your project brief has been received and routed directly to our Technology Solutions Squad. We will review your requirements and follow up within <span className="text-[#FFD400] font-mono">24 hours</span>.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-full border border-white/20 hover:border-[#FFD400] text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-all cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tight">
                          PROJECT ENQUIRY &amp; CONSULTATION
                        </h3>
                        <p className="text-xs text-neutral-400 font-light mt-1">
                          Tell us about your project. Our team will review your requirements and connect with you to discuss the right technology approach.
                        </p>
                      </div>
                      <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#FFD400]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-pulse" />
                        Priority Queue
                      </span>
                    </div>

                    {/* Row 1: Name & Business Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Full Name*"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#FFD400] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                          Business Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Business Email*"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#FFD400] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Service Discipline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                          Phone / WhatsApp <span className="text-red-400">*</span>
                        </label>
                        <div className="flex items-center rounded-xl bg-white/[0.04] border border-white/15 focus-within:border-[#FFD400] transition-colors overflow-hidden">
                          <select
                            value={formData.phoneCode}
                            onChange={(e) =>
                              setFormData({ ...formData, phoneCode: e.target.value })
                            }
                            className="bg-black/40 text-neutral-300 text-xs font-mono py-3 px-2.5 border-r border-white/10 focus:outline-none cursor-pointer"
                          >
                            {PHONE_CODES.map((p) => (
                              <option key={p.code} value={p.code} className="bg-[#121520] text-white">
                                {p.label}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="Phone / WhatsApp*"
                            className="flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                          Select Your Technology Service <span className="text-red-400">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full px-3 py-3 rounded-xl bg-[#0f121a] border border-white/15 focus:border-[#FFD400] text-sm text-white focus:outline-none transition-colors cursor-pointer"
                        >
                          {SERVICE_OPTIONS.map((srv) => (
                            <option key={srv} value={srv} className="bg-[#121520] text-white">
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Budget Range */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Estimated Project Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                        {BUDGET_OPTIONS.map((tier) => {
                          const isSelected = formData.budget === tier;
                          return (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: tier })}
                              className={`py-2 px-2 rounded-lg text-[11px] font-mono transition-all text-center border truncate cursor-pointer ${
                                isSelected
                                  ? "bg-[#FFD400] text-black font-bold border-[#FFD400] shadow-[0_0_12px_rgba(255,212,0,0.3)]"
                                  : "bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/25 hover:text-white"
                              }`}
                            >
                              {tier}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 4: Tell Us About Your Project */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Tell Us About Your Project <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Describe your project, business objectives, required features, preferred technologies, expected timeline and any specific challenges you want us to address..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#FFD400] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    {/* Row 5: NDA and Privacy Consent */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="consentAgreed"
                        required
                        checked={formData.consentAgreed}
                        onChange={(e) =>
                          setFormData({ ...formData, consentAgreed: e.target.checked })
                        }
                        className="mt-0.5 w-4 h-4 rounded border-white/20 text-[#FFD400] focus:ring-0 focus:ring-offset-0 bg-[#12151e] cursor-pointer accent-[#FFD400]"
                      />
                      <label
                        htmlFor="consentAgreed"
                        className="text-xs text-neutral-400 font-light leading-relaxed cursor-pointer select-none"
                      >
                        I agree to be contacted by RND Technosoft regarding my project enquiry. I understand that my information will be handled in accordance with the Privacy Policy. An NDA can be arranged upon request before sharing confidential project information.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3 flex flex-col items-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-2/3 py-4 rounded-full bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.18em] transition-all shadow-[0_0_25px_rgba(255,212,0,0.35)] hover:shadow-[0_0_35px_rgba(255,212,0,0.55)] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 active:scale-[0.99] mx-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>ENCRYPTING &amp; DISPATCHING...</span>
                          </>
                        ) : (
                          <>
                            <span>INITIATE PROJECT ENQUIRY</span>
                            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                          </>
                        )}
                      </button>
                      {errorMessage && (
                        <p className="text-xs text-red-400 font-mono mt-3 text-center">{errorMessage}</p>
                      )}

                      <div className="mt-4 text-center">
                        <p className="text-xs text-neutral-300 font-medium font-[family-name:var(--font-jakarta)]">
                          Your idea deserves the right technology partner.
                        </p>
                        <p className="text-[11px] text-neutral-400 font-light">
                          Our team will review your enquiry and get in touch to discuss the next steps.
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Bottom Trust Guarantees Bar */}
            <div className="relative z-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Clock className="w-5 h-5 text-[#FFD400] mb-1.5" />
                <span className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                  &lt; 24 HRS
                </span>
                <span className="text-[11px] text-[#FFD400] uppercase font-mono font-semibold">AVERAGE RESPONSE TIME</span>
                <span className="text-[11px] text-neutral-400 mt-0.5">Quick response to project enquiries</span>
              </div>

              <div className="flex flex-col items-center">
                <ShieldCheck className="w-5 h-5 text-[#FFD400] mb-1.5" />
                <span className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                  100%
                </span>
                <span className="text-[11px] text-[#FFD400] uppercase font-mono font-semibold">CONFIDENTIALITY FOCUS</span>
                <span className="text-[11px] text-neutral-400 mt-0.5">Your project information handled responsibly</span>
              </div>

              <div className="flex flex-col items-center">
                <Zap className="w-5 h-5 text-[#FFD400] mb-1.5" />
                <span className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                  DIRECT
                </span>
                <span className="text-[11px] text-[#FFD400] uppercase font-mono font-semibold">EXPERT CONSULTATION</span>
                <span className="text-[11px] text-neutral-400 mt-0.5">Connect with our technology team</span>
              </div>

              <div className="flex flex-col items-center">
                <Sparkles className="w-5 h-5 text-[#FFD400] mb-1.5" />
                <span className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                  ZERO
                </span>
                <span className="text-[11px] text-[#FFD400] uppercase font-mono font-semibold">CONSULTATION OBLIGATION</span>
                <span className="text-[11px] text-neutral-400 mt-0.5">Explore your requirements without commitment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
