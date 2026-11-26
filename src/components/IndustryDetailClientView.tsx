"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    ArrowUpRight,
    ChevronDown,
    Shield,
    Zap,
    CheckCircle2,
    Building2,
    Briefcase,
    ShoppingBag,
    Sparkles,
    Cpu,
    FileCheck,
    Compass,
    Landmark,
    Layers,
    TrendingUp,
    Quote,
    AlertTriangle,
    Clock,
    AlertOctagon,
    Activity,
    Database,
    Network,
    Code2,
    Film,
    Palette,
    Rocket,
    BarChart3,
    Workflow,
    ShieldAlert,
    Gauge,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import PrintRevealImage from "@/components/PrintRevealImage";
import WaveText from "@/components/WaveText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { IndustryData } from "@/data/industriesData";
import { Industry, IndustryDetail, IndustryConsultationData } from "@/lib/getIndustriesData";
import IndustryConsultationHeading from "@/components/IndustryConsultationHeading";
import IndustryConsultationForm from "@/components/IndustryConsultationForm";

interface IndustryDetailClientViewProps {
    industry: Industry | IndustryData | any;
    nextIndustry: Industry | IndustryData | any;
    industriesList?: string[];
    consultationData?: IndustryConsultationData;
}

export default function IndustryDetailClientView({
    industry,
    nextIndustry,
    industriesList = [],
    consultationData,
}: IndustryDetailClientViewProps) {
    // Accordion state for FAQs
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    // Hovered Service state for list
    const [hoveredServiceIdx, setHoveredServiceIdx] = useState<number | null>(null);


    // Dynamic responsive grid helper based on item count
    // 2 items: 2 columns full width
    // 3 items: 3 columns full width
    // 4 items: 2 columns x 2 rows
    // 5 items: 3 upper, 2 lower (6-col grid: top 3 span 2 cols each, bottom 2 span 3 cols each)
    // 6 items: 3 columns x 2 rows (3x3 grid layout)
    const getResponsiveGridConfig = (count: number) => {
        if (count === 2) {
            return {
                containerClass: "grid grid-cols-1 md:grid-cols-2 gap-6",
                getItemClass: (_idx: number) => "",
            };
        }
        if (count === 3) {
            return {
                containerClass: "grid grid-cols-1 md:grid-cols-3 gap-6",
                getItemClass: (_idx: number) => "",
            };
        }
        if (count === 4) {
            return {
                containerClass: "grid grid-cols-1 md:grid-cols-2 gap-6",
                getItemClass: (_idx: number) => "",
            };
        }
        if (count === 5) {
            return {
                containerClass: "grid grid-cols-1 md:grid-cols-6 gap-6",
                getItemClass: (idx: number) => (idx < 3 ? "md:col-span-2" : "md:col-span-3"),
            };
        }
        if (count >= 6) {
            return {
                containerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                getItemClass: (_idx: number) => "",
            };
        }
        return {
            containerClass: "grid grid-cols-1 md:grid-cols-3 gap-6",
            getItemClass: (_idx: number) => "",
        };
    };

    const getPillarIcon = (iconName: string) => {
        switch (iconName) {
            case "Shield":
                return Shield;
            case "Cpu":
                return Cpu;
            case "FileCheck":
                return FileCheck;
            case "ShoppingBag":
                return ShoppingBag;
            case "TrendingUp":
                return TrendingUp;
            case "Sparkles":
                return Sparkles;
            case "Compass":
                return Compass;
            case "Landmark":
                return Landmark;
            case "Building2":
                return Building2;
            case "Layers":
                return Layers;
            default:
                return Zap;
        }
    };

    const getChallengeIcon = (title: string, index: number) => {
        const t = (title || "").toLowerCase();
        if (t.includes("data") || t.includes("system") || t.includes("disconnect") || t.includes("inventory")) return Database;
        if (t.includes("manual") || t.includes("process") || t.includes("time") || t.includes("workflow")) return Clock;
        if (t.includes("visibility") || t.includes("market") || t.includes("brand") || t.includes("reach")) return TrendingUp;
        if (t.includes("cost") || t.includes("margin") || t.includes("price") || t.includes("revenue") || t.includes("slow")) return Gauge;
        if (t.includes("security") || t.includes("compliance") || t.includes("risk") || t.includes("bottleneck")) return ShieldAlert;
        if (t.includes("patient") || t.includes("customer") || t.includes("guest") || t.includes("student") || t.includes("retention")) return Activity;
        const fallbacks = [AlertOctagon, Network, Cpu, AlertTriangle, Workflow, BarChart3];
        return fallbacks[index % fallbacks.length];
    };

    const getServiceComboIcon = (title: string, badge: string) => {
        const t = `${title || ""} ${badge || ""}`.toLowerCase();
        if (t.includes("web") || t.includes("software") || t.includes("cloud") || t.includes("tech") || t.includes("platform") || t.includes("erp") || t.includes("engineering")) return Code2;
        if (t.includes("marketing") || t.includes("seo") || t.includes("growth") || t.includes("ads") || t.includes("campaign") || t.includes("ppc")) return Rocket;
        if (t.includes("brand") || t.includes("design") || t.includes("identity") || t.includes("ui") || t.includes("ux") || t.includes("creative")) return Palette;
        if (t.includes("media") || t.includes("video") || t.includes("photo") || t.includes("film") || t.includes("content") || t.includes("motion")) return Film;
        return Zap;
    };

    const getServiceComboImage = (title: string, badge: string, index: number) => {
        const t = `${title || ""} ${badge || ""}`.toLowerCase();
        if (t.includes("tech") || t.includes("software") || t.includes("web") || t.includes("cloud") || t.includes("platform") || t.includes("erp") || t.includes("engineering")) {
            return "/RND our expertise/Technology solution.png";
        }
        if (t.includes("market") || t.includes("seo") || t.includes("growth") || t.includes("campaign") || t.includes("acquisition") || t.includes("ads") || t.includes("digital")) {
            return "/RND our expertise/Digital marketing.png";
        }
        if (t.includes("brand") || t.includes("design") || t.includes("identity") || t.includes("packaging") || t.includes("creative") || t.includes("ui") || t.includes("ux")) {
            return "/RND our expertise/Branding and desining.png";
        }
        if (t.includes("media") || t.includes("video") || t.includes("photo") || t.includes("film") || t.includes("storytelling") || t.includes("production")) {
            return "/RND our expertise/Media producttion.png";
        }
        const fallbacks = [
            "/RND our expertise/Technology solution.png",
            "/RND our expertise/Digital marketing.png",
            "/RND our expertise/Branding and desining.png",
            "/RND our expertise/Media producttion.png",
        ];
        return fallbacks[index % fallbacks.length];
    };

    const getSectorMockupImage = (slug?: string, candidateImage?: string) => {
        const staticMap: Record<string, string> = {
            "manufacturing": "/Industries/manufacturing_mockup.png",
            "healthcare": "/Industries/healthcare_mockup.png",
            "food-fmcg": "/Industries/food_mockup.png",
            "retail-ecommerce": "/Industries/retail_mockup.png",
            "hospitality": "/Industries/hospitality_mockup.png",
            "education": "/Industries/education_mockup.png",
        };
        if (candidateImage && candidateImage.startsWith("/Industries/") && !candidateImage.includes("undefined")) {
            return candidateImage;
        }
        const s = (slug || "").toLowerCase();
        for (const [key, path] of Object.entries(staticMap)) {
            if (s.includes(key)) return path;
        }
        if (candidateImage && !candidateImage.startsWith("/uploads/") && candidateImage.trim() !== "") {
            return candidateImage;
        }
        return staticMap[s] || "/Industries/manufacturing_mockup.png";
    };

    const sectorImage = getSectorMockupImage(industry.slug, industry.image);

    return (
        <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-archia">
            <SpaceBackground />
            <Navbar />

            {/* Page Banner with Typewriter Title, Slow Zoom & Parallax */}
            <PageBanner
                title={industry.title}
                breadcrumbs={[
                    { label: "INDUSTRIES", href: "/industries" },
                    { label: industry.title.toUpperCase(), href: `/industries/${industry.slug}` },
                ]}
                imageSrc={
                    (industry as any).banner_image ||
                    (industry as any).bannerImg ||
                    (industry as any).banner ||
                    "/NewBanner/Industry page banner.png"
                }
            />

            {/* Main Content (Directly below banner without overlap) */}
            <main className="relative z-10 w-full">
                {/* =========================================================================
            1. SHORT INFO & ARCHITECTURAL SUMMARY SECTION
            ========================================================================= */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 sm:pt-12 pb-10">
                    <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0c0e14]/70 via-[#121520]/80 to-[#0c0e14]/70 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group">
                        {/* Ambient decorative glowing backdrop orbs */}
                        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD400]/5 rounded-full blur-3xl pointer-events-none -z-10" />
                        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

                        {/* Top Micro-Telemetry Header Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-bold tracking-wider uppercase">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
                                    <span>SECTOR SPEC // {industry.number || "01"}</span>
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono">
                                    {industry.category}
                                </span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                                <span className="text-emerald-400">●</span>
                                <span>ARCHITECTURE: PRODUCTION-VERIFIED</span>
                            </div>
                        </div>

                        {/* Main Split: Text & Metrics on Left, Holographic Device Viewport on Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            {/* Left Column (7 cols): Tagline, Summary & Telemetry Gauges */}
                            <div className="lg:col-span-7 space-y-6">
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-snug">
                                    <WaveText text={industry.tagline} />
                                </h1>

                                <ScrollReveal delay={0.15}>
                                    <div className="border-l-2 border-[#FFD400]/50 pl-4 py-1">
                                        <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                                            {industry.shortInfo}
                                        </p>
                                    </div>
                                </ScrollReveal>

                                {/* Telemetry HUD Metrics Strip */}
                                {industry.heroMetrics && industry.heroMetrics.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                                        {industry.heroMetrics.map((metric: any, mIdx: number) => (
                                            <div
                                                key={mIdx}
                                                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FFD400]/40 transition-all duration-300 flex flex-col justify-between group/metric"
                                            >
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                                                        {metric.label}
                                                    </span>
                                                    <Activity className="w-3.5 h-3.5 text-[#FFD400]/70 group-hover/metric:text-[#FFD400] transition-colors" />
                                                </div>
                                                <div className="font-[family-name:var(--font-syne)] text-sm sm:text-base font-bold text-white group-hover/metric:text-[#FFD400] transition-colors">
                                                    {metric.value}
                                                </div>
                                                <div className="mt-2 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[9px] font-mono text-neutral-500">
                                                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                                                    <span>ACTIVE METRIC</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Right Column (5 cols): Holographic Device Viewport */}
                            <div className="lg:col-span-5 relative">
                                <div className="relative rounded-2xl p-2 bg-gradient-to-b from-white/10 via-white/[0.02] to-transparent border border-white/15 shadow-[0_0_35px_rgba(255,212,0,0.12)] group/mockup overflow-hidden">
                                    {/* Tech corner brackets */}
                                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFD400] z-20 pointer-events-none" />
                                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFD400] z-20 pointer-events-none" />
                                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFD400] z-20 pointer-events-none" />
                                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFD400] z-20 pointer-events-none" />

                                    {/* Top Telemetry HUD Tag */}
                                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-neutral-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>LIVE SECTOR VIEWPORT</span>
                                    </div>

                                    {/* Industry Mockup Image with subtle floating hover */}
                                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/60 flex items-center justify-center">
                                        <Image
                                            src={sectorImage}
                                            alt={industry.title || "Industry Viewport"}
                                            fill
                                            className="object-contain p-2 group-hover/mockup:scale-105 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                            priority
                                        />
                                        {/* Scanline overlay effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
                                    </div>

                                    {/* Bottom Spec Footer on Mockup */}
                                    <div className="mt-2 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                                        <span className="text-[#FFD400] font-semibold">{industry.badge || "ENTERPRISE"}</span>
                                        <span>DEPLOYED ECOSYSTEM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 Core Engineering Pillars - Infographic Capability Pods */}
                        <div className="mt-12 pt-10 border-t border-white/10">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold">
                                        <Zap className="w-3.5 h-3.5 text-[#FFD400]" />
                                        <span>
                                            <WaveText text={industry.pillars_heading || (industry.slug === "healthcare" ? "BUILDING A HEALTHIER DIGITAL ECOSYSTEM." : "CORE ARCHITECTURAL PILLARS")} />
                                        </span>
                                    </div>
                                    {(industry.pillars_description || industry.slug === "healthcare") && (
                                        <ScrollReveal delay={0.15}>
                                            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mt-1.5 max-w-3xl">
                                                {industry.pillars_description || "From patient-facing digital platforms to a stronger healthcare brand, we bring technology and creativity together to help healthcare businesses move forward."}
                                            </p>
                                        </ScrollReveal>
                                    )}
                                </div>
                                <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                                    <span>3-TIER CAPABILITY FRAMEWORK</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {(industry.pillars || []).map((pillar: any, pIdx: number) => {
                                    const IconComponent = getPillarIcon(pillar.icon);
                                    return (
                                        <div
                                            key={pIdx}
                                            className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(255,212,0,0.15)]"
                                        >
                                            {/* Watermark Pillar Number */}
                                            <div className="absolute -top-3 -right-2 text-6xl font-black font-[family-name:var(--font-syne)] text-white/[0.03] group-hover:text-[#FFD400]/10 transition-colors select-none pointer-events-none">
                                                0{pIdx + 1}
                                            </div>

                                            <div className="space-y-4 relative z-10">
                                                <div className="flex items-center justify-between">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD400]/20 to-[#FFD400]/5 border border-[#FFD400]/40 text-[#FFD400] flex items-center justify-center shadow-[0_0_15px_rgba(255,212,0,0.2)] group-hover:scale-110 transition-transform duration-300">
                                                        <IconComponent className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-neutral-400 group-hover:text-[#FFD400] transition-colors">
                                                        PILLAR 0{pIdx + 1}
                                                    </span>
                                                </div>

                                                <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white group-hover:text-[#FFD400] transition-colors uppercase leading-snug">
                                                    {pillar.title}
                                                </h3>

                                                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                                                    {pillar.desc}
                                                </p>
                                            </div>

                                            {/* Bottom Discipline Badge & Animated Expanding Accent Line */}
                                            <div className="pt-4 mt-4 border-t border-white/5 relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                                                <span className="flex items-center gap-1.5 text-neutral-400 group-hover:text-white transition-colors">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400]" />
                                                    <span>CERTIFIED DISCIPLINE</span>
                                                </span>
                                                <span className="text-[#FFD400]/80 font-semibold group-hover:translate-x-1 transition-transform">
                                                    →
                                                </span>
                                            </div>

                                            {/* Hover bottom expanding gold line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>



                {/* =========================================================================
            3. RELEVANT SERVICE COMBINATIONS (Services Split Layout with Hover Reveal)
            ========================================================================= */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/10">
                    {/* Header Row with Title & Tagline */}
                    <div className="max-w-4xl space-y-3 mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-semibold tracking-wider uppercase">
                            <Zap className="w-3.5 h-3.5 text-[#FFD400]" />
                            <span>
                                {industry.solutions_tagline || (industry.slug === "healthcare" ? "OUR SOLUTIONS" : "INTEGRATED SOLUTIONS // INDUSTRY-FOCUSED CAPABILITIES")}
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-snug">
                            <WaveText text={industry.solutions_heading || (industry.slug === "healthcare"
                                ? "TECHNOLOGY AND CREATIVITY, WORKING FOR BETTER HEALTHCARE."
                                : industry.slug === "food-fmcg"
                                    ? "POWERING FOOD & FMCG BRANDS THROUGH DIGITAL INNOVATION."
                                    : industry.slug === "retail-ecommerce"
                                        ? "ENGINEERING BETTER SHOPPING EXPERIENCES. BUILDING STRONGER RETAIL BRANDS."
                                        : industry.slug === "hospitality"
                                            ? "TECHNOLOGY MEETS HOSPITALITY. EXPERIENCES MEET EXPECTATIONS."
                                            : industry.slug === "education"
                                                ? "TECHNOLOGY THAT EMPOWERS LEARNING. CREATIVITY THAT INSPIRES GROWTH."
                                                : "THE RIGHT TECHNOLOGY. THE RIGHT STRATEGY. THE RIGHT IMPACT."
                            )} />
                        </h2>
                        <ScrollReveal delay={0.15}>
                            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
                                {industry.solutions_description || (industry.slug === "healthcare"
                                    ? "We combine digital expertise across four key service areas to help healthcare organisations strengthen their operations, improve communication and build a more effective digital presence."
                                    : industry.slug === "food-fmcg"
                                        ? "From e-commerce platforms to product campaigns, we bring technology and creativity together to help food and FMCG businesses strengthen their digital presence and create meaningful consumer experiences."
                                        : industry.slug === "retail-ecommerce"
                                            ? "We combine e-commerce development, digital marketing, creative design and visual storytelling to help retail businesses create better product experiences, reach relevant customers and build stronger brand connections."
                                            : industry.slug === "hospitality"
                                                ? "From direct booking experiences to destination storytelling, we combine technology and creativity to help hospitality businesses connect with guests and build stronger digital experiences."
                                                : industry.slug === "education"
                                                    ? "From educational websites and learning platforms to student-focused campaigns and institutional branding, we combine technology and creativity to help education businesses move forward."
                                                    : "We bring multiple capabilities together to help manufacturing businesses strengthen their operations, improve digital visibility and build a competitive market presence."
                                )}
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Full-Width Interactive Service List with Hover Image Reveal (Matching Image 3) */}
                    <div className="w-full divide-y divide-white/10">
                        {industry.serviceCombinations?.map((combo: any, sIdx: number) => {
                            const isHovered = hoveredServiceIdx === sIdx;
                            const comboImage = getServiceComboImage(combo.serviceTitle, combo.badge, sIdx);
                            const stepNumber = String(sIdx + 1).padStart(2, "0");

                            return (
                                <div
                                    key={sIdx}
                                    onMouseEnter={() => setHoveredServiceIdx(sIdx)}
                                    onMouseLeave={() => setHoveredServiceIdx(null)}
                                    className={`group relative py-7 sm:py-9 transition-all duration-300 ${isHovered ? "bg-white/[0.03] -mx-4 px-4 sm:-mx-8 sm:px-8 rounded-2xl" : ""
                                        }`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        {/* Left Text Block */}
                                        <div className="flex-1 space-y-2.5 pr-4">
                                            <div className="flex items-baseline gap-4">
                                                <span
                                                    className={`text-sm sm:text-base font-mono font-light tracking-wider transition-colors duration-200 ${isHovered ? "text-[#FFD400]" : "text-neutral-500"
                                                        }`}
                                                >
                                                    {stepNumber} /
                                                </span>
                                                <h3
                                                    className={`font-[family-name:var(--font-syne)] text-xl sm:text-2xl lg:text-3xl font-light uppercase tracking-wide transition-colors duration-200 ${isHovered ? "text-[#FFD400]" : "text-white"
                                                        }`}
                                                >
                                                    {combo.serviceTitle}
                                                </h3>
                                            </div>
                                            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed pl-9 sm:pl-11 max-w-4xl">
                                                {combo.deliverablesSummary}
                                            </p>
                                        </div>

                                        {/* Right Floating Hover Image Preview (Matching Image 3) */}
                                        <div className="flex items-center self-end md:self-center shrink-0">
                                            {/* Hover Image Preview (smoothly expands and reveals on hover just like Image 3) */}
                                            <div
                                                className={`relative w-44 h-28 sm:w-56 sm:h-36 rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-300 ${isHovered
                                                    ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                                                    : "opacity-0 scale-95 translate-x-4 pointer-events-none hidden sm:block w-0 sm:w-0"
                                                    }`}
                                            >
                                                <Image
                                                    src={comboImage}
                                                    alt={combo.serviceTitle}
                                                    fill
                                                    className="object-cover object-center"
                                                    sizes="240px"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* =========================================================================
            4. LIST OF WORKS RELATED TO THIS INDUSTRY (With Project Images)
            ========================================================================= */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-white/10">
                    <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                                {industry.works_tagline || (industry.slug === "healthcare" ? "SELECTED WORK" : "OUR WORK // INDUSTRY SOLUTIONS")}
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                                <WaveText text={industry.works_heading || (industry.slug === "healthcare"
                                    ? "DIGITAL SOLUTIONS MAKING A DIFFERENCE."
                                    : industry.slug === "food-fmcg"
                                        ? "DIGITAL EXPERIENCES. REAL-WORLD BUSINESS POSSIBILITIES."
                                        : industry.slug === "retail-ecommerce"
                                            ? "REIMAGINING HOW CUSTOMERS DISCOVER AND EXPERIENCE PRODUCTS."
                                            : industry.slug === "hospitality"
                                                ? "SHOWCASING DESTINATIONS. CREATING DIGITAL EXPERIENCES."
                                                : industry.slug === "education"
                                                    ? "CREATING DIGITAL EXPERIENCES THAT MAKE LEARNING MORE ACCESSIBLE."
                                                    : "IDEAS ENGINEERED INTO REAL-WORLD SOLUTIONS."
                                )} />
                            </h2>
                        </div>
                        <ScrollReveal delay={0.15}>
                            <p className="text-xs font-mono text-neutral-400">
                                {industry.works_description || (industry.slug === "healthcare"
                                    ? `${industry.works?.length || 0} Digital Solutions`
                                    : `Showing ${industry.works?.length || 0} Solution Concepts`
                                )}
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Project Cards */}
                    <div className="space-y-10">
                        {industry.works?.map((work: any, wIdx: number) => (
                            <article
                                key={work.id || `work-${wIdx}`}
                                className="group bg-[#0c0e14]/60 backdrop-blur-md border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 shadow-xl overflow-hidden flex flex-col"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[360px]">
                                    {/* Left: Project Image with Multi-Directional Glide & Settle Animation */}
                                    <div className="lg:col-span-6 xl:col-span-6 relative w-full h-[280px] sm:h-[360px] lg:h-auto min-h-full flex flex-col justify-stretch self-stretch overflow-hidden">
                                        <PrintRevealImage
                                            src={work.image}
                                            alt={work.title}
                                            badge={work.highlightMetric}
                                            aspectClass="w-full h-full min-h-full"
                                            className="w-full h-full border-0 lg:border-r border-white/10"
                                            index={wIdx}
                                        />
                                    </div>

                                    {/* Right: Project Details & Deliverables */}
                                    <div className="lg:col-span-6 xl:col-span-6 p-6 sm:p-8 lg:p-9 space-y-5 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            {/* Meta Tags: Client • Category • Year */}
                                            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                                                {work.client && (
                                                    <span className="px-2.5 py-0.5 bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30 font-bold">
                                                        {work.client}
                                                    </span>
                                                )}
                                                {work.category && (
                                                    <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10">
                                                        {work.category}
                                                    </span>
                                                )}
                                                {work.year && (
                                                    <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-white">
                                                        DEPLOYED {work.year}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Project Title with Smooth Wave Animation */}
                                            <h3 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-[#FFD400] transition-colors uppercase leading-snug">
                                                <WaveText text={work.title} />
                                            </h3>

                                            {/* Description */}
                                            {work.desc && (
                                                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                                                    {work.desc}
                                                </p>
                                            )}

                                            {/* Key Deliverables Bullet Points */}
                                            {work.deliverables && work.deliverables.length > 0 && (
                                                <div className="space-y-2 pt-1 border-t border-white/10">
                                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] font-bold block">
                                                        Architectural Deliverables:
                                                    </span>
                                                    <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
                                                        {work.deliverables.map((del: string, dIdx: number) => (
                                                            <li key={dIdx} className="flex items-start gap-2">
                                                                <span className="text-[#FFD400] shrink-0 mt-0.5">›</span>
                                                                <span className="font-light">{del}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Tech Stack Pills */}
                                            {work.techStack && work.techStack.length > 0 && (
                                                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                                                    {work.techStack.map((tech: string) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-0.5 bg-white/[0.03] border border-white/10 text-[10px] font-mono text-neutral-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Action */}
                                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                            {work.highlightMetric && (
                                                <span className="text-xs font-mono text-[#FFD400] font-bold">
                                                    {work.highlightMetric}
                                                </span>
                                            )}
                                            <a
                                                href="#consultation-section"
                                                className="text-xs font-mono uppercase tracking-wider text-white hover:text-[#FFD400] flex items-center gap-1 group/btn transition-colors"
                                            >
                                                <span>Request Similar Architecture</span>
                                                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-[#FFD400]" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* =========================================================================
            5. TAILORED ENGINEERING PROCESS ROADMAP
            ========================================================================= */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 border-t border-white/10">
                    <div className="mb-10 max-w-3xl">
                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#FFD400]" />
                            <span>{industry.process_tagline || (industry.slug === "healthcare" ? "PROJECT ROADMAP" : "OUR APPROACH // FROM VISION TO EXECUTION")}</span>
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-2">
                            <WaveText text={industry.process_heading || (industry.slug === "healthcare"
                                ? "FROM UNDERSTANDING YOUR NEEDS TO DELIVERING THE RIGHT SOLUTION."
                                : industry.slug === "food-fmcg"
                                    ? "FROM PRODUCT VISION TO MARKET-READY DIGITAL EXPERIENCES."
                                    : industry.slug === "retail-ecommerce"
                                        ? "FROM SHOPPING CONCEPT TO CONNECTED COMMERCE."
                                        : industry.slug === "hospitality"
                                            ? "FROM FIRST DISCOVERY TO A MEMORABLE DIGITAL EXPERIENCE."
                                            : industry.slug === "education"
                                                ? "FROM LEARNING REQUIREMENTS TO DIGITAL IMPLEMENTATION."
                                                : "A CLEARER PATH FROM CHALLENGE TO SOLUTION."
                            )} />
                        </h2>
                        <ScrollReveal delay={0.15}>
                            <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-2">
                                {industry.process_description || (industry.slug === "healthcare"
                                    ? "Every healthcare organisation has different goals. Our process begins with understanding your requirements and shaping a solution that aligns with your business, audience and long-term vision."
                                    : industry.slug === "food-fmcg"
                                        ? "Every food and FMCG business has a different market, audience and operating model. Our process aligns the right technology and creative services with your business objectives."
                                        : industry.slug === "retail-ecommerce"
                                            ? "Every retail business has different products, customers and operational requirements. Our process helps define the right platform, design approach and integrations to create engaging shopping experiences."
                                            : industry.slug === "hospitality"
                                                ? "Every hospitality brand has its own personality, audience and service expectations. Our process begins with understanding your property and business goals before shaping the right digital and creative solution."
                                                : industry.slug === "education"
                                                    ? "Every educational organisation has different learners, teaching methods and operational requirements. Our process focuses on understanding your objectives and delivering a digital solution that supports your educational vision."
                                                    : "Every manufacturing business has unique requirements. Our collaborative approach ensures that every project starts with understanding your business and ends with a solution aligned with your goals."
                                )}
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industry.process?.map((stepItem: any, pIdx: number) => (
                            <div
                                key={pIdx}
                                className="p-6 bg-[#0c0e14]/60 backdrop-blur-md border border-white/10 hover:border-[#FFD400]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                        <span className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#FFD400]">
                                            {stepItem.step}
                                        </span>
                                        <span className="px-2 py-0.5 bg-white/[0.04] border border-white/10 text-[10px] font-mono text-neutral-300">
                                            {stepItem.duration}
                                        </span>
                                    </div>

                                    <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-white uppercase leading-snug">
                                        {stepItem.title}
                                    </h3>

                                    <p className="text-xs text-neutral-300 font-light leading-relaxed">
                                        {stepItem.description}
                                    </p>
                                </div>

                                <div className="pt-4 mt-5 border-t border-white/5 space-y-1.5">
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD400] font-bold block">
                                        Key Outputs:
                                    </span>
                                    <ul className="space-y-1 text-[11px] font-mono text-neutral-400">
                                        {stepItem.keyOutputs?.map((output: any, oIdx: number) => (
                                            <li key={oIdx} className="flex items-start gap-1.5">
                                                <span className="text-[#FFD400] shrink-0">›</span>
                                                <span className="leading-tight text-neutral-300">{output}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =========================================================================
            6. ATTRACTIVE CASE STUDY DEEP DIVE SECTION
            ========================================================================= */}
                {industry.caseStudy && (
                    <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 border-t border-white/10">
                        <div className="p-8 sm:p-12 bg-[#090b10]/50 backdrop-blur-md border border-[#FFD400]/30 shadow-2xl relative overflow-hidden">
                            {/* Background Aesthetic Watermark */}
                            <div className="absolute right-4 bottom-2 text-white/[0.02] text-8xl sm:text-9xl font-black select-none pointer-events-none font-mono">
                                {industry.slug === "healthcare" ? "SUCCESS STORY" : "CASE STUDY"}
                            </div>

                            <div className="relative z-10 space-y-8">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                                    <div>
                                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center gap-2">
                                            <Sparkles className="w-4 h-4" />
                                            <span>{industry.case_study_tagline || industry.caseStudy?.tagline || (industry.slug === "healthcare" ? "SUCCESS STORY" : "INDUSTRY SPOTLIGHT // BUSINESS TRANSFORMATION")}</span>
                                        </span>
                                        <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                                            <WaveText text={industry.case_study_title || industry.caseStudy?.title || (industry.slug === "healthcare"
                                                ? "TRANSFORMING HEALTHCARE EXPERIENCES THROUGH DIGITAL INNOVATION."
                                                : industry.slug === "food-fmcg"
                                                    ? "HELPING A FOOD BRAND GROW BEYOND ITS SHELVES."
                                                    : industry.slug === "retail-ecommerce"
                                                        ? "TURNING DIGITAL SHOPPING INTO A MORE ENGAGING EXPERIENCE."
                                                        : industry.slug === "hospitality"
                                                            ? "TURNING HOSPITALITY BRANDS INTO DESTINATIONS GUESTS DISCOVER."
                                                            : industry.slug === "education"
                                                                ? "TRANSFORMING THE WAY EDUCATION CONNECTS WITH LEARNERS."
                                                                : "TURNING COMPLEX OPERATIONS INTO CONNECTED POSSIBILITIES."
                                            )} />
                                        </h2>
                                    </div>
                                    {industry.caseStudy.period && (
                                        <ScrollReveal delay={0.15}>
                                            <div className="text-xs font-mono px-3 py-1.5 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] shrink-0 self-start sm:self-center">
                                                {industry.caseStudy.period}
                                            </div>
                                        </ScrollReveal>
                                    )}
                                </div>

                                {/* Problem vs Solution Split */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm font-mono">
                                    <div className="p-6 bg-red-500/[0.04] border border-red-500/20 space-y-2.5">
                                        <span className="text-red-400 font-bold uppercase tracking-wider block">
                                            The Pre-Migration Bottlenecks
                                        </span>
                                        <p className="text-neutral-300 font-light leading-relaxed">
                                            {industry.caseStudy.challenge}
                                        </p>
                                    </div>

                                    <div className="p-6 bg-emerald-500/[0.04] border border-emerald-500/20 space-y-2.5">
                                        <span className="text-emerald-400 font-bold uppercase tracking-wider block">
                                            The Engineered Modern Solution
                                        </span>
                                        <p className="text-neutral-300 font-light leading-relaxed">
                                            {industry.caseStudy.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* 3 Metric Cards */}
                                {industry.caseStudy.metrics && industry.caseStudy.metrics.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        {industry.caseStudy.metrics.map((m: any, mIdx: number) => (
                                            <div
                                                key={mIdx}
                                                className="p-5 bg-white/[0.02] border border-white/10 text-center space-y-1"
                                            >
                                                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                                                    {m.label}
                                                </span>
                                                <p className="text-3xl sm:text-4xl font-[family-name:var(--font-syne)] font-bold text-[#FFD400]">
                                                    {m.value}
                                                </p>
                                                <span className="text-xs font-mono text-emerald-400 font-medium block">
                                                    {m.change}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Executive Client Quote */}
                                {industry.caseStudy.quote && (
                                    <div className="p-6 bg-white/[0.03] border-l-2 border-[#FFD400] space-y-3">
                                        <Quote className="w-6 h-6 text-[#FFD400] opacity-80" />
                                        <p className="text-sm sm:text-base text-neutral-200 italic font-light leading-relaxed">
                                            &ldquo;{industry.caseStudy.quote.text}&rdquo;
                                        </p>
                                        <div className="text-xs font-mono text-neutral-400 pt-1">
                                            <strong className="text-white">{industry.caseStudy.quote.author}</strong> • {industry.caseStudy.quote.role}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* =========================================================================
            7. TECHNICAL CONSULTATION / INQUIRY FORM (PROJECT ENQUIRY CTA)
            ========================================================================= */}
                <section
                    id="consultation-section"
                    className="industry-consult-section max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/10"
                >
                    <div className="bg-[#0c0e14]/60 backdrop-blur-md border border-white/15 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                        <IndustryConsultationHeading
                            data={consultationData}
                            className="lg:col-span-5"
                        />
                        <IndustryConsultationForm
                            industries={industriesList && industriesList.length > 0 ? industriesList : [industry.title]}
                            defaultIndustry={industry.title}
                            formTitle={consultationData?.form_title}
                            formDescription={consultationData?.form_description}
                            className="lg:col-span-7"
                        />
                    </div>
                </section>

                {/* =========================================================================
            8. INDUSTRY TECHNICAL FAQS (ACCORDION)
            ========================================================================= */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 border-t border-white/10">
                    <div className="mb-8">
                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                            {industry.faq_tagline || (industry.slug === "healthcare" ? "EVERYTHING YOU NEED TO KNOW" : "MANUFACTURING & INDUSTRIAL // KNOW BEFORE YOU BEGIN")}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                            <WaveText text={industry.faq_heading || (industry.slug === "healthcare"
                                ? "EVERYTHING YOU NEED TO KNOW ABOUT OUR HEALTHCARE SOLUTIONS."
                                : industry.slug === "food-fmcg"
                                    ? "YOUR QUESTIONS. OUR DIGITAL EXPERTISE."
                                    : industry.slug === "retail-ecommerce"
                                        ? "EVERYTHING YOU NEED TO KNOW ABOUT OUR RETAIL SOLUTIONS."
                                        : industry.slug === "hospitality"
                                            ? "EVERYTHING YOU NEED TO KNOW ABOUT OUR HOSPITALITY SOLUTIONS."
                                            : industry.slug === "education"
                                                ? "EVERYTHING YOU NEED TO KNOW ABOUT OUR EDUCATION SOLUTIONS."
                                                : "FREQUENTLY ASKED QUESTIONS"
                            )} />
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {(industry.faqs || []).map((faq: any, fIdx: number) => {
                            const isOpen = openFaqIndex === fIdx;

                            return (
                                <div
                                    key={fIdx}
                                    className="border border-white/10 bg-[#0c0e14]/40 backdrop-blur-sm transition-colors hover:border-white/25"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                                    >
                                        <span className="font-[family-name:var(--font-syne)] text-base sm:text-lg font-bold text-white">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-4 h-4 text-[#FFD400] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 font-mono">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* =========================================================================
            9. SEAMLESS NEXT INDUSTRY BROWSE BAR
            ========================================================================= */}
                <section className="border-t border-white/10 bg-black/40 py-10 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                                Next Industry Specialization
                            </span>
                            <p className="font-[family-name:var(--font-syne)] text-xl font-bold text-white uppercase">
                                {nextIndustry.number} — {nextIndustry.title}
                            </p>
                        </div>

                        <Link
                            href={`/industries/${nextIndustry.slug}`}
                            className="px-6 py-2.5 border border-white/20 hover:border-[#FFD400] text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                        >
                            <span>Explore Next Industry</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#FFD400]" />
                        </Link>
                    </div>
                </section>
            </main>

            <RnDFooter />
        </div>
    );
}
