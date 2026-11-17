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
    phase: "Execute & Bring to Life",
    title: "EXECUTE & BRING TO LIFE",
    tagline: "Where strategy meets action.",
    desc: "This is where our specialists get to work. We develop, design, produce and implement your project using the right tools, expertise and creative thinking to turn approved ideas into reality.",
    deliverable: "PROJECT EXECUTION & DELIVERABLES",
  },
  {
    number: "05",
    stepLabel: "STEP 05",
    phase: "Review & Launch",
    title: "REVIEW & LAUNCH",
    tagline: "Refine every detail. Make your move.",
    desc: "We review the work against agreed objectives, gather feedback, make necessary refinements and prepare everything for delivery, publication or launch. Quality and consistency remain central at every step.",
    deliverable: "APPROVED & READY-TO-LAUNCH DELIVERABLES",
  },
  {
    number: "06",
    stepLabel: "STEP 06",
    phase: "Measure & Evolve",
    title: "MEASURE & EVOLVE",
    tagline: "The next opportunity starts here.",
    desc: "We evaluate outcomes, gather insights and identify opportunities to improve. Through performance reviews, ongoing support and continuous optimisation wherever applicable, we help your business keep moving forward.",
    deliverable: "PERFORMANCE INSIGHTS & GROWTH OPPORTUNITIES",
  },
];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3058";

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

