"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ChevronDown, Palette, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import CyberButton from "@/components/CyberButton";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";

const SUBCATEGORIES = [
  {
    index: "03.1",
    title: "Brand Identity & Design Systems",
    tagline: "Production-Ready",
    desc: "Comprehensive brand identity guidelines, modern logos, typography scales, color palettes, and unified design token architectures.",
    tags: ["Design Systems", "Vector Identity", "Figma", "Guidelines"],
    sla: "PRODUCTION-READY",
    badge: "DESIGN SYSTEMS",
    href: "/branding-design/brand-identity-systems",
    image: "/images/service_branding.jpg",
  },
  {
    index: "03.2",
    title: "UI/UX & Spatial Web Architecture",
    tagline: "60 FPS Interaction",
    desc: "Next-gen user journeys, micro-interactive prototypes, and 3D web interfaces mapped through rigorous usability heatmaps.",
    tags: ["Spatial 3D", "Wireframing", "Interaction Design", "Figma"],
    sla: "60 FPS INTERACTION",
    badge: "SPATIAL 3D",
    href: "/branding-design/ui-ux-spatial-design",
    image: "/images/project_lumen_sal.jpg",
  },
  {
    index: "03.3",
    title: "3D CGI & Motion Graphics",
    tagline: "Photorealistic",
    desc: "Photorealistic 3D product animations, kinetic typography, dynamic HUD holograms, and spatial VFX for web and commercials.",
    tags: ["Three.js", "Cinema4D", "Blender 3D", "After Effects"],
    sla: "PHOTOREALISTIC",
    badge: "CGI STUDIO",
    href: "/media-production/motion-graphics-3d-cgi",
    image: "/images/service_spatial_color.jpg",
  },
];

const FAQS = [
  {
    q: "How long does a complete brand identity project take?",
    a: "A foundational brand identity including logo, typography, color system, and basic guidelines takes 4 to 6 weeks. A full design system with component libraries and token exports for all platforms typically runs 10 to 14 weeks.",
  },
  {
    q: "Do we own all the brand assets and source files at the end?",
    a: "Absolutely. 100% of all vector source files, Figma libraries, design tokens, and brand documentation transfer to you on final delivery day with zero licensing fees or ongoing royalties.",
  },
  {
    q: "Can your design system integrate directly with our existing React/Next.js codebase?",
    a: "Yes. We deliver design tokens via Style Dictionary in CSS custom properties, Tailwind config extensions, and React component libraries built with your existing stack — zero rework required.",
  },
  {
    q: "What is the difference between a brand identity and a design system?",
    a: "A brand identity defines visual direction — logos, colors, and typography. A design system codifies these into reusable, coded components and token rules that developers and designers use to ship products consistently at speed.",
  },
  {
    q: "Do you offer ongoing brand management and design system maintenance?",
    a: "Yes. We offer monthly design system stewardship retainers that include component updates, new pattern additions, token synchronization across platforms, and quarterly brand health audits.",
  },
];

export default function BrandingDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      <SpaceBackground />
      <Navbar />

      <PageBanner
        title="BRANDING"
        subtitle="& DESIGN"
        breadcrumb="Branding & Design"
        parentBreadcrumb={{ label: "Services", href: "/services" }}
        size="compact"
      />

      {/* Main Content Area - Solid bg-[#050608] to isolate compositor and prevent WebGL redraw flashes */}
      <main className="relative z-20 w-full -mt-10 sm:-mt-14 rounded-t-[32px] sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Sticky Sub-Nav */}
        <div className="border-b border-white/10 bg-[#0c0e14] sticky top-16 sm:top-20 z-30 shadow-2xl transform-gpu [backface-visibility:hidden]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-4">
            <Link href="/services" className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.18em] text-neutral-400 hover:text-[#FFD400] transition-colors group">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1.5 transition-transform text-[#FFD400]" />
              <span>All Services</span>
            </Link>
            <CyberButton href="/contact-us" size="sm">START BRAND PROJECT</CyberButton>
          </div>
        </div>

        {/* Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase bg-black/60 border border-[#FFD400]/40 text-[#FFD400]">
                <Palette className="w-3.5 h-3.5" />
                <span>SERVICE CATEGORY // DIVISION 03</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.02] text-white">
                CATEGORY-DEFINING{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.45)]">
                  IDENTITIES & UI/UX
                </span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
                Great software requires an unforgettable aesthetic. We construct cohesive design languages, mathematically scaled design systems, and spatial 3D user interfaces that elevate market perception and command enterprise pricing power.
              </p>
            </div>
            <CyberButton href="/branding-design/brand-identity-systems" size="md">EXPLORE BRAND IDENTITY</CyberButton>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            {[
              { val: "100%", label: "IP Ownership", sub: "Full source file transfer" },
              { val: "5.8x", label: "Brand Recall Lift", sub: "vs generic templated design" },
              { val: "30%", label: "Faster Shipping", sub: "With mature design systems" },
              { val: "4–6 Wks", label: "Brand Identity", sub: "From brief to final files" },
            ].map((stat) => (
              <div key={stat.label} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD400]/50 transition-colors">
                <div className="text-3xl sm:text-4xl font-bold font-mono text-[#FFD400]">{stat.val}</div>
                <div className="text-xs font-mono text-neutral-200 uppercase tracking-wider mt-1.5">{stat.label}</div>
                <div className="text-[11px] text-neutral-400 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Sub-Categories Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 border-t border-white/10">
          <div className="mb-12 pb-6 border-b border-white/10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase text-white">
              SELECT A <span className="text-[#FFD400]">DESIGN DISCIPLINE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SUBCATEGORIES.map((sub) => (
              <div
                key={sub.href}
                className="group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 shadow-2xl transition-all duration-300 flex flex-col justify-between transform-gpu [backface-visibility:hidden]"
              >
                {/* UPPER SIDE: Image Showcase */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#08090d]">
                  <Image
                    src={sub.image}
                    alt={sub.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="font-mono text-xs text-white/90 tracking-wider px-2.5 py-1 rounded-md bg-black/85 border border-white/15 shadow-md">
                      // {sub.index}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {sub.badge && (
                        <span className="text-[10px] font-mono uppercase tracking-widest text-black font-bold px-2.5 py-0.5 rounded-md bg-[#FFD400] shadow-md truncate max-w-[130px]">
                          {sub.badge}
                        </span>
                      )}
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] px-2.5 py-0.5 rounded-full bg-black/90 border border-[#FFD400]/40 shadow-md">
                        {sub.sla}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#FFD400] tracking-wider uppercase block mb-1.5 font-medium line-clamp-1">
                      {sub.tagline}
                    </span>
                    <Link href={sub.href} prefetch={false} className="group/title block">
                      <h3 className="text-lg sm:text-xl font-bold font-[family-name:var(--font-syne)] text-white group-hover/title:text-[#FFD400] transition-colors uppercase line-clamp-1 mb-2">
                        {sub.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4 line-clamp-2">
                      {sub.desc}
                    </p>
                  </div>

                  {/* MANAGED BOTTOM SIDE */}
                  <div className="flex items-center justify-between gap-3 pt-3.5 border-t border-white/10 mt-auto">
                    <div className="flex flex-wrap items-center gap-1.5 max-w-[62%] overflow-hidden">
                      {sub.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-neutral-300 truncate">
                          {tag}
                        </span>
                      ))}
                      {sub.tags.length > 3 && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.03] text-neutral-400 border border-white/10">
                          +{sub.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <Link href={sub.href} prefetch={false} className="inline-block shrink-0">
                      <div className="group/btn relative inline-flex items-center justify-between rounded-full overflow-hidden border border-white/15 hover:border-[#FFD400]/70 bg-[#141720] hover:bg-[#1a1e2a] text-white shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer select-none px-3.5 py-1.5 text-xs gap-2">
                        <span className="font-mono tracking-[0.14em] uppercase text-[11px] whitespace-nowrap font-medium text-white group-hover/btn:text-[#FFD400]">
                          VIEW SPEC
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD400] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-syne)] font-bold uppercase text-white">
              COMMON <span className="text-[#FFD400]">QUESTIONS</span>
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`border transition-all duration-300 ${isOpen ? "border-[#FFD400]/50 bg-[#0c0e14]" : "border-white/10 bg-[#0c0e14] hover:border-[#FFD400]/30"}`}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono font-bold text-[#FFD400] shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                      <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#FFD400] transition-colors">{faq.q}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#FFD400]" : "text-neutral-500 group-hover:text-[#FFD400]"}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="ml-10 pl-4 border-l-2 border-[#FFD400]/40">
                        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="border-t border-white/10"><ServiceConversionCTA /></div>
      </main>

      <RnDFooter />
    </div>
  );
}
