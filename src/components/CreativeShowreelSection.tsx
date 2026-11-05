"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function CreativeShowreelSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  const [isMuted, setIsMuted] = useState(true);

  // Scroll targets & physics values
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const isSeekingRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);

  // Speed tuning parameters:
  // 1. Normal speed: slightly decreased rate for gentle, cinematic control
  const NORMAL_LERP_FACTOR = 0.055;
  // 2. Fast scroll cap: decided constant max playback speed (~1.25x real-time speed)
  const FAST_MAX_SPEED_RATE = 1.25;

  // Listen to scroll to compute target scrollProgress (0 to 1)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
      targetProgressRef.current = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Avoid browser seek backlog on rapid scroll
  const handleSeeked = useCallback(() => {
    isSeekingRef.current = false;
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const targetTime = currentProgressRef.current * video.duration;
    if (Math.abs(video.currentTime - targetTime) > 0.03) {
      isSeekingRef.current = true;
      if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
        (video as any).fastSeek(targetTime);
      } else {
        video.currentTime = targetTime;
      }
    }
  }, []);

  const handleSeeking = useCallback(() => {
    isSeekingRef.current = true;
  }, []);

  // Animation loop with constant speed cap & decreased normal speed
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateScrub = (timestamp: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }
      // Elapsed seconds between frames, clamped to max 100ms (to prevent large leaps on tab switches)
      const deltaTime = Math.min((timestamp - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = timestamp;

      const diff = targetProgressRef.current - currentProgressRef.current;
      const absDiff = Math.abs(diff);

      if (absDiff > 0.0001) {
        const duration =
          video.duration && !isNaN(video.duration) ? video.duration : 15.56;

        // Decided maximum constant speed rate (progress delta per frame)
        const maxProgressPerSec = FAST_MAX_SPEED_RATE / duration;
        const maxDeltaThisFrame = maxProgressPerSec * deltaTime;

        // Normal speed calculation (slightly decreased for smooth, relaxed scrubbing)
        let step = diff * (NORMAL_LERP_FACTOR * 60 * deltaTime);

        // If the user scrolls fast, clamp speed to the decided constant speed
        if (Math.abs(step) > maxDeltaThisFrame) {
          step = Math.sign(step) * maxDeltaThisFrame;
        }

        currentProgressRef.current += step;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      // Update video currentTime based on computed progress
      if (video.duration) {
        const targetTime = currentProgressRef.current * video.duration;
        const timeDiff = Math.abs(video.currentTime - targetTime);

        if (timeDiff > 0.02 && !isSeekingRef.current) {
          isSeekingRef.current = true;
          if ("fastSeek" in video && typeof (video as any).fastSeek === "function") {
            (video as any).fastSeek(targetTime);
          } else {
            video.currentTime = targetTime;
          }
        }
      }

      // Update bottom progress bar directly via DOM to eliminate React re-render overhead
      if (progressLineRef.current) {
        const pct = Math.min(
          100,
          Math.max(0, currentProgressRef.current * 100)
        );
        progressLineRef.current.style.width = `${pct}%`;
      }

      animFrameRef.current = requestAnimationFrame(updateScrub);
    };

    animFrameRef.current = requestAnimationFrame(updateScrub);
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section
      id="showreel"
      ref={containerRef}
      className="relative w-full h-[400vh] bg-[#050608] z-10"
    >
      {/* Pinned Sticky Stage spanning 100% full screen width & height with zero text */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Full-width Video Element covering edge-to-edge */}
        <video
          ref={videoRef}
          src="/office/office.mp4"
          muted={isMuted}
          playsInline
          preload="auto"
          onSeeked={handleSeeked}
          onSeeking={handleSeeking}
          className="w-full h-full object-cover"
          style={{ transform: "translateZ(0)" }}
        />

        {/* Minimal Audio Toggle Icon (No text overlay) */}
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
      </div>
    </section>
  );
}
