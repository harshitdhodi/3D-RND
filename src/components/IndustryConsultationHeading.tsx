import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { IndustryConsultationData } from "@/lib/getIndustriesData";

interface IndustryConsultationHeadingProps {
    data?: IndustryConsultationData;
    className?: string;
}

export default function IndustryConsultationHeading({ data, className = "" }: IndustryConsultationHeadingProps) {
    const tagline = data?.tagline || "✧ LET'S BUILD SOMETHING MEANINGFUL";
    const description =
        data?.description ||
        "Every business has a different challenge and a bigger ambition. Tell us where you want to go, and our team will help you identify the right digital, creative and technology solutions to get there.";
    const benefitsTitle = data?.benefits_title || "WHY CONNECT WITH RND?";

    // Normalize benefits array
    const rawBenefits =
        data?.benefits && data.benefits.length > 0
            ? data.benefits
            : [
                  { title: "Solutions tailored to your business goals" },
                  { title: "Integrated technology and creative expertise" },
                  { title: "A collaborative approach from concept to execution" },
              ];
    const benefits = rawBenefits.map((b) => (typeof b === "string" ? b : b.title || b.text || b.point || ""));

    // Render heading lines
    const rawHeading = data?.heading || "YOUR INDUSTRY.\nOUR EXPERTISE.\nONE SHARED VISION.";
    const lines = rawHeading.includes("\n")
        ? rawHeading.split("\n").filter(Boolean)
        : rawHeading.includes("<br>")
        ? rawHeading.split("<br>").filter(Boolean)
        : rawHeading.includes("<br/>")
        ? rawHeading.split("<br/>").filter(Boolean)
        : rawHeading.split(". ").map((s, idx, arr) => (idx < arr.length - 1 ? s + "." : s)).filter(Boolean);

    return (
        <div className={`industry-consult-left space-y-5 ${className}`}>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>{tagline}</span>
            </span>
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold uppercase leading-tight">
                {lines.map((line, idx) => {
                    const isLast = idx === lines.length - 1;
                    return (
                        <React.Fragment key={idx}>
                            {isLast ? <span className="text-[#FFD400]">{line}</span> : line}
                            {idx < lines.length - 1 && <br />}
                        </React.Fragment>
                    );
                })}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {description}
            </p>

            <div className="p-4 bg-white/[0.02] border border-white/10 space-y-2.5 text-xs font-mono text-neutral-300">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#FFD400] font-semibold mb-2">
                    {benefitsTitle}
                </p>
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                        <span>{benefit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
