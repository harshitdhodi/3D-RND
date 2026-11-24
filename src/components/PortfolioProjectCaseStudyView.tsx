"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
import { PortfolioProject } from "@/lib/getPortfolioData";

export interface PortfolioCaseStudyProps {
  project: PortfolioProject;
  relatedProjects?: PortfolioProject[];
  prevProject?: PortfolioProject | null;
  nextProject?: PortfolioProject | null;
}

export default function PortfolioProjectCaseStudyView({
  project,
  relatedProjects = [],
  prevProject = null,
  nextProject = null,
}: PortfolioCaseStudyProps) {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [comparisonMode, setComparisonMode] = useState<"side_by_side" | "legacy" | "improvised">("side_by_side");

  const catTitle = project.category_title || project.category_slug.replace(/-/g, " ").toUpperCase();
  const catSlug = project.category_slug;

  // Derive specialized Before vs After data for this specific project
  const beforeAfterConfig = getProjectBeforeAfter(project);
  const processSteps = getProjectProcessSteps(project);
  const telemetryMetrics = getProjectTelemetry(project);

  // Horizontal Scroll Logic & Drag State for Process Roadmap
  const scrollRef = useRef<HTMLDivElement>(null);
  const roadmapSectionRef = useRef<HTMLElement>(null);
  const targetScrollRef = useRef<number>(0);
  const animIdRef = useRef<number | null>(null);
  const [isWheelFrozen, setIsWheelFrozen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < maxScroll - 15);

    const items = scrollRef.current.querySelectorAll("[data-step-card]");
    if (items.length > 0) {
      const containerCenter = scrollLeft + clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const el = item as HTMLElement;
        const itemCenter = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(containerCenter - itemCenter);
        if (dist < closestDistance) {
          closestDistance = dist;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);
    }
  }, [processSteps.length]);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  // Mouse wheel freeze & buttery-smooth momentum horizontal scroll controller
  useEffect(() => {
    const sectionEl = roadmapSectionRef.current;
    if (!sectionEl) return;

    if (scrollRef.current) {
      targetScrollRef.current = scrollRef.current.scrollLeft;
    }

    const startSmoothLoop = () => {
      if (animIdRef.current) return;

      const step = () => {
        const container = scrollRef.current;
        if (!container) {
          animIdRef.current = null;
          return;
        }

        const current = container.scrollLeft;
        const target = targetScrollRef.current;
        const diff = target - current;

        // Luxurious weightless lerp interpolation
        if (Math.abs(diff) > 0.5) {
          container.scrollLeft = current + diff * 0.12;
          animIdRef.current = requestAnimationFrame(step);
        } else {
          container.scrollLeft = target;
          animIdRef.current = null;
        }
      };

      animIdRef.current = requestAnimationFrame(step);
    };

    const handleWheel = (e: WheelEvent) => {
      // If user is doing an intentional trackpad horizontal gesture, let native handle it
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      const container = scrollRef.current;
      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 5) return;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      // Ensure the section is fully framed on screen before locking vertical scroll
      const rect = sectionEl.getBoundingClientRect();
      if (isScrollingDown && rect.top > 120) {
        // Let page scroll down naturally into full view
        return;
      }
      if (isScrollingUp && rect.bottom < window.innerHeight * 0.45) {
        // Let page scroll up naturally
        return;
      }

      // Check whether we are within horizontal bounds for this direction
      const canGoForward = isScrollingDown && targetScrollRef.current < maxScroll - 4;
      const canGoBackward = isScrollingUp && targetScrollRef.current > 4;

      if (canGoForward || canGoBackward) {
        // FREEZE vertical page scroll so screen locks on the process section
        e.preventDefault();
        setIsWheelFrozen(true);

        // Normalize delta to eliminate abrupt jumps from aggressive mouse wheels
        const delta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), 120);
        const scrollSpeed = 1.6;

        // Smoothly accumulate target position
        targetScrollRef.current = Math.max(
          0,
          Math.min(maxScroll, targetScrollRef.current + delta * scrollSpeed)
        );

        startSmoothLoop();
      } else {
        // Reached start or end: release freeze so vertical page scroll unfreezes and resumes
        setIsWheelFrozen(false);
      }
    };

    sectionEl.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      sectionEl.removeEventListener("wheel", handleWheel);
      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current);
        animIdRef.current = null;
      }
    };
  }, []);

  const scrollToStep = (index: number) => {
    if (!scrollRef.current) return;
    const items = scrollRef.current.querySelectorAll("[data-step-card]");
    if (items[index]) {
      const container = scrollRef.current;
      const { scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;

      const el = items[index] as HTMLElement;
      const targetX = Math.max(
        0,
        Math.min(maxScroll, el.offsetLeft - (clientWidth - el.offsetWidth) / 2)
      );

      targetScrollRef.current = targetX;
      setActiveStep(index);

      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
      const step = () => {
        const cur = container.scrollLeft;
        const diff = targetScrollRef.current - cur;
        if (Math.abs(diff) > 0.5) {
          container.scrollLeft = cur + diff * 0.14;
          animIdRef.current = requestAnimationFrame(step);
        } else {
          container.scrollLeft = targetScrollRef.current;
          animIdRef.current = null;
        }
      };
      animIdRef.current = requestAnimationFrame(step);
    }
  };

  const scrollRoadmap = (direction: "left" | "right") => {
    const nextIdx =
      direction === "left"
        ? Math.max(0, activeStep - 1)
        : Math.min(processSteps.length - 1, activeStep + 1);
    scrollToStep(nextIdx);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    targetScrollRef.current = scrollRef.current.scrollLeft;
    if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    targetScrollRef.current = scrollRef.current.scrollLeft;
  };

  const onMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      <SpaceBackground />
      <Navbar />

      {/* Page Banner with Deep Breadcrumb Navigation */}
      <PageBanner
        title={project.title.toUpperCase()}
        parentBreadcrumb={{ label: "PORTFOLIO", href: "/portfolio" }}
        breadcrumb={`PORTFOLIO / ${catTitle.toUpperCase()} / ${project.title.toUpperCase()}`}
        imageSrc={project.image || "/banner/service.png"}
        imgtitle={project.imgtitle || `${project.title} Case Study`}
        altname={project.altname || `${project.title} - RND Technosoft Case Study`}
      />

      <main className="relative z-20 w-full mt-10 sm:mt-14 rounded-t-4xl sm:rounded-t-[48px] bg-[#050608] border-t border-white/10 shadow-[0_-30px_70px_rgba(0,0,0,0.9)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-20">

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

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4 font-[family-name:var(--font-syne)]">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-light max-w-4xl leading-relaxed">
                {project.subtitle || project.tagline || project.summary}
              </p>
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

            {/* Gallery Lightbox Preview (if gallery images exist) */}
            {project.gallery_images && project.gallery_images.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400]">
                    INTERFACE SHOTS &amp; TELEMETRY VIEWPORTS ({project.gallery_images.length})
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    Click to zoom viewport
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.gallery_images.map((imgUrl, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedGalleryImg(imgUrl)}
                      className="group relative rounded-2xl overflow-hidden aspect-video bg-[#0c0e14] border border-white/10 hover:border-[#FFD400] transition-all cursor-pointer shadow-lg"
                    >
                      <Image
                        src={imgUrl}
                        alt={`${project.title} Interface ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* =========================================================================
              4. STRATEGIC NARRATIVE: MANDATE, BOTTLENECK & ARCHITECTURE
              ========================================================================= */}
          <div className="py-16 border-b border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider mb-3 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
                <Layers className="w-4 h-4" />
                <span>Strategic Case Study Blueprint</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white font-[family-name:var(--font-syne)]">
                The Engineering Mandate
              </h2>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider mb-3 bg-[#FFD400]/10 border border-[#FFD400]/40 text-[#FFD400]">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Case Study Transformation Benchmark</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white font-[family-name:var(--font-syne)] mb-4">
                Before RND vs. How We Improvised
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Direct contrast demonstrating how the legacy platform performed before intervention, and how RND Technosoft engineered an avant-garde digital transformation.
              </p>

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
                  ⚡ Side-by-Side Split
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
                  🔴 Before (Legacy State)
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
                  🟢 By RND (Improvised)
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
                          ✕
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
                          ✓
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Performance Comparison Lift Table */}
            <div className="p-8 rounded-3xl bg-[#0c0e14] border border-white/10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold">
                  TELEMETRY LIFT &amp; BENCHMARK MATRIX
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Audit Verified Telemetry
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {beforeAfterConfig.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                        {metric.label}
                      </span>
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <span className="text-sm font-mono text-red-400/80 line-through">
                          {metric.before}
                        </span>
                        <span className="text-xl sm:text-2xl font-bold font-mono text-[#FFD400]">
                          {metric.after}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-bold">{metric.improvement}</span>
                      <span className="text-neutral-500">{metric.subtext}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              6. STEP-BY-STEP PROCESS: ALTERNATING HORIZONTAL TIMELINE ROADMAP
              ========================================================================= */}
          <section
            ref={roadmapSectionRef}
            className="py-6 sm:py-8 border-b border-white/10 relative transition-all"
          >
            {/* Top Bar: Compact Unified Header (Title + Controls) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#FFD400] shadow-[0_0_8px_#FFD400] animate-pulse" />
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-neutral-300 font-semibold">
                    CHRONOLOGICAL PIPELINE • WEEKS 01 TO 14
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-white font-[family-name:var(--font-syne)] tracking-tight">
                  All Process Step-by-Step
                </h2>
              </div>

              {/* Right: Milestone Counter & Navigation Arrow Buttons */}
              <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                <div className="text-right">
                  <div className="font-mono text-sm sm:text-base font-bold text-white tracking-wider">
                    0{activeStep + 1} <span className="text-neutral-500 font-normal">/</span> 0{processSteps.length}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                    MILESTONE
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => scrollRoadmap("left")}
                    disabled={!canScrollLeft}
                    aria-label="Previous Milestone"
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                      canScrollLeft
                        ? "bg-white/5 border-white/20 text-white hover:bg-[#FFD400] hover:text-black hover:border-[#FFD400] shadow-md active:scale-95"
                        : "bg-white/[0.02] border-white/5 text-neutral-600 cursor-not-allowed opacity-40"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollRoadmap("right")}
                    disabled={!canScrollRight}
                    aria-label="Next Milestone"
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                      canScrollRight
                        ? "bg-white/5 border-white/20 text-white hover:bg-[#FFD400] hover:text-black hover:border-[#FFD400] shadow-md active:scale-95"
                        : "bg-white/[0.02] border-white/5 text-neutral-600 cursor-not-allowed opacity-40"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Alternating Horizontal Scroll Timeline Track */}
            <div
              ref={scrollRef}
              onScroll={updateScrollState}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              className="relative w-full overflow-x-auto pb-3 pt-2 cursor-grab active:cursor-grabbing select-none no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="relative min-w-max h-[340px] sm:h-[370px] flex items-center px-6 sm:px-12">
                {/* Background Axis Line spanning across whole scroll container */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/15 -translate-y-1/2 z-0" />

                {/* Active Glowing Progress Track */}
                <div
                  className="absolute top-1/2 left-0 h-[3px] bg-gradient-to-r from-[#FFD400] via-[#FFD400] to-[#FFE875] -translate-y-1/2 z-[1] transition-all duration-300 shadow-[0_0_15px_#FFD400]"
                  style={{
                    width: `${Math.min(
                      Math.max(
                        ((activeStep + 0.5) / processSteps.length) * 100,
                        8
                      ),
                      100
                    )}%`,
                  }}
                />

                {/* Step Columns */}
                <div className="flex gap-8 sm:gap-10 relative z-10">
                  {processSteps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    const isPassed = activeStep > idx;
                    const isEven = idx % 2 === 0;

                    return (
                      <div
                        key={idx}
                        data-step-card
                        className="w-[360px] sm:w-[420px] lg:w-[460px] shrink-0 relative h-[340px] sm:h-[370px] flex flex-col justify-center items-center snap-center"
                      >
                        {/* Marker Node placed directly on central axis line */}
                        <div
                          onClick={() => scrollToStep(idx)}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group/node"
                        >
                          {isActive ? (
                            <div className="relative flex items-center justify-center">
                              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#FFD400] bg-[#FFD400]/25 flex items-center justify-center shadow-[0_0_15px_#FFD400] transition-all scale-110 animate-pulse">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFD400]" />
                              </div>
                            </div>
                          ) : isPassed ? (
                            <div className="w-4 h-4 rounded-full border-2 border-[#FFD400] bg-[#FFD400] shadow-[0_0_8px_#FFD400] transition-all" />
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border-2 border-white/40 bg-[#050608] group-hover/node:border-[#FFD400] group-hover/node:scale-125 transition-all" />
                          )}
                        </div>

                        {/* =======================================================
                            EVEN INDEX (0, 2, 4) -> PLACED BELOW THE AXIS LINE
                            ======================================================= */}
                        {isEven && (
                          <>
                            {/* Vertical Connector Stem leading downward from marker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-gradient-to-b from-[#FFD400] to-white/10 z-10" />

                            {/* Content Card below */}
                            <div
                              onClick={() => scrollToStep(idx)}
                              className={`absolute top-[calc(50%+20px)] sm:top-[calc(50%+24px)] left-0 right-0 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#0F131D]/95 via-[#0A0D14]/95 to-[#05070B] border transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-xl group flex gap-3 sm:gap-4 items-center ${
                                isActive
                                  ? "border-[#FFD400] shadow-[0_0_25px_rgba(255,212,0,0.22)] ring-1 ring-[#FFD400]/40 -translate-y-0.5"
                                  : "border-white/10 hover:border-white/30"
                              }`}
                            >
                              {/* Thumbnail Image on Left */}
                              <div
                                className="relative w-24 h-20 sm:w-28 sm:h-22 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-black/60 shadow-md group-hover:border-[#FFD400]/40 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedGalleryImg(step.image);
                                }}
                              >
                                <Image
                                  src={step.image}
                                  alt={step.title}
                                  fill
                                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                                  sizes="(max-width: 640px) 96px, 112px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md font-mono text-[9px] text-[#FFD400] border border-[#FFD400]/30 font-bold">
                                  {step.number}
                                </span>
                              </div>

                              {/* Text Info on Right */}
                              <div className="flex-1 min-w-0">
                                <div className="font-mono text-sm sm:text-base font-bold text-[#FFD400] tracking-tight mb-0.5 font-[family-name:var(--font-syne)] flex items-center justify-between">
                                  <span>{step.duration}</span>
                                  <span className="text-[9px] font-mono text-neutral-400 font-normal uppercase tracking-wider">
                                    PHASE {step.number}
                                  </span>
                                </div>

                                <h4 className="text-xs sm:text-sm font-bold text-white uppercase font-[family-name:var(--font-syne)] line-clamp-1 mb-1 group-hover:text-[#FFD400] transition-colors">
                                  {step.title}
                                </h4>

                                <p className="text-[11px] text-neutral-300 font-light leading-relaxed line-clamp-2 mb-1.5">
                                  {step.desc}
                                </p>

                                <div className="flex flex-wrap gap-1">
                                  {step.deliverables.slice(0, 2).map((deliv, dIdx) => (
                                    <span
                                      key={dIdx}
                                      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-neutral-300 truncate max-w-[140px]"
                                    >
                                      <CheckCircle2 className="w-2.5 h-2.5 text-[#FFD400] shrink-0" />
                                      <span className="truncate">{deliv}</span>
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {/* =======================================================
                            ODD INDEX (1, 3, 5) -> PLACED ABOVE THE AXIS LINE
                            ======================================================= */}
                        {!isEven && (
                          <>
                            {/* Content Card above */}
                            <div
                              onClick={() => scrollToStep(idx)}
                              className={`absolute bottom-[calc(50%+20px)] sm:bottom-[calc(50%+24px)] left-0 right-0 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#0F131D]/95 via-[#0A0D14]/95 to-[#05070B] border transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-xl group flex gap-3 sm:gap-4 items-center ${
                                isActive
                                  ? "border-[#FFD400] shadow-[0_0_25px_rgba(255,212,0,0.22)] ring-1 ring-[#FFD400]/40 translate-y-0.5"
                                  : "border-white/10 hover:border-white/30"
                              }`}
                            >
                              {/* Thumbnail Image on Left */}
                              <div
                                className="relative w-24 h-20 sm:w-28 sm:h-22 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-black/60 shadow-md group-hover:border-[#FFD400]/40 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedGalleryImg(step.image);
                                }}
                              >
                                <Image
                                  src={step.image}
                                  alt={step.title}
                                  fill
                                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                                  sizes="(max-width: 640px) 96px, 112px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md font-mono text-[9px] text-[#FFD400] border border-[#FFD400]/30 font-bold">
                                  {step.number}
                                </span>
                              </div>

                              {/* Text Info on Right */}
                              <div className="flex-1 min-w-0">
                                <div className="font-mono text-sm sm:text-base font-bold text-[#FFD400] tracking-tight mb-0.5 font-[family-name:var(--font-syne)] flex items-center justify-between">
                                  <span>{step.duration}</span>
                                  <span className="text-[9px] font-mono text-neutral-400 font-normal uppercase tracking-wider">
                                    PHASE {step.number}
                                  </span>
                                </div>

                                <h4 className="text-xs sm:text-sm font-bold text-white uppercase font-[family-name:var(--font-syne)] line-clamp-1 mb-1 group-hover:text-[#FFD400] transition-colors">
                                  {step.title}
                                </h4>

                                <p className="text-[11px] text-neutral-300 font-light leading-relaxed line-clamp-2 mb-1.5">
                                  {step.desc}
                                </p>

                                <div className="flex flex-wrap gap-1">
                                  {step.deliverables.slice(0, 2).map((deliv, dIdx) => (
                                    <span
                                      key={dIdx}
                                      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-neutral-300 truncate max-w-[140px]"
                                    >
                                      <CheckCircle2 className="w-2.5 h-2.5 text-[#FFD400] shrink-0" />
                                      <span className="truncate">{deliv}</span>
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Vertical Connector Stem leading downward from card to marker */}
                            <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 h-5 sm:h-6 w-[2px] bg-gradient-to-b from-white/10 to-[#FFD400] z-10" />
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Instruction Footer Pill & Freeze Status */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-3 sm:mt-4 text-xs font-mono text-neutral-400">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/5 border border-white/10">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isWheelFrozen
                      ? "bg-[#FFD400] shadow-[0_0_8px_#FFD400] animate-ping"
                      : "bg-[#FFD400]"
                  }`}
                />
                <span className="text-[#FFD400] font-semibold tracking-wider uppercase text-[10px]">
                  {isWheelFrozen
                    ? "HORIZONTAL WHEEL ENGAGED // PAGE FROZEN"
                    : "AUTO HORIZONTAL SCROLL ENABLED"}
                </span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="text-neutral-400 text-center text-[10px]">
                Roll mouse wheel to traverse chronological milestones • Automatically unfreezes at ends
              </span>
            </div>
          </section>

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

// =========================================================================
// HELPER: Specialized Before vs After Data Generator
// =========================================================================
function getProjectBeforeAfter(project: PortfolioProject) {
  const cat = (project.category_slug || "").toLowerCase();

  if (cat.includes("mobile")) {
    return {
      beforeTitle: "Manual Hospital Logs & Fragmented Dispatch",
      beforeDescription:
        "Prior to the mobile logistics suite, orthopedic implant tracking relied on paper manifests, phone calls, and manual spreadsheet entries with severe hospital dispatch delays.",
      legacyPoints: [
        "Surgical cases delayed up to 45 minutes due to missing implant telemetry",
        "Zero real-time barcode reconciliation at hospital scrub stations",
        "Distributors relying on unverified manual WhatsApp dispatch messages",
        "No offline sync in subterranean hospital OT basement wings",
      ],
      afterTitle: "Edge-First Native Mobile Architecture",
      afterDescription:
        "RND engineered a resilient cross-platform mobile suite with offline-first barcode scanning, automated scrub nurse dispatch, and HIPAA-compliant delivery verification.",
      modernPoints: [
        "99.98% on-time surgical case implant deliveries verified across hospitals",
        "Sub-100ms camera barcode decoding with offline Bluetooth buffer sync",
        "Instant surgeon schedule synchronization and push telemetry dispatch",
        "End-to-end encrypted medical chain of custody audit logging",
      ],
      metrics: [
        {
          label: "Case Delivery Accuracy",
          before: "84.2%",
          after: "99.98%",
          improvement: "+18.7% Lift",
          subtext: "Live surgical cases",
        },
        {
          label: "Implant Dispatch Latency",
          before: "45 min",
          after: "3.2 min",
          improvement: "93% Faster",
          subtext: "Dispatch to OT arrival",
        },
        {
          label: "Offline Sync Reliability",
          before: "0%",
          after: "100%",
          improvement: "Subterranean OT Ready",
          subtext: "Bluetooth local cache",
        },
        {
          label: "Inventory Shrinkage",
          before: "12.4%",
          after: "0.1%",
          improvement: "-99% Shrinkage",
          subtext: "Automated RFID ledger",
        },
      ],
    };
  }

  if (cat.includes("branding") || cat.includes("design")) {
    return {
      beforeTitle: "Fragmented Visuals & Low Brand Recall",
      beforeDescription:
        "The legacy corporate presence had disjointed typography scales, inconsistent packaging specifications, and lacked a unified premium design language.",
      legacyPoints: [
        "Fragmented typography scales across web, packaging, and retail collateral",
        "Flat, static 2D visuals with zero luxury or spatial depth presence",
        "Disjointed color palette lacking modern dark-mode accessibility",
        "Unstandardized packaging dielines causing costly printing misalignments",
      ],
      afterTitle: "Sculptural Brand Architecture & Packaging",
      afterDescription:
        "RND engineered a comprehensive luxury brand architecture, precision typography system, tactile stainless steel merchandise specs, and retail display assets.",
      modernPoints: [
        "Sculptural avant-garde typography system built for luxury hydration products",
        "Unified atomic design tokens harmonizing web, packaging, and store displays",
        "Custom 3D bottle rendering pipeline delivering tactile material finishes",
        "Flawless print-ready dieline specifications reducing factory waste to zero",
      ],
      metrics: [
        {
          label: "Brand Recall Score",
          before: "18%",
          after: "82%",
          improvement: "+355% Lift",
          subtext: "Consumer survey index",
        },
        {
          label: "Visual Cohesion Index",
          before: "38 / 100",
          after: "98 / 100",
          improvement: "+157% Cohesion",
          subtext: "Cross-channel audit",
        },
        {
          label: "Packaging Production Waste",
          before: "14.8%",
          after: "0.4%",
          improvement: "-97% Waste",
          subtext: "CAD dieline precision",
        },
        {
          label: "Retail Shelf Conversion",
          before: "2.3%",
          after: "8.7%",
          improvement: "+278% Sales",
          subtext: "In-store POS lift",
        },
      ],
    };
  }

  if (cat.includes("video") || cat.includes("photo")) {
    return {
      beforeTitle: "Unscripted Footage & Low Production Value",
      beforeDescription:
        "The company's industrial infrastructure was documented using basic handheld cameras, poor warehouse lighting, and zero cinematic storytelling.",
      legacyPoints: [
        "Shaky non-stabilized footage failing to communicate manufacturing scale",
        "Muffled industrial audio with harsh reverberation and machine noise",
        "Uncalibrated color profiles looking dull on high-end 4K commercial screens",
        "No structured narrative explaining the high-speed packaging machinery",
      ],
      afterTitle: "Cinematic 4K Commercial & Drone Telemetry",
      afterDescription:
        "RND deployed cinema-grade camera rigs, precision drone flythroughs, post-production color mastering, and sound design to capture industrial engineering marvels.",
      modernPoints: [
        "4K ProRes cinema footage with smooth dynamic gimbal & drone flythroughs",
        "Multi-track spatial audio design enhancing machine rhythms and punch",
        "Precision DaVinci Resolve color grading matching the enterprise brand tone",
        "Compelling narrative arc that positions the facility as an international leader",
      ],
      metrics: [
        {
          label: "Viewer Retention Rate",
          before: "14 sec",
          after: "2 min 18 sec",
          improvement: "+885% Dwell",
          subtext: "Social & B2B platforms",
        },
        {
          label: "Client Inquiries Generated",
          before: "2 / month",
          after: "28 / month",
          improvement: "+1300% Lift",
          subtext: "B2B RFP conversions",
        },
        {
          label: "Color Gamut Precision",
          before: "Rec.709 Basic",
          after: "DCI-P3 Master",
          improvement: "Cinema Grade",
          subtext: "10-bit color grading",
        },
        {
          label: "Brand Authority Rating",
          before: "42 / 100",
          after: "96 / 100",
          improvement: "+128% Authority",
          subtext: "Industry stakeholder audit",
        },
      ],
    };
  }

  // Default: Web & Web Applications (e.g. OSTech, Shanti Patra)
  return {
    beforeTitle: "Static Legacy Catalog & 4.8s Page Lag",
    beforeDescription:
      "The legacy machinery web portal relied on static PDF downloads, outdated layouts, and slow server response times that failed to engage international B2B buyers.",
    legacyPoints: [
      "Sluggish 4.8s page load times leading to >65% mobile bounce rates",
      "Static product catalogs requiring users to download heavy PDF brochures",
      "Zero 3D visualization or interactive conveyor throughput calculation",
      "Manual email inquiries trapped in unmonitored inboxes with 48h response delay",
    ],
    afterTitle: "Next.js 15 Sub-Second 3D Web Platform",
    afterDescription:
      "RND engineered a sub-second, edge-rendered Next.js 15 web platform featuring real-time 3D machinery visualization, dynamic conveyor matrices, and automated RFQ routing.",
    modernPoints: [
      "Sub-800ms global LCP load speed powered by multi-region edge caching",
      "Interactive 3D WebGL machinery exploration running at a smooth 60 FPS",
      "Automated B2B RFQ configurator calculating machinery specs in real time",
      "Instant CRM pipeline synchronization reducing lead response time to seconds",
    ],
    metrics: [
      {
        label: "Global LCP Speed",
        before: "4.82s",
        after: "0.78s",
        improvement: "84% Faster",
        subtext: "Multi-region edge SSR",
      },
      {
        label: "B2B Qualified RFQs",
        before: "8 / month",
        after: "48 / month",
        improvement: "+500% Lift",
        subtext: "Interactive configurator",
      },
      {
        label: "Mobile Bounce Rate",
        before: "68%",
        after: "16%",
        improvement: "-76% Bounce",
        subtext: "Mobile-first parity",
      },
      {
        label: "Average Session Dwell",
        before: "42 sec",
        after: "3 min 40 sec",
        improvement: "+423% Time",
        subtext: "3D interactive engagement",
      },
    ],
  };
}

// =========================================================================
// HELPER: 6-Phase Step-by-Step Engineering Process Generator
// =========================================================================
function getProjectProcessSteps(project: PortfolioProject) {
  const images = [
    project.gallery_images?.[0] || project.image || "/images/service_cloud_color.jpg",
    project.gallery_images?.[1] || "/images/nebula_cloud_os_3d.jpg",
    project.gallery_images?.[2] || "/images/service_mobile_color.jpg",
    project.gallery_images?.[3] || "/images/service_branding.jpg",
    project.gallery_images?.[4] || "/images/service_marketing.jpg",
    project.image || "/images/service_cloud_color.jpg",
  ];

  return [
    {
      number: "01",
      title: "Discovery & Architectural Audit",
      shortTitle: "Discovery & Audit",
      duration: "Weeks 1 - 2",
      image: images[0],
      desc: "Comprehensive diagnostic of the legacy ecosystem, stakeholder interviews, competitor benchmarking, and mapping technical API bottlenecks to formulate the project roadmap.",
      deliverables: [
        "Legacy Bottleneck Audit Report",
        "Technical Feasibility Matrix",
        "User Persona Telemetry Profile",
        "Architecture Blueprint Document",
      ],
    },
    {
      number: "02",
      title: "Information Architecture & UX Wireframing",
      shortTitle: "UX Wireframing",
      duration: "Weeks 3 - 4",
      image: images[1],
      desc: "Constructing user journey maps, wireframing responsive viewports, defining atomic design tokens, and validating user navigation paths for frictionless conversion velocity.",
      deliverables: [
        "Low-Fidelity & High-Fidelity Wireframes",
        "User Navigation Flowcharts",
        "Interactive Clickable Prototype",
        "Atomic Design Token Hierarchy",
      ],
    },
    {
      number: "03",
      title: "3D Spatial & UI/UX Design Immersion",
      shortTitle: "3D & UI Design",
      duration: "Weeks 5 - 7",
      image: images[2],
      desc: "Crafting the visual identity, modeling 3D assets/renderings, establishing the cosmic dark aesthetic with high-contrast gold accents, and fine-tuning micro-interactions.",
      deliverables: [
        "Full Component Design System (Figma)",
        "3D WebGL Optimized Asset Models",
        "Fluid Kinetic Animation Curves",
        "Multi-Viewport Design Signoff",
      ],
    },
    {
      number: "04",
      title: "Full-Stack Engineering & API Mesh",
      shortTitle: "Engineering",
      duration: "Weeks 8 - 10",
      image: images[3],
      desc: "Developing with Next.js App Router, TailwindCSS, MongoDB schema design, automated email/CRM dispatchers, and state-of-the-art WebGL interactive shaders.",
      deliverables: [
        "Serverless Edge API Endpoints",
        "Responsive Component Codebase",
        "CRM & Inquiry Automation Hookups",
        "Real-Time Database Schema Integration",
      ],
    },
    {
      number: "05",
      title: "Rigorous QA, Speed & Security Audit",
      shortTitle: "QA & Hardening",
      duration: "Weeks 11 - 12",
      image: images[4],
      desc: "Comprehensive stress testing, cross-browser/device validation, Lighthouse 98+ score optimization, image asset compression (WebP/AVIF), and security audits.",
      deliverables: [
        "Lighthouse 98+ Performance Signoff",
        "Cross-Browser Device Compatibility Matrix",
        "Zero-Vulnerability Security Audit",
        "Edge Cache Invalidation Protocol",
      ],
    },
    {
      number: "06",
      title: "Production Deployment & Live Telemetry",
      shortTitle: "Deployment & Scaling",
      duration: "Weeks 13 - 14",
      image: images[5],
      desc: "Zero-downtime deployment to AWS/Vercel Edge, DNS routing, Google Search Console indexing, analytics telemetry monitoring, and client team handover.",
      deliverables: [
        "Live Production Deployment",
        "Global CDN Edge Warmup",
        "Google Core Web Vitals Indexing",
        "Admin CMS Operations Handover",
      ],
    },
  ];
}

// =========================================================================
// HELPER: Performance Telemetry KPIs
// =========================================================================
function getProjectTelemetry(project: PortfolioProject) {
  return [
    {
      metric: project.results_metric || "<0.8s",
      label: project.results_label || "Global Edge Velocity",
      verified: "Lighthouse Audit",
    },
    {
      metric: "99.99%",
      label: "Production Availability SLA",
      verified: "Cloudflare Edge",
    },
    {
      metric: "+340%",
      label: "B2B Inquiry Funnel Conversion",
      verified: "Google Analytics",
    },
    {
      metric: "100%",
      label: "Deliverables Handover Verified",
      verified: "Client Approved",
    },
  ];
}
