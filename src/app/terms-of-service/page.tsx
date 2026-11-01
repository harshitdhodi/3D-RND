"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Scale, 
  FileCheck, 
  Code2, 
  CreditCard, 
  Lock, 
  AlertTriangle, 
  HelpCircle, 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import CursorGlow from "@/components/CursorGlow";

const sections = [
  { id: "acceptance", label: "01. Acceptance of Terms" },
  { id: "scope", label: "02. Scope of Services" },
  { id: "ip-ownership", label: "03. Intellectual Property & IP Transfer" },
  { id: "client-obligations", label: "04. Client Obligations" },
  { id: "payments", label: "05. Invoicing & Payment Terms" },
  { id: "confidentiality", label: "06. Confidentiality & Mutual NDA" },
  { id: "warranties", label: "07. Warranties & Disclaimers" },
  { id: "liability", label: "08. Limitation of Liability" },
  { id: "termination", label: "09. Term & Termination" },
  { id: "governing-law", label: "10. Governing Law & Arbitration" },
];

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("acceptance");

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
        title="TERMS OF SERVICE"
        breadcrumb="TERMS OF SERVICE"
        size="compact"
      />

      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Top Header Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD400]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs font-mono text-[#FFD400]">
              <Scale className="w-3.5 h-3.5" />
              <span>MASTER SERVICE AGREEMENT // B2B ENGAGEMENT TERMS</span>
            </div>
            <div className="text-xs font-mono text-white/50">
              EFFECTIVE DATE: <span className="text-white">JANUARY 1, 2026</span> • REVISION 2.8
            </div>
          </div>

          <p className="text-sm sm:text-base text-white/70 max-w-4xl leading-relaxed">
            These Terms of Service (“Terms”) constitute a legally binding contractual agreement between <strong className="text-white">RnD Technosoft Pvt. Ltd.</strong> (“RnD”, “Company”, “we”, “us”) and the entity or individual (“Client”, “you”) commissioning our digital engineering, software architecture, design, and growth consulting services.
          </p>
        </div>

        {/* Layout Grid: Sticky TOC on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#0c0d12]/80 border border-white/10 backdrop-blur-md">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FFD400] mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Agreement Sections</span>
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
                <div className="text-xs text-white/40 mb-2">Executing a bespoke contract?</div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFD400] hover:underline"
                >
                  <span>Request Custom Enterprise MSA</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Legal Sections */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section 01: Acceptance of Terms */}
            <section
              id="acceptance"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 01</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Acceptance &amp; Structure of Terms</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  By approving a Statement of Work (SOW), issuing a purchase order, accessing our staging servers, or transferring milestone funds to RnD Technosoft Pvt. Ltd., you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.
                </p>
                <p>
                  In the event of an explicit conflict between these general Terms and an executed Statement of Work signed by authorized signatories of both parties, the terms of the specific Statement of Work shall prevail.
                </p>
              </div>
            </section>

            {/* Section 02: Scope of Services */}
            <section
              id="scope"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 02</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Scope of Services</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  RnD delivers high-performance digital solutions across four core capability domains:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <strong className="text-white block font-medium">Technology Solutions</strong>
                    <span className="text-xs text-white/60">Bespoke SaaS architectures, high-load backends, mobile apps, and headless e-commerce.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <strong className="text-white block font-medium">Branding &amp; Creative Design</strong>
                    <span className="text-xs text-white/60">Visual identity systems, interactive 3D WebGL interfaces, design systems, and product packaging.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <strong className="text-white block font-medium">Digital Marketing &amp; SEO</strong>
                    <span className="text-xs text-white/60">Performance ad scaling, programmatic SEO, conversion rate optimization, and telemetry.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <strong className="text-white block font-medium">Media &amp; CGI Production</strong>
                    <span className="text-xs text-white/60">Photorealistic 3D product renders, video post-production, VFX, and multi-channel commercials.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 03: Intellectual Property & Ownership */}
            <section
              id="ip-ownership"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 03</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3. Intellectual Property Rights &amp; Code Ownership</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <div className="p-4 rounded-xl bg-[#FFD400]/5 border border-[#FFD400]/20 text-xs sm:text-sm text-white/80">
                  <strong className="text-[#FFD400] font-semibold block mb-1">100% Client Ownership Guarantee:</strong>
                  Upon full, verified payment of all milestone invoices designated in the relevant SOW, RnD irrevocably assigns, transfers, and conveys all right, title, and intellectual property interest in the customized deliverables, source code, designs, and brand assets to the Client.
                </div>
                <p>
                  <strong className="text-white">Pre-Existing Frameworks &amp; Toolkits:</strong> RnD retains ownership of its proprietary base libraries, boilerplates, and developer utilities developed independently prior to or outside of the engagement. The Client receives an irrevocable, perpetual, royalty-free, worldwide license to utilize such embedded components within the finished software.
                </p>
                <p>
                  <strong className="text-white">Open Source Compliance:</strong> We document and license third-party open-source libraries under permissive licenses (e.g., MIT, Apache 2.0, BSD) ensuring full freedom for commercial deployment.
                </p>
              </div>
            </section>

            {/* Section 04: Client Obligations */}
            <section
              id="client-obligations"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 04</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4. Client Obligations &amp; Approvals</h2>
              <div className="space-y-3 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>To enable rapid engineering execution, Client agrees to:</p>
                <ul className="space-y-2 list-disc list-inside text-white/80 text-sm">
                  <li>Designate an authorized Single Point of Contact (SPOC) empowered to approve designs, specifications, and sprint milestones.</li>
                  <li>Provide required API credentials, brand style guides, content assets, and technical access tokens in a timely manner.</li>
                  <li>Review and issue feedback or formal sign-off on delivered sprint milestones within five (5) business days of receipt.</li>
                </ul>
              </div>
            </section>

            {/* Section 05: Invoicing & Payment Terms */}
            <section
              id="payments"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 05</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5. Invoicing, Milestones &amp; Payment Terms</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  Projects are billed on a fixed-milestone, monthly dedicated sprint, or time-and-materials basis as specified in the applicable SOW.
                </p>
                <ul className="space-y-2 list-disc list-inside text-white/80 text-sm">
                  <li><strong className="text-white">Net Payment Terms:</strong> Invoices are payable within seven (7) to fourteen (14) calendar days from the date of issue.</li>
                  <li><strong className="text-white">Taxes:</strong> All quoted professional rates are exclusive of applicable GST, VAT, or withholding taxes unless stated otherwise.</li>
                  <li><strong className="text-white">Late Payments:</strong> Accounts overdue past thirty (30) days may incur a 1.5% monthly financing charge or temporary suspension of staging deployments until balances are cleared.</li>
                </ul>
              </div>
            </section>

            {/* Section 06: Confidentiality & Mutual NDA */}
            <section
              id="confidentiality"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 06</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6. Confidentiality &amp; Mutual Non-Disclosure</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  Both parties agree to treat all business information, architectural schemas, source code, financial figures, customer databases, and product roadmaps shared during the engagement as strictly Confidential Information.
                </p>
                <p>
                  Neither party shall disclose, reproduce, or disseminate Confidential Information to any third party without explicit prior written authorization, exercising at least the same degree of care as it uses to protect its own proprietary assets. Confidentiality obligations survive for three (3) years post termination.
                </p>
              </div>
            </section>

            {/* Section 07: Warranties & Disclaimers */}
            <section
              id="warranties"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 07</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7. Warranties &amp; Engineering Disclaimers</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  <strong className="text-white">Quality Guarantee &amp; Bug-Fix Window:</strong> RnD provides a complimentary thirty (30) day post-launch warranty window for custom software deliverables to remediate reproducible code defects not caused by unauthorized third-party alterations.
                </p>
                <p>
                  <strong className="text-white">General Disclaimer:</strong> Except as expressly warranted, services and staging deliverables are provided on an "as-is" and "as-available" basis. RnD does not warrant that third-party cloud platforms (e.g. AWS, Stripe, Google) will operate without interruptions or latency outside our direct control.
                </p>
              </div>
            </section>

            {/* Section 08: Limitation of Liability */}
            <section
              id="liability"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 08</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  To the maximum extent permitted by applicable statutory law, in no event shall RnD Technosoft Pvt. Ltd., its directors, officers, or engineers be liable for any indirect, incidental, consequential, special, or punitive damages (including loss of profits, data corruption, or business interruption).
                </p>
                <p>
                  RnD's total aggregate liability arising out of or related to an engagement, regardless of whether in contract, tort, or otherwise, shall not exceed the total fees actually paid by the Client to RnD under the specific SOW during the three (3) months preceding the incident.
                </p>
              </div>
            </section>

            {/* Section 09: Term & Termination */}
            <section
              id="termination"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 09</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. Term &amp; Termination Procedures</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  Either party may terminate an ongoing engagement for convenience with thirty (30) days prior written notice, or immediately in the event of a material breach by the other party not remedied within fourteen (14) days of notice.
                </p>
                <p>
                  Upon termination, Client shall compensate RnD for all services performed and approved expenses incurred up to the effective termination date. RnD shall provide a complete code transition package and handover documentation.
                </p>
              </div>
            </section>

            {/* Section 10: Governing Law & Arbitration */}
            <section
              id="governing-law"
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-[#FFD400]/30 backdrop-blur-md relative"
            >
              <div className="text-xs font-mono text-[#FFD400] mb-2">// SECTION 10</div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10. Governing Law &amp; Dispute Resolution</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
                </p>
                <p>
                  Any dispute, controversy, or claim arising out of or relating to this contract shall first be submitted to good-faith mediation. Failing resolution within thirty (30) days, the dispute shall be finally settled by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Vapi/Gujarat, India, conducted in the English language.
                </p>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-white/80 mt-4">
                  <div><strong className="text-white">Legal Notices:</strong> RnD Technosoft Pvt. Ltd.</div>
                  <div><strong className="text-white">Email:</strong> <a href="mailto:legal@rndtechnosoft.com" className="text-[#FFD400] hover:underline">legal@rndtechnosoft.com</a></div>
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

