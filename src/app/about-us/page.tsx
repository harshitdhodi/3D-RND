"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";
import PageBanner from "@/components/PageBanner";
import AboutRocketScrollBanner from "@/components/AboutRocketScrollBanner";
import ConstellationMissionVision from "@/components/ConstellationMissionVision";
import {
  Play,
  ArrowUpRight,
  ArrowDown,
  Menu,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  Palette,
  Camera,
  CheckCircle2,
  Zap,
  Code2,
  BarChart3,
  Film,
  LucideIcon,
} from "lucide-react";
import WhyChooseSection from "@/components/WhyChooseSection";
import CosmicProcessSection from "@/components/CosmicProcessSection";
import TeamCultureSection from "@/components/TeamCultureSection";
import {
  getAboutHeroData,
  getAboutMissionVisionData,
  getAboutPillarsData,
  getAboutOverviewCtaData,
  DEFAULT_ABOUT_HERO,
  DEFAULT_MISSION_VISION,
  DEFAULT_PILLARS,
  DEFAULT_OVERVIEW_CTA,
  AboutHeroData,
  AboutMissionVisionData,
  AboutPillarItem,
  AboutOverviewCtaData,
} from "@/lib/getAboutPageData";

const PILLAR_ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Cpu,
  BarChart3,
  TrendingUp,
  Palette,
  Film,
  Camera,
};

export default function AboutUsPage() {
  const [isPlayingShowreel, setIsPlayingShowreel] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  // Dynamic Backend State with Instant Default Fallbacks
  const [aboutHero, setAboutHero] = useState<AboutHeroData>(DEFAULT_ABOUT_HERO);
  const [aboutMissionVision, setAboutMissionVision] = useState<AboutMissionVisionData>(DEFAULT_MISSION_VISION);
  const [aboutPillars, setAboutPillars] = useState<AboutPillarItem[]>(DEFAULT_PILLARS);
  const [aboutOverviewCta, setAboutOverviewCta] = useState<AboutOverviewCtaData>(DEFAULT_OVERVIEW_CTA);

  useEffect(() => {
    getAboutHeroData().then(setAboutHero);
    getAboutMissionVisionData().then(setAboutMissionVision);
    getAboutPillarsData().then(setAboutPillars);
    getAboutOverviewCtaData().then(setAboutOverviewCta);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Who We Are Sticky Overview Card Entrance
      gsap.fromTo(
        ".about-who-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-who-card",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Core Disciplines / Pillars Cards Staggered Reveal
      gsap.fromTo(
        ".about-pillar-card",
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.16,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#pillars",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Ambient Architectural Circuit SVGs Parallax Float
      gsap.to(".about-blueprint-svg", {
        y: -40,
        rotate: 3,
        ease: "none",
        scrollTrigger: {
          trigger: "#pillars",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".about-circuit-svg", {
        y: 35,
        ease: "none",
        scrollTrigger: {
          trigger: "#pillars",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // 4. Partnership CTA Card Reveal
      gsap.fromTo(
        ".about-cta-card",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-cta-card",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    "VIDEO",
    "3D",
    "UX/UI",
    "SEO",
    "WEBDESIGN",
    "BRANDING",
    "PRINT",
    "AI SYSTEMS",
    "VIDEO",
    "3D",
    "UX/UI",
    "SEO",
    "WEBDESIGN",
    "BRANDING",
    "PRINT",
  ];

  const agencyPillars = [
    {
      number: "01",
      title: "TECHNOLOGY SOLUTIONS",
      icon: Cpu,
      desc: "From responsive websites and mobile applications to custom software and eCommerce platforms, we build digital solutions designed to simplify operations and support business growth.",
      tag: "TECHNOLOGY",
      features: ["WebDevelopment", "MobileApps", "CustomSoftware", "Ecommerce"],
      image: "/images/service_webdev.jpg",
    },
    {
      number: "02",
      title: "DIGITAL MARKETING",
      icon: TrendingUp,
      desc: "We help brands build visibility, reach the right audiences and generate opportunities through SEO, social media marketing, paid advertising and strategic content.",
      tag: "PERFORMANCE",
      features: ["SEO", "SocialMedia", "PaidAdvertising", "ContentMarketing"],
      image: "/images/service_marketing.jpg",
    },
    {
      number: "03",
      title: "BRANDING & DESIGN",
      icon: Palette,
      desc: "We create distinctive brand identities and compelling visual experiences through graphic design, logo creation and marketing collateral that make brands memorable.",
      tag: "CREATIVE",
      features: ["BrandIdentity", "GraphicDesign", "LogoDesign", "CreativeDesign"],
      image: "/images/service_branding.jpg",
    },
    {
      number: "04",
      title: "MEDIA PRODUCTION",
      icon: Camera,
      desc: "We transform ideas into engaging visual stories through professional photography, videography, video editing and creative production.",
      tag: "STORYTELLING",
      features: ["Videography", "Photography", "VideoProduction", "CreativeContent"],
      image: "/images/service_media.jpg",
    },
  ];

  return (
    <div ref={pageRef} className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      {/* Background Starfield */}
      <SpaceBackground />

      {/* Vibrant Ambient Edge Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-48 w-96 h-[600px] bg-[#FFD400]/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 -right-48 w-96 h-[600px] bg-[#FFD400]/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-60 bg-[#FFD400]/8 rounded-full blur-[140px]" />
      </div>

      {/* Global Navbar */}
      <Navbar />

      {/* Standard Page Banner matching Career & Service page size & animation */}
      <PageBanner
        title={aboutHero.banner_title || "ABOUT RND"}
        breadcrumb={aboutHero.banner_breadcrumb || "ABOUT US"}
        imageSrc={aboutHero.banner_image || "/NewBanner/about.png"}
      />

      {/* Dynamic Rocket Scroll Experience (Below Banner) */}
      <AboutRocketScrollBanner data={aboutHero} />

      {/* =========================================================================
          POST-BANNER OVERLAPPING CONTENT SECTION
          - Overlaps the frozen rocket banner section via -mt-[100vh]
          - Pinned at z-30 with dark background, rounded top, top border & deep shadow
          ========================================================================= */}
      <div className="relative z-30 mt-0 lg:-mt-[100vh] min-h-screen bg-[#050608] text-white pt-[50px] pb-[50px] shadow-[0_-50px_140px_rgba(0,0,0,0.99)] border-t border-white/[0.08] rounded-t-[36px] sm:rounded-t-[48px]" suppressHydrationWarning>
        {/* Subtle Ambient Top Border Glow */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FFD400]/6 blur-[160px] rounded-full pointer-events-none" /> */}

        <main className="relative z-10 w-full">
          {/* =========================================================================
              CONCEPT 2: THE "CONSTELLATION / ORBITAL" STORYBOARD
              - Full-width immersive section with sticky telemetry sidebar & floating canvas
              - Vision as the Core Sun (North Star with soft radial glow)
              - Mission as the Trajectory (dynamic connecting bridge line)
              - Core Values as Orbiting Nodes (interactive planetary pills & glassmorphism cards)
              ========================================================================= */}
          <ConstellationMissionVision data={aboutMissionVision} className="py-[50px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* =========================================================================
                3. INTEGRATED CORE AGENCY DISCIPLINES
                - Left: Sticky Agency Overview & Capabilities Checklist (4 cols)
                - Right: Expanded Single-Column Multi-Row Cards ending aligned with Navbar Button (8 cols)
                - Background: Cyber Architectural & Circuit SVGs with Soft Radial Flares
                ========================================================================= */}
        <section id="pillars" className="py-[50px] relative">
          {/* Background Architectural & Circuit SVGs */}
          <div className="absolute inset-0 pointer-events-none select-none -z-10 overflow-hidden">
            {/* Tech Blueprint Grid SVG (Top Right) */}
            <svg className="about-blueprint-svg absolute -top-10 -right-10 w-[550px] h-[550px] opacity-15 will-change-transform" viewBox="0 0 600 600" fill="none">
              <defs>
                <pattern id="pillar-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFD400" strokeWidth="0.5" strokeOpacity="0.4" />
                  <circle cx="40" cy="40" r="1" fill="#FFD400" fillOpacity="0.6" />
                </pattern>
              </defs>
              <rect width="600" height="600" fill="url(#pillar-grid)" />
              <circle cx="300" cy="300" r="180" stroke="#FFD400" strokeWidth="1" strokeDasharray="6 8" strokeOpacity="0.3" />
              <circle cx="300" cy="300" r="260" stroke="#FFD400" strokeWidth="0.75" strokeOpacity="0.15" />
              <line x1="300" y1="0" x2="300" y2="600" stroke="#FFD400" strokeWidth="0.5" strokeDasharray="4 6" strokeOpacity="0.2" />
              <line x1="0" y1="300" x2="600" y2="300" stroke="#FFD400" strokeWidth="0.5" strokeDasharray="4 6" strokeOpacity="0.2" />
            </svg>

            {/* Circuit Track Vectors (Bottom Left) */}
            <svg className="about-circuit-svg absolute -bottom-16 -left-16 w-[520px] h-[520px] opacity-15 will-change-transform" viewBox="0 0 500 500" fill="none">
              <path d="M 40 460 L 140 460 L 210 390 L 340 390 L 390 340 L 480 340" stroke="#FFD400" strokeWidth="1.5" strokeDasharray="8 6" strokeOpacity="0.5" />
              <path d="M 70 490 L 170 490 L 240 420 L 370 420 L 430 360 L 500 360" stroke="#FFD400" strokeWidth="1" strokeOpacity="0.3" />
              <circle cx="210" cy="390" r="4" fill="#FFD400" />
              <circle cx="340" cy="390" r="3" fill="#FFD400" />
              <circle cx="390" cy="340" r="4" fill="#FFD400" />
              <circle cx="170" cy="490" r="3" fill="#FFD400" />
              <circle cx="240" cy="420" r="4" fill="#FFD400" />
            </svg>

            {/* Ambient Radial Nebula Glows */}
            <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-[#FFD400]/8 rounded-full blur-[140px]" />
            <div className="absolute bottom-1/4 -right-20 w-[420px] h-[420px] bg-[#FFD400]/6 rounded-full blur-[140px]" />
          </div>

          {/* Grid: Sticky Left Overview (4 cols) + Expanded Scrolling Right Column (8 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Left Column: Sticky Overview & Capabilities (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 z-20 self-start">
              <div className="about-who-card rounded-[32px] border border-white/10 hover:border-[#FFD400]/50 bg-[#0d0e13]/90 backdrop-blur-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,212,0,0.15)]">
                {/* Ambient subtle glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFD400]/10 rounded-full blur-[50px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                {/* Hover Shimmer Light Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD400]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#FFD400] uppercase mb-4 bg-[#FFD400]/10 border border-[#FFD400]/30 shadow-[0_0_20px_rgba(255,212,0,0.15)] group-hover:border-[#FFD400]/60 transition-colors relative z-10">
                  <Layers className="w-3.5 h-3.5 animate-pulse" />
                  <span>{aboutOverviewCta.difference_badge || "◈ THE RND DIFFERENCE"}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-archia-local)] font-bold uppercase tracking-tight text-white mb-4 leading-tight relative z-10">
                  {aboutOverviewCta.difference_title_1 || "WHERE TECHNOLOGY"}
                  <br />
                  <span className="bg-gradient-to-r from-white via-[#ffe34d] to-[#FFD400] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,212,0,0.25)]">
                    {aboutOverviewCta.difference_title_highlight || "MEETS CREATIVITY."}
                  </span>
                  <br />
                  {aboutOverviewCta.difference_title_2 || "WHERE IDEAS BECOME IMPACT."}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6 relative z-10">
                  {aboutOverviewCta.difference_desc}
                </p>

                <div className="pt-2 relative z-10">
                  <CyberButton href={aboutOverviewCta.difference_cta_link || "/contact-us"} variant="gold" size="md" fullWidth>
                    {aboutOverviewCta.difference_cta_text || "EXPLORE OUR CAPABILITIES →"}
                  </CyberButton>
                </div>
              </div>
            </div>

            {/* Right Column: Expanded Single Column Multi-Row Cards (8 cols) */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              {aboutPillars.map((pillar, idx) => {
                const Icon = PILLAR_ICON_MAP[pillar.icon_name] || Cpu;
                return (
                  <div
                    key={pillar.id || idx}
                    className="about-pillar-card rounded-[28px] border border-white/10 hover:border-[#FFD400]/70 bg-[#0d0e13]/90 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 group shadow-xl hover:shadow-[0_0_45px_rgba(255,212,0,0.22)] flex flex-col md:flex-row items-stretch relative"
                  >
                    {/* Hover Light Sweep Beam */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD400]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-20" />

                    {/* Left Card Content (50% width on desktop) */}
                    <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between relative z-10">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-11 h-11 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black transition-all group-hover:scale-110 group-hover:rotate-6 shrink-0 shadow-[0_0_15px_rgba(255,212,0,0.15)]">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono tracking-widest text-[#FFD400] font-bold uppercase px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 group-hover:border-[#FFD400]/40 transition-colors">
                            {pillar.number} {"//"} {pillar.tag}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-archia-local)] font-bold uppercase text-white mb-2 group-hover:text-[#FFD400] transition-colors leading-snug">
                          {pillar.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-4">
                          {pillar.desc}
                        </p>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {pillar.features.map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/5 group-hover:border-[#FFD400]/30 group-hover:text-white transition-colors"
                            >
                              #{feat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 mt-5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-[#FFD400] uppercase font-bold tracking-wider">
                          EXPLORE ↗
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FFD400] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Center to Right Side Image Showcase (50% width on desktop) */}
                    <div className="relative md:w-1/2 min-h-[240px] md:min-h-auto overflow-hidden rounded-2xl md:rounded-r-[26px] md:rounded-l-none m-3 md:m-0 border border-white/10 md:border-0 md:border-l md:border-white/10 group-hover:border-[#FFD400]/40 transition-colors">
                      {/* Gradient Mask: Fades smoothly from center/left into image */}
                      <div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-r from-[#0d0e13] via-[#0d0e13]/30 to-transparent pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />

                      {/* Image with zoom and color transition on hover */}
                      <Image
                        src={pillar.image}
                        alt={pillar.altname || pillar.title}
                        title={pillar.imgtitle || pillar.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 opacity-65 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-0.5 transition-all duration-700 ease-out"
                      />

                      {/* Hover Overlay Tag */}
                      <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono text-white/70 group-hover:text-[#FFD400] group-hover:border-[#FFD400]/40 uppercase tracking-widest transition-colors shadow-lg">
                        DISCIPLINE {"//"} PREVIEW
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
        </div>

        {/* 4. Cosmic Process Section */}
        <CosmicProcessSection className="py-[50px]" />

        {/* 5. Team & Culture Section */}
        <TeamCultureSection className="py-[50px]" />

        {/* 6. Why Choose RnD Section */}
        <WhyChooseSection className="py-[50px]" />

        {/* 7. Partnership CTA */}
        <section className="py-[50px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="about-cta-card rounded-[28px] border border-[#FFD400]/30 bg-gradient-to-r from-[#12141c] via-[#090a0f] to-[#12141c] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_50px_rgba(255,212,0,0.1)]">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFD400] uppercase block mb-1">
                  {aboutOverviewCta.cta_badge || "READY FOR WHAT'S NEXT?"}
                </span>
                <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-archia-local)] font-bold uppercase text-white tracking-tight">
                  {aboutOverviewCta.cta_title || "GREAT IDEAS DESERVE GREAT PARTNERS."}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 max-w-xl leading-relaxed">
                  {aboutOverviewCta.cta_desc}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <CyberButton href={aboutOverviewCta.cta_button_link || "/contact-us"} variant="gold" size="md">
                  {aboutOverviewCta.cta_button_text || "INITIATE PARTNERSHIP"}
                </CyberButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
      {/* Showreel Modal */}
      {isPlayingShowreel && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsPlayingShowreel(false)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <div className="relative aspect-video">
              <video
                src="/hero.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <RnDFooter />
    </div>
  );
}
