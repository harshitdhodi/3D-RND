"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  number: string;
  stepLabel: string;
  phase: string;
  title: string;
  tagline: string;
  desc: string;
  deliverable: string;
  kpis?: string[];
}

/**
 * WaveText component renders text character-by-character with staggered delays
 * producing a smooth, fluid undulating sine-wave ripple across titles.
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
            animationDelay: `${(delayOffset + i) * 0.06}s`,
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export default function CosmicProcessSection({
  className = "py-24 sm:py-32",
  badge = "// THE RND WAY | OUR METHODOLOGY",
  stageLabel = "// 6 STAGES OF OUR WORK",
  title = "THE PROCESS BEHIND",
  highlightTitle = "EVERY POSSIBILITY.",
  description = "Every great outcome starts with an idea. At RND Technosoft, we follow a collaborative, insight-driven approach that brings strategy, technology and creativity together. ",
}: {
  className?: string;
  badge?: string;
  stageLabel?: string;
  title?: string;
  highlightTitle?: string;
  description?: string;
} = {}) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const steps: ProcessStep[] = [
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

  // GSAP Scroll Animations: Replays fresh on scroll top-to-bottom
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;
    const cards = cardsContainerRef.current?.querySelectorAll(".process-stair-card");

    if (!section || !container) return;

    const ctx = gsap.context(() => {
      // 1. Top Metadata Bar Entrance
      gsap.fromTo(
        ".process-meta-bar",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Giant Typography Title Letter Wave Animation on Scroll
      const titleChars = section.querySelectorAll(".process-title-reveal .animate-text-wave");
      if (titleChars && titleChars.length > 0) {
        const titleTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".process-title-reveal",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        titleTl
          .fromTo(
            titleChars,
            { opacity: 0, y: 45, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.025,
              ease: "back.out(1.8)",
            }
          )
          .to(titleChars, {
            y: -14,
            duration: 0.32,
            stagger: 0.02,
            ease: "sine.out",
          })
          .to(titleChars, {
            y: 0,
            duration: 0.32,
            stagger: 0.02,
            ease: "sine.inOut",
            onComplete: () => {
              gsap.set(titleChars, { clearProps: "all" });
            },
          });
      }

      // 3. Frame entrance animation
      gsap.fromTo(
        container,
        {
          opacity: 0,
          y: 50,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // 4. Cascading Staircase Steps Entrance & Wave Roll Animation
      if (cards && cards.length > 0) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Entrance pop up
        tl.fromTo(
          cards,
          {
            opacity: 0,
            y: 65,
            scaleY: 0.85,
            transformOrigin: "bottom center",
          },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
          }
        )
        // Fluid undulating wave roll across all staircase cards!
        .to(cards, {
          y: -16,
          duration: 0.35,
          stagger: {
            each: 0.09,
            repeat: 1,
            yoyo: true,
          },
          ease: "sine.inOut",
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className={`relative w-full px-4 sm:px-8 lg:px-12 ${className} bg-transparent text-white overflow-hidden border-t border-white/5 selection:bg-[#FFD400] selection:text-black`}
    >
      {/* Background Ambient Galaxy Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#FFD400]/4 blur-[180px] rounded-full pointer-events-none" />

      {/* Outer Max Width Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= TOP METADATA BAR (Matching image header) ================= */}
        <div className="process-meta-bar flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 font-mono text-xs text-neutral-400 uppercase tracking-widest">
          <div className="flex items-center space-x-3">
            <span className="text-[#FFD400] font-bold text-sm">➔</span>
            <span className="text-[#FFD400] font-semibold">{badge}</span>
          </div>

         
        </div>

        {/* ================= MAIN FRAMED CYBER CONTAINER ================= */}
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl bg-[#08090e] border border-white/15 p-6 sm:p-8 lg:p-10 xl:p-12 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
        >
          {/* Subtle Grid Lines Background */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Top Left Header Label Inside Frame */}
          <div className="flex items-center justify-between mb-8 sm:mb-12 relative z-10">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFD400]/80">
              {stageLabel}
            </div>
          </div>

          {/* Top Section: Giant Typography + Process Overview Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 sm:mb-16 relative z-10">
            {/* Left: Giant Bold Syne Heading matching section headers */}
            <div className="lg:col-span-7">
              <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white uppercase tracking-tight leading-[1.08] select-none">
                {title}{" "}
                <br className="hidden sm:inline" />
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.4)]">
                  {highlightTitle}
                </span>
              </h2>
            </div>

            {/* Right: Architectural Insight Paragraph */}
            <div className="lg:col-span-5 pt-1 lg:pt-2">
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed font-[family-name:var(--font-jakarta)] border-l-2 border-[#FFD400]/50 pl-5">
                {description}
              </p>
            </div>
          </div>

          {/* ================= THE CASCADING STAIRCASE STEPS DISPLAY ================= */}
          <div ref={cardsContainerRef} className="relative z-10 mb-8 sm:mb-10 w-full overflow-x-auto lg:overflow-visible no-scrollbar">
            
            {/* Desktop Cascading Staircase: Compact & Content-Based */}
            <div className="hidden lg:flex items-end gap-2.5 xl:gap-3.5 w-full min-h-[330px] xl:min-h-[352px]">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const dist = Math.abs(idx - activeStep);

                // Compact, content-based staircase heights (increased by 5%)
                let heightStyle = "h-[142px] xl:h-[152px]";
                let flexStyle = "flex-1";

                if (dist === 0) {
                  heightStyle = "h-[326px] xl:h-[347px]";
                  flexStyle = "flex-[3.5] xl:flex-[3.8] min-w-[340px] xl:min-w-[380px]";
                } else if (dist === 1) {
                  heightStyle = "h-[263px] xl:h-[278px]";
                } else if (dist === 2) {
                  heightStyle = "h-[221px] xl:h-[231px]";
                } else if (dist === 3) {
                  heightStyle = "h-[189px] xl:h-[200px]";
                } else if (dist === 4) {
                  heightStyle = "h-[163px] xl:h-[173px]";
                } else {
                  heightStyle = "h-[142px] xl:h-[152px]";
                }

                // Progressive amber/gold tones stepping down from active
                const toneClasses = [
                  "bg-[#FFD400] text-black border-[#FFD400]", // Dist 0 (Active)
                  "bg-[#e0b800] text-black/90 border-[#e0b800]", // Dist 1
                  "bg-[#bfa000] text-black/90 border-[#bfa000]", // Dist 2
                  "bg-[#8c7500] text-white border-[#8c7500]",    // Dist 3
                  "bg-[#665400] text-white/90 border-[#665400]", // Dist 4
                  "bg-[#403500] text-white/80 border-[#403500]", // Dist 5
                ];

                const cardTone = toneClasses[dist] || "bg-[#332a00] text-white/70 border-[#332a00]";

                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                    className={`process-stair-card cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col justify-between p-5 xl:p-6 rounded-2xl relative select-none border group overflow-hidden ${flexStyle} ${heightStyle} ${
                      isActive
                        ? "bg-[#FFD400] text-black border-2 border-[#FFD400] shadow-[0_15px_40px_rgba(255,212,0,0.35)]"
                        : `${cardTone} hover:opacity-100 opacity-90 hover:-translate-y-1.5`
                    }`}
                  >
                    {/* Top Step Number Label */}
                    <div>
                      <div className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.25em] text-black/75 uppercase leading-none mb-2">
                        <WaveText text={step.stepLabel} delayOffset={idx * 3} />
                      </div>

                      {/* Title: Show full title, tagline & desc when active, clean title when collapsed */}
                      {isActive ? (
                        <div className="space-y-2">
                          <h3 className="font-bold font-[family-name:var(--font-syne)] text-xl sm:text-2xl xl:text-[24px] text-black uppercase leading-tight tracking-tight">
                            <WaveText text={step.title} />
                          </h3>
                          <p className="text-xs sm:text-[13px] font-medium text-black/85 font-mono leading-snug">
                            {step.tagline}
                          </p>
                          <p className="text-xs sm:text-[13.5px] xl:text-[16px] font-medium text-black/85 font-mono leading-snug">
                            {step.desc}
                          </p>
                        </div>
                      ) : (
                        <div className="font-bold text-xs uppercase opacity-85 mt-1.5 leading-snug">
                          <WaveText text={step.title} delayOffset={idx * 2} />
                        </div>
                      )}
                    </div>

                    
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Accordion View (Responsive fallback) */}
            <div className="lg:hidden space-y-3">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className={`rounded-xl p-5 border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#FFD400] text-black border-[#FFD400] shadow-lg"
                        : "bg-white/[0.04] text-white border-white/10 hover:bg-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-[family-name:var(--font-syne)] font-bold text-base tracking-tight uppercase">
                        <WaveText text={`${step.stepLabel} // ${step.title}`} />
                      </span>
                      <span className="font-mono text-xs font-bold">0{idx + 1}</span>
                    </div>

                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-black/15 space-y-2">
                        <p className="text-xs sm:text-[13px] font-medium text-black/85 font-mono leading-snug">
                          {step.tagline}
                        </p>
                        <p className="text-xs sm:text-[13.5px] leading-relaxed font-normal !font-normal text-black/80 font-[family-name:var(--font-jakarta)]">
                          {step.desc}
                        </p>
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-black/10">
                          <span className="text-[10px] font-mono font-bold uppercase text-black/90">
                            OUTPUT: {step.deliverable}
                          </span>
                          <Link
                            href="#contact"
                            className="px-3 py-1 bg-black text-[#FFD400] text-[11px] font-mono font-bold uppercase rounded inline-flex items-center gap-1"
                          >
                            <span>MORE DETAIL</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= BOTTOM BAR: BACK / NEXT BUTTONS + HUGE "OUR APPROACH" ================= */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 relative z-10">
            {/* Left: Back / Next Navigation Buttons (Exact as reference design) */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors flex items-center space-x-1 border border-white/10"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                <span>BACK</span>
              </button>

              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-lg bg-[#FFD400] hover:bg-[#ffe033] text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center space-x-1 shadow-[0_0_15px_rgba(255,212,0,0.3)]"
              >
                <span>NEXT</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>

              <span className="hidden sm:inline-block ml-4 font-mono text-xs text-neutral-400">
                0{activeStep + 1} / 0{steps.length}
              </span>
            </div>

            {/* Right: "OUR APPROACH" Massive Typography (Exact as in image footer) */}
            <div className="font-[family-name:var(--font-syne)] font-bold text-xl sm:text-3xl lg:text-4xl tracking-widest text-white/30 uppercase select-none pointer-events-none">
              OUR APPROACH
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
      `}</style>
    </section>
  );
}
