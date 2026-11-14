"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
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
  Cpu,
  TrendingUp,
  Calendar,
  Clock,
  Target,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import {
  getPortfolioCategories,
  getPortfolioProjects,
  getPortfolioProjectBySlug,
  getPortfolioHeroByCategory,
  getPortfolioFaqs,
  getPortfolioCta,
  PortfolioCategory,
  PortfolioProject,
  PortfolioHeroData,
  PortfolioFaqItem,
  PortfolioCtaData,
  DEFAULT_PORTFOLIO_CTA,
} from "@/lib/getPortfolioData";
import {
  getSectionHeading,
  SectionHeading,
  DEFAULT_SECTION_HEADINGS,
} from "@/lib/getSectionHeading";

// =========================================================================
// Reusable FAQ Section
// =========================================================================
function FAQSection({
  categoryTitle,
  description,
  faqsList,
  heading,
}: {
  categoryTitle: string;
  description: string;
  faqsList: PortfolioFaqItem[];
  heading: SectionHeading;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayFaqs =
    faqsList && faqsList.length > 0
      ? faqsList
      : [
          {
            question: `What services are included in ${categoryTitle}?`,
            answer: description,
          },
          {
            question: "How do I get started?",
            answer:
              "Contact us through the form below to discuss your project requirements.",
          },
        ];

  if (displayFaqs.length === 0) return null;

  return (
    <div className="relative z-10 py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-4 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
            <Sparkles className="w-4 h-4" />
            <span>{heading?.badge || "Frequently Asked Questions"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {heading?.title || "Got Questions? We've Got Answers"}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            {heading?.subtitle || "Everything you need to know about our services"}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {displayFaqs.map((faq, index: number) => {
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
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed whitespace-pre-line">
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
          <p className="text-neutral-400 mb-4">
            {heading?.tagline || "Still have questions?"}
          </p>
          <Link
            href={heading?.button_link || "/contact-us"}
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

// =========================================================================
// Reusable Bottom CTA Section
// =========================================================================
function PortfolioCTASection({ ctaData }: { ctaData: PortfolioCtaData }) {
  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-br from-[#FFD400]/10 to-transparent border border-[#FFD400]/30">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-6 bg-black/40 border border-[#FFD400]/40 text-[#FFD400]">
            <Zap className="w-4 h-4" />
            <span>{ctaData.badge || "Start Your Project"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {ctaData.title || "Ready to Build Something Amazing?"}
          </h2>
          <p className="text-base text-neutral-300 mb-8 max-w-2xl mx-auto">
            {ctaData.description ||
              "Let's discuss your project requirements and create a tailored solution that exceeds expectations."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaData.primary_button_link || "/contact-us"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFD400] text-black font-mono text-sm uppercase font-bold hover:bg-[#ffe34d] transition-all shadow-[0_0_30px_rgba(255,212,0,0.4)]"
            >
              <span>{ctaData.primary_button_text || "Get Started"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href={ctaData.secondary_button_link || "/portfolio"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white border border-white/20 font-mono text-sm uppercase font-bold hover:bg-white/10 transition-all"
            >
              <span>{ctaData.secondary_button_text || "View All Projects"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// Main Unified Dynamic Portfolio Page (/portfolio/:slug)
// =========================================================================
export default function PortfolioSlugPage() {
  const params = useParams();
  const slug = (params?.slug || params?.category) as string;

  const [viewType, setViewType] = useState<
    "loading" | "category" | "project" | "not_found"
  >("loading");

  // Category State
  const [category, setCategory] = useState<PortfolioCategory | null>(null);
  const [categoryProjects, setCategoryProjects] = useState<PortfolioProject[]>([]);
  const [categoryHero, setCategoryHero] = useState<PortfolioHeroData | null>(null);

  // Project State
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<PortfolioProject[]>([]);

  // Shared Dynamic CMS Data
  const [faqs, setFaqs] = useState<PortfolioFaqItem[]>([]);
  const [faqHeading, setFaqHeading] = useState<SectionHeading>(
    DEFAULT_SECTION_HEADINGS.portfolio_faqs
  );
  const [ctaData, setCtaData] = useState<PortfolioCtaData>(DEFAULT_PORTFOLIO_CTA);

  useEffect(() => {
    async function loadData() {
      if (!slug) return;
      try {
        const [catsData, allProjects, faqHeadingData, ctaRes] =
          await Promise.all([
            getPortfolioCategories(),
            getPortfolioProjects(),
            getSectionHeading("portfolio_faqs"),
            getPortfolioCta(),
          ]);

        setFaqHeading(faqHeadingData);
        setCtaData(ctaRes);

        // 1. Check if slug matches a Category
        const foundCategory = catsData.find((c) => c.slug === slug);
        if (foundCategory) {
          setCategory(foundCategory);
          const filtered = allProjects.filter(
            (p) => p.category_slug === foundCategory.slug && p.published
          );
          setCategoryProjects(filtered);
          const [faqsData, heroRes] = await Promise.all([
            getPortfolioFaqs(foundCategory.slug),
            getPortfolioHeroByCategory(foundCategory.slug),
          ]);
          setFaqs(faqsData);
          setCategoryHero(heroRes);
          setViewType("category");
          return;
        }

        // 2. Check if slug matches a Project
        const projectData = await getPortfolioProjectBySlug(slug);
        if (projectData) {
          setProject(projectData);
          const related = allProjects
            .filter(
              (p) =>
                p.category_slug === projectData.category_slug &&
                p.slug !== projectData.slug &&
                p.published
            )
            .slice(0, 3);
          setRelatedProjects(related);
          const faqsData = await getPortfolioFaqs(projectData.category_slug);
          setFaqs(faqsData);
          setViewType("project");
          return;
        }

        // 3. Neither category nor project found
        setViewType("not_found");
      } catch (error) {
        console.error("Failed to load portfolio item:", error);
        setViewType("not_found");
      }
    }

    loadData();
  }, [slug]);

  // Loading Screen
  if (viewType === "loading") {
    return (
      <div className="min-h-screen bg-[#050608] text-white flex items-center justify-center font-archia">
        <SpaceBackground />
        <div className="relative z-10 text-center space-y-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#FFD400] border-t-transparent animate-spin mx-auto" />
          <p className="font-mono text-sm tracking-widest text-[#FFD400] uppercase">
            Loading Telemetry...
          </p>
        </div>
      </div>
    );
  }

  // Not Found Screen
  if (viewType === "not_found") {
    return (
      <div className="min-h-screen bg-[#050608] text-white flex items-center justify-center font-archia px-4">
        <SpaceBackground />
        <div className="relative z-10 text-center max-w-md mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 border border-white/20 text-[#FFD400]">
            <Sparkles className="w-4 h-4" />
            <span>404 // NOT FOUND</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight">
            Portfolio Item Not Found
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            The requested portfolio category or case study could not be located in our archives.
          </p>
          <div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFD400] text-black font-mono text-xs uppercase font-bold hover:bg-[#ffe34d] transition-all shadow-[0_0_25px_rgba(255,212,0,0.3)]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio Archive</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW A: CATEGORY ARCHIVE VIEW
  // =========================================================================
  if (viewType === "category" && category) {
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
        {
          label: category.stats_label,
          value: category.stats_value,
          sub: category.stats_sub,
        },
      ],
    };

    return (
      <div className="font-archia relative min-h-screen bg-[#050608] text-white">
        <SpaceBackground />
        <Navbar />

        {/* Banner */}
        <PageBanner
          title={categoryHero?.banner_title?.toUpperCase() || categoryHero?.Title?.toUpperCase() || category.title.toUpperCase()}
          parentBreadcrumb={{ label: "PORTFOLIO", href: "/portfolio" }}
          breadcrumb={categoryHero?.banner_title?.toUpperCase() || categoryHero?.Title?.toUpperCase() || category.title.toUpperCase()}
          imageSrc={categoryHero?.bannerImg || categoryHero?.banner_image || category.banner_image}
          imgtitle={categoryHero?.imgtitle || category.imgtitle || `${category.title} Banner`}
          altname={categoryHero?.altname || category.altname || `${category.title} - RND Technosoft`}
        />

        {/* Main Content */}
        <main className="relative z-20 w-full mt-12.5 rounded-t-4xl sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]">
          {/* Projects Grid Section */}
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
                    {categoryProjects.length}{" "}
                    {categoryProjects.length === 1 ? "project" : "projects"} in
                    this category
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
                  <p className="text-neutral-400 mb-4">
                    No projects available in this category yet.
                  </p>
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
                  {categoryProjects.map((proj: PortfolioProject) => (
                    <Link
                      key={proj.slug}
                      href={`/portfolio/${proj.slug}`}
                      className="group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl aspect-4/3 cursor-pointer"
                    >
                      {/* Project Image */}
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        {/* Dark overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                        {/* Content overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          <div className="flex items-center justify-between text-xs font-mono text-[#FFD400] mb-2">
                            <span className="truncate">{proj.client}</span>
                            <span className="text-white/80 shrink-0 ml-2">
                              {proj.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                            {proj.title}
                          </h3>
                        </div>

                        {/* Index Badge */}
                        <div className="absolute top-4 left-4 font-mono text-xs text-white px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 backdrop-blur-sm">
                          [{proj.index}]
                        </div>

                        {/* Featured Badge */}
                        {proj.is_featured && (
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
            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.04] via-white/[0.015] to-transparent border border-white/[0.08] p-8 sm:p-10 lg:p-12 mb-10 lg:mb-12 backdrop-blur-xl shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
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

                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.2em] bg-white/[0.04] border border-white/10 text-neutral-300 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                      <span className="text-[#FFD400] font-semibold">OVERVIEW</span>
                      <span className="text-white/20">//</span>
                      <span className="text-neutral-400">
                        {categoryHero?.detailTagline
                          ? categoryHero.detailTagline.replace(/^(OVERVIEW|\u25cf\s*OVERVIEW)\s*\/\/\s*/i, "")
                          : category.slug}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-archia)]">
                      {categoryHero?.Title || (
                        <>
                          About <span className="text-[#FFD400]">{category.title}</span>
                        </>
                      )}
                    </h2>

                    {categoryHero?.LongDesc ? (
                      <div
                        className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-4xl font-light [&>p]:mb-3 [&>p:last-child]:mb-0"
                        dangerouslySetInnerHTML={{ __html: categoryHero.LongDesc }}
                      />
                    ) : (
                      <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-4xl font-light">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Performance Metrics Grid */}
              {(() => {
                const customStats =
                  categoryHero?.cards_entry && categoryHero.cards_entry.length > 0
                    ? categoryHero.cards_entry.map((val, idx) => ({
                        value: val,
                        label: categoryHero.counter_title?.[idx] || `METRIC [0${idx + 1}]`,
                        sub: categoryHero.counter_description?.[idx] || "",
                      }))
                    : categoryMeta.stats;

                return (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
                    {customStats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="group relative rounded-2xl bg-gradient-to-b from-[#0F131D]/90 via-[#0A0D14]/90 to-[#05070B]/90 border border-white/[0.08] hover:border-[#FFD400]/50 p-6 sm:p-7 lg:p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(255,212,0,0.08)] backdrop-blur-xl overflow-hidden flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.06]">
                          <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                            METRIC [0{idx + 1}]
                          </span>
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 group-hover:text-[#FFD400] transition-colors">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#FFD400]" />
                            <span className="uppercase tracking-wider">VERIFIED</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-none group-hover:text-[#FFD400] transition-colors duration-300 font-[family-name:var(--font-archia)]">
                            {stat.value}
                          </div>
                        </div>

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
                );
              })()}
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection
            categoryTitle={category.title}
            description={category.description}
            faqsList={faqs}
            heading={faqHeading}
          />

          {/* Bottom CTA */}
          <PortfolioCTASection ctaData={ctaData} />
        </main>

        <RnDFooter />
      </div>
    );
  }

  // =========================================================================
  // VIEW B: PROJECT CASE STUDY DETAIL VIEW
  // =========================================================================
  if (viewType === "project" && project) {
    return (
      <div className="font-archia relative min-h-screen bg-[#050608] text-white">
        <SpaceBackground />
        <Navbar />

        {/* Banner */}
        <PageBanner
          title={project.title.toUpperCase()}
          parentBreadcrumb={{ label: "PORTFOLIO", href: "/portfolio" }}
          breadcrumb={`PORTFOLIO / ${project.category_slug.toUpperCase()} / ${project.title.toUpperCase()}`}
          imageSrc={project.image}
        />

        {/* Main Content */}
        <main className="relative z-20 w-full mt-12.5 rounded-t-4xl sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]">
          {/* Project Gallery Section */}
          <section className="relative pt-16 pb-8 px-4 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-4 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{project.category_slug}</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="text-base sm:text-lg text-neutral-300 mb-4">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-neutral-400">
                      <Calendar className="w-4 h-4" />
                      <span>{project.project_date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#FFD400]">
                      <Target className="w-4 h-4" />
                      <span className="font-semibold">{project.client}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/portfolio/${project.category_slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white border border-white/20 font-mono text-xs uppercase font-bold hover:bg-white/10 hover:border-[#FFD400]/50 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Category</span>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white border border-white/20 font-mono text-xs uppercase font-bold hover:bg-white/10 hover:border-[#FFD400]/50 transition-all"
                  >
                    <span>All Portfolios</span>
                  </Link>
                </div>
              </div>

              {/* Main Project Image */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-8 border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>

              {/* Gallery Images Grid */}
              {project.gallery_images && project.gallery_images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                  {project.gallery_images.map((img: string, idx: number) => (
                    <div
                      key={idx}
                      className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFD400]/60 transition-all group"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - Image ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Project Info Section */}
          <section className="bg-black w-full px-4 sm:px-8 lg:px-12 py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Project Details */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                    About This Project
                  </h2>
                  <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
                    {project.summary}
                  </p>

                  {/* Challenge */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#FFD400]" />
                      Challenge
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#FFD400]" />
                      Solution
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Deliverables */}
                  {project.deliverables && project.deliverables.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        Deliverables
                      </h3>
                      <ul className="space-y-2">
                        {project.deliverables.map((item: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-neutral-300"
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column - Stats & Info */}
                <div className="space-y-8">
                  {/* Results */}
                  {project.results_metric && project.results_label && (
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#FFD400]" />
                        Results
                      </h3>
                      <div className="space-y-4">
                        <div className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                          <div className="text-3xl font-bold text-[#FFD400] mb-1">
                            {project.results_metric}
                          </div>
                          <div className="text-sm text-neutral-400">
                            {project.results_label}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  {project.tech_stack && project.tech_stack.length > 0 && (
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-4">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech_stack.map((tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-sm text-neutral-300 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Information */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Project Information
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Client:</span>
                        <span className="text-white font-semibold">
                          {project.client}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Industry:</span>
                        <span className="text-white">{project.industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Duration:</span>
                        <span className="text-white">{project.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Year:</span>
                        <span className="text-white">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="relative py-16 px-4 sm:px-8 lg:px-12">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Related Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {relatedProjects.map((relProject: PortfolioProject) => (
                    <Link
                      key={relProject.slug}
                      href={`/portfolio/${relProject.slug}`}
                      className="group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl aspect-4/3"
                    >
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={relProject.image}
                          alt={relProject.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="flex items-center justify-between text-xs font-mono text-[#FFD400] mb-2">
                            <span>{relProject.client}</span>
                            <span className="text-white/80">
                              {relProject.year}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white line-clamp-2">
                            {relProject.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          <FAQSection
            categoryTitle={project.title}
            description={project.summary}
            faqsList={faqs}
            heading={faqHeading}
          />

          {/* Bottom CTA */}
          <PortfolioCTASection ctaData={ctaData} />
        </main>

        <RnDFooter />
      </div>
    );
  }

  return null;
}
