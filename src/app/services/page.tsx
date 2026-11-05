"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Search,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  Zap,
  Code,
  TrendingUp,
  Palette,
  Video,
  Compass,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import ServiceCategoryShowcase from "@/components/ServiceCategoryShowcase";
import ServiceEngagementModels from "@/components/ServiceEngagementModels";
import ServiceCaseStudies from "@/components/ServiceCaseStudies";
import ServiceFaqSection from "@/components/ServiceFaqSection";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";
import { servicesData, ServiceDetail } from "@/data/servicesData";
import ServiceUniverseSection from "@/components/ServiceUniverseSection";

// Helper function to map service IDs to proper category/subcategory URLs
const getServiceUrl = (serviceId: string): string => {
  const serviceUrlMap: Record<string, string> = {
    "web-cloud": "/technology-solution/cloud-infrastructure-devops",
    "ecommerce-platforms": "/technology-solution/ecommerce-platform-engineering",
    "mobile-apps": "/technology-solution/mobile-applications",
    "seo-search": "/digital-marketing/technical-seo-dominance",
    "social-media": "/digital-marketing/social-media-management",
    "brand-identity": "/branding-design/brand-identity-systems",
    "commercial-media": "/media-production/commercial-video-production",
    "dedicated-squads": "/media-production/dedicated-squads",
  };
  
  return serviceUrlMap[serviceId] || `/technology-solution/${serviceId}`;
};

const CATEGORIES = [
  "All",
  "Web & Cloud",
  "Digital Marketing",
  "Design",
  "Social Media",
  "Media",
];

const NAVIGATION_DIVISIONS = [
  { id: "technology-solutions", label: "Technology", num: "01", icon: Code },
  { id: "digital-marketing", label: "Digital Marketing", num: "02", icon: TrendingUp },
  { id: "branding-design", label: "Branding & Design", num: "03", icon: Palette },
  { id: "media-production", label: "Media Production", num: "04", icon: Video },
  { id: "engagement-models", label: "Engagement Models", num: "05", icon: Layers },
  { id: "case-studies", label: "Case Studies", num: "06", icon: Cpu },
  { id: "faqs", label: "FAQs", num: "07", icon: Sparkles },
  { id: "directory", label: "Service Index", num: "08", icon: Compass },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Pre-cache all service card images in browser memory immediately on page mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      servicesData.forEach((service) => {
        if (service.image) {
          const img = new window.Image();
          img.src = service.image;
        }
      });
    }
  }, []);

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      // Category filter
      const matchesCategory =
        activeCategory === "All" ||
        service.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        activeCategory.toLowerCase().includes(service.category.toLowerCase());

      // Search filter
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.highlightText.toLowerCase().includes(query) ||
        service.tagline.toLowerCase().includes(query) ||
        service.specs.some((spec) => spec.toLowerCase().includes(query)) ||
        service.techStack.some((t) => t.name.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative min-h-screen bg-transparent text-white selection:bg-[#FFD400] selection:text-black">
      {/* Background Starfield Canvas */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* =========================================================================
          2.1 SERVICES HERO: Page Banner & Capabilities Overview
          ========================================================================= */}
      <PageBanner
        title="INTEGRATED CAPABILITIES"
        breadcrumb="SERVICES"
        imageSrc="/NewBanner/our ecocystem banner.png"
      />

      <main className="relative z-20 w-full mt-[50px]   shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
       {/* Section 2.1: Capabilities Overview Header & Live Metrics */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2.1 SERVICES HERO // INTEGRATED CAPABILITIES MATRIX</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.02] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                HIGH-PERFORMANCE  &amp;{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.45)]">
                 ENGINEERING
                </span>
              </h1>
              <p className="text-sm sm:text-base font-normal max-w-2xl mt-4 leading-relaxed text-neutral-300">
                RnD combines full-stack cloud engineering, algorithmic digital marketing, spatial brand identities, and cinema-grade media production into a unified delivery engine.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/contact-us?intent=consultation" prefetch={false} className="inline-block">
                <div className="group relative inline-flex items-center justify-between rounded-full overflow-hidden bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)] transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] cursor-pointer select-none px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm gap-3 sm:gap-4">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />
                  <div className="flex items-center space-x-3 relative z-10">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                    <span className="font-mono font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap text-white group-hover:text-[#FFD400]">
                      BOOK ARCHITECT CALL
                    </span>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0 ml-2 shadow-inner relative z-10">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

       
        </section>
       {/* =========================================================================
            SECTIONS 2.3 - 2.6: THE FOUR MAIN SERVICE DIVISIONS SHOWCASE
            2.3 Technology Solutions
            2.4 Digital Marketing
            2.5 Branding & Design
            2.6 Media Production
            ========================================================================= */}
        <ServiceCategoryShowcase />

       

        {/* =========================================================================
            2.2 SERVICE CATEGORY NAVIGATION: Sticky / Fast Jump Navigation Bar
            ========================================================================= */}
        <ServiceUniverseSection />

       

        {/* =========================================================================
            SECTION 2.7: ENGAGEMENT MODELS
            Project-based work, retainers or dedicated teams
            ========================================================================= */}
        {/* <ServiceEngagementModels /> */}

        {/* =========================================================================
            SECTION 2.8: RELATED CASE STUDIES
            Relevant work for each service category
            ========================================================================= */}
        {/* <ServiceCaseStudies /> */}

        {/* =========================================================================
            INTERACTIVE SERVICE SEARCH & FULL BENTO DIRECTORY GRID
            ========================================================================= */}
       

        {/* =========================================================================
            SECTION 2.9: FREQUENTLY ASKED QUESTIONS (FAQS)
            Common service questions
            ========================================================================= */}
        <ServiceFaqSection />

        {/* =========================================================================
            SECTION 2.10: CONVERSION CTA
            Request a quotation or consultation
            ========================================================================= */}
        <ServiceConversionCTA />
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
