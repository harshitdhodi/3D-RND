export interface FeaturedProjectItem {
  id: string;
  category: string;
  tag: string;
  verticalTitle: string;
  title: string;
  location: string;
  desc: string;
  image: string;
  imgtitle?: string;
  altname?: string;
  specs: string;
  link: string;
}

export const DEFAULT_PROJECTS_DATA: FeaturedProjectItem[] = [
  {
    id: "meritrack-mobile-suite",
    category: "MOBILE APP",
    tag: "MOBILE APP PROJECTS // HEALTHCARE LOGISTICS",
    verticalTitle: "MERITRACK MOBILE SUITE",
    title: "MeriTRACK Surgical Logistics Suite",
    location: "VAPI // MUMBAI",
    desc: "High-reliability cross-platform mobile suite engineered for surgical implant tracking, hospital case scheduling, distributor allocation, and real-time medical sales representative telemetry.",
    image: "/protfolio image/MeriTRACK Space App Showcase.png",
    specs: "Native iOS & Android // Live Surgery Telemetry // 2026",
    link: "/portfolio/mobile-app-projects",
  },
  {
    id: "ostech-automation",
    category: "WEB PLATFORM",
    tag: "WEBSITE & WEB APPLICATIONS // INDUSTRIAL AUTOMATION",
    verticalTitle: "OSTECH AUTOMATION PLATFORM",
    title: "OSTech Industrial Automation Flagship",
    location: "GUJARAT // GLOBAL",
    desc: "High-performance digital engineering platform for industrial packaging automation, featuring dynamic machinery catalogs, conveyor capability matrices, and interactive B2B inquiry funnels.",
    image: "/protfolio image/OSTech Laptop in Orbital Showcase.png",
    specs: "Next.js 15 // Sub-1s LCP // Industrial Automation // 2026",
    link: "/portfolio/website-and-web-application-projects",
  },
  {
    id: "shanti-patra-erp",
    category: "ENTERPRISE ERP",
    tag: "CUSTOM SOFTWARE // CLOUD ERP & CRM",
    verticalTitle: "SHANTI PATRA CLOUD ERP",
    title: "Shanti Patra Operations & MIS Suite",
    location: "VAPI // NATIONAL",
    desc: "Comprehensive cloud ERP platform managing manufacturing workflows: machine telemetry, printing lines, automated QC checks, live inventory tracking, and multi-tier sales order reconciliation.",
    image: "/protfolio image/Shanti Patra Dashboard in Space.png",
    specs: "Real-Time Shopfloor Telemetry // 98% QC Standard // 2026",
    link: "/portfolio/website-and-web-application-projects",
  },
  {
    id: "vbott-identity",
    category: "BRAND IDENTITY",
    tag: "BRANDING & GRAPHIC DESIGN // CORPORATE MERCHANDISE",
    verticalTitle: "VBOTT CORPORATE IDENTITY",
    title: "VBŌTT Luxury Identity & Packaging System",
    location: "MUMBAI // NATIONAL",
    desc: "Comprehensive corporate brand architecture, premium typography, minimalist stationery, executive gift packaging, and tactile stainless steel merchandise system for consumer hydration products.",
    image: "/protfolio image/VBOTT Corporate Stationery in Space.png",
    specs: "Complete Brand Guidelines // Premium Packaging Suite // 2026",
    link: "/portfolio/branding-and-graphic-design",
  },
  {
    id: "tps-industrial-film",
    category: "CINEMA & FILM",
    tag: "VIDEOGRAPHY & PHOTOGRAPHY // INDUSTRIAL COMMERCIAL",
    verticalTitle: "TPS FACILITY BRAND FILM",
    title: "Total Packaging Services Cinema Commercial",
    location: "VAPI // DAMAN",
    desc: "Cinematic industrial commercial documenting advanced packaging infrastructure with 4K camera rigs, drone flythroughs, post-production color mastering, and precision manufacturing storytelling.",
    image: "/protfolio image/TPS videography.png",
    specs: "4K Cinema Commercial // Aerial Drone Telemetry // 2026",
    link: "/portfolio/videography-and-photography",
  },
];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

export async function getPortfolioData(): Promise<FeaturedProjectItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/portfolio_projects`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return DEFAULT_PROJECTS_DATA;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    if (list.length === 0) return DEFAULT_PROJECTS_DATA;

    const sorted = [...list].sort(
      (a: any, b: any) => (a.order || 0) - (b.order || 0)
    );

    return sorted.map((doc: any, idx: number) => ({
      id: doc.slug || String(idx),
      category: doc.category || "PROJECT",
      tag: doc.tag || "",
      verticalTitle: doc.vertical_title || doc.verticalTitle || doc.title || "",
      title: doc.title || "",
      location: doc.location || "GLOBAL",
      desc: doc.desc || "",
      image: doc.image || "/images/service_cloud_color.jpg",
      imgtitle: doc.imgtitle || `${doc.title || ""} Showcase`,
      altname: doc.altname || `${doc.title || ""} - ${doc.category || "Project"}`,
      specs: doc.specs || "",
      link: doc.link || "/portfolio",
    }));
  } catch (err) {
    console.warn("Falling back to default Portfolio Projects data:", err);
    return DEFAULT_PROJECTS_DATA;
  }
}

