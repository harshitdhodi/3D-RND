"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Quote,
Cpu,
  Palette,
  TrendingUp,
  IndianRupee,
  Users,
} from "lucide-react";
import CyberButton from "@/components/CyberButton";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  squad: string;
  image: string;
  bio: string;
  expertise: string[];
  metric: { value: string; label: string };
  icon: typeof Cpu;
}

export default function TeamCultureSection({
  className = "",
}: {
  className?: string;
}) {
  const squadLeaders: TeamMember[] = [
    {
      id: "gm",
      name: "Bhavika Tailor",
      role: "General Manager",
      squad: "Operations & General Management",
      image: "/office/Professional General Manager Office Portrait.png",
      bio: "Executive operations leader steering cross-functional delivery, resource optimization, strategic client partnerships, and agency-wide operational excellence.",
      expertise: ["Operational Strategy", "Resource Scaling", "Cross-Functional Leadership", "Executive Management"],
      metric: { value: "99.8%", label: "On-Time Project Delivery" },
      icon: Users,
    },
    {
      id: "sr-fullstack",
      name: "Ruksar Saiyed",
      role: "Sr. Full Stack Developer",
      squad: "Full Stack & Core Architecture",
      image: "/office/Sr.Full Stack Developer.png",
      bio: "Senior engineering architect specializing in resilient cloud platforms, distributed API backends, real-time data pipelines, and high-concurrency microservices.",
      expertise: ["Full Stack Development", "System Design", "Node.js", "React", "Distributed Systems"],
      metric: { value: "<10ms", label: "P99 System Latency" },
      icon: Cpu,
    },
    {
      id: "sr-web-dev",
      name: "Krutika Rohit",
      role: "Sr. Web Developer",
      squad: "Frontend & Interactive Engineering",
      image: "/office/Sr. Web Developer.png",
      bio: "Frontend specialist building high-performance modern web applications, interactive WebGL components, modular design token frameworks, and accessible UI.",
      expertise: ["Web Development", "JavaScript", "React", "Next.js", "Interactive UI"],
      metric: { value: "100/100", label: "Lighthouse Performance" },
      icon: Cpu,
    },
    {
      id: "creative-head",
      name: "Sairoz Wadsariaa",
      role: "Creative Head",
      squad: "Branding, Design & Creative Direction",
      image: "/office/Confident Creative Head in Studio.png",
      bio: "Creative leader directing brand identity systems, visual design strategy, and creative campaigns. Translates business vision into compelling visual experiences that connect brands with their audiences across digital and print.",
      expertise: ["Creative Direction", "Brand Design", "Visual Identity", "Brand Strategy", "Creative Campaigns"],
      metric: { value: "150+", label: "Brand Projects Delivered" },
      icon: Palette,
    },
  ];

  return (
    <section id="team-culture" className={`relative w-full px-3 sm:px-6 md:px-8 lg:px-12 ${className}`}>
      {/* Ambient Cosmic Background Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-[#FFD400]/4 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[450px] bg-[#c59a58]/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Max Width Container - Aligns with Navbar Logo (left) and Navbar Button (right) */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================================================
            SECTION HEADER
            ========================================================================= */}
      <div className="mb-14 sm:mb-18 border-b border-white/10 pb-8 sm:pb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>LEADERSHIP & VISION // THE MINDS BEHIND RND</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-archia-local)] font-bold text-white tracking-tight leading-[1.08] uppercase">
              THE VISION BEHIND{" "}
              <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                THE INNOVATION.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-md">
           Behind every ambitious idea is a vision to make it happen. Since 2018, RND Technosoft has been building its journey around technology, creativity and innovation — bringing together diverse capabilities to help businesses navigate and embrace the digital future.
          </p>
        </div>
      </div>

      {/* =========================================================================
          1. FOUNDER & OWNER SPOTLIGHT (UNIQUE EDITORIAL COMMAND CARD)
          ========================================================================= */}
      <div className="mb-14 sm:mb-16">
        <div className="rounded-[32px] bg-black/30 backdrop-blur-md border border-[#FFD400]/30 hover:border-[#FFD400]/50 p-8 sm:p-12 lg:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all duration-500">
          {/* Top Amber Radiant Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent shadow-[0_0_20px_#FFD400]" />

          {/* Background Sci-Fi Grid lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left: Founder Portrait with Cyber Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square max-w-[420px] mx-auto rounded-2xl overflow-hidden border-2 border-white/15 group-hover:border-[#FFD400]/60 transition-all duration-700 shadow-2xl">
                <Image
                  src="/images/team/founder_ravi_shah.png"
                  alt="Ravi Shah — Founder & CEO"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>

              {/* Corner Cyber Accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#FFD400]" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#FFD400]" />
            </div>

            {/* Right: Founder Information & Executive Conviction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>FOUNDER &amp; CHIEF EXECUTIVE OFFICER</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-archia-local)] font-bold text-white uppercase tracking-tight">
                 MR. RAVI SHAH
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  FOUNDER • BUSINESS LEADER • VISIONARY
                </p>
              </div>

              {/* Founder's Philosophy Quote */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#FFD400] py-2 space-y-3 bg-white/[0.02] p-5 rounded-r-xl">
                <Quote className="w-8 h-8 text-[#FFD400]/40 absolute -top-3 -left-3 fill-current" />
                <p className="text-sm sm:text-base text-neutral-200 font-light italic leading-relaxed">
                 As the driving force behind RND Technosoft, Mr. Ravi Shah leads the company&apos;s vision of bringing technology and creativity together. With a focus on innovation, business growth and meaningful client partnerships, he continues to guide RND towards creating solutions that empower businesses and unlock new possibilities. <br/>
                 His vision is to build an organisation where technology, strategy and creativity work together to turn ambitious ideas into lasting impact.
                </p>
                <span className="text-md italic font-mono text-[#FFD400] font-medium block">&ldquo;True innovation happens when technology meets vision, creativity meets strategy, and ideas are transformed into opportunities. At RND Technosoft, we believe in building more than solutions — we believe in creating possibilities.&rdquo;</span>
                <span className="text-xs font-mono text-[#FFD400] font-medium block">
                  — Mr. Ravi Shah, Founder &amp; CEO
                </span>
              </div>

              {/* 3 Executive Pillars / Stats */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-[family-name:var(--font-archia-local)] font-bold text-white">
                    14+
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-400 block uppercase leading-tight">
                    Years Tech Leadership
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-[family-name:var(--font-archia-local)] font-bold text-[#FFD400]">
                    500+
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-400 block uppercase leading-tight">
                    Delivered Projects
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-[family-name:var(--font-archia-local)] font-bold text-white">
                    100%
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-400 block uppercase leading-tight">
                    In-House Squads
                  </span>
                </div>
              </div>

              {/* Founder Connect Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <CyberButton href="/contact-us" size="md">
                  REQUEST EXECUTIVE CONSULTATION
                </CyberButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. CFO SPOTLIGHT (EDITORIAL COMMAND CARD - SALONI SHAH)
          ========================================================================= */}
      <div className="mb-20">
        <div className="rounded-[32px] bg-black/30 backdrop-blur-md border border-[#FFD400]/30 hover:border-[#FFD400]/50 p-8 sm:p-12 lg:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all duration-500">
          {/* Top Amber Radiant Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent shadow-[0_0_20px_#FFD400]" />

          {/* Background Sci-Fi Grid lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left: CFO Portrait with Cyber Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square max-w-[420px] mx-auto rounded-2xl overflow-hidden border-2 border-white/15 group-hover:border-[#FFD400]/60 transition-all duration-700 shadow-2xl">
                <Image
                  src="/office/Confident CFO in a Warm Executive Office.png"
                  alt="Saloni Shah — Chief Financial Officer"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Corner Cyber Accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#FFD400]" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#FFD400]" />
            </div>

            {/* Right: CFO Information & Financial Conviction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CHIEF FINANCIAL OFFICER // FISCAL GOVERNANCE</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-archia-local)] font-bold text-white uppercase tracking-tight">
                  MRS. SALONI SHAH
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  CHIEF FINANCIAL OFFICER • FISCAL STRATEGIST • EXECUTIVE LEADER
                </p>
              </div>

              {/* CFO Philosophy Quote */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#FFD400] py-2 space-y-3 bg-white/[0.02] p-5 rounded-r-xl">
                <Quote className="w-8 h-8 text-[#FFD400]/40 absolute -top-3 -left-3 fill-current" />
                <p className="text-sm sm:text-base text-neutral-200 font-light italic leading-relaxed">
                  As Chief Financial Officer at RND Technosoft, Mrs. Saloni Shah steers corporate fiscal governance, strategic capital allocation and sustainable monetization models. Working alongside executive leadership, she ensures ambitious engineering initiatives are supported by robust fiscal management, structured investment and disciplined governance across all global ventures.
                </p>
                <span className="text-md italic font-mono text-[#FFD400] font-medium block">&ldquo;Sustainable innovation is powered by disciplined fiscal strategy and sound governance. When financial stewardship aligns with creative ambition, enduring business transformation becomes reality.&rdquo;</span>
                <span className="text-xs font-mono text-[#FFD400] font-medium block">
                  — Mrs. Saloni Shah, Chief Financial Officer (CFO)
                </span>
              </div>

              {/* 3 Executive Pillars / Stats */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/10">
                <div className="space-y-1">
                  <span className="inline-flex items-center text-2xl sm:text-3xl font-[family-name:var(--font-archia-local)] font-bold text-white">
                    <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5] -mr-0.5" />
                    <span>100M+</span>
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-400 block uppercase leading-tight">
                    Capital Managed
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-[family-name:var(--font-archia-local)] font-bold text-[#FFD400]">
                    500+
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-400 block uppercase leading-tight">
                    Delivered Projects
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-[family-name:var(--font-archia-local)] font-bold text-white">
                    14+
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-400 block uppercase leading-tight">
                    Years Financial Leadership
                  </span>
                </div>
              </div>

              {/* CFO Connect Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <CyberButton href="/contact-us" size="md">
                  REQUEST EXECUTIVE CONSULTATION
                </CyberButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. LEADERSHIP & AUTONOMOUS SQUADS (DISTINCT INDIAN FACES & DISCIPLINES)
          ========================================================================= */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
              SPECIALIZED DISCIPLINE LEADERSHIP
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-archia-local)] font-bold text-white uppercase mt-1">
              Autonomous Squad Leads
            </h3>
          </div>
        </div>

        {/* 4 Specialized Squad Leads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {squadLeaders.map((member) => (
            <div
              key={member.id}
              className="group rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 overflow-hidden shadow-xl hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(255,212,0,0.15)] flex flex-col"
            >
              {/* Member Photo Frame - Pure Clean Image with No Symbols or Text */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-transparent">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                  className="object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Member Details: Name & Designation Only */}
              <div className="p-5 text-center sm:text-left">
                <h4 className="text-lg font-[family-name:var(--font-archia-local)] font-bold text-white uppercase group-hover:text-[#FFD400] transition-colors tracking-tight">
                  {member.name}
                </h4>
                <p className="text-xs font-mono text-neutral-400 mt-1 uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}
