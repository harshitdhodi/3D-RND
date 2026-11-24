import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPortfolioProjectBySlug,
  getPortfolioProjects,
  PortfolioProject,
} from "@/lib/getPortfolioData";
import PortfolioProjectCaseStudyView from "@/components/PortfolioProjectCaseStudyView";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string; portfolio_slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, portfolio_slug } = await params;
  const project = await getPortfolioProjectBySlug(portfolio_slug);

  if (!project) {
    return {
      title: "Case Study Not Found | RND Technosoft",
      robots: "noindex, nofollow",
    };
  }

  const title = `${project.title} | Case Study & Engineering Showcase`;
  const description = project.summary || project.tagline || project.subtitle;
  const pageUrl = `https://rndtechnosoft.com/portfolio/${slug}/${portfolio_slug}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      project.category_title || slug,
      project.client,
      "Case Study",
      "RND Technosoft",
      ...(project.tech_stack || []),
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "RND Technosoft",
      type: "article",
      images: [
        {
          url: project.image || "/banner/service.png",
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study | RND Technosoft`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image || "/banner/service.png"],
    },
  };
}

export default async function PortfolioNestedCaseStudyPage({ params }: PageProps) {
  const { slug, portfolio_slug } = await params;
  const project = await getPortfolioProjectBySlug(portfolio_slug);

  if (!project) {
    notFound();
  }

  // Fetch sibling projects in category for related, prev, and next
  const categoryProjects = await getPortfolioProjects(project.category_slug || slug);
  const currentIndex = categoryProjects.findIndex((p) => p.slug === project.slug);

  const prevProject =
    currentIndex > 0 ? categoryProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < categoryProjects.length - 1
      ? categoryProjects[currentIndex + 1]
      : null;

  const relatedProjects = categoryProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <PortfolioProjectCaseStudyView
      project={project}
      relatedProjects={relatedProjects}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
