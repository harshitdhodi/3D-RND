"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroScrollFrames from "@/components/HeroScrollFrames";
import { HeroData, DEFAULT_HERO_DATA } from "@/lib/getHeroData";

export interface HeroSectionProps {
  initialData?: HeroData;
}

export default function HeroSection({ initialData = DEFAULT_HERO_DATA }: HeroSectionProps) {
  const hero = initialData || DEFAULT_HERO_DATA;
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse spotlight & reticle cursor tracking
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  // Scroll tracking state [0, 1] representing the entire hero container scroll journey
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const accentColor = hero.accent_color || "#FFD400";
  const scrollHeight = hero.scroll_height_vh || 600;

  // Setup GSAP ScrollTrigger pinning & progress scrubbing
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage) return;

    // Pin the hero stage across the entire container scroll journey until the bottom reaches the top of the viewport.
    // pinSpacing: false ensures that the next component (AboutUsSection) naturally scrolls directly OVER the pinned hero!
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      pin: stage,
      pinSpacing: false,
      anticipatePin: 1,
      scrub: true,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimer);
      trigger.kill();
    };
  }, [scrollHeight]);

  // Compute frameProgress from scrollProgress:
  // 1. Scrub phase (0 to scrubEnd): Smooth scrubbing of frames 1 -> totalFrames (239)
  // 2. Hold / pause phase (scrubEnd to overlapStart): Hero stays frozen on frame 239 ("taking few moments")
  // 3. Overlap phase (overlapStart to 1.0): Next component (AboutUsSection) smoothly slides over the frozen hero
  const overlapStart = Math.max(0.65, (scrollHeight - 100) / scrollHeight);
  // Dedicate ~16% of the pre-overlap journey to holding on the completed final frame
  const scrubEnd = overlapStart * 0.84;

  const frameProgress =
    scrollProgress <= 0
      ? 0
      : scrollProgress >= scrubEnd
      ? 1
      : scrollProgress / scrubEnd;

  return (
    <div
      id="home"
      ref={containerRef}
      style={{ height: `${scrollHeight}vh` }}
      className="relative w-full bg-transparent z-10"
    >
      {/* Pinned Stage during the entire scroll journey */}
      <div
        ref={stageRef}
        className="sticky top-0 h-[100dvh] w-full max-w-full overflow-hidden flex flex-col justify-between z-10 will-change-transform"
      >
        {/* Full-width Video Canvas with dark overlay and height scale */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-auto w-full h-full">
          <HeroScrollFrames
            scrollProgress={frameProgress}
            className="w-full h-full opacity-100"
            totalFrames={hero.total_frames || 239}
            framePathPrefix={hero.frame_path_prefix || "/hero-frames/frame_"}
            damping={hero.damping ?? 0.12}
            showVignette={false}
            overlayOpacity={hero.overlay_opacity ?? 0.05}
            heightScale={hero.height_scale ?? 1.10}
          />
        </div>

        {/* ----------------- INTERACTIVE STAGE: INTRO CONTENT ----------------- */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-10 w-full flex-1 flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-4"
        >
          {/* Interactive Radial Spotlight tracking mouse cursor */}
          {isHovered && scrollProgress <= 0.01 && (
            <div
              className="absolute pointer-events-none inset-0 transition-opacity duration-300 z-10 opacity-70"
              style={{
                background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 212, 0, 0.08), transparent 75%)`,
              }}
            />
          )}

          {/* Unique Cyber Floating Cursor Pointer Animation */}
          {isHovered && scrollProgress <= 0.01 && (
            <div
              className="absolute pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out hidden sm:block"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full shadow-[0_0_15px_currentColor]"
                style={{ backgroundColor: accentColor, color: accentColor }}
              />
              <div
                className="absolute -top-3.5 -left-3.5 w-9 h-9 rounded-full border animate-spin"
                style={{ borderColor: `${accentColor}66`, animationDuration: "7s" }}
              >
                <div
                  className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full shadow-[0_0_6px_currentColor]"
                  style={{ backgroundColor: accentColor, color: accentColor }}
                />
              </div>
              <div
                className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full border"
                style={{ borderColor: `${accentColor}80` }}
              />
            </div>
          )}

          {/* INITIAL INTRO TEXT (Fades out completely on scroll - No text during scroll) */}
          <div
            className={`absolute inset-0 flex flex-col justify-between select-none z-10 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-16 sm:py-20 w-full max-w-[1920px] mx-auto transition-all duration-500 ease-out ${
              scrollProgress <= 0.01
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {/* Top Micro-Tag */}
            {hero.show_badge && hero.badge_text && (
              <div className="flex justify-center pt-2 sm:pt-4">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] sm:text-xs font-mono font-medium tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(255,212,0,0.15)]"
                  style={{ color: accentColor }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{hero.badge_text}</span>
                </div>
              </div>
            )}

            {/* Middle: Grand Split Title - Positioned on left side of astronaut & right side of laptop */}
            <div className="flex items-center justify-between w-full my-auto pointer-events-none translate-y-8 sm:translate-y-[142%] md:translate-y-[148%] lg:translate-y-[155%] xl:translate-y-[170%] px-2 sm:px-3 md:px-4">
              <div className="flex items-center justify-start z-10">
                <h1
                  data-no-gsap
                  style={{
                    color: accentColor,
                    textShadow:
                      "0 4px 15px rgba(0, 0, 0, 0.95), 0 12px 40px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.95)",
                  }}
                  className="text-[1.4rem] sm:text-[5.8vw] md:text-[4.8vw] lg:text-[62px] xl:text-[6rem] 2xl:text-[90px] font-[family-name:var(--font-syne)] font-bold tracking-tight leading-none uppercase select-none drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] whitespace-nowrap"
                >
                  {hero.title_line_1 || "DIGITAL"}
                </h1>
              </div>
              <div className="flex items-center justify-end z-10">
                <h1
                  data-no-gsap
                  style={{
                    color: accentColor,
                    textShadow:
                      "0 4px 15px rgba(0, 0, 0, 0.95), 0 12px 40px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.95)",
                  }}
                  className="text-[1.4rem] sm:text-[5.8vw] md:text-[4.8vw] lg:text-[62px] xl:text-[6rem] 2xl:text-[90px] font-[family-name:var(--font-syne)] font-bold tracking-tight leading-none uppercase select-none drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] whitespace-nowrap text-right"
                >
                  {hero.title_line_2 || "AGENCY"}
                </h1>
              </div>
            </div>
          </div>

          {/* SCROLL HINT (Only visible at initial top state, fades immediately on scroll) */}
          <div
            className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none transition-all duration-500 ${
              scrollProgress <= 0.01
                ? "opacity-90 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-0.5">
              {hero.scroll_hint_text || "Scroll To Scrub Mission"}
            </span>
            <ChevronDown
              className="w-3.5 h-3.5 animate-bounce"
              style={{ color: accentColor }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
