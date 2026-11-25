"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  Briefcase,
  Layers,
  Sparkles,
  Mail,
  Clock,
  ShieldCheck,
  Compass,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "general";

  const isCareer = type === "career";

  const config = isCareer
    ? {
        badge: "APPLICATION TRANSMISSION LOGGED",
        heading: "APPLICATION RECEIVED",
        highlight: "THANK YOU FOR APPLYING TO RND TECHNOSOFT",
        description:
          "Our Human Resources department and Lead Software Architects have received your portfolio, resume, and experience telemetry. A confirmation receipt has been dispatched to your email address from hr@rndtechnosoft.com. We evaluate every submission carefully and typically respond within 48 business hours.",
        channel: "hr@rndtechnosoft.com",
        sla: "Within 48 Business Hours",
        status: "Under Active Review",
      }
    : {
        badge: "INQUIRY TRANSMISSION CONFIRMED",
        heading: "INQUIRY RECEIVED",
        highlight: "THANK YOU FOR CONNECTING WITH RND TECHNOSOFT",
        description:
          "Your project brief and architectural requirements have been successfully encrypted and delivered to our Principal Architecture Squad. A confirmation email has been dispatched to your inbox. Our technical directors will review your scope and connect within 4 to 24 business hours.",
        channel: "info@rndtechnosoft.com",
        sla: "Within 4 - 24 Business Hours",
        status: "Telemetry Logged & Assigned",
      };

  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black overflow-x-hidden">
      {/* 3D Starfield Background */}
      <SpaceBackground />
      <Navbar />

      {/* Hero Page Banner */}
      <PageBanner
        title={config.heading}
        subtitle={config.badge}
        breadcrumbs={[{ label: "THANK YOU", href: "/thank-you" }]}
        imageSrc="/NewBanner/contactus.png"
      />

      {/* Main Content (Directly below banner without overlap) */}
      <main className="relative z-10 w-full">
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-20">
          {/* Confirmation HUD Card */}
          <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden mb-16">
            {/* Ambient Nebula Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD400]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            {/* Glowing Success Emblem */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-[#FFD400]/20 blur-xl animate-pulse" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/80 border-2 border-[#FFD400] text-[#FFD400] flex items-center justify-center shadow-[0_0_35px_rgba(255,212,0,0.4)]">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2]" />
                </div>
              </div>

              {/* Telemetry Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-ping" />
                <span>{config.badge}</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold uppercase tracking-tight text-white leading-tight">
                  {config.highlight}
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                  {config.description}
                </p>
              </div>

              {/* Telemetry Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>STATUS</span>
                  </div>
                  <div className="text-sm font-bold text-[#FFD400]">{config.status}</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>EXPECTED SLA</span>
                  </div>
                  <div className="text-sm font-bold text-white">{config.sla}</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                    <Mail className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>CHANNEL</span>
                  </div>
                  <div className="text-sm font-bold text-white truncate">{config.channel}</div>
                </div>
              </div>

              {/* Primary Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-bold transition-all"
                >
                  <Home className="w-4 h-4 text-white/70" />
                  <span>Return to Homepage</span>
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFD400] text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#ffe34d] transition-all shadow-[0_0_30px_rgba(255,212,0,0.35)]"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
                >
                  <Layers className="w-4 h-4 text-[#FFD400]" />
                  <span>Our Services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Discovery Pillars Grid */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400]">
                CONTINUE EXPLORING
              </span>
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold uppercase text-white">
                Discover the RND Ecosystem
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Portfolio */}
              <Link
                href="/portfolio"
                className="group p-6 sm:p-8 rounded-2xl bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] text-white group-hover:text-[#FFD400] transition-colors uppercase">
                    Flagship Creations
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Explore our engineered portfolio of WebGL spatial experiences, enterprise software architectures, and global brand identities.
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-xs font-mono text-[#FFD400] font-bold uppercase">
                  <span>View Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 2: Services */}
              <Link
                href="/services"
                className="group p-6 sm:p-8 rounded-2xl bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] text-white group-hover:text-[#FFD400] transition-colors uppercase">
                    Integrated Capabilities
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Dive into our technology solutions, data-driven digital marketing, brand identities, and commercial videography pipelines.
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-xs font-mono text-[#FFD400] font-bold uppercase">
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 3: Industries */}
              <Link
                href="/industries"
                className="group p-6 sm:p-8 rounded-2xl bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] text-white group-hover:text-[#FFD400] transition-colors uppercase">
                    Sectors in Focus
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Discover how we build scalable digital ecosystems across Manufacturing, Healthcare, FMCG, Hospitality &amp; Education.
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-2 text-xs font-mono text-[#FFD400] font-bold uppercase">
                  <span>Browse Industries</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <RnDFooter />
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050608] text-white flex items-center justify-center font-archia">
          <div className="flex items-center gap-3 font-mono text-xs text-[#FFD400]">
            <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-ping" />
            <span>Loading Transmission Receipt...</span>
          </div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
