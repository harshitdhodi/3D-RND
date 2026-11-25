"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  Code,
  TrendingUp,
  Palette,
  Video,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";
import CosmicProcessSection from "@/components/CosmicProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServiceRelatedProjectsSection from "@/components/ServiceRelatedProjectsSection";
import ServiceUniverseSection from "@/components/ServiceUniverseSection";
import { CategoryPageData, CategorySubItem } from "@/data/categoryPagesData";
import { resolveIcon } from "@/components/DynamicIcon";

const ICON_MAP = {
  Code,
  TrendingUp,
  Palette,
  Video,
};

export default function CategoryPageClient({ data }: { data: CategoryPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const Icon = resolveIcon(data.iconName, (ICON_MAP as any)[data.iconName] || Code);

  const subCount = data.subcategories.length;

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-[#FFD400] selection:text-black font-archia overflow-x-hidden">
      <SpaceBackground />
      <Navbar />

      <PageBanner
        title="INTEGRATED CAPABILITIES"
        breadcrumbs={[
          { label: "SERVICES", href: "/services" },
          { label: (data.breadcrumb || data.heroTitle || "SERVICE").toUpperCase(), href: `/${data.slug}` },
        ]}
        imageSrc="/NewBanner/service.png"
      />

      {/* Main Content (Directly below banner without overlap) */}
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        {/* ── Category Hero & Overview Division Card (Matching Services Page Style with Centered Title & Tagline) ── */}
        <section className="w-full max-w-full px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[32px] sm:rounded-[40px] bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/40 transition-colors duration-300 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden group">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-60 shadow-[0_0_15px_#FFD400]" />

              {/* Main Grid: Visual Column & Editorial Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Visual Media Column */}
                <div className="lg:col-span-5 relative">
                  <div className="block relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl group/media">
                    <Image
                      src={data.image || data.bannerImage || "/images/service_webdev.jpg"}
                      alt={data.heroTitle}
                      fill
                      priority
                      quality={85}
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover group-hover/media:scale-105 transition-transform duration-700 ease-out transform-gpu"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating HUD Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/90 border border-white/15 flex items-center justify-between shadow-xl">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFD400] animate-ping" />
                        <div>
                          <span className="text-[10px] font-mono tracking-widest uppercase text-[#FFD400] font-bold block">
                            {data.divisionLabel || "ACTIVE DIVISION SQUAD"}
                          </span>
                          <span className="text-xs font-mono text-white">
                            Specialized Offerings
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner Sci-Fi Framing Accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#FFD400]/60 pointer-events-none" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#FFD400]/60 pointer-events-none" />
                </div>

                {/* Editorial Information Column - Left-Aligned, No Action Buttons */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="space-y-3.5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-semibold tracking-[0.25em] uppercase">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{data.divisionLabel}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-[1.1]">
                      <span className="block">{data.heroTitle}</span>
                      {data.heroHighlight && (
                        <span className="block text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.45)]">
                          {data.heroHighlight}
                        </span>
                      )}
                    </h1>

                    {data.supportingLine && (
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#FFD400] font-semibold">
                        {data.supportingLine.split("•").map((item, idx, arr) => (
                          <React.Fragment key={idx}>
                            <span className="whitespace-nowrap">{item.trim()}</span>
                            {idx < arr.length - 1 && <span className="text-neutral-500">•</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    )}

                    {data.tagline && (
                      <p className="text-sm sm:text-base text-neutral-200 font-mono tracking-wide">
                        {data.tagline}
                      </p>
                    )}
                  </div>

                  {data.heroDesc && (
                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
                      {data.heroDesc}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sub-Categories Section (Introduce Subcategory) ── */}
        <section id="disciplines" className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 scroll-mt-28">
          <div className="max-w-7xl mx-auto">
            {data.disciplineHeading && (
              <div className="mb-10 pb-6 border-b border-white/10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase text-white">
                  {data.disciplineHeading.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-[#FFD400]">
                    {data.disciplineHeading.split(" ").slice(-1)[0]}
                  </span>
                </h2>
                {data.disciplineDesc && (
                  <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 max-w-2xl">
                    {data.disciplineDesc}
                  </p>
                )}
              </div>
            )}

            {/* Individual Services Cards Grid for this Category */}
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold">
                  DIVISION CORE SERVICES LIST ({data.subcategories.length})
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  CLICK SERVICE TO EXPLORE FULL ARCHITECTURE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {data.subcategories.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    prefetch={false}
                    className="group/card flex flex-col justify-between rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#FFD400]/60 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(255,212,0,0.12)] relative overflow-hidden"
                  >
                    {/* Top Row: Service SLA & Arrow */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400]">
                          {service.sla || service.badge || "SPECIALIZED"}
                        </span>

                        <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 group-hover/card:bg-[#FFD400] group-hover/card:text-black text-white/80 flex items-center justify-center transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-syne)] font-bold text-white uppercase group-hover/card:text-[#FFD400] transition-colors mb-1.5">
                        {service.title}
                      </h3>

                      {/* Service Subhead */}
                      {service.tagline && (
                        <p className="text-xs font-mono text-[#FFD400] tracking-wide mb-2.5 font-medium">
                          {service.tagline}
                        </p>
                      )}

                      {/* Service Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-5">
                        {service.desc}
                      </p>
                    </div>

                    {/* Bottom Section: Tags & Action */}
                    <div className="pt-3 border-t border-white/10 mt-auto">
                      {service.tags && service.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 mb-3">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-neutral-300"
                            >
                              {tag.startsWith("#") ? tag : `#${tag}`}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center justify-end">
                        <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#FFD400] inline-flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">
                          EXPLORE SERVICE <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Enterprise Technologies & Tools Architecture ── */}
        <ServiceUniverseSection categoryFilter={data.slug} />

        {/* ── Related Case Studies Linked to Portfolio ── */}
        <ServiceRelatedProjectsSection
          category={data.slug}
          title={`VERIFIED ${data.bannerTitle} CASE STUDIES`}
          subtitle={`Explore enterprise projects, client platforms, and architecture case studies engineered within our ${data.bannerTitle} division.`}
        />

        {/* ── Our Design & Engineering Process ── */}
        <CosmicProcessSection
          badge="// OUR DESIGN & DELIVERY PROCESS"
          stageLabel="// 6-STAGE EXECUTION LIFECYCLE"
          title="OUR DESIGN & ENGINEERING"
          highlightTitle="PROCESS"
        />

        {/* ── Why Team Up With Us ── */}
        <WhyChooseSection
          category={data.slug}
        />

        {/* ── FAQs ── */}
        <section className="w-full px-4 sm:px-8 lg:px-12 py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#FFD400] uppercase block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-[family-name:var(--font-syne)] font-bold uppercase text-white tracking-tight">
                {data.bannerTitle} SOLUTIONS – <span className="text-[#FFD400]">ANSWERS THAT MOVE YOU FORWARD.</span>
              </h2>
            </div>
            <div className="space-y-3">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`border transition-all duration-300 ${
                      isOpen
                        ? "border-[#FFD400]/50 bg-[#0c0e14]"
                        : "border-white/10 bg-[#0c0e14] hover:border-[#FFD400]/30"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono font-bold text-[#FFD400] shrink-0">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#FFD400] transition-colors">
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 text-[#FFD400]"
                            : "text-neutral-500 group-hover:text-[#FFD400]"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="ml-10 pl-4 border-l-2 border-[#FFD400]/40">
                          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="border-t border-white/10">
          <ServiceConversionCTA />
        </div>
      </main>

      <RnDFooter />
    </div>
  );
}

