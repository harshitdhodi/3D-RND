"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Quote,
  IndianRupee,
  Users,
} from "lucide-react";
import CyberButton from "@/components/CyberButton";
import {
  LeaderData,
  TeamMemberData,
  DEFAULT_LEADER_DATA,
  DEFAULT_TEAM_MEMBERS,
} from "@/lib/getTeamData";
import { SectionHeading, DEFAULT_SECTION_HEADINGS } from "@/lib/getSectionHeading";

export interface TeamCultureSectionProps {
  className?: string;
  initialLeaders?: LeaderData[];
  initialMembers?: TeamMemberData[];
  leadershipHeading?: SectionHeading;
  teamHeading?: SectionHeading;
}

export default function TeamCultureSection({
  className = "",
  initialLeaders = [DEFAULT_LEADER_DATA],
  initialMembers = DEFAULT_TEAM_MEMBERS,
  leadershipHeading,
  teamHeading,
}: TeamCultureSectionProps) {
  const [leaders, setLeaders] = useState<LeaderData[]>(initialLeaders);
  const [squadLeaders, setSquadLeaders] = useState<TeamMemberData[]>(initialMembers);
  const [leadershipHeadingData, setLeadershipHeadingData] = useState<SectionHeading>(
    leadershipHeading || DEFAULT_SECTION_HEADINGS.about_page_leader || {
      section_name: 'about_page_leader',
      badge: 'LEADERSHIP & VISION // THE MINDS BEHIND RND',
      title: 'THE VISION BEHIND THE INNOVATION.',
      subtitle: 'Behind every ambitious idea is a vision to make it happen.',
      tagline: 'Meet the executive leadership driving RND Technosoft forward'
    }
  );
  const [teamHeadingData, setTeamHeadingData] = useState<SectionHeading>(
    teamHeading || DEFAULT_SECTION_HEADINGS.team_members
  );

  // Sync state whenever props update from parent
  useEffect(() => {
    if (initialLeaders && initialLeaders.length > 0) {
      setLeaders(initialLeaders);
    }
  }, [initialLeaders]);

  useEffect(() => {
    if (initialMembers && initialMembers.length > 0) {
      setSquadLeaders(initialMembers);
    }
  }, [initialMembers]);

  useEffect(() => {
    if (leadershipHeading) {
      setLeadershipHeadingData(leadershipHeading);
    }
  }, [leadershipHeading]);

  useEffect(() => {
    if (teamHeading) {
      setTeamHeadingData(teamHeading);
    }
  }, [teamHeading]);

  // Client-side real-time sync with CMS data
  useEffect(() => {
    let isMounted = true;
    const backendUrl =
      process.env.NEXT_PUBLIC_API_URL ||
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      "http://localhost:3014";

    async function loadLiveData() {
      try {
        const leaderRes = await fetch(`${backendUrl}/api/data/about_page_leader`, {
          cache: "no-store",
        });
        if (leaderRes.ok) {
          const json = await leaderRes.json();
          if (Array.isArray(json.data) && json.data.length > 0 && isMounted) {
            const loadedLeaders = json.data.map((rec: any) => ({
              ...DEFAULT_LEADER_DATA,
              ...rec,
            }));
            setLeaders(loadedLeaders);
          }
        }
      } catch {
        // Keep default fallback
      }

      try {
        const membersRes = await fetch(`${backendUrl}/api/data/team_members`, {
          cache: "no-store",
        });
        if (membersRes.ok) {
          const json = await membersRes.json();
          if (Array.isArray(json.data) && json.data.length > 0 && isMounted) {
            const sorted = json.data.sort(
              (a: TeamMemberData, b: TeamMemberData) => (a.order || 0) - (b.order || 0)
            );
            setSquadLeaders(sorted);
          }
        }
      } catch {
        // Keep default fallback
      }

      try {
        const headLeaderRes = await fetch(`${backendUrl}/api/heading?section=about_page_leader`, {
          cache: "no-store",
        });
        if (headLeaderRes.ok) {
          const json = await headLeaderRes.json();
          if (json.success && json.data && isMounted) {
            setLeadershipHeadingData((prev) => ({
              ...prev,
              ...json.data,
            }));
          }
        }
      } catch {
        // Keep fallback
      }

      try {
        const headTeamRes = await fetch(`${backendUrl}/api/heading?section=team_members`, {
          cache: "no-store",
        });
        if (headTeamRes.ok) {
          const json = await headTeamRes.json();
          if (json.success && json.data && isMounted) {
            setTeamHeadingData((prev) => ({
              ...prev,
              ...json.data,
            }));
          }
        }
      } catch {
        // Keep fallback
      }
    }

    loadLiveData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="team-culture" className={`relative w-full px-3 sm:px-6 md:px-8 lg:px-12 overflow-x-hidden ${className}`}>
      {/* Ambient Cosmic Background Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-[#FFD400]/4 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[450px] bg-[#c59a58]/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Max Width Container - Aligns with Navbar Logo (left) and Navbar Button (right) */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================================================
            SECTION HEADER
            ========================================================================= */}
        <div className="mb-14 sm:mb-18 border-b border-white/10 pb-8 sm:pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-[10px] sm:text-xs font-mono font-medium tracking-[0.15em] sm:tracking-[0.25em] uppercase mb-4">
            <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
            <span className="whitespace-normal leading-tight">{leadershipHeadingData.badge}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-archia-local)] font-bold text-white tracking-tight leading-[1.08] uppercase break-words">
                {leadershipHeadingData.title}
              </h2>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed max-w-md break-words">
              {leadershipHeadingData.subtitle}
            </p>
          </div>
        </div>

        {/* =========================================================================
            LEADERSHIP SPOTLIGHTS (DYNAMIC CMS EDITORIAL COMMAND CARDS)
            ========================================================================= */}
        {leaders.map((leader, idx) => (
          <div key={leader.id || idx} className="mb-14 sm:mb-16">
            <div className="rounded-[32px] bg-black/30 backdrop-blur-md border border-[#FFD400]/30 hover:border-[#FFD400]/50 p-8 sm:p-12 lg:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all duration-500">
              {/* Top Amber Radiant Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent shadow-[0_0_20px_#FFD400]" />

              {/* Background Sci-Fi Grid lines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                {/* Left: Leader Portrait with Cyber Frame */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-square max-w-[420px] mx-auto rounded-2xl overflow-hidden border-2 border-white/15 group-hover:border-[#FFD400]/60 transition-all duration-700 shadow-2xl">
                    <Image
                      src={leader.image || "/images/team/founder_ravi_shah.png"}
                      alt={leader.altname || leader.name}
                      title={leader.imgtitle || leader.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                    />
                  </div>

                  {/* Corner Cyber Accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#FFD400]" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#FFD400]" />
                </div>

                {/* Right: Leader Information */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{leader.badge_label}</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-archia-local)] font-bold text-white uppercase tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                      {leader.role_subtitle}
                    </p>
                  </div>

                  {/* Leader's Philosophy Quote */}
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-[#FFD400] py-2 space-y-3 bg-white/[0.02] p-5 rounded-r-xl">
                    <Quote className="w-8 h-8 text-[#FFD400]/40 absolute -top-3 -left-3 fill-current" />
                    <p className="text-sm sm:text-base text-neutral-200 font-light italic leading-relaxed">
                      {leader.bio_paragraph_1}
                      <br />
                      {leader.bio_paragraph_2}
                    </p>
                    <span className="text-md italic font-mono text-[#FFD400] font-medium block">
                      &ldquo;{leader.quote}&rdquo;
                    </span>
                    <span className="text-xs font-mono text-[#FFD400] font-medium block">
                      {leader.quote_author}
                    </span>
                  </div>

                  {/* 3 Executive Pillars / Stats */}
                  <div className="grid grid-cols-3 sm:gap-4 gap-2 pt-2 border-t border-white/10">
                    <div className="space-y-1">
                      <span className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-archia-local)] font-bold text-white break-words">
                        {leader.stat_1_val}{leader.stat_1_symbol}
                      </span>
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-mono text-neutral-400 block uppercase leading-tight break-words">
                        {leader.stat_1_lbl}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-archia-local)] font-bold text-[#FFD400] break-words">
                        {leader.stat_2_val}{leader.stat_2_symbol}
                      </span>
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-mono text-neutral-400 block uppercase leading-tight break-words">
                        {leader.stat_2_lbl}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xl sm:text-2xl md:text-3xl font-[family-name:var(--font-archia-local)] font-bold text-white break-words">
                        {leader.stat_3_val}{leader.stat_3_symbol}
                      </span>
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-mono text-neutral-400 block uppercase leading-tight break-words">
                        {leader.stat_3_lbl}
                      </span>
                    </div>
                  </div>

                  {/* Leader Connect Action */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <CyberButton href={leader.cta_link || "/contact-us"} size="md">
                      {leader.cta_text || "REQUEST EXECUTIVE CONSULTATION"}
                    </CyberButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* =========================================================================
            3. LEADERSHIP & AUTONOMOUS SQUADS (DYNAMIC CMS SQUAD LEADS)
            ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="w-full">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#FFD400] font-semibold break-words">
                {teamHeadingData.badge}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-archia-local)] font-bold text-white uppercase mt-1 break-words">
                {teamHeadingData.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 max-w-2xl break-words">
                {teamHeadingData.subtitle}
              </p>
            </div>
          </div>

          {/* 4 Specialized Squad Leads Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {squadLeaders.map((member, idx) => (
              <div
                key={member.id || idx}
                className="group rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 overflow-hidden shadow-xl hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(255,212,0,0.15)] flex flex-col"
              >
                {/* Member Photo Frame - Pure Clean Image with No Symbols or Text */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-transparent">
                  <Image
                    src={member.image}
                    alt={member.altname || member.name}
                    title={member.imgtitle || member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                    className="object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Member Details: Name & Designation Only */}
                <div className="p-4 sm:p-5 text-center sm:text-left">
                  <h4 className="text-base sm:text-lg font-[family-name:var(--font-archia-local)] font-bold text-white uppercase group-hover:text-[#FFD400] transition-colors tracking-tight break-words">
                    {member.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-mono text-neutral-400 mt-1 uppercase tracking-wider break-words">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
