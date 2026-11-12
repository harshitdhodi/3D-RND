"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import CyberButton from "@/components/CyberButton";
import type { AboutHeroData } from "@/lib/getAboutPageData";

interface AboutRocketScrollBannerProps {
  totalFrames?: number;
  framePathPrefix?: string;
  damping?: number;
  data?: AboutHeroData;
}

export default function AboutRocketScrollBanner({
  totalFrames = 240,
  framePathPrefix = "/about-frames/frame_",
  damping = 0.12,
  data,
}: AboutRocketScrollBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Images cache & tracking
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const lastDrawnIndexRef = useRef(-1);

  // Scroll & animation progress
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);

  // Dynamic Content with safe fallbacks
  const fullTextLine1 = data?.headline_line_1 || "ROOTED IN INNOVATION.";
  const fullTextLine2 = data?.headline_line_2 || "DRIVEN BY POSSIBILITIES.";
  const originBadge = data?.origin_badge || "THE ORIGIN // ABOUT RND";
  const paragraph1 = data?.paragraph_1 || "RND Technosoft is a multidisciplinary technology and creative solutions company bringing ambitious ideas to life. We combine technology solutions, digital marketing, branding and design, and media production to help businesses establish a stronger digital presence, unlock new opportunities and achieve meaningful growth.";
  const paragraph2 = data?.paragraph_2 || "From building intelligent digital platforms to creating memorable brand experiences, we connect strategy, creativity and technology to deliver solutions that make a difference.";
  const quoteText = data?.quote || "We don't just adapt to the digital future. We help businesses create their place in it.";
  const cta1Text = data?.cta_1_text || "EXPLORE OUR ECOSYSTEM";
  const cta1Link = data?.cta_1_link || "/services";
  const cta2Text = data?.cta_2_text || "LET'S COLLABORATE";
  const cta2Link = data?.cta_2_link || "/#contact";

  // Typewriter state for heading (Desktop)
  const [typedCount, setTypedCount] = useState(0);

  // GSAP Number Counter Refs
  const count1Ref = useRef<HTMLSpanElement>(null);
  const count2Ref = useRef<HTMLSpanElement>(null);
  const count3Ref = useRef<HTMLSpanElement>(null);
  const hasAnimatedCountersRef = useRef(false);

  // Format frame number to 4 digits: e.g. 1 -> "0001"
  const getFrameUrl = useCallback(
    (index: number) => {
      const padded = String(Math.max(1, Math.min(totalFrames, index))).padStart(
        4,
        "0"
      );
      return `${framePathPrefix}${padded}.jpg`;
    },
    [framePathPrefix, totalFrames]
  );

  // Draw current frame on canvas (Edge-to-edge cover mode with cache & deduplication)
  const drawFrame = useCallback((frameIndex: number) => {
    // Skip redundant draws if frame hasn't changed
    if (frameIndex === lastDrawnIndexRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame so canvas never flickers or drops
      for (let offset = 1; offset < 40; offset++) {
        const prev = imagesRef.current[frameIndex - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover mode calculation
    const ratio = Math.max(cw / iw, ch / ih);
    const renderWidth = Math.round(iw * ratio);
    const renderHeight = Math.round(ih * ratio);
    const offsetX = Math.round((cw - renderWidth) / 2);
    const offsetY = Math.round((ch - renderHeight) / 2);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, iw, ih, offsetX, offsetY, renderWidth, renderHeight);

    lastDrawnIndexRef.current = frameIndex;
  }, []);

  // Resize canvas accounting for retina / devicePixelRatio (Clamped to 1.5 for peak GPU performance)
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
      1.5
    );

    const targetWidth = Math.floor(rect.width * dpr);
    const targetHeight = Math.floor(rect.height * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      lastDrawnIndexRef.current = -1; // Force redraw on resize
      drawFrame(Math.round(currentFrameRef.current));
    }
  }, [drawFrame]);

  // Preload frames progressively with async decoding (Desktop only to conserve mobile bandwidth)
  useEffect(() => {
    let isCancelled = false;

    const startPreload = () => {
      if (imagesRef.current.length > 0) return;
      imagesRef.current = new Array(totalFrames);

      // 1. Initial Frame 1
      const firstImg = new Image();
      firstImg.decoding = "async";
      firstImg.src = getFrameUrl(1);
      imagesRef.current[0] = firstImg;
      firstImg.onload = () => {
        if (isCancelled) return;
        loadedCountRef.current++;
        resizeCanvas();
        drawFrame(1);
      };

      // 2. Preload keyframes spaced by 6
      const keyframes: number[] = [];
      for (let i = 2; i <= totalFrames; i += 6) {
        keyframes.push(i);
      }
      keyframes.forEach((frameNum) => {
        const img = new Image();
        img.decoding = "async";
        img.src = getFrameUrl(frameNum);
        imagesRef.current[frameNum - 1] = img;
        img.onload = () => {
          if (!isCancelled) loadedCountRef.current++;
        };
      });

      // 3. Stream all remaining frames after brief delay
      const preloadTimer = setTimeout(() => {
        for (let i = 1; i <= totalFrames; i++) {
          if (!imagesRef.current[i - 1]) {
            const img = new Image();
            img.decoding = "async";
            img.src = getFrameUrl(i);
            imagesRef.current[i - 1] = img;
            img.onload = () => {
              if (!isCancelled) loadedCountRef.current++;
            };
          }
        }
      }, 80);

      return () => {
        clearTimeout(preloadTimer);
      };
    };

    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      const cleanup = startPreload();
      return () => {
        isCancelled = true;
        if (cleanup) cleanup();
      };
    } else if (typeof window !== "undefined") {
      const handleResizeCheck = () => {
        if (window.innerWidth >= 1024) {
          startPreload();
          window.removeEventListener("resize", handleResizeCheck);
        }
      };
      window.addEventListener("resize", handleResizeCheck);
      return () => {
        isCancelled = true;
        window.removeEventListener("resize", handleResizeCheck);
      };
    }
  }, [getFrameUrl, resizeCanvas, drawFrame, totalFrames]);

  // Window resize listener
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      resizeCanvas();
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        resizeCanvas();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [resizeCanvas]);

  // Scroll handler calculating exact progress through section & freeze cutoff (Desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.innerWidth < 1024) return;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = -rect.top;
      const p = Math.max(0, Math.min(1, currentScroll / totalScroll));
      setScrollProgress(p);

      // Rocket Flight, Settle & Generous Scroll Delay Curve:
      // Active flight scrubbing takes place during 0.00 to 0.35:
      // - 0.00 to 0.14: Rocket speeds from left to right (Frame 1 to 125)
      // - 0.14 to 0.35: Rocket settles on right side, astronaut turns and waves (Frame 125 to 240)
      // - 0.35 to 0.69: EXTENDED SCROLL DELAY - Section stays pinned and frozen at frame 240 with full text & interactive buttons
      // - 0.69 to 1.00: Next component smoothly slides up and overlaps this section
      let calculatedFrame = 1;
      if (p <= 0.14) {
        calculatedFrame = Math.round(1 + (p / 0.14) * 124);
      } else if (p <= 0.35) {
        const remainingP = (p - 0.14) / (0.35 - 0.14);
        calculatedFrame = Math.round(125 + remainingP * (totalFrames - 125));
      } else {
        // Frozen delay phase before next section overlaps
        calculatedFrame = totalFrames;
      }

      targetFrameRef.current = Math.max(1, Math.min(totalFrames, calculatedFrame));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalFrames]);

  // Smooth lerp frame loop (Apple-style inertia for silky scrubbing on desktop)
  useEffect(() => {
    let animId: number;
    const loop = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024) {
        const diff = targetFrameRef.current - currentFrameRef.current;
        if (Math.abs(diff) > 0.04) {
          currentFrameRef.current += diff * damping;
          drawFrame(Math.round(currentFrameRef.current));
        }
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [damping, drawFrame]);

  // Trigger when rocket arrives on the right (~12% of scroll track)
  const isRocketPassed = scrollProgress >= 0.12;

  // 1. TYPEWRITER EFFECT FOR SECTION HEADING (Desktop)
  useEffect(() => {
    if (!isRocketPassed) {
      const resetTimer = setTimeout(() => setTypedCount(0), 0);
      return () => clearTimeout(resetTimer);
    }

    let count = 0;
    const totalChars = fullTextLine1.length + fullTextLine2.length;
    const timer = setInterval(() => {
      count++;
      setTypedCount(count);
      if (count >= totalChars) {
        clearInterval(timer);
      }
    }, 32);

    return () => clearInterval(timer);
  }, [isRocketPassed, fullTextLine1.length, fullTextLine2.length]);

  const line1Chars = Math.min(typedCount, fullTextLine1.length);
  const line2Chars = Math.max(0, typedCount - fullTextLine1.length);
  const renderedLine1 = fullTextLine1.slice(0, line1Chars);
  const renderedLine2 = fullTextLine2.slice(0, line2Chars);
  const isTypingActive = typedCount > 0 && typedCount < fullTextLine1.length + fullTextLine2.length;

  // 2. GSAP COUNTER ANIMATION FOR METRIC NUMBERS
  useEffect(() => {
    if (!isRocketPassed) {
      hasAnimatedCountersRef.current = false;
      if (count1Ref.current) count1Ref.current.textContent = "0";
      if (count2Ref.current) count2Ref.current.textContent = "0.0";
      if (count3Ref.current) count3Ref.current.textContent = "0";
      return;
    }

    if (hasAnimatedCountersRef.current) return;
    hasAnimatedCountersRef.current = true;

    const targets = { v1: 0, v2: 0, v3: 0 };
    const tween = gsap.to(targets, {
      v1: 250,
      v2: 99.9,
      v3: 60,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        if (count1Ref.current) {
          count1Ref.current.textContent = Math.round(targets.v1).toString();
        }
        if (count2Ref.current) {
          count2Ref.current.textContent = targets.v2.toFixed(1);
        }
        if (count3Ref.current) {
          count3Ref.current.textContent = Math.round(targets.v3).toString();
        }
      },
    });

    return () => {
      tween.kill();
    };
  }, [isRocketPassed]);

  return (
    <section
      id="about-us-scroll-experience"
      ref={containerRef}
      className="relative w-full h-auto lg:h-[420vh] lg:min-h-[420vh] bg-transparent text-white selection:bg-[#FFD400] selection:text-black z-20"
      style={{ contain: "paint" }}
    >
      {/* =========================================================================
          1. TABLET TO SMALL DEVICES (< lg):
          Rocket frames display edge-to-edge as a full-width video with no border
          or border-radius, followed by the content data below.
          ========================================================================= */}
      <div className="block lg:hidden w-full">
        {/* Rocket Frames Shown As Video (Full Width, No Border, No Radius) */}
        <div className="relative w-full aspect-video overflow-hidden bg-black/90">
          <video
            src="/about-us.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          {/* Subtle Ambient Bottom Gradient for seamless section transition */}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#050608] to-transparent pointer-events-none" />
        </div>

        {/* Below Side: About Us Data with standard responsive container padding */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <div className="flex flex-col space-y-4 sm:space-y-5">
            {/* Category Indicator Tag */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium tracking-[0.25em] text-neutral-400 uppercase">
              <span className="text-white font-bold text-sm">01</span>
              <span className="w-8 h-[1px] bg-[#FFD400]" />
              <span className="text-[#FFD400] tracking-[0.3em]">{originBadge}</span>
            </div>

            {/* Primary Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-[-0.01em] leading-[1.24] font-[family-name:var(--font-archia-local)]">
              {fullTextLine1}<br />
              <span className="text-[#FFD400]">{fullTextLine2}</span>
            </h2>

            {/* Core Lead Description */}
            <p className="text-xs sm:text-[14px] text-neutral-300 font-light leading-relaxed">
              {paragraph1}
            </p>

            {paragraph2 && (
              <p className="text-xs sm:text-[14px] text-neutral-300 font-light leading-relaxed">
                {paragraph2}
              </p>
            )}

            {/* Philosophy Quote */}
            {quoteText && (
              <div className="border-l-2 border-[#FFD400] pl-3.5 py-1.5 bg-white/[0.02] rounded-r-lg my-1">
                <p className="text-xs sm:text-sm text-neutral-300 italic font-light leading-relaxed">
                  &ldquo;{quoteText}&rdquo;
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <div className="relative group w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD400]/50 to-[#ffe34d]/10 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
                <CyberButton href={cta1Link} variant="gold" size="md" className="relative w-full justify-center">
                  {cta1Text}
                </CyberButton>
              </div>
              <CyberButton href={cta2Link} variant="dark" size="md" className="w-full justify-center">
                {cta2Text}
              </CyberButton>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. LARGE SCREENS (lg:flex hidden):
          Sticky Fullscreen Stage with Canvas Scrubbing - UNCHANGED
          ========================================================================= */}
      <div className="hidden lg:flex sticky top-0 h-screen w-full overflow-hidden items-center will-change-transform">
        {/* Background Canvas Scrubbing 240 Video Frames */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Ambient Dark Gradient Overlays for Maximum Text Legibility & Section Blending */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Deep Left Shadow: Keeps left side text 100% crisp while rocket is visible on the right */}
          <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-[58%] bg-gradient-to-r from-black/75 via-black/40 via-60% to-transparent" />

          {/* Golden Ambient Glow Accent */}
          <div className="absolute top-1/3 left-10 w-[480px] h-[480px] bg-[#FFD400]/7 rounded-full blur-[150px]" />
        </div>

        {/* Foreground Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full pt-20 sm:pt-24 pb-6 pointer-events-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* LEFT SIDE: ABOUT US DATA */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center max-w-2xl">
              <div
                className={`transition-all duration-700 ease-out flex flex-col space-y-4 sm:space-y-4.5 ${
                  isRocketPassed
                    ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                    : "opacity-0 translate-y-8 pointer-events-none scale-[0.97]"
                }`}
              >
                {/* 1. Category Indicator Tag with Origin Badge */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium tracking-[0.25em] text-neutral-400 uppercase mb-2 sm:mb-2.5">
                    <span className="text-white font-bold text-sm">01</span>
                    <span className="w-8 h-[1px] bg-[#FFD400]" />
                    <span className="text-[#FFD400] tracking-[0.3em]">{originBadge}</span>
                  </div>

                  {/* 2. Primary Headline with Dynamic Futuristic Typewriter Effect */}
                  <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-[-0.01em] leading-[1.24] font-[family-name:var(--font-archia-local)] min-h-[2.35em]">
                    {renderedLine1}
                    {line2Chars > 0 && <br />}
                    <span className="text-[#FFD400]">{renderedLine2}</span>
                    {/* Blinking Cyber Cursor */}
                    {(isTypingActive || isRocketPassed) && (
                      <span
                        className="inline-block w-[3px] sm:w-[4px] h-[0.82em] bg-[#FFD400] ml-1.5 align-middle shadow-[0_0_10px_#FFD400] animate-pulse"
                        aria-hidden="true"
                      />
                    )}
                  </h2>
                </div>

                {/* 3. Core Lead Description */}
                <p className="text-xs sm:text-[14px] text-neutral-300 font-light leading-relaxed">
                  {paragraph1}
                </p>

                {paragraph2 && (
                  <p className="text-xs sm:text-[14px] text-neutral-300 font-light leading-relaxed">
                    {paragraph2}
                  </p>
                )}

                {/* 4. Philosophy Quote */}
                {quoteText && (
                  <div className="border-l-2 border-[#FFD400] pl-3.5 py-1 bg-white/[0.02] rounded-r-lg">
                    <p className="text-xs sm:text-sm text-neutral-300 italic font-light leading-relaxed">
                      &ldquo;{quoteText}&rdquo;
                    </p>
                  </div>
                )}

                {/* 6. Action Buttons with Micro-Animations & Glow Effects */}
                <div className="pt-2 flex flex-nowrap items-center gap-3.5">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD400]/50 to-[#ffe34d]/10 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
                    <CyberButton href={cta1Link} variant="gold" size="lg" className="relative">
                      {cta1Text}
                    </CyberButton>
                  </div>
                  <CyberButton href={cta2Link} variant="dark" size="lg">
                    {cta2Text}
                  </CyberButton>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE: EMPTY TO EXPOSE ASTRONAUT & ROCKET CLEANLY */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-5 min-h-[480px] pointer-events-none" />

          </div>
        </div>
      </div>
    </section>
  );
}
