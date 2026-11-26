"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowUpRight,
    Sparkles,
    Shield,
    Building2,
    Briefcase,
    HeartPulse,
    UtensilsCrossed,
    ShoppingBag,
    Hotel,
    GraduationCap,
    Rocket,
    Plane,
    Factory,
    Landmark,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import PrintRevealImage from "@/components/PrintRevealImage";
import WaveText from "@/components/WaveText";
import AnimatedCounter from "@/components/AnimatedCounter";
import IndustryConsultationHeading from "@/components/IndustryConsultationHeading";
import IndustryConsultationForm from "@/components/IndustryConsultationForm";
import {
    getIndustriesData,
    IndustryItemData,
    getIndustryHero,
    IndustryHeroData,
    DEFAULT_INDUSTRY_HERO,
    getIndustryConsultation,
    IndustryConsultationData,
    DEFAULT_INDUSTRY_CONSULTATION,
} from "@/lib/getIndustriesData";
import {
    getSectionHeading,
    SectionHeading,
    DEFAULT_SECTION_HEADINGS,
} from "@/lib/getSectionHeading";
import {
    getPageComponents,
    PageComponent,
    DEFAULT_PAGE_COMPONENTS,
    isSectionActive,
    getSectionStyle,
} from "@/lib/getPageComponents";
import { industriesList as staticIndustriesList } from "@/data/industriesData";

const INITIAL_INDUSTRIES: IndustryItemData[] = staticIndustriesList.map((item, idx) => ({
    id: item.slug || String(idx),
    slug: item.slug,
    number: String(idx + 1).padStart(2, "0"),
    title: item.title,
    category: item.category,
    badge: item.badge,
    tagline: item.tagline,
    shortInfo: item.shortInfo,
    description: (item as any).description || item.tagline || "",
    image: item.image || "/uploads/industry_default.webp",
    iconName: "Building2",
    heroMetrics: item.heroMetrics || [],
    works: item.works?.slice(0, 1) || [],
    featured_project: item.works?.[0]?.title,
}));

export default function IndustriesIndexPage() {
    const [selectedCategory] = useState("All");
    const [industriesList, setIndustriesList] = useState<IndustryItemData[]>(INITIAL_INDUSTRIES);
    const [heroData, setHeroData] = useState<IndustryHeroData>(DEFAULT_INDUSTRY_HERO);
    const [sectionHeading, setSectionHeading] = useState<SectionHeading>(DEFAULT_SECTION_HEADINGS.industries);
    const [consultationData, setConsultationData] = useState<IndustryConsultationData>(DEFAULT_INDUSTRY_CONSULTATION);
    const [pageComponents, setPageComponents] = useState<PageComponent[]>(DEFAULT_PAGE_COMPONENTS["industries"]);
    const mainRef = useRef<HTMLElement>(null);

    // Fetch industries data, hero section data, parent heading, and consultation CTA
    useEffect(() => {
        getPageComponents("industries").then(setPageComponents);
        getIndustriesData().then((data) => {
            setIndustriesList(data);
        });

        getIndustryHero().then((data) => {
            if (data) setHeroData(data);
        });

        getSectionHeading("industries").then((heading) => {
            if (heading) setSectionHeading(heading);
        });

        getIndustryConsultation().then((data) => {
            if (data) setConsultationData(data);
        });
    }, []);

    const renderSectionTitle = (titleText: string) => {
        if (!titleText) return null;
        const words = titleText.trim().split(" ");
        if (words.length <= 2) {
            return <span className="text-[#FFD400]">{titleText}</span>;
        }
        const lastTwo = words.slice(-2).join(" ");
        const rest = words.slice(0, -2).join(" ");
        return (
            <>
                {rest} <span className="text-[#FFD400]">{lastTwo}</span>
            </>
        );
    };

    const renderHighlightedHeading = (headingText: string) => {
        if (!headingText) return null;
        if (headingText.includes(".")) {
            const dotIndex = headingText.indexOf(".");
            const firstPart = headingText.slice(0, dotIndex + 1);
            const secondPart = headingText.slice(dotIndex + 1).trim();
            if (secondPart) {
                return (
                    <>
                        {firstPart}{" "}
                        <span className="text-[#FFD400]">{secondPart}</span>
                    </>
                );
            }
        }
        const words = headingText.split(" ");
        if (words.length > 2) {
            const mid = Math.ceil(words.length / 2);
            return (
                <>
                    {words.slice(0, mid).join(" ")}{" "}
                    <span className="text-[#FFD400]">{words.slice(mid).join(" ")}</span>
                </>
            );
        }
        return headingText;
    };

    const heroMetrics = useMemo(() => {
        const rawItems = heroData?.counter || DEFAULT_INDUSTRY_HERO.counter || [];
        return rawItems.map((item: any) => {
            if (typeof item === "string") {
                const lines = item.split("\n").map((l: string) => l.trim()).filter(Boolean);
                return {
                    value: lines[0] || "",
                    label: lines[1] || "",
                    description: lines.slice(2).join(" ") || "",
                };
            }
            if (item && typeof item === "object") {
                if (item.counter_info) {
                    const lines = String(item.counter_info).split("\n").map((l: string) => l.trim()).filter(Boolean);
                    return {
                        value: lines[0] || "",
                        label: lines[1] || "",
                        description: lines.slice(2).join(" ") || "",
                    };
                }
                return {
                    value: item.value || item.number || item.stat || item.count || "",
                    label: item.label || item.title || item.name || "",
                    description: item.description || item.desc || item.subtitle || item.info || "",
                };
            }
            return { value: "", label: "", description: "" };
        });
    }, [heroData]);

    const filteredIndustries = useMemo(() => {
        if (selectedCategory === "All") return industriesList;
        return industriesList.filter((item) =>
            item.title.toLowerCase().includes(selectedCategory.toLowerCase())
        );
    }, [selectedCategory, industriesList]);

    // GSAP ScrollTrigger Animations for Content
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // 1. Enterprise Hero Card Entrance
            gsap.fromTo(
                ".industry-hero-card",
                { opacity: 0, y: 45, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.85,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".industry-hero-card",
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Hero Metrics Items Stagger
            gsap.fromTo(
                ".industry-metric-item",
                { opacity: 0, y: 25 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.12,
                    duration: 0.65,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".industry-hero-card",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // 2. Section Header Reveal
            gsap.fromTo(
                ".industry-section-header",
                { opacity: 0, y: 35, filter: "blur(6px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".industry-section-header",
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // 3. Industry Directory Cards Reveal per card
            const cards = gsap.utils.toArray<HTMLElement>(".industry-card-item");
            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50, scale: 0.98 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            // 4. Cross-Industry Consultation Section Slide-ins
            gsap.fromTo(
                ".industry-consult-left",
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".industry-consult-section",
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                ".industry-consult-right",
                { opacity: 0, x: 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".industry-consult-section",
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, mainRef);

        const refreshTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);

        return () => {
            clearTimeout(refreshTimer);
            ctx.revert();
        };
    }, [filteredIndustries]);


    const getIndustryIcon = (slug: string) => {
        switch (slug) {
            case "manufacturing":
                return Factory;
            case "healthcare":
                return HeartPulse;
            case "food-fmcg":
                return UtensilsCrossed;
            case "retail-ecommerce":
                return ShoppingBag;
            case "hospitality":
                return Hotel;
            case "education":
                return GraduationCap;
            case "real-estate":
                return Building2;
            case "startups-professional-services":
                return Rocket;
            case "travel-tourism":
                return Plane;
            case "finance-fintech":
                return Landmark;
            default:
                return Briefcase;
        }
    };

    const INDUSTRY_CARD_IMAGES: Record<string, string> = {
        manufacturing: "/Industries/manufacturing_mockup.png",
        healthcare: "/Industries/healthcare_mockup.png",
        "food-fmcg": "/Industries/food_mockup.png",
        "retail-ecommerce": "/Industries/retail_mockup.png",
        hospitality: "/Industries/hospitality_mockup.png",
        education: "/Industries/education_mockup.png",
    };

    return (
        <div className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
            <SpaceBackground />
            <Navbar />

            {/* Page Banner with Typewriter Title, Slow Cinematic Zoom & Parallax */}
            {isSectionActive(pageComponents, "banner") && (
                <div style={getSectionStyle(pageComponents, "banner")}>
                    <PageBanner
                        title="INDUSTRIES WE SERVE"
                        breadcrumb="INDUSTRIES"
                        imageSrc="/NewBanner/Industry page banner.png"
                    />
                </div>
            )}

            {/* Main Content (Directly below banner without overlap) */}
            <main
                ref={mainRef}
                className="relative z-10 w-full"
            >
                {/* =========================================================================
            1. INDUSTRIES HERO BAR
            ========================================================================= */}
                {isSectionActive(pageComponents, "hero_bar") && (
                    <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 sm:pt-12 pb-8" style={getSectionStyle(pageComponents, "hero_bar")}>
                        <div className="industry-hero-card p-8 sm:p-12 bg-gradient-to-r from-[#0c0e14]/40 via-[#121520]/40 to-[#0c0e14]/40 backdrop-blur-sm border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="relative z-10 max-w-3xl space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    <span>{heroData?.tagline || DEFAULT_INDUSTRY_HERO.tagline}</span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-tight">
                                    {renderHighlightedHeading(heroData?.heading || DEFAULT_INDUSTRY_HERO.heading)}
                                </h1>
                                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed whitespace-pre-line">
                                    {heroData?.description || DEFAULT_INDUSTRY_HERO.description}
                                </p>
                            </div>

                            {/* Quick Metrics */}
                            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
                                {heroMetrics.map((metric, mIdx) => {
                                    const isYellow = mIdx % 2 === 0;
                                    return (
                                        <div key={mIdx} className="industry-metric-item">
                                            <span className={`text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold ${isYellow ? "text-[#FFD400]" : "text-white"}`}>
                                                {metric.value}
                                            </span>
                                            <p className="text-xs font-mono text-[#FFD400]/80 uppercase tracking-wider font-semibold mt-0.5">
                                                {metric.label}
                                            </p>
                                            <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                                                {metric.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* =========================================================================
            2. INDUSTRIES DIRECTORY LISTING
            ========================================================================= */}
                {isSectionActive(pageComponents, "directory_listing") && (
                    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12" style={getSectionStyle(pageComponents, "directory_listing")}>
                    <div className="industry-section-header mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                                {sectionHeading?.badge || "INDUSTRIES WE SERVEs"}
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                                {renderSectionTitle(sectionHeading?.title || "SOLUTIONS BUILT AROUND YOUR WORLD.")}
                            </h2>
                            {sectionHeading?.subtitle && (
                                <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1">
                                    {sectionHeading.subtitle}
                                </p>
                            )}
                        </div>
                        <p className="text-xs font-mono text-neutral-400">
                            Showing {filteredIndustries.length} Industry Hubs
                        </p>
                    </div>

                    {/* Industry Cards Grid */}
                    <div className="space-y-10">
                        {filteredIndustries.map((ind, idx) => {
                            const Icon = getIndustryIcon(ind.slug);
                            const previewWork = ind.works?.[0] || { title: ind.featured_project || "Flagship Solution" };
                            const cardImage = ind.image || INDUSTRY_CARD_IMAGES[ind.slug] || previewWork?.image || "/Industries/manufacturing_mockup.png";
                            const showcaseTitle = ind.featured_project || previewWork?.title || "Flagship Architecture Solution";

                            return (
                                <article
                                    key={ind.slug || ind.id || idx}
                                    className="industry-card-item group bg-[#0c0e14]/60 backdrop-blur-md border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 shadow-xl overflow-hidden flex flex-col"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[360px]">

                                        {/* Left: Project Image with Multi-Directional Glide & Settle Animation */}
                                        <div className="lg:col-span-5 xl:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-auto min-h-full flex flex-col justify-stretch self-stretch overflow-hidden">
                                            <PrintRevealImage
                                                src={cardImage}
                                                alt={showcaseTitle || ind.title}
                                                badge={ind.badge}
                                                aspectClass="w-full h-full min-h-full"
                                                className="w-full h-full border-0 lg:border-r border-white/10"
                                                index={idx}
                                                objectFit="cover"
                                            />
                                        </div>

                                        {/* Right: Industry Blueprint Details */}
                                        <div className="lg:col-span-7 xl:col-span-7 p-6 sm:p-8 lg:p-9 space-y-5 flex flex-col justify-between">
                                            <div className="space-y-4">

                                                {/* Meta Tags: Number • Category • Standard */}
                                                <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                                                    {/* <span className="px-2.5 py-0.5 bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30 font-bold flex items-center gap-1.5">
                                                        <Icon className="w-3 h-3" />
                                                        <span>VERTICAL {ind.number}</span>
                                                    </span> */}
                                                    {/* <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10">
                                                        {ind.category}
                                                    </span>
                                                    <span className="flex items-center gap-1 px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-white">
                                                        <Shield className="w-3 h-3 text-[#FFD400]" />
                                                        <span>{ind.badge}</span>
                                                    </span> */}
                                                </div>

                                                {/* Title with Smooth Wave Animation */}
                                                <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FFD400] transition-colors uppercase leading-snug">
                                                    <Link href={`/industries/${ind.slug}`}>
                                                        <WaveText text={ind.title} />
                                                    </Link>
                                                </h3>

                                                {/* Tagline */}
                                                <p className="text-xs sm:text-sm text-[#FFD400] font-mono font-medium tracking-wide">
                                                    {ind.tagline}
                                                </p>

                                                {/* Short Info */}
                                                {ind.shortInfo && (
                                                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-3 sm:line-clamp-4">
                                                        {ind.shortInfo}
                                                    </p>
                                                )}

                                                {/* Key Metrics Pills with Animated Counter */}
                                                {ind.heroMetrics && ind.heroMetrics.length > 0 && (
                                                    <div className="flex flex-wrap items-center gap-2 pt-1">
                                                        {ind.heroMetrics.map((m, mIdx) => (
                                                            <div
                                                                key={mIdx}
                                                                className="px-3 py-1 bg-white/[0.03] border border-white/10 text-xs font-mono"
                                                            >
                                                                <span className="text-neutral-400">{m.label}: </span>
                                                                <strong className="text-[#FFD400]">
                                                                    <AnimatedCounter text={m.value} duration={1.6} />
                                                                </strong>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Featured Project Snapshot & Action Button */}
                                            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="space-y-0.5">
                                                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                                                        Showcase Project
                                                    </span>
                                                    <p className="text-xs font-mono text-white font-medium line-clamp-1">
                                                        {showcaseTitle}
                                                    </p>
                                                </div>

                                                <Link
                                                    href={`/industries/${ind.slug}`}
                                                    className="px-6 py-2.5 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,212,0,0.3)] transition-all cursor-pointer group/btn"
                                                >
                                                    <span>Explore Industry Hub</span>
                                                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>
                )}

                {/* =========================================================================
            3. CROSS-INDUSTRY ARCHITECTURAL CONSULTATION SECTION
            ========================================================================= */}
                {isSectionActive(pageComponents, "consultation_cta") && (
                    <section className="industry-consult-section max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/10" style={getSectionStyle(pageComponents, "consultation_cta")}>
                        <div className="bg-[#0c0e14]/60 backdrop-blur-md border border-white/15 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                            <IndustryConsultationHeading
                                data={consultationData}
                                className="lg:col-span-5"
                            />
                            <IndustryConsultationForm
                                industries={industriesList.map(ind => ind.title)}
                                formTitle={consultationData.form_title}
                                formDescription={consultationData.form_description}
                                className="lg:col-span-7"
                            />
                        </div>
                    </section>
                )}
            </main>

            <RnDFooter />
        </div>
    );
}
