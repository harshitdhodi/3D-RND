"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowUpRight, Calendar, Clock } from "lucide-react";
import CyberButton from "@/components/CyberButton";
import { BlogDetail } from "@/data/blogsData";
import { fetchRecentBlogs } from "@/lib/blogApi";
import { SectionHeading, DEFAULT_SECTION_HEADINGS } from "@/lib/getSectionHeading";

export interface InsightsSectionProps {
  initialArticles?: BlogDetail[];
  initialHeading?: SectionHeading;
}

export default function InsightsSection({ initialArticles, initialHeading }: InsightsSectionProps = {}) {
  const [articles, setArticles] = useState<BlogDetail[]>(initialArticles || []);
  const [loading, setLoading] = useState(!initialArticles || initialArticles.length === 0);
  const heading = initialHeading || DEFAULT_SECTION_HEADINGS.insights;

  useEffect(() => {
    async function loadBlogs() {
      try {
        const blogs = await fetchRecentBlogs(3);
        if (blogs && blogs.length > 0) {
          setArticles(blogs);
        }
      } catch (error) {
        console.error("Failed to load recent blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);

  return (
    <section id="insights" className="relative py-20 sm:py-24 lg:py-28 bg-transparent text-white overflow-hidden border-t border-white/5 px-4 sm:px-8 lg:px-12">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-[#FFD400]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            {heading.badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{heading.badge}</span>
              </div>
            )}

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight leading-tight uppercase text-white">
              {heading.title}
            </h2>

            {heading.subtitle && (
              <p className="text-sm sm:text-base text-[#FFD400] font-mono tracking-wider uppercase mt-2">
                {heading.subtitle}
              </p>
            )}

            {heading.tagline && (
              <p className="text-sm sm:text-base text-neutral-400 font-light mt-3 leading-relaxed max-w-2xl">
                {heading.tagline}
              </p>
            )}
          </div>

          <CyberButton href="/insights" size="sm">
            VIEW ALL DISPATCHES
          </CyberButton>
        </div>

        {/* 3 Articles Grid matching /insights page */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-3xl bg-white/[0.025] border border-white/10 p-5 sm:p-6 animate-pulse"
              >
                <div className="aspect-[78/50] rounded-2xl bg-white/5 mb-5" />
                <div className="h-4 bg-white/5 rounded mb-3 w-3/4" />
                <div className="h-16 bg-white/5 rounded mb-3" />
                <div className="h-8 bg-white/5 rounded" />
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-400 text-sm">No articles available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {articles.map((art) => (
            <Link
              key={art.id}
              href={`/insights/${art.id}`}
              className="group rounded-3xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-[#FFD400]/40 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer"
            >
              <div>
                {/* 780x500 Aspect Ratio Image */}
                <div className="relative aspect-[78/50] rounded-2xl overflow-hidden mb-5 border border-white/10 bg-[#0a0c10]">
                  <Image
                    src={art.image}
                    alt={art.altname || art.title}
                    title={art.imgtitle || art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md text-[10px] font-mono font-bold text-[#FFD400] uppercase tracking-wider border border-[#FFD400]/25 z-10">
                    {art.category}
                  </span>
                </div>

                {/* Date & Read Time */}
                <div className="flex items-center gap-3 text-xs font-mono text-white/50 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#FFD400]/80" />
                    {art.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FFD400]/80" />
                    {art.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold font-[family-name:var(--font-syne)] text-white mb-2.5 group-hover:text-[#FFD400] transition-colors leading-snug line-clamp-2">
                  {art.title}
                </h3>

                {/* Excerpt / Tagline */}
                <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-2 mb-4">
                  {art.tagline || art.subtitle || (art.overview && art.overview[0])}
                </p>
              </div>

              {/* Footer: Author & Read Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <span className="text-xs font-mono text-white/60 truncate max-w-[180px]">
                  {art.author}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#FFD400] font-bold group-hover:text-white transition-colors">
                  <span>Read</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
