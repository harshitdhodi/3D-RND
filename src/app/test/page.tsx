import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import TestAstronautViewer from "@/components/TestAstronautViewer";
import { Sparkles, Move3d, Compass, Cpu, Layers, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "3D Model Neck Motion Test (/test.glb) | RnD Technosoft",
  description:
    "Full-width interactive 3D WebGL test page showcasing /test.glb with cursor-directed neck and head kinematics, while keeping the body firmly grounded.",
};

export default function TestModelPage() {
  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      {/* Galactic Starfield Canvas */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      <main className="relative z-10 w-full pt-28">
        {/* ========================================================
            HEADER TITLE SECTION (Full Width Layout)
        ======================================================== */}
        <section className="w-full px-4 sm:px-8 lg:px-12 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>3D KINEMATICS ENGINE // TEST.GLB RIG</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.05] text-white">
                  ASTRONAUT <span className="text-[#FFD400]">NECK MOTION</span> TEST
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl leading-relaxed">
                  Move your cursor anywhere across the full width screen. The astronaut&apos;s neck
                  and helmet smoothly pivot to follow your cursor position in real-time, while the
                  torso, arms, and legs stay grounded without rotating the whole body.
                </p>
              </div>

              {/* Quick Telemetry Chips */}
              <div className="flex flex-wrap md:flex-col gap-2.5 font-mono text-xs text-neutral-400">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                  <span>Model: <strong>test.glb</strong> (36.1 MB)</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Mode: <strong>Isolated Neck Tracking</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span>Coverage: <strong>100% Full Width</strong></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FULL-WIDTH 3D INTERACTIVE CANVAS VIEWPORT
        ======================================================== */}
        <section className="w-full relative border-y border-white/15 bg-black/60">
          <TestAstronautViewer modelPath="/test.glb" />
        </section>

        {/* ========================================================
            TECHNICAL SPECIFICATIONS & BEHAVIOR EXPLANATION
        ======================================================== */}
        <section className="w-full px-4 sm:px-8 lg:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#FFD400] font-semibold">
                Architecture &amp; Kinematics Verification
              </span>
              <h2 className="text-2xl sm:text-4xl font-[family-name:var(--font-syne)] font-bold uppercase text-white">
                How The Isolated Neck Motion Operates
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Key technical milestones implemented to isolate neck and head articulation from the static body.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-7 rounded-2xl bg-[#0c0e14] border border-white/10 shadow-lg space-y-3.5 hover:border-[#FFD400]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-lg text-white font-bold uppercase">
                  Isolated Neck Articulation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  The model&apos;s geometry above the collar (Z &gt; 0.40) is dynamically bound to a
                  dedicated Neck joint. When you move the cursor, only this joint pivots along Yaw
                  and Pitch axes.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-7 rounded-2xl bg-[#0c0e14] border border-white/10 shadow-lg space-y-3.5 hover:border-[#FFD400]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-lg text-white font-bold uppercase">
                  Zero Body Rotation Lock
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Unlike previous viewport setups that rotated the entire model group, the body,
                  chest, arms, and boots have zero cursor delta and stay completely grounded.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-7 rounded-2xl bg-[#0c0e14] border border-white/10 shadow-lg space-y-3.5 hover:border-[#FFD400]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Move3d className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-lg text-white font-bold uppercase">
                  Full-Width WebGL Stage
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  The WebGL canvas stretches 100% edge-to-edge across the screen, featuring studio rim
                  lighting, contact floor shadows, and real-time cursor angle telemetry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global RnD Footer */}
      <RnDFooter />
    </div>
  );
}

