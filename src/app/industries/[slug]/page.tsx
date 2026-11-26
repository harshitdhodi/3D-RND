import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getIndustries, getIndustryDetail, getIndustryWorks, getIndustryConsultation } from "@/lib/getIndustriesData";
import { industriesList } from "@/data/industriesData";
import IndustryDetailClientView from "@/components/IndustryDetailClientView";

export const dynamic = 'force-dynamic';
export const dynamicParams = false;

export async function generateStaticParams() {
  const dbIndustries = await getIndustries();
  const industries = dbIndustries.length > 0 ? dbIndustries : industriesList;
  return industries.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dbIndustries = await getIndustries();
  const industries = dbIndustries.length > 0 ? dbIndustries : industriesList;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found | RND Technosoft",
      robots: "noindex, nofollow",
    };
  }

  const pageUrl = `https://rndtechnosoft.com/industries/${industry.slug}`;

  // Custom metadata for manufacturing, healthcare, food-fmcg, retail-ecommerce, hospitality, and education
  const isManufacturing = industry.slug === "manufacturing";
  const isHealthcare = industry.slug === "healthcare";
  const isFoodFMCG = industry.slug === "food-fmcg";
  const isRetail = industry.slug === "retail-ecommerce";
  const isHospitality = industry.slug === "hospitality";
  const isEducation = industry.slug === "education";

  const metaTitle = isManufacturing
    ? "Manufacturing Software & Digital Solutions | RND Technosoft"
    : isHealthcare
      ? "Healthcare Website & Digital Solutions | RND Technosoft"
      : isFoodFMCG
        ? "Food & FMCG Digital Solutions | RND Technosoft"
        : isRetail
          ? "Retail & E-commerce Website Solutions | RND Technosoft"
          : isHospitality
            ? "Hospitality Website & Digital Solutions | RND Technosoft"
            : isEducation
              ? "Education Website & Digital Solutions | RND Technosoft"
              : `${industry.title} Digital Solutions | RND Technosoft`;

  const metaDescription = isManufacturing
    ? "Explore manufacturing and industrial digital solutions by RND Technosoft, including custom software development, business applications, website development, digital marketing and branding."
    : isHealthcare
      ? "Explore healthcare and dental digital solutions by RND Technosoft, including website development, custom software, digital marketing, branding and media production."
      : isFoodFMCG
        ? "Discover Food & FMCG digital solutions by RND Technosoft, including e-commerce development, custom software, digital marketing, product branding and commercial photography."
        : isRetail
          ? "Explore retail and e-commerce solutions by RND Technosoft, including online store development, custom software, 3D product experiences, digital marketing, branding and media production."
          : isHospitality
            ? "Explore hospitality digital solutions by RND Technosoft, including hotel website development, booking platforms, digital marketing, branding, photography and videography."
            : isEducation
              ? "Explore education and training digital solutions by RND Technosoft, including educational website development, LMS platforms, custom software, digital marketing, branding and media production."
              : `${((industry as any).short_info || (industry as any).shortInfo || (industry as any).description || "").slice(0, 155)}...`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      industry.title,
      `${industry.title} digital solutions`,
      `${industry.title} software solutions`,
      industry.category,
      industry.badge,
      "RND Technosoft",
      "web development",
      "custom software",
      "digital marketing",
      "SEO services",
      "branding and design",
      "media production",
      "Industry Solutions",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${industry.title} | RND Technosoft Industry Solutions`,
      description: metaDescription,
      url: pageUrl,
      siteName: "RND Technosoft",
      type: "website",
      images: [
        {
          url: industry.image || "/images/nebula_cloud_os_3d.jpg",
          width: 1200,
          height: 630,
          alt: `${industry.title} Digital Solutions | RND Technosoft`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [industry.image || "/images/nebula_cloud_os_3d.jpg"],
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dbIndustries = await getIndustries();
  const industries = dbIndustries.length > 0 ? dbIndustries : (industriesList as any[]);
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  const currentIndex = industries.findIndex((item) => item.slug === slug);
  const nextIndustry = industries[(currentIndex + 1) % industries.length];

  // Fetch industry detail content from CMS (try slug first, then industry._id)
  const industryDetail = (await getIndustryDetail(slug)) || (industry._id ? await getIndustryDetail(industry._id) : null);
  const industryWorks = await getIndustryWorks(slug, industry._id);
  const consultationData = await getIndustryConsultation();

  // Rich static baseline
  const staticIndustry = industriesList.find((item) => item.slug === slug);
  const staticNextIndustry = industriesList.find((item) => item.slug === nextIndustry.slug);

  // Normalize challenges (from CMS ArrayObject, CMS strings, or static objects)
  const challenges = (() => {
    if (industryDetail?.challenges && industryDetail.challenges.length > 0) {
      return industryDetail.challenges.map((c: any, idx: number) => {
        if (typeof c === 'string') {
          const parts = c.split(' - ');
          return {
            title: parts[0]?.trim() || `Challenge 0${idx + 1}`,
            description: parts.slice(1).join(' - ').trim() || c,
            impactMetric: String(idx + 1).padStart(2, '0'),
          };
        }
        return {
          title: c.title || `Challenge 0${idx + 1}`,
          description: c.description || c.desc || '',
          impactMetric: c.impactMetric || c.impact || String(idx + 1).padStart(2, '0'),
        };
      });
    }
    return staticIndustry?.challenges || [];
  })();

  // Normalize service combinations (from CMS ArrayObject services)
  const serviceCombinations = (() => {
    if (industryDetail?.services && industryDetail.services.length > 0) {
      return industryDetail.services.map((s: any, idx: number) => {
        const staticMatch = staticIndustry?.serviceCombinations?.[idx];
        return {
          serviceTitle: s.serviceTitle || s.title || staticMatch?.serviceTitle || "Specialized Service",
          serviceHref: s.serviceHref || staticMatch?.serviceHref || "/services",
          role: s.role || s.capabilities || staticMatch?.role || "INDUSTRY-FOCUSED SOLUTIONS",
          deliverablesSummary: s.deliverablesSummary || s.description || staticMatch?.deliverablesSummary || "",
          badge: s.badge || staticMatch?.badge || `0${idx + 1} // SOLUTION`,
        };
      });
    }
    return staticIndustry?.serviceCombinations || [];
  })();

  // Normalize process steps (from CMS ArrayObject process_steps)
  const process = (() => {
    if (industryDetail?.process_steps && industryDetail.process_steps.length > 0) {
      return industryDetail.process_steps.map((p: any, idx: number) => {
        const staticMatch = staticIndustry?.process?.[idx];
        let keyOutputs = p.keyOutputs || p.items || staticMatch?.keyOutputs || [];
        if (typeof keyOutputs === 'string') {
          keyOutputs = keyOutputs.split('\n').map((s: string) => s.trim()).filter(Boolean);
        }
        return {
          step: p.step || staticMatch?.step || `0${idx + 1}`,
          duration: p.duration || staticMatch?.duration || `STAGE 0${idx + 1}`,
          title: p.title || staticMatch?.title || `Process Step 0${idx + 1}`,
          description: p.description || staticMatch?.description || "",
          keyOutputs,
        };
      });
    }
    return staticIndustry?.process || [];
  })();

  // Normalize pillars (from CMS ArrayObject pillars)
  const pillars = (() => {
    if (industryDetail?.pillars && industryDetail.pillars.length > 0) {
      return industryDetail.pillars.map((p: any) => ({
        title: p.title,
        desc: p.desc || p.description || "",
        icon: p.icon || "Layers",
      }));
    }
    return staticIndustry?.pillars || [];
  })();

  // Normalize case study
  const caseStudy = (() => {
    if (industryDetail?.case_study_title || industryDetail?.case_study_challenge) {
      return {
        title: industryDetail.case_study_title || staticIndustry?.caseStudy?.title || "",
        period: industryDetail.case_study_period || staticIndustry?.caseStudy?.period || "BUSINESS TRANSFORMATION",
        challenge: industryDetail.case_study_challenge || staticIndustry?.caseStudy?.challenge || "",
        solution: industryDetail.case_study_solution || staticIndustry?.caseStudy?.solution || "",
        metrics: (industryDetail.case_study_metrics && industryDetail.case_study_metrics.length > 0)
          ? industryDetail.case_study_metrics
          : (staticIndustry?.caseStudy?.metrics || []),
        quote: industryDetail.case_study_quote_text
          ? {
            text: industryDetail.case_study_quote_text,
            author: industryDetail.case_study_quote_author || "",
            role: industryDetail.case_study_quote_role || "",
          }
          : (staticIndustry?.caseStudy?.quote || null),
        tagline: industryDetail.case_study_tagline || (slug === "healthcare" ? "SUCCESS STORY" : "INDUSTRY SPOTLIGHT // BUSINESS TRANSFORMATION"),
      };
    }
    return staticIndustry?.caseStudy || null;
  })();

  // Normalize FAQs
  const faqs = (() => {
    if (industryDetail?.faqs && industryDetail.faqs.length > 0) {
      return industryDetail.faqs;
    }
    return staticIndustry?.faqs || [];
  })();

  // Helper to resolve industry mockup image reliably across CMS and static data
  const resolveIndustryMockup = (slugKey: string, candidateImage?: string) => {
    const staticMap: Record<string, string> = {
      "manufacturing": "/Industries/manufacturing_mockup.png",
      "healthcare": "/Industries/healthcare_mockup.png",
      "food-fmcg": "/Industries/food_mockup.png",
      "retail-ecommerce": "/Industries/retail_mockup.png",
      "hospitality": "/Industries/hospitality_mockup.png",
      "education": "/Industries/education_mockup.png",
    };
    if (candidateImage && candidateImage.startsWith("/Industries/") && !candidateImage.includes("undefined")) {
      return candidateImage;
    }
    const s = (slugKey || "").toLowerCase();
    for (const [key, path] of Object.entries(staticMap)) {
      if (s.includes(key)) return path;
    }
    if (candidateImage && !candidateImage.startsWith("/uploads/") && candidateImage.trim() !== "") {
      return candidateImage;
    }
    return staticMap[s] || staticIndustry?.image || "/Industries/manufacturing_mockup.png";
  };

  // Combine industry basic info with detail content and static fallbacks
  const combinedIndustry = {
    ...staticIndustry,
    ...industry,
    image: resolveIndustryMockup(slug, industry.image || staticIndustry?.image),
    hero_tagline: industryDetail?.hero_tagline || industry.badge || staticIndustry?.badge || "INDUSTRY SOLUTIONS",
    tagline: industryDetail?.hero_heading || industry.tagline || staticIndustry?.tagline || industry.title,
    shortInfo: industryDetail?.hero_description || industry.short_info || staticIndustry?.shortInfo || industry.description || "",
    heroMetrics: (industry.hero_metrics && industry.hero_metrics.length > 0)
      ? industry.hero_metrics
      : (staticIndustry?.heroMetrics || []),

    // Section 1: Pillars
    pillars_heading: industryDetail?.pillars_heading,
    pillars_description: industryDetail?.pillars_description,
    pillars,

    // Section 2: Challenges
    challenges_tagline: industryDetail?.challenges_tagline,
    challenges_heading: industryDetail?.challenges_heading,
    challenges_description: industryDetail?.challenges_description,
    challenges,

    // Section 3: Solutions
    solutions_tagline: industryDetail?.solutions_tagline,
    solutions_heading: industryDetail?.solutions_heading,
    solutions_description: industryDetail?.solutions_description,
    serviceCombinations,

    // Section 4: Works
    works_tagline: industryDetail?.works_tagline,
    works_heading: industryDetail?.works_heading,
    works_description: industryDetail?.works_description,
    works: ((industryWorks && industryWorks.length > 0)
      ? industryWorks
      : (staticIndustry?.works && staticIndustry.works.length > 0)
        ? staticIndustry.works
        : [{ title: industry.featured_project || industry.title, image: industry.image }]).slice(0, 5),

    // Section 5: Process
    process_tagline: industryDetail?.process_tagline,
    process_heading: industryDetail?.process_heading,
    process_description: industryDetail?.process_description,
    process,

    // Section 6: Case Study
    case_study_tagline: industryDetail?.case_study_tagline,
    case_study_title: industryDetail?.case_study_title,
    caseStudy,

    // Section 7: CTA
    cta_tagline: industryDetail?.cta_tagline,
    cta_heading: industryDetail?.cta_heading,
    cta_description: industryDetail?.cta_description,

    // Section 8: FAQs
    faq_tagline: industryDetail?.faq_tagline,
    faq_heading: industryDetail?.faq_heading,
    faqs,
  };

  const combinedNextIndustry = {
    ...staticNextIndustry,
    ...nextIndustry,
    image: resolveIndustryMockup(nextIndustry.slug, nextIndustry.image || staticNextIndustry?.image),
    shortInfo: nextIndustry.short_info || staticNextIndustry?.shortInfo || nextIndustry.description || "",
    heroMetrics: (nextIndustry.hero_metrics && nextIndustry.hero_metrics.length > 0)
      ? nextIndustry.hero_metrics
      : (staticNextIndustry?.heroMetrics || []),
    challenges: staticNextIndustry?.challenges || [],
    serviceCombinations: staticNextIndustry?.serviceCombinations || [],
    process: staticNextIndustry?.process || [],
    pillars: staticNextIndustry?.pillars || [],
    works: staticNextIndustry?.works || [{ title: nextIndustry.featured_project || nextIndustry.title, image: nextIndustry.image }],
    caseStudy: staticNextIndustry?.caseStudy || null,
    faqs: staticNextIndustry?.faqs || [],
  };

  return (
    <IndustryDetailClientView
      industry={combinedIndustry}
      nextIndustry={combinedNextIndustry}
      industriesList={industries.map((i) => i.title)}
      consultationData={consultationData}
    />
  );
}
