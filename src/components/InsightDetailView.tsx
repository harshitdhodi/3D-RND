"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Sparkles,
  Volume2,
  VolumeX,
  CheckCircle2,
  ListOrdered,
  Building2,
  User,
  Mail,
  Phone,
  Send,
  Check,
} from "lucide-react";
import Navbar from "./Navbar";
import RnDFooter from "./RnDFooter";
import SpaceBackground from "./SpaceBackground";
import { BlogDetail } from "@/data/blogsData";
import PageBanner from "./PageBanner";

interface InsightDetailViewProps {
  article: BlogDetail;
  allArticles: BlogDetail[];
  prevArticle: BlogDetail | null;
  nextArticle: BlogDetail | null;
}

function formatSlugToTitle(slug: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => {
      const lower = word.toLowerCase();
      if (lower === "3d") return "3D";
      if (lower === "seo") return "SEO";
      if (lower === "ux") return "UX";
      if (lower === "ui") return "UI";
      if (lower === "ai") return "AI";
      if (lower === "api") return "API";
      if (lower === "it") return "IT";
      if (lower === "fps") return "FPS";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export default function InsightDetailView({
  article,
  allArticles = [],
  prevArticle,
  nextArticle,
}: InsightDetailViewProps) {
  // Reading scroll progress percentage
  const [scrollProgress, setScrollProgress] = useState(0);

  // Recent 3 articles excluding the active article
  const recentArticles = useMemo(() => {
    return (allArticles || [])
      .filter((a) => a.id !== article.id)
      .slice(0, 3);
  }, [allArticles, article.id]);

  // Formatted slug for banner title (e.g. "spatial-3d-conversion" -> "Spatial 3D Conversion")
  const bannerTitle = formatSlugToTitle(article.id);

  // Active section for table of contents
  const [activeSection, setActiveSection] = useState("intro");

  // Audio briefing play/pause simulation
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Mobile outline modal toggle
  const [isMobileOutlineOpen, setIsMobileOutlineOpen] = useState(false);

  // FAQ accordion open state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Inquiry form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Full-Stack Web & Cloud",
    scale: "",
  });

  // Dynamic Table of Contents from article sections
  const sectionsList = useMemo(() => {
    const list: { id: string; number: string; label: string }[] = [
      { id: "intro", number: "01", label: "Executive Summary" },
    ];

    if (article.contentSections && article.contentSections.length > 0) {
      article.contentSections.forEach((sec, idx) => {
        list.push({
          id: sec.id,
          number: String(idx + 2).padStart(2, "0"),
          label: sec.title.replace(/^\d+\.\s*/, ""),
        });
      });
    }

    if (article.faqs && article.faqs.length > 0) {
      list.push({
        id: "faq",
        number: String(list.length + 1).padStart(2, "0"),
        label: "Frequently Asked Questions",
      });
    }

    list.push({
      id: "inquiry-form",
      number: String(list.length + 1).padStart(2, "0"),
      label: "Consultation & Inquiry",
    });

    return list;
  }, [article]);

  // Track window scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Scroll-spy sections dynamically based on sectionsList
      const sectionIds = sectionsList.map((s) => s.id);

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 240) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionsList]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  // Drop cap letter from first overview paragraph
  const firstParagraph = article.overview[0] || "";
  const firstLetter = firstParagraph.charAt(0);
  const remainingFirstParagraph = firstParagraph.slice(1);

  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      {/* Background Galactic Starfield */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Banner with slug in Title Format */}
      <PageBanner
        title={bannerTitle}
        breadcrumb={bannerTitle}
        parentBreadcrumb={{ label: "Insights", href: "/insights" }}
        imageSrc="/NewBanner/blogs banner.png"
      />

      <main className="relative z-10 w-full">

        {/* =========================================================================
            2. SUB-HEADER BAR (Archive Navigation & Mobile Outline Trigger)
            ========================================================================= */}
        <div className="max-w-[1560px] mx-auto px-5 md:px-8 lg:px-12 pt-7 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
            <Link
              href="/insights"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-[#FFD400] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#FFD400]" />
              <span>Studio Insights Archive</span>
            </Link>

            {/* Mobile Outline Modal Trigger */}
            <div className="lg:hidden flex items-center text-xs font-mono">
              <button
                type="button"
                onClick={() => setIsMobileOutlineOpen(!isMobileOutlineOpen)}
                className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#0c0e14] border border-white/15 text-white shadow-sm hover:border-[#FFD400] cursor-pointer"
              >
                <ListOrdered className="w-3.5 h-3.5 text-[#FFD400]" />
                <span>Article Outline</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Outline Drawer Modal */}
        {isMobileOutlineOpen && (
          <div className="lg:hidden max-w-[1560px] mx-auto px-5 mb-6">
            <div className="p-5 bg-[#0c0e14] border border-[#FFD400]/40 rounded-xl space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FFD400] font-bold">
                  Table of Contents
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileOutlineOpen(false)}
                  className="text-xs font-mono text-neutral-400 hover:text-white"
                >
                  ✕ Close
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {sectionsList.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setIsMobileOutlineOpen(false)}
                    className="p-2 rounded bg-white/[0.03] text-neutral-300 hover:text-[#FFD400] hover:bg-white/[0.08]"
                  >
                    <span className="text-[#FFD400] mr-1.5">{sec.number}</span>
                    <span>{sec.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            3. MAIN 3-COLUMN CONTENT GRID (Left TOC / Center Article / Right CTA)
            ========================================================================= */}
        <section className="max-w-[1560px] mx-auto px-5 md:px-8 lg:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
            
            {/* -------------------------------------------------------------------
                LEFT COLUMN (3 COLS): READING PROGRESS & INTERACTIVE OUTLINE
                ------------------------------------------------------------------- */}
            <aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-24 self-start">
              {/* Reading Progress Card */}
              <div className="p-4 bg-[#0c0e14] border border-white/10 shadow-lg space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  <span className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>Reading Progress</span>
                  </span>
                  <span className="text-[#FFD400] font-bold">
                    {Math.round(scrollProgress)}%
                  </span>
                </div>

                <div className="w-full h-1.5 bg-white/10 overflow-hidden rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-[#FFD400] to-[#ffe34d] transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1 border-t border-white/5">
                  <span className="truncate max-w-[140px]">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Table of Contents / Article Outline */}
              <div className="p-6 bg-[#0c0e14] border border-white/10 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <span className="flex items-center space-x-2.5 text-xs font-mono uppercase tracking-[0.22em] text-[#FFD400] font-bold">
                    <ListOrdered className="w-4 h-4 text-[#FFD400]" />
                    <span>Article Outline</span>
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 bg-white/[0.05] text-neutral-400 border border-white/10 font-medium">
                    {sectionsList.length} Sections
                  </span>
                </div>

                <nav className="space-y-1.5">
                  {sectionsList.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className={`group flex items-center justify-between py-2.5 px-3 text-xs sm:text-sm transition-all border-l-[3px] rounded-r-sm ${
                          isActive
                            ? "border-[#FFD400] bg-white/[0.06] text-white font-semibold"
                            : "border-transparent text-neutral-400 hover:text-white hover:border-[#FFD400]/50 hover:bg-white/[0.03]"
                        }`}
                      >
                        <span className="flex items-center space-x-3 truncate">
                          <span
                            className={`font-mono text-xs font-bold transition-colors ${
                              isActive
                                ? "text-[#FFD400]"
                                : "text-neutral-500 group-hover:text-[#FFD400]"
                            }`}
                          >
                            {sec.number}
                          </span>
                          <span className="truncate text-xs sm:text-sm font-normal tracking-wide">
                            {sec.label}
                          </span>
                        </span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isActive
                              ? "text-[#FFD400] translate-x-0.5"
                              : "text-transparent group-hover:text-[#FFD400]/50"
                          }`}
                        />
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* -------------------------------------------------------------------
                CENTER COLUMN (9 COLS): DEEP TECHNICAL ARTICLE CONTENT
                ------------------------------------------------------------------- */}
            <article className="lg:col-span-9 space-y-10">
              
              {/* Audio Briefing Player */}
              <div className="p-4 bg-[#0c0e14] border border-white/10 shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3 min-w-0">
                  <button
                    type="button"
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all bg-[#FFD400] text-black hover:bg-[#ffe34d] shadow-[0_0_15px_rgba(255,212,0,0.4)] cursor-pointer"
                    title={isPlayingAudio ? "Pause Audio Summary" : "Play Audio Summary"}
                  >
                    {isPlayingAudio ? (
                      <VolumeX className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Volume2 className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </button>

                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-semibold truncate">
                      Engineering Audio Briefing
                    </p>
                    <p className="text-[10px] font-mono text-neutral-400">
                      Narrated by RnD Engineering Lab • {article.audioDuration || "4 min"}
                    </p>
                  </div>
                </div>

                {/* Animated Audio Equalizer Waveform Bars */}
                <div className="hidden sm:flex items-center space-x-1 h-5">
                  {[40, 75, 55, 90, 60, 85, 45, 70].map((h, bIdx) => (
                    <div
                      key={bIdx}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlayingAudio
                          ? "bg-[#FFD400] animate-pulse"
                          : "bg-white/20"
                      }`}
                      style={{
                        height: isPlayingAudio ? `${h}%` : "30%",
                        animationDelay: `${bIdx * 120}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Full Article Editorial Headline */}
              <div className="space-y-4 pb-6 border-b border-white/10">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{article.category} • {article.readTime}</span>
                </div>
                <h1 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-snug uppercase">
                  {article.title}
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                  {article.tagline}
                </p>
              </div>

              {/* SECTION 01: EDITORIAL THESIS / ABSTRACT */}
              {/* SECTION 01: INTRO / EXECUTIVE SUMMARY */}
              <div id="intro" className="space-y-6 scroll-mt-36">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Executive Summary // {article.category}</span>
                </div>

                {article.quote && (
                  <blockquote className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl lg:text-3xl text-white font-light leading-relaxed italic border-l-2 border-[#FFD400] pl-6 sm:pl-8 py-3 bg-[#0c0e14] shadow-md">
                    &ldquo;{article.quote.text}&rdquo;
                  </blockquote>
                )}

                {/* Author Meta Header Card */}
                <div className="flex items-center justify-between p-4 bg-[#0c0e14] border border-white/10 shadow-lg">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/40 flex items-center justify-center shrink-0 text-[#FFD400]">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white flex items-center space-x-2">
                        <span>{article.author}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#FFD400]/15 text-[#FFD400] font-normal border border-[#FFD400]/30 rounded">
                          Verified Lead
                        </span>
                      </h3>
                      <p className="text-[11px] text-neutral-400 font-mono">
                        {article.authorRole}
                      </p>
                    </div>
                  </div>

                  <div className="text-right text-xs font-mono text-neutral-400 hidden sm:block">
                    <p>{article.date}</p>
                    <p className="text-[#FFD400] font-semibold">{article.readTime}</p>
                  </div>
                </div>

                {/* Article Featured Hero Image */}
                <div className="relative aspect-[78/50] w-full overflow-hidden bg-black/40 border border-white/10 shadow-2xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                {/* Narrative Intro with Drop Cap */}
                <div className="space-y-6 text-neutral-300 font-light leading-relaxed text-base sm:text-lg">
                  {firstParagraph && (
                    <p className="leading-relaxed">
                      <span className="float-left text-5xl sm:text-6xl font-[family-name:var(--font-syne)] text-[#FFD400] leading-none pr-3 pt-1 font-bold">
                        {firstLetter}
                      </span>
                      {remainingFirstParagraph}
                    </p>
                  )}

                  {article.overview.slice(1).map((para, pIdx) => (
                    <p key={pIdx} className="leading-relaxed text-sm sm:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* DYNAMIC ARTICLE CONTENT SECTIONS */}
              {article.contentSections && article.contentSections.length > 0 && (
                <div className="space-y-12 pt-4">
                  {article.contentSections.map((sec) => (
                    <section
                      key={sec.id}
                      id={sec.id}
                      className="space-y-6 scroll-mt-36 border-t border-white/10 pt-8"
                    >
                      {sec.badge && (
                        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{sec.badge}</span>
                        </div>
                      )}

                      <h2 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl lg:text-3xl text-white font-bold leading-snug uppercase">
                        {sec.title}
                      </h2>

                      {/* Paragraphs */}
                      {sec.paragraphs && sec.paragraphs.length > 0 && (
                        <div className="space-y-4 text-neutral-300 font-light leading-relaxed text-sm sm:text-base">
                          {sec.paragraphs.map((p, pIdx) => (
                            <p key={pIdx} className="leading-relaxed">
                              {p}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Bullets */}
                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="space-y-3 py-2">
                          {sec.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-300"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Subsections */}
                      {sec.subsections && sec.subsections.length > 0 && (
                        <div className="space-y-5 pt-2">
                          {sec.subsections.map((sub, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-5 sm:p-6 bg-[#0c0e14] border border-white/10 space-y-3 shadow-md"
                            >
                              <h3 className="font-[family-name:var(--font-syne)] text-base sm:text-lg text-white font-bold uppercase flex items-center space-x-2">
                                <span className="text-[#FFD400] text-xs font-mono">
                                  {String(sIdx + 1).padStart(2, "0")}.
                                </span>
                                <span>{sub.title.replace(/^\d+[\.\)]\s*/, "")}</span>
                              </h3>

                              {sub.paragraphs && sub.paragraphs.length > 0 && (
                                <div className="space-y-2.5">
                                  {sub.paragraphs.map((sp, spIdx) => (
                                    <p
                                      key={spIdx}
                                      className="text-neutral-300 font-light leading-relaxed text-xs sm:text-sm"
                                    >
                                      {sp}
                                    </p>
                                  ))}
                                </div>
                              )}

                              {sub.bullets && sub.bullets.length > 0 && (
                                <ul className="space-y-2 pt-1">
                                  {sub.bullets.map((sb, sbIdx) => (
                                    <li
                                      key={sbIdx}
                                      className="flex items-start space-x-2.5 text-xs text-neutral-300"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] mt-1.5 shrink-0" />
                                      <span className="leading-relaxed">{sb}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Comparison Table */}
                      {sec.table && (
                        <div className="overflow-x-auto my-6 border border-white/10 bg-[#0c0e14]">
                          <table className="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                              <tr className="border-b border-white/15 bg-white/[0.04]">
                                {sec.table.headers.map((h, hIdx) => (
                                  <th
                                    key={hIdx}
                                    className="p-3.5 sm:p-4 font-mono font-bold uppercase tracking-wider text-[#FFD400] text-xs"
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 font-light text-neutral-300">
                              {sec.table.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className="hover:bg-white/[0.02] transition-colors"
                                >
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className={`p-3.5 sm:p-4 leading-relaxed ${
                                        cIdx === 0
                                          ? "font-medium text-white"
                                          : ""
                                      }`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Callout Box */}
                      {sec.callout && (
                        <div className="p-6 sm:p-8 bg-gradient-to-br from-[#0c0e14] via-[#12151d] to-[#0c0e14] border border-[#FFD400]/40 shadow-xl space-y-4 my-6">
                          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#FFD400] font-semibold">
                            <Sparkles className="w-4 h-4 text-[#FFD400]" />
                            <span>Recommended Action</span>
                          </div>
                          {sec.callout.title && (
                            <h3 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl text-white font-bold uppercase">
                              {sec.callout.title}
                            </h3>
                          )}
                          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                            {sec.callout.text}
                          </p>
                          <div className="pt-2">
                            <Link
                              href={sec.callout.ctaLink || "/#contact"}
                              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#FFD400] text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#ffe34d] transition-colors shadow-[0_0_15px_rgba(255,212,0,0.3)]"
                            >
                              <span>{sec.callout.ctaText || "Discuss Your Project"}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              )}

              {/* SECTION: PRINCIPAL PROFILE / AUTHOR CARD */}
              <div
                id="author"
                className="p-7 bg-[#0c0e14] border border-white/10 shadow-lg flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left scroll-mt-36"
              >
                <div className="w-14 h-14 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/40 flex items-center justify-center shrink-0 text-[#FFD400]">
                  <User className="w-7 h-7" />
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl text-white font-bold uppercase">
                      {article.author}
                    </h4>
                    <span className="text-[11px] font-mono text-[#FFD400] uppercase font-semibold">
                      {article.authorRole}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    RnD Technosoft Editorial &amp; Research Directorate — Delivering strategic insights across technology, branding, and performance growth.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/about-us"
                      className="inline-flex items-center space-x-1 text-xs font-mono uppercase tracking-widest text-[#FFD400] hover:text-white font-semibold transition-colors"
                    >
                      <span>View Team &amp; Leadership</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* PREV / NEXT ARTICLE NAVIGATION CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                {prevArticle ? (
                  <Link
                    href={`/insights/${prevArticle.id}`}
                    className="p-5 bg-[#0c0e14] border border-white/10 hover:border-[#FFD400] transition-colors group shadow-sm flex flex-col justify-between"
                  >
                    <span className="text-xs font-mono uppercase text-neutral-400 group-hover:text-[#FFD400] flex items-center space-x-1">
                      <span>← Previous Article</span>
                    </span>
                    <p className="font-[family-name:var(--font-syne)] text-sm sm:text-base text-white group-hover:text-[#FFD400] transition-colors mt-2 line-clamp-2 uppercase font-semibold">
                      {prevArticle.title}
                    </p>
                  </Link>
                ) : (
                  <div className="p-5 bg-white/[0.02] border border-dashed border-white/10 text-neutral-500 text-xs font-mono flex items-center">
                    <span>First monograph in archive</span>
                  </div>
                )}

                {nextArticle ? (
                  <Link
                    href={`/insights/${nextArticle.id}`}
                    className="p-5 bg-[#0c0e14] border border-white/10 hover:border-[#FFD400] transition-colors group shadow-sm flex flex-col justify-between text-right"
                  >
                    <span className="text-xs font-mono uppercase text-neutral-400 group-hover:text-[#FFD400] flex items-center justify-end space-x-1">
                      <span>Next Article →</span>
                    </span>
                    <p className="font-[family-name:var(--font-syne)] text-sm sm:text-base text-white group-hover:text-[#FFD400] transition-colors mt-2 line-clamp-2 uppercase font-semibold">
                      {nextArticle.title}
                    </p>
                  </Link>
                ) : (
                  <div className="p-5 bg-white/[0.02] border border-dashed border-white/10 text-neutral-500 text-xs font-mono flex items-center justify-end">
                    <span>Final monograph in archive</span>
                  </div>
                )}
              </div>
            </article>
          </div>
        </section>

        {/* =========================================================================
            3.5 FAQ SECTION
            ========================================================================= */}
        {article.faqs && article.faqs.length > 0 && (
          <section id="faq" className="max-w-[1560px] mx-auto px-5 md:px-8 lg:px-12 py-16 border-t border-white/10 scroll-mt-24">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center space-x-2 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Help &amp; Clarifications</span>
                </span>
                <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold uppercase">
                  Frequently Asked Questions
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-500 shrink-0">
                {article.faqs.length} Questions
              </span>
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              {article.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`border transition-all duration-300 ${
                      isOpen
                        ? "border-[#FFD400]/50 bg-[#0c0e14] shadow-[0_0_20px_rgba(255,212,0,0.08)]"
                        : "border-white/10 bg-[#0c0e14] hover:border-[#FFD400]/30"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group cursor-pointer"
                    >
                      <div className="flex items-start gap-4 min-w-0">
                        <span className="text-xs font-mono font-bold text-[#FFD400] shrink-0 mt-0.5">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#FFD400] transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 mt-0.5 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 text-[#FFD400]"
                            : "text-neutral-500 group-hover:text-[#FFD400]"
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="ml-8 pl-4 border-l-2 border-[#FFD400]/40">
                          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================================================================
            3.6 BOTTOM ARCHITECTURAL CONSULTATION & INQUIRY SUITE
            ========================================================================= */}
        <section id="inquiry-form" className="max-w-[1560px] mx-auto px-5 md:px-8 lg:px-12 py-16 border-t border-white/10 scroll-mt-24">
          <div className="bg-[#0c0e14] border border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column (5 cols): Briefing Thesis & Direct Atelier Concierge */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center space-x-2">
                  <Building2 className="w-4 h-4" />
                  <span>Private Commission // Consultation Suite</span>
                </span>
                <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold uppercase leading-tight">
                  Discuss Your Architecture
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                  Connect with our principal software architects and engineering leads for confidential scoping, system audit, or spatial 3D implementation.
                </p>
              </div>

              {/* Atelier Concierge Details */}
              <div className="p-5 bg-white/[0.02] border border-white/10 shadow-lg space-y-3 text-xs font-mono">
                <span className="text-[11px] uppercase tracking-widest text-[#FFD400] font-semibold block pb-2 border-b border-white/10">
                  Direct Atelier Concierge
                </span>
                <div className="space-y-2 text-neutral-300">
                  <p className="flex items-center justify-between">
                    <span className="text-neutral-500">Inquiry:</span>
                    <strong className="text-white hover:text-[#FFD400] transition-colors">private@rndtechnosoft.com</strong>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-neutral-500">Studio Phone:</span>
                    <strong className="text-white">+91 22 2490 8800</strong>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="text-neutral-500">HQ Nodes:</span>
                    <strong className="text-white">Mumbai &amp; Global Cloud Nodes</strong>
                  </p>
                  <p className="flex items-center justify-between pt-1 border-t border-white/5">
                    <span className="text-neutral-500">Response SLA:</span>
                    <span className="text-[#FFD400] font-bold">Within 4 business hours</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Consultation Form */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-white/[0.02] border border-white/10 p-8 rounded-xl">
                  <div className="w-14 h-14 rounded-full bg-[#FFD400] text-black mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(255,212,0,0.5)]">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-[family-name:var(--font-syne)] font-bold text-white uppercase">
                    Transmission Confirmed
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you. Your project brief has been encrypted and routed directly to our Principal Architecture Squad. We respond within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:border-[#FFD400] transition-colors cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
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
                          placeholder="Vikram Sharma"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="vikram@enterprise.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          placeholder="+91 98200 12345"
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
                        Service Typology
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceType: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                      >
                        <option value="Full-Stack Web & Cloud">
                          Full-Stack Web &amp; Cloud (Next.js 15)
                        </option>
                        <option value="Spatial 3D & WebGL">
                          Spatial 3D &amp; WebGL Showroom
                        </option>
                        <option value="Mobile Engineering">
                          Cross-Platform Mobile (React Native)
                        </option>
                        <option value="Technical SEO & Growth">
                          Technical SEO &amp; Growth Engine
                        </option>
                        <option value="Dedicated Engineering Pod">
                          Dedicated Engineering Pod (Turnkey)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Technical Scope &amp; Target Milestones
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your technical goals, stack requirements, and launch timeline..."
                      value={formData.scale}
                      onChange={(e) =>
                        setFormData({ ...formData, scale: e.target.value })
                      }
                      className="w-full p-3 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] text-neutral-400 font-mono">
                      Strict bilateral NDA confidentiality assured.
                    </p>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="px-8 py-3.5 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)] flex items-center justify-center space-x-2 group cursor-pointer disabled:opacity-60"
                    >
                      {formLoading ? (
                        <span>Encrypting Brief...</span>
                      ) : (
                        <>
                          <span>Transmit Brief</span>
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

        {/* =========================================================================
            4. RECENT BLOGS & INSIGHTS (After CTA Consultation Form)
            ========================================================================= */}
        {recentArticles.length > 0 && (
          <section className="max-w-[1560px] mx-auto px-5 md:px-8 lg:px-12 py-16 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Recent Knowledge</span>
                </span>
                <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold uppercase mt-1">
                  Recent Blogs &amp; Insights
                </h2>
              </div>

              <Link
                href="/insights"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#FFD400] hover:text-white font-bold shrink-0 transition-colors"
              >
                <span>View All Blogs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((rel) => (
                <article
                  key={rel.id}
                  className="group flex flex-col justify-between bg-[#0c0e14] border border-white/10 p-5 sm:p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,212,0,0.12)] hover:border-[#FFD400]/50 transition-all duration-500"
                >
                  <div>
                    {/* Meta Line: Category Badge • Date • Read Time */}
                    <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 flex items-center justify-between">
                      <span className="px-2 py-0.5 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] font-bold text-[10px]">
                        {rel.category}
                      </span>
                      <div className="flex items-center space-x-2 text-[10px] text-neutral-400">
                        <span>{rel.date}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </div>
                    </div>

                    {/* Article Image with aspect-[78/50] */}
                    <Link
                      href={`/insights/${rel.id}`}
                      className="block relative aspect-[78/50] w-full overflow-hidden bg-black/50 border border-white/10 mb-4 shadow-sm"
                    >
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </Link>

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-syne)] text-base sm:text-lg text-white font-bold group-hover:text-[#FFD400] transition-colors leading-snug uppercase line-clamp-2">
                      <Link href={`/insights/${rel.id}`}>{rel.title}</Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mt-2.5 line-clamp-2">
                      {rel.tagline}
                    </p>
                  </div>

                  {/* Card Footer: Author Icon + Name + Read Link */}
                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/40 flex items-center justify-center shrink-0 text-[#FFD400]">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-white truncate max-w-[130px]">
                          {rel.author}
                        </p>
                        <p className="text-[9px] text-neutral-400 font-mono truncate max-w-[130px]">
                          {rel.authorRole}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/insights/${rel.id}`}
                      className="inline-flex items-center space-x-1 text-xs font-mono uppercase tracking-wider text-[#FFD400] group-hover:text-white font-semibold transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
