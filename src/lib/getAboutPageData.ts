const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

// 1. About Hero & Banner Interface
export interface AboutHeroData {
  banner_title: string;
  banner_breadcrumb: string;
  banner_image: string;
  banner_imgtitle?: string;
  banner_altname?: string;
  origin_badge: string;
  headline_line_1: string;
  headline_line_2: string;
  paragraph_1: string;
  paragraph_2: string;
  quote: string;
  stat_1_val: number;
  stat_1_suffix: string;
  stat_1_label: string;
  stat_2_val: number;
  stat_2_suffix: string;
  stat_2_label: string;
  stat_3_val: number;
  stat_3_suffix: string;
  stat_3_label: string;
  cta_1_text: string;
  cta_1_link: string;
  cta_2_text: string;
  cta_2_link: string;
  // Video and sequence frames telemetry
  video_url?: string;
  total_frames?: number;
  frame_path_prefix?: string;
  scroll_height_vh?: number;
  damping?: number;
}

export const DEFAULT_ABOUT_HERO: AboutHeroData = {
  banner_title: "ABOUT RND",
  banner_breadcrumb: "ABOUT US",
  banner_image: "/NewBanner/about.png",
  banner_imgtitle: "About RnD Technosoft Corporate Headquarters",
  banner_altname: "About RnD Technosoft Cosmic Agency",
  origin_badge: "THE ORIGIN // ABOUT RND",
  headline_line_1: "ROOTED IN INNOVATION.",
  headline_line_2: "DRIVEN BY POSSIBILITIES.",
  paragraph_1:
    "Founded in 2017, RnD Technosoft began with a vision to redefine digital solutions. Over the years, we've evolved into an all-in-one IT & Media conglomerate, delivering end-to-end services with excellence.",
  paragraph_2:
    "From humble beginnings, we have grown into a multidisciplinary powerhouse — architecting WebGL platforms, mission-critical cloud infrastructure, and cinematic digital brand narratives for global disruptors.",
  quote:
    '"We do not simply follow industry standards — we construct new paradigms where computational precision harmonizes with fearless creative rebellion."',
  stat_1_val: 250,
  stat_1_suffix: "+",
  stat_1_label: "Projects Delivered",
  stat_2_val: 99.9,
  stat_2_suffix: "%",
  stat_2_label: "Client Satisfaction",
  stat_3_val: 60,
  stat_3_suffix: "+",
  stat_3_label: "Creative Minds",
  cta_1_text: "DISCOVER OUR DNA",
  cta_1_link: "#mission-vision",
  cta_2_text: "VIEW CAPABILITIES",
  cta_2_link: "#pillars",
  video_url: "/about-us.mp4",
  total_frames: 240,
  frame_path_prefix: "/about-frames/frame_",
  scroll_height_vh: 420,
  damping: 0.12,
};

// 2. Constellation Mission & Vision Interface
export interface AboutMissionVisionData {
  header_badge: string;
  header_title: string;
  header_desc_1: string;
  header_desc_2: string;
  vision_badge: string;
  vision_title: string;
  vision_desc: string;
  vision_footer: string;
  mission_badge: string;
  mission_title: string;
  mission_desc: string;
  value_1_title: string;
  value_1_desc: string;
  value_1_icon: string;
  value_2_title: string;
  value_2_desc: string;
  value_2_icon: string;
  value_3_title: string;
  value_3_desc: string;
  value_3_icon: string;
  value_4_title: string;
  value_4_desc: string;
  value_4_icon: string;
}

export const DEFAULT_MISSION_VISION: AboutMissionVisionData = {
  header_badge: "CONSTELLATION MATRIX // 02",
  header_title: "MISSION, VISION & CORE VALUES",
  header_desc_1:
    "Like navigational pulsars steering interstellar explorers through deep cosmos, our core tenets anchor every algorithmic decision, artistic stroke, and architectural deployment.",
  header_desc_2:
    "We don't settle for conventional agency archetypes. We engineer living digital ecosystems where brand identity, computational performance, and human emotional resonance intersect.",
  vision_badge: "NORTH STAR // VISION",
  vision_title: "TRANSFORMING BRANDS THROUGH POWERFUL DIGITAL EXPERIENCES",
  vision_desc:
    "To be the premier global frontier where visionary imagination fuses seamlessly with computational precision, propelling global enterprises into transcendent market leadership across WebGL, AI, and cinematic brand narratives.",
  vision_footer: "2030 COSMIC HORIZON // GLOBAL LEADERSHIP",
  mission_badge: "THE BRIDGE // MISSION",
  mission_title: "DRIVING BUSINESS SUCCESS THROUGH INNOVATION AND VALUE.",
  mission_desc:
    "To empower ambitious global brands with end-to-end technology solutions and creative media production that solve complex challenges, accelerate tangible commercial growth, and build lasting legacy.",
  value_1_title: "RADICAL TRANSPARENCY",
  value_1_desc:
    "Unfiltered engineering clarity, real-time code commits, open communication telemetry, and zero hidden friction.",
  value_1_icon: "Compass",
  value_2_title: "RELENTLESS CRAFTSMANSHIP",
  value_2_desc:
    "Sub-pixel obsession, fluid 60FPS WebGL execution, and bulletproof architectural security with zero compromises.",
  value_2_icon: "Target",
  value_3_title: "FEARLESS INNOVATION",
  value_3_desc:
    "Pioneering uncharted frontiers in real-time 3D, neural UI, and generative AI pipelines that rewrite category rules.",
  value_3_icon: "Zap",
  value_4_title: "COLLECTIVE SYNERGY",
  value_4_desc:
    "Unified cross-discipline alignment between engineers, designers, 3D artists, and growth strategists.",
  value_4_icon: "Users",
};

// 3. About Pillars (Core Agency Disciplines) Interface
export interface AboutPillarItem {
  id: string;
  order: number;
  number: string;
  title: string;
  tag: string;
  desc: string;
  features: string[];
  image: string;
  imgtitle?: string;
  altname?: string;
  icon_name: string;
}

export const DEFAULT_PILLARS: AboutPillarItem[] = [
  {
    id: "pillar-1",
    order: 1,
    number: "01",
    title: "TECHNOLOGY SOLUTIONS",
    tag: "ENGINEERING MATRIX",
    desc: "Architecting enterprise web systems, high-frequency e-commerce platforms, customized ERP workflows, and ultra-scalable cloud architectures.",
    features: [
      "Custom Web & Mobile Apps",
      "Cloud Infrastructure & DevOps",
      "Enterprise ERP & CRM Integration",
      "API Orchestration & Webhooks",
    ],
    image: "/uploads/project_it_cloud.jpg",
    imgtitle: "Next-Gen Cloud Architecture and Enterprise Technology",
    altname: "Enterprise Cloud and Web Development Solutions",
    icon_name: "Code2",
  },
  {
    id: "pillar-2",
    order: 2,
    number: "02",
    title: "DIGITAL MARKETING",
    tag: "GROWTH TRAJECTORY",
    desc: "Accelerating brand acquisition pipelines via data-driven search intelligence, hyper-targeted omnichannel paid campaigns, and algorithmic content delivery.",
    features: [
      "Omnichannel Performance Paid Media",
      "Algorithmic Technical SEO & GEO",
      "Full-Funnel Conversion Optimization",
      "Marketing Automation Telemetry",
    ],
    image: "/uploads/project_it_ai.jpg",
    imgtitle: "Algorithmic Growth and High-Yield Digital Marketing",
    altname: "Digital Marketing and Performance Media Solutions",
    icon_name: "BarChart3",
  },
  {
    id: "pillar-3",
    order: 3,
    number: "03",
    title: "BRANDING & DESIGN",
    tag: "AESTHETIC GRAVITY",
    desc: "Forging iconic visual identities, immersive WebGL design systems, intuitive UI/UX journeys, and interactive product interfaces that captivate.",
    features: [
      "Signature Brand Identity Systems",
      "Bespoke UI/UX & WebGL Shaders",
      "3D Product Renderings & Motion",
      "Design Systems & Component Kits",
    ],
    image: "/uploads/project_lifestyle.jpg",
    imgtitle: "Signature Brand Identity and Luxury Spatial Design",
    altname: "Creative Brand Identity and UI/UX Design Systems",
    icon_name: "Palette",
  },
  {
    id: "pillar-4",
    order: 4,
    number: "04",
    title: "MEDIA PRODUCTION",
    tag: "CINEMATIC ORBIT",
    desc: "Producing cinematic TV commercials, corporate films, high-fidelity 3D spatial animation, and evocative photographic assets that elevate brand stature.",
    features: [
      "High-End Commercial Film & Video",
      "3D Character & Motion CGI",
      "Commercial Studio Photography",
      "Full Post-Production & Sound Design",
    ],
    image: "/uploads/TPS videography.png",
    imgtitle: "Cinematic Film Production and 3D Motion Graphics",
    altname: "Media Production and Corporate Videography",
    icon_name: "Film",
  },
];

// 4. Partnership CTA Interface (Bottom Ready-For-What's-Next Banner)
export interface AboutPartnershipCtaData {
  cta_badge: string;
  cta_title: string;
  cta_desc: string;
  cta_button_text: string;
  cta_button_link: string;
}

export const DEFAULT_PARTNERSHIP_CTA: AboutPartnershipCtaData = {
  cta_badge: "READY FOR WHAT'S NEXT?",
  cta_title: "GREAT IDEAS DESERVE GREAT PARTNERS.",
  cta_desc:
    "Whether architecting a ground-up spatial digital platform, scaling customer acquisition, or shooting cinematic brand films — our teams are primed to build your future.",
  cta_button_text: "START A CONVERSATION",
  cta_button_link: "/contact-us",
};

// Backward-compatibility alias
export type AboutOverviewCtaData = AboutPartnershipCtaData;
export const DEFAULT_OVERVIEW_CTA = DEFAULT_PARTNERSHIP_CTA;

// ── Fetch Helper Functions with Cache No-Store and Fallbacks ───────────────────

export async function getAboutHeroData(): Promise<AboutHeroData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/about_hero?limit=1`, {
      cache: "no-store",
    });
    if (!res.ok) return DEFAULT_ABOUT_HERO;
    const json = await res.json();
    const doc = Array.isArray(json?.data) ? json.data[0] : json.data;
    if (!doc) return DEFAULT_ABOUT_HERO;

    return {
      banner_title: doc.banner_title || DEFAULT_ABOUT_HERO.banner_title,
      banner_breadcrumb: doc.banner_breadcrumb || DEFAULT_ABOUT_HERO.banner_breadcrumb,
      banner_image: doc.banner_image || DEFAULT_ABOUT_HERO.banner_image,
      banner_imgtitle: doc.banner_imgtitle || DEFAULT_ABOUT_HERO.banner_imgtitle,
      banner_altname: doc.banner_altname || DEFAULT_ABOUT_HERO.banner_altname,
      origin_badge: doc.origin_badge || DEFAULT_ABOUT_HERO.origin_badge,
      headline_line_1: doc.headline_line_1 || DEFAULT_ABOUT_HERO.headline_line_1,
      headline_line_2: doc.headline_line_2 || DEFAULT_ABOUT_HERO.headline_line_2,
      paragraph_1: doc.paragraph_1 || DEFAULT_ABOUT_HERO.paragraph_1,
      paragraph_2: doc.paragraph_2 || DEFAULT_ABOUT_HERO.paragraph_2,
      quote: doc.quote || DEFAULT_ABOUT_HERO.quote,
      stat_1_val: doc.stat_1_val ?? DEFAULT_ABOUT_HERO.stat_1_val,
      stat_1_suffix: doc.stat_1_suffix || DEFAULT_ABOUT_HERO.stat_1_suffix,
      stat_1_label: doc.stat_1_label || DEFAULT_ABOUT_HERO.stat_1_label,
      stat_2_val: doc.stat_2_val ?? DEFAULT_ABOUT_HERO.stat_2_val,
      stat_2_suffix: doc.stat_2_suffix || DEFAULT_ABOUT_HERO.stat_2_suffix,
      stat_2_label: doc.stat_2_label || DEFAULT_ABOUT_HERO.stat_2_label,
      stat_3_val: doc.stat_3_val ?? DEFAULT_ABOUT_HERO.stat_3_val,
      stat_3_suffix: doc.stat_3_suffix || DEFAULT_ABOUT_HERO.stat_3_suffix,
      stat_3_label: doc.stat_3_label || DEFAULT_ABOUT_HERO.stat_3_label,
      cta_1_text: doc.cta_1_text || DEFAULT_ABOUT_HERO.cta_1_text,
      cta_1_link: doc.cta_1_link || DEFAULT_ABOUT_HERO.cta_1_link,
      cta_2_text: doc.cta_2_text || DEFAULT_ABOUT_HERO.cta_2_text,
      cta_2_link: doc.cta_2_link || DEFAULT_ABOUT_HERO.cta_2_link,
      video_url: doc.video_url || DEFAULT_ABOUT_HERO.video_url,
      total_frames: doc.total_frames ?? DEFAULT_ABOUT_HERO.total_frames,
      frame_path_prefix: doc.frame_path_prefix || DEFAULT_ABOUT_HERO.frame_path_prefix,
      scroll_height_vh: doc.scroll_height_vh ?? DEFAULT_ABOUT_HERO.scroll_height_vh,
      damping: doc.damping ?? DEFAULT_ABOUT_HERO.damping,
    };
  } catch (err) {
    console.warn("Failed to fetch about_hero from API, using default:", err);
    return DEFAULT_ABOUT_HERO;
  }
}

export async function getAboutMissionVisionData(): Promise<AboutMissionVisionData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/about_mission_vision?limit=1`, {
      cache: "no-store",
    });
    if (!res.ok) return DEFAULT_MISSION_VISION;
    const json = await res.json();
    const doc = Array.isArray(json?.data) ? json.data[0] : json.data;
    if (!doc) return DEFAULT_MISSION_VISION;

    return {
      header_badge: doc.header_badge || DEFAULT_MISSION_VISION.header_badge,
      header_title: doc.header_title || DEFAULT_MISSION_VISION.header_title,
      header_desc_1: doc.header_desc_1 || DEFAULT_MISSION_VISION.header_desc_1,
      header_desc_2: doc.header_desc_2 || DEFAULT_MISSION_VISION.header_desc_2,
      vision_badge: doc.vision_badge || DEFAULT_MISSION_VISION.vision_badge,
      vision_title: doc.vision_title || DEFAULT_MISSION_VISION.vision_title,
      vision_desc: doc.vision_desc || DEFAULT_MISSION_VISION.vision_desc,
      vision_footer: doc.vision_footer || DEFAULT_MISSION_VISION.vision_footer,
      mission_badge: doc.mission_badge || DEFAULT_MISSION_VISION.mission_badge,
      mission_title: doc.mission_title || DEFAULT_MISSION_VISION.mission_title,
      mission_desc: doc.mission_desc || DEFAULT_MISSION_VISION.mission_desc,
      value_1_title: doc.value_1_title || DEFAULT_MISSION_VISION.value_1_title,
      value_1_desc: doc.value_1_desc || DEFAULT_MISSION_VISION.value_1_desc,
      value_1_icon: doc.value_1_icon || DEFAULT_MISSION_VISION.value_1_icon,
      value_2_title: doc.value_2_title || DEFAULT_MISSION_VISION.value_2_title,
      value_2_desc: doc.value_2_desc || DEFAULT_MISSION_VISION.value_2_desc,
      value_2_icon: doc.value_2_icon || DEFAULT_MISSION_VISION.value_2_icon,
      value_3_title: doc.value_3_title || DEFAULT_MISSION_VISION.value_3_title,
      value_3_desc: doc.value_3_desc || DEFAULT_MISSION_VISION.value_3_desc,
      value_3_icon: doc.value_3_icon || DEFAULT_MISSION_VISION.value_3_icon,
      value_4_title: doc.value_4_title || DEFAULT_MISSION_VISION.value_4_title,
      value_4_desc: doc.value_4_desc || DEFAULT_MISSION_VISION.value_4_desc,
      value_4_icon: doc.value_4_icon || DEFAULT_MISSION_VISION.value_4_icon,
    };
  } catch (err) {
    console.warn("Failed to fetch about_mission_vision from API, using default:", err);
    return DEFAULT_MISSION_VISION;
  }
}

export async function getAboutPillarsData(): Promise<AboutPillarItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/about_pillars`, {
      cache: "no-store",
    });
    if (!res.ok) return DEFAULT_PILLARS;
    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    if (list.length === 0) return DEFAULT_PILLARS;

    const sorted = [...list].sort((a: any, b: any) => (a.order || 0) - (b.order || 0));

    return sorted.map((doc: any, idx: number) => ({
      id: doc._id?.toString() || doc.id || `pillar-${idx + 1}`,
      order: doc.order ?? idx + 1,
      number: doc.number || String(idx + 1).padStart(2, "0"),
      title: doc.title || "",
      tag: doc.tag || "",
      desc: doc.desc || "",
      features: Array.isArray(doc.features) && doc.features.length > 0 ? doc.features : [],
      image: doc.image || DEFAULT_PILLARS[idx % DEFAULT_PILLARS.length].image,
      imgtitle: doc.imgtitle || doc.title,
      altname: doc.altname || doc.title,
      icon_name: doc.icon_name || "Code2",
    }));
  } catch (err) {
    console.warn("Failed to fetch about_pillars from API, using default:", err);
    return DEFAULT_PILLARS;
  }
}

export async function getAboutPartnershipCtaData(): Promise<AboutPartnershipCtaData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/about_overview_cta?limit=1`, {
      cache: "no-store",
    });
    if (!res.ok) return DEFAULT_PARTNERSHIP_CTA;
    const json = await res.json();
    const doc = Array.isArray(json?.data) ? json.data[0] : json.data;
    if (!doc) return DEFAULT_PARTNERSHIP_CTA;

    return {
      cta_badge: doc.cta_badge || DEFAULT_PARTNERSHIP_CTA.cta_badge,
      cta_title: doc.cta_title || DEFAULT_PARTNERSHIP_CTA.cta_title,
      cta_desc: doc.cta_desc || DEFAULT_PARTNERSHIP_CTA.cta_desc,
      cta_button_text: doc.cta_button_text || DEFAULT_PARTNERSHIP_CTA.cta_button_text,
      cta_button_link: doc.cta_button_link || DEFAULT_PARTNERSHIP_CTA.cta_button_link,
    };
  } catch (err) {
    console.warn("Failed to fetch partnership CTA from API, using default:", err);
    return DEFAULT_PARTNERSHIP_CTA;
  }
}

export const getAboutOverviewCtaData = getAboutPartnershipCtaData;

