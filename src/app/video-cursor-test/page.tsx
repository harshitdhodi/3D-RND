"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Zap, Globe, Users, Rocket, Award, Target } from "lucide-react";

interface CompanyPoint {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  side: "left" | "right";
  videoPosition: number; // 0-100 percentage of where astronaut should look
}

const COMPANY_POINTS: CompanyPoint[] = [
  {
    id: 1,
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge technology and creative solutions",
    icon: <Zap className="w-6 h-6" />,
    side: "left",
    videoPosition: 20,
  },
  {
    id: 2,
    title: "Global Reach",
    description: "Serving clients across 48 countries with localized expertise",
    icon: <Globe className="w-6 h-6" />,
    side: "right",
    videoPosition: 80,
  },
  {
    id: 3,
    title: "Team Excellence",
    description: "A diverse team of 200+ experts dedicated to your success",
    icon: <Users className="w-6 h-6" />,
    side: "left",
    videoPosition: 25,
  },
  {
    id: 4,
    title: "Rapid Growth",
    description: "300% year-over-year growth through client satisfaction",
    icon: <Rocket className="w-6 h-6" />,
    side: "right",
    videoPosition: 75,
  },
  {
    id: 5,
    title: "Industry Awards",
    description: "Recognized as top innovator in digital transformation",
    icon: <Award className="w-6 h-6" />,
    side: "left",
    videoPosition: 30,
  },
  {
    id: 6,
    title: "Client Success",
    description: "98% client retention rate and 4.9/5 satisfaction score",
    icon: <Target className="w-6 h-6" />,
    side: "right",
    videoPosition: 70,
  },
];

export default function VideoCursorTest() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [allowCursorControl, setAllowCursorControl] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const handleLoadedMetadata = () => {
      console.log("Video metadata loaded, duration:", video.duration);
      setVideoDuration(video.duration);
      
      // Set initial position to center
      const centerTime = video.duration * 0.35;
      video.currentTime = centerTime;
      
      // Wait 0.5 seconds before showing video
      setTimeout(() => {
        setIsVideoReady(true);
        setShowVideo(true);
      }, 500);
    };

    const handleError = (e: Event) => {
      console.error("Video error:", e);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("error", handleError);
    video.load();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("error", handleError);
    };
  }, []);

  // Update video position when card changes
  useEffect(() => {
    if (videoRef.current && videoDuration && currentCardIndex >= 0) {
      const point = COMPANY_POINTS[currentCardIndex];
      const videoPercentage = (point.videoPosition / 100) * 70;
      const targetTime = (videoPercentage / 100) * videoDuration;
      videoRef.current.currentTime = targetTime;
    }
  }, [currentCardIndex, videoDuration]);

  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => Math.min(COMPANY_POINTS.length - 1, prev + 1));
  };

  const handleCardHover = (index: number) => {
    setHoveredCardIndex(index);
    if (videoRef.current && videoDuration) {
      const point = COMPANY_POINTS[index];
      const videoPercentage = (point.videoPosition / 100) * 70;
      const targetTime = (videoPercentage / 100) * videoDuration;
      videoRef.current.currentTime = targetTime;
    }
  };

  const handleCardLeave = () => {
    setHoveredCardIndex(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!allowCursorControl) return;
    
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container || !isVideoReady || !videoDuration) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    // Direct mapping: cursor left = face left, cursor right = face right
    const videoPercentage = (percentage / 100) * 70;
    const targetTime = Math.max(0, Math.min(videoDuration * 0.7, (videoPercentage / 100) * videoDuration));

    if (Math.abs(video.currentTime - targetTime) > 0.016) {
      try {
        video.currentTime = targetTime;
      } catch (error) {
        console.error("Error setting video time:", error);
      }
    }
  };

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-[1920px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-[#FFD400] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN HOME</span>
          </Link>
        </div>
      </div>

      {/* Video Section - Fixed in place */}
      <div className="relative h-screen">
        {/* Video Background */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="absolute inset-0"
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            src="https://ik.imagekit.io/mikbqwyy0/Show_default_0_second_face_4060e704_t0.6-3.1_1080p.mp4"
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: showVideo ? 1 : 0 }}
            muted
            playsInline
            preload="metadata"
            loop={false}
            autoPlay={false}
            crossOrigin="anonymous"
          />

          {/* Loading Indicator */}
          {!showVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-40">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-[#FFD400] border-t-transparent rounded-full animate-spin" />
                <span className="text-sm font-mono text-neutral-400 uppercase tracking-wider animate-pulse">
                  Loading Video...
                </span>
              </div>
            </div>
          )}

          {/* Overlay gradient for better card visibility */}
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
        </div>

        {/* Cards Overlay on Video */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-7xl mx-auto px-6 relative h-full flex items-center">
            {/* Left Cards */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4 pointer-events-auto">
              {COMPANY_POINTS.filter((p) => p.side === "left").map((point, idx) => {
                const index = COMPANY_POINTS.indexOf(point);
                const isActive = currentCardIndex === index;
                const isHovered = hoveredCardIndex === index;
                
                return (
                  <div
                    key={point.id}
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={handleCardLeave}
                    onClick={() => setCurrentCardIndex(index)}
                    className={`group cursor-pointer transition-all duration-300 ${
                      isActive || isHovered ? "scale-100" : "scale-95"
                    }`}
                    style={{ maxWidth: "420px" }}
                  >
                    <div
                      className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                        isActive || isHovered
                          ? "bg-[#FFD400]/20 border-[#FFD400] shadow-[0_0_30px_rgba(255,212,0,0.4)]"
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl transition-colors ${
                            isActive || isHovered
                              ? "bg-[#FFD400] text-black"
                              : "bg-white/10 text-[#FFD400]"
                          }`}
                        >
                          {point.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-white">
                            {point.title}
                          </h3>
                          <p className="text-sm text-neutral-300 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Cards */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 pointer-events-auto">
              {COMPANY_POINTS.filter((p) => p.side === "right").map((point, idx) => {
                const index = COMPANY_POINTS.indexOf(point);
                const isActive = currentCardIndex === index;
                const isHovered = hoveredCardIndex === index;
                
                return (
                  <div
                    key={point.id}
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={handleCardLeave}
                    onClick={() => setCurrentCardIndex(index)}
                    className={`group cursor-pointer transition-all duration-300 ${
                      isActive || isHovered ? "scale-100" : "scale-95"
                    }`}
                    style={{ maxWidth: "420px" }}
                  >
                    <div
                      className={`p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                        isActive || isHovered
                          ? "bg-[#FFD400]/20 border-[#FFD400] shadow-[0_0_30px_rgba(255,212,0,0.4)]"
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl transition-colors ${
                            isActive || isHovered
                              ? "bg-[#FFD400] text-black"
                              : "bg-white/10 text-[#FFD400]"
                          }`}
                        >
                          {point.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-white">
                            {point.title}
                          </h3>
                          <p className="text-sm text-neutral-300 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 pointer-events-auto">
          <button
            onClick={handlePrevCard}
            disabled={currentCardIndex === 0}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous card"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            {COMPANY_POINTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCardIndex(index)}
                className={`transition-all ${
                  currentCardIndex === index
                    ? "w-8 h-2 bg-[#FFD400]"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                } rounded-full`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNextCard}
            disabled={currentCardIndex === COMPANY_POINTS.length - 1}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all rotate-180"
            aria-label="Next card"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content after cards section */}
      <div className="relative z-10 min-h-screen bg-linear-to-b from-black to-neutral-900 flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-neutral-400 mb-8">Let&apos;s build something amazing together</p>
          <button className="px-8 py-4 bg-[#FFD400] text-black font-bold rounded-xl hover:bg-[#FFD400]/90 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
