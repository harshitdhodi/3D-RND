"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Palette,
  Video,
  Layers,
  Cpu,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import {
  portfolioData,
  PORTFOLIO_CATEGORIES,
  PortfolioCategory,
} from "@/data/portfolioData";
import PageBanner from "@/components/PageBanner";
import CyberButton from "@/components/CyberButton";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";

export default function PortfoliosPage() {
  const sectionRef = useRef<HTMLElement>(null);

  // Calculate project counts per category
  const categoryCounts = PORTFOLIO_CATEGORIES.reduce((acc, category) => {
    acc[category] = portfolioData.filter(
      (p) => p.category === category && p.published
    ).length;
    return acc;
  }, {} as Record<PortfolioCategory, number>);

  const totalProjects = portfolioData.filter((p) => p.published).length;

  const agencyPillars = [
    {
      number: "01",
      tag: "TECHNOLOGY",
      title: "TECHNOLOGY SOLUTIONS",
      icon: Cpu,
      desc: "From responsive websites and mobile applications to custom software and eCommerce platforms, we build digital solutions designed to simplify operations and support business growth.",
      features: ["WebDevelopment", "MobileApps", "CustomSoftware", "Ecommerce"],
      image: "/images/weddev.png",
      href: "/portfolio/website-and-web-application-projects",
      count:
        (categoryCounts["Website & Web Application Projects"] || 0) +
        (categoryCounts["Mobile App Projects"] || 0),
    },
    {
      number: "02",
      tag: "PERFORMANCE",
      title: "DIGITAL MARKETING",
      icon: TrendingUp,
      desc: "We help brands build visibility, reach the right audiences and generate opportunities through SEO, social media marketing, paid advertising and strategic content.",
      features: ["SEO", "SocialMedia", "PaidAdvertising", "ContentMarketing"],
      image: "/images/digi_market.png",
      href: "/portfolio/digital-marketing-projects",
      count: categoryCounts["Digital Marketing Projects"] || 0,
    },
    {
      number: "03",
      tag: "CREATIVE",
      title: "BRANDING & DESIGN",
      icon: Palette,
      desc: "We create distinctive brand identities and compelling visual experiences through graphic design, logo creation and marketing collateral that make brands memorable.",
      features: ["BrandIdentity", "GraphicDesign", "LogoDesign", "CreativeDesign"],
      image: "/images/social.png",
      href: "/portfolio/branding-and-graphic-design",
      count: categoryCounts["Branding & Graphic Design"] || 0,
    },
    {
      number: "04",
      tag: "STORYTELLING",
      title: "MEDIA PRODUCTION",
      icon: Video,
      desc: "We transform ideas into engaging visual stories through professional photography, videography, video editing and creative production.",
      features: ["CommercialVideo", "Videography", "MotionGraphics", "BrandFilms"],
      image: "/images/agency_team_studio.jpg",
      href: "/portfolio/videography-and-photography",
      count: categoryCounts["Videography & Photography"] || 0,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Who We Are Sticky Overview Card Entrance
      gsap.fromTo(
        ".portfolio-who-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-who-card",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Core Disciplines / Pillars Cards Staggered Reveal
      gsap.fromTo(
        ".portfolio-pillar-card",
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.16,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#disciplines-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Ambient Architectural Circuit SVGs Parallax Float
      gsap.to(".portfolio-blueprint-svg", {
        y: -40,
        rotate: 3,
        ease: "none",
        scrollTrigger: {
          trigger: "#disciplines-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".portfolio-circuit-svg", {
        y: 35,
        ease: "none",
        scrollTrigger: {
          trigger: "#disciplines-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      {/* Background Starfield Canvas */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Banner */}
      <PageBanner
        title="PORTFOLIO ARCHIVE"
        breadcrumb="PORTFOLIOS"
        imageSrc="/NewBanner/protfolio page banner.png"
      />

      {/* Main Content Area */}
      <main className="relative z-20 w-full mt-12.5 rounded-t-4xl sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]">
        {/* Top Header Section */}
        <section className="bg-black w-full px-4 sm:px-8 lg:px-12 pt-14 pb-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PORTFOLIO CATEGORIES // EXPLORE BY EXPERTISE</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-archia-local)] font-bold tracking-tight uppercase leading-[1.02] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                  Explore Our{" "}
                  <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.45)]">
                    Expertise
                  </span>
                </h1>
                <p className="text-sm sm:text-base font-normal max-w-2xl mt-3 leading-relaxed text-neutral-300">
                  Browse our portfolio by category to discover {totalProjects}+ successful projects across web development, mobile apps, marketing, branding, and media production.
                </p>
              </div>

              {/* Header Right: Total Projects Badge */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-[#FFD400] mb-1 font-mono">
                    {totalProjects}+
                  </div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wide font-mono">
                    Total Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTEGRATED CORE AGENCY DISCIPLINES
            - Left: Sticky Agency Overview Card (4 cols) with CyberButton
            - Right: Expanded Single-Column Multi-Row Cards with hover glow & image preview (8 cols)
            - Background: Cyber Architectural & Circuit SVGs with Soft Radial Flares
            ========================================================================= */}
        <section
          id="disciplines-section"
          ref={sectionRef}
          className="py-[50px] relative px-4 sm:px-8 lg:px-12"
        >
          {/* Background Architectural & Circuit SVGs */}
          <div className="absolute inset-0 pointer-events-none select-none -z-10 overflow-hidden">
            {/* Tech Blueprint Grid SVG (Top Right) */}
            <svg
              className="portfolio-blueprint-svg absolute -top-10 -right-10 w-[550px] h-[550px] opacity-15 will-change-transform"
              viewBox="0 0 600 600"
              fill="none"
            >
              <defs>
                <pattern
                  id="portfolio-pillar-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#FFD400"
                    strokeWidth="0.5"
                    strokeOpacity="0.4"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="1"
                    fill="#FFD400"
                    fillOpacity="0.6"
                  />
                </pattern>
              </defs>
              <rect
                width="600"
                height="600"
                fill="url(#portfolio-pillar-grid)"
              />
              <circle
                cx="300"
                cy="300"
                r="180"
                stroke="#FFD400"
                strokeWidth="1"
                strokeDasharray="6 8"
                strokeOpacity="0.3"
              />
              <circle
                cx="300"
                cy="300"
                r="260"
                stroke="#FFD400"
                strokeWidth="0.75"
                strokeOpacity="0.15"
              />
              <line
                x1="300"
                y1="0"
                x2="300"
                y2="600"
                stroke="#FFD400"
                strokeWidth="0.5"
                strokeDasharray="4 6"
                strokeOpacity="0.2"
              />
              <line
                x1="0"
                y1="300"
                x2="600"
                y2="300"
                stroke="#FFD400"
                strokeWidth="0.5"
                strokeDasharray="4 6"
                strokeOpacity="0.2"
              />
            </svg>

            {/* Circuit Track Vectors (Bottom Left) */}
            <svg
              className="portfolio-circuit-svg absolute -bottom-16 -left-16 w-[520px] h-[520px] opacity-15 will-change-transform"
              viewBox="0 0 500 500"
              fill="none"
            >
              <path
                d="M 40 460 L 140 460 L 210 390 L 340 390 L 390 340 L 480 340"
                stroke="#FFD400"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                strokeOpacity="0.5"
              />
              <path
                d="M 70 490 L 170 490 L 240 420 L 370 420 L 430 360 L 500 360"
                stroke="#FFD400"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
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

          <div className="max-w-7xl mx-auto">
            {/* Grid: Sticky Left Overview (4 cols) + Expanded Scrolling Right Column (8 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Sticky Overview & Capabilities (4 cols) */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 z-20 self-start">
                <div className="portfolio-who-card rounded-[32px] border border-white/10 hover:border-[#FFD400]/50 bg-[#0d0e13]/90 backdrop-blur-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,212,0,0.15)]">
                  {/* Ambient subtle glow */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFD400]/10 rounded-full blur-[50px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                  {/* Hover Shimmer Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD400]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#FFD400] uppercase mb-4 bg-[#FFD400]/10 border border-[#FFD400]/30 shadow-[0_0_20px_rgba(255,212,0,0.15)] group-hover:border-[#FFD400]/60 transition-colors relative z-10">
                    <Layers className="w-3.5 h-3.5 animate-pulse" />
                    <span>◈ THE RND DIFFERENCE</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-archia-local)] font-bold uppercase tracking-tight text-white mb-4 leading-tight relative z-10">
                    WHERE TECHNOLOGY
                    <br />
                    <span className="bg-gradient-to-r from-white via-[#ffe34d] to-[#FFD400] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,212,0,0.25)]">
                      MEETS CREATIVITY.
                    </span>
                    <br />
                    WHERE IDEAS BECOME IMPACT.
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6 relative z-10">
                    RND Technosoft brings technology, digital marketing, branding
                    and media production together under one roof. We combine
                    technical expertise, strategic thinking and creative execution
                    to help businesses build stronger brands, smarter digital
                    experiences and meaningful connections with their audiences.
                  </p>

                  <div className="pt-2 relative z-10">
                    <CyberButton
                      href="/#contact"
                      variant="gold"
                      size="md"
                      fullWidth
                    >
                      EXPLORE OUR CAPABILITIES →
                    </CyberButton>
                  </div>
                </div>
              </div>

              {/* Right Column: Expanded Single Column Multi-Row Cards (8 cols) */}
              <div className="lg:col-span-8 flex flex-col space-y-6">
                {agencyPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <Link
                      key={idx}
                      href={pillar.href}
                      className="portfolio-pillar-card rounded-[28px] border border-white/10 hover:border-[#FFD400]/70 bg-[#0d0e13]/90 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 group shadow-xl hover:shadow-[0_0_45px_rgba(255,212,0,0.22)] flex flex-col md:flex-row items-stretch relative block cursor-pointer"
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
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-neutral-400 group-hover:text-white transition-colors">
                              {pillar.count} Projects
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FFD400] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>

                      {/* Center to Right Side Image Showcase (50% width on desktop) */}
                      <div className="relative md:w-1/2 min-h-[240px] md:min-h-auto overflow-hidden rounded-2xl md:rounded-r-[26px] md:rounded-l-none m-3 md:m-0 border border-white/10 md:border-0 md:border-l md:border-white/10 group-hover:border-[#FFD400]/40 transition-colors">
                        {/* Gradient Mask: Fades smoothly from center/left into image */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-r from-[#0d0e13] via-[#0d0e13]/30 to-transparent pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />

                        {/* Image with zoom and color transition on hover */}
                        <Image
                          src={pillar.image}
                          alt={pillar.title}
                          fill
                          className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 opacity-65 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-0.5 transition-all duration-700 ease-out"
                        />

                        {/* Hover Overlay Tag */}
                        <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono text-white/70 group-hover:text-[#FFD400] group-hover:border-[#FFD400]/40 uppercase tracking-widest transition-colors shadow-lg">
                          DISCIPLINE {"//"} PREVIEW
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Conversion CTA Form */}
        <div className="px-4 sm:px-8 lg:px-12 pb-16">
          <div className="max-w-7xl mx-auto">
            <ServiceConversionCTA
              id="portfolio-cta"
              title="Have an Ambitious Project Vision?"
              subtitle="Whether you need a custom web platform, native mobile app, high-converting digital marketing engine, or commercial media production, our engineering directors are ready to scope your build."
              badge="COMMISSION AN ENTERPRISE SYSTEM"
            />
          </div>
        </div>
      </main>

      {/* Global RnD Footer */}
      <RnDFooter />
    </div>
  );
}
