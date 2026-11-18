"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface CreativeShowreelSectionProps {
  totalFrames?: number;
  framePathPrefix?: string;
  damping?: number;
}

export default function CreativeShowreelSection({
  totalFrames = 240,
  framePathPrefix = "/office-frames/frame_",
  damping = 0.12, // Silk-smooth Apple-grade inertia
}: CreativeShowreelSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isInitialReady, setIsInitialReady] = useState(false);

  // Images cache & tracking
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const lastDrawnIndexRef = useRef(-1);

  // Scroll targets & physics values for ultra-smooth 60/120fps scrubbing
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);
  const animFrameRef = useRef<number | null>(null);

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

  // GPU-accelerated frame drawing onto HTML5 Canvas with cover-mode & nearest-frame fallback
  const drawFrame = useCallback((frameIndex: number) => {
    // Avoid redundant canvas repaints if frame has not changed
    if (frameIndex === lastDrawnIndexRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame so canvas never flickers, stutters, or goes blank
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

    // Edge-to-edge cover calculation (100% viewport coverage, no letterboxing)
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

  // Responsive Canvas Sizing (accounts for retina display / devicePixelRatio)
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = containerRef.current;
    const width =
      (container && container.clientWidth > 0 ? container.clientWidth : 0) ||
      (typeof window !== "undefined" ? window.innerWidth : 1920);
    const height =
      (typeof window !== "undefined" ? window.innerHeight : 1080);
    const dpr = Math.min(
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
      1.5 // Optimal DPI clamp for peak 60-120fps GPU performance
    );

    const targetWidth = Math.floor(width * dpr);
    const targetHeight = Math.floor(height * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      lastDrawnIndexRef.current = -1; // Force redraw on resize
      drawFrame(Math.round(currentFrameRef.current));
    }
  }, [drawFrame]);

  // Progressive Preloading Pipeline:
  // 1. Frame 1 (Instant Paint)
  // 2. Keyframes spaced every 8 frames for rapid scrubbing readiness
  // 3. Complete streaming of all remaining frames
  useEffect(() => {
    let isCancelled = false;
    imagesRef.current = new Array(totalFrames);

    // 1. First frame (instant paint)
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1);
    imagesRef.current[0] = firstImg;
    firstImg.onload = () => {
      if (isCancelled) return;
      loadedCountRef.current++;
      setIsInitialReady(true);
      resizeCanvas();
      drawFrame(1);
    };

    // 2. Preload keyframes spaced by 8
    const keyframes: number[] = [];
    for (let i = 2; i <= totalFrames; i += 8) {
      keyframes.push(i);
    }

    keyframes.forEach((frameNum) => {
      const img = new Image();
      img.src = getFrameUrl(frameNum);
      imagesRef.current[frameNum - 1] = img;
      img.onload = () => {
        if (!isCancelled) loadedCountRef.current++;
      };
    });

    // 3. Background stream all remaining frames
    const preloadTimer = setTimeout(() => {
      for (let i = 1; i <= totalFrames; i++) {
        if (!imagesRef.current[i - 1]) {
          const img = new Image();
          img.src = getFrameUrl(i);
          imagesRef.current[i - 1] = img;
          img.onload = () => {
            if (!isCancelled) loadedCountRef.current++;
          };
        }
      }
    }, 150);

    return () => {
      isCancelled = true;
      clearTimeout(preloadTimer);
    };
  }, [totalFrames, getFrameUrl, resizeCanvas, drawFrame]);

  // Window resize observer
  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
    };
  }, [resizeCanvas]);

  // Listen to scroll to compute target scrollProgress (0 to 1) and target frame
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
      
      // Calculate target frame [1, totalFrames]
      const frameIndex = Math.round(progress * (totalFrames - 1)) + 1;
      targetFrameRef.current = frameIndex;

      // Sync audio if unmuted
      if (audioRef.current && !audioRef.current.paused && audioRef.current.duration) {
        const targetTime = progress * audioRef.current.duration;
        if (Math.abs(audioRef.current.currentTime - targetTime) > 0.15) {
          audioRef.current.currentTime = targetTime;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalFrames]);

  // 60-120 FPS Physics Animation Loop: Smooth inertia LERP
  // Ensures buttery smooth motion with zero seek lag or micro-stutters
  useEffect(() => {
    let isRunning = true;

    const renderLoop = () => {
      if (!isRunning) return;

      const diff = targetFrameRef.current - currentFrameRef.current;

      // When position difference is noticeable, interpolate smoothly
      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * damping;
        drawFrame(Math.round(currentFrameRef.current));
      } else if (currentFrameRef.current !== targetFrameRef.current) {
        currentFrameRef.current = targetFrameRef.current;
        drawFrame(Math.round(currentFrameRef.current));
      }

      // Update bottom progress bar directly via DOM to eliminate React re-render overhead
      if (progressLineRef.current) {
        const pct = Math.min(
          100,
          Math.max(
            0,
            ((currentFrameRef.current - 1) / (totalFrames - 1)) * 100
          )
        );
        progressLineRef.current.style.width = `${pct}%`;
      }

      animFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      isRunning = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [damping, drawFrame, totalFrames]);

  // Audio mute/unmute toggle
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextMuted = !isMuted;
    if (nextMuted) {
      audio.pause();
    } else {
      if (audio.duration) {
        audio.currentTime =
          ((currentFrameRef.current - 1) / (totalFrames - 1)) * audio.duration;
      }
      audio.play().catch(() => {});
    }
    audio.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section
      id="showreel"
      ref={containerRef}
      className="relative w-full h-[400vh] bg-[#050608] z-10"
    >
      {/* Hidden Audio Element for ambient/showreel sound */}
      <audio
        ref={audioRef}
        src="/office/office.mp4"
        preload="auto"
        muted={isMuted}
        loop
      />

      {/* Pinned Sticky Stage spanning 100% full screen width & height */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full-width GPU-Accelerated Canvas for Smooth Scrubbing */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover will-change-transform"
          style={{ transform: "translateZ(0)" }}
        />

        {/* Minimal Audio Toggle Icon */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          className="absolute bottom-6 right-6 z-20 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-[#FFD400]/50 text-white hover:text-[#FFD400] transition-all shadow-lg hover:scale-105"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-white/70" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#FFD400] animate-pulse" />
          )}
        </button>

        {/* Minimal Glowing Gold Progress Line at bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-20 pointer-events-none">
          <div
            ref={progressLineRef}
            className="h-full bg-[#FFD400] shadow-[0_0_8px_#FFD400]"
            style={{ width: "0%" }}
          />
        </div>

        {/* First frame initializing indicator */}
        {!isInitialReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050608] z-20">
            <div className="w-10 h-10 border-3 border-[#FFD400] border-t-transparent rounded-full animate-spin mb-3" />
            <span className="text-[11px] font-mono text-[#FFD400] tracking-widest uppercase">
              CALIBRATING SHOWREEL FRAMES...
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
