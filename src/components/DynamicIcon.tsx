"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { Sparkles, LucideProps } from "lucide-react";

export type IconType = React.ComponentType<{
  className?: string;
  strokeWidth?: number | string;
  size?: number | string;
}>;

/**
 * Converts kebab-case, snake_case, space-separated or prefixed strings to PascalCase.
 * e.g. "shield-check" -> "ShieldCheck", "lucide:rocket" -> "Rocket", "building-2" -> "Building2"
 */
export function toPascalCase(str: string): string {
  const cleaned = str
    .replace(/^lucide:/i, "")
    .replace(/[-_ ]+([a-zA-Z0-9])/g, (_, c) => c.toUpperCase());
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

/**
 * Resolves any icon name (Lucide name, image URL, GIF, SVG, or Emoji)
 * into a valid React icon component.
 */
export function resolveIcon(
  name?: string | null,
  fallback: IconType = Sparkles
): IconType {
  if (!name || typeof name !== "string") return fallback;
  const str = name.trim();
  if (!str) return fallback;

  // 1. Direct Lucide exact match (e.g. "Rocket", "ShieldCheck")
  if ((LucideIcons as Record<string, any>)[str]) {
    return (LucideIcons as Record<string, any>)[str] as IconType;
  }

  // 2. PascalCase conversion (e.g. "rocket", "shield-check", "building-2")
  const pascal = toPascalCase(str);
  if ((LucideIcons as Record<string, any>)[pascal]) {
    return (LucideIcons as Record<string, any>)[pascal] as IconType;
  }

  // 3. Custom Image, SVG, or GIF Path (e.g. "/icons/rocket.gif", "https://...")
  if (
    str.startsWith("/") ||
    str.startsWith("http://") ||
    str.startsWith("https://") ||
    str.startsWith("data:") ||
    /\.(svg|png|gif|webp|jpe?g|avif)(\?.*)?$/i.test(str)
  ) {
    return function DynamicCustomIcon({ className, ...props }: any) {
      return (
        <img
          src={str}
          alt={str.split("/").pop() || "icon"}
          className={`object-contain inline-block ${className || ""}`}
          {...props}
        />
      );
    };
  }

  // 4. Emoji or short Unicode symbol (e.g. 🚀, 💡, ⭐)
  if (str.length <= 4 && /\p{Emoji}/u.test(str)) {
    return function DynamicEmojiIcon({ className, ...props }: any) {
      return (
        <span
          className={`inline-flex items-center justify-center leading-none select-none ${
            className || ""
          }`}
          {...props}
        >
          {str}
        </span>
      );
    };
  }

  return fallback;
}

interface DynamicIconProps extends Omit<LucideProps, "name"> {
  name?: string | null;
  fallback?: IconType;
  className?: string;
}

/**
 * Reusable Dynamic Icon Component
 * 
 * Usage:
 * <DynamicIcon name="Rocket" className="w-6 h-6 text-[#FFD400]" />
 * <DynamicIcon name="shield-check" className="w-6 h-6" />
 * <DynamicIcon name="/icons/rocket.gif" className="w-6 h-6" />
 * <DynamicIcon name="🚀" className="text-2xl" />
 */
export default function DynamicIcon({
  name,
  fallback = Sparkles,
  className = "",
  ...props
}: DynamicIconProps) {
  const IconComponent = resolveIcon(name, fallback);
  return <IconComponent className={className} {...props} />;
}
