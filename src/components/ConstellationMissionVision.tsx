"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Cpu,
  Sparkles,
  Users,
  Target,
  ChevronRight,
  Compass,
} from "lucide-react";

export default function ConstellationMissionVision({
  className = "py-[50px]",
}: {
  className?: string;
} = {}) {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background Golden Starfield Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 0.6;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = "#FFD400";
        c.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push(new Particle());
    }

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const values = [
    {
      id: "node-1",
      number: "01",
      name: "RADICAL TRANSPARENCY",
      description: "Honest communication. Clear commitments. No hidden agendas.",
      icon: ShieldCheck,
    },
    {
      id: "node-2",
      number: "02",
      name: "RELENTLESS CRAFTSMANSHIP",
      description: "We believe every detail matters and every outcome deserves excellence.",
      icon: Cpu,
    },
    {
      id: "node-3",
      number: "03",
      name: "FEARLESS INNOVATION",
      description: "Challenge conventions. Explore possibilities. Create what's next.",
      icon: Sparkles,
    },
    {
      id: "node-4",
      number: "04",
      name: "COLLECTIVE SYNERGY",
      description: "Better ideas happen when diverse minds work as one.",
      icon: Users,
    },
  ];

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Constellation Header
      gsap.fromTo(
        ".constellation-header",
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".constellation-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Value Nodes Stagger
      gsap.fromTo(
        ".constellation-value-node",
        { opacity: 0, x: -30, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".constellation-value-node",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Central Vision Core Sun
      gsap.fromTo(
        "#vision-core",
        { opacity: 0, scale: 0.75 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: "#vision-core",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 4. Mission Bridge Card
      gsap.fromTo(
        "#mission-bridge",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#mission-bridge",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // 5. Strategic Vision Card
      gsap.fromTo(
        ".constellation-vision-card",
        { opacity: 0, x: 30, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".constellation-vision-card",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="constellation-orbital-ecosystem"
      className={`relative w-full max-w-full overflow-x-clip ${className} flex flex-col justify-center text-gray-100 selection:bg-[#FFD400] selection:text-black`}
    >
      {/* Background Canvas & Radial Glows - securely bounded */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full opacity-35" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] lg:w-[650px] h-[320px] sm:h-[500px] lg:h-[650px] rounded-full bg-[#FFD400]/10 blur-[100px] sm:blur-[130px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header with Responsive Typography */}
        <div className="constellation-header text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 rounded-full text-[10px] sm:text-xs font-semibold bg-[#FFD400]/10 text-[#FFD400] border border-[#FFD400]/30 tracking-widest uppercase mb-3 sm:mb-4 shadow-[0_0_25px_rgba(255,212,0,0.2)] hover:border-[#FFD400]/60 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
            <span className="tracking-[0.15em] sm:tracking-[0.2em] font-mono">CONSTELLATION ARCHITECTURE</span>
          </div>
          <h2 className="font-[family-name:var(--font-archia-local)] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
            THE ORBITAL{" "}
            <span className="bg-gradient-to-r from-white via-[#ffe34d] to-[#FFD400] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,212,0,0.3)]">
              ECOSYSTEM
            </span>
          </h2>
          <p className="text-neutral-200 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-2 max-w-2xl mx-auto">
            A shared vision. A stronger purpose. Four guiding values that shape how we think, create, collaborate and innovate.
          </p>
          <p className="text-neutral-400 text-[11px] sm:text-xs md:text-sm leading-relaxed font-light max-w-2xl mx-auto">
            Every decision we make is guided by our commitment to building meaningful solutions, creating lasting relationships and making a positive impact through technology and creativity.
          </p>
        </div>

        {/* Constellation Interactive Stage: Responsive Grid (1 col on mobile, 2 col split on tablet, 3-column on desktop) */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

          {/* =========================================================================
              LEFT COLUMN: 4 ORBITING VALUES (Compact 2x2 on tablet, column on mobile/desktop)
              ========================================================================= */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-between space-y-3.5 h-full">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#FFD400] font-semibold mb-1 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
              <span>01 / Orbiting Values</span>
            </div>

            {/* Values Grid: 1 col on mobile, 2 cols on tablet, 1 col on desktop */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-3.5">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.number}
                    className={`constellation-value-node bg-[#0a0a0c]/85 backdrop-blur-xl border border-[#FFD400]/20 hover:border-[#FFD400]/70 p-3.5 sm:p-4 lg:p-4.5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,212,0,0.25)] group relative overflow-hidden flex flex-col justify-center ${
                      idx % 2 === 0 ? "hover:-translate-y-0.5" : "hover:translate-y-0.5"
                    }`}
                  >
                    {/* Hover Light Sweep Beam */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD400]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                    <div className="flex items-start justify-between relative z-10 gap-2.5 sm:gap-3">
                      <div className="flex items-start space-x-3 sm:space-x-3.5 min-w-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black transition-all group-hover:scale-110 group-hover:rotate-6 shrink-0 shadow-[0_0_15px_rgba(255,212,0,0.1)] mt-0.5">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-[family-name:var(--font-archia-local)] text-xs sm:text-sm lg:text-base font-bold text-white group-hover:text-[#FFD400] transition-colors leading-snug uppercase truncate">
                            {v.name}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                            {v.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FFD400] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =========================================================================
              CENTER COLUMN: CORE SUN (VISION) + MISSION BRIDGE CARD (Bottom Anchored)
              ========================================================================= */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col justify-between items-center text-center relative py-1 h-full min-h-[380px] lg:min-h-0">

            {/* Connecting SVG Orbits behind Center - safely contained without overflow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border border-dashed border-[#FFD400]/30 animate-spin-slow" />
              <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full border border-[#FFD400]/10" />
            </div>

            {/* Central Sun */}
            <div id="vision-core" className="relative group my-auto select-none py-4 sm:py-6">
              <div className="absolute inset-0 rounded-full bg-[#FFD400]/30 blur-xl sm:blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
              <div className="relative w-36 h-36 xs:w-40 xs:h-40 sm:w-48 sm:h-48 rounded-full bg-[#0a0a0c]/90 backdrop-blur-2xl border-2 border-[#FFD400] flex flex-col items-center justify-center p-3.5 sm:p-5 text-center shadow-[0_0_45px_-5px_rgba(255,212,0,0.4)] group-hover:scale-105 transition-transform duration-500">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#FFD400] uppercase mb-1 sm:mb-1.5 font-bold">
                  NORTH STAR VISION
                </span>
                <h2 className="font-[family-name:var(--font-archia-local)] text-[11px] xs:text-xs sm:text-sm font-bold text-white leading-tight uppercase px-1">
                  Shaping a Smarter, Connected Digital Future
                </h2>
              </div>
            </div>

            {/* The Bridge: Mission Card (Anchored to bottom) */}
            <div id="mission-bridge" className="w-full bg-[#0a0a0c]/85 backdrop-blur-xl border border-[#FFD400]/25 hover:border-[#FFD400]/70 p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,212,0,0.25)] group text-left mt-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD400]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div className="flex items-center justify-between mb-2 sm:mb-2.5 relative z-10">
                <span className="text-[11px] sm:text-xs font-mono text-[#FFD400] font-bold uppercase tracking-wider">
                  MISSION BRIDGE
                </span>
                <Target className="w-4 h-4 text-[#FFD400] group-hover:rotate-45 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <h3 className="font-[family-name:var(--font-archia-local)] text-xs sm:text-sm lg:text-base font-bold text-white mb-1.5 sm:mb-2 leading-snug group-hover:text-[#FFD400] transition-colors relative z-10">
                To turn ambitious ideas into impactful solutions through technology, creativity and strategic thinking.
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-light relative z-10">
                Every project is an opportunity to create value, solve challenges and move businesses forward.
              </p>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: STRATEGIC VISION CARD (Bottom Anchored & Same Baseline)
              ========================================================================= */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col justify-between h-full space-y-3.5">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#FFD400] font-semibold mb-1 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
              <span>02 / Strategic Vision</span>
            </div>

            {/* Vision Card: Fills height so bottom edge matches left & center columns */}
            <div className="constellation-vision-card flex-1 bg-[#0a0a0c]/85 backdrop-blur-2xl border border-[#FFD400]/30 hover:border-[#FFD400]/70 p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-[0_0_40px_rgba(255,212,0,0.15)] hover:shadow-[0_0_50px_rgba(255,212,0,0.3)] group relative overflow-hidden flex flex-col justify-between min-h-[300px] lg:min-h-0">
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-[#FFD400]/10 rounded-full blur-[50px] sm:blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD400]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div className="relative z-10">
                {/* Category Indicator */}
                <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FFD400] animate-ping" />
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FFD400] font-semibold">
                    NORTH STAR VISION
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-archia-local)] text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight group-hover:text-[#FFD400] transition-colors">
                  Shaping a Smarter, More Connected Digital Future.
                </h3>

                {/* Description */}
                <p className="text-neutral-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 font-light">
                  To become a trusted innovation partner, empowering businesses through intelligent technology, creative excellence and meaningful digital transformation.
                </p>
              </div>

              {/* Footer Tag */}
              <div className="pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 relative z-10">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#FFD400]/90">
                  Ultimate North Star Horizon
                </span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(255,212,0,0.2)]">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin-slow" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
