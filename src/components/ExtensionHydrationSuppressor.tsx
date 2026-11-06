"use client";

/**
 * ExtensionHydrationSuppressor
 * Prevents browser extensions (like Bitwarden, Dashlane, form autofillers, and ad-blockers)
 * that inject attributes like `bis_skin_checked="1"` into DOM elements from triggering
 * false-positive React 19 / Next.js hydration mismatch overlays during development.
 */
if (typeof window !== "undefined") {
  const originalConsoleError = console.error;
  console.error = (...args: any[]) => {
    const fullMessage = args
      .map((arg) => (typeof arg === "string" ? arg : (arg && arg.message) || ""))
      .join(" ");

    // Ignore hydration errors caused solely by browser extensions mutating the DOM
    if (
      fullMessage.includes("bis_skin_checked") ||
      fullMessage.includes("cz-shortcut-listen") ||
      fullMessage.includes("data-adblockkey")
    ) {
      return;
    }

    originalConsoleError(...args);
  };
}

export default function ExtensionHydrationSuppressor() {
  return null;
}

