"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Code,
  TrendingUp,
  Palette,
  Camera,
} from "lucide-react";

export default function RnDFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Quick Links taken directly from Navbar
  const quickLinks = [
    { name: "Our Universe", label: "About Us", href: "/about-us" },
    { name: "The Ecosystem", label: "All Services", href: "/services" },
    { name: "Our Creations", label: "Selected Works", href: "/portfolio" },
    { name: "Sectors in Focus", label: "Industry Verticals", href: "/industries" },
    { name: "Insights & Ideas", label: "Blog & Research", href: "/insights" },
    { name: "Mission Control", label: "Contact Us", href: "/contact-us" },
  ];

  // Core Service Categories and their Child Subcategories (from ServicesMegaMenu)
  const serviceCategories = [
    {
      name: "Technology Solutions",
      href: "/technology-solution",
      icon: Code,
      badge: "Core Architecture",
      children: [
        { name: "Custom Website Development", href: "/technology-solution/web-development" },
        { name: "Custom Software Solutions", href: "/technology-solution/enterprise-software-solutions" },
        { name: "Mobile App Development", href: "/technology-solution/mobile-applications" },
        { name: "E-Commerce Platforms", href: "/technology-solution/ecommerce-platform-engineering" },
      ],
    },
    {
      name: "Digital Marketing",
      href: "/digital-marketing",
      icon: TrendingUp,
      badge: "Performance",
      children: [
        { name: "Technical SEO Dominance", href: "/digital-marketing/technical-seo-dominance" },
        { name: "Social Media Marketing", href: "/digital-marketing/social-media-management" },
        { name: "Performance PPC & Paid Ads", href: "/digital-marketing/performance-ppc-advertising" },
        { name: "Content Strategy & Production", href: "/digital-marketing/content-strategy-production" },
      ],
    },
    {
      name: "Branding & Design",
      href: "/branding-design",
      icon: Palette,
      badge: "Creative Identity",
      children: [
        { name: "Brand Strategy & Systems", href: "/branding-design/brand-identity-systems" },
        { name: "UI/UX & Spatial Design", href: "/branding-design/ui-ux-spatial-design" },
        { name: "Graphic Design Services", href: "/branding-design/graphic-design" },
        { name: "Marketing Collateral Design", href: "/branding-design/marketing-collateral" },
      ],
    },
    {
      name: "Media Production",
      href: "/media-production",
      icon: Camera,
      badge: "Cinematic Media",
      children: [
        { name: "Commercial Videography", href: "/media-production/commercial-video-production" },
        { name: "Commercial Photography", href: "/media-production/commercial-photography" },
        { name: "Video Editing & Post-Prod", href: "/media-production/video-editing" },
        { name: "Creative Media Production", href: "/media-production/creative-production" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#04060a] text-white pt-16 sm:pt-20 lg:pt-24 pb-10 border-t border-white/10 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden selection:bg-[#FFD400] selection:text-black">
      {/* Ambient Cosmic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#FFD400]/[0.04] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[400px] bg-cyan-500/[0.03] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[450px] bg-amber-500/[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="pr-3 rounded-xl transition-all flex items-center">
                <img
                  src="/logo.svg"
                  alt="RnD Technosoft Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.03]"
                />
              </div>
            </Link>

            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              RnD Technosoft is an integrated digital agency engineering high-performance Next.js web applications, enterprise software architectures, omnichannel marketing funnels, and commercial 8K visual production.
            </p>

            <div className="pt-2 space-y-3.5 border-t border-white/10 text-xs">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-light block mb-1.5">
                  Office Address
                </span>
                <a
                  href="https://maps.app.goo.gl/7tX5zSdgBo65nbKL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-neutral-400 hover:text-white transition-colors leading-relaxed group"
                >
                  <MapPin className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#FFD400] shrink-0 mt-0.5 transition-colors" />
                  <span className="underline-offset-2 hover:underline font-light">
                    3rd Floor, Sapphire, Daman Rd, above Axis Bank, Daulat Nagar, Chala, Vapi, Gujarat 396191
                  </span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-light block mb-1">
                  Contact Number
                </span>
                <a
                  href="tel:+917304945823"
                  className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors font-mono text-xs font-light group"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#FFD400] shrink-0 transition-colors" />
                  <span className="font-light">+91-730 494 5823</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-light block mb-1">
                  Write Us
                </span>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="mailto:bdm@rndtechnosoft.com"
                    className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors font-mono text-xs font-light group"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#FFD400] shrink-0 transition-colors" />
                    <span className="font-light hover:underline">bdm@rndtechnosoft.com</span>
                  </a>
                  <a
                    href="mailto:rndtechnosoft@gmail.com"
                    className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors font-mono text-xs font-light group"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#FFD400] shrink-0 transition-colors" />
                    <span className="font-light hover:underline">rndtechnosoft@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono text-[#FFD400] uppercase tracking-[0.25em] font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-neutral-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span className="text-neutral-500 group-hover:text-[#FFD400] transition-colors font-mono text-xs">
                      ›
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tech & Marketing Services */}
          <div className="lg:col-span-3 space-y-6">
            {serviceCategories.slice(0, 2).map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.name} className="space-y-3">
                  <Link
                    href={cat.href}
                    className="group inline-flex items-center gap-2 text-xs font-mono text-[#FFD400] uppercase tracking-[0.2em] font-bold hover:text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#FFD400] group-hover:scale-110 transition-transform" />
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <ul className="space-y-2 text-xs sm:text-[13px] font-light text-neutral-400 pl-2 border-l border-white/10">
                    {cat.children.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="hover:text-white hover:underline transition-colors block leading-snug"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Column 4: Branding & Media Services */}
          <div className="lg:col-span-3 space-y-6">
            {serviceCategories.slice(2, 4).map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.name} className="space-y-3">
                  <Link
                    href={cat.href}
                    className="group inline-flex items-center gap-2 text-xs font-mono text-[#FFD400] uppercase tracking-[0.2em] font-bold hover:text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#FFD400] group-hover:scale-110 transition-transform" />
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <ul className="space-y-2 text-xs sm:text-[13px] font-light text-neutral-400 pl-2 border-l border-white/10">
                    {cat.children.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="hover:text-white hover:underline transition-colors block leading-snug"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}


          </div>
        </div>

        {/* Policies, Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 pt-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <span>© 2026 RnD Technosoft Pvt. Ltd. All rights reserved.</span>
            <Link href="/privacy-policy" className="hover:text-white hover:underline transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white hover:underline transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies-policy" className="hover:text-white hover:underline transition-colors">
              Cookies Policy
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-[#FFD400] text-neutral-300 hover:text-black border border-white/10 hover:border-[#FFD400] transition-all duration-300 font-mono text-xs shadow-md cursor-pointer shrink-0"
            title="Back to Top"
          >
            <span>Back to Orbit</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FFD400] group-hover:text-black group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
