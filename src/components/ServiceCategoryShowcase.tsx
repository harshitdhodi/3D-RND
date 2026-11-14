"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  TrendingUp,
  Palette,
  Video,
  ArrowUpRight,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import CyberButton from "@/components/CyberButton";
import { getServiceCategories, getServiceSubcategories, ServiceCategory, ServiceSubcategory } from "@/lib/getServiceData";

export interface ServiceCategoryItem {
  id: string;
  index: string;
  badge: string;
  title: string;
  categoryHref?: string;
  tagline: string;
  intro: string;
  supportingLine?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  activeDivisionLabel?: string;
  icon: LucideIcon;
  visual: string;
  accentColor: string;
  services: {
    id: string;
    title: string;
    subhead?: string;
    desc: string;
    sla: string;
    tags: string[];
    href: string;
  }[];
}

const ICON_MAP: Record<string, LucideIcon> = {
  Code,
  TrendingUp,
  Palette,
  Video,
};

const DEFAULT_CATEGORIES: ServiceCategoryItem[] = [];

export default function ServiceCategoryShowcase() {
  const [categories, setCategories] = useState<ServiceCategoryItem[]>(DEFAULT_CATEGORIES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoryData, subcategoryData] = await Promise.all([
          getServiceCategories(),
          getServiceSubcategories(),
        ]);

        const transformed: ServiceCategoryItem[] = categoryData.map((cat: ServiceCategory) => {
          const Icon = ICON_MAP[cat.icon_name as keyof typeof ICON_MAP] || Code;
          const subcategories = subcategoryData.filter((sub: ServiceSubcategory) => sub.category === cat._id);

          return {
            id: cat.slug,
            index: cat.division_number,
            badge: cat.breadcrumb,
            title: cat.hero_title + (cat.hero_highlight ? ` ${cat.hero_highlight}` : ''),
            categoryHref: `/${cat.slug}`,
            tagline: cat.hero_desc.substring(0, 100) + '...',
            intro: cat.hero_desc,
            supportingLine: cat.supporting_line,
            primaryCta: {
              label: cat.primary_cta_label,
              href: cat.primary_cta_href,
            },
            secondaryCta: cat.secondary_cta_label
              ? {
                  label: cat.secondary_cta_label,
                  href: cat.secondary_cta_href || '',
                }
              : undefined,
            icon: Icon,
            visual: cat.banner_image,
            accentColor: "#FFD400",
            services: subcategories.map((sub: ServiceSubcategory) => ({
              id: sub.slug,
              title: sub.title,
              subhead: sub.tagline,
              desc: sub.desc,
              sla: sub.sla,
              tags: [],
              href: `/${cat.slug}/${sub.slug}`,
            })),
          };
        });

        setCategories(transformed);
      } catch (err) {
        console.error("Failed to fetch service data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {categories.map((category, catIdx) => {
          const isReversed = catIdx % 2 !== 0;
          const Icon = category.icon;

          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28 relative"
            >
              {/* Ambient Background Glow */}
              <div
                className={`absolute top-1/3 ${isReversed ? "right-10" : "left-10"
                  } w-[650px] h-[450px] bg-[radial-gradient(circle,_rgba(255,212,0,0.03)_0%,_transparent_70%)] pointer-events-none -z-10 transform-gpu`}
              />

              {/* Division Card Container */}
              <div className="rounded-[32px] sm:rounded-[40px] bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/40 transition-colors duration-300 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden group transform-gpu [backface-visibility:hidden]">
                {/* Top Accent Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-60 shadow-[0_0_15px_#FFD400]" />

                {/* Main Grid: Visual Column & Editorial Overview */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12 lg:mb-16 ${isReversed ? "lg:grid-flow-dense" : ""
                    }`}
                >
                  {/* Visual Media Column */}
                  <div
                    className={`lg:col-span-5 relative ${isReversed ? "lg:col-start-8" : ""
                      }`}
                  >
                    <Link
                      href={category.categoryHref || `#${category.id}`}
                      prefetch={false}
                      className="block relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 hover:border-[#FFD400]/60 shadow-2xl group/media cursor-pointer transition-all duration-500"
                    >
                      <Image
                        src={category.visual}
                        alt={category.title}
                        fill
                        priority={catIdx === 0}
                        quality={80}
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="object-cover group-hover/media:scale-105 transition-transform duration-700 ease-out transform-gpu"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating HUD Badge */}
                      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/90 border border-white/15 flex items-center justify-between shadow-xl">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFD400] animate-ping" />
                          <div>
                            <span className="text-[10px] font-mono tracking-widest uppercase text-[#FFD400] font-bold block">
                              {category.activeDivisionLabel || "ACTIVE DIVISION SQUAD"}
                            </span>
                            <span className="text-xs font-mono text-white">
                              Specialized Offerings
                            </span>
                          </div>
                        </div>
                        {/* <span className="text-xs font-mono font-bold text-neutral-400">
                          {"//"} {category.index}
                        </span> */}
                      </div>
                    </Link>

                    {/* Corner Sci-Fi Framing Accents */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#FFD400]/60 pointer-events-none" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#FFD400]/60 pointer-events-none" />
                  </div>

                  {/* Editorial Information Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${isReversed ? "lg:col-start-1" : ""
                      }`}
                  >
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-semibold tracking-[0.25em] uppercase">
                        <Icon className="w-3.5 h-3.5" />
                        {category.categoryHref ? (
                          <Link href={category.categoryHref} className="hover:underline">
                            {category.badge}
                          </Link>
                        ) : (
                          <span>{category.badge}</span>
                        )}
                      </div>

                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-[1.1]">
                        {category.categoryHref ? (
                          <Link
                            href={category.categoryHref}
                            className="hover:text-[#FFD400] transition-colors"
                          >
                            {category.title}
                          </Link>
                        ) : (
                          category.title
                        )}
                      </h2>

                      {category.supportingLine && (
                        <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-[#FFD400] font-semibold">
                          {category.supportingLine}
                        </p>
                      )}

                      <p className="text-sm sm:text-base text-neutral-200 font-mono tracking-wide">
                        {category.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                      {category.intro}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      {category.primaryCta ? (
                        <CyberButton href={category.primaryCta.href} size="sm" variant="gold">
                          {category.primaryCta.label}
                        </CyberButton>
                      ) : category.categoryHref ? (
                        <CyberButton href={category.categoryHref} size="sm">
                          EXPLORE CATEGORY
                        </CyberButton>
                      ) : null}

                      {category.secondaryCta ? (
                        <CyberButton href={category.secondaryCta.href} size="sm" variant="dark">
                          {category.secondaryCta.label}
                        </CyberButton>
                      ) : (
                        <CyberButton
                          href="/contact-us"
                          size="sm"
                          variant={category.categoryHref ? "dark" : "gold"}
                        >
                          DEPLOY DIVISION POD
                        </CyberButton>
                      )}

                      <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                        Direct Lead Architect Assigned
                      </span>
                    </div>
                  </div>
                </div>

                {/* Individual Services Cards Grid for this Category */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold">
                      DIVISION CORE SERVICES LIST ({category.services.length})
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      CLICK SERVICE TO EXPLORE FULL ARCHITECTURE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {category.services.map((service) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        prefetch={false}
                        className="group/card flex flex-col justify-between rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#FFD400]/60 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(255,212,0,0.12)] relative overflow-hidden"
                      >
                        {/* Top Row: Service SLA & Arrow */}
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400]">
                              {service.sla}
                            </span>

                            <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 group-hover/card:bg-[#FFD400] group-hover/card:text-black text-white/80 flex items-center justify-center transition-all duration-300">
                              <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
                            </div>
                          </div>

                          {/* Service Title */}
                          <h3 className="text-xl font-[family-name:var(--font-syne)] font-bold text-white uppercase group-hover/card:text-[#FFD400] transition-colors mb-1.5">
                            {service.title}
                          </h3>

                          {/* Service Subhead */}
                          {service.subhead && (
                            <p className="text-xs font-mono text-[#FFD400] tracking-wide mb-2.5 font-medium">
                              {service.subhead}
                            </p>
                          )}

                          {/* Service Description */}
                          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-5">
                            {service.desc}
                          </p>
                        </div>

                        {/* Bottom Section: Tags & Action */}
                        <div className="pt-3 border-t border-white/10 mt-auto">
                          <div className="flex flex-wrap items-center gap-1.5 mb-3">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-neutral-300"
                              >
                                {tag.startsWith("#") ? tag : `#${tag}`}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-end">
                            <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#FFD400] inline-flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">
                              EXPLORE SERVICE <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
