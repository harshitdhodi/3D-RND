"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberButton from "@/components/CyberButton";
import { AboutData, DEFAULT_ABOUT_DATA } from "@/lib/getAboutData";

export interface AboutUsSectionProps {
  initialData?: AboutData;
}

/**
 * WaveText component renders text character-by-character with staggered delays
 * producing a smooth undulating sine-wave ripple across the title.
 * Preserves clear word spacing using word-level segmentation.
 */
function WaveText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) {
  const words = text.trim().split(" ");
  const baseDisplay = className.includes("block") && !className.includes("inline-block") ? "" : "inline-block";
  return (
    <span className={`${baseDisplay} ${text.endsWith(" ") ? "mr-[0.35em]" : ""} ${className}`.trim()}>
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          className={`inline-block whitespace-nowrap ${
            wordIdx < words.length - 1 ? "mr-[0.35em]" : ""
          }`}
        >
          {word.split("").map((char, charIdx) => (
            <span
              key={charIdx}
              className="wave-char inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

/**
 * ScrollCounter smoothly animates a number from 0 to target on scroll into view
 * and resets on scroll-back so it counts up every time the user reaches the section.
 */
function ScrollCounter({
  target,
  decimals = 0,
  suffix = "",
}: {
  target: number;
  decimals?: number;
  suffix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const counterObj = { current: 0 };

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      toggleActions: "play none none none",
      onEnter: () => {
        counterObj.current = 0;
        gsap.to(counterObj, {
          current: target,
          duration: 2.0,
          ease: "power2.out",
          onUpdate: () => {
            setVal(counterObj.current);
          },
        });
      },
    });

    return () => st.kill();
  }, [target]);

  const formatted =
    decimals > 0 ? val.toFixed(decimals) : Math.floor(val);

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

export default function AboutUsSection({ initialData = DEFAULT_ABOUT_DATA }: AboutUsSectionProps) {
  const about = initialData || DEFAULT_ABOUT_DATA;
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const stats = [
    {
      numericValue: about.stat_1_value,
      decimals: 0,
      suffix: about.stat_1_suffix || "+",
      label: about.stat_1_label,
      subLabel: about.stat_1_sublabel,
      highlight: "Cloud & Web",
    },
    {
      numericValue: about.stat_2_value,
      decimals: 0,
      suffix: about.stat_2_suffix || "+",
      label: about.stat_2_label,
      subLabel: about.stat_2_sublabel,
      highlight: "SLA Guaranteed",
    }, 
    {
      numericValue: about.stat_3_value,
      decimals: 0,
      suffix: about.stat_3_suffix || "+",
      label: about.stat_3_label,
      subLabel: about.stat_3_sublabel,
      highlight: "In-House Squads",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headline = headlineRef.current;
    if (!headline) return;

    const chars = headline.querySelectorAll<HTMLElement>(".wave-char");
    if (chars.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headline,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // One-time wave entrance: rise and glow gold on crest, then settle to baseline
      tl.fromTo(
        chars,
        { opacity: 0, y: 30, color: "#ffffff" },
        {
          opacity: 1,
          y: -10,
          color: "#FFD400",
          duration: 0.45,
          stagger: 0.02,
          ease: "power2.out",
        }
      ).to(
        chars,
        {
          y: 0,
          color: "inherit",
          duration: 0.35,
          stagger: 0.02,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(chars, { clearProps: "all" });
          },
        },
        "<0.15"
      );
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-20 mt-0 min-h-screen text-white py-20 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden selection:bg-[#FFD400] selection:text-black shadow-[0_-50px_140px_rgba(0,0,0,0.99)] flex items-center border-t border-white/10"
      style={{
        backgroundColor: "#060812",
        backgroundImage:
          "radial-gradient(ellipse 90% 70% at 75% 50%, rgba(20, 29, 54, 0.55) 0%, rgba(8, 11, 22, 0.98) 55%, #04060b 100%)",
      }}
    >
      {/* ----------------- FULL SECTION BACKGROUND: SPACE ATMOSPHERE & NEBULA ----------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Solid Space-Dark Base to eliminate any canvas bleed-through */}
        <div className="absolute inset-0 bg-[#060812]/98" />

        {/* Ambient Space Glows & Nebula */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[750px] h-[750px] bg-[#1a2544]/35 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FFD400]/6 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 right-10 w-[600px] h-[350px] bg-[#00d2ff]/5 blur-[160px] rounded-full pointer-events-none" />

        {/* Top & Bottom Seamless Space Edge Feathering */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#04060b] to-transparent z-[3] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#04060b] to-transparent z-[3] pointer-events-none" />
      </div>

      {/* ----------------- MAIN ABOUT US CONTENT ----------------- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* ================= UPPER TITLE HEADER ================= */}
        <div className="mb-8 sm:mb-10">
          {/* Category Indicator Tag */}
          <div className="inline-flex items-center gap-3 text-xs font-mono font-medium tracking-[0.25em] text-neutral-400 uppercase mb-3 sm:mb-4">
            <span className="w-6 h-[1px] bg-[#FFD400]" />
            <span className="text-[#FFD400] tracking-[0.3em]">{about.badge_text}</span>
          </div>

          {/* Primary Headline (Clean 2-line layout at top) */}
          <h2
            ref={headlineRef}
            data-no-gsap
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-light text-white tracking-tight leading-[1.15] font-[family-name:var(--font-archia)]"
          >  
            <span className="block mb-1 sm:mb-2">
              <WaveText text={about.headline_line_1} delayOffset={0} />
            </span>
            <span className="block">
              <WaveText text={about.headline_line_2} className="mr-3 sm:mr-4" delayOffset={12} />
              <WaveText text={about.headline_line_3} delayOffset={27} />
            </span>
          </h2>
        </div>

        {/* ================= SIDE-BY-SIDE GRID: DESCRIPTION (LEFT) & LARGER IMAGE (RIGHT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: DESCRIPTION, STATS & CTA ================= */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-6">
            
            {/* Body Paragraphs */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {about.paragraph_1}
              </p>
              
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {about.paragraph_2}
              </p>
            </div>

            {/* Key Metrics (3 Columns with Counters) */}
            <div className="pt-4 sm:pt-5 border-t border-white/[0.12]">
              <div className="grid grid-cols-3 divide-x divide-white/[0.12] -mx-2 sm:-mx-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="px-2 sm:px-4 group cursor-default transition-all duration-300"
                  >
                    {/* Number Metric with Scroll Counter */}
                    <div className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[40px] font-bold text-white tracking-tight leading-none mb-1.5 group-hover:text-[#FFD400] transition-colors duration-300 font-mono">
                      <ScrollCounter
                        target={stat.numericValue}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                      />
                    </div>

                    {/* Label */}
                    <div className="text-[10px] sm:text-[11px] lg:text-xs font-semibold tracking-[0.14em] uppercase text-neutral-400 group-hover:text-neutral-200 transition-colors">
                      <span className="block">{stat.label}</span>
                      <span className="block text-neutral-500 group-hover:text-[#FFD400]/90">
                        {stat.subLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* "EXPLORE OUR STORY" Action Button */}
            <div className="pt-1 sm:pt-2">
              <CyberButton href={about.cta_link || "/about-us"} size="md">
                {about.cta_text || "EXPLORE OUR STORY"}
              </CyberButton>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: ASTRONAUT & WORKSTATION IMAGE (INCREASED SIZE) ================= */}
          <div className="lg:col-span-6 xl:col-span-7 flex items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[580px] sm:max-w-[640px] lg:max-w-[720px] xl:max-w-[800px] aspect-[512/408] transition-transform duration-500 hover:scale-[1.03] lg:scale-105 xl:scale-110 origin-center lg:origin-right">
              <Image
                src={about.image || "/office/about.png"}
                alt={about.altname || "RnD Technosoft Astronaut Workstation"}
                title={about.imgtitle || undefined}
                fill
                priority
                className="object-contain object-center lg:object-right filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 720px, 800px"
              />
              {/* Soft Ambient Radial Glow Behind Workstation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[280px] bg-[#FFD400]/8 blur-[85px] rounded-full pointer-events-none" />
              {/* Subtle Neon Floor Reflection */}
              <div className="absolute -bottom-4 right-1/4 w-[380px] h-16 bg-[#FFD400]/25 blur-[50px] rounded-full pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

