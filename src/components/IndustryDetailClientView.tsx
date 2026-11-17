"use client";

import React, { useState } from "react";
import Link from "next/link";
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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import PrintRevealImage from "@/components/PrintRevealImage";
import WaveText from "@/components/WaveText";
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

    return (
        <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-archia">
            <SpaceBackground />
            <Navbar />

            {/* Page Banner with Typewriter Title, Slow Zoom & Parallax */}
            <PageBanner title={industry.title}
                breadcrumb={industry.title}
                parentBreadcrumb={{ label: "INDUSTRIES", href: "/industries" }} imageSrc="/NewBanner/Industry page banner.png" />

            {/* Overlapping Main Content */}
            <main className="relative z-20 w-full mt-[50px] rounded-t-[32px] sm:rounded-t-[44px] bg-transparent 
             shadow-[0_-25px_60px_rgba(0,0,0,0.85)]">
                {/* =========================================================================
            1. SHORT INFO & ARCHITECTURAL SUMMARY SECTION
            ========================================================================= */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-10">
                    <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0c0e14]/40 via-[#121520]/40 to-[#0c0e14]/40 backdrop-blur-sm border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            {/* Left Column (8 cols): Short Info & Tagline */}
                            <div className="lg:col-span-8 space-y-4">
                                <div className="flex flex-wrap items-center gap-2">
                                   
                                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono">
                                        {industry.category}
                                    </span>
                                </div>

                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-snug">
                                    <WaveText text={industry.tagline} />
                                </h1>

                                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                                    {industry.shortInfo}
                                </p>
                            </div>

                         
                        </div>

                        {/* 3 Core Engineering Pillars */}
                        <div className="mt-10 pt-8 border-t border-white/10">
                            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold mb-6">
                                {industry.pillars_heading || (industry.slug === "healthcare" ? "BUILDING A HEALTHIER DIGITAL ECOSYSTEM." : "CORE CAPABILITIES")}
                            </h3>
                            {(industry.pillars_description || industry.slug === "healthcare") && (
                                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                                    {industry.pillars_description || "From patient-facing digital platforms to a stronger healthcare brand, we bring technology and creativity together to help healthcare businesses move forward."}
                                </p>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {(industry.pillars || []).map((pillar: any, pIdx: number) => {
                                const IconComponent = getPillarIcon(pillar.icon);
                                return (
                                    <div
                                        key={pIdx}
                                        className="p-5 bg-white/[0.02] border border-white/10 hover:border-[#FFD400]/40 transition-colors space-y-2.5"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-[#FFD400]/15 border border-[#FFD400]/30 text-[#FFD400] flex items-center justify-center">
                                            <IconComponent className="w-4 h-4" />
                                        </div>
                                        <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-white uppercase">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-xs text-neutral-300 font-light leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
            2. INDUSTRY-SPECIFIC CHALLENGES & BOTTLENECKS
            ========================================================================= */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-white/10">
                    <div className="mb-10 max-w-3xl">
                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400 font-semibold flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                            <span>{industry.challenges_tagline || "INDUSTRY CHALLENGES // OPERATIONAL BOTTLENECKS"}</span>
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-2">
                            {industry.challenges_heading || (industry.slug === "healthcare" 
                                ? "THE CHALLENGES BEHIND MODERN HEALTHCARE." 
                                : industry.slug === "food-fmcg"
                                ? "THE CHALLENGES BEHIND EVERY FAST-MOVING MARKET."
                                : industry.slug === "retail-ecommerce"
                                ? "THE CHALLENGES SHAPING MODERN RETAIL."
                                : industry.slug === "hospitality"
                                ? "THE CHALLENGES BEHIND EVERY GUEST EXPERIENCE."
                                : industry.slug === "education"
                                ? "THE CHALLENGES SHAPING MODERN EDUCATION."
                                : "WHAT'S HOLDING YOUR INDUSTRY BACK?")}
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-2">
                            {industry.challenges_description || (industry.slug === "healthcare" 
                                ? "Healthcare businesses face increasing pressure to deliver seamless experiences while managing daily operations and staying visible in a competitive digital landscape. The right digital approach can help address these challenges."
                                : industry.slug === "food-fmcg"
                                ? "Food and FMCG businesses operate in a competitive environment where customer expectations, product availability and brand visibility constantly evolve. Disconnected systems and inconsistent digital experiences can make it harder to keep pace."
                                : industry.slug === "retail-ecommerce"
                                ? "Retail businesses face constantly evolving customer expectations, increased competition and the need to create seamless shopping experiences across multiple touchpoints. The right digital approach can help address these challenges and create more engaging customer journeys."
                                : industry.slug === "hospitality"
                                ? "Hospitality businesses operate in a highly experience-driven market. Guests expect convenient booking journeys, engaging digital content and consistent service information. Businesses need the right digital foundation to meet these expectations and stand out."
                                : industry.slug === "education"
                                ? "Educational institutions and training providers are navigating changing student expectations, increasing competition and the growing demand for digital learning. The right technology and communication strategy can help create more connected educational experiences."
                                : "Manufacturing businesses face growing operational and digital challenges. We help identify these gaps and build practical solutions that move businesses forward."
                            )}
                        </p>
                    </div>

                    {(() => {
                        const challengesCount = industry.challenges?.length || 0;
                        const gridConfig = getResponsiveGridConfig(challengesCount);

                        return (
                            <div className={gridConfig.containerClass}>
                                {industry.challenges?.map((challenge: any, cIdx: number) => (
                                    <div
                                        key={cIdx}
                                        className={`group p-6 sm:p-7 bg-gradient-to-b from-white/[0.03] to-[#0c0e14] border border-white/10 hover:border-red-500/40 transition-all duration-300 relative flex flex-col justify-between ${gridConfig.getItemClass(cIdx)}`}
                                    >
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                                                    CHALLENGE 0{cIdx + 1}
                                                </span>
                                                <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-mono font-bold">
                                                    {challenge.impactMetric}
                                                </span>
                                            </div>

                                            <h3 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl font-bold text-white group-hover:text-red-300 transition-colors uppercase leading-snug">
                                                {challenge.title}
                                            </h3>

                                            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                                                {challenge.description}
                                            </p>
                                        </div>

                                        <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-[10px] font-mono text-neutral-400">
                                            <span className="text-red-400 mr-2">▲</span> High Operational Risk
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })()}
                </section>

                {/* =========================================================================
            3. RELEVANT SERVICE COMBINATIONS (HOW RnD SOLVES SECTOR NEEDS)
            ========================================================================= */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-white/10">
                    <div className="mb-10 max-w-3xl">
                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center gap-2">
                            <Zap className="w-4 h-4 text-[#FFD400]" />
                            <span>
                                {industry.solutions_tagline || (industry.slug === "healthcare" ? "OUR SOLUTIONS" : "INTEGRATED SOLUTIONS // INDUSTRY-FOCUSED CAPABILITIES")}
                            </span>
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-2">
                            {industry.solutions_heading || (industry.slug === "healthcare" 
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
                            )}
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-2">
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
                    </div>

                    {(() => {
                        const servicesCount = industry.serviceCombinations?.length || 0;
                        const gridConfig = getResponsiveGridConfig(servicesCount);

                        return (
                            <div className={gridConfig.containerClass}>
                                {industry.serviceCombinations?.map((combo: any, sIdx: number) => (
                                    <div
                                        key={sIdx}
                                        className={`group p-6 sm:p-7 bg-[#0c0e14]/60 backdrop-blur-md border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 relative flex flex-col justify-between ${gridConfig.getItemClass(sIdx)}`}
                                    >
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="px-2.5 py-0.5 rounded-full bg-[#FFD400]/15 border border-[#FFD400]/30 text-[#FFD400] text-[10px] font-mono font-bold tracking-wider uppercase">
                                                    {combo.badge}
                                                </span>
                                                <Link
                                                    href={combo.serviceHref}
                                                    className="text-neutral-400 group-hover:text-[#FFD400] transition-colors"
                                                    title={`Explore ${combo.serviceTitle}`}
                                                >
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </Link>
                                            </div>

                                            <div>
                                                <Link
                                                    href={combo.serviceHref}
                                                    className="font-[family-name:var(--font-syne)] text-lg sm:text-xl font-bold text-white group-hover:text-[#FFD400] transition-colors uppercase leading-tight block"
                                                >
                                                    {combo.serviceTitle}
                                                </Link>
                                                <span className="text-xs font-mono text-[#FFD400] block mt-1">
                                                    {combo.role}
                                                </span>
                                            </div>

                                            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                                                {combo.deliverablesSummary}
                                            </p>
                                        </div>

                                        <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                                            <Link
                                                href={combo.serviceHref}
                                                className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white flex items-center gap-1 transition-colors"
                                            >
                                                <span>Inspect Service Capabilities</span>
                                                <ArrowRight className="w-3 h-3 text-[#FFD400]" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })()}
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
                                {industry.works_heading || (industry.slug === "healthcare"
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
                                )}
                            </h2>
                        </div>
                        <p className="text-xs font-mono text-neutral-400">
                            {industry.works_description || (industry.slug === "healthcare"
                                ? `${industry.works?.length || 0} Digital Solutions`
                                : `Showing ${industry.works?.length || 0} Solution Concepts`
                            )}
                        </p>
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
                            {industry.process_heading || (industry.slug === "healthcare"
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
                            )}
                        </h2>
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
                                        {industry.case_study_title || industry.caseStudy?.title || (industry.slug === "healthcare"
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
                                        )}
                                    </h2>
                                </div>
                                {industry.caseStudy.period && (
                                    <div className="text-xs font-mono px-3 py-1.5 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] shrink-0 self-start sm:self-center">
                                        {industry.caseStudy.period}
                                    </div>
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
                            {industry.faq_heading || (industry.slug === "healthcare"
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
                            )}
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
