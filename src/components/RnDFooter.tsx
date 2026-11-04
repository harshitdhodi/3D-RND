"use client";

import Link from "next/link";

import { ArrowUp, Mail, Phone, MapPin, Globe, Shield, Sparkles } from "lucide-react";

export default function RnDFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-20 sm:pt-24 lg:pt-28 pb-12 border-t border-white/10 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#FFD400]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3.5 py-1.5 rounded-xl flex items-center">
                <img
                  src="/logo.svg"
                  alt="RND Technosoft Logo"
                  className="h-7 sm:h-16 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-white/65 leading-relaxed font-light mb-6 max-w-sm">
              <strong className="text-white font-medium">RnD Technosoft</strong> is an integrated digital agency engineering high-performance software, spatial 3D web platforms, omnichannel marketing, and commercial visual production for high-growth global enterprises.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#FFD400]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>GLOBAL SYSTEM STATUS: 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Technology Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono text-[#FFD400] uppercase tracking-[0.2em] mb-4">
              Technology & Cloud
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Next.js & React Web Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Enterprise Cloud Software & SaaS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Spatial 3D WebGL Experiences
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Headless CMS Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Generative AI & RAG Pipelines
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  High-Availability Microservices
                </a>
              </li>
            </ul>
          </div>

          {/* Marketing & Media */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-[#FFD400] uppercase tracking-[0.2em] mb-4">
              Marketing & Media
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Omnichannel SMM Growth
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  High-ROI Paid Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Commercial 8K Film Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Studio Product Photography
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Brand Identity & Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Global Presence */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono text-[#FFD400] uppercase tracking-[0.2em] mb-4">
              Mission Control
            </h4>
            <div className="space-y-3 text-sm font-light text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD400] shrink-0 mt-0.5" />
                <span>Global Hubs: New York • London • Dubai • New Delhi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD400] shrink-0" />
                <a href="mailto:contact@rndtechnosoft.com" className="hover:text-white transition-colors">
                  contact@rndtechnosoft.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD400] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 (0) 98765 43210
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#FFD400] text-white/70 hover:text-black border border-white/10 hover:border-[#FFD400] flex items-center justify-center transition-all hover:scale-105 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#FFD400] text-white/70 hover:text-black border border-white/10 hover:border-[#FFD400] flex items-center justify-center transition-all hover:scale-105 shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#FFD400] text-white/70 hover:text-black border border-white/10 hover:border-[#FFD400] flex items-center justify-center transition-all hover:scale-105 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-[#FFD400] text-white/70 hover:text-black border border-white/10 hover:border-[#FFD400] flex items-center justify-center transition-all hover:scale-105 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Policies & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© 2026 RnD Technosoft Pvt. Ltd. All rights reserved.</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies-policy" className="hover:text-white transition-colors">Cookies Policy</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="group relative inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.04] hover:bg-[#FFD400] text-white/80 hover:text-black border border-white/10 hover:border-[#FFD400] transition-all duration-300 font-mono text-xs shadow-md -translate-y-[20%] sm:-translate-y-4 hover:-translate-y-5 cursor-pointer shrink-0"
          >
            <span>Back to Orbit</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FFD400] group-hover:text-black group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
