"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  Cookie,
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
  Key,
  Code2,
  FileCheck,
  CreditCard,
  AlertTriangle,
  HelpCircle,
  Briefcase,
  Settings,
  Layers,
  LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import { PolicyData, PolicySection } from "@/data/policiesData";

const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  Scale,
  Cookie,
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
  Server,
  Key,
  Code2,
  FileCheck,
  CreditCard,
  AlertTriangle,
  HelpCircle,
  Briefcase,
  Settings,
  Layers,
};

function getIconComponent(iconName?: string): LucideIcon {
  if (!iconName) return FileText;
  return ICON_MAP[iconName] || FileText;
}

interface ParsedHtmlSection {
  id: string;
  navLabel: string;
  sectionNumber: string;
  title: string;
  htmlContent: string;
}

function parseHtmlToSections(html?: string): ParsedHtmlSection[] {
  if (!html || !html.trim()) return [];
  const parts = html.split(/<h2/i);
  if (parts.length <= 1) {
    return [
      {
        id: "content",
        navLabel: "01. Policy Content",
        sectionNumber: "// SECTION 01",
        title: "Policy Details",
        htmlContent: html.trim(),
      },
    ];
  }

  const sections: ParsedHtmlSection[] = [];
  for (let i = 1; i < parts.length; i++) {
    const part = "<h2" + parts[i];
    const match = part.match(/<h2([^>]*)>(.*?)<\/h2>([\s\S]*)/i);
    if (!match) continue;

    const attrs = match[1];
    const headingHtml = match[2];
    const restHtml = match[3];

    const cleanTitle = headingHtml.replace(/<[^>]+>/g, "").trim();

    let id = "";
    const idMatch = attrs.match(/id=["']([^"']+)["']/i);
    if (idMatch) {
      id = idMatch[1];
    } else {
      id = cleanTitle
        .toLowerCase()
        .replace(/^[0-9]+[\.\s]*/, "")
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
    }

    const numMatch = cleanTitle.match(/^([0-9]+)/);
    const num = numMatch
      ? numMatch[1].padStart(2, "0")
      : String(i).padStart(2, "0");

    const labelText = cleanTitle.replace(/^[0-9]+[\.\s]*/, "");

    sections.push({
      id: id || `section-${i}`,
      navLabel: `${num}. ${labelText}`,
      sectionNumber: `// SECTION ${num}`,
      title: cleanTitle,
      htmlContent: restHtml.trim(),
    });
  }

  return sections;
}

interface PolicyPageLayoutProps {
  data: PolicyData;
}

export default function PolicyPageLayout({ data }: PolicyPageLayoutProps) {
  // Check if content from Editor is available
  const parsedSections = useMemo(() => {
    if (data.content && data.content.trim()) {
      return parseHtmlToSections(data.content);
    }
    return [];
  }, [data.content]);

  const hasHtmlSections = parsedSections.length > 0;

  // Active section state
  const initialSectionId = hasHtmlSections
    ? parsedSections[0].id
    : data.sections?.[0]?.id || "overview";

  const [activeSection, setActiveSection] = useState<string>(initialSectionId);

  useEffect(() => {
    const targetSections = hasHtmlSections
      ? parsedSections
      : data.sections || [];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const section of targetSections) {
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
  }, [hasHtmlSections, parsedSections, data.sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const BadgeIcon = getIconComponent(data.badgeIcon);

  const tocItems = hasHtmlSections
    ? parsedSections.map((s) => ({ id: s.id, label: s.navLabel }))
    : (data.sections || []).map((s) => ({ id: s.id, label: s.navLabel }));

  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400]/20 selection:text-[#FFD400]">
      <SpaceBackground />
      <Navbar />

      <PageBanner
        title={data.title}
        breadcrumb={data.breadcrumb || data.title}
        size="default"
        imageSrc={data.bannerImage || "/banner/legal.png"}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Top Header Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD400]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs font-mono text-[#FFD400]">
              <BadgeIcon className="w-3.5 h-3.5" />
              <span>{data.badge}</span>
            </div>
            <div className="text-xs font-mono text-white/50">
              EFFECTIVE DATE: <span className="text-white">{data.effectiveDate}</span> • {data.version}
            </div>
          </div>

          <p className="text-sm sm:text-base text-white/70 max-w-4xl leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* Layout Grid: Sticky TOC on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#0c0d12]/80 border border-white/10 backdrop-blur-md">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FFD400] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>{data.tocTitle || "Document Contents"}</span>
              </div>
              <nav className="space-y-1 text-sm font-mono max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                      activeSection === item.id
                        ? "bg-[#FFD400]/10 text-[#FFD400] border-l-2 border-[#FFD400] font-medium"
                        : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="truncate">{item.label}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        activeSection === item.id
                          ? "text-[#FFD400] translate-x-1"
                          : "text-white/20 group-hover:text-white/50"
                      }`}
                    />
                  </button>
                ))}
              </nav>

              {data.sidebarCallout && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-xs text-white/40 mb-2">
                    {data.sidebarCallout.title}
                  </div>
                  <Link
                    href={data.sidebarCallout.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFD400] hover:underline"
                  >
                    <span>{data.sidebarCallout.linkText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          </aside>

          {/* Main Legal Sections */}
          <div className="lg:col-span-8 space-y-12">
            {hasHtmlSections ? (
              /* DYNAMIC EDITOR HTML CONTENT */
              parsedSections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
                >
                  <div className="text-xs font-mono text-[#FFD400] mb-2">
                    {sec.sectionNumber}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {sec.title}
                  </h2>
                  <div
                    className="policy-rich-body space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light [&>p]:mb-3 [&>h3]:text-base [&>h3]:font-semibold [&>h3]:text-white [&>h3]:mt-4 [&>h3]:mb-1 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-2 [&>ul]:text-white/80 [&>ul]:my-3 [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:space-y-2 [&>ol]:text-white/80 [&>ol]:my-3 [&>blockquote]:p-4 [&>blockquote]:my-4 [&>blockquote]:rounded-xl [&>blockquote]:bg-[#FFD400]/5 [&>blockquote]:border-l-4 [&>blockquote]:border-[#FFD400] [&>blockquote]:text-xs [&>blockquote]:sm:text-sm [&>blockquote]:text-white/85 [&>blockquote]:font-mono [&_table]:w-full [&_table]:text-left [&_table]:text-xs [&_table]:font-mono [&_table]:my-4 [&_table]:rounded-xl [&_table]:border [&_table]:border-white/10 [&_table]:overflow-hidden [&_thead]:bg-white/[0.05] [&_thead]:text-[#FFD400] [&_thead]:uppercase [&_thead]:text-[11px] [&_thead]:border-b [&_thead]:border-white/10 [&_th]:p-3 [&_td]:p-3 [&_td]:border-b [&_td]:border-white/5 [&_td]:text-white/70 [&_strong]:text-white [&_strong]:font-semibold [&_a]:text-[#FFD400] [&_a]:hover:underline"
                    dangerouslySetInnerHTML={{ __html: sec.htmlContent }}
                  />
                </section>
              ))
            ) : (
              /* STRUCTURED FALLBACK SECTIONS */
              data.sections?.map((section: PolicySection) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12]/70 border border-white/10 backdrop-blur-md relative"
                >
                  <div className="text-xs font-mono text-[#FFD400] mb-2">
                    {section.sectionNumber}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h2>

                  <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                    {/* Paragraphs */}
                    {section.paragraphs?.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}

                    {/* Cards Grid */}
                    {section.cards && section.cards.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                        {section.cards.map((card, cIdx) => {
                          const CardIcon = card.icon
                            ? getIconComponent(card.icon)
                            : null;
                          return (
                            <div
                              key={cIdx}
                              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                            >
                              {CardIcon && (
                                <CardIcon className="w-4 h-4 text-[#FFD400] shrink-0 mt-1" />
                              )}
                              <div>
                                <div className="font-semibold text-white text-sm mb-1">
                                  {card.title}
                                </div>
                                <p className="text-xs text-white/60 leading-relaxed">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Bullets List */}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="space-y-2 list-disc list-inside text-white/80 text-sm my-3">
                        {section.bullets.map((b, bIdx) => {
                          if (typeof b === "string") {
                            return <li key={bIdx}>{b}</li>;
                          }
                          return (
                            <li key={bIdx}>
                              {b.label && (
                                <strong className="text-white mr-1">
                                  {b.label}:
                                </strong>
                              )}
                              <span>{b.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {/* Highlight Box */}
                    {section.highlightBox && (
                      <div
                        className={`p-4 rounded-xl text-xs sm:text-sm mt-4 border ${
                          section.highlightBox.type === "guarantee"
                            ? "bg-[#FFD400]/5 border-[#FFD400]/30 text-white/85"
                            : section.highlightBox.type === "warning"
                            ? "bg-rose-500/10 border-rose-500/30 text-rose-200"
                            : "bg-[#FFD400]/5 border-[#FFD400]/20 text-[#FFD400] font-mono"
                        }`}
                      >
                        {section.highlightBox.title && (
                          <strong className="text-[#FFD400] font-semibold block mb-1">
                            {section.highlightBox.title}:
                          </strong>
                        )}
                        <span>{section.highlightBox.text}</span>
                      </div>
                    )}

                    {/* Table (e.g. Cookie Inventory) */}
                    {section.table && (
                      <div className="overflow-x-auto rounded-xl border border-white/10 my-4">
                        <table className="w-full text-left text-xs font-mono">
                          <thead className="bg-white/[0.05] text-white uppercase text-[11px] border-b border-white/10">
                            <tr>
                              {section.table.columns.map((col) => (
                                <th key={col.key} className="p-3">
                                  {col.label}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 text-white/70">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-white/[0.02]">
                                {section.table!.columns.map((col, cIdx) => (
                                  <td
                                    key={col.key}
                                    className={`p-3 ${
                                      cIdx === 0
                                        ? "text-[#FFD400] font-semibold whitespace-nowrap"
                                        : col.key === "purpose"
                                        ? "font-sans text-xs"
                                        : "whitespace-nowrap"
                                    }`}
                                  >
                                    {row[col.key]}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Contact Info Box */}
                    {section.contactInfo && (
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm font-mono text-white/80 my-4">
                        <div>
                          <strong className="text-white">Entity:</strong>{" "}
                          {section.contactInfo.entity}
                        </div>
                        <div>
                          <strong className="text-white">Attention:</strong>{" "}
                          {section.contactInfo.attention}
                        </div>
                        <div>
                          <strong className="text-white">Email:</strong>{" "}
                          <span className="text-[#FFD400]">
                            {section.contactInfo.email}
                          </span>
                        </div>
                        <div>
                          <strong className="text-white">Headquarters:</strong>{" "}
                          {section.contactInfo.address}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </main>

      <RnDFooter />
    </div>
  );
}
