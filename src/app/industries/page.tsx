"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowRight,
    ArrowUpRight,
    Sparkles,
    Shield,
    Zap,
    CheckCircle2,
    Send,
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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import PrintRevealImage from "@/components/PrintRevealImage";
import WaveText from "@/components/WaveText";
import AnimatedCounter from "@/components/AnimatedCounter";
import { industriesList, IndustryData } from "@/data/industriesData";

export default function IndustriesIndexPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [inquiryIndustry, setInquiryIndustry] = useState(industriesList[0].title);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const mainRef = useRef<HTMLElement>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
    });

    const filteredIndustries = useMemo(() => {
        if (selectedCategory === "All") return industriesList;
        return industriesList.filter((item) =>
            item.title.toLowerCase().includes(selectedCategory.toLowerCase())
        );
    }, [selectedCategory]);

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

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setFormSubmitted(true);
        }, 850);
    };

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
            default:
                return Briefcase;
        }
    };

    return (
        <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans">
            <SpaceBackground />
            <Navbar />

            {/* Page Banner with Typewriter Title, Slow Cinematic Zoom & Parallax */}
            <PageBanner
                title="INDUSTRIES WE SERVE"
                breadcrumb="INDUSTRIES"
                imageSrc="/banner/industries.png"
            />

            {/* Main Content with Layered Overlap over the Banner */}
            <main
                ref={mainRef}
                className="relative z-20 w-full mt-[50px] rounded-t-[32px] sm:rounded-t-[44px] bg-[#050.85)]"
            >
                {/* =========================================================================
            1. INDUSTRIES HERO BAR
            ========================================================================= */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-8">
                    <div className="industry-hero-card p-8 sm:p-12 bg-gradient-to-r from-[#0c0e14]/40 via-[#121520]/40 to-[#0c0e14]/40 backdrop-blur-sm border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="relative z-10 max-w-3xl space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>✧ INDUSTRIES WE EMPOWER // SOLUTIONS WITHOUT BOUNDARIES</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-tight">
                                BUILT FOR EVERY INDUSTRY.{" "}
                                <span className="text-[#FFD400]">ENGINEERED FOR WHAT&apos;S NEXT.</span>
                            </h1>
                            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                                Every industry has a different challenge. Every business has a different ambition. At RND Technosoft, we bring technology, digital marketing, branding and creative production together to build solutions that help businesses adapt, compete and grow. From emerging startups to established enterprises, we turn industry-specific challenges into opportunities through innovation, strategic thinking and purposeful execution.
                            </p>
                        </div>

                        {/* Quick Metrics */}
                        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
                            <div className="industry-metric-item">
                                <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-[#FFD400]">2018</span>
                                <p className="text-xs font-mono text-[#FFD400]/80 uppercase tracking-wider font-semibold mt-0.5">Established</p>
                                <p className="text-[11px] font-mono text-neutral-400 mt-0.5">Building digital solutions since 2018</p>
                            </div>
                            <div className="industry-metric-item">
                                <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white">04</span>
                                <p className="text-xs font-mono text-[#FFD400]/80 uppercase tracking-wider font-semibold mt-0.5">Core Divisions</p>
                                <p className="text-[11px] font-mono text-neutral-400 mt-0.5">Technology, Marketing, Design &amp; Media</p>
                            </div>
                            <div className="industry-metric-item">
                                <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-[#FFD400]">360°</span>
                                <p className="text-xs font-mono text-[#FFD400]/80 uppercase tracking-wider font-semibold mt-0.5">Digital Capabilities</p>
                                <p className="text-[11px] font-mono text-neutral-400 mt-0.5">Integrated services under one roof</p>
                            </div>
                            <div className="industry-metric-item">
                                <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white">B2B</span>
                                <p className="text-xs font-mono text-[#FFD400]/80 uppercase tracking-wider font-semibold mt-0.5">Business Focus</p>
                                <p className="text-[11px] font-mono text-neutral-400 mt-0.5">Solutions designed around business needs</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
            2. INDUSTRIES DIRECTORY LISTING
            ========================================================================= */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                    <div className="industry-section-header mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                                INDUSTRIES WE SERVE
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                                SOLUTIONS BUILT AROUND <span className="text-[#FFD400]">YOUR WORLD.</span>
                            </h2>
                        </div>
                        <p className="text-xs font-mono text-neutral-400">
                            Showing {filteredIndustries.length} Industry Hubs
                        </p>
                    </div>

                    {/* Industry Cards Grid */}
                    <div className="space-y-10">
                        {filteredIndustries.map((ind, idx) => {
                            const Icon = getIndustryIcon(ind.slug);
                            const previewWork = ind.works[0];

                            return (
                                <article
                                    key={ind.slug}
                                    className="industry-card-item group bg-[#0c0e14]/60 backdrop-blur-md border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 shadow-xl overflow-hidden flex flex-col"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[360px]">

                                        {/* Left: Project Image with Multi-Directional Glide & Settle Animation */}
                                        <div className="lg:col-span-5 xl:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-auto min-h-full flex flex-col justify-stretch self-stretch overflow-hidden">
                                            <PrintRevealImage
                                                src={previewWork.image}
                                                alt={previewWork.title}
                                                badge={ind.badge}
                                                aspectClass="w-full h-full min-h-full"
                                                className="w-full h-full border-0 lg:border-r border-white/10"
                                                index={idx}
                                            />
                                        </div>

                                        {/* Right: Industry Blueprint Details */}
                                        <div className="lg:col-span-7 xl:col-span-7 p-6 sm:p-8 lg:p-9 space-y-5 flex flex-col justify-between">
                                            <div className="space-y-4">

                                                {/* Meta Tags: Number • Category • Standard */}
                                                <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                                                    <span className="px-2.5 py-0.5 bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30 font-bold">
                                                        VERTICAL {ind.number}
                                                    </span>
                                                    <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10">
                                                        {ind.category}
                                                    </span>
                                                    <span className="flex items-center gap-1 px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-white">
                                                        <Shield className="w-3 h-3 text-[#FFD400]" />
                                                        <span>{ind.badge}</span>
                                                    </span>
                                                </div>

                                                {/* Title with Smooth Wave Animation */}
                                                <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FFD400] transition-colors uppercase leading-snug">
                                                    <Link href={`/industries/${ind.slug}`}>
                                                        <WaveText text={ind.title} />
                                                    </Link>
                                                </h3>

                                                {/* Tagline */}
                                                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                                                    {ind.tagline}
                                                </p>

                                                {/* Key Metrics Pills with Animated Counter */}
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
                                            </div>

                                            {/* Featured Project Snapshot & Action Button */}
                                            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="space-y-0.5">
                                                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                                                        Showcase Project
                                                    </span>
                                                    <p className="text-xs font-mono text-white font-medium line-clamp-1">
                                                        {previewWork.title}
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

                {/* =========================================================================
            3. CROSS-INDUSTRY ARCHITECTURAL CONSULTATION SECTION
            ========================================================================= */}
                <section className="industry-consult-section max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/10">
                    <div className="bg-[#0c0e14]/60 backdrop-blur-md border border-white/15 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                        {/* Left Info */}
                        <div className="industry-consult-left lg:col-span-5 space-y-5">
                            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                <span>✧ LET&apos;S BUILD SOMETHING MEANINGFUL</span>
                            </span>
                            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold uppercase leading-tight">
                                YOUR INDUSTRY.<br />
                                OUR EXPERTISE.<br />
                                <span className="text-[#FFD400]">ONE SHARED VISION.</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                                Every business has a different challenge and a bigger ambition. Tell us where you want to go, and our team will help you identify the right digital, creative and technology solutions to get there.
                            </p>

                            <div className="p-4 bg-white/[0.02] border border-white/10 space-y-2.5 text-xs font-mono text-neutral-300">
                                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#FFD400] font-semibold mb-2">WHY CONNECT WITH RND?</p>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                                    <span>Solutions tailored to your business goals</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                                    <span>Integrated technology and creative expertise</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                                    <span>A collaborative approach from concept to execution</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="industry-consult-right lg:col-span-7">
                            {formSubmitted ? (
                                <div className="p-8 bg-black/60 border border-[#FFD400]/40 text-center space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-[#FFD400]/20 border border-[#FFD400] text-[#FFD400] flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white uppercase">
                                        Enquiry Received
                                    </h3>
                                    <p className="text-xs text-neutral-300 font-mono max-w-md mx-auto">
                                        Thank you. Our team will review your requirements and get in touch to discuss the next steps.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    {/* Form header */}
                                    <div className="pb-3 border-b border-white/10">
                                        <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white uppercase tracking-tight">
                                            Initiate Your Project Brief
                                        </h3>
                                        <p className="text-xs text-neutral-400 font-light mt-0.5">
                                            Share a few details about your business and requirements. Our team will connect with you to discuss the next steps.
                                        </p>
                                    </div>

                                    {/* Row 1: Name + Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                                Your Name <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your full name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                                Business Email Address <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="your@business.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2: Industry + Service */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                                Select Your Industry <span className="text-red-400">*</span>
                                            </label>
                                            <select
                                                required
                                                value={inquiryIndustry}
                                                onChange={(e) => setInquiryIndustry(e.target.value)}
                                                className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                                            >
                                                <option value="" disabled>Select your industry</option>
                                                <option value="Manufacturing & Industrial">Manufacturing &amp; Industrial</option>
                                                <option value="Healthcare & Dental">Healthcare &amp; Dental</option>
                                                <option value="Food & FMCG">Food &amp; FMCG</option>
                                                <option value="Retail & E-Commerce">Retail &amp; E-Commerce</option>
                                                <option value="Hospitality & Resorts">Hospitality &amp; Resorts</option>
                                                <option value="Education & Training">Education &amp; Training</option>
                                                <option value="Real Estate & Construction">Real Estate &amp; Construction</option>
                                                <option value="Startups & Professional Services">Startups &amp; Professional Services</option>
                                                <option value="Travel & Tourism">Travel &amp; Tourism</option>
                                                <option value="Finance & FinTech">Finance &amp; FinTech</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                                Service You&apos;re Interested In
                                            </label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="Technology Solutions">Technology Solutions</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Branding & Design">Branding &amp; Design</option>
                                                <option value="Media Production">Media Production</option>
                                                <option value="All / Integrated Solution">All / Integrated Solution</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Row 3: Budget */}
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                            Expected Budget
                                        </label>
                                        <select
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                                        >
                                            <option value="">Select budget range</option>
                                            <option value="Below ₹25,000">Below ₹25,000</option>
                                            <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                                            <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                                            <option value="₹1,00,000 – ₹3,00,000">₹1,00,000 – ₹3,00,000</option>
                                            <option value="₹3,00,000 – ₹5,00,000">₹3,00,000 – ₹5,00,000</option>
                                            <option value="₹5,00,000+">₹5,00,000+</option>
                                            <option value="Flexible / Need Consultation">Flexible / Need Consultation</option>
                                        </select>
                                    </div>

                                    {/* Row 4: Project Brief */}
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                            Tell Us About Your Project
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="Describe your business, objectives, challenges and what you're looking to achieve..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full p-3 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors resize-none"
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)] flex items-center justify-center space-x-2 group cursor-pointer disabled:opacity-60"
                                        >
                                            {isSubmitting ? (
                                                <span>Sending...</span>
                                            ) : (
                                                <>
                                                    <span>Submit Project Brief</span>
                                                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <RnDFooter />
        </div>
    );
}
