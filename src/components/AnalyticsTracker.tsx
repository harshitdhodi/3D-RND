"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3058";

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    let sid = sessionStorage.getItem("rnd_analytics_sid");
    if (!sid) {
      sid = "s_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now();
      sessionStorage.setItem("rnd_analytics_sid", sid);
    }
    return sid;
  } catch {
    return "session_fallback";
  }
}

function sendTrackEvent(data: {
  eventType: string;
  page: string;
  buttonName?: string;
  metadata?: any;
}) {
  if (typeof window === "undefined") return;

  const payload = {
    eventType: data.eventType,
    page: data.page || window.location.pathname,
    buttonName: data.buttonName || "page_view",
    sessionId: getSessionId(),
    metadata: data.metadata || {},
  };

  try {
    const url = `${API_BASE_URL}/api/tracking/track-event`;
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], {
        type: "application/json",
      });
      navigator.sendBeacon(url, blob);
    } else {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Fail silently without disrupting user experience
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  // 1. Track Page Views on navigation
  useEffect(() => {
    if (!pathname) return;
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;

    // Small delay to ensure route has resolved
    const timer = setTimeout(() => {
      sendTrackEvent({
        eventType: "pageview",
        page: pathname,
        buttonName: "page_view",
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  // 2. Global Event Listener for Key Button & Contact Clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [role='button']"
      ) as HTMLElement | null;
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const text = (target.textContent || "").toLowerCase().trim();

      let detectedButtonName = "";

      if (href.startsWith("tel:")) {
        detectedButtonName = "footer_phone";
      } else if (href.startsWith("mailto:")) {
        detectedButtonName = "footer_email";
      } else if (href.includes("wa.me") || href.includes("whatsapp")) {
        detectedButtonName = "whatsapp";
      } else if (
        text.includes("let's talk") ||
        text.includes("inquiry") ||
        text.includes("book architect") ||
        text.includes("get in touch")
      ) {
        detectedButtonName = "navbar_inquiry";
      } else if (href.includes("/contact")) {
        detectedButtonName = "navbar_inquiry";
      } else if (text.includes("read more") || text.includes("explore")) {
        detectedButtonName = "read_more";
      }

      if (detectedButtonName) {
        sendTrackEvent({
          eventType: "click",
          page: window.location.pathname,
          buttonName: detectedButtonName,
          metadata: { text: text.slice(0, 50), href },
        });
      }
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // 3. Dynamic Google Analytics Injection if configured in Admin SEO Settings
  useEffect(() => {
    let mounted = true;
    fetch(`${API_BASE_URL}/api/seo/settings`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!mounted || !json?.data?.googleAnalyticsId) return;
        const gaId = json.data.googleAnalyticsId.trim();
        if (!gaId || document.getElementById("google-analytics-script")) return;

        const script1 = document.createElement("script");
        script1.id = "google-analytics-script";
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.id = "google-analytics-init";
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `;
        document.head.appendChild(script2);
      })
      .catch(() => {});

    return () => {
      mounted = false;
    };
  }, []);

  return null;
}
