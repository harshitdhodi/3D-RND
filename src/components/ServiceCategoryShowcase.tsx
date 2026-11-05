"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  TrendingUp,
  Palette,
  Video,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import CyberButton from "@/components/CyberButton";

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
  icon: React.ElementType;
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

const CATEGORIES: ServiceCategoryItem[] = [
  {
    id: "technology-solutions",
    index: "01",
    badge: "TECHNOLOGY SOLUTIONS",
    activeDivisionLabel: "ACTIVE DIVISION // TECHNOLOGY SOLUTIONS",
    title: "TECHNOLOGY THAT MOVES BUSINESS FORWARD.",
    supportingLine: "WEB DEVELOPMENT • APPLICATIONS • SOFTWARE • E-COMMERCE",
    categoryHref: "/technology-solution",
    tagline: "Digital Foundations. Intelligent Solutions.",
    intro:
      "We combine thoughtful engineering, modern technologies and business-focused strategy to build digital platforms that work seamlessly today and adapt to tomorrow. Whether you need a business website, a custom application, enterprise software or an online store, we turn your requirements into reliable digital experiences.",
    primaryCta: {
      label: "EXPLORE OUR SOLUTIONS →",
      href: "/technology-solution",
    },
    secondaryCta: {
      label: "DISCUSS YOUR PROJECT ↗",
      href: "/contact-us?intent=technology",
    },
    icon: Code,
    visual: "/images/service_cloud_color.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "custom-website-development",
        title: "CUSTOM WEBSITE DEVELOPMENT",
        subhead: "Your digital presence. Engineered for performance.",
        desc: "We create responsive, SEO-friendly websites that combine engaging design, intuitive navigation and powerful functionality. From corporate websites and business portals to custom web platforms, we build digital experiences designed around your audience and business objectives.",
        sla: "WEB",
        tags: [
          "#WebsiteDevelopment",
          "#WebDesign",
          "#ResponsiveWebsites",
          "#CustomWebsites",
        ],
        href: "/technology-solution/web-development",
      },
      {
        id: "web-mobile-app-development",
        title: "WEB & MOBILE APP DEVELOPMENT",
        subhead: "Applications built around the way you work.",
        desc: "We develop intuitive web and mobile applications that connect people, processes and technology. From customer-facing applications to complex business platforms, our solutions focus on usability, performance and seamless functionality across devices.",
        sla: "APPLICATIONS",
        tags: [
          "#WebAppDevelopment",
          "#MobileAppDevelopment",
          "#AndroidApps",
          "#iOSApps",
        ],
        href: "/technology-solution/mobile-applications",
      },
      {
        id: "custom-software-development",
        title: "CUSTOM SOFTWARE DEVELOPMENT",
        subhead: "Your business deserves more than off-the-shelf solutions.",
        desc: "We build tailored software solutions that address unique business requirements, streamline workflows and improve operational efficiency. From enterprise applications and business management systems to CRM, ERP and SaaS platforms, we turn complex processes into smarter systems.",
        sla: "SOFTWARE",
        tags: [
          "#CustomSoftware",
          "#EnterpriseSoftware",
          "#CRMDevelopment",
          "#ERPDevelopment",
          "#SaaS",
        ],
        href: "/technology-solution/enterprise-software-solutions",
      },
      {
        id: "ecommerce-development",
        title: "E-COMMERCE DEVELOPMENT",
        subhead: "Turn digital storefronts into growth engines.",
        desc: "We create feature-rich e-commerce websites and online stores that make buying simple and selling smarter. From intuitive storefront design and secure payment integration to product management and checkout optimisation, we build shopping experiences designed to support your business growth.",
        sla: "E-COMMERCE",
        tags: [
          "#EcommerceDevelopment",
          "#OnlineStore",
          "#EcommerceWebsite",
          "#EcommerceSolutions",
        ],
        href: "/technology-solution/ecommerce-platform-engineering",
      },
    ],
  },
  {
    id: "digital-marketing",
    index: "02",
    badge: "DIGITAL MARKETING",
    activeDivisionLabel: "ACTIVE DIVISION // DIGITAL MARKETING",
    title: "DIGITAL GROWTH. BUILT ON STRATEGY. DRIVEN BY RESULTS.",
    supportingLine: "SEO • SOCIAL MEDIA • PAID ADVERTISING • CONTENT MARKETING",
    categoryHref: "/digital-marketing",
    tagline: "Visibility That Connects. Marketing That Converts.",
    intro:
      "We bring strategy, creativity and data together to build stronger digital brands. From improving search visibility and building engaged communities to running targeted advertising campaigns and creating impactful content, we help businesses reach the right people at the right time.",
    primaryCta: {
      label: "EXPLORE OUR SERVICES →",
      href: "/digital-marketing",
    },
    secondaryCta: {
      label: "PLAN YOUR GROWTH ↗",
      href: "/contact-us?intent=marketing",
    },
    icon: TrendingUp,
    visual: "/images/service_marketing.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "search-engine-optimisation",
        title: "SEARCH ENGINE OPTIMISATION (SEO)",
        subhead: "Get discovered. Earn visibility. Grow organically.",
        desc: "We improve your website's search visibility through keyword research, on-page and off-page SEO, technical optimisation, content strategy and quality link building. Our focus is on attracting relevant organic traffic and building sustainable search presence.",
        sla: "ORGANIC GROWTH",
        tags: [
          "#SEO Services",
          "#TechnicalSEO",
          "#KeywordResearch",
          "#LinkBuilding",
          "#LocalSEO",
        ],
        href: "/digital-marketing/technical-seo-dominance",
      },
      {
        id: "social-media-marketing",
        title: "SOCIAL MEDIA MARKETING",
        subhead: "Build communities. Start conversations. Create impact.",
        desc: "We develop social media strategies that strengthen brand identity, increase audience engagement and build meaningful connections. From content planning and creative posts to reels, platform management and community engagement, we help brands stay relevant and recognisable.",
        sla: "BRAND ENGAGEMENT",
        tags: [
          "#SocialMediaMarketing",
          "#InstagramMarketing",
          "#FacebookMarketing",
          "#SocialMediaManagement",
        ],
        href: "/digital-marketing/social-media-management",
      },
      {
        id: "paid-advertising-performance",
        title: "PAID ADVERTISING & PERFORMANCE MARKETING",
        subhead: "Reach the right audience. Make every campaign count.",
        desc: "We plan and manage targeted advertising campaigns across Google, Meta and other relevant platforms. Through audience targeting, creative testing, campaign optimisation and performance tracking, we help businesses generate relevant traffic, enquiries and sales opportunities.",
        sla: "PAID GROWTH",
        tags: [
          "#GoogleAds",
          "#MetaAds",
          "#PPCAdvertising",
          "#PaidMedia",
          "#PerformanceMarketing",
        ],
        href: "/digital-marketing/performance-ppc-advertising",
      },
      {
        id: "content-marketing-strategy",
        title: "CONTENT MARKETING & STRATEGY",
        subhead: "Create stories that make your brand memorable.",
        desc: "We develop purposeful content that communicates your brand's value and connects with your audience. From website copy and blogs to social media creatives, campaign messaging and marketing content, we turn ideas into engaging brand experiences.",
        sla: "CREATIVE STRATEGY",
        tags: [
          "#ContentMarketing",
          "#ContentStrategy",
          "#WebsiteContent",
          "#BlogWriting",
          "#CreativeCopywriting",
        ],
        href: "/digital-marketing/content-strategy-production",
      },
    ],
  },
  {
    id: "branding-design",
    index: "03",
    badge: "BRANDING & DESIGN",
    title: "Branding Systems & Spatial UI/UX",
    categoryHref: "/branding-design",
    tagline: "Category-Defining Visual Identities & Fluid Human-Centric Interfaces",
    intro:
      "Great software requires an unforgettable aesthetic. We construct cohesive design languages, mathematically scaled design systems, and spatial 3D user interfaces that elevate market perception and command enterprise pricing power.",
    icon: Palette,
    visual: "/images/service_branding.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "brand-identity-systems",
        title: "Brand Identity & Design Systems",
        desc: "Comprehensive brand identity guidelines, modern logos, typography scales, color palettes, and unified design token architectures.",
        sla: "PRODUCTION-READY",
        tags: ["Design Systems", "Vector Identity", "Figma", "Guidelines"],
        href: "/branding-design/brand-identity-systems",
      },
      {
        id: "ui-ux-spatial-design",
        title: "UI/UX & Spatial Web Architecture",
        desc: "Next-gen user journeys, micro-interactive prototypes, and 3D web interfaces mapped through rigorous usability heatmaps.",
        sla: "60 FPS INTERACTION",
        tags: ["Spatial 3D", "Wireframing", "Interaction Design", "Figma"],
        href: "/branding-design/ui-ux-spatial-design",
      },
    ],
  },
  {
    id: "media-production",
    index: "04",
    badge: "MEDIA PRODUCTION",
    title: "Commercial Media & Motion Production",
    categoryHref: "/media-production",
    tagline: "Cinematic Commercial Films, 3D CGI Motion & High-Impact Brand Assets",
    intro:
      "Transforming complex product capabilities into breathtaking visual narratives. Combining in-house cinema equipment, 3D Unreal Engine environments, and post-production color mastering to tell your enterprise story with emotional impact.",
    icon: Video,
    visual: "/images/service_media.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "commercial-video-production",
        title: "Commercial Video & Brand Films",
        desc: "End-to-end commercial productions: scriptwriting, 4K/8K cinematography, sound engineering, and multi-platform promotional edits.",
        sla: "CINEMA-GRADE 4K/8K",
        tags: ["Brand Films", "Product Launches", "Color Grading", "Voiceover"],
        href: "/media-production/commercial-video-production",
      },
      {
        id: "motion-graphics-3d-cgi",
        title: "3D CGI & Motion Graphics",
        desc: "Photorealistic 3D product animations, kinetic typography, dynamic HUD holograms, and spatial VFX for web and commercials.",
        sla: "PHOTOREALISTIC",
        tags: ["Three.js", "Cinema4D", "Blender 3D", "After Effects"],
        href: "/media-production/motion-graphics-3d-cgi",
      },
    ],
  },
];

export default function ServiceCategoryShowcase() {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {CATEGORIES.map((category, catIdx) => {
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
