"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";
import CyberButton from "@/components/CyberButton";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  slug: string;
  badge: string;
  scope: string[];
}

export default function ServiceCardsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services: ServiceItem[] = [
    {
      id: "technology",
      number: "01",
      title: "Technology Solutions",
      tagline: "Websites • Applications • Software • E-commerce",
      description:
        "We engineer powerful digital experiences and intelligent software built around the way your business works. From responsive website development and custom web applications to mobile apps, enterprise software and eCommerce platforms, we turn complex requirements into seamless digital solutions.",
      heroImage: "/images/weddev.png",
      slug: "technology-solutions",
      badge: "Build smarter. Scale without limits.",
      scope: [
        "Website Development Services",
        "Web App Development Services",
        "Mobile App Development",
        "Custom Software Development",
        "Ecommerce Website Development",
        "Cloud Infrastructure & DevOps",
      ],
    },
    {
      id: "marketing",
      number: "02",
      title: "Digital Marketing",
      tagline: "SEO • Social Media • Paid Advertising • Content",
      description:
        "We turn digital visibility into meaningful business opportunities. Through strategic SEO, social media marketing, performance-driven paid advertising and compelling content, we help brands reach the right audience, strengthen engagement and generate measurable growth.",
      heroImage: "/images/digi_market.png",
      slug: "digital-marketing",
      badge: "Get noticed. Get chosen. Grow faster.",
      scope: [
        "Digital Marketing Services",
        "SEO Services",
        "Social Media Marketing Services",
        "Performance Marketing Services",
        "Google Ads Services",
        "Content Marketing & Strategy",
      ],
    },
    {
      id: "branding",
      number: "03",
      title: "Branding & Design",
      tagline: "Brand Identity • Graphic Design • Marketing Collateral",
      description:
        "We transform business identities into memorable brand experiences. From distinctive brand identity design and creative graphic design to impactful marketing collateral, we create visual systems that communicate your value, build recognition and leave a lasting impression.",
      heroImage: "/images/contet.png",
      slug: "branding-design",
      badge: "Make your brand impossible to overlook.",
      scope: [
        "Branding Services",
        "Brand Identity Design",
        "Graphic Design Services",
        "Logo Design Services",
        "Marketing Collateral Design",
        "Visual Systems & Guidelines",
      ],
    },
    {
      id: "media",
      number: "04",
      title: "Media Production",
      tagline: "Videography • Photography • Editing • Creative Production",
      description:
        "We bring ideas to life through compelling visual storytelling. From professional photography and cinematic videography to video editing and creative media production, we create engaging visual content that connects brands with audiences and makes every story count.",
      heroImage: "/images/social.png",
      slug: "media-production",
      badge: "Capture attention. Create experiences. Tell stories.",
      scope: [
        "Video Production Services",
        "Photography Services",
        "Media Production",
        "Product Photography Services",
        "Video Editing & Post-Production",
        "Creative Content Production",
      ],
    },
  ];

  const activeService = services[activeTab];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#06070a] text-white overflow-visible relative border-t border-white/5 px-4 sm:px-8 lg:px-12"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#FFD400]/4 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="border-b border-white/10 pb-8 sm:pb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4">
              <Globe2 className="w-3.5 h-3.5" />
              <span>THE RND ECOSYSTEM // OUR EXPERTISE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px] font-[family-name:var(--font-syne)] text-white font-bold tracking-tight leading-[1.08] uppercase select-none">
              IDEAS INTO IMPACT.{" "}
              <br className="hidden sm:block" />
              STRATEGY INTO{" "}
              <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                SOLUTIONS.
              </span>{" "}
             
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 sm:pt-8">
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light font-[family-name:var(--font-jakarta)] max-w-2xl">
                From building powerful digital platforms to creating brands that stand out, RND Technosoft brings technology, marketing, design and media together to help businesses move forward.
              </p>

              <CyberButton href="/services" size="md">
                EXPLORE ALL RND ECOSYSTEM →
              </CyberButton>
            </div>
          </div>
        </div>

        {/* Dynamic Split Layout: Left side scrolls naturally, Right side remains sticky */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative w-full">
          {/* ================= SCROLLABLE LEFT SIDE: ACCORDION SERVICE CARDS ================= */}
          <div className="lg:col-span-6 space-y-6 pb-28">
            {services.map((service, idx) => {
              const isActive = activeTab === idx;

              return (
                <div
                  key={service.id}
                  onMouseEnter={(e) => {
                    setActiveTab(idx);
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const topThreshold = 100;
                    const bottomThreshold = window.innerHeight - 30;

                    if (rect.top < topThreshold) {
                      window.scrollBy({
                        top: rect.top - topThreshold - 10,
                        behavior: "smooth",
                      });
                    } else if (rect.bottom > bottomThreshold) {
                      window.scrollBy({
                        top: rect.bottom - bottomThreshold + 20,
                        behavior: "smooth",
                      });
                    }
                  }}
                  onClick={() => setActiveTab(idx)}
                  className={`service-row transition-all duration-300 border cursor-pointer rounded-2xl overflow-hidden ${
                    isActive
                      ? "bg-[#0f121a] border-l-4 border-l-[#FFD400] border-[#FFD400]/60 shadow-[0_12px_40px_rgba(255,212,0,0.2)] scale-[1.01]"
                      : "bg-[#0b0d13]/85 border-white/10 hover:bg-[#11141f] hover:border-white/20"
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-6 md:p-8 flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <span
                        className={`font-mono text-base sm:text-lg font-bold transition-colors ${
                          isActive ? "text-[#FFD400]" : "text-neutral-500"
                        }`}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl md:text-3xl font-bold font-[family-name:var(--font-syne)] uppercase tracking-tight transition-colors ${
                            isActive ? "text-white" : "text-neutral-300"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 font-mono tracking-wider mt-1">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-all duration-300 shrink-0 ${
                        isActive
                          ? "rotate-45 text-[#FFD400] scale-110"
                          : "text-neutral-500"
                      }`}
                    />
                  </div>

                  {/* Smooth Accordion Body */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/10 space-y-4">
                        <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {service.scope.slice(0, 4).map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-xs sm:text-sm text-neutral-300 font-mono"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                          <CyberButton href="/services" size="sm">
                            EXPLORE SERVICE
                          </CyberButton>
                          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] font-bold">
                            {service.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= STICKY RIGHT SIDE: PREVIEW DISPLAY ================= */}
          <div className="lg:col-span-6 sticky top-24 self-start hidden lg:block z-20">
            <div className="relative w-full h-[82vh] min-h-[600px] xl:h-[85vh] xl:min-h-[650px]">
              {/* Cyber accent backdrop border */}
              <div className="absolute inset-0 border border-[#FFD400]/30 -rotate-1 rounded-2xl pointer-events-none" />

              {/* Increased Height Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#090b10] border border-white/15 shadow-2xl flex items-center justify-center p-1 sm:p-2">
                {services.map((srv, idx) => {
                  const isCurActive = activeTab === idx;
                  return (
                    <div
                      key={srv.id}
                      className={`absolute inset-1 sm:inset-2 transition-opacity duration-700 ease-in-out ${
                        isCurActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={srv.heroImage}
                        alt={srv.title}
                        fill
                        unoptimized
                        priority={idx === 0 || idx === 1}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain object-center transition-all duration-700 ease-out"
                      />
                    </div>
                  );
                })}

                {/* Top Floating Badge on Image */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-[#FFD400] shadow-lg">
                    {activeService.badge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
