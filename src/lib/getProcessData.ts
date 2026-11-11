export interface ProcessStepItem {
  number: string;
  stepLabel: string;
  phase: string;
  title: string;
  tagline: string;
  desc: string;
  deliverable: string;
  kpis?: string[];
}

export const DEFAULT_PROCESS_DATA: ProcessStepItem[] = [
  {
    number: "01",
    stepLabel: "STEP 01",
    phase: "Discover & Understand",
    title: "DISCOVER & UNDERSTAND",
    tagline: "Every great solution starts with listening.",
    desc: "We get to know your business, understand your vision, identify your challenges and explore your audience, industry and objectives. This helps us uncover opportunities and understand what success looks like for you.",
    deliverable: "BUSINESS INSIGHTS & PROJECT BRIEF",
  },
  {
    number: "02",
    stepLabel: "STEP 02",
    phase: "Research & Strategise",
    title: "RESEARCH & STRATEGISE",
    tagline: "Turn insights into a winning direction.",
    desc: "We study the market, evaluate possibilities and develop a tailored strategy based on your goals. Whether it's technology, marketing, branding or media, we define the right approach, priorities and roadmap.",
    deliverable: "CUSTOM STRATEGY & ACTION PLAN",
  },
  {
    number: "03",
    stepLabel: "STEP 03",
    phase: "Conceptualise & Create",
    title: "CONCEPTUALISE & CREATE",
    tagline: "Ideas take shape. Possibilities become tangible.",
    desc: "Our creative and technical teams transform the strategy into concepts, experiences and solutions. From creative direction and visual identities to campaign concepts, digital experiences and production planning, every detail serves a purpose.",
    deliverable: "CONCEPTS, CREATIVE DIRECTION & APPROVALS",
  },
  {
    number: "04",
    stepLabel: "STEP 04",
    phase: "Engineer & Build",
    title: "ENGINEER & BUILD",
    tagline: "Precision execution. Intelligent development.",
    desc: "Where execution comes to life. Our developers write clean, scalable code; our designers craft distinctive brand assets; our media specialists produce high-impact visuals; and our marketers execute targeted campaigns.",
    deliverable: "CODEBASE, BRAND ASSETS & CAMPAIGN BUILDS",
  },
  {
    number: "05",
    stepLabel: "STEP 05",
    phase: "Test & Launch",
    title: "TEST & LAUNCH",
    tagline: "Rigorous validation. Seamless deployment.",
    desc: "Before anything goes live, we test thoroughly across devices, platforms, environments and performance benchmarks. From QA testing and campaign tracking to production reviews and final approvals, we ensure everything works as intended.",
    deliverable: "100% VALIDATED STAGING & PRODUCTION GO-LIVE",
  },
  {
    number: "06",
    stepLabel: "STEP 06",
    phase: "Grow & Optimise",
    title: "GROW & OPTIMISE",
    tagline: "Continuous evolution. Long-term value.",
    desc: "Launch is just the beginning. We provide continuous support, analyze performance, optimize campaigns, refine user experiences and identify new growth avenues to keep your business ahead in an ever-evolving digital landscape.",
    deliverable: "PERFORMANCE ANALYTICS & ONGOING ROADMAP",
  },
];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3014";

export async function getProcessData(): Promise<ProcessStepItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/data/cosmic_process`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return DEFAULT_PROCESS_DATA;
    }

    const json = await res.json();
    const list = Array.isArray(json?.data) ? json.data : [];
    if (list.length === 0) return DEFAULT_PROCESS_DATA;

    const sorted = [...list].sort(
      (a: any, b: any) => (a.order || 0) - (b.order || 0)
    );

    return sorted.map((doc: any, idx: number) => ({
      number: doc.number || String(idx + 1).padStart(2, "0"),
      stepLabel: doc.step_label || doc.stepLabel || `STEP ${String(idx + 1).padStart(2, "0")}`,
      phase: doc.phase || "",
      title: doc.title || "",
      tagline: doc.tagline || "",
      desc: doc.desc || "",
      deliverable: doc.deliverable || "",
      kpis: doc.kpis || [],
    }));
  } catch (err) {
    console.warn("Falling back to default Cosmic Process data:", err);
    return DEFAULT_PROCESS_DATA;
  }
}

