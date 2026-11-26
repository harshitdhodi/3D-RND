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
import { resolveIcon } from "@/components/DynamicIcon";
import {
  getServiceCategories,
  getServiceSubcategories,
  ServiceCategory,
  ServiceSubcategory,
} from "@/lib/getServiceData";

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
  icon: any;
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

const DEFAULT_CATEGORIES: ServiceCategoryItem[] = [
  {
    id: "technology-solution",
    index: "01",
    badge: "TECHNOLOGY SOLUTIONS",
    title: "TECHNOLOGY THAT MOVES BUSINESS FORWARD.",
    categoryHref: "/technology-solution",
    tagline: "Digital Foundations. Intelligent Solutions.",
    intro:
      "We combine thoughtful engineering, modern technologies and business-focused strategy to build digital platforms that work seamlessly today and adapt to tomorrow. Whether you need a business website, a custom application, enterprise software or an online store, we turn your requirements into reliable digital experiences.",
    supportingLine: "WEB DEVELOPMENT • APPLICATIONS • SOFTWARE • E-COMMERCE",
    primaryCta: {
      label: "EXPLORE OUR SOLUTIONS",
      href: "/technology-solution",
    },
    secondaryCta: {
      label: "DISCUSS YOUR PROJECT",
      href: "/contact-us?intent=consultation",
    },
    activeDivisionLabel: "ACTIVE DIVISION // TECHNOLOGY SOLUTIONS",
    icon: Code,
    visual: "/images/service_webdev.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "web-development",
        title: "CUSTOM WEBSITE DEVELOPMENT",
        subhead: "Your digital presence. Engineered for performance.",
        desc: "We create responsive, SEO-friendly websites that combine engaging design, intuitive navigation and powerful functionality. From corporate websites and business portals to custom web platforms, we build digital experiences designed around your audience and business objectives.",
        sla: "WEB",
        tags: ["#WebsiteDevelopment", "#WebDesign", "#ResponsiveWebsites", "#CustomWebsites"],
        href: "/technology-solution/web-development",
      },
      {
        id: "mobile-applications",
        title: "WEB & MOBILE APP DEVELOPMENT",
        subhead: "Applications built around the way you work.",
        desc: "We develop intuitive web and mobile applications that connect people, processes and technology. From customer-facing applications to complex business platforms, our solutions focus on usability, performance and seamless functionality across devices.",
        sla: "APPLICATIONS",
        tags: ["#WebAppDevelopment", "#MobileAppDevelopment", "#AndroidApps", "#iOSApps"],
        href: "/technology-solution/mobile-applications",
      },
      {
        id: "enterprise-software-solutions",
        title: "CUSTOM SOFTWARE DEVELOPMENT",
        subhead: "Your business deserves more than off-the-shelf solutions.",
        desc: "We build tailored software solutions that address unique business requirements, streamline workflows and improve operational efficiency. From enterprise applications and business management systems to CRM, ERP and SaaS platforms, we turn complex processes into smarter systems.",
        sla: "SOFTWARE",
        tags: ["#CustomSoftware", "#EnterpriseSoftware", "#CRMDevelopment", "#ERPDevelopment", "#SaaS"],
        href: "/technology-solution/enterprise-software-solutions",
      },
      {
        id: "ecommerce-platform-engineering",
        title: "E-COMMERCE DEVELOPMENT",
        subhead: "Turn digital storefronts into growth engines.",
        desc: "We create feature-rich e-commerce websites and online stores that make buying simple and selling smarter. From intuitive storefront design and secure payment integration to product management and checkout optimisation, we build shopping experiences designed to support your business growth.",
        sla: "E-COMMERCE",
        tags: ["#EcommerceDevelopment", "#OnlineStore", "#EcommerceWebsite", "#EcommerceSolutions"],
        href: "/technology-solution/ecommerce-platform-engineering",
      },
    ],
  },
  {
    id: "digital-marketing",
    index: "02",
    badge: "DIGITAL MARKETING",
    title: "DIGITAL GROWTH. BUILT ON STRATEGY. DRIVEN BY RESULTS.",
    categoryHref: "/digital-marketing",
    tagline: "Visibility That Connects. Marketing That Converts.",
    intro:
      "We create focused digital marketing strategies that connect your brand with the right audience and drive measurable business growth. From organic search visibility and engaging social media to targeted advertising and strategic content, we help you reach, engage and convert.",
    supportingLine: "SEO • SOCIAL MEDIA • PAID ADVERTISING • CONTENT MARKETING",
    primaryCta: {
      label: "EXPLORE OUR SOLUTIONS",
      href: "/digital-marketing",
    },
    secondaryCta: {
      label: "PLAN YOUR GROWTH",
      href: "/contact-us?intent=consultation",
    },
    activeDivisionLabel: "ACTIVE DIVISION // DIGITAL MARKETING",
    icon: TrendingUp,
    visual: "/images/service_marketing.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "technical-seo-dominance",
        title: "SEARCH ENGINE OPTIMISATION (SEO)",
        subhead: "Get discovered. Earn visibility. Grow organically.",
        desc: "We improve your website search visibility through keyword research, on-page and off-page SEO, technical optimisation, content strategy and quality link building. Our focus is on attracting relevant organic traffic and building sustainable search presence.",
        sla: "ORGANIC GROWTH",
        tags: ["#SEOServices", "#TechnicalSEO", "#KeywordResearch", "#LinkBuilding", "#LocalSEO"],
        href: "/digital-marketing/technical-seo-dominance",
      },
      {
        id: "social-media-management",
        title: "SOCIAL MEDIA MARKETING",
        subhead: "Build community. Drive conversation. Stay relevant.",
        desc: "We manage and grow your presence across key social platforms through content creation, campaign management and community engagement. From brand awareness to customer retention, we help you communicate with impact.",
        sla: "BRAND ENGAGEMENT",
        tags: ["#SocialMediaMarketing", "#InstagramMarketing", "#FacebookMarketing", "#SocialMediaManagement"],
        href: "/digital-marketing/social-media-management",
      },
      {
        id: "performance-ppc-advertising",
        title: "PAID ADVERTISING & PERFORMANCE MARKETING",
        subhead: "Targeted campaigns. Measurable return. Accelerated growth.",
        desc: "We run data-driven paid advertising campaigns across Google, Meta and other ad networks. From search and display ads to social media promotions and retargeting, we focus on maximizing your return on ad spend.",
        sla: "PAID GROWTH",
        tags: ["#GoogleAds", "#MetaAds", "#PPCAdvertising", "#PaidMedia", "#PerformanceMarketing"],
        href: "/digital-marketing/performance-ppc-advertising",
      },
      {
        id: "content-strategy-production",
        title: "CONTENT MARKETING & STRATEGY",
        subhead: "Content that informs, engages and converts.",
        desc: "We develop content strategies and produce high-quality written and visual content that resonates with your audience. From blog articles and case studies to website copy and brand storytelling, we help you establish authority in your industry.",
        sla: "CREATIVE STRATEGY",
        tags: ["#ContentMarketing", "#ContentStrategy", "#WebsiteContent", "#BlogWriting", "#CreativeCopywriting"],
        href: "/digital-marketing/content-strategy-production",
      },
    ],
  },
  {
    id: "branding-design",
    index: "03",
    badge: "BRANDING & DESIGN",
    title: "BRANDS THAT INSPIRE. DESIGNS THAT ENDURE.",
    categoryHref: "/branding-design",
    tagline: "Category-Defining Visual Identities & Fluid Human-Centric Interfaces",
    intro:
      "We craft cohesive brand identities, modern design systems and intuitive user interfaces that communicate your value with clarity and distinction. From foundational brand strategies to high-touch graphic design and digital product aesthetics, we turn visual touchpoints into lasting brand equity.",
    supportingLine: "BRAND STRATEGY • LOGO DESIGN • GRAPHIC DESIGN • MARKETING COLLATERAL",
    primaryCta: {
      label: "EXPLORE OUR SOLUTIONS",
      href: "/branding-design",
    },
    secondaryCta: {
      label: "DEPLOY DIVISION POD",
      href: "/contact-us?intent=consultation",
    },
    activeDivisionLabel: "ACTIVE DIVISION // BRANDING & DESIGN",
    icon: Palette,
    visual: "/images/service_branding.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "brand-identity-systems",
        title: "Brand Identity & Design Systems",
        subhead: "Stand out with a distinct, memorable visual identity.",
        desc: "We design complete brand identity systems including logo design, color palettes, typography, iconography, and comprehensive style guides that ensure consistent and powerful brand representation across touchpoints.",
        sla: "PRODUCTION-READY",
        tags: ["#DesignSystems", "#VectorIdentity", "#Figma", "#Guidelines"],
        href: "/branding-design/brand-identity-systems",
      },
      {
        id: "ui-ux-spatial-design",
        title: "UI/UX & Spatial Web Architecture",
        subhead: "Intuitive, high-performance interfaces engineered for clarity.",
        desc: "We design user-centric digital experiences with wireframing, interactive prototyping, user journey mapping, and spatial 3D micro-interactions that balance aesthetics with frictionless usability.",
        sla: "60 FPS INTERACTION",
        tags: ["#Spatial3D", "#Wireframing", "#InteractionDesign", "#Figma"],
        href: "/branding-design/ui-ux-spatial-design",
      },
      {
        id: "graphic-design",
        title: "Graphic Design Services",
        subhead: "Impactful visual assets that elevate your communications.",
        desc: "From digital graphics, infographics, and presentation decks to print-ready advertising and social media creatives, we produce polished visual assets tailored to your brand voice.",
        sla: "PIXEL-PERFECT",
        tags: ["#GraphicDesign", "#VectorArt", "#BrandGraphics", "#VisualAssets"],
        href: "/branding-design/graphic-design",
      },
      {
        id: "marketing-collateral",
        title: "Marketing Collateral Design",
        subhead: "Professional print and digital collateral that leaves a lasting impression.",
        desc: "We design brochures, corporate stationery, exhibition graphics, pitch decks, and digital whitepapers that communicate your offerings with professionalism and impact.",
        sla: "SALES ENABLEMENT",
        tags: ["#Brochures", "#PitchDecks", "#PrintDesign", "#Stationery"],
        href: "/branding-design/marketing-collateral",
      },
    ],
  },
  {
    id: "media-production",
    index: "04",
    badge: "MEDIA PRODUCTION",
    title: "CINEMATIC STORYTELLING. HIGH-IMPACT VISUALS.",
    categoryHref: "/media-production",
    tagline: "Cinematic Commercial Films, 3D CGI Motion & High-Impact Brand Assets",
    intro:
      "We produce cinema-grade commercial films, brand documentaries, high-fashion product photography, and 3D CGI motion animations. Built with cutting-edge cinema packages and realtime 3D pipelines, we elevate your commercial footprint to global prominence.",
    supportingLine: "VIDEOGRAPHY • PHOTOGRAPHY • VIDEO EDITING • 3D CGI MOTION",
    primaryCta: {
      label: "EXPLORE OUR SOLUTIONS",
      href: "/media-production",
    },
    secondaryCta: {
      label: "DEPLOY DIVISION POD",
      href: "/contact-us?intent=consultation",
    },
    activeDivisionLabel: "ACTIVE DIVISION // MEDIA PRODUCTION",
    icon: Video,
    visual: "/images/service_media.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "commercial-video-production",
        title: "Commercial Video & Brand Films",
        subhead: "Cinema-grade video production that tells your story with power.",
        desc: "From corporate brand films, commercial advertisements, and founder spotlight videos to product demonstration videos, we handle full-cycle production from scriptwriting to final color-graded delivery.",
        sla: "CINEMA-GRADE 4K/8K",
        tags: ["#BrandFilms", "#ProductLaunches", "#ColorGrading", "#Voiceover"],
        href: "/media-production/commercial-video-production",
      },
      {
        id: "commercial-photography",
        title: "Professional Photography",
        subhead: "Crisp, studio-mastered imagery for products, teams, and spaces.",
        desc: "We provide high-resolution corporate headshots, studio product photography, architectural photography, and event coverage that project credibility and polish.",
        sla: "STUDIO-MASTERED",
        tags: ["#StudioPhotography", "#ProductShoots", "#CommercialPhoto", "#HDRMastering"],
        href: "/media-production/commercial-photography",
      },
      {
        id: "motion-graphics-3d-cgi",
        title: "3D CGI & Motion Graphics",
        subhead: "Photorealistic 3D animation and dynamic motion design.",
        desc: "We create stunning 3D CGI product renders, architectural walkthroughs, dynamic logo animations, and explainer motion graphics that captivate audiences and bring complex concepts to life.",
        sla: "PHOTOREALISTIC",
        tags: ["#Threejs", "#Cinema4D", "#Blender3D", "#AfterEffects"],
        href: "/media-production/motion-graphics-3d-cgi",
      },
    ],
  },
];

export default function ServiceCategoryShowcase() {
  const [categories, setCategories] = useState<ServiceCategoryItem[]>(DEFAULT_CATEGORIES);

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoryData, subcategoryData] = await Promise.all([
          getServiceCategories(),
          getServiceSubcategories(),
        ]);

        if (categoryData && categoryData.length > 0) {
          const transformed: ServiceCategoryItem[] = categoryData.map((cat: ServiceCategory) => {
            const FallbackIcon = ICON_MAP[cat.icon_name as keyof typeof ICON_MAP] || Code;
            const Icon = resolveIcon(cat.icon_name, FallbackIcon);
            const catId = String(cat.id || cat._id || "");
            const fallbackCat = DEFAULT_CATEGORIES.find((d) => d.id === cat.slug);

            const subcategories = subcategoryData.filter(
              (sub: ServiceSubcategory) =>
                String(sub.category) === catId ||
                sub.category === cat.slug ||
                (sub as any).category_slug === cat.slug
            );

            const servicesToUse = subcategories.length > 0
              ? subcategories.map((sub: ServiceSubcategory) => ({
                  id: sub.slug,
                  title: sub.title,
                  subhead: sub.tagline,
                  desc: sub.desc,
                  sla: sub.sla || sub.badge || "SPECIALIZED",
                  tags: (sub as any).tags || [],
                  href: `/${cat.slug}/${sub.slug}`,
                }))
              : (fallbackCat?.services || []);

            return {
              id: cat.slug,
              index: cat.division_number || fallbackCat?.index || "01",
              badge: cat.division_tag || cat.breadcrumb || cat.title || fallbackCat?.badge || "DIVISION",
              title: cat.hero_title || cat.title || fallbackCat?.title || "SERVICES",
              categoryHref: `/${cat.slug}`,
              tagline: cat.tagline || fallbackCat?.tagline || "",
              intro: cat.description || cat.hero_desc || fallbackCat?.intro || "",
              supportingLine: cat.supporting_line || fallbackCat?.supportingLine,
              primaryCta: cat.primary_cta_label
                ? {
                    label: cat.primary_cta_label,
                    href: cat.primary_cta_href || `/${cat.slug}`,
                  }
                : fallbackCat?.primaryCta || {
                    label: "EXPLORE OUR SOLUTIONS",
                    href: `/${cat.slug}`,
                  },
              secondaryCta: cat.secondary_cta_label
                ? {
                    label: cat.secondary_cta_label,
                    href: cat.secondary_cta_href || "/contact-us?intent=consultation",
                  }
                : fallbackCat?.secondaryCta,
              activeDivisionLabel:
                cat.division_label || fallbackCat?.activeDivisionLabel || `ACTIVE DIVISION // ${cat.title.toUpperCase()}`,
              icon: Icon,
              visual: cat.image || cat.banner_image || fallbackCat?.visual || "/images/service_webdev.jpg",
              accentColor: "#FFD400",
              services: servicesToUse,
            };
          });

          setCategories(transformed);
        }
      } catch (err) {
        console.error("Failed to fetch service data:", err);
      }
    }

    fetchData();
  }, []);

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
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-10 ${isReversed ? "lg:grid-flow-dense" : ""
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

               
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
