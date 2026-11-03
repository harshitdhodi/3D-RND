"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Headphones,
  ArrowUpRight,
  Sparkles,
  Zap,
  Code2,
  GitBranch,
  CheckCircle2,
  Users,
  Terminal,
  Cpu,
  ShieldCheck,
  Server,
  Lock,
  Activity,
  Gauge,
  Radio,
  Clock,
  Rocket,
  Target,
  Flame,
  TrendingUp,
  Award,
  Search,
  Megaphone,
  BarChart3,
  PieChart,
  DollarSign,
  Crosshair,
  RefreshCw,
  PhoneCall,
  Palette,
  Compass,
  PenTool,
  Eye,
  Layers,
  Gem,
  Lightbulb,
  Box,
  MonitorPlay,
  Maximize2,
  CheckCheck,
  HeartHandshake,
  FolderLock,
  Smile,
  Film,
  Clapperboard,
  Camera,
  PlayCircle,
  Cuboid,
  Aperture,
  Sliders,
  Volume2,
  FastForward,
  ShieldAlert,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * WaveText component renders text character-by-character with staggered delays
 * producing a smooth, fluid undulating sine-wave ripple across the title.
 */
function WaveText({
  text,
  className = "",
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block animate-text-wave"
          style={{
            animationDelay: `${(delayOffset + i) * 0.07}s`,
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export interface WhyChoosePoint {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc?: string;
}

export interface WhyChooseCardConfig {
  number: string;
  badge?: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  titleLine1: string;
  titleLine2: string;
  points: WhyChoosePoint[];
  metricVal?: string;
  metricLabel?: string;
  tags?: string[];
}

export interface WhyChooseHeroConfig {
  stat: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export interface WhyChooseServiceData {
  badge: string;
  typewriterPhrases: string[];
  titlePrefix: string;
  subtitle: string;
  hero: WhyChooseHeroConfig;
  card1: WhyChooseCardConfig; // Top-Left (Yellow Standout)
  card2: WhyChooseCardConfig; // Bottom-Left (Dark Glass)
  card3: WhyChooseCardConfig; // Top-Right (Telemetry / SLA)
  card4: WhyChooseCardConfig; // Bottom-Right (Radar / Support)
}

/* =========================================================================
   1. TECHNOLOGY SOLUTIONS & ENTERPRISE ENGINEERING
   ========================================================================= */
const TECHNOLOGY_SOLUTIONS_DATA: WhyChooseServiceData = {
  badge: "WHY TEAM UP WITH US // ADVANCED ENGINEERING LAB",
  typewriterPhrases: [
    "VELOCITY & IMPACT",
    "ZERO DOWNTIME",
    "SCALABLE ARCHITECTURES",
    "CLEAN TYPE-SAFE CODE",
  ],
  titlePrefix: "BUILT FOR MAXIMUM",
  subtitle:
    "Accelerate enterprise release velocity with battle-tested senior architects, multi-region cloud resilience, 100% IP ownership, and guaranteed sub-second response times.",
  hero: {
    stat: "3x Faster",
    subtitleLine1: "From Codebase Blueprint",
    subtitleLine2: "To Multi-Region Launch",
    ctaText: "Book Engineering Audit",
  },
  card1: {
    number: "01 /",
    badge: "100% On-Time Sprints",
    badgeIcon: Zap,
    titleLine1: "Rapid Agile",
    titleLine2: "Sprint Velocity",
    points: [
      {
        icon: Code2,
        title: "Two-Week Agile Sprints",
        desc: "Predictable bi-weekly staging builds with zero scope creep",
      },
      {
        icon: GitBranch,
        title: "Automated CI/CD Deploys",
        desc: "Zero-downtime blue/green rollouts on global edge cloud",
      },
      {
        icon: CheckCircle2,
        title: "Strict Type-Safe QA",
        desc: "100% end-to-end automated test suites & regression checks",
      },
    ],
    metricVal: "14-Day",
    metricLabel: "Sprint Cadence",
  },
  card2: {
    number: "02 /",
    badge: "Top 1% Engineers",
    badgeIcon: Users,
    titleLine1: "Top 1% Senior",
    titleLine2: "Architect Squads",
    points: [
      {
        icon: Terminal,
        title: "Direct Slack with Architects",
        desc: "No middlemen; direct technical sync with senior engineers",
      },
      {
        icon: Cpu,
        title: "High-Concurrency Mastery",
        desc: "Engineered to sustain 10M+ req/min with sub-second latencies",
      },
      {
        icon: ShieldCheck,
        title: "100% IP & Repo Ownership",
        desc: "Complete repository rights, secrets, and system documentation",
      },
    ],
    metricVal: "10+ Yrs",
    metricLabel: "Avg Experience",
    tags: ["Next.js 15", "Kubernetes", "AWS / GCP", "TypeScript"],
  },
  card3: {
    number: "03 /",
    badge: "Live SLA Monitoring",
    badgeIcon: Activity,
    titleLine1: "Bank-Grade",
    titleLine2: "Cloud Resilience",
    points: [
      {
        icon: Server,
        title: "Multi-Region Failover",
        desc: "Auto-healing Kubernetes clusters across redundant availability zones",
      },
      {
        icon: Lock,
        title: "SOC2 & ISO-Ready Security",
        desc: "Strict OWASP compliance, encrypted databases, and audited RBAC",
      },
      {
        icon: Gauge,
        title: "Sub-200ms Global TTFB",
        desc: "Worldwide Cloudflare Edge SSR caching & asset optimization",
      },
    ],
    metricVal: "99.99%",
    metricLabel: "Uptime SLA Guarantee",
  },
  card4: {
    number: "04 /",
    badge: "<15m Critical SLA",
    badgeIcon: Clock,
    titleLine1: "24/7 Dedicated",
    titleLine2: "DevOps Ops Center",
    points: [
      {
        icon: Radio,
        title: "Continuous Telemetry",
        desc: "Synthetic health pings and automated Datadog anomaly detection",
      },
      {
        icon: ShieldAlert,
        title: "P1 Incident Response",
        desc: "Senior infrastructure engineer responds within 15 minutes",
      },
      {
        icon: Headphones,
        title: "Continuous Security Audits",
        desc: "Quarterly dependency updates, penetration testing, and optimizations",
      },
    ],
    metricVal: "99.4%",
    metricLabel: "Client SLA Compliance",
  },
};

/* =========================================================================
   2. DIGITAL MARKETING & GROWTH ACQUISITION
   ========================================================================= */
const DIGITAL_MARKETING_DATA: WhyChooseServiceData = {
  badge: "WHY TEAM UP WITH US // DATA-DRIVEN GROWTH ENGINE",
  typewriterPhrases: [
    "MEASURABLE ROAS",
    "ALGORITHMIC DOMINANCE",
    "HIGH-CONVERTING FUNNELS",
    "REVENUE ACCELERATION",
  ],
  titlePrefix: "ENGINEERED FOR",
  subtitle:
    "Dominate Google search results, maximize ad budget returns, and drive compounding customer acquisition with verifiable attribution telemetry and zero ad waste.",
  hero: {
    stat: "8.4x ROAS",
    subtitleLine1: "Average Verified Return",
    subtitleLine2: "On Performance Ad Spend",
    ctaText: "Request Free Growth Audit",
  },
  card1: {
    number: "01 /",
    badge: "Compounding Growth",
    badgeIcon: Rocket,
    titleLine1: "High-Velocity",
    titleLine2: "Acquisition Funnels",
    points: [
      {
        icon: Target,
        title: "Intent Keyword Dominance",
        desc: "Capture high-intent commercial buyers before your competitors",
      },
      {
        icon: Flame,
        title: "Multivariate A/B Testing",
        desc: "Rapid testing on landing page hooks, micro-copy & ad creatives",
      },
      {
        icon: TrendingUp,
        title: "+310% Traffic Velocity",
        desc: "Proven algorithmic playbooks that scale organic and paid traffic",
      },
    ],
    metricVal: "+310%",
    metricLabel: "Organic Growth Surge",
  },
  card2: {
    number: "02 /",
    badge: "Certified Growth Squad",
    badgeIcon: Award,
    titleLine1: "Premier Growth",
    titleLine2: "Media Strategists",
    points: [
      {
        icon: Search,
        title: "Algorithmic Search Mastery",
        desc: "Technical schema graphs, Core Web Vitals, and programmatic links",
      },
      {
        icon: Megaphone,
        title: "High-Converting Ad Copy",
        desc: "Psychology-backed direct response copywriting for paid social",
      },
      {
        icon: Users,
        title: "Omnichannel Funnel Mesh",
        desc: "Synchronized funnels across Google Ads, Meta, TikTok & LinkedIn",
      },
    ],
    metricVal: "₹50Cr+",
    metricLabel: "Managed Ad Capital",
    tags: ["Google Premier", "Meta Verified", "GA4 / GTM", "Looker Studio"],
  },
  card3: {
    number: "03 /",
    badge: "100% Attribution Transparency",
    badgeIcon: BarChart3,
    titleLine1: "Live Attribution",
    titleLine2: "Telemetry Dashboards",
    points: [
      {
        icon: PieChart,
        title: "Real-Time Looker Dashboards",
        desc: "24/7 visibility into CAC, ROAS, conversions, and revenue by channel",
      },
      {
        icon: DollarSign,
        title: "Zero Budget Leakage",
        desc: "Algorithmic click-fraud filters and continuous negative keyword pruning",
      },
      {
        icon: Crosshair,
        title: "Predictive LTV Modeling",
        desc: "Data models focused on high-margin lifetime client acquisition",
      },
    ],
    metricVal: "8.4x",
    metricLabel: "Average Campaign ROAS",
  },
  card4: {
    number: "04 /",
    badge: "Intra-Day Bid Pacing",
    badgeIcon: RefreshCw,
    titleLine1: "Continuous Pacing",
    titleLine2: "& Ad Optimization",
    points: [
      {
        icon: PhoneCall,
        title: "Weekly Growth Reviews",
        desc: "Direct strategic sync calls with your dedicated growth director",
      },
      {
        icon: Sparkles,
        title: "Viral Trend Hijacking",
        desc: "Agile adaptation to emerging viral trends and platform algorithm shifts",
      },
      {
        icon: Clock,
        title: "<15m Budget Shifts",
        desc: "Instant budget reallocation from lagging sets into top-performing ads",
      },
    ],
    metricVal: "97.2%",
    metricLabel: "Client Retention Rate",
  },
};

/* =========================================================================
   3. BRANDING & GRAPHIC DESIGN
   ========================================================================= */
const BRANDING_DESIGN_DATA: WhyChooseServiceData = {
  badge: "WHY TEAM UP WITH US // WORLD-CLASS DESIGN LAB",
  typewriterPhrases: [
    "ICONIC BRAND IDENTITY",
    "60 FPS INTERACTION",
    "SYSTEMATIC DESIGN TOKENS",
    "CATEGORY DOMINANCE",
  ],
  titlePrefix: "CRAFTED FOR",
  subtitle:
    "Elevate your visual presence into an unmistakable category icon with systematic Figma design tokens, human-centric UI/UX, and cinematic brand assets.",
  hero: {
    stat: "100% Bespoke",
    subtitleLine1: "Zero Generic Templates",
    subtitleLine2: "Pure Tailored Identity",
    ctaText: "Book Design Consultation",
  },
  card1: {
    number: "01 /",
    badge: "Award-Winning Standard",
    badgeIcon: Palette,
    titleLine1: "Category-Defining",
    titleLine2: "Visual Systems",
    points: [
      {
        icon: Sparkles,
        title: "Unmistakable Brand Signature",
        desc: "Striking visual identities that instantly command trust and recall",
      },
      {
        icon: Compass,
        title: "Psychographic Brand Strategy",
        desc: "Deep competitive audit and audience positioning for market leadership",
      },
      {
        icon: PenTool,
        title: "Precision Vector Geometries",
        desc: "Custom logo marks, mathematical grid layouts, and typography scales",
      },
    ],
    metricVal: "250+",
    metricLabel: "Brands Architected",
  },
  card2: {
    number: "02 /",
    badge: "Design System Experts",
    badgeIcon: Eye,
    titleLine1: "Master Art Directors",
    titleLine2: "& UI/UX Pioneers",
    points: [
      {
        icon: Layers,
        title: "Production Figma Tokens",
        desc: "Scalable component libraries with auto-layout and dynamic variables",
      },
      {
        icon: Lightbulb,
        title: "Human-Centric UX Journeys",
        desc: "Frictionless user journeys backed by usability heatmaps and user tests",
      },
      {
        icon: Gem,
        title: "Brand Guidelines Bible",
        desc: "Comprehensive manual covering print, web, spatial, and marketing tokens",
      },
    ],
    metricVal: "60+ Awards",
    metricLabel: "Global Design Accolades",
    tags: ["Figma Tokens", "Design Systems", "Vector Math", "UI/UX"],
  },
  card3: {
    number: "03 /",
    badge: "Cinema-Grade Polish",
    badgeIcon: Box,
    titleLine1: "Spatial 3D",
    titleLine2: "& Micro-Interactions",
    points: [
      {
        icon: MonitorPlay,
        title: "60 FPS Kinetic Physics",
        desc: "Tactile micro-interactions and smooth spring physics that delight users",
      },
      {
        icon: Maximize2,
        title: "Multi-Viewport Fluidity",
        desc: "Pixel-perfect rendering tested across 30+ physical screen sizes",
      },
      {
        icon: CheckCheck,
        title: "Infinite Vector Scalability",
        desc: "Flawless sharpness from 16px mobile icons to massive 4K billboards",
      },
    ],
    metricVal: "60 FPS",
    metricLabel: "Interaction Standard",
  },
  card4: {
    number: "04 /",
    badge: "100% Commercial Rights",
    badgeIcon: HeartHandshake,
    titleLine1: "Collaborative Studio",
    titleLine2: "& Total IP Ownership",
    points: [
      {
        icon: FolderLock,
        title: "Full Source File Delivery",
        desc: "Instant delivery of raw vector files, fonts, 3D assets, and licenses",
      },
      {
        icon: Clock,
        title: "Rapid 48-Hour Concepts",
        desc: "Initial creative moodboards and concept sprints delivered in 2 days",
      },
      {
        icon: Smile,
        title: "Collaborative Figma Sprints",
        desc: "Live Figma comment and refinement sessions until perfection is achieved",
      },
    ],
    metricVal: "100%",
    metricLabel: "IP & Copyright Transfer",
  },
};

/* =========================================================================
   4. MEDIA PRODUCTION & CINEMATOGRAPHY
   ========================================================================= */
const MEDIA_PRODUCTION_DATA: WhyChooseServiceData = {
  badge: "WHY TEAM UP WITH US // CINEMA-GRADE PRODUCTION STUDIO",
  typewriterPhrases: [
    "8K CINEMATOGRAPHY",
    "PHOTOREALISTIC 3D CGI",
    "DYNAMIC MOTION GRAPHICS",
    "HOLLYWOOD SOUND DESIGN",
  ],
  titlePrefix: "PRODUCED FOR",
  subtitle:
    "Command international attention with Hollywood-grade 8K cinematography, photorealistic 3D CGI product animation, and Dolby Atmos cinematic sound design.",
  hero: {
    stat: "8K Cinema",
    subtitleLine1: "RED & ARRI Cinema Rigs",
    subtitleLine2: "Cinema-Grade Quality",
    ctaText: "Book Studio Briefing",
  },
  card1: {
    number: "01 /",
    badge: "Full Studio Rigs",
    badgeIcon: Film,
    titleLine1: "Cinema-Grade",
    titleLine2: "Brand Storytelling",
    points: [
      {
        icon: Clapperboard,
        title: "Comprehensive Pre-Production",
        desc: "Concept treatments, cinematic storyboards, casting, and location scouting",
      },
      {
        icon: Camera,
        title: "8K Dual RED & ARRI Rigs",
        desc: "Cinema primes, motorized robotic gimbals, and high-altitude drone crews",
      },
      {
        icon: PlayCircle,
        title: "Turnkey Commercial Cuts",
        desc: "Master cuts formatted for TV broadcast, OTT streaming, and social channels",
      },
    ],
    metricVal: "8K / 4K",
    metricLabel: "Cinema Native Resolution",
  },
  card2: {
    number: "02 /",
    badge: "VFX & CGI Specialists",
    badgeIcon: Cuboid,
    titleLine1: "Photorealistic 3D",
    titleLine2: "CGI & Motion FX",
    points: [
      {
        icon: Aperture,
        title: "Unreal Engine 5 & Blender",
        desc: "Photorealistic lighting, ray-traced materials, and exploded product views",
      },
      {
        icon: Sparkles,
        title: "Kinetic Motion Typography",
        desc: "High-energy title animation and futuristic HUD holographic overlays",
      },
      {
        icon: Sliders,
        title: "DaVinci Color Grading",
        desc: "Hollywood color science on calibrated Flanders Scientific HDR monitors",
      },
    ],
    metricVal: "500+",
    metricLabel: "Commercials Delivered",
    tags: ["RED 8K", "Unreal Engine 5", "DaVinci Resolve", "Blender"],
  },
  card3: {
    number: "03 /",
    badge: "Dolby Atmos Mastered",
    badgeIcon: Volume2,
    titleLine1: "Cinematic Sound",
    titleLine2: "& Spatial Audio",
    points: [
      {
        icon: Headphones,
        title: "Custom Foley & Sound FX",
        desc: "Bespoke audio textures, sub-bass impacts, and multi-channel surround mixes",
      },
      {
        icon: Radio,
        title: "Global Voice Talent Casting",
        desc: "Professional studio voice artists recorded in over 15 native accents",
      },
      {
        icon: ShieldCheck,
        title: "Worldwide Commercial Licensing",
        desc: "100% royalty-free broadcast and digital distribution clearances",
      },
    ],
    metricVal: "100%",
    metricLabel: "Broadcast Royalty-Free",
  },
  card4: {
    number: "04 /",
    badge: "5-Day First Cut SLA",
    badgeIcon: FastForward,
    titleLine1: "Agile Post-Ops",
    titleLine2: "& Rapid Delivery",
    points: [
      {
        icon: Clock,
        title: "Rapid 5-Day Rough Cut",
        desc: "Streamlined review cycles via Frame.io with frame-accurate comments",
      },
      {
        icon: RefreshCw,
        title: "Precision Iteration Sprints",
        desc: "Direct communication with senior editor and VFX lead on every revision",
      },
      {
        icon: CheckCircle2,
        title: "Multi-Platform Deliverables",
        desc: "Exports in 16:9 widescreen, 9:16 vertical, and 1:1 square feeds",
      },
    ],
    metricVal: "99.2%",
    metricLabel: "First-Cut Approval Rate",
  },
};

/**
 * Resolves the service configuration based on category slug, name, or service ID.
 */
function resolveServiceConfig(category?: string, serviceId?: string): WhyChooseServiceData {
  const cat = (category || "").toLowerCase();
  const id = (serviceId || "").toLowerCase();

  if (
    cat.includes("market") ||
    cat.includes("seo") ||
    cat.includes("growth") ||
    cat.includes("ppc") ||
    cat.includes("social") ||
    id.includes("seo") ||
    id.includes("marketing") ||
    id.includes("ppc") ||
    id.includes("social") ||
    id.includes("content")
  ) {
    return DIGITAL_MARKETING_DATA;
  }

  if (
    cat.includes("brand") ||
    cat.includes("design") ||
    cat.includes("identity") ||
    cat.includes("ui") ||
    cat.includes("ux") ||
    id.includes("brand") ||
    id.includes("design") ||
    id.includes("spatial") ||
    id.includes("ui-ux")
  ) {
    return BRANDING_DESIGN_DATA;
  }

  if (
    cat.includes("media") ||
    cat.includes("video") ||
    cat.includes("film") ||
    cat.includes("motion") ||
    cat.includes("cgi") ||
    id.includes("video") ||
    id.includes("media") ||
    id.includes("motion") ||
    id.includes("commercial")
  ) {
    return MEDIA_PRODUCTION_DATA;
  }

  // Default to Technology Solutions (Web, Cloud, Software, Apps)
  return TECHNOLOGY_SOLUTIONS_DATA;
}

export default function WhyChooseSection({
  className = "",
  category = "",
  serviceId = "",
  badge,
  titlePrefix,
  subtitle,
}: {
  className?: string;
  category?: string;
  serviceId?: string;
  badge?: string;
  titlePrefix?: string;
  subtitle?: string;
} = {}) {
  const serviceData = useMemo(
    () => resolveServiceConfig(category, serviceId),
    [category, serviceId]
  );

  const activeBadge = badge || serviceData.badge;
  const activeTitlePrefix = titlePrefix || serviceData.titlePrefix;
  const activeSubtitle = subtitle || serviceData.subtitle;

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const wavePathRef = useRef<SVGPathElement>(null);

  // Typewriter animation state for the main heading
  const typewriterPhrases = serviceData.typewriterPhrases;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState(typewriterPhrases[0] || "VELOCITY & IMPACT");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setPhraseIndex(0);
    setCurrentText(typewriterPhrases[0] || "VELOCITY & IMPACT");
    setIsDeleting(false);
  }, [typewriterPhrases]);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex] || typewriterPhrases[0];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === currentPhrase) {
      // Pause after typing the full phrase
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && currentText === "") {
      // Switch phrase after deleting
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
    } else {
      // Character-by-character typing or backspacing
      const typingSpeed = isDeleting ? 35 : 75;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typewriterPhrases]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal on scroll
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Cards entrance stagger
      if (cardsGridRef.current) {
        gsap.fromTo(
          cardsGridRef.current.children,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Wave path line draw
      if (wavePathRef.current) {
        const pathLength = wavePathRef.current.getTotalLength();
        gsap.set(wavePathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(wavePathRef.current, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wavePathRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const teamAvatars = [
    { src: "/images/career/career_spatial_3d.jpg", alt: "Senior Spatial Engineer" },
    { src: "/images/career/career_cloud_architect.jpg", alt: "Cloud Architect" },
    { src: "/images/career/career_mobile_engineer.jpg", alt: "Mobile Systems Engineer" },
    { src: "/images/career/career_ai_engineer.jpg", alt: "AI Solutions Lead" },
    { src: "/images/career/career_seo_performance.jpg", alt: "Performance Specialist" },
  ];

  const Card1BadgeIcon = serviceData.card1.badgeIcon || Zap;
  const Card2BadgeIcon = serviceData.card2.badgeIcon || Users;
  const Card3BadgeIcon = serviceData.card3.badgeIcon || Activity;
  const Card4BadgeIcon = serviceData.card4.badgeIcon || Clock;

  return (
    <section
      ref={sectionRef}
      id="why-choose"
      className={`relative w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-24 bg-transparent text-white overflow-hidden ${className}`}
    >
      {/* Background radial atmosphere with subtle ambient breathing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#FFD400]/[0.03] blur-[140px] pointer-events-none rounded-full animate-ambient-pulse" />
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-[#FFD400]/[0.02] blur-[120px] pointer-events-none rounded-full animate-ambient-drift" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header: Tagline, Title with Typewriter, Subtitle */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD400]/30 bg-[#FFD400]/10 text-[#FFD400] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>{activeBadge}</span>
          </div>

          <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-3 min-h-[52px] sm:min-h-[60px] md:min-h-[68px] leading-[1.15]">
            {activeTitlePrefix}{" "}
            <span className="text-[#FFD400] inline-block">
              {currentText}
              <span className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#FFD400] ml-1.5 align-middle animate-cursor-blink shadow-[0_0_10px_#FFD400]" />
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/60 font-[family-name:var(--font-jakarta)] leading-relaxed">
            {activeSubtitle}
          </p>
        </div>

        {/* 3-Column Grid Layout matching the design */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
        >
          {/* ========================================================
              CARD 01 - Yellow Standout Card (Left Column - Top)
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-[#FFD400] text-black p-6 sm:p-7 flex flex-col justify-between border border-[#FFD400] shadow-[0_15px_35px_rgba(255,212,0,0.18)] hover:scale-[1.015] transition-all duration-300 lg:col-start-1 lg:row-start-1 group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl sm:text-3xl font-black text-black font-[family-name:var(--font-syne)] tracking-tight">
                  {serviceData.card1.number}
                </div>
                {serviceData.card1.badge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-[#FFD400] text-[11px] font-mono font-bold uppercase shadow-sm">
                    <Card1BadgeIcon className="w-3.5 h-3.5" />
                    <span>{serviceData.card1.badge}</span>
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 leading-tight font-[family-name:var(--font-syne)] text-black">
                <WaveText text={serviceData.card1.titleLine1} />
                <br />
                <WaveText text={serviceData.card1.titleLine2} delayOffset={12} />
              </h3>

              {/* Service-Specific Points with Unique Icons */}
              <div className="space-y-3.5 mb-6">
                {serviceData.card1.points.map((pt, pIdx) => {
                  const PtIcon = pt.icon;
                  return (
                    <div key={pIdx} className="flex items-start gap-3 group/pt">
                      <div className="w-7 h-7 rounded-lg bg-black/15 text-black border border-black/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/pt:bg-black group-hover/pt:text-[#FFD400] transition-colors shadow-sm">
                        <PtIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-bold text-black leading-tight">
                          {pt.title}
                        </h4>
                        {pt.desc && (
                          <p className="text-[11px] text-black/80 font-normal leading-snug line-clamp-2">
                            {pt.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Metric & Segment Bar */}
            <div className="pt-4 border-t border-black/15">
              <div className="grid grid-cols-4 gap-1.5 mb-2">
                <div className="sprint-segment-bar relative h-1.5 bg-black rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-bar-shimmer" />
                </div>
                <div className="sprint-segment-bar relative h-1.5 bg-black rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-bar-shimmer"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
                <div className="sprint-segment-bar relative h-1.5 bg-black rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-bar-shimmer"
                    style={{ animationDelay: "0.8s" }}
                  />
                </div>
                <div className="sprint-segment-bar relative h-1.5 bg-black/30 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent animate-bar-shimmer"
                    style={{ animationDelay: "1.2s" }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono font-bold text-black">
                <span>{serviceData.card1.metricVal}</span>
                <span className="text-black/75 uppercase tracking-wider text-[11px]">
                  {serviceData.card1.metricLabel}
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              CARD 02 - Senior Squads (Left Column - Bottom)
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-[#0c0d12] border border-white/10 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 lg:col-start-1 lg:row-start-2 group">
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="text-2xl sm:text-3xl font-black text-white/40 font-[family-name:var(--font-syne)] tracking-tight">
                  {serviceData.card2.number}
                </div>
                {serviceData.card2.badge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono">
                    <Card2BadgeIcon className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>{serviceData.card2.badge}</span>
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-tight font-[family-name:var(--font-syne)] text-white">
                <WaveText text={serviceData.card2.titleLine1} />
                <br />
                <WaveText text={serviceData.card2.titleLine2} delayOffset={14} />
              </h3>

              {/* Service-Specific Points with Unique Icons */}
              <div className="space-y-3.5 mb-5">
                {serviceData.card2.points.map((pt, pIdx) => {
                  const PtIcon = pt.icon;
                  return (
                    <div key={pIdx} className="flex items-start gap-3 group/pt">
                      <div className="w-7 h-7 rounded-lg bg-[#FFD400]/10 text-[#FFD400] border border-[#FFD400]/25 flex items-center justify-center shrink-0 mt-0.5 group-hover/pt:bg-[#FFD400] group-hover/pt:text-black transition-colors shadow-sm">
                        <PtIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover/pt:text-[#FFD400] transition-colors leading-tight">
                          {pt.title}
                        </h4>
                        {pt.desc && (
                          <p className="text-[11px] text-neutral-400 font-light leading-snug line-clamp-2">
                            {pt.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Avatar Group with Real Specialist Portraits */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
              <div className="flex items-center -space-x-2.5">
                {teamAvatars.slice(0, 4).map((person, idx) => (
                  <div
                    key={idx}
                    className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#0c0d12] overflow-hidden bg-neutral-800 shadow-md transition-transform hover:scale-110 hover:z-20 duration-200"
                  >
                    <Image
                      src={person.src}
                      alt={person.alt}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#181920] border-2 border-[#0c0d12] flex items-center justify-center text-[11px] text-white/85 font-bold font-mono shadow-md overflow-hidden">
                  <span>+60</span>
                </div>
              </div>

              <span className="text-[11px] font-mono text-neutral-400 tracking-wider uppercase">
                Senior Squad Vetted
              </span>
            </div>
          </div>

          {/* ========================================================
              CENTER HERO CARD - Floating Astronaut with Golden Shield
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-black border border-white/10 hover:border-[#FFD400]/40 p-6 sm:p-8 flex flex-col items-center justify-between md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
            {/* Floating Cyber Astronaut + Golden Energy Shield Image & Hologram Rings */}
            <div className="relative z-10 w-full flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[360px] py-2">
              <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-[#FFD400]/10 animate-spin-slow pointer-events-none" />
              <div className="absolute w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] rounded-full border border-dashed border-[#FFD400]/20 animate-spin-reverse pointer-events-none" />
              <div className="absolute w-[180px] h-[180px] rounded-full bg-[#FFD400]/[0.08] blur-[40px] animate-pulse-glow pointer-events-none" />

              <div className="relative w-full h-full max-w-[320px] sm:max-w-[360px] aspect-[3/4] flex items-center justify-center animate-subtle-float">
                <Image
                  src="/images/why_choose_astronaut_shield.jpg"
                  alt="Cyber Astronaut with Golden Energy Shield"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </div>

            {/* Dynamic Stat & Subtitle */}
            <div className="relative z-10 text-center mb-5">
              <h3 className="text-4xl sm:text-5xl font-black text-[#FFD400] mb-1.5 tracking-tight font-[family-name:var(--font-syne)] animate-glow-pulse">
                <WaveText text={serviceData.hero.stat} className="whitespace-nowrap" />
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-[family-name:var(--font-jakarta)] leading-snug">
                {serviceData.hero.subtitleLine1}
                <br />
                {serviceData.hero.subtitleLine2}
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="relative z-10 w-full py-3.5 px-6 rounded-2xl bg-[#FFD400] text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#ffe033] transition-all group/btn font-[family-name:var(--font-syne)] uppercase tracking-wider shadow-[0_0_25px_rgba(255,212,0,0.3)] hover:shadow-[0_0_40px_rgba(255,212,0,0.55)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-cta-sheen pointer-events-none" />
              <span className="relative z-10">{serviceData.hero.ctaText}</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* ========================================================
              CARD 03 - SLA & Telemetry (Last Column - Top)
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-[#0c0d12] border border-white/10 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 lg:col-start-3 lg:row-start-1">
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="text-2xl sm:text-3xl font-black text-white/40 font-[family-name:var(--font-syne)] tracking-tight">
                  {serviceData.card3.number}
                </div>
                {serviceData.card3.badge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                    <Card3BadgeIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{serviceData.card3.badge}</span>
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-tight font-[family-name:var(--font-syne)] text-white">
                <WaveText text={serviceData.card3.titleLine1} />
                <br />
                <WaveText text={serviceData.card3.titleLine2} delayOffset={11} />
              </h3>

              {/* Service-Specific Points with Unique Icons */}
              <div className="space-y-3 mb-5">
                {serviceData.card3.points.map((pt, pIdx) => {
                  const PtIcon = pt.icon;
                  return (
                    <div key={pIdx} className="flex items-start gap-3 group/pt">
                      <div className="w-7 h-7 rounded-lg bg-[#FFD400]/10 text-[#FFD400] border border-[#FFD400]/25 flex items-center justify-center shrink-0 mt-0.5 group-hover/pt:bg-[#FFD400] group-hover/pt:text-black transition-colors shadow-sm">
                        <PtIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover/pt:text-[#FFD400] transition-colors leading-tight">
                          {pt.title}
                        </h4>
                        {pt.desc && (
                          <p className="text-[11px] text-neutral-400 font-light leading-snug line-clamp-2">
                            {pt.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Glowing Spline Wave Graph with Traveling Data Packet */}
              <div className="h-16 mb-4 relative flex items-center">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 320 80"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="whyChooseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFD400" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#FFD400" stopOpacity="0" />
                    </linearGradient>
                    <filter id="yellowSplineGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FFD400" floodOpacity="0.8" />
                    </filter>
                  </defs>

                  <path
                    d="M 0,55 C 40,55 60,52 90,48 C 120,44 140,28 165,28 C 190,28 205,58 230,58 C 255,58 275,18 295,18 L 320,18 L 320,80 L 0,80 Z"
                    fill="url(#whyChooseGradient)"
                  />

                  <path
                    ref={wavePathRef}
                    d="M 0,55 C 40,55 60,52 90,48 C 120,44 140,28 165,28 C 190,28 205,58 230,58 C 255,58 275,18 295,18 L 320,18"
                    stroke="#FFD400"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#yellowSplineGlow)"
                  />

                  <circle r="3.5" fill="#FFFFFF" filter="url(#yellowSplineGlow)">
                    <animateMotion
                      path="M 0,55 C 40,55 60,52 90,48 C 120,44 140,28 165,28 C 190,28 205,58 230,58 C 255,58 275,18 295,18 L 320,18"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>

            {/* Badges */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFD400] text-black text-[11px] font-bold font-mono tracking-tight shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                <span>{serviceData.card3.metricVal} SLA</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">
                {serviceData.card3.metricLabel}
              </span>
            </div>
          </div>

          {/* ========================================================
              CARD 04 - 24/7 Dedicated Ops (Last Column - Bottom)
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-[#0c0d12] border border-white/10 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 lg:col-start-3 lg:row-start-2 group">
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="text-2xl sm:text-3xl font-black text-white/40 font-[family-name:var(--font-syne)] tracking-tight">
                  {serviceData.card4.number}
                </div>
                {serviceData.card4.badge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono">
                    <Card4BadgeIcon className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>{serviceData.card4.badge}</span>
                  </span>
                )}
              </div>

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight font-[family-name:var(--font-syne)] text-white">
                  <WaveText text={serviceData.card4.titleLine1} />
                  <br />
                  <WaveText text={serviceData.card4.titleLine2} delayOffset={15} />
                </h3>

                {/* Concentric Telemetry Radar Node */}
                <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[#FFD400]/30 animate-ping opacity-30" />
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-[#FFD400]/40 animate-spin-slow" />
                  <div className="relative z-10 w-9 h-9 rounded-full bg-[#FFD400]/15 border border-[#FFD400] flex items-center justify-center shadow-[0_0_15px_rgba(255,212,0,0.3)]">
                    <Headphones className="w-4 h-4 text-[#FFD400]" />
                  </div>
                </div>
              </div>

              {/* Service-Specific Points with Unique Icons */}
              <div className="space-y-3.5 mb-5">
                {serviceData.card4.points.map((pt, pIdx) => {
                  const PtIcon = pt.icon;
                  return (
                    <div key={pIdx} className="flex items-start gap-3 group/pt">
                      <div className="w-7 h-7 rounded-lg bg-[#FFD400]/10 text-[#FFD400] border border-[#FFD400]/25 flex items-center justify-center shrink-0 mt-0.5 group-hover/pt:bg-[#FFD400] group-hover/pt:text-black transition-colors shadow-sm">
                        <PtIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover/pt:text-[#FFD400] transition-colors leading-tight">
                          {pt.title}
                        </h4>
                        {pt.desc && (
                          <p className="text-[11px] text-neutral-400 font-light leading-snug line-clamp-2">
                            {pt.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Clean Live Status Bar matching Card 02 height */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
              <span className="inline-flex items-center gap-1.5 text-neutral-400 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Engineering Dispatch
              </span>
              <span className="text-[#FFD400] text-xs font-mono font-bold">24/7/365</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes textWave {
          0%, 100% {
            transform: translateY(0px);
          }
          20% {
            transform: translateY(-5px);
          }
          40% {
            transform: translateY(2px);
          }
          60% {
            transform: translateY(0px);
          }
        }
        .animate-text-wave {
          display: inline-block;
          will-change: transform;
        }

        @keyframes cursorBlink {
          0%, 45% {
            opacity: 1;
          }
          50%, 95% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-cursor-blink {
          animation: cursorBlink 0.9s infinite;
        }

        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-subtle-float {
          animation: subtleFloat 6s ease-in-out infinite;
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 18s linear infinite;
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-reverse {
          animation: spinReverse 24s linear infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 16px rgba(255, 212, 0, 0.35));
          }
          50% {
            filter: drop-shadow(0 0 32px rgba(255, 212, 0, 0.75));
          }
        }
        .animate-glow-pulse {
          animation: glowPulse 3.5s ease-in-out infinite;
        }

        @keyframes ambientPulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0.95);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }
        .animate-ambient-pulse {
          animation: ambientPulse 8s ease-in-out infinite;
        }

        @keyframes ambientDrift {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.12);
          }
        }
        .animate-ambient-drift {
          animation: ambientDrift 10s ease-in-out infinite;
        }

        @keyframes barShimmer {
          0% {
            transform: translateX(-100%);
          }
          50%, 100% {
            transform: translateX(100%);
          }
        }
        .animate-bar-shimmer {
          animation: barShimmer 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes ctaSheen {
          0%, 25% {
            transform: translateX(-150%) skewX(-20deg);
          }
          65%, 100% {
            transform: translateX(250%) skewX(-20deg);
          }
        }
        .animate-cta-sheen {
          animation: ctaSheen 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
