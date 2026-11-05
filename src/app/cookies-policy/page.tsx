"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Cookie, 
  ShieldCheck, 
  Settings, 
  ToggleLeft, 
  Sliders, 
  Eye, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink,
  Layers,
  Database
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";

const sections = [
  { id: "overview", label: "01. What Are Cookies" },
  { id: "how-we-use", label: "02. How We Use Cookies" },
  { id: "categories", label: "03. Cookie Classifications" },
  { id: "inventory", label: "04. Specific Cookies Inventory" },
  { id: "third-party", label: "05. Third-Party Trackers" },
  { id: "controls", label: "06. Managing Your Preferences" },
  { id: "browser-settings", label: "07. Browser Controls" },
  { id: "updates-contact", label: "08. Policy Updates & Contact" },
];

const cookieData = [
  {
    name: "__cf_bm",
    provider: "Cloudflare",
    purpose: "Distinguishes between humans and malicious bot traffic to safeguard website performance.",
    duration: "30 minutes",
    type: "Strictly Necessary",
  },
  {
    name: "rnd_session",
    provider: "RnD Technosoft",
    purpose: "Maintains encrypted session state and CSRF prevention across navigation.",
    duration: "Session",
    type: "Strictly Necessary",
  },
  {
    name: "_ga, _ga_*",
    provider: "Google Analytics 4",
    purpose: "Gathers aggregated telemetry, page views, and click rates to improve page load metrics.",
    duration: "2 years",
    type: "Performance & Analytics",
  },
  {
    name: "rnd_theme_pref",
    provider: "RnD Technosoft",
    purpose: "Stores user UI visual preferences, motion accessibility settings, and sound toggles.",
    duration: "1 year",
    type: "Functional",
  },
  {
    name: "_fbp",
    provider: "Meta / Facebook",
    purpose: "Measures ad conversion efficiency and attribution across digital growth campaigns.",
    duration: "90 days",
    type: "Marketing & Targeting",
  },
];

export default function CookiesPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400]/20 selection:text-[#FFD400]">
      <SpaceBackground />
      <Navbar />

      <PageBanner
        title="COOKIES POLICY"
        breadcrumb="COOKIES POLICY"
        size="compact"
        imageSrc="/banner/legal.png"
      />

      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Top Header Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD400]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs font-mono text-[#FFD400]">
              <Cookie className="w-3.5 h-3.5" />
              <span>EU ePRIVACY DIRECTIVE // TRANSPARENCY PROTOCOL</span>
            </div>
            <div className="text-xs font-mono text-white/50">
              EFFECTIVE DATE: <span className="text-white">JANUARY 1, 2026</span> • REVISION 2.1
            </div>
          </div>

          <p className="text-sm sm:text-base text-white/70 max-w-4xl leading-relaxed">
            This Cookies Policy clarifies how <strong className="text-white">RnD Technosoft Pvt. Ltd.</strong> (“RnD”, “we”, “our”) employs cookies, pixel tags, local storage, and related tracking technologies across our web domains to enhance your experience, maintain security, and optimize performance.
          </p>
        </div>

        {/* Layout Grid: Sticky TOC on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#0c0d12]/80 border border-white/10 backdrop-blur-md">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FFD400] mb-4 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                <span>Cookies Index</span>
              </div>
              <nav className="space-y-1 text-sm font-mono">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                      activeSection === section.id
                        ? "bg-[#FFD400]/10 text-[#FFD400] border-l-2 border-[#FFD400] font-medium"
                        : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="truncate">{section.label}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        activeSection === section.id
                          ? "text-[#FFD400] translate-x-1"
                          : "text-white/20 group-hover:text-white/50"
                      }`}
                    />
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs text-white/40 mb-2">Want to know about data handling?</div>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFD400] hover:underline"
                >
                  <span>Read Full Privacy Policy</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Legal Sections */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section 01: What Are Cookies */}
            <section
              id="overview"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">{"//"} SECTION 01</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. What Are Cookies &amp; Tracking Technologies?</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  Cookies are tiny alphanumeric text files placed onto your computer, tablet, or smartphone by web servers when you navigate internet sites. They are widely utilized to make web platforms function smoothly, store your selected display parameters, and deliver aggregated analytics to web engineers.
                </p>
                <p>
                  Alongside cookies, we may utilize complementary web technologies including HTML5 local storage, session storage, and transparent pixel tags to ensure low-latency 3D render delivery and protect against bot intrusion.
                </p>
              </div>
            </section>

            {/* Section 02: How We Use Cookies */}
            <section
              id="how-we-use"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">{"//"} SECTION 02</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Why We Deploy Cookies</h2>
              <div className="space-y-3 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>We deploy cookies to accomplish four operational objectives:</p>
                <ul className="space-y-2 list-disc list-inside text-white/80 text-sm">
                  <li><strong className="text-white">Security &amp; DDoS Shielding:</strong> Identifying authorized traffic and isolating brute-force attacks via Cloudflare.</li>
                  <li><strong className="text-white">Fluid Navigation:</strong> Preserving form state when requesting service proposals so you don&apos;t lose typed text.</li>
                  <li><strong className="text-white">Performance Telemetry:</strong> Evaluating asset load latency, WebGL canvas render rates, and mobile responsiveness.</li>
                  <li><strong className="text-white">Campaign Attribution:</strong> Verifying which organic and search advertising initiatives direct high-intent traffic to our agency.</li>
                </ul>
              </div>
            </section>

            {/* Section 03: Cookie Classifications */}
            <section
              id="categories"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">{"//"} SECTION 03</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. Cookie Classifications We Implement</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 font-semibold text-white mb-1">
                      <ShieldCheck className="w-4 h-4 text-[#FFD400]" />
                      <span>Strictly Necessary</span>
                    </div>
                    <p className="text-xs text-white/60">
                      Essential for system operation, CSRF security, and DNS load-balancing. These cannot be disabled through normal cookie toggles without breaking website operation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 font-semibold text-white mb-1">
                      <Layers className="w-4 h-4 text-[#FFD400]" />
                      <span>Performance &amp; Analytics</span>
                    </div>
                    <p className="text-xs text-white/60">
                      Collects anonymous telemetry regarding page bounce rates and visitor journeys (e.g. Google Analytics 4) without pinpointing individual personal identities.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 font-semibold text-white mb-1">
                      <Settings className="w-4 h-4 text-[#FFD400]" />
                      <span>Functional &amp; Experience</span>
                    </div>
                    <p className="text-xs text-white/60">
                      Remembers your preference configurations such as sound effects, high-contrast mode, and preferred currency for international quotes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 font-semibold text-white mb-1">
                      <Eye className="w-4 h-4 text-[#FFD400]" />
                      <span>Marketing &amp; Retargeting</span>
                    </div>
                    <p className="text-xs text-white/60">
                      Permits our team to deliver relevant digital growth case studies and showcase advertisements to individuals who previously expressed interest.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 04: Cookie Inventory */}
            <section
              id="inventory"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">{"//"} SECTION 04</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. Specific Cookies Inventory</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>The table below details the most common first and third-party cookies utilized on our site:</p>
                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-white/[0.05] text-white uppercase text-[11px] border-b border-white/10">
                      <tr>
                        <th className="p-3">Cookie Name</th>
                        <th className="p-3">Provider</th>
                        <th className="p-3">Purpose</th>
                        <th className="p-3">Duration</th>
                        <th className="p-3">Category</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white/70">
                      {cookieData.map((item, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02]">
                          <td className="p-3 text-[#FFD400] font-semibold">{item.name}</td>
                          <td className="p-3">{item.provider}</td>
                          <td className="p-3 font-sans text-xs">{item.purpose}</td>
                          <td className="p-3 whitespace-nowrap">{item.duration}</td>
                          <td className="p-3 whitespace-nowrap text-white/90">{item.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 05: Third-Party Trackers */}
            <section
              id="third-party"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">{"//"} SECTION 05</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Third-Party Technologies &amp; CDNs</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  Certain embedded services (like interactive WebGL canvases, Vimeo/YouTube showreels, or Google Maps) may place their own independent tracking cookies onto your browser.
                </p>
                <p>
                  These third-party platforms govern their collected information through their distinct privacy notices. RnD does not directly access or control third-party cookies placed through such integrations.
                </p>
              </div>
            </section>

            {/* Section 06: Managing Your Preferences */}
            <section
              id="controls"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">{"//"} SECTION 06</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  You hold full autonomy over cookie acceptance. When visiting our platform for the first time, our cookie consent banner allows you to consent to or decline non-essential cookies.
                </p>
                <p>
                  You can modify or revoke your consent at any time by clearing your browser cache or re-opening cookie preferences. Please note that restricting strictly necessary cookies may hinder site navigation and access to secured client portals.
                </p>
              </div>
            </section>

            {/* Section 07: Browser Controls */}
            <section
              id="browser-settings"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">{"//"} SECTION 07</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Browser-Level Controls &amp; Opt-Out</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  Most modern desktop and mobile browsers permit you to inspect, manage, and delete cookies directly via browser settings:
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/80 text-sm">
                  <li><strong className="text-white">Google Chrome:</strong> Settings → Privacy and Security → Third-party cookies.</li>
                  <li><strong className="text-white">Mozilla Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data.</li>
                  <li><strong className="text-white">Apple Safari:</strong> Settings → Safari → Advanced → Block All Cookies.</li>
                  <li><strong className="text-white">Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies.</li>
                </ul>
                <p className="text-xs text-white/60">
                  To globally opt-out of Google Analytics across all websites, visit the official Google Analytics Opt-out Browser Add-on at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#FFD400] hover:underline">tools.google.com/dlpage/gaoptout</a>.
                </p>
              </div>
            </section>

            {/* Section 08: Policy Updates & Contact */}
            <section
              id="updates-contact"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-[#FFD400]/30 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">{"//"} SECTION 08</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Policy Updates &amp; Contact</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  We may periodically revise this Cookies Policy to align with new legal statutes, browser privacy changes, or new technological capabilities. Any revisions will be published immediately on this page with an updated revision date.
                </p>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm font-mono text-white/80">
                  <div><strong className="text-white">Entity:</strong> RnD Technosoft Pvt. Ltd.</div>
                  <div><strong className="text-white">Inquiries:</strong> <a href="mailto:privacy@rndtechnosoft.com" className="text-[#FFD400] hover:underline">privacy@rndtechnosoft.com</a></div>
                  <div><strong className="text-white">Headquarters:</strong> Vapi, Gujarat, India</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <RnDFooter />
    </div>
  );
}

