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
import CyberButton from "@/components/CyberButton";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";
import CosmicProcessSection from "@/components/CosmicProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServiceRelatedProjectsSection from "@/components/ServiceRelatedProjectsSection";
import ServiceUniverseSection from "@/components/ServiceUniverseSection";
import { CategoryPageData, CategorySubItem } from "@/data/categoryPagesData";

const ICON_MAP = {
  Code,
  TrendingUp,
  Palette,
  Video,
};

function getCategoryGridClass(count: number): string {
  if (count === 1) return "grid grid-cols-1 max-w-2xl mx-auto gap-6 lg:gap-8";
  if (count === 2) return "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8";
  if (count === 3) return "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8";
  if (count === 4) return "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8";
  if (count === 5) return "grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8";
  return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8";
}

function getCategoryItemClass(count: number, index: number): string {
  if (count === 5) {
    return index < 3 ? "md:col-span-2" : "md:col-span-3";
  }
  return "";
}

function SubCategoryCard({
  sub,
  featured,
  itemClass = "",
}: {
  sub: CategorySubItem;
  featured?: boolean;
  itemClass?: string;
}) {
  return (
    <div
      className={`group relative rounded-3xl overflow-hidden bg-[#0c0e14] border transition-all duration-300 shadow-2xl flex flex-col ${
        featured
          ? "border-[#FFD400] shadow-[0_0_35px_rgba(255,212,0,0.18)]"
          : "border-white/10 hover:border-[#FFD400]/60"
      } ${itemClass}`}
    >
      {/* Image */}
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#08090d] shrink-0">
        <Image
          src={sub.image}
          alt={sub.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/20 to-transparent pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between gap-2 pointer-events-none">
          <span className="font-mono text-xs text-white/90 tracking-wider px-2.5 py-1 rounded-md bg-black/85 border border-white/15 shadow-md">
            {"//"} {sub.index}
          </span>
          <div className="flex items-center gap-1.5">
            {sub.badge && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-black font-bold px-2.5 py-0.5 rounded-md bg-[#FFD400] shadow-md truncate max-w-[130px]">
                {sub.badge}
              </span>
            )}
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] px-2.5 py-0.5 rounded-full bg-black/90 border border-[#FFD400]/40 shadow-md whitespace-nowrap">
              {sub.sla}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-mono text-[#FFD400] tracking-wider uppercase block mb-1.5 font-medium line-clamp-1">
            {sub.tagline}
          </span>
          <Link href={sub.href} prefetch={false} className="group/title block">
            <h3 className="text-lg sm:text-xl font-bold font-[family-name:var(--font-syne)] text-white group-hover/title:text-[#FFD400] transition-colors uppercase line-clamp-2 mb-2">
              {sub.title}
            </h3>
          </Link>
          <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4 line-clamp-2">
            {sub.desc}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-3.5 border-t border-white/10 mt-auto">
          <div className="flex flex-wrap items-center gap-1.5 max-w-[62%] overflow-hidden">
            {sub.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-neutral-300 truncate"
              >
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
            <div
              className={`group/btn inline-flex items-center gap-2 rounded-full border shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer select-none px-3.5 py-1.5 text-xs ${
                featured
                  ? "bg-[#FFD400] text-black border-[#FFD400] font-bold hover:bg-[#ffe34d]"
                  : "bg-[#141720] hover:bg-[#1a1e2a] border-white/15 hover:border-[#FFD400]/70 text-white"
              }`}
            >
              <span className="font-mono tracking-[0.14em] uppercase text-[11px] whitespace-nowrap font-medium">
                {featured ? "EXPLORE SPEC" : "VIEW SPEC"}
              </span>
              <ArrowUpRight
                className={`w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform ${
                  featured ? "text-black" : "text-[#FFD400]"
                }`}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CategoryPageClient({ data }: { data: CategoryPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const Icon = ICON_MAP[data.iconName] || Code;

  const subCount = data.subcategories.length;

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-[#FFD400] selection:text-black">
      <SpaceBackground />
      <Navbar />

      <PageBanner
        title={data.bannerTitle}
        subtitle={data.bannerSubtitle}
        breadcrumb={data.breadcrumb}
        parentBreadcrumb={{ label: "Services", href: "/services" }}
        imageSrc={data.bannerImage}
      />

      <main className="relative z-20 w-full bg-transparent overflow-hidden">
        
        {/* ── Sub-Categories Grid ── */}
        <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 pb-6 border-b border-white/10">
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

            <div className={getCategoryGridClass(subCount)}>
              {data.subcategories.map((sub, idx) => (
                <SubCategoryCard
                  key={sub.href}
                  sub={sub}
                  featured={!!sub.featured}
                  itemClass={getCategoryItemClass(subCount, idx)}
                />
              ))}
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
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-syne)] font-bold uppercase text-white">
                COMMON <span className="text-[#FFD400]">QUESTIONS</span>
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

