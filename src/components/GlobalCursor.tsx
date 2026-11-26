"use client";

import dynamic from "next/dynamic";

const RocketCursor = dynamic(() => import("./RocketCursor"), {
  ssr: false,
});

/**
 * GlobalCursor - Provides custom rocket cursor effects across the entire website
 * Loaded client-side only (ssr: false) to avoid any SSR hydration overhead or DOM mismatches.
 */
export default function GlobalCursor() {
  return <RocketCursor />;
}
