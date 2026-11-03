"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import { portfolioData, PortfolioProjectDetail } from "@/data/portfolioData";

interface ServiceRelatedProjectsSectionProps {
  category?: string;
  currentServiceId?: string;
  title?: string;
  subtitle?: string;
}

export default function ServiceRelatedProjectsSection({
  category = "",
  currentServiceId = "",
  title,
  subtitle,
}: ServiceRelatedProjectsSectionProps) {
  // Normalize category mapping to match portfolioData categories
  const catLower = (category || "").toLowerCase();

  const filteredProjects = React.useMemo(() => {
    let matches: PortfolioProjectDetail[] = [];

    if (
      catLower.includes("tech") ||
      catLower.includes("web") ||
      catLower.includes("cloud") ||
      catLower.includes("software") ||
      catLower.includes("mobile") ||
      catLower.includes("dev")
    ) {
      matches = portfolioData.filter(
        (p) =>
          p.category === "Website & Web Application Projects" ||
          p.category === "Mobile App Projects"
      );
    } else if (
      catLower.includes("market") ||
      catLower.includes("seo") ||
      catLower.includes("growth") ||
      catLower.includes("ppc") ||
      catLower.includes("social")
    ) {
      matches = portfolioData.filter(
        (p) => p.category === "Digital Marketing Projects"
      );
    } else if (
      catLower.includes("brand") ||
      catLower.includes("design") ||
      catLower.includes("ux") ||
      catLower.includes("ui")
    ) {
      matches = portfolioData.filter(
        (p) => p.category === "Branding & Graphic Design"
      );
    } else if (
      catLower.includes("media") ||
      catLower.includes("video") ||
      catLower.includes("film") ||
      catLower.includes("photo")
    ) {
      matches = portfolioData.filter(
        (p) => p.category === "Videography & Photography"
      );
    }

    // If currentServiceId matches a specific project, ensure it's prioritized
    if (currentServiceId) {
      matches.sort((a, b) => {
        if (a.id.includes(currentServiceId)) return -1;
        if (b.id.includes(currentServiceId)) return 1;
        return 0;
      });
    }

    // If we have fewer than 3 matches, pad with top featured projects from portfolioData
    if (matches.length < 3) {
      const remaining = portfolioData.filter((p) => !matches.some((m) => m.id === p.id));
      matches = [...matches, ...remaining];
    }

    return matches.slice(0, 3);
  }, [catLower, currentServiceId]);

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-12 py-20 sm:py-28 border-t border-white/10 selection:bg-[#FFD400] selection:text-black">
      {/* Ambient Radial Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FFD400]/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-white/10 relative z-10">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-semibold tracking-[0.22em] uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>PORTFOLIO CASE STUDIES // PROVEN DELIVERABLES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase text-white leading-[1.08]">
            {title ? (
              title
            ) : (
              <>
                RELATED PRODUCTION{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_25px_rgba(255,212,0,0.35)]">
                  CASE STUDIES
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {subtitle ||
              "Explore real-world client platforms, verified conversion benchmarks, and architecture blueprints engineered by our senior squads."}
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/portfolios"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-[#FFD400] border border-white/15 hover:border-[#FFD400] text-xs font-mono uppercase tracking-[0.16em] text-white hover:text-black transition-all duration-300 group"
          >
            <span>VIEW ALL 15 PORTFOLIOS</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 3-Column Portfolio Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {filteredProjects.map((project) => {
          const mainMetric = project.results?.[0];

          return (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-xl hover:shadow-[0_15px_40px_rgba(255,212,0,0.14)] overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Cover Image */}
                <Link
                  href={`/portfolios/${project.id}`}
                  className="block relative aspect-[16/10] overflow-hidden bg-black/60 cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-black/30 pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-black/80 border border-white/20 text-[#FFD400] backdrop-blur-md">
                      {project.projectType || project.badge || "FEATURED"}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-neutral-300 bg-black/70 border border-white/10 backdrop-blur-md">
                      {project.year || "2026"}
                    </span>
                  </div>
                </Link>

                {/* Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Verified Metric Pill if present */}
                  {mainMetric && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs font-mono text-[#FFD400] font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{mainMetric.metric}</span>
                      <span className="text-neutral-300 font-normal">{mainMetric.label}</span>
                    </div>
                  )}

                  {/* Project Title */}
                  <Link href={`/portfolios/${project.id}`}>
                    <h3 className="text-xl font-[family-name:var(--font-syne)] font-bold text-white uppercase group-hover:text-[#FFD400] transition-colors leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Client & Summary */}
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-2">
                    {project.summary || project.tagline}
                  </p>

                  {/* Tech Stack Pills */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer with Direct Link to Portfolio */}
              <div className="px-6 pb-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400">
                  {project.client ? `Client: ${project.client}` : "Full Architecture Available"}
                </span>

                <Link
                  href={`/portfolios/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFD400] group-hover:text-white transition-colors"
                >
                  <span>CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}

