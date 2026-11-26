"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface CyberButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showDot?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "gold";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

export default function CyberButton({
  href,
  onClick,
  children,
  className = "",
  showDot = true,
  size = "md",
  variant = "dark",
  type = "button",
  fullWidth = false,
}: CyberButtonProps) {

  const sizeStyles = {
    sm: "px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs gap-1.5 sm:gap-2",
    md: "px-3 sm:px-3.5 py-2 sm:py-2.5 text-[10px] sm:text-[11px] lg:text-[10.5px] xl:text-xs gap-1.5 sm:gap-2",
    lg: "px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base gap-2.5 sm:gap-3",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-5 h-5 sm:w-6 sm:h-6 shrink-0",
    lg: "w-6 h-6 sm:w-7 sm:h-7 shrink-0",
  };

  const variantStyles = {
    dark: "bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)]",
    gold: "bg-[#FFD400] hover:bg-[#ffe34d] border border-[#FFD400] text-black shadow-[0_4px_25px_rgba(255,212,0,0.4)] hover:shadow-[0_0_35px_rgba(255,212,0,0.6)]",
  };

  const badgeStyles = {
    dark: "bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black",
    gold: "bg-black/90 group-hover:bg-black text-[#FFD400] group-hover:text-[#FFD400] shadow-[0_0_10px_rgba(0,0,0,0.35)]",
  };

  // Sanitize string children: strip trailing arrows (→, ->, ›, », >, —) or hyphens
  // because CyberButton provides its own dedicated right circular arrow badge.
  const displayChildren =
    typeof children === "string"
      ? children.replace(/\s*(?:→|->|›|»|>|—|-)\s*$/u, "").trim()
      : children;

  const content = (
    <div
      className={`group relative inline-flex items-center justify-between rounded-full overflow-hidden ${variantStyles[variant]} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer select-none ${sizeStyles[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {/* Dynamic Cyber Light Sweep / Shimmer Beam */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />

      {/* Left indicator + Button Text */}
      <div className="flex items-center min-w-0 flex-1 space-x-1.5 sm:space-x-2 relative z-10 overflow-hidden">
        {showDot && (
          <span
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 animate-pulse ${
              variant === "gold"
                ? "bg-black shadow-[0_0_8px_rgba(0,0,0,0.6)]"
                : "bg-[#FFD400] shadow-[0_0_8px_#FFD400]"
            }`}
          />
        )}
        <span
          className={`font-mono font-bold tracking-tight sm:tracking-[0.02em] lg:tracking-normal xl:tracking-[0.04em] uppercase transition-colors whitespace-nowrap ${
            variant === "gold"
              ? "text-black"
              : "text-white group-hover:text-[#FFD400]"
          }`}
        >
          {displayChildren}
        </span>
      </div>    
      {/* Right Circular Icon Sub-Badge - Pinned shrink-0 so it is NEVER clipped */}
      <div
        className={`${iconSizes[size]} rounded-full ${badgeStyles[variant]} flex items-center justify-center transition-all duration-300 shrink-0 ml-1.5 sm:ml-2 shadow-md relative z-10`}
      >
        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12 transition-transform duration-300" />
      </div>
    </div>
  );

  if (href) {
    if (href.startsWith("#") || href.startsWith("/")) {
      return (
        <Link
          href={href}
          className={`${fullWidth ? "w-full block" : "inline-block"}`}
          onClick={onClick}
        >
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${fullWidth ? "w-full block" : "inline-block"}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${fullWidth ? "w-full block" : "inline-block"}`}
    >
      {content}
    </button>
  );
}
