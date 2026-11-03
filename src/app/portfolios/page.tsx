"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Video,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import {
  portfolioData,
  PORTFOLIO_CATEGORIES,
  PortfolioCategory,
} from "@/data/portfolioData";
import PageBanner from "@/components/PageBanner";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";

// Category metadata with icons and descriptions
const CATEGORY_META: Record<
  PortfolioCategory,
  {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    gradient: string;
    image: string;
  }
> = {
  "Website & Web Application Projects": {
    title: "Website & Web Applications",
    description: "Custom web platforms, SaaS applications, and enterprise solutions built with cutting-edge technologies.",
    icon: <Globe className="w-8 h-8" />,
    color: "#FFD400",
    gradient: "from-[#FFD400]/20 to-[#FFD400]/5",
    image: "/banner/service.png",
  },
  "Mobile App Projects": {
    title: "Mobile Applications",
    description: "Native iOS, Android, and cross-platform mobile solutions with seamless user experiences.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "#00D4FF",
    gradient: "from-[#00D4FF]/20 to-[#00D4FF]/5",
    image: "/banner/technology.png",
  },
  "Digital Marketing Projects": {
    title: "Digital Marketing",
    description: "Data-driven campaigns, SEO strategies, and growth engineering that maximize ROI.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "#FF6B35",
    gradient: "from-[#FF6B35]/20 to-[#FF6B35]/5",
    image: "/banner/digital-marketing.png",
  },
  "Branding & Graphic Design": {
    title: "Branding & Design",
    description: "Complete brand identities, visual systems, and design that tells your story.",
    icon: <Palette className="w-8 h-8" />,
    color: "#9D4EDD",
    gradient: "from-[#9D4EDD]/20 to-[#9D4EDD]/5",
    image: "/banner/branding-design.png",
  },
  "Videography & Photography": {
    title: "Videography & Photography",
    description: "Cinematic video production and commercial photography that captivates audiences.",
    icon: <Video className="w-8 h-8" />,
    color: "#F72585",
    gradient: "from-[#F72585]/20 to-[#F72585]/5",
    image: "/banner/media-production.png",
  },
};

export default function PortfoliosPage() {
  // Calculate project counts per category
  const categoryCounts = PORTFOLIO_CATEGORIES.reduce((acc, category) => {
    acc[category] = portfolioData.filter(
      (p) => p.category === category && p.published
    ).length;
    return acc;
  }, {} as Record<PortfolioCategory, number>);

  const totalProjects = portfolioData.filter((p) => p.published).length;

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      {/* Background Starfield Canvas */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Banner */}
      <PageBanner title="PORTFOLIO ARCHIVE" breadcrumb="PORTFOLIOS" imageSrc="/banner/portfolio.png" />

      {/* Main Content Area */}
      <main className="relative z-20 w-full mt-12.5 rounded-t-4xl sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Top Header Section */}
        <section className="bg-black w-full px-4 sm:px-8 lg:px-12 pt-14 pb-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PORTFOLIO CATEGORIES // EXPLORE BY EXPERTISE</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.02] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
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
                  <div className="text-3xl font-bold text-[#FFD400] mb-1">
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

        {/* Categories Grid Section */}
        <section className="relative py-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-4 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
                <Layers className="w-4 h-4" />
                <span>Choose a Category</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Our Service Categories
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
                Click on any category to explore our work in that domain
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {PORTFOLIO_CATEGORIES.map((category) => {
                const meta = CATEGORY_META[category];
                const count = categoryCounts[category];
                const categorySlug = category
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/&/g, "and");

                return (
                  <Link
                    key={category}
                    href={`/portfolio/${categorySlug}`}
                    className="group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl p-8 min-h-80 flex flex-col"
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${meta.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                        style={{
                          backgroundColor: `${meta.color}20`,
                          border: `2px solid ${meta.color}40`,
                        }}
                      >
                        <div style={{ color: meta.color }}>{meta.icon}</div>
                      </div>

                      {/* Category Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFD400] transition-colors">
                        {meta.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-neutral-300 leading-relaxed mb-6 flex-1">
                        {meta.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{
                              backgroundColor: `${meta.color}30`,
                              color: meta.color,
                            }}
                          >
                            {count}
                          </div>
                          <span className="text-xs text-neutral-400 font-mono">
                            Projects
                          </span>
                        </div>

                        {/* Arrow */}
                        <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
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
