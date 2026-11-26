"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Cpu,
  Globe,
  Database,
  Server,
  Zap,
  TrendingUp,
  Clock,
  Play,
  X,
  Target,
  SlidersHorizontal,
  AlertTriangle,
  FileCode,
  Gauge,
  Check,
  Quote,
  Eye,
  Workflow,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";
import BeforeAfterSection, { BeforeAfterData } from "@/components/BeforeAfterSection";
import WaveText from "@/components/WaveText";
import ScrollReveal from "@/components/ScrollReveal";
import { PortfolioProject, PortfolioChildPageData, getDefaultChildPageData } from "@/lib/getPortfolioData";

export interface PortfolioCaseStudyProps {
  project: PortfolioProject;
  relatedProjects?: PortfolioProject[];
  prevProject?: PortfolioProject | null;
  nextProject?: PortfolioProject | null;
  childPageData?: PortfolioChildPageData | null;
}

export default function PortfolioProjectCaseStudyView({
  project,
  relatedProjects = [],
  prevProject = null,
  nextProject = null,
  childPageData = null,
}: PortfolioCaseStudyProps) {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [comparisonMode, setComparisonMode] = useState<"side_by_side" | "legacy" | "improvised">("side_by_side");

  const catTitle = project.category_title || project.category_slug.replace(/-/g, " ").toUpperCase();
  const catSlug = project.category_slug;

  // CMS-driven child page sections (fall back to category-aware defaults)
  const pageData: PortfolioChildPageData =
    childPageData || getDefaultChildPageData(project);

  const beforeAfterConfig = pageData.before_after;
  const processSteps = pageData.process_steps;
  const telemetryMetrics = pageData.telemetry_metrics;

  const roadmapSectionRef = useRef<HTMLElement>(null);

  // GSAP: ScrollTrigger entrance animation for vertical roadmap cards
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = roadmapSectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".vertical-roadmap-item");
    if (!cards || cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            filter: "blur(4px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
            onComplete: () => {
              gsap.set(card, { clearProps: "filter,transform" });
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [processSteps.length]);

  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black overflow-x-hidden">
      {/* 3D Interactive Space Starfield Canvas */}
      <SpaceBackground />

      <Navbar />

      {/* Page Banner with Deep Breadcrumb Navigation */}
      <PageBanner
        title={project.title.toUpperCase()}
        breadcrumbs={[
          { label: "PORTFOLIO", href: "/portfolio" },
          { label: catTitle.toUpperCase(), href: `/portfolio/${catSlug}` },
          { label: project.title.toUpperCase(), href: `/portfolio/${catSlug}/${project.slug}` },
        ]}
        imageSrc={
          pageData?.banner_image ||
          (project as any)?.banner_image ||
          (project as any)?.bannerImg ||
          (project as any)?.banner ||
          "/NewBanner/protfolio page banner.png"
        }
        imgtitle={pageData.banner_imgtitle || project.imgtitle || `${project.title} Case Study`}
        altname={pageData.banner_altname || project.altname || `${project.title} - RND Technosoft Case Study`}
      />

      {/* Main Content (Directly below banner without overlap) */}
      <main className="relative z-10 w-full">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-12">

          {/* =========================================================================
              1. HERO TELEMETRY HUD & NAVIGATION BAR
              ========================================================================= */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-10 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/40 text-[#FFD400] text-xs font-mono font-bold tracking-[0.2em] uppercase">
                  [{project.index || "01"}] // {catTitle}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono">
                  {project.year || "2026"}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>PRODUCTION VERIFIED</span>
                </span>
              </div>

              <ScrollReveal yOffset={18}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-syne)]">
                  <WaveText text={project.title} />
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15} yOffset={20}>
                <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-light max-w-4xl leading-relaxed">
                  {project.subtitle || project.tagline || project.summary}
                </p>
              </ScrollReveal>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href={`/portfolio/${catSlug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white border border-white/15 font-mono text-xs uppercase font-bold hover:bg-white/10 hover:border-[#FFD400]/60 transition-all"
              >
                <ArrowLeft className="w-4 h-4 text-[#FFD400]" />
                <span>{catTitle}</span>
              </Link>
              <Link
                href="#case-study-transformation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFD400] text-black font-mono text-xs uppercase font-bold hover:bg-[#ffe34d] transition-all shadow-[0_0_25px_rgba(255,212,0,0.3)]"
              >
                <span>Inspect Transformation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* =========================================================================
              2. PROJECT SPECIFICATIONS & HUD MATRIX
              ========================================================================= */}
          <div className="py-12 border-b border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Client */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FFD400]/40 transition-colors">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                  CLIENT / ENTERPRISE
                </span>
                <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
                  <span className="truncate">{project.client}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0" />
                </div>
                <span className="text-[11px] text-neutral-500 font-mono mt-1 block">
                  IP &amp; Production Rights Cleared
                </span>
              </div>

              {/* Industry */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FFD400]/40 transition-colors">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                  INDUSTRY SECTOR
                </span>
                <div className="text-white font-bold text-base sm:text-lg">
                  {project.industry || "Enterprise Global"}
                </div>
                <span className="text-[11px] text-neutral-500 font-mono mt-1 block">
                  Domain-Specialized System
                </span>
              </div>

              {/* Sprint Duration */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FFD400]/40 transition-colors">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                  SPRINT DURATION
                </span>
                <div className="text-white font-bold text-base sm:text-lg">
                  {project.duration || "10 - 14 Weeks"}
                </div>
                <span className="text-[11px] text-neutral-500 font-mono mt-1 block">
                  Agile Multi-Phase Rollout
                </span>
              </div>

              {/* Delivery SLA */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FFD400]/40 transition-colors">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                  PRODUCTION SLA
                </span>
                <div className="text-[#FFD400] font-bold text-base sm:text-lg flex items-center gap-1.5">
                  <Zap className="w-4 h-4 fill-[#FFD400]" />
                  <span>{project.sla || "99.99% Uptime"}</span>
                </div>
                <span className="text-[11px] text-neutral-500 font-mono mt-1 block">
                  Multi-Region Edge Active
                </span>
              </div>
            </div>

            {/* Core Tech Stack Bar */}
            {project.tech_stack && project.tech_stack.length > 0 && (
              <div className="mt-6 p-6 rounded-2xl bg-[#0c0e14] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FFD400]">
                  <Cpu className="w-4 h-4" />
                  <span>ENGINEERED TECH MESH:</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tech_stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-200 hover:border-[#FFD400]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* =========================================================================
              3. CINEMATIC HERO SHOWCASE & MEDIA PREVIEW
              ========================================================================= */}
          <div className="py-14 border-b border-white/10">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Video Play Overlay (when video exists) */}
              {project.video_url && (
                <button
                  type="button"
                  onClick={() => setShowVideoModal(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40 hover:bg-black/60 transition-all cursor-pointer group/btn"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFD400] text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,212,0,0.6)] group-hover/btn:scale-110 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black ml-1" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-white bg-black/70 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                    PLAY COMMERCIAL SHOWCASE
                  </span>
                </button>
              )}

              {/* Bottom Telemetry Bar */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white pointer-events-none">
                <span className="bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                  {project.badge || "FEATURED CASE STUDY"}
                </span>
                <span className="bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#FFD400]/40 text-[#FFD400]">
                  STATUS: LIVE &amp; OPERATIONAL
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              4. STRATEGIC NARRATIVE: MANDATE, BOTTLENECK & ARCHITECTURE
              ========================================================================= */}
          <div className="py-16 border-b border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <ScrollReveal yOffset={16}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider mb-3 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
                  <Layers className="w-4 h-4" />
                  <span>Strategic Case Study Blueprint</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white font-[family-name:var(--font-syne)]">
                  <WaveText text="The Engineering Mandate" />
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 01 Brief */}
              <div className="p-8 rounded-3xl bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-colors shadow-xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] mb-3">
                    01 // EXECUTIVE MANDATE
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white mb-4">
                    The Objective
                  </h3>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {project.brief || project.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                  Target: Full-Scale Digital Modernization
                </div>
              </div>

              {/* 02 Challenge */}
              <div className="p-8 rounded-3xl bg-[#0c0e14] border border-white/10 hover:border-red-400/50 transition-colors shadow-xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-red-400 mb-3">
                    02 // CORE CHALLENGE
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white mb-4">
                    The Bottleneck
                  </h3>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {project.challenge || "Legacy technology silos and unoptimized user flows were causing high bounce rates and lost conversion opportunities."}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                  Constraint: Zero Production Downtime
                </div>
              </div>

              {/* 03 Solution */}
              <div className="p-8 rounded-3xl bg-[#0c0e14] border border-white/10 hover:border-emerald-400/50 transition-colors shadow-xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 mb-3">
                    03 // RND ARCHITECTURE
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white mb-4">
                    The Breakthrough
                  </h3>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {project.solution || "RND engineered a sub-second, resilient cloud platform with spatial 3D elements and automated telemetry pipelines."}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                  Result: Verified Production Acceleration
                </div>
              </div>
            </div>

            {/* Deliverables Matrix */}
            {project.deliverables && project.deliverables.length > 0 && (
              <div className="mt-10 p-8 rounded-3xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] block mb-1">
                      DELIVERED SCOPE MATRIX
                    </span>
                    <h4 className="text-xl font-bold uppercase text-white">
                      Scope Shipped to Production
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    100% Milestone Handover Completed
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-neutral-200"
                    >
                      <div className="w-5 h-5 rounded-md bg-[#FFD400]/15 border border-[#FFD400]/40 flex items-center justify-center text-[#FFD400] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* =========================================================================
              5. THE TRANSFORMATION: "BEFORE THAT HOW SHOW" vs "BY RND HOW IMPROVISED"
              ========================================================================= */}
          <section id="case-study-transformation" className="py-16 border-b border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <ScrollReveal yOffset={16}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider mb-3 bg-[#FFD400]/10 border border-[#FFD400]/40 text-[#FFD400]">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Case Study Transformation Benchmark</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white font-[family-name:var(--font-syne)] mb-4">
                  <WaveText text="Before RND vs. How We Improvised" />
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.12} yOffset={20}>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  Direct contrast demonstrating how the legacy platform performed before intervention, and how RND Technosoft engineered an avant-garde digital transformation.
                </p>
              </ScrollReveal>

              {/* View Switcher Pills */}
              <div className="mt-8 inline-flex p-1.5 rounded-full bg-white/5 border border-white/15">
                <button
                  type="button"
                  onClick={() => setComparisonMode("side_by_side")}
                  className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    comparisonMode === "side_by_side"
                      ? "bg-[#FFD400] text-black shadow-lg"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  âš¡ Side-by-Side Split
                </button>
                <button
                  type="button"
                  onClick={() => setComparisonMode("legacy")}
                  className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    comparisonMode === "legacy"
                      ? "bg-red-500 text-white shadow-lg"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  ðŸ”´ Before (Legacy State)
                </button>
                <button
                  type="button"
                  onClick={() => setComparisonMode("improvised")}
                  className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    comparisonMode === "improvised"
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  ðŸŸ¢ By RND (Improvised)
                </button>
              </div>
            </div>

            {/* Split View Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* BEFORE RND */}
              {(comparisonMode === "side_by_side" || comparisonMode === "legacy") && (
                <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-red-950/20 via-[#0c0e14] to-[#0c0e14] border border-red-500/30 shadow-2xl">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-red-500/20">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/40 text-red-400 font-mono text-xs uppercase tracking-wider font-bold">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      BEFORE RND // HOW IT LOOKED &amp; PERFORMED
                    </span>
                    <span className="text-neutral-400 text-xs font-mono">Legacy Baseline</span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase text-white mb-3">
                    {beforeAfterConfig.beforeTitle}
                  </h3>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {beforeAfterConfig.beforeDescription}
                  </p>

                  {/* Legacy Pain Points */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase text-red-400 tracking-wider block">
                      CRITICAL LEGACY BOTTLENECKS:
                    </span>
                    {beforeAfterConfig.legacyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 text-xs sm:text-sm text-neutral-300">
                        <span className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                          âœ•
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* BY RND HOW IMPROVISED */}
              {(comparisonMode === "side_by_side" || comparisonMode === "improvised") && (
                <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-emerald-950/20 via-[#0c0e14] to-[#0c0e14] border border-[#FFD400]/40 shadow-2xl">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#FFD400]/20">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/40 text-[#FFD400] font-mono text-xs uppercase tracking-wider font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      BY RND // HOW IT WAS IMPROVISED &amp; ELEVATED
                    </span>
                    <span className="text-emerald-400 text-xs font-mono">Modern Architecture</span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase text-white mb-3">
                    {beforeAfterConfig.afterTitle}
                  </h3>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {beforeAfterConfig.afterDescription}
                  </p>

                  {/* Modern Improvised Points */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase text-[#FFD400] tracking-wider block">
                      RND ARCHITECTURAL BREAKTHROUGHS:
                    </span>
                    {beforeAfterConfig.modernPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs sm:text-sm text-neutral-200">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                          âœ“
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Comparison Metrics Grid (before vs after numbers) */}
            {beforeAfterConfig.metrics && beforeAfterConfig.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {beforeAfterConfig.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-gradient-to-b from-[#0F131D]/95 to-[#05070B] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 group"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3 block">
                      {metric.label}
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-mono text-red-400 line-through/80 opacity-70">
                        {metric.before}
                      </span>
                      <span className="text-xs text-neutral-500">â†’</span>
                      <span className="text-2xl font-bold text-white group-hover:text-[#FFD400] transition-colors">
                        {metric.after}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-[10px] font-mono font-bold uppercase tracking-wide">
                      <TrendingUp className="w-3 h-3" />
                      <span>{metric.improvement}</span>
                    </div>
                    {metric.subtext && (
                      <div className="mt-2 text-[10px] font-mono text-neutral-500">
                        {metric.subtext}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* =========================================================================
            6. STEP-BY-STEP PROCESS: VERTICAL CHRONOLOGICAL ROADMAP
            ========================================================================= */}
        <section
          ref={roadmapSectionRef}
          className="w-full py-16 sm:py-24 border-y border-white/10 relative transition-all bg-transparent overflow-hidden"
        >
          {/* Ambient decorative glowing backdrop orbs */}
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#FFD400]/5 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            {/* Top Bar: Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-20">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD400] shadow-[0_0_8px_#FFD400] animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#FFD400] font-semibold">
                    CHRONOLOGICAL PIPELINE â€¢ WEEKS 01 TO 14
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white font-[family-name:var(--font-syne)] tracking-tight">
                  <WaveText text="All Process Step-by-Step" />
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  A structured, milestone-driven execution framework engineered from discovery through production deployment.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 shrink-0 self-start sm:self-auto shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>06 PHASES // PRODUCTION-VERIFIED</span>
              </div>
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative">
              {/* Central Vertical Spine (Desktop md+) */}
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#FFD400] via-white/20 to-[#FFD400]/40 z-0" />

              {/* Left-Aligned Spine (Mobile < md) */}
              <div className="block md:hidden absolute left-5 sm:left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FFD400] via-white/20 to-[#FFD400]/40 z-0" />

              {/* Timeline Steps */}
              <div className="space-y-10 sm:space-y-14 md:space-y-16 relative z-10">
                {processSteps.map((step, idx) => {
                  const isEven = idx % 2 === 0;

                  return (
                    <div
                      key={step.number || idx}
                      className="vertical-roadmap-item relative flex flex-col md:flex-row items-stretch md:items-center group"
                    >
                      {/* Center Node (Desktop md+) */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#050608] border-2 border-[#FFD400] items-center justify-center shadow-[0_0_20px_rgba(255,212,0,0.35)] group-hover:scale-110 group-hover:bg-[#FFD400] transition-all duration-300">
                        <span className="font-mono text-xs font-bold text-[#FFD400] group-hover:text-black transition-colors">
                          {step.number}
                        </span>
                      </div>

                      {/* Mobile Node (< md) */}
                      <div className="md:hidden absolute left-5 sm:left-6 -translate-x-1/2 top-6 z-20 w-8 h-8 rounded-full bg-[#050608] border-2 border-[#FFD400] flex items-center justify-center shadow-[0_0_15px_rgba(255,212,0,0.35)]">
                        <span className="font-mono text-[10px] font-bold text-[#FFD400]">
                          {step.number}
                        </span>
                      </div>

                      {/* Desktop Horizontal Connector Stem */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] z-10 pointer-events-none ${
                          isEven
                            ? "right-1/2 w-8 lg:w-12 bg-gradient-to-l from-[#FFD400] to-white/10"
                            : "left-1/2 w-8 lg:w-12 bg-gradient-to-r from-[#FFD400] to-white/10"
                        }`}
                      />

                      {/* Step Card: Left on Even, Right on Odd (Desktop), Left-Indented on Mobile */}
                      <div
                        className={`w-full md:w-[calc(50%-36px)] lg:w-[calc(50%-48px)] pl-12 sm:pl-14 md:pl-0 ${
                          isEven
                            ? "md:mr-auto md:pr-4 lg:md:pr-8"
                            : "md:ml-auto md:pl-4 lg:md:pl-8"
                        }`}
                      >
                        <div className="relative rounded-2xl p-5 sm:p-7 bg-gradient-to-b from-[#0F131D]/95 via-[#0A0D14]/95 to-[#05070B] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-300 shadow-xl hover:shadow-[0_0_35px_rgba(255,212,0,0.18)] backdrop-blur-xl group/card overflow-hidden">
                          {/* Watermark Step Number */}
                          <div className="absolute -top-3 -right-2 text-7xl sm:text-8xl font-black font-[family-name:var(--font-syne)] text-white/[0.02] group-hover/card:text-[#FFD400]/[0.06] transition-colors select-none pointer-events-none">
                            {step.number}
                          </div>

                          {/* Top Meta Bar */}
                          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 relative z-10">
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-[#FFD400]" />
                              <span className="font-mono text-xs sm:text-sm font-bold text-[#FFD400] tracking-wide">
                                {step.duration}
                              </span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-neutral-300 uppercase tracking-wider">
                              PHASE {step.number}
                            </span>
                          </div>

                          {/* Split Content: Thumbnail + Details */}
                          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start relative z-10">
                            {/* Thumbnail */}
                            <div
                              className="relative w-full sm:w-44 h-40 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black/60 shadow-md group-hover/card:border-[#FFD400]/40 transition-colors cursor-pointer group/thumb"
                              onClick={() => setSelectedGalleryImg(step.image)}
                            >
                              <Image
                                src={step.image}
                                alt={step.title}
                                fill
                                className="object-cover group-hover/thumb:scale-108 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, 176px"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                              <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md font-mono text-[9px] text-[#FFD400] border border-[#FFD400]/30 font-bold">
                                <Eye className="w-2.5 h-2.5" />
                                <span>PREVIEW</span>
                              </div>
                            </div>

                            {/* Phase Text */}
                            <div className="flex-1 min-w-0 space-y-2">
                              <h3 className="text-base sm:text-lg font-bold text-white uppercase font-[family-name:var(--font-syne)] group-hover/card:text-[#FFD400] transition-colors leading-snug">
                                {step.title}
                              </h3>
                              <p className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed">
                                {step.desc}
                              </p>
                            </div>
                          </div>

                          {/* Architectural Deliverables */}
                          {step.deliverables && step.deliverables.length > 0 && (
                            <div className="mt-5 pt-4 border-t border-white/10 relative z-10 space-y-2">
                              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold block">
                                Phase Deliverables:
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                {step.deliverables.map((deliv, dIdx) => (
                                  <div
                                    key={dIdx}
                                    className="flex items-start gap-1.5 text-xs font-mono text-neutral-300"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0 mt-0.5" />
                                    <span className="font-light leading-tight">{deliv}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 pb-20">
          {/* =========================================================================
              6b. PERFORMANCE TELEMETRY KPI GRID
              ========================================================================= */}
          {telemetryMetrics && telemetryMetrics.length > 0 && (
            <div className="py-14 border-b border-white/10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider mb-3 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
                  <Gauge className="w-4 h-4" />
                  <span>Verified Production Telemetry</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white">
                  Performance Outcomes
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {telemetryMetrics.map((tm, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-gradient-to-b from-[#0F131D]/95 to-[#05070B] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,212,0,0.08)] text-center group"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-white group-hover:text-[#FFD400] transition-colors mb-2 font-[family-name:var(--font-archia)]">
                      {tm.metric}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-wider mb-1">
                      {tm.label}
                    </div>
                    <div className="inline-flex items-center gap-1 text-[10px] font-mono text-neutral-500 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 mt-1">
                      <ShieldCheck className="w-3 h-3 text-[#FFD400]" />
                      <span>{tm.verified}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              6c. CLIENT TESTIMONIAL (shown only when child-page data has a quote)
              ========================================================================= */}
          {pageData.testimonial?.quote && (
            <div className="py-14 border-b border-white/10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider mb-6 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
                  <Award className="w-4 h-4" />
                  <span>Client Testimonial</span>
                </div>
                <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10">
                  <Quote className="w-10 h-10 text-[#FFD400]/20 absolute top-6 left-6" />
                  <blockquote className="relative z-10 text-base sm:text-lg text-white font-light leading-relaxed italic mb-8">
                    "{pageData.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    {pageData.testimonial.avatar && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFD400]/40 shrink-0">
                        <Image
                          src={pageData.testimonial.avatar}
                          alt={pageData.testimonial.author}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    )}
                    <div className="text-left">
                      <div className="text-sm font-bold text-white">{pageData.testimonial.author}</div>
                      {pageData.testimonial.role && (
                        <div className="text-xs font-mono text-neutral-400">{pageData.testimonial.role}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              7. PREVIOUS / NEXT MISSION NAVIGATION
              ========================================================================= */}
          <div className="py-12 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevProject ? (
              <Link
                href={`/${prevProject.category_slug || catSlug}/${prevProject.slug}`}
                className="group flex items-center gap-3 text-left w-full sm:w-auto"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-colors shrink-0">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                    Previous Case Study
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors line-clamp-1">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href={`/portfolio/${catSlug}`}
              className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:border-[#FFD400]/40 transition-colors"
            >
              View All {catTitle}
            </Link>

            {nextProject ? (
              <Link
                href={`/${nextProject.category_slug || catSlug}/${nextProject.slug}`}
                className="group flex items-center justify-end gap-3 text-right w-full sm:w-auto ml-auto"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                    Next Case Study
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors line-clamp-1">
                    {nextProject.title}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* =========================================================================
              8. RELATED CASE STUDIES IN SAME CATEGORY
              ========================================================================= */}
          {relatedProjects && relatedProjects.length > 0 && (
            <div className="py-16 border-b border-white/10">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold">
                  MORE WORKS IN {catTitle}
                </span>
                <Link
                  href={`/portfolio/${catSlug}`}
                  className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
                >
                  <span>Browse Category Archive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.slice(0, 3).map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/${rel.category_slug || catSlug}/${rel.slug}`}
                    className="group rounded-2xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all shadow-xl flex flex-col justify-between"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-[#FFD400]/40 text-[#FFD400] text-[10px] font-mono uppercase tracking-wider">
                        {rel.year || "2026"}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[10px] font-mono text-[#FFD400] block mb-1">
                          {rel.client}
                        </span>
                        <h4 className="text-base font-bold text-white uppercase font-[family-name:var(--font-syne)] group-hover:text-[#FFD400] transition-colors mb-2 line-clamp-1">
                          {rel.title}
                        </h4>
                        <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
                          {rel.subtitle || rel.tagline || rel.summary}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300">
                        <span>Inspect Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD400] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              9. CONVERSION CTA INQUIRY FORM
              ========================================================================= */}
          <div className="pt-16">
            <ServiceConversionCTA
              id="inquire-form"
              defaultService={project.title}
              category={catTitle}
              badge="COMMISSION A SIMILAR TRANSFORMATION"
              title={`Ready to Improvise Your Platform Like ${project.title}?`}
              subtitle="Whether you need sub-second cloud performance, bespoke 3D visualization, or enterprise business process automation, our engineering squad is ready to review your brief."
              projectSlug={project.slug}
              sourcePage={`/${catSlug}/${project.slug}`}
            />
          </div>

        </div>
      </main>

      {/* Lightbox Modal for Gallery Images */}
      {selectedGalleryImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedGalleryImg(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedGalleryImg(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD400] hover:text-black flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <Image
              src={selectedGalleryImg}
              alt="Project Showcase Zoom"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Video Modal (when available) */}
      {showVideoModal && project.video_url && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setShowVideoModal(false)}
        >
          <button
            type="button"
            onClick={() => setShowVideoModal(false)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FFD400] hover:text-black flex items-center justify-center text-white transition-all cursor-pointer shadow-xl"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${project.video_url}?autoplay=1`}
              title={`${project.title} Video Showcase`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <RnDFooter />
    </div>
  );
}

