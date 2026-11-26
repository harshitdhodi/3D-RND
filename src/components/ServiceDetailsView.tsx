"use client";

import React from "react";
import UnifiedDetailsView, {
  UnifiedDetailItem,
  RelatedItemSummary,
} from "./UnifiedDetailsView";
import { ServiceDetail, servicesData } from "@/data/servicesData";

interface ServiceDetailsViewProps {
  service: ServiceDetail;
  parentPath?: string;
  parentLabel?: string;
}

export default function ServiceDetailsView({
  service,
  parentPath = "/services",
  parentLabel = "Services",
}: ServiceDetailsViewProps) {
  // Find index for prev/next navigation
  const currentIndex = servicesData.findIndex((s) => s.id === service.id);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService =
    currentIndex < servicesData.length - 1
      ? servicesData[currentIndex + 1]
      : null;

  // Convert service architecture pillars or dynamic sec2 to scope modules
  const rawScope = ((service as any).sec2 && (service as any).sec2.length > 0)
    ? (service as any).sec2
    : (service.architecturePillars || (service as any).architecture_pillars || []);

  const scopeModules = rawScope.map((p: any, idx: number) => ({
    number: p.tagline ? p.tagline.replace(/[^0-9]/g, "") : `0${idx + 1}`,
    title: p.title,
    desc: p.sub_title || p.desc || "",
    iconName: p.iconName || p.icon_name,
    footer: p.footer_label || "RnD Certified Discipline",
  }));

  // Normalize gallery images with dynamic gallery from CMS (exactly 2 images) or relevant IT images
  const rawGallery = ((service as any).gallery && (service as any).gallery.length > 0)
    ? (service as any).gallery
    : [
        service.image || "/images/service_webdev.jpg",
        service.category === "AI & Data"
          ? "/images/project_ai.jpg"
          : service.category === "Digital Marketing"
          ? "/images/service_marketing.jpg"
          : service.category === "Design"
          ? "/images/service_branding.jpg"
          : service.category === "Media"
          ? "/images/service_media.jpg"
          : "/images/nebula_cloud_os_3d.jpg",
      ];
  const galleryImages = rawGallery.slice(0, 2);

  // Map deliverables list from dynamic right_side_list (CMS) or fallback deliverables
  const rawRightSideList = ((service as any).right_side_list && (service as any).right_side_list.length > 0)
    ? (service as any).right_side_list
    : (service.deliverables || []);

  const deliverablesList = rawRightSideList.map((d: any) => {
    if (typeof d === "string") return d;
    return d.points || d.item || d.title || "";
  }).filter(Boolean);

  // Map to unified item
  const unifiedItem: UnifiedDetailItem = {
    id: service.id,
    index: (service.index || "[01]").replace(/[\[\]]/g, ""),
    title: service.title,
    highlightText: service.highlightText,
    tagline: service.tagline,
    category: service.category,
    image: service.image,
    galleryImages,
    sla: service.sla,
    badge: service.badge,
    overview: service.overview,
    quote: {
      text: (service as any).sub_category_tagline2 || (service.caseStudy?.desc
        ? service.caseStudy.desc
        : "Every microservice, 3D viewport, and cloud infrastructure pipeline is benchmarked and verified before deployment."),
      author: `${service.caseStudy?.client || "RnD Enterprise Client"} • Verified SLA`,
    },
    deliverables: deliverablesList.length > 0 ? deliverablesList : undefined,
    rightSideList: deliverablesList,
    scope: scopeModules,
    techStack: service.techStack,
    faqs: service.faqs,
    beforeAfter: service.beforeAfter,
    deliverablesCardLabel: (service as any).rightside_tagline || service.deliverablesCardLabel,
    deliverablesCardHeading: (service as any).rightside_heading || (service as any).deliverablesCardHeading,
    deliverablesCardDescription: (service as any).rightside_description || service.deliverablesCardDescription,
    deliverablesCtaLabel: service.deliverablesCtaLabel,
    qualityCardLabel: (service as any).sub_category_tagline2_heading || service.qualityCardLabel,
    quoteAuthor: service.quoteAuthor,
    contactCardLabel: service.contactCardLabel,
    contactCardHeading: service.contactCardHeading,
    contactCardDescription: service.contactCardDescription,
    contactCardHref: service.contactCardHref,
    scopeSectionLabel: (service as any).sec2_tagline || service.scopeSectionLabel,
    scopeSectionHeading: (service as any).sec2_heading || service.scopeSectionHeading,
    scopeSectionDescription: (service as any).sec2_subheading || service.scopeSectionDescription,
    processSteps: (service as any).process || service.processSteps || [],
    processBadge: (service as any).process_sec_tagline,
    processHeading: (service as any).process_sec_heading,
    processSubheading: (service as any).process_sec_subheading,
    ctaHeading: (service as any).ctaHeading,
  };

  // Map all services for the related section
  const relatedSummaries: RelatedItemSummary[] = servicesData.map((s) => ({
    id: s.id,
    index: s.index.replace(/[\[\]]/g, ""),
    title: `${s.title} ${s.highlightText}`,
    category: s.category,
    image: s.image,
    tagline: s.tagline,
  }));

  const prevSummary: RelatedItemSummary | null = prevService
    ? {
        id: prevService.id,
        index: prevService.index.replace(/[\[\]]/g, ""),
        title: `${prevService.title} ${prevService.highlightText}`,
        category: prevService.category,
        image: prevService.image,
        tagline: prevService.tagline,
      }
    : null;

  const nextSummary: RelatedItemSummary | null = nextService
    ? {
        id: nextService.id,
        index: nextService.index.replace(/[\[\]]/g, ""),
        title: `${nextService.title} ${nextService.highlightText}`,
        category: nextService.category,
        image: nextService.image,
        tagline: nextService.tagline,
      }
    : null;

  return (
    <UnifiedDetailsView
      type="service"
      item={unifiedItem}
      allServicesOrItems={relatedSummaries}
      prevItem={prevSummary}
      nextItem={nextSummary}
      parentPath={parentPath}
      parentLabel={parentLabel}
    />
  );
}
