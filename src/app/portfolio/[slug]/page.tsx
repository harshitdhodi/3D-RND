"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, redirect } from "next/navigation";
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  ChevronDown,
  Layers,
  Zap,
  Globe,
  Smartphone,
  Palette,
  Video,
  ShieldCheck,
  Award,
  Activity,
  Cpu,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import {
  getPortfolioCategories,
  getPortfolioProjects,
  getPortfolioProjectBySlug,
  PortfolioCategory,
  PortfolioProject,
} from "@/lib/getPortfolioData";

function FAQSection({ categorySlug, description }: { categorySlug: string; description: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  // Default FAQs - can be made dynamic later
  const faqs = [
    {
      question: "What services do you offer?",
      answer: description,
    },
    {
      question: "How do I get started?",
      answer: "Contact us through the form below to discuss your project requirements.",
    },
  ];

  if (faqs.length === 0) return null;

  return (
    <div className="relative z-10 py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-4 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
            <Sparkles className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq: { question: string; answer: string }, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left group"
                >
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#FFD400] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all ${
                      isOpen ? "bg-[#FFD400] rotate-180" : ""
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? "text-black" : "text-neutral-400"
                      }`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-400 mb-4">Still have questions?</p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFD400] text-black font-mono text-sm uppercase font-bold hover:bg-[#ffe34d] transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioCategoryPage() {
  const params = useParams();
  const categorySlug = params?.category as string;
  const [category, setCategory] = useState<PortfolioCategory | null>(null);
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [catsData, projectsData] = await Promise.all([
          getPortfolioCategories(),
          getPortfolioProjects(categorySlug),
        ]);
        
        const foundCategory = catsData.find(c => c.slug === categorySlug);
        if (!foundCategory) {
          // Try to find as project slug
          const project = await getPortfolioProjectBySlug(categorySlug);
          if (project) {
            redirect(`/portfolios/${project.slug}`);
          }
        }
        
        setCategory(foundCategory || null);
        setProjects(projectsData);
      } catch (error) {
        console.error("Failed to load category data:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <Link href="/portfolio" className="text-[#FFD400] hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const iconMap: Record<string, any> = {
    Cpu,
    TrendingUp,
    Palette,
    Video,
    Smartphone,
    Globe,
    default: Layers,
  };
  const Icon = iconMap[category.icon] || iconMap.default;
  
  const categoryMeta = {
    title: category.title,
    description: category.description,
    icon: <Icon className="w-6 h-6" />,
    color: category.color,
    bannerImage: category.banner_image,
    stats: [
      { label: category.stats_label, value: category.stats_value, sub: category.stats_sub },
    ],
  };
  
  const categoryProjects = projects.filter(p => p.published);

  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white">
      <SpaceBackground />
      <Navbar />

      {/* Banner */}
      <PageBanner
        title={category.title.toUpperCase()}
        parentBreadcrumb={{ label: "PORTFOLIO", href: "/portfolio" }}
        breadcrumb={category.title.toUpperCase()}
        imageSrc={category.banner_image}
      />

      {/* Main Content */}
      <main className="relative z-20 w-full mt-12.5 rounded-t-4xl sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]">
        {/* Projects Grid Section - Now First */}
        <section className="relative pt-16 pb-8 px-4 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-4 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
                  <Sparkles className="w-4 h-4" />
                  <span>{category.slug}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                  {category.title}
                </h1>
                <p className="text-sm sm:text-base text-neutral-400">
                  {categoryProjects.length} {categoryProjects.length === 1 ? 'project' : 'projects'} in this category
                </p>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white border border-white/20 font-mono text-xs uppercase font-bold hover:bg-white/10 hover:border-[#FFD400]/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Portfolios</span>
              </Link>
            </div>

            {/* Projects Grid */}
            {categoryProjects.length === 0 ? (
              <div className="text-center py-20 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-neutral-400 mb-4">No projects available in this category yet.</p>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-[#FFD400] hover:underline"
                >
                  <span>Browse all projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {categoryProjects.map((project: PortfolioProject, idx: number) => (
                  <Link
                    key={project.slug}
                    href={`/portfolios/${project.slug}`}
                    className="group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl aspect-4/3 cursor-pointer"
                  >
                    {/* Project Image - Full Card */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                      
                      {/* Content overlay - appears on hover */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {/* Client & Year */}
                        <div className="flex items-center justify-between text-xs font-mono text-[#FFD400] mb-2">
                          <span className="truncate">{project.client}</span>
                          <span className="text-white/80 shrink-0 ml-2">{project.year}</span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                    
                      </div>
                      
                      {/* Index Badge - Always visible */}
                      <div className="absolute top-4 left-4 font-mono text-xs text-white px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 backdrop-blur-sm">
                        [{project.index}]
                      </div>

                      {/* Featured Badge - Always visible */}
                      {project.is_featured && (
                        <div className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] uppercase font-mono text-[#FFD400] px-2.5 py-1 rounded-lg bg-black/80 border border-[#FFD400]/40 backdrop-blur-sm">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Category Info & Performance Metrics Section */}
        <section
          className="relative w-full px-4 sm:px-8 lg:px-12 py-20 lg:py-24 overflow-hidden border-t border-white/[0.08]"
          style={{
            backgroundColor: "#05070D",
            backgroundImage:
              "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(255, 212, 0, 0.04) 0%, rgba(5, 7, 13, 0.98) 70%, #030408 100%)",
          }}
        >
          {/* Subtle Ambient Space Accent */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[350px] bg-[#FFD400]/[0.03] blur-[140px] rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Category Header Card */}
            <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent border border-white/[0.08] p-8 sm:p-10 lg:p-12 mb-10 lg:mb-12 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                
                {/* Executive Category Icon Frame */}
                <div className="relative shrink-0 group">
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-30 blur-md group-hover:opacity-70 transition-opacity duration-500"
                    style={{ backgroundColor: `${categoryMeta.color}50` }}
                  />
                  <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center bg-[#0B0E17] border border-white/15 shadow-xl transition-all duration-300 group-hover:border-[#FFD400]/60">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: `${categoryMeta.color}15`,
                        color: categoryMeta.color,
                        boxShadow: `inset 0 0 16px ${categoryMeta.color}20`,
                      }}
                    >
                      {categoryMeta.icon}
                    </div>
                  </div>
                </div>

                {/* Header Content */}
                <div className="flex-1 space-y-4">
                  {/* Category Pill Tag */}
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.2em] bg-white/[0.04] border border-white/10 text-neutral-300 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                    <span className="text-[#FFD400] font-semibold">OVERVIEW</span>
                    <span className="text-white/20">//</span>
                    <span className="text-neutral-400">{category.slug}</span>
                  </div>

                  {/* Formal Headline */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-archia)]">
                    About <span className="text-[#FFD400]">{category.title}</span>
                  </h2>

                  {/* Narrative Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-4xl font-light">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Formal Performance Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
              {categoryMeta.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-gradient-to-b from-[#0F131D]/90 via-[#0A0D14]/90 to-[#05070B]/90 border border-white/[0.08] hover:border-[#FFD400]/50 p-6 sm:p-7 lg:p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(255,212,0,0.08)] backdrop-blur-xl overflow-hidden flex flex-col justify-between"
                >
                  {/* Top Golden Hairline Highlight on Hover */}
                  <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400]/0 to-transparent group-hover:via-[#FFD400]/80 transition-all duration-500" />

                  {/* Corner Ambient Glow */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#FFD400]/0 group-hover:bg-[#FFD400]/[0.08] rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                  {/* Upper Tag Row: Formal Index & Verification Indicator */}
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                        METRIC [0{idx + 1}]
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 group-hover:text-[#FFD400] transition-colors">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FFD400]" />
                      <span className="uppercase tracking-wider">VERIFIED</span>
                    </div>
                  </div>

                  {/* Middle Row: Primary Metric Value */}
                  <div className="mb-4">
                    <div className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-none group-hover:text-[#FFD400] transition-colors duration-300 font-[family-name:var(--font-archia)]">
                      {stat.value}
                    </div>
                  </div>

                  {/* Lower Row: Formal Label & Context Subtitle */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-white font-mono group-hover:text-[#FFD400] transition-colors duration-300">
                      {stat.label}
                    </div>
                    {stat.sub && (
                      <div className="text-xs text-neutral-400 font-light leading-relaxed">
                        {stat.sub}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection categorySlug={category.slug} description={category.description} />

        {/* CTA Section */}
        <section className="relative py-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-br from-[#FFD400]/10 to-transparent border border-[#FFD400]/30">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-6 bg-black/40 border border-[#FFD400]/40 text-[#FFD400]">
                <Zap className="w-4 h-4" />
                <span>Start Your Project</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-base text-neutral-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project requirements and create a tailored solution that exceeds expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFD400] text-black font-mono text-sm uppercase font-bold hover:bg-[#ffe34d] transition-all shadow-[0_0_30px_rgba(255,212,0,0.4)]"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white border border-white/20 font-mono text-sm uppercase font-bold hover:bg-white/10 transition-all"
                >
                  <span>View All Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RnDFooter />
    </div>
  );
}
