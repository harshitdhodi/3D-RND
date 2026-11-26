import type { Metadata } from "next";
import SpaceBackground from "@/components/SpaceBackground";
import Navbar from "@/components/Navbar";
import GSAPScrollAnimations from "@/components/GSAPScrollAnimations";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServiceCardsSection from "@/components/ServiceCardsSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import IndustriesServedSection from "@/components/IndustriesServedSection";
import CosmicProcessSection from "@/components/CosmicProcessSection";
import ResultsTrustSection from "@/components/ResultsTrustSection";
import CreativeShowreelSection from "@/components/CreativeShowreelSection";
import InsightsSection from "@/components/InsightsSection";
import MissionCTASection from "@/components/MissionCTASection";
import RnDFooter from "@/components/RnDFooter";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title:
    "RND Technosoft | Technology, Digital Marketing & Creative Solutions",
  description:
    "RND Technosoft is a full-service digital agency delivering custom web development, mobile apps, software, e-commerce, SEO, digital marketing, branding, design and media production to help businesses grow online.",
  keywords: [
    "RND Technosoft",
    "digital agency",
    "web development company",
    "custom website development",
    "mobile app development",
    "SEO services",
    "digital marketing agency",
    "branding and design",
    "media production",
    "videography",
    "photography",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "RND Technosoft | Technology, Digital Marketing & Creative Solutions",
    description:
      "RND Technosoft builds powerful digital experiences with custom web development, mobile apps, digital marketing, SEO, branding, design and media production services.",
    url: "https://rndtechnosoft.com",
    siteName: "RND Technosoft",
    type: "website",
    images: [
      {
        url: "/images/nebula_cloud_os_3d.jpg",
        width: 1200,
        height: 630,
        alt: "RND Technosoft — Digital Growth Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RND Technosoft | Technology, Digital Marketing & Creative Solutions",
    description:
      "Custom web development, mobile apps, digital marketing, SEO, branding, design and media production services by RND Technosoft.",
    images: ["/images/nebula_cloud_os_3d.jpg"],
  },
};

import { getHeroData } from "@/lib/getHeroData";
import { getAboutData } from "@/lib/getAboutData";
import { getServicesData } from "@/lib/getServicesData";
import { getPortfolioData } from "@/lib/getPortfolioData";
import { getWhyChooseData } from "@/lib/getWhyChooseData";
import { getIndustriesData } from "@/lib/getIndustriesData";
import { getProcessData } from "@/lib/getProcessData";
import { fetchRecentBlogs } from "@/lib/blogApi";
import { getSectionHeading } from "@/lib/getSectionHeading";
import { getPageComponents, getOrderedSectionKeys, getSectionStyle } from "@/lib/getPageComponents";

export default async function Home() {
  const [
    heroData,
    aboutData,
    servicesData,
    portfolioData,
    whyChooseData,
    industriesData,
    processData,
    recentBlogs,
    portfolioHeading,
    whyChooseHeading,
    industriesHeading,
    insightsHeading,
    pageComponents,
  ] = await Promise.all([
    getHeroData(),
    getAboutData(),
    getServicesData(),
    getPortfolioData(),
    getWhyChooseData(),
    getIndustriesData(),
    getProcessData(),
    fetchRecentBlogs(3),
    getSectionHeading("portfolio_projects"),
    getSectionHeading("why_choose_section"),
    getSectionHeading("industries"),
    getSectionHeading("insights"),
    getPageComponents("home"),
  ]);

  const defaultOrder = [
    "hero",
    "about_us",
    "service_cards",
    "featured_projects",
    "why_choose",
    "industries_served",
    "cosmic_process",
    "results_trust",
    "creative_showreel",
    "insights",
    "mission_cta",
  ];

  const orderedKeys = getOrderedSectionKeys(pageComponents, defaultOrder);

  const sectionMap: Record<string, React.ReactNode> = {
    hero: <HeroSection key="hero" initialData={heroData} />,
    about_us: <AboutUsSection key="about_us" initialData={aboutData} />,
    service_cards: <ServiceCardsSection key="service_cards" initialData={servicesData} />,
    featured_projects: <FeaturedProjectsSection key="featured_projects" initialData={portfolioData} initialHeading={portfolioHeading} />,
    why_choose: <WhyChooseSection key="why_choose" initialData={whyChooseData} initialHeading={whyChooseHeading} />,
    industries_served: <IndustriesServedSection key="industries_served" initialData={industriesData} initialHeading={industriesHeading} />,
    cosmic_process: <CosmicProcessSection key="cosmic_process" initialData={processData} />,
    results_trust: <ResultsTrustSection key="results_trust" />,
    creative_showreel: <CreativeShowreelSection key="creative_showreel" />,
    insights: <InsightsSection key="insights" initialArticles={recentBlogs} initialHeading={insightsHeading} />,
    mission_cta: <MissionCTASection key="mission_cta" />,
  };

  return (
    <div className="font-archia relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black w-full overflow-x-clip">
      {/* Global GSAP ScrollTrigger Animations for Headings, Images & Grids */}
      <GSAPScrollAnimations />

      {/* Interactive Galactic Particle Starfield Canvas */}
      <SpaceBackground />

      {/* 1.1 Header: Logo, navigation, service mega-menu, contact CTA */}
      <Navbar />

      <main className="relative z-10 w-full bg-transparent">
        {orderedKeys.map((key) => {
          const sectionNode = sectionMap[key];
          if (!sectionNode) return null;
          const style = getSectionStyle(pageComponents, key);
          if (Object.keys(style).length > 0) {
            return (
              <div key={key} style={style}>
                {sectionNode}
              </div>
            );
          }
          return sectionNode;
        })}
      </main>

      {/* 1.13 Footer: Service links, contact details, social links, policies and company information */}
      <RnDFooter />
    </div>
  );
}
