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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const container = containerRef.current;
      const track = trackRef.current;
      const rect = container.getBoundingClientRect();

      // Pinned offset (top distance where sticky starts pinning below fixed navbar)
      const stickyTopOffset = window.innerWidth >= 768 ? 96 : 80;

      // Total vertical distance the sticky container remains pinned
      const totalScrollable = container.offsetHeight - window.innerHeight + stickyTopOffset;
      if (totalScrollable <= 0) return;

      const scrolled = stickyTopOffset - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Measure exact Logo starting X position on screen
      let logoLeft = 16;
      if (headerRef.current) {
        logoLeft = headerRef.current.getBoundingClientRect().left;
      } else {
        const pad = window.innerWidth >= 1024 ? 48 : window.innerWidth >= 768 ? 32 : window.innerWidth >= 640 ? 24 : 12;
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

  return (
    <section
      id="industries"
      ref={containerRef}
      data-no-gsap="true"
      className="relative w-full bg-transparent text-white select-none"
      style={{ height: "300vh" }}
    >
      {/* Background Cosmic Radial Glows */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[450px] bg-[#FFD400]/[0.03] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[400px] bg-cyan-500/[0.03] blur-[180px] rounded-full pointer-events-none" />

      {/* ═══ PINNED VIEWPORT (Header + Full-width Screen Track) ═══ */}
      <div className="sticky top-[80px] md:top-[96px] w-full h-[calc(100dvh-80px)] md:h-[calc(100dvh-96px)] flex flex-col justify-between pt-3 sm:pt-4 md:pt-6 pb-4 sm:pb-6 overflow-hidden relative z-10 box-border">
        {/* ═══ 1. HEADER (Aligned with Navbar Logo starting point) ═══ */}
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12 shrink-0">
          <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-3xl lg:max-w-4xl">
              <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
                <span className="w-8 sm:w-10 h-[2px] bg-[#FFD400]" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#FFD400] font-mono font-semibold">
                  DOMAINS WE TRANSFORM // INDUSTRY VERTICALS
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-[1.15] mb-2 sm:mb-3">
                What Happens BEYOND{" "}
                <br className="hidden sm:inline" />
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.4)]">
                  Your Industry?
                </span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-light max-w-2xl">
                We don&apos;t just build solutions — we transform industries. From
                concept to deployment, our expertise spans the sectors that shape
                tomorrow&apos;s digital landscape.
              </p>
            </div>
          </div>
        </div>

        {/* ═══ 2. FULL-WIDTH HORIZONTAL CARDS TRACK ═══ */}
        {/* Takes full screen width: cards scroll across the whole screen from edge to edge */}
        <div className="w-full flex-1 min-h-0 flex items-center overflow-hidden my-auto">
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 sm:gap-8 md:gap-10 will-change-transform"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            {INDUSTRIES.map((ind, idx) => {
              const IconComponent = ind.icon;
              const isCurrent = idx === activeIdx;

              return (
                <div
                  key={ind.id}
                  className={`group shrink-0 w-[310px] sm:w-[370px] md:w-[410px] lg:w-[450px] rounded-3xl p-5 sm:p-6 md:p-7 flex flex-col justify-between transition-all duration-300 border ${
                    isCurrent
                      ? "bg-white/[0.08] border-[#FFD400]/40 shadow-[0_20px_60px_rgba(255,212,0,0.18)]"
                      : "bg-white/[0.04] border-white/[0.10] hover:border-white/25 hover:bg-white/[0.06]"
                  } backdrop-blur-md hover:scale-[1.01]`}
                  style={{
                    height: "clamp(320px, 47vh, 420px)",
                  }}
                >
                  {/* Top: Title */}
                  <div className="shrink-0 mb-1">
                    <h3 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                      {ind.title}
                    </h3>
                  </div>

                  {/* Center: Clean Icon with generous breathing room */}
                  <div className="flex-1 min-h-[70px] flex items-center justify-center py-2 sm:py-4 my-1">
                    <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <IconComponent
                        strokeWidth={1.25}
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white/70 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Bottom: Description + Explore Link */}
                  <div className="shrink-0 pt-2 sm:pt-3 space-y-3">
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed min-h-[44px] line-clamp-3">
                      {ind.description}
                    </p>

                    {/* Explore CTA */}
                    <div className="flex items-center justify-between pt-1">
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono uppercase tracking-wider border border-[#FFD400] py-1.5 px-4 rounded-lg bg-[#FFD400] text-black hover:bg-[#FFD400]/90 hover:shadow-[0_0_20px_rgba(255,212,0,0.4)] transition-all font-bold group-hover:scale-105"
                      >
                        <span>Explore</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
