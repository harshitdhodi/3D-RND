"use client";

import RocketCursor from "./RocketCursor";

/**
 * GlobalCursor - Provides custom rocket cursor effects across the entire website
 * Only activates on desktop/devices with fine pointer (not on mobile/touch devices)
 */
export default function GlobalCursor() {
  return <RocketCursor />;
}
