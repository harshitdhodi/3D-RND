"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberButton from "@/components/CyberButton";

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
  return (
    <span className={`inline-block ${text.endsWith(" ") ? "mr-[0.35em]" : ""} ${className}`}>
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

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const stats = [
    {
      numericValue: 250,
      decimals: 0,
      suffix: "+",
      label: "PROJECTS",
      subLabel: "DELIVERED",
      highlight: "Cloud & Web",
    },
    {
      numericValue: 8,
      decimals: 0,
      suffix: "+",
      label: "Years of",
      subLabel: "Driving Growth",
      highlight: "SLA Guaranteed",
    }, 
    {
      numericValue: 60,
      decimals: 0,
      suffix: "+",
      label: "IT",
      subLabel: "SPECIALISTS",
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
      className="relative z-20 -mt-[100vh] min-h-screen text-white pt-20 sm:pt-28 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-[#FFD400] selection:text-black shadow-[0_-50px_140px_rgba(0,0,0,0.99)] flex items-center border-t border-white/10"
      style={{
        backgroundColor: "#060812",
        backgroundImage:
          "radial-gradient(ellipse 90% 70% at 75% 50%, rgba(20, 29, 54, 0.55) 0%, rgba(8, 11, 22, 0.98) 55%, #04060b 100%)",
      }}
    >
      {/* ----------------- FULL SECTION BACKGROUND: home-about2.png & SPACE ATMOSPHERE ----------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Solid Space-Dark Base to eliminate any canvas bleed-through */}
        <div className="absolute inset-0 bg-[#060812]/98" />

        {/* Ambient Space Glows & Nebula */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[750px] h-[750px] bg-[#1a2544]/35 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FFD400]/6 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 right-10 w-[600px] h-[350px] bg-[#00d2ff]/5 blur-[160px] rounded-full pointer-events-none" />

        {/* Full Background Astronaut & Workstation Asset */}
        <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-end px-4 sm:px-6 lg:px-12 z-[1]">
          <div className="relative w-[500px] sm:w-[610px] lg:w-[740px] xl:w-[860px] 2xl:w-[920px] aspect-[612/408] translate-y-4 sm:translate-y-6 lg:translate-y-2 opacity-95">
            <Image
              src="/home-about2.png"
              alt="RnD Technosoft Astronaut Workstation"
              fill
              priority
              className="object-contain object-right"
              sizes="(max-width: 1024px) 100vw, 920px"
            />
            {/* Subtle Neon Floor Reflection */}
            <div className="absolute -bottom-2 right-12 w-[390px] h-20 bg-[#FFD400]/20 blur-[50px] rounded-full pointer-events-none" />
          </div>
        </div>

        {/* Deep Space Left-to-Right Readability Vignette */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#04060b] via-[#060812]/95 via-50% to-transparent z-[2] pointer-events-none" />

        {/* Top & Bottom Seamless Space Edge Feathering */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#04060b] to-transparent z-[3] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#04060b] to-transparent z-[3] pointer-events-none" />
      </div>

  

      {/* ----------------- MAIN ABOUT US CONTENT (LEFT-ALIGNED OVER BACKGROUND) ----------------- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO CONTENT, STATS & VISION ================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8 max-w-3xl">
            
            {/* Category Indicator Tag */}
            <div>
              <div className="inline-flex items-center gap-3 text-xs font-mono font-medium tracking-[0.25em] text-neutral-400 uppercase mb-4">
               
                <span className="w-6 h-[1px] bg-[#FFD400]" />
                <span className="text-[#FFD400] tracking-[0.3em]">Who We Are</span>
              </div>

              {/* Primary Headline with Undulating Wave Animation (Clean 2-line layout) */}
              <h2
                ref={headlineRef}
                data-no-gsap
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[45px] font-light text-white tracking-tight leading-[1.18] font-[family-name:var(--font-archia)] mb-5"
              >  
                <WaveText text="THINK BIGGER." className="block mb-1 sm:mb-1.5" delayOffset={0} />
                <WaveText text="BUILD SMARTER. GO FURTHER." className="block sm:whitespace-nowrap" delayOffset={12} />
              </h2>

              {/* Body Paragraph */}
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-4">
                <strong className="text-white font-medium">RND Technosoft</strong> is where technology meets creativity and innovation turns into measurable business progress. We bring together web and app development, custom software solutions, digital marketing, branding and media production to help businesses build, evolve and compete in a rapidly changing digital world.
              </p>
              
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                From developing intelligent digital solutions to creating powerful brand experiences, we combine strategic thinking, technical expertise and creative execution to turn ambitious ideas into meaningful outcomes.
              </p>
            </div>

            {/* Bottom Key Metrics (Divided into 3 Columns by Thin Vertical Grid Lines) */}
            <div className="pt-6 sm:pt-8 border-t border-white/[0.12]">
              <div className="grid grid-cols-3 divide-x divide-white/[0.12] -mx-2 sm:-mx-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="px-2 sm:px-4 group cursor-default transition-all duration-300"
                  >
                    {/* Number Metric with Scroll Counter */}
                    <div className="text-2xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-bold text-white tracking-tight leading-none mb-2 group-hover:text-[#FFD400] transition-colors duration-300 font-mono">
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

            {/* ----------------- ATTRACTIVE "EXPLORE MORE" ACTION BUTTON ----------------- */}
            <div className="pt-3">
              <CyberButton href="/services" size="lg">
                 EXPLORE OUR STORY
              </CyberButton>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (EMPTY TO EXPOSE THE ASTRONAUT & WORKSTATION IN BACKGROUND) ================= */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[460px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
}

