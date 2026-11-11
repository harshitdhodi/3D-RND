"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  Landmark,
  HeartPulse,
  CloudCog,
  ShoppingBag,
  Car,
  Factory,
  GraduationCap,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import {
  IndustryItemData,
  DEFAULT_INDUSTRIES_DATA,
} from "@/lib/getIndustriesData";
import {
  SectionHeading,
  DEFAULT_SECTION_HEADINGS,
} from "@/lib/getSectionHeading";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string; strokeWidth?: number | string }>
> = {
  Landmark,
  HeartPulse,
  CloudCog,
  ShoppingBag,
  Car,
  Factory,
  GraduationCap,
  Building2,
  ShieldCheck: Landmark,
  Cloud: CloudCog,
  ShoppingCart: ShoppingBag,
  Plane: Car,
};

function getIconAnimationClass(title: string, slug?: string, iconName?: string): string {
  const key = `${title} ${slug || ""} ${iconName || ""}`.toLowerCase();
  if (key.includes("health") || key.includes("medtech") || key.includes("heart")) {
    return "animate-icon-heartbeat";
  }
  if (key.includes("fintech") || key.includes("bank") || key.includes("landmark") || key.includes("shield")) {
    return "animate-icon-fintech";
  }
  if (key.includes("cloud") || key.includes("saas") || key.includes("cog")) {
    return "animate-icon-cloud";
  }
  if (key.includes("retail") || key.includes("e-commerce") || key.includes("shop") || key.includes("cart")) {
    return "animate-icon-retail";
  }
  if (key.includes("mobility") || key.includes("aero") || key.includes("car") || key.includes("plane")) {
    return "animate-icon-mobility";
  }
  if (key.includes("manufacturing") || key.includes("industrial") || key.includes("factory")) {
    return "animate-icon-factory";
  }
  if (key.includes("education") || key.includes("edtech") || key.includes("graduation") || key.includes("cap")) {
    return "animate-icon-education";
  }
  if (key.includes("real estate") || key.includes("proptech") || key.includes("building")) {
    return "animate-icon-realestate";
  }
  return "animate-icon-default";
}

export interface IndustriesServedSectionProps {
  initialData?: IndustryItemData[];
  initialHeading?: SectionHeading;
}

export default function IndustriesServedSection({
  initialData = DEFAULT_INDUSTRIES_DATA,
  initialHeading = DEFAULT_SECTION_HEADINGS.industries,
}: IndustriesServedSectionProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const heading = initialHeading || DEFAULT_SECTION_HEADINGS.industries;

  const rawList =
    initialData && initialData.length > 0
      ? initialData
      : DEFAULT_INDUSTRIES_DATA;

  const industries = rawList.map((ind) => ({
    ...ind,
    icon: ICON_MAP[ind.iconName] || Factory,
  }));

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const container = containerRef.current;
      const track = trackRef.current;
      const rect = container.getBoundingClientRect();

      // Pinned offset (top distance where sticky starts pinning below fixed navbar)
      const stickyTopOffset = window.innerWidth >= 1024 ? 88 : window.innerWidth >= 768 ? 80 : 68;

      // Total vertical distance the sticky container remains pinned
      const totalScrollable = container.offsetHeight - window.innerHeight + stickyTopOffset;
      if (totalScrollable <= 0) return;

      const scrolled = stickyTopOffset - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Measure exact Logo starting X position on screen with bounds check
      let logoLeft = 16;
      if (headerRef.current) {
        const hLeft = headerRef.current.getBoundingClientRect().left;
        if (hLeft > 0 && hLeft < window.innerWidth / 2) {
          logoLeft = hLeft;
        } else {
          const pad = window.innerWidth >= 1024 ? 48 : window.innerWidth >= 768 ? 32 : window.innerWidth >= 640 ? 24 : 16;
          logoLeft = Math.max(pad, (window.innerWidth - 1280) / 2 + pad);
        }
      } else {
        const pad = window.innerWidth >= 1024 ? 48 : window.innerWidth >= 768 ? 32 : window.innerWidth >= 640 ? 24 : 16;
        logoLeft = Math.max(pad, (window.innerWidth - 1280) / 2 + pad);
      }

      // Initial position: Card 1 starts at logoLeft; cards extend to full screen width on the right
      const startX = logoLeft;
      const trackScrollWidth = track.scrollWidth;
      const screenWidth = window.innerWidth;

      // End position: Last card ends neatly at the screen edge with right padding equal to logoLeft
      const endX = screenWidth - logoLeft - trackScrollWidth;
      const totalTranslateDistance = startX - endX;

      // During scroll, cards move smoothly across the entire screen from startX to endX
      const currentX = startX - progress * totalTranslateDistance;
      track.style.transform = `translate3d(${currentX}px, 0, 0)`;

      // Update active card index for counter and controls
      const newIndex = Math.min(
        industries.length - 1,
        Math.floor(progress * industries.length)
      );
      setActiveIdx((prev) => (prev !== newIndex ? newIndex : prev));
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Touch gesture swipe support for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || e.touches.length === 0) return;
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      const diffX = touchStartX - touchX;
      const diffY = touchStartY - touchY;

      // When the user swipes horizontally on cards, advance or reverse the scroll smoothly
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 8) {
        window.scrollBy({ top: diffX * 1.3, behavior: "auto" });
        touchStartX = touchX;
        touchStartY = touchY;
      }
    };

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener("touchstart", onTouchStart, { passive: true });
      containerEl.addEventListener("touchmove", onTouchMove, { passive: true });
    }

    // Initial run
    handleScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (containerEl) {
        containerEl.removeEventListener("touchstart", onTouchStart);
        containerEl.removeEventListener("touchmove", onTouchMove);
      }
    };
  }, [industries.length]);

  return (
    <section
      id="industries"
      data-no-gsap="true"
      className="relative w-full max-w-full overflow-x-clip bg-transparent text-white select-none touch-pan-y"
    >
      {/* Background Cosmic Radial Glows - strictly bounded to prevent horizontal bleed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/3 w-[300px] sm:w-[500px] lg:w-[650px] h-[300px] sm:h-[450px] bg-[#FFD400]/[0.03] blur-[100px] sm:blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[450px] lg:w-[550px] h-[250px] sm:h-[400px] bg-cyan-500/[0.03] blur-[100px] sm:blur-[180px] rounded-full" />
      </div>

      {/* ═══ 1. HEADER (Scrolls naturally up before cards stick) ═══ */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-24 md:pt-28 pb-8 sm:pb-14">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl lg:max-w-4xl min-w-0">
            {heading.badge && (
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
                <span className="w-6 sm:w-10 h-[2px] bg-[#FFD400] shrink-0" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#FFD400] font-mono font-semibold break-words">
                  {heading.badge}
                </span>
              </div>
            )}

            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-[1.15] sm:leading-[1.12] mb-3 sm:mb-4">
              {heading.title}
            </h2>

            {heading.subtitle && (
              <p className="text-sm sm:text-base text-[#FFD400] font-mono tracking-wider uppercase mb-3">
                {heading.subtitle}
              </p>
            )}

            {heading.tagline && (
              <p className="text-xs sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light max-w-2xl">
                {heading.tagline}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ═══ 2. STICKY HORIZONTAL CARDS TRACK ═══ */}
      <div
        ref={containerRef}
        className="relative w-full max-w-full overflow-x-clip h-[240vh] sm:h-[270vh] lg:h-[300vh]"
      >
        <div className="sticky top-[68px] sm:top-[80px] lg:top-[88px] w-full max-w-full h-[calc(100dvh-68px)] sm:h-[calc(100dvh-80px)] lg:h-[calc(100dvh-88px)] flex flex-col justify-between pt-1 pb-3 sm:pt-3 sm:pb-6 overflow-hidden relative z-10">
          
          {/* Subtle Top Status Bar - Responsive & Truncated on Mobile */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 shrink-0 flex items-center justify-between gap-3 mb-2 sm:mb-3 min-w-0">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.1em] sm:tracking-[0.2em] text-neutral-400 min-w-0 truncate">
              <span className="w-2 h-2 rounded-full bg-[#FFD400] shadow-[0_0_8px_#FFD400] animate-pulse shrink-0" />
              <span className="text-white font-medium shrink-0 hidden xs:inline">INDUSTRY VERTICALS</span>
              <span className="text-white font-medium shrink-0 xs:hidden">VERTICALS</span>
              <span className="text-white/20 shrink-0">//</span>
              <span className="text-[#FFD400] truncate">{industries[activeIdx]?.title}</span>
            </div>
            <div className="font-mono text-[10px] sm:text-xs text-[#FFD400] tracking-widest bg-white/[0.04] border border-white/10 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full backdrop-blur-md shrink-0 whitespace-nowrap">
              [0{activeIdx + 1} / 0{industries.length}]
            </div>
          </div>

          {/* Cards Track (Vertically Centered with Clearance so top/bottom borders are never cropped) */}
          <div className="w-full max-w-full flex-1 min-w-0 flex items-center overflow-hidden my-auto py-2 sm:py-4 md:py-6">
            <div
              ref={trackRef}
              className="flex items-stretch gap-4 sm:gap-6 md:gap-8 lg:gap-10 will-change-transform min-w-max"
              style={{ transform: "translate3d(0, 0, 0)" }}
            >
              {industries.map((ind, idx) => {
                const IconComponent = ind.icon;
                const isCurrent = idx === activeIdx;

                return (
                  <div
                    key={ind.id}
                    className={`group shrink-0 w-[290px] xs:w-[320px] sm:w-[360px] md:w-[400px] lg:w-[440px] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isCurrent
                        ? "bg-white/[0.08] border-2 border-[#FFD400]/80 shadow-[0_15px_45px_rgba(255,212,0,0.20)]"
                        : "bg-white/[0.04] border border-white/[0.12] hover:border-white/30 hover:bg-white/[0.06]"
                    } backdrop-blur-md hover:scale-[1.01]`}
                    style={{
                      height: "clamp(380px, 55vh, 490px)",
                    }}
                  >
                    {/* Top: Title & Metric Badge */}
                    <div className="shrink-0 mb-2 sm:mb-3">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-[#FFD400] font-semibold shrink-0">
                          [{ind.number}]
                        </span>
                        <span className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-neutral-400 px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10 truncate">
                          {ind.badge}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-syne)] text-base sm:text-xl md:text-2xl font-bold text-white leading-tight">
                        {ind.title}
                      </h3>
                    </div>

                    {/* Center: Animated GIF-Style Icon with Infinite Animated Fill Border */}
                    <div className="flex-1 flex items-center justify-center py-2 sm:py-3 my-auto">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center select-none bg-[#0d0f17]/95 backdrop-blur-md">
                        
                        {/* 1. Infinite Traveling Laser Stroke Dash (SVG Tracer) */}
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-visible"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id={`beamGrad-${ind.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FFD400" />
                              <stop offset="50%" stopColor="#FFF48F" />
                              <stop offset="100%" stopColor="#FF9900" />
                            </linearGradient>
                            <filter id={`beamGlow-${ind.id}`} x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="2.5" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>
                          {/* Static subtle guide border */}
                          <rect
                            x="1.5"
                            y="1.5"
                            width="97"
                            height="97"
                            rx="16"
                            fill="none"
                            stroke="rgba(255, 212, 0, 0.2)"
                            strokeWidth="1.5"
                          />
                          {/* Infinite traveling laser fill stroke */}
                          <rect
                            x="1.5"
                            y="1.5"
                            width="97"
                            height="97"
                            rx="16"
                            fill="none"
                            stroke={`url(#beamGrad-${ind.id})`}
                            strokeWidth="2.5"
                            strokeDasharray="45 155"
                            className="animate-border-dash"
                            filter={`url(#beamGlow-${ind.id})`}
                          >
                            <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2.8s" repeatCount="indefinite" />
                          </rect>
                        </svg>

                        {/* 2. Infinite Animated Glowing Fill Breath */}
                        <div className="absolute inset-1.5 rounded-xl bg-[radial-gradient(circle_at_center,rgba(255,212,0,0.18)_0%,rgba(255,212,0,0.04)_65%,transparent_85%)] animate-border-fill-pulse pointer-events-none" />

                        {/* 3. Four Corner Cybernetic Accent Markers */}
                        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#FFD400]/70 pointer-events-none rounded-tl-[3px]" />
                        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#FFD400]/70 pointer-events-none rounded-tr-[3px]" />
                        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#FFD400]/70 pointer-events-none rounded-bl-[3px]" />
                        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#FFD400]/70 pointer-events-none rounded-br-[3px]" />

                        {/* 4. Animated Living Icon with Bespoke Motion */}
                        <div className={`relative z-10 flex items-center justify-center ${getIconAnimationClass(ind.title, ind.slug, ind.iconName)}`}>
                          <IconComponent
                            strokeWidth={1.3}
                            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FFD400] transition-all duration-300 group-hover:scale-110 animate-icon-zoom"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom: Description + Explore Link */}
                    <div className="shrink-0 pt-3 space-y-3 sm:space-y-4">
                      <p className="text-xs sm:text-[13px] font-light text-neutral-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {ind.description}
                      </p>

                      {/* Explore CTA & Right Metric */}
                      <div className="flex items-center justify-between gap-3 pt-1.5 pb-0.5">
                        <Link
                          href={`/industries/${ind.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono uppercase tracking-wider border border-[#FFD400] py-2 px-4 sm:py-2.5 sm:px-5 rounded-xl bg-[#FFD400] text-black hover:bg-[#FFD400]/90 hover:shadow-[0_0_20px_rgba(255,212,0,0.4)] transition-all font-bold group-hover:scale-105 shrink-0"
                        >
                          <span>Explore</span>
                          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                        </Link>
                        <span className="font-mono text-xs sm:text-[13px] text-neutral-300 font-medium shrink-0">
                          {ind.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
