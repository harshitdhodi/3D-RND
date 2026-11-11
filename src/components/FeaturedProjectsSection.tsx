"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Compass } from "lucide-react";
import {
  FeaturedProjectItem,
  DEFAULT_PROJECTS_DATA,
} from "@/lib/getPortfolioData";
import {
  SectionHeading,
  DEFAULT_SECTION_HEADINGS,
} from "@/lib/getSectionHeading";

export interface FeaturedProjectsSectionProps {
  initialData?: FeaturedProjectItem[];
  initialHeading?: SectionHeading;
}

export default function FeaturedProjectsSection({
  initialData = DEFAULT_PROJECTS_DATA,
  initialHeading = DEFAULT_SECTION_HEADINGS.portfolio_projects,
}: FeaturedProjectsSectionProps) {
  const projects =
    initialData && initialData.length > 0 ? initialData : DEFAULT_PROJECTS_DATA;
  const heading = initialHeading || DEFAULT_SECTION_HEADINGS.portfolio_projects;

  // Center card (middle or index 2) is open by default
  const defaultIndex = Math.floor(projects.length / 2);
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // Staggered vertical displacement matching the reference design layout
  const verticalOffsets = [
    "translate-y-3 sm:translate-y-5 lg:translate-y-6",
    "translate-y-7 sm:translate-y-10 lg:translate-y-12",
    "translate-y-0", // Center card
    "translate-y-8 sm:translate-y-12 lg:translate-y-14",
    "translate-y-2 sm:translate-y-3 lg:translate-y-4",
  ];

  return (
    <section
      id="work"
      className="relative bg-transparent text-white overflow-hidden py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 selection:bg-[#FFD400] selection:text-black border-t border-white/5"
    >
      {/* Soft Nebula Ambient Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FFD400]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {heading.badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-medium tracking-[0.25em] uppercase text-[#FFD400] mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{heading.badge}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.05] text-white">
            {heading.title}
          </h2>

          {heading.subtitle && (
            <p className="text-sm sm:text-base text-[#FFD400] font-mono tracking-wider uppercase mt-2">
              {heading.subtitle}
            </p>
          )}

          {heading.tagline && (
            <p className="text-sm sm:text-base text-neutral-400 font-light mt-4 leading-relaxed">
              {heading.tagline}
            </p>
          )}
        </div>

        {/* 5-Card Horizontal Interactive Accordion Grid - Height decreased by 10% for large/xl screens (640px -> 576px) */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 h-auto lg:h-[576px] xl:h-[576px] items-stretch">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={project.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group border border-white/10 hover:border-[#FFD400]/60 shadow-2xl bg-[#050608] ${
                  isActive
                    ? "project-card-expanded lg:flex-[5] flex-1 min-h-[440px] lg:min-h-0 ring-1 ring-[#FFD400]/40 translate-y-0 z-10"
                    : `project-card-collapsed lg:flex-[0.7] flex-none h-24 lg:h-auto min-w-0 z-0 ${verticalOffsets[index]}`
                }`}
              >
                {/* Background Image: content-friendly size covering all parts without cropping when active */}
                <Image
                  src={project.image}
                  alt={project.altname || project.title}
                  title={project.imgtitle || project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 65vw, 55vw"
                  className={`transition-all duration-700 ease-out ${
                    isActive
                      ? "object-contain object-center scale-100"
                      : "object-cover object-center scale-100 group-hover:scale-110"
                  }`}
                />

                {/* Ambient Dark Gradient Vignette Overlay - Only subtle vignette at bottom for readability */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85"
                      : "bg-black/60 group-hover:bg-black/40 opacity-75"
                  }`}
                />

                {/* ================= COLLAPSED (INACTIVE) VIEW ================= */}
                <div
                  className={`absolute inset-0 flex flex-row lg:flex-col justify-between items-center p-4 sm:p-5 lg:px-2 lg:py-7 transition-all duration-500 ${
                    isActive
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100 pointer-events-auto"
                  }`}
                >
                  {/* Top/Left Category Icon/Tag */}
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase text-[#FFD400] px-2 py-0.5 rounded bg-black/70 border border-white/10 backdrop-blur-sm text-center max-w-[90%] truncate">
                    {project.category}
                  </span>

                  {/* Vertical Rotated Title on Desktop, Horizontal on Mobile */}
                  <div className="lg:[writing-mode:vertical-rl] lg:rotate-180 text-left my-auto">
                    <h3 className="text-sm sm:text-base lg:text-lg font-[family-name:var(--font-syne)] font-bold tracking-wider uppercase text-white group-hover:text-[#FFD400] transition-colors whitespace-nowrap">
                      {project.verticalTitle}
                    </h3>
                  </div>

                  {/* Bottom Arrow Indicator */}
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-white group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* ================= ACTIVE (EXPANDED) VIEW ================= */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-all duration-700 pointer-events-none ${
                    isActive
                      ? "opacity-100 translate-y-0 delay-100"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  {/* Top Row: Category Tag & Location Micro-Pill */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pointer-events-auto">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/80 border border-white/25 text-[11px] sm:text-xs font-mono font-medium tracking-widest text-[#FFD400] uppercase backdrop-blur-md shadow-md">
                      {project.tag}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/75 border border-white/20 text-[11px] sm:text-xs font-mono text-neutral-200 backdrop-blur-md shadow-md">
                      <Compass className="w-3.5 h-3.5 text-[#FFD400]" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  {/* Bottom Group: Compact Title, Specs & Action Button (Description removed for clean view) */}
                  <div className="space-y-3 max-w-2xl pointer-events-auto">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-[family-name:var(--font-syne)] font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                      {project.title}
                    </h3>

                    {/* Separator Line with Specifications & Sleek Pill Button */}
                    <div className="pt-3 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs sm:text-sm font-mono text-[#FFD400] tracking-wider font-semibold">
                        {project.specs}
                      </span>

                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FFD400] hover:bg-[#ffe34d] text-black font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,212,0,0.45)] hover:scale-105 active:scale-95"
                      >
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Action Link */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#FFD400] text-white text-xs font-mono uppercase tracking-[0.2em] transition-all"
          >
            <span>VIEW ALL 15 PORTFOLIO CASE STUDIES</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFD400]" />
          </Link>
        </div>
      </div>
    </section>
  );
}