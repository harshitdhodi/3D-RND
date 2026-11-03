"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  ChevronDown,
  Layers,
  Zap,
  Calendar,
  Clock,
  Target,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import {
  portfolioData,
  getPortfolioById,
  getRelatedPortfolios,
  PortfolioProjectDetail,
} from "@/data/portfolioData";

function FAQSection({ project }: { project: PortfolioProjectDetail }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = project.faqs || [];

  if (faqs.length === 0) return null;

  return (
    <div className="relative z-10 py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-4 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
            <Sparkles className="w-4 h-4" />
            <span>Project FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Common questions about this project
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left group"
                >
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#FFD400] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all ${
                      isOpen ? "bg-[#FFD400] rotate-180" : ""
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? "text-black" : "text-neutral-400"
                      }`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioProjectPage() {
  const params = useParams();
  const projectSlug = params?.slug as string;

  const project = getPortfolioById(projectSlug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolios" className="text-[#FFD400] hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = getRelatedPortfolios(project.id, 3);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white">
      <SpaceBackground />
      <Navbar />

      {/* Banner */}
      <PageBanner
        title={project.title.toUpperCase()}
        breadcrumb={`PORTFOLIO / ${project.category.toUpperCase()} / ${project.title.toUpperCase()}`}
        imageSrc={project.image}
      />

      {/* Main Content */}
      <main className="relative z-20 w-full mt-12.5 rounded-t-4xl sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]">
        {/* Project Gallery Section */}
        <section className="relative pt-16 pb-8 px-4 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-4 bg-white/5 border border-[#FFD400]/30 text-[#FFD400]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{project.category}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg text-neutral-300 mb-4">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Calendar className="w-4 h-4" />
                    <span>{project.projectDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#FFD400]">
                    <Target className="w-4 h-4" />
                    <span className="font-semibold">{project.client}</span>
                  </div>
                </div>
              </div>
              <Link
                href="/portfolios"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-white border border-white/20 font-mono text-xs uppercase font-bold hover:bg-white/10 hover:border-[#FFD400]/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Projects</span>
              </Link>
            </div>

            {/* Main Project Image */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-8 border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Gallery Images Grid */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {project.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFD400]/60 transition-all group"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Project Info Section */}
        <section className="bg-black w-full px-4 sm:px-8 lg:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Project Details */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                  About This Project
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
                  {project.summary}
                </p>

                {/* Challenge */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#FFD400]" />
                    Challenge
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD400]" />
                    Solution
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Deliverables */}
                {project.deliverables && project.deliverables.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {project.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-neutral-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column - Stats & Info */}
              <div className="space-y-8">
                {/* Results */}
                {project.results && project.results.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[#FFD400]" />
                      Results
                    </h3>
                    <div className="space-y-4">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                          <div className="text-3xl font-bold text-[#FFD400] mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-neutral-400">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-sm text-neutral-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services */}
                {project.services && project.services.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Services Provided
                    </h3>
                    <ul className="space-y-2">
                      {project.services.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            href={service.href}
                            className="flex items-center gap-2 text-neutral-300 hover:text-[#FFD400] transition-colors group"
                          >
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            <span>{service.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Project Info */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Project Information
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Client:</span>
                      <span className="text-white font-semibold">{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Industry:</span>
                      <span className="text-white">{project.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Duration:</span>
                      <span className="text-white">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Year:</span>
                      <span className="text-white">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="relative py-16 px-4 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedProjects.map((relProject) => (
                  <Link
                    key={relProject.id}
                    href={`/portfolios/${relProject.id}`}
                    className="group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl aspect-4/3"
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={relProject.image}
                        alt={relProject.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center justify-between text-xs font-mono text-[#FFD400] mb-2">
                          <span>{relProject.client}</span>
                          <span className="text-white/80">{relProject.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white line-clamp-2">
                          {relProject.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <FAQSection project={project} />

        {/* CTA Section */}
        <section className="relative py-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-br from-[#FFD400]/10 to-transparent border border-[#FFD400]/30">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-6 bg-black/40 border border-[#FFD400]/40 text-[#FFD400]">
                <Zap className="w-4 h-4" />
                <span>Start Your Project</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Have a Similar Project in Mind?
              </h2>
              <p className="text-base text-neutral-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a tailored solution that exceeds expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFD400] text-black font-mono text-sm uppercase font-bold hover:bg-[#ffe34d] transition-all shadow-[0_0_30px_rgba(255,212,0,0.4)]"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolios"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white border border-white/20 font-mono text-sm uppercase font-bold hover:bg-white/10 transition-all"
                >
                  <span>View All Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RnDFooter />
    </div>
  );
}
