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
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MoveRight,
} from "lucide-react";

interface IndustryCardData {
  id: string;
  slug: string;
  number: string;
  title: string;
  metric: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
}

const INDUSTRIES: IndustryCardData[] = [
  {
    id: "fintech",
    slug: "startups-professional-services",
    number: "01",
    title: "FinTech & Banking",
    metric: "$2.4B+ Daily",
    badge: "PCI-DSS LEVEL 1",
    description:
      "Building secure, scalable financial platforms with sub-millisecond algorithmic execution, automated KYC/AML compliance, and biometrically secured multi-sig vaults.",
    icon: Landmark,
  },
  {
    id: "healthcare",
    slug: "healthcare",
    number: "02",
    title: "Healthcare & MedTech",
    metric: "100% HIPAA Safe",
    badge: "FHIR / HL7 READY",
    description:
      "Creating HIPAA-compliant diagnostic workstations synchronizing live biometric telemetry, 3D anatomical digital twins, and clinical AI neural-network anomaly detection.",
    icon: HeartPulse,
  },
  {
    id: "saas",
    slug: "startups-professional-services",
    number: "03",
    title: "Enterprise Cloud SaaS",
    metric: "99.999% SLA Uptime",
    badge: "SOC2 TYPE II",
    description:
      "Autonomous multi-region control planes orchestrating distributed Kubernetes microservices, automated metered billing, and zero-failover database clusters.",
    icon: CloudCog,
  },
  {
    id: "ecommerce",
    slug: "retail-ecommerce",
    number: "04",
    title: "Retail & E-Commerce",
    metric: "+340% ROAS Lift",
    badge: "HEADLESS WEBGL",
    description:
      "Photorealistic 3D spatial web product visualizers featuring cinema-grade GLSL lighting shaders, procedural configurators, and sub-50ms headless checkout.",
    icon: ShoppingBag,
  },
  {
    id: "mobility",
    slug: "manufacturing",
    number: "05",
    title: "Smart Mobility & Aero",
    metric: "60 FPS Digital Twin",
    badge: "LIDAR TELEMETRY",
    description:
      "Connected vehicle command platforms, spatial fleet visualization, and real-time edge telemetry ingestion running high-frequency machine-vision models on CAN-bus data.",
    icon: Car,
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    number: "06",
    title: "Manufacturing & Industrial",
    metric: "38% Downtime Drop",
    badge: "ISO 9001 AUDITED",
    description:
      "End-to-end smart manufacturing ERP uniting IoT shop-floor sensors, automated maintenance dispatch, and real-time supply-chain transparency across departments.",
    icon: Factory,
  },
  {
    id: "education",
    slug: "education",
    number: "07",
    title: "Education & EdTech",
    metric: "4.2x Dwell Time",
    badge: "SCORM / LTI READY",
    description:
      "Transforming learning experiences with interactive WebGL spatial environments, personalized AI tutoring engines, and automated assessment scoring systems.",
    icon: GraduationCap,
  },
  {
    id: "realestate",
    slug: "real-estate",
    number: "08",
    title: "Real Estate & PropTech",
    metric: "72% Faster Lease",
    badge: "BIM / CAD READY",
    description:
      "Revolutionizing property sales and portfolio management with photorealistic virtual walkthroughs, architectural BIM viewers, and automated smart-contract escrow.",
    icon: Building2,
  },
];

export default function IndustriesServedSection() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const container = containerRef.current;
      const track = trackRef.current;
      const rect = container.getBoundingClientRect();

      // Total vertical distance the sticky container remains pinned
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      // When rect.top is 0 or negative, we are inside the pinned scroll area
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Calculate exact horizontal translate required so the last card reaches the view
      const trackScrollWidth = track.scrollWidth;
      const visibleWidth = window.innerWidth;
      const maxTranslate = Math.max(0, trackScrollWidth - visibleWidth + 100);

      // Hardware-accelerated translate3d on the track
      track.style.transform = `translate3d(${-progress * maxTranslate}px, 0, 0)`;

      // Update active card index for counter and controls
      const newIndex = Math.min(
        INDUSTRIES.length - 1,
        Math.floor(progress * INDUSTRIES.length)
      );
      setActiveIdx((prev) => (prev !== newIndex ? newIndex : prev));
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial run
    handleScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const jumpToCard = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const totalScrollable = container.offsetHeight - window.innerHeight;
    const targetProgress = index / (INDUSTRIES.length - 1);
    const containerTop = window.scrollY + container.getBoundingClientRect().top;
    const targetY = containerTop + targetProgress * totalScrollable;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="industries"
      ref={containerRef}
      data-no-gsap="true"
      className="relative w-full bg-transparent text-white select-none"
      style={{ height: "350vh" }}
    >
      {/* Background Cosmic Radial Glows */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[450px] bg-[#FFD400]/[0.03] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[400px] bg-cyan-500/[0.03] blur-[180px] rounded-full pointer-events-none" />

      {/* ── Native Sticky Pinned Viewport Container ── */}
      <div className="sticky top-0 w-full h-[100dvh] flex flex-col justify-between pt-16 sm:pt-20 pb-4 px-4 sm:px-8 lg:px-14 overflow-hidden relative z-10 box-border">

        {/* ═══ HEADER (Cleanly padded below fixed navbar) ═══ */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0 mb-2">
          <div className="max-w-3xl lg:max-w-4xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 sm:w-10 h-[2px] bg-[#FFD400]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#FFD400] font-mono font-semibold">
                DOMAINS WE TRANSFORM // INDUSTRY VERTICALS
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-[1.15] mb-2">
              What Happens BEYOND{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.4)]">
                Your Industry?
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light max-w-2xl line-clamp-2">
              We don&apos;t just build solutions — we transform industries. From
              concept to deployment, our expertise spans the sectors that shape
              tomorrow&apos;s digital landscape.
            </p>
          </div>

          {/* Right Header: Scroll Hint, Step Controls, Counter & All Verticals Link */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-neutral-400 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full">
              <MoveRight className="w-3.5 h-3.5 text-[#FFD400] animate-pulse" />
              <span>Scroll to glide &rarr;</span>
            </div>

            {/* Next / Prev Controls */}
            <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] p-1 rounded-xl">
              <button
                type="button"
                onClick={() => jumpToCard(Math.max(0, activeIdx - 1))}
                disabled={activeIdx === 0}
                aria-label="Previous Industry Card"
                className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-[#FFD400] text-neutral-400 hover:text-black flex items-center justify-center transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  jumpToCard(Math.min(INDUSTRIES.length - 1, activeIdx + 1))
                }
                disabled={activeIdx === INDUSTRIES.length - 1}
                aria-label="Next Industry Card"
                className="w-7 h-7 rounded-lg bg-white/[0.04] hover:bg-[#FFD400] text-neutral-400 hover:text-black flex items-center justify-center transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card Counter */}
            <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-xl">
              <span className="text-sm font-mono font-bold text-[#FFD400]">
                {INDUSTRIES[activeIdx]?.number}
              </span>
              <span className="text-xs font-mono text-neutral-500">/</span>
              <span className="text-xs font-mono text-neutral-400">
                {String(INDUSTRIES.length).padStart(2, "0")}
              </span>
            </div>

            {/* All Verticals Link in Header */}
            <Link
              href="/industries"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#FFD400] hover:text-white transition-colors tracking-wider uppercase ml-1"
            >
              <span>All Verticals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ═══ HORIZONTAL CARD TRACK (Fully visible, plenty of vertical room) ═══ */}
        <div className="w-full flex-1 min-h-0 flex items-center overflow-visible my-auto py-3">
          <div
            ref={trackRef}
            className="flex items-stretch gap-4 sm:gap-6 will-change-transform pl-2 sm:pl-4 pr-10"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            {INDUSTRIES.map((ind, idx) => {
              const IconComponent = ind.icon;
              const isCurrent = idx === activeIdx;

              return (
                <div
                  key={ind.id}
                  className={`shrink-0 w-[270px] sm:w-[310px] md:w-[330px] rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-colors duration-300 border ${
                    isCurrent
                      ? "bg-white/[0.07] border-white/20 shadow-[0_10px_35px_rgba(255,212,0,0.08)]"
                      : "bg-white/[0.03] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.05]"
                  } backdrop-blur-md`}
                  style={{
                    height: "285px",
                  }}
                >
                  {/* Top: Number + Title */}
                  <div className="shrink-0">
                    <div className="flex items-start gap-2.5">
                      <span className="text-2xl sm:text-3xl font-mono font-bold leading-none text-[#FFD400]">
                        {ind.number}
                      </span>
                      <h3 className="font-[family-name:var(--font-syne)] text-base sm:text-xl font-bold text-white leading-snug pt-0.5">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  {/* Center: Large Clean Icon with thin stroke */}
                  <div className="flex-1 min-h-0 flex items-center justify-center py-2">
                    <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <IconComponent
                        strokeWidth={1}
                        className="w-16 h-16 sm:w-24 sm:h-24 text-white/75 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Bottom: Description + Metric + Explore Link */}
                  <div className="shrink-0 pt-1">
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-2.5">
                      {ind.description}
                    </p>

                    

                    {/* Explore CTA */}
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider border border-[#ffd400] p-1 rounded-md px-3 bg-[#ffd400] text-black hover:text-[#FFD400] transition-colors"
                      >
                        <span>Explore</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom spacer for clean margin from the viewport bottom */}
        <div className="h-2 shrink-0" />
      </div>
    </section>
  );
}
