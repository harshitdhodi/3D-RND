"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Database, 
  Globe, 
  UserCheck, 
  RefreshCw, 
  Mail, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Server,
  Key
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import CursorGlow from "@/components/CursorGlow";

const sections = [
  { id: "overview", label: "01. Overview & Scope" },
  { id: "data-collection", label: "02. Information We Collect" },
  { id: "data-usage", label: "03. How We Use Information" },
  { id: "legal-basis", label: "04. Legal Bases (GDPR / CCPA)" },
  { id: "data-sharing", label: "05. Third-Party Sharing" },
  { id: "security", label: "06. Security & Encryption" },
  { id: "retention", label: "07. Data Retention" },
  { id: "user-rights", label: "08. Your Legal Rights" },
  { id: "international", label: "09. International Transfers" },
  { id: "contact", label: "10. Contact Privacy Officer" },
];

export default function PrivacyPolicyPage() {
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
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400]/20 selection:text-[#FFD400]">
      <CursorGlow />
      <SpaceBackground />
      <Navbar />

      <PageBanner
        title="PRIVACY POLICY"
        breadcrumb="PRIVACY POLICY"
        size="compact"
        imageSrc="/banner/legal.png"
      />

      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Top Header Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD400]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs font-mono text-[#FFD400]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DATA PROTECTION STANDARDS // SOC-2 &amp; GDPR COMPLIANT</span>
            </div>
            <div className="text-xs font-mono text-white/50">
              EFFECTIVE DATE: <span className="text-white">JANUARY 1, 2026</span> • VERSION 3.2
            </div>
          </div>

          <p className="text-sm sm:text-base text-white/70 max-w-4xl leading-relaxed">
            At <strong className="text-white">RnD Technosoft Pvt. Ltd.</strong>, we prioritize the protection, confidentiality, and integrity of your digital footprint. This comprehensive Privacy Policy articulates how we process, protect, and utilize your personal and enterprise data across our web properties, software solutions, APIs, and client portals.
          </p>
        </div>

        {/* Layout Grid: Sticky TOC on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#0c0d12]/80 border border-white/10 backdrop-blur-md">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FFD400] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Document Contents</span>
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
                <div className="text-xs text-white/40 mb-2">Need a signed DPA?</div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFD400] hover:underline"
                >
                  <span>Request Data Processing Addendum</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Legal Sections */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section 01: Overview & Scope */}
            <section
              id="overview"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 01</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Overview &amp; Scope</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  This Privacy Policy applies to all services, websites (<code className="text-[#FFD400] font-mono text-xs">rndtechnosoft.com</code>), applications, and client portals provided by <strong className="text-white">RnD Technosoft Pvt. Ltd.</strong> (“RnD”, “we”, “our”, or “us”).
                </p>
                <p>
                  Whether you are an individual browsing our agency portfolio, a prospective client inquiring about our engineering capabilities, or an enterprise customer engaging in custom software development, this document describes your statutory rights and our commitments under worldwide data protection laws, including the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and the Digital Personal Data Protection Act (DPDPA).
                </p>
              </div>
            </section>

            {/* Section 02: Information We Collect */}
            <section
              id="data-collection"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 02</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>We classify collected information into three primary streams:</p>
                
                <div className="space-y-4 my-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#FFD400]" />
                      Direct Inquiries &amp; Customer Information
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60">
                      When you submit a project inquiry, apply for a career role, or execute a master services agreement, we collect your full name, business email address, phone number, corporate entity details, and project specifications.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                      <Server className="w-4 h-4 text-[#FFD400]" />
                      Telemetry &amp; Machine Log Data
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60">
                      Our servers automatically log access timestamps, IP addresses (anonymized at entry), browser fingerprint headers, referring domains, device operating systems, and page latency metrics to detect DDoS threats and optimize system throughput.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#FFD400]" />
                      Client Project Data &amp; Repositories
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60">
                      Under formal Service Level Agreements (SLAs), client codebases, test payloads, and proprietary documentation transferred to RnD are processed in air-gapped or dedicated encrypted staging environments strictly for engineering execution.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 03: How We Use Information */}
            <section
              id="data-usage"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 03</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. How We Use Information</h2>
              <div className="space-y-3 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>We deploy gathered data strictly for lawful, explicitly defined objectives:</p>
                <ul className="space-y-2 list-disc list-inside text-white/80 text-sm">
                  <li><strong className="text-white">Fulfillment of Contracts:</strong> Delivering architectural designs, custom software codebases, mobile builds, cloud provisioning, and digital marketing campaigns.</li>
                  <li><strong className="text-white">Customer Support &amp; Technical Communications:</strong> Sending deployment notices, security advisories, invoice breakdowns, and engineering standup updates.</li>
                  <li><strong className="text-white">Infrastructure Integrity &amp; Threat Detection:</strong> Monitoring real-time traffic to mitigate bot intrusion, unauthorized brute-force attempts, and API rate-limit abuse.</li>
                  <li><strong className="text-white">Compliance &amp; Statutory Auditing:</strong> Meeting international financial, taxation, intellectual property filing, and corporate governance standards.</li>
                </ul>
                <div className="p-3.5 rounded-lg bg-[#FFD400]/5 border border-[#FFD400]/20 text-xs font-mono text-[#FFD400] mt-4">
                  NOTE: RnD Technosoft does NOT sell, rent, or trade your personal data or client intellectual property to third-party data brokers or advertisers.
                </div>
              </div>
            </section>

            {/* Section 04: Legal Bases (GDPR & CCPA) */}
            <section
              id="legal-basis"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 04</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. Legal Bases for Processing (GDPR Article 6)</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>If you reside within the European Economic Area (EEA) or the United Kingdom, our processing is predicated upon:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="font-semibold text-white text-sm mb-1">Contractual Necessity</div>
                    <p className="text-xs text-white/60">Processing mandatory to fulfill project agreements and client deliverables.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="font-semibold text-white text-sm mb-1">Legitimate Interests</div>
                    <p className="text-xs text-white/60">Ensuring network cybersecurity, preventing fraud, and enhancing web experience.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="font-semibold text-white text-sm mb-1">Explicit Consent</div>
                    <p className="text-xs text-white/60">When you opt into newsletters, marketing communications, or analytic cookies.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="font-semibold text-white text-sm mb-1">Statutory Compliance</div>
                    <p className="text-xs text-white/60">Adhering to tax laws, commercial codes, and regulatory court subpoenas.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 05: Third-Party Sharing */}
            <section
              id="data-sharing"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 05</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Third-Party Sharing &amp; Sub-Processors</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  We engage rigorously vetted third-party vendors (sub-processors) to maintain high availability and security across our digital ecosystem. All vendors operate under legally binding DPAs:
                </p>
                <ul className="space-y-2 text-sm text-white/80 list-disc list-inside">
                  <li><strong className="text-white">Cloud Hosting &amp; Compute:</strong> AWS (Amazon Web Services), Vercel, Google Cloud Platform (SOC-2 Type II &amp; ISO 27001 verified).</li>
                  <li><strong className="text-white">CDN &amp; DDoS Mitigation:</strong> Cloudflare Inc. for edge caching, SSL/TLS termination, and web application firewalling.</li>
                  <li><strong className="text-white">Transactional Communications:</strong> Resend, SendGrid, or AWS SES for transactional alerts and status updates.</li>
                  <li><strong className="text-white">Payment Gateways:</strong> Stripe, Razorpay, or Wire Transfers adhering to PCI-DSS Level 1 compliance.</li>
                </ul>
              </div>
            </section>

            {/* Section 06: Security & Encryption */}
            <section
              id="security"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 06</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Security Architecture &amp; Encryption</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  We treat data defense with military-grade rigor. Our technical countermeasures encompass:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <Key className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">TLS 1.3 &amp; AES-256</div>
                      <div className="text-xs text-white/60">All transit communications enforce TLS 1.3 encryption. Stored databases utilize AES-256 bit block ciphers.</div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <Lock className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">Zero-Trust &amp; RBAC</div>
                      <div className="text-xs text-white/60">Role-based access control with hardware-token MFA mandatory across all internal developer endpoints.</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 07: Data Retention */}
            <section
              id="retention"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 07</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Data Retention &amp; Disposal</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  We retain personal data only as long as necessary to achieve the specific purposes set forth in this document or pursuant to contractual retention agreements:
                </p>
                <ul className="space-y-2 text-sm text-white/80 list-disc list-inside">
                  <li><strong className="text-white">Active Client Contracts:</strong> Retained for the contract duration plus statutory limitation periods (typically 5 to 7 years for tax and commercial verification).</li>
                  <li><strong className="text-white">Prospective Inquiries:</strong> Retained for 24 months before automated purge unless a formal engagement commences.</li>
                  <li><strong className="text-white">Server Logs:</strong> Cycled and purged on an automated 90-day rolling window.</li>
                </ul>
              </div>
            </section>

            {/* Section 08: User Rights */}
            <section
              id="user-rights"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 08</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Your Legal Rights (GDPR &amp; CCPA/CPRA)</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>Depending on your geographic jurisdiction, you hold enforceable privacy rights:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <strong className="text-white block mb-1">Right to Access</strong>
                    <span className="text-xs text-white/60">Obtain confirmation and copies of personal data held about you.</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <strong className="text-white block mb-1">Right to Rectification</strong>
                    <span className="text-xs text-white/60">Correct inaccurate or outdated information without undue delay.</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <strong className="text-white block mb-1">Right to Erasure ("Be Forgotten")</strong>
                    <span className="text-xs text-white/60">Request permanent deletion where data is no longer necessary.</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <strong className="text-white block mb-1">Right to Data Portability</strong>
                    <span className="text-xs text-white/60">Receive your data in a structured, machine-readable JSON format.</span>
                  </div>
                </div>
                <p className="text-xs text-white/60">
                  To exercise any of these statutory rights, please submit an official request to our Data Protection Officer at <code className="text-[#FFD400] font-mono">privacy@rndtechnosoft.com</code>. We reply within 30 calendar days.
                </p>
              </div>
            </section>

            {/* Section 09: International Transfers */}
            <section
              id="international"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 09</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. Cross-Border International Data Transfers</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  As a global digital engineering partner with headquarters in Vapi, Gujarat, India, and clients spanning North America, Europe, Australia, and the Middle East, data may be transferred to and maintained on compute clusters located outside your home jurisdiction.
                </p>
                <p>
                  Where cross-border transfers occur from the EEA or UK, RnD implements European Commission Standard Contractual Clauses (SCCs) alongside supplementary cryptographic safeguards to guarantee an adequate level of data protection equivalent to GDPR standards.
                </p>
              </div>
            </section>

            {/* Section 10: Contact */}
            <section
              id="contact"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-[#FFD400]/30 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 10</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10. Contact Our Privacy &amp; Compliance Team</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  For inquiries, regulatory verifications, or to execute a tailored Data Protection Addendum (DPA), please reach out directly:
                </p>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm font-mono text-white/80">
                  <div><strong className="text-white">Entity:</strong> RnD Technosoft Pvt. Ltd.</div>
                  <div><strong className="text-white">Attention:</strong> Data Protection Officer / Legal Operations</div>
                  <div><strong className="text-white">Email:</strong> <a href="mailto:privacy@rndtechnosoft.com" className="text-[#FFD400] hover:underline">privacy@rndtechnosoft.com</a> / <a href="mailto:info@rndtechnosoft.com" className="text-[#FFD400] hover:underline">info@rndtechnosoft.com</a></div>
                  <div><strong className="text-white">Global Headquarters:</strong> Vapi, Gujarat, India</div>
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

