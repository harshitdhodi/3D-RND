"use client";

import RocketCursor from "./RocketCursor";
import CursorGlow from "./CursorGlow";

/**
 * GlobalCursor - Provides custom cursor effects across the entire website
 * Includes both the rocket cursor with particle trail and the glowing dot cursor
 * Only activates on desktop/devices with fine pointer (not on mobile/touch devices)
 */
export default function GlobalCursor() {
  return (
    <>
      <RocketCursor />
      <CursorGlow />
    </>
  );
}
