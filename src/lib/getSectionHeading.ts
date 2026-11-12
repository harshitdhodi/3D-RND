export interface SectionHeading {
  section_name?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  tagline?: string;
}

export type SectionHeadingData = SectionHeading;

export const DEFAULT_SECTION_HEADINGS: Record<string, SectionHeading> = {
  portfolio_projects: {
    section_name: "portfolio_projects",
    badge: "FEATURED CASE STUDIES // LIVE PORTFOLIO",
    title: "ENGINEERED FOR PERFORMANCE.",
    subtitle: "Selected Enterprise Case Studies & Engineering Flagships",
    tagline:
      "Click through our selected enterprise case studies to inspect architectural blueprints, verified metrics, and interactive production deployments.",
  },
  services: {
    section_name: "services",
    badge: "THE RND ECOSYSTEM // OUR EXPERTISE",
    title: "IDEAS INTO IMPACT. STRATEGY INTO SOLUTIONS.",
    subtitle: "Full-Spectrum Digital Engineering Pillars",
    tagline:
      "From building powerful digital platforms to creating brands that stand out, RND Technosoft brings technology, marketing, design and media together to help businesses move forward.",
  },
  insights: {
    section_name: "insights",
    badge: "KNOWLEDGE TELEMETRY // INSIGHTS",
    title: "INDUSTRY INTEL & DISPATCHES",
    subtitle: "Engineering Analysis, Blueprints & Research",
    tagline:
      "Deep technical analyses, architecture blueprints, and spatial engineering breakthroughs directly from our lead engineering squad.",
  },
  industries: {
    section_name: "industries",
    badge: "CROSS-DOMAIN DOMINANCE // SECTORS",
    title: "INDUSTRIES WE ACCELERATE",
    subtitle: "High-Impact Digital Architecture across Specialized Sectors",
    tagline:
      "Deploying high-reliability digital architectures and bespoke creative frameworks across mission-critical enterprise domains.",
  },
  why_choose_section: {
    section_name: "why_choose_section",
    badge: "WHY CHOOSE RND // THE RND ADVANTAGE",
    title: "BUILT TO PERFORM.",
    subtitle:
      "We bring together strategic thinking, technical expertise and creative execution to help businesses move forward. From the first idea to long-term growth, we build solutions that are scalable, secure and designed to deliver lasting value.",
    tagline:
      "From the first idea to long-term growth, we build solutions that are scalable, secure and designed to deliver lasting value.",
  },
  cosmic_process: {
    section_name: "cosmic_process",
    badge: "EXECUTION PROTOCOL // LIFECYCLE",
    title: "HOW WE WORK",
    subtitle: "From Zero to Orbital Scale in Six Methodical Stages",
    tagline:
      "A battle-tested 6-stage engineering lifecycle designed for speed, clarity, and uncompromising technical precision.",
  },
  team_members: {
    section_name: "team_members",
    badge: "LEADERSHIP & SQUADS // CULTURE",
    title: "THE MINDS BEHIND THE MISSION",
    subtitle: "Autonomous Squad Leadership & Creative Minds",
    tagline:
      "Meet the engineering architects, creative heads, and operational leaders driving forward-looking solutions at RND Technosoft.",
  },
  about_pillars: {
    section_name: "about_pillars",
    badge: "◈ THE RND DIFFERENCE",
    title: "WHERE TECHNOLOGY MEETS CREATIVITY. WHERE IDEAS BECOME IMPACT.",
    subtitle:
      "RND Technosoft brings technology, digital marketing, branding and media production together under one roof. We combine technical expertise, strategic thinking and creative execution to help businesses build stronger brands, smarter digital experiences and meaningful connections with their audiences.",
    tagline: "EXPLORE OUR CAPABILITIES",
  },
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

export async function getSectionHeading(
  sectionName: string
): Promise<SectionHeading> {
  const fallback = DEFAULT_SECTION_HEADINGS[sectionName] || {
    section_name: sectionName,
    title: sectionName.replace(/_/g, " ").toUpperCase(),
    badge: "RND TECHNOSOFT",
    subtitle: "",
    tagline: "",
  };

  try {
    const res = await fetch(
      `${API_BASE_URL}/api/heading?section=${encodeURIComponent(sectionName)}`,
      {
        cache: "no-store",
      }
    );
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data && json.data.title) {
        return {
          section_name: sectionName,
          badge: json.data.badge || fallback.badge,
          title: json.data.title || fallback.title,
          subtitle: json.data.subtitle || fallback.subtitle,
          tagline: json.data.tagline || fallback.tagline,
        };
      }
    }
  } catch (err) {
    console.warn(`Failed to fetch section heading for "${sectionName}":`, err);
  }

  return fallback;
}

