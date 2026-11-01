"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ChevronDown, TrendingUp, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import CyberButton from "@/components/CyberButton";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";

const SUBCATEGORIES = [
  {
    index: "02.1",
    title: "Technical SEO & Search Dominance",
    tagline: "+180% Traffic Surge",
    desc: "Algorithmic keyword clusters, programmatic internal linking, crawl budget optimization, and top-3 organic ranking capture.",
    tags: ["Semantic Indexing", "Core Web Vitals", "Backlinks", "Schema"],
    sla: "+180% TRAFFIC SURGE",
    badge: "SERP DOMINANCE",
    href: "/digital-marketing/technical-seo-dominance",
    image: "/images/service_seo_color.jpg",
  },
  {
    index: "02.2",
    title: "Performance PPC & Paid Media",
    tagline: "8.4x Avg ROAS",
    desc: "High-ROI paid search and social campaigns across Google Ads, Meta, and TikTok with real-time ROAS telemetry dashboards.",
    tags: ["Google Ads", "Meta Ads Manager", "TikTok Ads", "Attribution"],
    sla: "8.4x AVG ROAS",
    badge: "MULTI-CHANNEL",
    href: "/digital-marketing/performance-ppc-advertising",
    image: "/images/service_marketing.jpg",
  },
  {
    index: "02.3",
    title: "Social Media Strategy & Management",
    tagline: "100% Organic-Driven",
    desc: "Viral organic community building, platform-specific content cadence, and influencer amplification that establishes brand authority.",
    tags: ["Content Calendars", "Audience Ops", "LinkedIn", "Instagram"],
    sla: "100% ORGANIC",
    badge: "COMMUNITY FIRST",
    href: "/digital-marketing/social-media-management",
    image: "/images/service_social.jpg",
  },
  {
    index: "02.4",
    title: "Content Strategy & Copywriting",
    tagline: "Conversion-First Editorial",
    desc: "High-authority editorial briefs, thought leadership articles, and high-converting commercial copy crafted for your target buyer persona.",
    tags: ["Whitepapers", "Landing Copy", "Email Funnels", "Guides"],
    sla: "CONVERSION-FIRST",
    badge: "EDITORIAL AUTHORITY",
    href: "/digital-marketing/content-strategy-production",
    image: "/images/contet.png",
  },
];

const FAQS = [
  {
    q: "How long before we see results from SEO?",
    a: "Programmatic SEO improvements typically show measurable SERP movement within 60 to 90 days, with significant traffic surges materializing by month 4 to 6 as domain authority compounds.",
  },
  {
    q: "What ROAS can we realistically expect from PPC campaigns?",
    a: "Our median client achieves 6.2x ROAS in the first 90 days, scaling to 8.4x by month 6 through systematic negative keyword pruning and creative iteration frameworks.",
  },
  {
    q: "Do you manage all social platforms or specialize in specific ones?",
    a: "We specialize in LinkedIn, Instagram, and TikTok for B2B and D2C brands, with dedicated platform-native content teams for each channel to maximize algorithmic reach.",
  },
  {
    q: "How do you attribute conversions accurately after iOS privacy changes?",
    a: "We implement server-side Conversions API (CAPI) for Meta and TikTok and use first-party data modeling with Google's Enhanced Conversions to maintain attribution fidelity above 94%.",
  },
  {
    q: "Can we start with one service and expand to a full-funnel strategy?",
    a: "Yes. We offer modular engagements. Many clients start with Technical SEO, then layer in PPC once organic foundations are established, creating compounding cross-channel growth loops.",
  },
];

export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      <SpaceBackground />
      <Navbar />

      <PageBanner
        title="DIGITAL"
        subtitle="MARKETING"
        breadcrumb="Digital Marketing"
        parentBreadcrumb={{ label: "Services", href: "/services" }}
        size="compact"
      />

      {/* Main Content Area - Solid bg-[#050608] to isolate compositor and prevent WebGL redraw flashes */}
      <main className="relative z-20 w-full -mt-10 sm:-mt-14 rounded-t-[32px] sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Sticky Sub-Nav */}
        <div className="border-b border-white/10 bg-[#0c0e14] sticky top-16 sm:top-20 z-30 shadow-2xl transform-gpu [backface-visibility:hidden]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.18em] text-neutral-400 hover:text-[#FFD400] transition-colors shrink-0 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1.5 transition-transform text-[#FFD400]" />
              <span>All Services</span>
            </Link>
            <div className="shrink-0">
              <CyberButton href="/contact-us" size="sm">DEPLOY GROWTH POD</CyberButton>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase bg-black/60 border border-[#FFD400]/40 text-[#FFD400]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>SERVICE CATEGORY // DIVISION 02</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.02] text-white">
                PERFORMANCE GROWTH &{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.45)]">
                  SEARCH DOMINANCE
                </span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
                Data-engineered customer acquisition models. We replace guesswork with algorithmic precision, deploying multi-channel performance funnels, technical backlink graphs, and behavioral CRO that consistently drive predictable revenue expansion.
              </p>
            </div>
            <div className="shrink-0">
              <CyberButton href="/digital-marketing/technical-seo-dominance" size="md">
                EXPLORE SEO SPEC
              </CyberButton>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            {[
              { val: "+180%", label: "Avg Traffic Surge", sub: "90-day programmatic SEO" },
              { val: "8.4x", label: "Avg ROAS", sub: "Across all paid channels" },
              { val: "94%+", label: "Attribution Accuracy", sub: "Server-side CAPI tracking" },
              { val: "60 Days", label: "First Results", sub: "Measurable SERP movement" },
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
              SELECT A <span className="text-[#FFD400]">SPECIALIZED DISCIPLINE</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 max-w-2xl">
              Explore dedicated campaign architecture, channel strategies, and performance SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
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
            <p className="text-xs sm:text-sm text-neutral-400 font-light mt-2">Everything you need to know about our Digital Marketing division.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`border transition-all duration-300 ${isOpen ? "border-[#FFD400]/50 bg-[#0c0e14]" : "border-white/10 bg-[#0c0e14] hover:border-[#FFD400]/30"}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group cursor-pointer"
                  >
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

        {/* CTA */}
        <div className="border-t border-white/10">
          <ServiceConversionCTA />
        </div>
      </main>

      <RnDFooter />
    </div>
  );
}
