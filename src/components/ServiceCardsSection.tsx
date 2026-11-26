"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";
import CyberButton from "@/components/CyberButton";
import { ServiceItem, DEFAULT_SERVICES_DATA } from "@/lib/getServicesData";
import { SectionHeading, DEFAULT_SECTION_HEADINGS } from "@/lib/getSectionHeading";

export interface ServiceCardsSectionProps {
  initialData?: ServiceItem[];
  initialHeading?: SectionHeading;
}

export default function ServiceCardsSection({
  initialData = DEFAULT_SERVICES_DATA,
  initialHeading = DEFAULT_SECTION_HEADINGS.services,
}: ServiceCardsSectionProps) {
  const services = initialData && initialData.length > 0 ? initialData : DEFAULT_SERVICES_DATA;
  const heading = initialHeading || DEFAULT_SECTION_HEADINGS.services;
  const [activeTab, setActiveTab] = useState(0);

  const activeService = services[activeTab] || services[0];

  return (
    <section
      id="services"
      className="py-20 sm:py-24 lg:py-28 bg-[#06070a] text-white overflow-visible relative border-t border-white/5 px-4 sm:px-8 lg:px-12"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#FFD400]/4 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="border-b border-white/10 pb-8 sm:pb-10">
            {heading.badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4">
                <Globe2 className="w-3.5 h-3.5" />
                <span>{heading.badge}</span>
              </div>
            )}

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px] font-[family-name:var(--font-syne)] text-white font-bold tracking-tight leading-[1.08] uppercase select-none">
              {heading.title}
            </h2>

            {heading.subtitle && (
              <p className="text-sm sm:text-base text-[#FFD400] font-mono tracking-wider uppercase mt-2">
                {heading.subtitle}
              </p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 sm:pt-8">
              {heading.tagline && (
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light font-[family-name:var(--font-jakarta)] max-w-2xl">
                  {heading.tagline}
                </p>
              )}

              <CyberButton href="/services" size="md">
                EXPLORE ALL RND ECOSYSTEM →
              </CyberButton>
            </div>
          </div>
        </div>

        {/* Dynamic Split Layout: Left side scrolls naturally, Right side remains sticky */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative w-full">
          {/* ================= SCROLLABLE LEFT SIDE: ACCORDION SERVICE CARDS ================= */}
          <div className="lg:col-span-6 space-y-6 pb-6">
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
                        className="object-cover object-center transition-all duration-700 ease-out"
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
