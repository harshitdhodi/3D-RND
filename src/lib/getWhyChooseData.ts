export interface WhyChooseOuterCard {
  number: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  description: string;
  tags: string[];
}

export interface WhyChooseHeroCard {
  image: string;
  imgtitle?: string;
  altname?: string;
  watermark: string;
  headline: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
}

export interface WhyChooseData {
  badge: string;
  titlePrefix: string;
  typewriterText: string;
  subtitle: string;
  card1: WhyChooseOuterCard;
  card2: WhyChooseOuterCard;
  hero: WhyChooseHeroCard;
  card3: WhyChooseOuterCard;
  card4: WhyChooseOuterCard;
}

export const DEFAULT_WHY_CHOOSE_DATA: WhyChooseData = {
  badge: "WHY CHOOSE RND // THE RND ADVANTAGE",
  titlePrefix: "BUILT TO PERFORM.",
  typewriterText: "ENGINEERED TO LEAD.",
  subtitle:
    "We bring together strategic thinking, technical expertise and creative execution to help businesses move forward. From the first idea to long-term growth, we build solutions that are scalable, secure and designed to deliver lasting value.",
  card1: {
    number: "01 /",
    badge: "OUR APPROACH",
    titleLine1: "AGILE BY",
    titleLine2: "DESIGN",
    tagline: "From concept to execution, without the complexity.",
    description:
      "We turn ideas into actionable solutions through streamlined workflows, collaborative planning and adaptive execution.",
    tags: ["Strategy", "Execution", "Innovation"],
  },
  card2: {
    number: "02 /",
    badge: "OUR PEOPLE",
    titleLine1: "EXPERTISE THAT",
    titleLine2: "DELIVERS",
    tagline: "The right minds. The right solutions.",
    description:
      "Our multidisciplinary expertise brings developers, strategists, designers and creative professionals together to solve business challenges and build meaningful digital experiences.",
    tags: ["Technology", "Strategy", "Design", "Marketing"],
  },
  hero: {
    image: "/uploads/whychooseus.png",
    imgtitle: "RnD Technosoft Advantage Hero",
    altname: "Why Choose RnD Technosoft Astronaut",
    watermark: "IDEAS → IMPACT",
    headline: "BUILT TO SCALE.",
    subheading: "One vision. Four capabilities.\nEndless possibilities",
    ctaText: "Book Free Consultation",
    ctaLink: "/#contact",
  },
  card3: {
    number: "03 /",
    badge: "OUR TECHNOLOGY",
    titleLine1: "SECURITY MEETS",
    titleLine2: "SCALABILITY",
    tagline: "Built for today. Ready for tomorrow.",
    description:
      "We develop robust digital solutions with a focus on performance, security and scalability, helping businesses adapt, evolve and grow with confidence.",
    tags: ["Cloud Infrastructure", "Security", "Performance", "Scalability"],
  },
  card4: {
    number: "04 /",
    badge: "OUR COMMITMENT",
    titleLine1: "PARTNERSHIP",
    titleLine2: "BEYOND DELIVERY",
    tagline: "We build relationships, not just projects.",
    description:
      "Our commitment extends beyond launch. We provide ongoing collaboration, technical assistance and continuous improvement to keep your digital ecosystem moving forward.",
    tags: ["Dedicated Support", "Collaboration", "Long-Term Growth"],
  },
};

function parseTags(val: unknown, fallback: string[]): string[] {
  if (Array.isArray(val) && val.length > 0) {
    return val.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof val === "string" && val.trim()) {
    if (val.includes("•")) {
      return val.split("•").map((s) => s.trim()).filter(Boolean);
    }
    if (val.includes(",")) {
      return val.split(",").map((s) => s.trim()).filter(Boolean);
    }
    return [val.trim()];
  }
  return fallback;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

export async function getWhyChooseData(): Promise<WhyChooseData> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/why_choose_section`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return DEFAULT_WHY_CHOOSE_DATA;
    }

    const json = await res.json();
    const doc = Array.isArray(json?.data) ? json.data[0] : json?.data;
    if (!doc) return DEFAULT_WHY_CHOOSE_DATA;

    return {
      badge: doc.badge_text || doc.badge || DEFAULT_WHY_CHOOSE_DATA.badge,
      titlePrefix: doc.headline_main || doc.title_prefix || DEFAULT_WHY_CHOOSE_DATA.titlePrefix,
      typewriterText: doc.headline_highlight || doc.typewriter_text || DEFAULT_WHY_CHOOSE_DATA.typewriterText,
      subtitle: doc.subtitle || DEFAULT_WHY_CHOOSE_DATA.subtitle,

      card1: {
        number: doc.card_1_num || DEFAULT_WHY_CHOOSE_DATA.card1.number,
        badge: doc.card_1_badge || DEFAULT_WHY_CHOOSE_DATA.card1.badge,
        titleLine1: doc.card_1_title_line_1 || DEFAULT_WHY_CHOOSE_DATA.card1.titleLine1,
        titleLine2: doc.card_1_title_line_2 || DEFAULT_WHY_CHOOSE_DATA.card1.titleLine2,
        tagline: doc.card_1_tagline || doc.card_1_tag || DEFAULT_WHY_CHOOSE_DATA.card1.tagline,
        description: doc.card_1_description || DEFAULT_WHY_CHOOSE_DATA.card1.description,
        tags: parseTags(doc.card_1_tags, DEFAULT_WHY_CHOOSE_DATA.card1.tags),
      },

      card2: {
        number: doc.card_2_num || DEFAULT_WHY_CHOOSE_DATA.card2.number,
        badge: doc.card_2_badge || DEFAULT_WHY_CHOOSE_DATA.card2.badge,
        titleLine1: doc.card_2_title_line_1 || DEFAULT_WHY_CHOOSE_DATA.card2.titleLine1,
        titleLine2: doc.card_2_title_line_2 || DEFAULT_WHY_CHOOSE_DATA.card2.titleLine2,
        tagline: doc.card_2_tagline || doc.card_2_tag || DEFAULT_WHY_CHOOSE_DATA.card2.tagline,
        description: doc.card_2_description || DEFAULT_WHY_CHOOSE_DATA.card2.description,
        tags: parseTags(doc.card_2_tags, DEFAULT_WHY_CHOOSE_DATA.card2.tags),
      },

      hero: {
        image: doc.hero_image || DEFAULT_WHY_CHOOSE_DATA.hero.image,
        imgtitle: doc.imgtitle || DEFAULT_WHY_CHOOSE_DATA.hero.imgtitle,
        altname: doc.altname || DEFAULT_WHY_CHOOSE_DATA.hero.altname,
        watermark: doc.hero_watermark || DEFAULT_WHY_CHOOSE_DATA.hero.watermark,
        headline: doc.hero_headline || DEFAULT_WHY_CHOOSE_DATA.hero.headline,
        subheading: doc.hero_subheading || DEFAULT_WHY_CHOOSE_DATA.hero.subheading,
        ctaText: doc.hero_cta_text || DEFAULT_WHY_CHOOSE_DATA.hero.ctaText,
        ctaLink: doc.hero_cta_link || DEFAULT_WHY_CHOOSE_DATA.hero.ctaLink,
      },

      card3: {
        number: doc.card_3_num || DEFAULT_WHY_CHOOSE_DATA.card3.number,
        badge: doc.card_3_badge || DEFAULT_WHY_CHOOSE_DATA.card3.badge,
        titleLine1: doc.card_3_title_line_1 || DEFAULT_WHY_CHOOSE_DATA.card3.titleLine1,
        titleLine2: doc.card_3_title_line_2 || DEFAULT_WHY_CHOOSE_DATA.card3.titleLine2,
        tagline: doc.card_3_tagline || doc.card_3_tag || DEFAULT_WHY_CHOOSE_DATA.card3.tagline,
        description: doc.card_3_description || DEFAULT_WHY_CHOOSE_DATA.card3.description,
        tags: parseTags(doc.card_3_tags, DEFAULT_WHY_CHOOSE_DATA.card3.tags),
      },

      card4: {
        number: doc.card_4_num || DEFAULT_WHY_CHOOSE_DATA.card4.number,
        badge: doc.card_4_badge || DEFAULT_WHY_CHOOSE_DATA.card4.badge,
        titleLine1: doc.card_4_title_line_1 || DEFAULT_WHY_CHOOSE_DATA.card4.titleLine1,
        titleLine2: doc.card_4_title_line_2 || DEFAULT_WHY_CHOOSE_DATA.card4.titleLine2,
        tagline: doc.card_4_tagline || doc.card_4_tag || DEFAULT_WHY_CHOOSE_DATA.card4.tagline,
        description: doc.card_4_description || DEFAULT_WHY_CHOOSE_DATA.card4.description,
        tags: parseTags(doc.card_4_tags, DEFAULT_WHY_CHOOSE_DATA.card4.tags),
      },
    };
  } catch (err) {
    console.warn("Falling back to default Why Choose data:", err);
    return DEFAULT_WHY_CHOOSE_DATA;
  }
}
