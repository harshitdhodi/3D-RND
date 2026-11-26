"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Search,
    ArrowUpRight,
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
    ChevronRight,
    CheckCircle2,
    Send,
    Check,
    Building2,
    Sparkles,
    Cpu,
    Compass,
    Globe,
    Shield,
    TrendingUp,
    FileText,
    User,
    Mail,
    Phone,
    Link2,
    X,
    Layers,
    Upload,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";
import PageBanner from "@/components/PageBanner";
import PrintRevealImage from "@/components/PrintRevealImage";
import WaveText from "@/components/WaveText";
import { getJobDescriptions, JobDescription, submitCareerInquiry, getCareerHeroData, CareerHeroData } from "@/lib/getCareerData";
import { getPageComponents, PageComponent, DEFAULT_PAGE_COMPONENTS, isSectionActive, getSectionStyle } from "@/lib/getPageComponents";

const defaultServiceCategories = [
    "All Roles",
    "Spatial 3D & E-Commerce",
    "Web & Cloud",
    "Mobile Engineering",
    "AI & Data",
    "Technical SEO & Growth",
    "UI/UX & Spatial Design",
];

export default function CareerPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const formSectionRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const [activeCategory, setActiveCategory] = useState("All Roles");
    const [searchQuery, setSearchQuery] = useState("");
    const [careerRoles, setCareerRoles] = useState<JobDescription[]>([]);
    const [heroData, setHeroData] = useState<CareerHeroData | null>(null);
    const [selectedRole, setSelectedRole] = useState<JobDescription | null>(null);
    const [expandedRoleId, setExpandedRoleId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [pageComponents, setPageComponents] = useState<PageComponent[]>(DEFAULT_PAGE_COMPONENTS["career"] || []);

    // Application Modal / Drawer state for quick application
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Application Form States
    const [formData, setFormData] = useState({
        jobRoleId: "",
        fullName: "",
        email: "",
        phone: "",
        portfolioUrl: "",
        githubUrl: "",
        experience: "3-5 years",
        noticePeriod: "Immediate / 30 Days",
        resumeLink: "",
        note: "",
    });

    const [resumeFileName, setResumeFileName] = useState("");
    const [portfolioFileName, setPortfolioFileName] = useState("");
    const [resumeUploading, setResumeUploading] = useState(false);
    const [portfolioUploading, setPortfolioUploading] = useState(false);
    const [portfolioMode, setPortfolioMode] = useState<"file" | "url">("file");

    const handleFileUpload = async (file: File, type: "resume" | "portfolio") => {
        const MAX_SIZE = 15 * 1024 * 1024; // 15MB
        if (file.size > MAX_SIZE) {
            alert(`File size exceeds 15MB limit (current: ${(file.size / (1024 * 1024)).toFixed(2)}MB)`);
            return;
        }

        if (type === "resume") {
            setResumeUploading(true);
        } else {
            setPortfolioUploading(true);
        }

        try {
            const uploadData = new FormData();
            uploadData.append("file", file);
            uploadData.append("fieldType", "File");
            uploadData.append("isPublic", "true");
            uploadData.append("purpose", "career");

            const res = await fetch("/api/upload", {
                method: "POST",
                body: uploadData,
            });

            const json = await res.json();
            if (json.success && json.data?.url) {
                if (type === "resume") {
                    setFormData((prev) => ({ ...prev, resumeLink: json.data.url }));
                    setResumeFileName(file.name);
                } else {
                    setFormData((prev) => ({ ...prev, portfolioUrl: json.data.url }));
                    setPortfolioFileName(file.name);
                }
            } else {
                alert(json.error || "Failed to upload file. Please try again.");
            }
        } catch (err) {
            console.error("Upload error:", err);
            alert("An error occurred during file upload. Please try again.");
        } finally {
            if (type === "resume") {
                setResumeUploading(false);
            } else {
                setPortfolioUploading(false);
            }
        }
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Fetch career data from backend
    useEffect(() => {
        async function fetchData() {
            try {
                const [jobs, hero, comps] = await Promise.all([
                    getJobDescriptions(),
                    getCareerHeroData(),
                    getPageComponents("career"),
                ]);
                setCareerRoles(jobs);
                if (hero) {
                    setHeroData(hero);
                }
                if (comps && comps.length > 0) {
                    setPageComponents(comps);
                }
                if (jobs.length > 0) {
                    setSelectedRole(jobs[0]);
                    setFormData((prev) => ({ ...prev, jobRoleId: jobs[0]._id || jobs[0].id || "" }));
                }
            } catch (error) {
                console.error("Failed to fetch career data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Dynamically derive unique service categories from the backend jobs
    const categories = useMemo(() => {
        const unique = Array.from(
            new Set(
                careerRoles
                    .map((r) => r.service_category?.trim())
                    .filter(Boolean)
            )
        );
        if (unique.length > 0) {
            return ["All Roles", ...unique];
        }
        return defaultServiceCategories;
    }, [careerRoles]);

    // Filtered job list with robust null-checks
    const filteredRoles = useMemo(() => {
        return careerRoles.filter((role) => {
            const cat = role.service_category || "";
            const matchesCategory =
                activeCategory === "All Roles" ||
                cat.toLowerCase().trim() === activeCategory.toLowerCase().trim() ||
                cat.toLowerCase().includes(activeCategory.toLowerCase()) ||
                activeCategory.toLowerCase().includes(cat.toLowerCase());

            const query = searchQuery.trim().toLowerCase();
            const matchesSearch =
                query === "" ||
                (role.title && role.title.toLowerCase().includes(query)) ||
                (role.service_category && role.service_category.toLowerCase().includes(query)) ||
                (role.tagline && role.tagline.toLowerCase().includes(query)) ||
                (role.department && role.department.toLowerCase().includes(query)) ||
                (role.location && role.location.toLowerCase().includes(query)) ||
                (role.description && role.description.toLowerCase().includes(query)) ||
                (Array.isArray(role.tech_stack) && role.tech_stack.some((t) => t.toLowerCase().includes(query)));

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery, careerRoles]);

    // Handle clicking "Apply Now" on any card: updates form selection and scrolls to form (or opens drawer)
    const handleApplyClick = (role: JobDescription) => {
        const roleId = role._id || role.id || "";
        setSelectedRole(role);
        setFormData((prev) => ({
            ...prev,
            jobRoleId: roleId,
        }));
        if (formSectionRef.current) {
            formSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (portfolioUploading || resumeUploading) {
            alert('Please wait for file uploads to complete.');
            return;
        }
        if (!formData.portfolioUrl) {
            alert('Please attach or upload your Portfolio / Work Deck to proceed.');
            return;
        }
        if (!formData.resumeLink) {
            alert('Please upload your Resume / CV (PDF, DOC, DOCX) to proceed.');
            return;
        }
        setIsSubmitting(true);
        
        try {
            const success = await submitCareerInquiry({
                job_role_id: formData.jobRoleId,
                job_title: selectedRole?.title || '',
                full_name: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                portfolio_url: formData.portfolioUrl,
                github_url: formData.githubUrl,
                experience: formData.experience,
                notice_period: formData.noticePeriod,
                resume_link: formData.resumeLink,
                note: formData.note,
            });
            
            if (success) {
                setIsSubmitted(true);
                router.push("/thank-you?type=career");
            } else {
                alert('Failed to submit application. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // GSAP Scroll Animations
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // 1. Filter buttons stagger
            gsap.fromTo(
                ".career-filter-btn",
                { opacity: 0, y: 18, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".career-filter-bar",
                        start: "top 88%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // 2. Job role cards stagger
            gsap.fromTo(
                ".career-job-card",
                { opacity: 0, y: 35, filter: "blur(4px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    stagger: 0.12,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".career-jobs-grid",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // 3. Culture & Perks cards stagger
            gsap.fromTo(
                ".career-perk-card",
                { opacity: 0, y: 25 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".career-perks-section",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, pageRef);

        return () => ctx.revert();
    }, [filteredRoles]);

    return (
        <div
            ref={pageRef}
            className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black"
        >
            {/* Background Starfield */}
            <SpaceBackground />

            {/* Global Navbar */}
            <Navbar />

            {/* Page Banner with Typewriter Title */}
            {isSectionActive(pageComponents, "banner") && (
                <div style={getSectionStyle(pageComponents, "banner")}>
                    <PageBanner
                        title="CAREER OPPORTUNITIES"
                        breadcrumb="CAREERS"
                        imageSrc="/banner/career.png"
                    />
                </div>
            )}

            {/* Main Content (Directly below banner without overlap) */}
            <main className="relative z-10 w-full">
                {/* =========================================================================
            1. ENGINEERING ATELIER PHILOSOPHY HERO BAR
            ========================================================================= */}
                {isSectionActive(pageComponents, "philosophy_hero") && (
                <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 sm:pt-12 pb-8" style={getSectionStyle(pageComponents, "philosophy_hero")}>
                    <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0c0e14] via-[#121520] to-[#0c0e14] border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="relative z-10 max-w-3xl space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>{heroData?.tagline || "R&D ENGINEERING ATELIER"}</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-tight">
                                {heroData?.title || "Build the Future of Digital & Spatial Systems"}
                            </h1>
                            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed whitespace-pre-line">
                                {(heroData?.description || "We are an elite squad of spatial 3D architects, full-stack engineers, and creative technologists pushing the limits of the web. Explore high-autonomy opportunities mapped across our core engineering disciplines.").trim()}
                            </p>
                        </div>

                        {/* Quick Stats Pill Grid */}
                        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                            {(heroData?.counter && heroData.counter.length > 0
                                ? heroData.counter
                                : [
                                    { heading: "Active Openings", sub_heading: `${careerRoles.length || 5} Positions` },
                                    { heading: "Work Modality", sub_heading: "Remote & Hybrid" },
                                    { heading: "Exploratory R&D", sub_heading: "20% Lab Time" },
                                    { heading: "Application SLA", sub_heading: "48-Hr Review" },
                                ]
                            ).map((item, idx) => (
                                <div key={idx} className="p-3 bg-white/[0.02] border border-white/10">
                                    <p className="text-neutral-500 uppercase text-[10px] tracking-widest">{item.heading}</p>
                                    <p className={`text-lg font-bold mt-1 ${idx === 0 || idx === 3 ? "text-[#FFD400]" : "text-white"}`}>
                                        {item.sub_heading || (idx === 0 ? `${careerRoles.length} Positions` : "")}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                )}

                {/* =========================================================================
            2. SERVICE CATEGORY FILTER & SEARCH BAR
            ========================================================================= */}
                {isSectionActive(pageComponents, "filter_search") && (
                <section className="career-filter-bar max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-6 border-b border-white/10" style={getSectionStyle(pageComponents, "filter_search")}>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                        {/* Service Typology Filters */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => {
                                const isSelected = activeCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setActiveCategory(cat)}
                                        className={`career-filter-btn px-4 py-2 text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer rounded-none border ${isSelected
                                                ? "bg-[#FFD400] text-black border-[#FFD400] font-bold shadow-[0_0_20px_rgba(255,212,0,0.3)]"
                                                : "bg-[#0c0e14] text-neutral-300 border-white/10 hover:border-[#FFD400] hover:text-[#FFD400]"
                                            }`}
                                    >
                                        <span>{cat}</span>
                                        <span className="ml-1 opacity-75">+</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Keyword Search */}
                        <div className="relative w-full lg:w-80 shrink-0">
                            <Search className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search roles, skills, or services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#0c0e14] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors shadow-sm"
                            />
                        </div>
                    </div>
                </section>
                )}

                {/* =========================================================================
            3. JOB ROLES LISTING SECTION (With Right-to-Left Printer Reveal Images)
            ========================================================================= */}
                {isSectionActive(pageComponents, "jobs_listing") && (
                <section className="career-jobs-grid max-w-7xl mx-auto px-6 md:px-12 py-12" style={getSectionStyle(pageComponents, "jobs_listing")}>
                    {loading ? (
                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="min-h-[300px] bg-[#0c0e14] border border-white/10 p-8 flex flex-col justify-center space-y-4 animate-pulse">
                                    <div className="flex gap-2">
                                        <div className="h-5 w-24 bg-white/10" />
                                        <div className="h-5 w-20 bg-white/10" />
                                        <div className="h-5 w-16 bg-white/10" />
                                    </div>
                                    <div className="h-8 w-2/3 bg-white/10" />
                                    <div className="h-4 w-full bg-white/5" />
                                    <div className="h-4 w-4/5 bg-white/5" />
                                    <div className="flex gap-2 pt-2">
                                        <div className="h-6 w-16 bg-white/5" />
                                        <div className="h-6 w-16 bg-white/5" />
                                        <div className="h-6 w-16 bg-white/5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : filteredRoles.length === 0 ? (
                        <div className="text-center py-20 bg-[#0c0e14] border border-white/10 p-8 space-y-4">
                            <p className="text-sm font-mono text-neutral-400">
                                No roles found matching &quot;{searchQuery}&quot; under {activeCategory}.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setActiveCategory("All Roles");
                                    setSearchQuery("");
                                }}
                                className="px-5 py-2 bg-[#FFD400] text-black text-xs font-mono uppercase tracking-wider font-bold cursor-pointer"
                            >
                                Reset Filters
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {filteredRoles.map((role, idx) => {
                                const roleId = role._id || role.id || `role-${idx}`;
                                const isExpanded = expandedRoleId === roleId;

                                return (
                                    <article
                                        key={roleId}
                                        className="career-job-card group bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 shadow-xl overflow-hidden flex flex-col"
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[340px]">

                                            {/* Left: Role Image with Multi-Directional Smooth Glide & Settle Animation */}
                                            <div className="lg:col-span-5 xl:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-auto min-h-full flex flex-col justify-stretch self-stretch overflow-hidden">
                                                <PrintRevealImage
                                                    src={role.image || "/banner/career.png"}
                                                    alt={role.title}
                                                    badge={role.service_category}
                                                    aspectClass="w-full h-full min-h-full"
                                                    className="w-full h-full border-0 lg:border-r border-white/10"
                                                    index={idx}
                                                />
                                            </div>

                                            {/* Right: Role Details & Actions */}
                                            <div className="lg:col-span-7 xl:col-span-7 p-6 sm:p-8 lg:p-9 space-y-5 flex flex-col justify-between">
                                                <div className="space-y-4">
                                                    {/* Meta Tags: Category • Department • Level • Type • Experience • Location */}
                                                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                                                        {role.service_category && (
                                                            <span className="px-2.5 py-0.5 bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30 font-bold">
                                                                {role.service_category}
                                                            </span>
                                                        )}
                                                        {role.department && (
                                                            <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10">
                                                                {role.department}
                                                            </span>
                                                        )}
                                                        {role.level && (
                                                            <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-white font-medium">
                                                                {role.level}
                                                            </span>
                                                        )}
                                                        {role.type && (
                                                            <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-neutral-300">
                                                                {role.type}
                                                            </span>
                                                        )}
                                                        {role.experience && (
                                                            <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-neutral-300">
                                                                {role.experience}
                                                            </span>
                                                        )}
                                                        {role.location && (
                                                            <span className="flex items-center gap-1 px-2.5 py-0.5 bg-white/[0.04] border border-white/10">
                                                                <MapPin className="w-3 h-3 text-[#FFD400]" />
                                                                <span>{role.location}</span>
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Role Title with Smooth Wave Animation */}
                                                    <h2 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-[#FFD400] transition-colors uppercase leading-snug">
                                                        <WaveText text={role.title} />
                                                    </h2>

                                                    {/* Tagline */}
                                                    {role.tagline && (
                                                        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                                                            {role.tagline}
                                                        </p>
                                                    )}

                                                    {/* Tech Stack Pills */}
                                                    {Array.isArray(role.tech_stack) && role.tech_stack.length > 0 && (
                                                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                                            {role.tech_stack.map((tech) => (
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

                                                {/* Compensation & Actions Row */}
                                                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                    <div className="space-y-0.5">
                                                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                                                            Compensation Package (Est.)
                                                        </span>
                                                        <p className="text-xs sm:text-sm font-mono text-[#FFD400] font-bold">
                                                            {role.compensation || "Competitive"}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        {((role.key_responsibilities && role.key_responsibilities.length > 0) ||
                                                          (role.requirements && role.requirements.length > 0) ||
                                                          role.description) && (
                                                            <button
                                                                type="button"
                                                                onClick={() => setExpandedRoleId(isExpanded ? null : roleId)}
                                                                className="px-4 py-2 border border-white/20 hover:border-white text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-colors cursor-pointer"
                                                            >
                                                                {isExpanded ? "Hide Specs" : "View Specs"}
                                                            </button>
                                                        )}

                                                        <button
                                                            type="button"
                                                            onClick={() => handleApplyClick(role)}
                                                            className="px-5 py-2.5 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,212,0,0.3)] transition-all cursor-pointer group/btn"
                                                        >
                                                            <span>Apply for Role</span>
                                                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Inline Expandable Specs & Responsibilities */}
                                        {isExpanded && (
                                            <div className="p-6 sm:p-8 border-t border-white/10 bg-[#08090d]/80 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                                                {role.key_responsibilities && role.key_responsibilities.length > 0 && (
                                                    <div className="space-y-2.5">
                                                        <span className="text-[#FFD400] font-bold uppercase tracking-wider block">
                                                            Key Responsibilities
                                                        </span>
                                                        <ul className="space-y-2 text-neutral-300">
                                                            {role.key_responsibilities.map((resp, idx) => (
                                                                <li key={idx} className="flex items-start gap-2">
                                                                    <span className="text-[#FFD400] shrink-0 mt-0.5">›</span>
                                                                    <span className="font-light leading-relaxed">{resp}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {role.requirements && role.requirements.length > 0 && (
                                                    <div className="space-y-2.5">
                                                        <span className="text-white font-bold uppercase tracking-wider block">
                                                            Core Prerequisites
                                                        </span>
                                                        <ul className="space-y-2 text-neutral-300">
                                                            {role.requirements.map((req, idx) => (
                                                                <li key={idx} className="flex items-start gap-2">
                                                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0 mt-0.5" />
                                                                    <span className="font-light leading-relaxed">{req}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {role.description && (
                                                    <div className="col-span-full pt-3 border-t border-white/5 space-y-1.5">
                                                        <span className="text-[#FFD400] font-bold uppercase tracking-wider block text-[10px]">
                                                            Role Overview
                                                        </span>
                                                        <p className="text-neutral-300 font-light leading-relaxed whitespace-pre-line text-xs font-mono">
                                                            {role.description}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </section>
                )}

                {/* =========================================================================
            4. APPLICATION FORM SECTION (Prefilled with Specific Role)
            ========================================================================= */}
                {isSectionActive(pageComponents, "application_form") && (
                <section
                    ref={formSectionRef}
                    id="apply-section"
                    className="max-w-7xl mx-auto px-6 md:px-12 py-16 scroll-mt-24 border-t border-white/10"
                    style={getSectionStyle(pageComponents, "application_form")}
                >
                    <div className="bg-[#0c0e14] border border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                        {/* Left Column (5 cols): Instructions & Role Summary */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="space-y-3">
                                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center space-x-2">
                                    <Briefcase className="w-4 h-4" />
                                    <span>DIRECT ENGINEERING APPLICATION</span>
                                </span>
                                <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold uppercase leading-tight">
                                    Join the Atelier Squad
                                </h2>
                                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                                    Submit your engineering portfolio and background. We evaluate candidates primarily on past repository code quality, system design intuition, and problem-solving velocity.
                                </p>
                            </div>

                            {/* Active Selected Role Preview Box */}
                            {selectedRole && (
                                <div className="p-5 bg-white/[0.02] border border-[#FFD400]/30 shadow-lg space-y-3">
                                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                                        <span className="text-[10px] font-mono text-[#FFD400] uppercase tracking-widest font-bold">
                                            Target Job Role
                                        </span>
                                        <span className="text-[10px] font-mono px-2 py-0.5 bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30">
                                            {selectedRole.level}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-white uppercase">
                                            {selectedRole.title}
                                        </h3>
                                        <p className="text-xs text-neutral-400 font-mono mt-0.5">
                                            Service: {selectedRole.service_category}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 pt-1">
                                        <span>{selectedRole.location}</span>
                                        <span>•</span>
                                        <span className="text-[#FFD400]">{selectedRole.compensation}</span>
                                    </div>
                                </div>
                            )}

                           
                        </div>

                        {/* Right Column (7 cols): The Application Form */}
                        <div className="lg:col-span-7">
                            {isSubmitted ? (
                                <div className="py-12 text-center space-y-4 bg-white/[0.02] border border-white/10 p-8 rounded-xl">
                                    <div className="w-14 h-14 rounded-full bg-[#FFD400] text-black mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(255,212,0,0.5)]">
                                        <Check className="w-7 h-7 stroke-[3]" />
                                    </div>
                                    <h3 className="text-xl font-[family-name:var(--font-syne)] font-bold text-white uppercase">
                                        Application Transmitted
                                    </h3>
                                    <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                                        Thank you, <strong className="text-white">{formData.fullName}</strong>. Your engineering profile for <span className="text-[#FFD400] font-mono">{selectedRole?.title}</span> has been received. Our Lead Architects review submissions within 48 business hours.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({
                                                jobRoleId: careerRoles[0]?._id || careerRoles[0]?.id || "",
                                                fullName: "",
                                                email: "",
                                                phone: "",
                                                portfolioUrl: "",
                                                githubUrl: "",
                                                experience: "3-5 years",
                                                noticePeriod: "Immediate / 30 Days",
                                                resumeLink: "",
                                                note: "",
                                            });
                                            setResumeFileName("");
                                            setPortfolioFileName("");
                                        }}
                                        className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:border-[#FFD400] transition-colors cursor-pointer"
                                    >
                                        Submit Another Application
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4">

                                    {/* Select Role Dropdown */}
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                            Applying for Job Role *
                                        </label>
                                        <select
                                            value={formData.jobRoleId}
                                            onChange={(e) => {
                                                const newRoleId = e.target.value;
                                                setFormData({ ...formData, jobRoleId: newRoleId });
                                                const found = careerRoles.find((r) => (r._id || r.id) === newRoleId);
                                                if (found) setSelectedRole(found);
                                            }}
                                            className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                                        >
                                            {careerRoles.map((r) => {
                                                const rId = r._id || r.id || "";
                                                return (
                                                    <option key={rId} value={rId}>
                                                        {r.title} ({r.service_category})
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>

                                    {/* Candidate Name & Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <User className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Arjun Patel"
                                                    value={formData.fullName}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, fullName: e.target.value })
                                                    }
                                                    className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <Mail className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="arjun@example.com"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone & Experience */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                                Phone / WhatsApp *
                                            </label>
                                            <div className="relative">
                                                <Phone className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="+91 98200 54321"
                                                    value={formData.phone}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, phone: e.target.value })
                                                    }
                                                    className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                                Years of Experience
                                            </label>
                                            <select
                                                value={formData.experience}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, experience: e.target.value })
                                                }
                                                className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                                            >
                                                <option value="1-3 years">1 - 3 Years</option>
                                                <option value="3-5 years">3 - 5 Years</option>
                                                <option value="5-8 years">5 - 8 Years</option>
                                                <option value="8+ years">8+ Years (Principal / Staff)</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Portfolio (File / Link) & GitHub/LinkedIn URLs */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Portfolio File / Deck */}
                                        <div>
                                            <div className="flex items-center justify-between mb-1.5">
                                                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                                                    Portfolio File / Deck *
                                                </label>
                                                <button
                                                    type="button"
                                                    onClick={() => setPortfolioMode(portfolioMode === "file" ? "url" : "file")}
                                                    className="text-[10px] font-mono text-[#FFD400]/80 hover:text-[#FFD400] underline uppercase cursor-pointer"
                                                >
                                                    {portfolioMode === "file" ? "Or URL Link" : "Or File Upload"}
                                                </button>
                                            </div>

                                            {portfolioMode === "file" ? (
                                                formData.portfolioUrl && !portfolioUploading ? (
                                                    <div className="flex items-center justify-between p-2.5 bg-white/[0.04] border border-[#FFD400]/40 text-xs font-mono">
                                                        <div className="flex items-center gap-2 truncate">
                                                            <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0" />
                                                            <span className="truncate text-neutral-200">
                                                                {portfolioFileName || formData.portfolioUrl.split("/").pop()}
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setFormData((prev) => ({ ...prev, portfolioUrl: "" }));
                                                                setPortfolioFileName("");
                                                            }}
                                                            className="text-neutral-400 hover:text-white ml-2 p-1 hover:bg-white/10 rounded transition-colors"
                                                            title="Remove file"
                                                        >
                                                            <X className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <label
                                                        onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                                        onDrop={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            const file = e.dataTransfer.files?.[0];
                                                            if (file) handleFileUpload(file, "portfolio");
                                                        }}
                                                        className={`flex flex-col items-center justify-center p-2.5 border border-dashed rounded-none cursor-pointer transition-all ${
                                                            portfolioUploading
                                                                ? "border-[#FFD400] bg-[#FFD400]/5"
                                                                : "border-white/20 bg-white/[0.02] hover:border-[#FFD400]/50 hover:bg-white/[0.04]"
                                                        }`}
                                                    >
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            accept=".pdf,.zip,.rar,.doc,.docx,.png,.jpg,.jpeg,.webp"
                                                            disabled={portfolioUploading}
                                                            onChange={(e) => {
                                                                const file = e.target.files?.[0];
                                                                if (file) handleFileUpload(file, "portfolio");
                                                            }}
                                                        />
                                                        {portfolioUploading ? (
                                                            <div className="flex items-center gap-2 text-xs font-mono text-[#FFD400] py-0.5">
                                                                <div className="w-3 h-3 border-2 border-[#FFD400] border-t-transparent rounded-full animate-spin" />
                                                                <span>Uploading Portfolio...</span>
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white py-0.5">
                                                                <Upload className="w-3.5 h-3.5 text-[#FFD400]" />
                                                                <span>Upload Portfolio File (PDF/ZIP/IMG)</span>
                                                            </div>
                                                        )}
                                                    </label>
                                                )
                                            ) : (
                                                <div className="relative">
                                                    <Link2 className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                                                    <input
                                                        type="url"
                                                        placeholder="https://arjun.dev / behance / figma"
                                                        value={formData.portfolioUrl}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, portfolioUrl: e.target.value })
                                                        }
                                                        className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* GitHub / LinkedIn URL */}
                                        <div>
                                            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                                GitHub / LinkedIn URL
                                            </label>
                                            <div className="relative">
                                                <Link2 className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                                                <input
                                                    type="url"
                                                    placeholder="https://github.com/username"
                                                    value={formData.githubUrl}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, githubUrl: e.target.value })
                                                    }
                                                    className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Resume PDF / File Upload */}
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center justify-between">
                                            <span>Resume / CV (PDF, DOC, DOCX) *</span>
                                            <span className="text-[10px] text-neutral-500 font-mono lowercase">Max 15MB file</span>
                                        </label>
                                        {formData.resumeLink && !resumeUploading ? (
                                            <div className="flex items-center justify-between p-3 bg-white/[0.04] border border-[#FFD400]/40 text-xs font-mono">
                                                <div className="flex items-center gap-2.5 truncate">
                                                    <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0" />
                                                    <div className="truncate">
                                                        <span className="text-white block truncate">
                                                            {resumeFileName || formData.resumeLink.split("/").pop()}
                                                        </span>
                                                        <span className="text-[10px] text-[#FFD400]">Attached &bull; Ready to transmit</span>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setFormData((prev) => ({ ...prev, resumeLink: "" }));
                                                        setResumeFileName("");
                                                    }}
                                                    className="text-neutral-400 hover:text-white p-1 hover:bg-white/10 rounded transition-colors"
                                                    title="Remove resume"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <label
                                                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                                                onDrop={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    const file = e.dataTransfer.files?.[0];
                                                    if (file) handleFileUpload(file, "resume");
                                                }}
                                                className={`flex flex-col items-center justify-center p-4 border border-dashed rounded-none cursor-pointer transition-all ${
                                                    resumeUploading
                                                        ? "border-[#FFD400] bg-[#FFD400]/5"
                                                        : "border-white/20 bg-white/[0.02] hover:border-[#FFD400]/50 hover:bg-white/[0.04]"
                                                }`}
                                            >
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    accept=".pdf,.doc,.docx"
                                                    disabled={resumeUploading}
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) handleFileUpload(file, "resume");
                                                    }}
                                                />
                                                {resumeUploading ? (
                                                    <div className="flex items-center gap-2 text-xs font-mono text-[#FFD400] py-1">
                                                        <div className="w-3.5 h-3.5 border-2 border-[#FFD400] border-t-transparent rounded-full animate-spin" />
                                                        <span>Uploading Resume to Atelier...</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-col items-center gap-1.5 text-center py-1">
                                                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                                                            <Upload className="w-4 h-4 text-[#FFD400]" />
                                                            <span className="font-medium text-white">Choose Resume File</span>
                                                            <span className="text-neutral-500 font-light">or drag and drop</span>
                                                        </div>
                                                        <span className="text-[10px] font-mono text-neutral-500">
                                                            PDF, DOC, DOCX up to 15MB
                                                        </span>
                                                    </div>
                                                )}
                                            </label>
                                        )}
                                    </div>

                                    {/* Cover Note */}
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                                            Engineering Philosophy &amp; Why RnD Technosoft?
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="Highlight what drives you, notable technical challenges you've solved, or projects you're proud of..."
                                            value={formData.note}
                                            onChange={(e) =>
                                                setFormData({ ...formData, note: e.target.value })
                                            }
                                            className="w-full p-3 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Submit CTA */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                                        <p className="text-[11px] text-neutral-400 font-mono">
                                            Confidential review. Your details will not be shared externally.
                                        </p>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-8 py-3.5 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)] flex items-center justify-center space-x-2 group cursor-pointer disabled:opacity-60"
                                        >
                                            {isSubmitting ? (
                                                <span>Encrypting Profile...</span>
                                            ) : (
                                                <>
                                                    <span>Transmit Application</span>
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
                )}
            </main>

            {/* Global RnDFooter */}
            <RnDFooter />
        </div>
    );
}
