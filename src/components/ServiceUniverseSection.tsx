"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  Layers,
  Code2,
  TrendingUp,
  Palette,
  Video,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

// ============================================================================
// GENUINE BRAND SVG LOGOS (IN ACTUAL OFFICIAL BRAND COLORS)
// ============================================================================

export function FullColorToolLogo({
  name,
  className = "w-6 h-6 sm:w-7 sm:h-7",
}: {
  name: string;
  className?: string;
}) {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // React.js (Cyan #61DAFB)
  if (norm.includes("react")) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.9" />
          <ellipse rx="11" ry="4.9" transform="rotate(60)" />
          <ellipse rx="11" ry="4.9" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Next.js (Black & White circle)
  if (norm.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" stroke="#333333" strokeWidth="3" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="#FFFFFF"
        />
        <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  // TypeScript (Blue #3178C6)
  if (norm.includes("type") || norm.includes("ts")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path
          fill="#FFFFFF"
          d="M3 8.2h6.2V10H6.8v8.8H4.6V10H3V8.2zm11.7 5.1c.4.3.9.5 1.5.5.6 0 1-.2 1-.6 0-.3-.2-.5-1-.8l-1.3-.4c-1.2-.4-1.8-1.2-1.8-2.2 0-1.4 1.1-2.4 2.8-2.4 1 0 1.8.3 2.4.7l-.6 1.6c-.5-.3-1.1-.5-1.7-.5-.6 0-1 .2-1 .6 0 .3.3.5 1 .7l1.2.4c1.4.4 2 1.2 2 2.3 0 1.5-1.1 2.5-3 2.5-1.2 0-2.1-.3-2.8-.8l.8-1.6z"
        />
      </svg>
    );
  }

  // Node.js (Green #539E43)
  if (norm.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 256 289">
        <path fill="#539E43" d="M128 0L24 60v120l104 60 104-60V60L128 0z" />
        <path fill="#333333" d="M128 20L44 68v104l84 48 84-48V68L128 20z" opacity="0.3" />
        <path
          fill="#FFFFFF"
          d="M128 65l-50 29v58l50 29 50-29V94l-50-29zm28 71l-28 16-28-16v-32l28-16 28 16v32z"
        />
      </svg>
    );
  }

  // MongoDB (Leaf #00ED64 and #00684A)
  if (norm.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          fill="#00ED64"
          d="M12 0C11.66 0 11.23.16 10.95.42C8.6 2.5 4.5 7.6 4.5 12.87C4.5 17.65 8.1 21.6 12 24C15.9 21.6 19.5 17.65 19.5 12.87C19.5 7.6 15.4 2.5 13.05.42C12.77.16 12.34 0 12 0Z"
        />
        <path
          fill="#00684A"
          d="M12 0v24c3.9-2.4 7.5-6.35 7.5-11.13C19.5 7.6 15.4 2.5 13.05.42C12.77.16 12.34 0 12 0Z"
        />
        <path
          fill="#FFFFFF"
          d="M12 2.37v19.38C12 21.75 9.5 19.8 6.8 12.87c0-3.37 4-8.8 5.2-10.5Z"
          opacity="0.25"
        />
      </svg>
    );
  }

  // SQL / PostgreSQL (Royal Blue #336791 and Cyan #4B8BBE)
  if (norm.includes("sql") || norm.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="#5A9FD4" />
        <path d="M4 5v5c0 1.66 3.58 3 8 3s8-1.34 8-3V5" fill="#336791" />
        <ellipse cx="12" cy="10" rx="8" ry="3" fill="#4B8BBE" />
        <path d="M4 10v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" fill="#295172" />
        <ellipse cx="12" cy="15" rx="8" ry="3" fill="#336791" />
        <path d="M4 15v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="#1C3D5A" />
      </svg>
    );
  }

  // GraphQL (Pink #E10098)
  if (norm.includes("graphql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E10098">
        <path d="M12 2L3 7.2v10.6L12 23l9-5.2V7.2L12 2zm0 2.3l6.9 4v7.9L12 20.2l-6.9-4V8.3L12 4.3z" />
        <circle cx="12" cy="2" r="2" />
        <circle cx="3" cy="7.2" r="2" />
        <circle cx="21" cy="7.2" r="2" />
        <circle cx="3" cy="17.8" r="2" />
        <circle cx="21" cy="17.8" r="2" />
        <circle cx="12" cy="23" r="2" />
      </svg>
    );
  }

  // Docker (Blue #2496ED)
  if (norm.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.929 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185M23.959 9.9c-.31-.83-.87-1.42-1.74-1.72-.64-.22-1.3-.23-1.96-.06-.32.08-.62.24-.92.39-.24.12-.47.23-.7.34-.14.07-.3.1-.47.1H17.5v2.85h.69c.56 0 1.13-.08 1.68-.25.86-.27 1.58-.76 2.1-1.47.16-.22.31-.46.45-.71.07-.12.13-.24.2-.36.31-.56.66-.99 1.34-1.11z" />
      </svg>
    );
  }

  // Kubernetes
  if (norm.includes("kuber") || norm.includes("k8s")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#326CE5">
        <path d="M11.968 0C8.381 0 5.176 1.705 3.09 4.382l2.36 1.777C7.03 3.918 9.362 2.8 11.968 2.8c4.957 0 9 3.951 9 8.8 0 4.85-4.043 8.8-9 8.8-2.606 0-4.938-1.118-6.518-2.959L3.09 19.218C5.176 21.895 8.381 23.6 11.968 23.6c6.627 0 12-5.193 12-11.6S18.595 0 11.968 0zM12 7l4 3.5v5L12 19l-4-3.5v-5L12 7z" />
      </svg>
    );
  }

  // AWS
  if (norm.includes("aws") || norm.includes("amazon")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M6.5 10.5c0-.83.67-1.5 1.5-1.5h1v-2H8c-1.93 0-3.5 1.57-3.5 3.5v5h2v-5zm5-3.5h-2v7h2v-7zm6 3.5c0-.83.67-1.5 1.5-1.5h1v-2h-1c-1.93 0-3.5 1.57-3.5 3.5v5h2v-5z" fill="#FF9900" />
        <path d="M4 18.5c4.5 2.5 11.5 2.5 16 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
        <path d="M18.5 16.5l2 2-2 2" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Terraform
  if (norm.includes("terraform")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#844FBA">
        <path d="M1.5 2.5L7.5 6v7L1.5 9.5zM8.5 6.5L14.5 10v7L8.5 13.5zM15.5 10.5L21.5 14v7l-6-3.5zM1.5 10.5L7.5 14v7l-6-3.5z" />
      </svg>
    );
  }

  // Redis
  if (norm.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#DC382D">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4.5 7 12 3.5 19.5 7 12 10.5zM2 9.5v5l10 5 10-5v-5l-10 5-10-5zm0 5v5l10 5 10-5v-5l-10 5-10-5z" />
      </svg>
    );
  }

  // Shopify
  if (norm.includes("shopify")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#95BF47">
        <path d="M18.8 6.2l-2.4-.6c-.2-.1-.4 0-.5.2l-1.3 2.7c-.1.2-.4.3-.6.2L12 7.7l-2 1c-.2.1-.4 0-.5-.2L8.2 5.8c-.1-.2-.3-.3-.5-.2l-2.4.6c-.4.1-.7.5-.6.9l2.8 14.5c.1.4.4.7.8.7h7.4c.4 0 .7-.3.8-.7l2.8-14.5c0-.4-.3-.8-.7-.9z" />
      </svg>
    );
  }

  // Firebase
  if (norm.includes("firebase")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path fill="#FFCA28" d="M3.89 15.67L6.2 2.3a.78.78 0 0 1 1.48-.22l2.91 5.48-6.7 8.11z" />
        <path fill="#FFA000" d="M13.67 9.87l-3.08-4.3a.78.78 0 0 0-1.4 0L3.89 15.67l9.78-5.8z" />
        <path fill="#FF6F00" d="M12.43 21.65a1.2 1.2 0 0 0 1.14 0l6.54-3.83-6.44-7.95-1.24 11.78z" />
      </svg>
    );
  }

  // Flutter
  if (norm.includes("flutter")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.686 0z" />
        <path fill="#0175C2" d="M14.286 11.314L8.7 16.9l5.6 5.6h7.4l-9.3-9.3z" />
        <path fill="#29B6F6" d="M8.7 16.9l2.8 2.8 2.8-2.8-2.8-2.8z" />
      </svg>
    );
  }

  // Figma
  if (norm.includes("figma")) {
    return (
      <svg className={className} viewBox="0 0 38 57">
        <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
        <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
        <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
        <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
        <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
      </svg>
    );
  }

  // PHP
  if (norm.includes("php")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
        <path
          fill="#FFFFFF"
          d="M6.5 14h-1.2l1.4-5h2.1c1.1 0 1.7.5 1.4 1.6-.3 1.1-1.1 1.6-2.1 1.6H6.8L6.5 14zm1.2-2.8h.8c.5 0 .8-.2 1-.7.1-.4 0-.7-.5-.7h-.8l-.5 1.4zm5.5 2.8H12l1.4-5h1.2l-.4 1.6h.1c.4-.7 1.1-1 1.8-.9.6.1 1 .5.8 1.3L16.2 14H15l.6-2.6c.1-.5 0-.7-.4-.8-.4-.1-.8.1-1 .7L13.2 14zm5-4.8l-.2.8c.4-.6 1.1-.9 1.8-.8.9.1 1.4.7 1.1 1.8L20 14h-1.2l.6-2.6c.1-.5 0-.7-.4-.8-.4-.1-.8.1-1 .7L17 14h-1.2l1.4-5h1zm0 0"
        />
      </svg>
    );
  }

  // Laravel
  if (norm.includes("laravel")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF2D20">
        <path d="M8.2 2.1L2.8 5.2c-.4.2-.6.7-.6 1.2v11.2c0 .5.3.9.7 1.2l5.4 3.1c.4.2.9.2 1.3 0l5.4-3.1c.4-.2.7-.7.7-1.2V6.4c0-.5-.3-.9-.7-1.2L9.5 2.1c-.4-.2-.9-.2-1.3 0zm-.3 2.1l4.4 2.5-4.4 2.5-4.4-2.5 4.4-2.5zm-5 4l4.4 2.5v5.1l-4.4-2.5V8.2zm10 0v5.1l-4.4 2.5v-5.1l4.4-2.5z" />
      </svg>
    );
  }

  // Python
  if (norm.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          fill="#3776AB"
          d="M11.9 2c-3.1 0-5 .6-5 2.5v2.1h5.1v.8H4.6C2.6 7.4 2 8.9 2 11.2s1.4 3.8 3.8 3.8h1.2v-1.7c0-1.8 1.5-3.3 3.3-3.3h5.1c1.5 0 2.6-1.1 2.6-2.6V4.5C18 2.6 15 2 11.9 2zM9.4 3.7c.5 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8z"
        />
        <path
          fill="#FFD43B"
          d="M12.1 22c3.1 0 5-.6 5-2.5v-2.1H12v-.8h7.4c2 0 2.6-1.5 2.6-3.8s-1.4-3.8-3.8-3.8h-1.2v1.7c0 1.8-1.5 3.3-3.3 3.3H8.6c-1.5 0-2.6 1.1-2.6 2.6v2.9c0 1.9 3 2.5 6.1 2.5zm2.5-1.7c-.5 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.3.8-.8.8z"
        />
      </svg>
    );
  }

  // Google Analytics 4 (GA4)
  if (norm.includes("analytics") || norm.includes("ga4")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path fill="#F9AB00" d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" />
        <rect x="5" y="13" width="3" height="6" rx="1.5" fill="#E37400" />
        <rect x="10.5" y="9" width="3" height="10" rx="1.5" fill="#FFFFFF" />
        <circle cx="17.5" cy="7" r="1.5" fill="#E37400" />
      </svg>
    );
  }

  // Google Ads
  if (norm.includes("googleads") || (norm.includes("ads") && !norm.includes("meta"))) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          fill="#FBBC04"
          d="M4.1 14.5l5.5-9.6c.7-1.2 2.3-1.6 3.5-.9l3.5 2c1.2.7 1.6 2.3.9 3.5L12 19.1c-.7 1.2-2.3 1.6-3.5.9l-3.5-2c-1.2-.7-1.6-2.3-.9-3.5z"
        />
        <circle cx="6.5" cy="17.5" r="3.5" fill="#4285F4" />
        <path
          fill="#34A853"
          d="M17.5 12l2.5 4.3c.7 1.2.3 2.7-.9 3.5l-2 1.1c-1.2.7-2.7.3-3.5-.9l-2.5-4.3 6.4-3.7z"
        />
      </svg>
    );
  }

  // Meta Ads
  if (norm.includes("meta")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path
          fill="#0081FB"
          d="M16.9 4c-2.3 0-4.3 1.5-5 3.3-.6-1.8-2.6-3.3-4.9-3.3C3.1 4 0 7.3 0 11.5 0 16 3.4 20 7.4 20c2.6 0 4.3-1.4 4.6-1.7.3.3 2 1.7 4.6 1.7 4 0 7.4-4 7.4-8.5 0-4.2-3.1-7.5-7.1-7.5zm-9.5 13c-2.4 0-4.5-2.5-4.5-5.5 0-2.8 2-5.1 4.5-5.1 2.2 0 3.7 1.8 4.2 3.8-.7 1.9-2.3 6.8-4.2 6.8zm9.5 0c-1.9 0-3.5-4.9-4.2-6.8.5-2 2-3.8 4.2-3.8 2.5 0 4.5 2.3 4.5 5.1 0 3-2.1 5.5-4.5 5.5z"
        />
      </svg>
    );
  }

  // SEMrush
  if (norm.includes("semrush")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF642D">
        <path d="M21.5 10.4c-.4-.4-1.1-.5-1.6-.1l-4.5 3.6-2.5-5.8c-.3-.6-.9-.9-1.5-.8-.6.1-1.1.6-1.2 1.2L9 14.5l-2.8-2.8c-.4-.4-1.1-.4-1.6 0-.4.4-.4 1.1 0 1.6l3.6 3.6c.4.4 1.1.4 1.6 0l1.4-6.3 2.5 5.8c.2.5.7.8 1.3.8h.2c.5-.1 1-.5 1.2-1l3.5-2.8c.5-.4.6-1.1.1-1.6-.1-.1-.1-.1-.1-.1z" />
      </svg>
    );
  }

  // Ahrefs
  if (norm.includes("ahrefs")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#0057FF">
        <path d="M12 2L2 22h4.5l2-4.5h7l2 4.5H22L12 2zm0 6l2.5 5.5h-5L12 8z" />
      </svg>
    );
  }

  // HubSpot
  if (norm.includes("hubspot")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF7A59">
        <path d="M18.8 7.2V4.9c.7-.4 1.2-1.1 1.2-2 0-1.3-1-2.3-2.3-2.3-1.3 0-2.3 1-2.3 2.3 0 .9.5 1.6 1.2 2v2.3c-.9.2-1.7.7-2.3 1.3L8.8 4.3C8.9 4 9 3.6 9 3.3c0-1.8-1.5-3.3-3.3-3.3S2.4 1.5 2.4 3.3s1.5 3.3 3.3 3.3c.7 0 1.4-.2 2-.6l5.4 4.1c-.5.8-.8 1.8-.8 2.8s.3 2 .8 2.8l-5.4 4.1c-.6-.4-1.3-.6-2-.6-1.8 0-3.3 1.5-3.3 3.3S3.9 24 5.7 24s3.3-1.5 3.3-3.3c0-.3-.1-.7-.2-1l5.5-4.2c.6.6 1.4 1.1 2.3 1.3v2.3c-.7.4-1.2 1.1-1.2 2 0 1.3 1 2.3 2.3 2.3 1.3 0 2.3-1 2.3-2.3 0-.9-.5-1.6-1.2-2v-2.3c2-.5 3.5-2.3 3.5-4.5s-1.5-4-3.5-4.5zM5.7 4.8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0 16.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm12-7.5c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z" />
      </svg>
    );
  }

  // Google Tag Manager (GTM)
  if (norm.includes("tagmanager") || norm.includes("gtm")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path fill="#246FDB" d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
        <path fill="#8AB4F8" d="M12 6l5 3v6l-5 3-5-3V9l5-3z" />
      </svg>
    );
  }

  // Google Search Console
  if (norm.includes("searchconsole") || norm.includes("console")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="5" fill="#4285F4" />
        <path d="M4 18l5-6 4 3 6-8" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  // Adobe Illustrator
  if (norm.includes("illustrator")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#330000" />
        <text
          x="4.2"
          y="16.5"
          fill="#FF9A00"
          fontFamily="system-ui, sans-serif"
          fontWeight="bold"
          fontSize="11.5"
        >
          Ai
        </text>
      </svg>
    );
  }

  // Adobe Photoshop
  if (norm.includes("photoshop")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#001E36" />
        <text
          x="3.8"
          y="16.5"
          fill="#31A8FF"
          fontFamily="system-ui, sans-serif"
          fontWeight="bold"
          fontSize="11.5"
        >
          Ps
        </text>
      </svg>
    );
  }

  // Blender 3D
  if (norm.includes("blender")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#EA7600" />
        <circle cx="12" cy="12" r="4.5" fill="#FFFFFF" />
        <circle cx="12" cy="12" r="2.5" fill="#225796" />
      </svg>
    );
  }

  // Spline 3D
  if (norm.includes("spline")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="5" fill="#141416" stroke="#FF5C00" strokeWidth="1.5" />
        <path d="M6 16c2-4 4-8 6-8s4 4 6 8" stroke="#FF5C00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  // Framer
  if (norm.includes("framer")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#0055FF">
        <path d="M4 2h16v7h-8zM4 9h8l8 7H4zM4 16h8v7z" />
      </svg>
    );
  }

  // Adobe Premiere Pro
  if (norm.includes("premiere")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#00005B" />
        <text
          x="3.8"
          y="16.5"
          fill="#9999FF"
          fontFamily="system-ui, sans-serif"
          fontWeight="bold"
          fontSize="11.5"
        >
          Pr
        </text>
      </svg>
    );
  }

  // DaVinci Resolve
  if (norm.includes("davinci") || norm.includes("resolve")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10.5" fill="#181A20" stroke="#E11D48" strokeWidth="1.5" />
        <path d="M12 4l6 11h-12z" fill="#E11D48" opacity="0.9" />
        <circle cx="12" cy="13" r="3.2" fill="#FBBF24" />
      </svg>
    );
  }

  // Adobe After Effects
  if (norm.includes("aftereffects") || norm.includes("ae")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#00005B" />
        <text
          x="3.6"
          y="16.5"
          fill="#9999FF"
          fontFamily="system-ui, sans-serif"
          fontWeight="bold"
          fontSize="11.5"
        >
          Ae
        </text>
      </svg>
    );
  }

  // RED Digital Cinema (8K)
  if (norm.includes("red")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#B91C1C" />
        <text
          x="2.4"
          y="15.8"
          fill="#FFFFFF"
          fontFamily="Impact, Arial Black, sans-serif"
          fontWeight="900"
          fontSize="9.8"
          letterSpacing="0.4"
        >
          RED
        </text>
      </svg>
    );
  }

  // Unreal Engine
  if (norm.includes("unreal")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#0E1128" stroke="#3b4458" strokeWidth="1.2" />
        <path
          fill="#FFFFFF"
          d="M12 3a9 9 0 0 0-9 9c0 3 1.5 5.8 3.9 7.4l1.8-2.8c-1.6-1.1-2.7-2.8-2.7-4.6 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.8-1.1 3.5-2.7 4.6l1.8 2.8C18.5 17.8 20 15 20 12a9 9 0 0 0-9-9zm-2 5.5v6.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V8.5H13v6c0 .6-.4 1-1 1s-1-.4-1-1v-6h-1z"
        />
      </svg>
    );
  }

  // Fallback
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FFD400" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
    </svg>
  );
}

// ============================================================================
// DATA: SERVICE CATEGORY & SUBCATEGORY TOOLS
// ============================================================================

export interface ToolItem {
  id: string;
  name: string;
  tagline: string;
}

export interface ServiceDivision {
  id: string;
  index: string;
  serviceName: string;
  tierNumber: number;
  tagline: string;
  icon: React.ElementType;
  accentGlow: string;
  tools: ToolItem[];
}

const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: "technology-solutions",
    index: "01",
    serviceName: "Technology solutions",
    tierNumber: 1,
    tagline: "Enterprise Full-Stack, Cloud Platforms & Reactive Architecture",
    icon: Code2,
    accentGlow: "#FFD400",
    tools: [
      { id: "react", name: "React.js", tagline: "Frontend Reactive Engine" },
      { id: "nodejs", name: "Node.js", tagline: "Asynchronous I/O Runtime" },
      { id: "mongodb", name: "MongoDB", tagline: "High-Scale Document DB" },
      { id: "sql", name: "PostgreSQL", tagline: "ACID Relational Storage" },
      { id: "nextjs", name: "NEXT JS", tagline: "Server Components & Edge" },
      { id: "flutter", name: "Flutter", tagline: "Native iOS & Android Engine" },
      { id: "figma-tech", name: "Figma", tagline: "Design Token Pipeline" },
      { id: "php", name: "PHP", tagline: "Modern Backend Runtime" },
      { id: "laravel", name: "LARAVEL", tagline: "Elegant MVC API Framework" },
      { id: "docker", name: "Docker", tagline: "Containerization & DevOps" },
      { id: "typescript", name: "TypeScript", tagline: "Strict Contract Safety" },
      { id: "python", name: "Python", tagline: "Neural Mesh & AI Serving" },
    ],
  },
  {
    id: "digital-marketing",
    index: "02",
    serviceName: "Digital marketing",
    tierNumber: 2,
    tagline: "Programmatic Search, High-ROI Paid Acquisition & Attribution",
    icon: TrendingUp,
    accentGlow: "#38bdf8",
    tools: [
      { id: "ga4", name: "Google Analytics 4", tagline: "Event Telemetry & Funnels" },
      { id: "google-ads", name: "Google Ads", tagline: "High-Intent Bidding" },
      { id: "meta-ads", name: "Meta Ads", tagline: "Social Growth & Lookalikes" },
      { id: "semrush", name: "SEMrush", tagline: "Keyword & SERP Intelligence" },
      { id: "ahrefs", name: "Ahrefs", tagline: "Backlink Graph Topology" },
      { id: "hubspot", name: "HubSpot", tagline: "Inbound Pipeline Automation" },
      { id: "gtm", name: "Google Tag Manager", tagline: "Serverless Event Routing" },
      { id: "search-console", name: "Search Console", tagline: "Crawl Diagnostics & Health" },
    ],
  },
  {
    id: "branding-design",
    index: "03",
    serviceName: "Branding and design",
    tierNumber: 3,
    tagline: "Spatial 3D Design Systems, Key Visuals & Brand Identities",
    icon: Palette,
    accentGlow: "#c084fc",
    tools: [
      { id: "figma-brand", name: "Figma", tagline: "Vector Design Systems" },
      { id: "illustrator", name: "Adobe Illustrator", tagline: "Precision Vector Identity" },
      { id: "photoshop", name: "Adobe Photoshop", tagline: "Key Visuals & Retouching" },
      { id: "blender-3d", name: "Blender 3D", tagline: "Photorealistic PBR 3D" },
      { id: "spline-3d", name: "Spline 3D", tagline: "Interactive WebGL 3D" },
      { id: "framer", name: "Framer", tagline: "Spatial Interaction Design" },
      { id: "after-effects-design", name: "After Effects", tagline: "Kinetic Motion Typography" },
    ],
  },
  {
    id: "media-production",
    index: "04",
    serviceName: "Media production",
    tierNumber: 4,
    tagline: "8K Cinema Cameras, Color Grading, Virtual Production & Sound",
    icon: Video,
    accentGlow: "#f43f5e",
    tools: [
      { id: "premiere", name: "Adobe Premiere Pro", tagline: "Cinema Narrative Assembly" },
      { id: "davinci", name: "DaVinci Resolve", tagline: "ACES Color Science & Audio" },
      { id: "after-effects-media", name: "Adobe After Effects", tagline: "3D VFX & Screen Tracking" },
      { id: "red-cinema", name: "RED Digital Cinema (8K)", tagline: "8K RAW Film Sensors" },
      { id: "unreal", name: "Unreal Engine", tagline: "In-Camera Virtual Production" },
      { id: "blender-cgi", name: "Blender CGI", tagline: "Particle Simulations & FX" },
    ],
  },
];

// ============================================================================
// SUBCATEGORY SPECIFIC TAILORED TOOLS (Only the tools used for that subcategory)
// ============================================================================

const SUBCATEGORY_TOOLS_MAP: Record<string, { title: string; subtitle: string; tools: ToolItem[] }> = {
  // Technology Solutions subcategories
  "web-development": {
    title: "CUSTOM WEB DEVELOPMENT TECH STACK",
    subtitle: "Enterprise frontend frameworks, serverless runtimes, and database architectures deployed for web platforms.",
    tools: [
      { id: "react", name: "React.js", tagline: "Frontend Reactive Engine" },
      { id: "nextjs", name: "NEXT JS", tagline: "Server Components & Edge SSR" },
      { id: "typescript", name: "TypeScript", tagline: "Strict Type Safety" },
      { id: "tailwind", name: "Tailwind CSS", tagline: "Atomic Design Tokens" },
      { id: "nodejs", name: "Node.js", tagline: "Asynchronous I/O Runtime" },
      { id: "sql", name: "PostgreSQL", tagline: "ACID Relational Storage" },
      { id: "mongodb", name: "MongoDB", tagline: "High-Scale Document DB" },
      { id: "graphql", name: "GraphQL", tagline: "API Query Gateway" },
      { id: "docker", name: "Docker", tagline: "Containerization & Isolation" },
    ],
  },
  "cloud-infrastructure-devops": {
    title: "CLOUD INFRASTRUCTURE & DEVOPS STACK",
    subtitle: "Production-grade cloud containerization, multi-region mesh, and IaC pipelines.",
    tools: [
      { id: "docker", name: "Docker", tagline: "Production Container Images" },
      { id: "kubernetes", name: "Kubernetes", tagline: "Auto-Healing Pod Clusters" },
      { id: "aws", name: "AWS Cloud", tagline: "Multi-Region Cloud Mesh" },
      { id: "terraform", name: "Terraform", tagline: "Infrastructure as Code" },
      { id: "nodejs", name: "Node.js", tagline: "Edge Serverless Functions" },
      { id: "python", name: "Python", tagline: "DevOps Automation & Scripts" },
      { id: "sql", name: "PostgreSQL", tagline: "HA Database Clusters" },
      { id: "redis", name: "Redis", tagline: "Distributed Session Store" },
    ],
  },
  "enterprise-software-solutions": {
    title: "ENTERPRISE SOFTWARE ARCHITECTURE STACK",
    subtitle: "Mission-critical backend runtimes, high-concurrency microservices, and enterprise relational databases.",
    tools: [
      { id: "nextjs", name: "NEXT JS", tagline: "Enterprise Frontends" },
      { id: "typescript", name: "TypeScript", tagline: "Strict Contract Safety" },
      { id: "nodejs", name: "Node.js", tagline: "High-Throughput APIs" },
      { id: "python", name: "Python", tagline: "AI Data Pipelines & Services" },
      { id: "sql", name: "PostgreSQL", tagline: "Enterprise Relational DB" },
      { id: "redis", name: "Redis Cluster", tagline: "Sub-Millisecond Cache" },
      { id: "docker", name: "Docker", tagline: "Containerization" },
      { id: "kubernetes", name: "Kubernetes", tagline: "Auto-Scaling Pods" },
    ],
  },
  "ecommerce-platform-engineering": {
    title: "E-COMMERCE PLATFORM ENGINEERING STACK",
    subtitle: "Headless commerce storefronts, high-converting checkout engines, and real-time inventory caching.",
    tools: [
      { id: "shopify", name: "Shopify Plus", tagline: "Headless Commerce Engine" },
      { id: "nextjs", name: "NEXT JS", tagline: "Sub-Second Edge Storefront" },
      { id: "react", name: "React.js", tagline: "Dynamic Cart & Checkout" },
      { id: "typescript", name: "TypeScript", tagline: "Payment Flow Integrity" },
      { id: "tailwind", name: "Tailwind CSS", tagline: "Conversion UI Tokens" },
      { id: "nodejs", name: "Node.js", tagline: "Checkout Webhook Runtime" },
      { id: "sql", name: "PostgreSQL", tagline: "Order & Inventory Storage" },
      { id: "redis", name: "Redis", tagline: "Flash Sale Cart Cache" },
    ],
  },
  "mobile-applications": {
    title: "MOBILE APPLICATION ENGINEERING STACK",
    subtitle: "Cross-platform native mobile frameworks, 60 FPS spring micro-interactions, and real-time synchronization.",
    tools: [
      { id: "flutter", name: "Flutter", tagline: "Cross-Platform Native Engine" },
      { id: "react", name: "React Native", tagline: "Universal iOS & Android" },
      { id: "firebase", name: "Firebase", tagline: "Realtime Mobile Sync" },
      { id: "typescript", name: "TypeScript", tagline: "100% Type Safe Mobile" },
      { id: "nodejs", name: "Node.js", tagline: "Mobile Backend & Webhooks" },
      { id: "figma-tech", name: "Figma", tagline: "Mobile Design Tokens" },
      { id: "sql", name: "PostgreSQL", tagline: "Relational Sync DB" },
    ],
  },
  "microservices-api-mesh": {
    title: "MICROSERVICES & API MESH STACK",
    subtitle: "Decoupled distributed services, high-throughput gRPC communication, and event-driven data streaming.",
    tools: [
      { id: "docker", name: "Docker", tagline: "Microservice Packaging" },
      { id: "kubernetes", name: "Kubernetes", tagline: "Service Mesh Orchestrator" },
      { id: "nodejs", name: "Node.js", tagline: "Event-Driven Microservices" },
      { id: "python", name: "Python", tagline: "Data Ingestion Services" },
      { id: "graphql", name: "GraphQL", tagline: "Unified Graph Gateway" },
      { id: "redis", name: "Redis", tagline: "Pub/Sub Event Bus" },
      { id: "sql", name: "PostgreSQL", tagline: "Decoupled DB Shards" },
    ],
  },

  // Digital Marketing subcategories
  "technical-seo-dominance": {
    title: "TECHNICAL SEO & SEARCH DOMINANCE STACK",
    subtitle: "Algorithmic keyword intelligence, backlink graph telemetry, and search crawl diagnostic tools.",
    tools: [
      { id: "semrush", name: "SEMrush", tagline: "SERP & Competitor Intelligence" },
      { id: "ahrefs", name: "Ahrefs", tagline: "Backlink Graph Topology" },
      { id: "search-console", name: "Search Console", tagline: "Crawl Diagnostics & Health" },
      { id: "ga4", name: "Google Analytics 4", tagline: "Organic Attribution Funnels" },
      { id: "gtm", name: "Google Tag Manager", tagline: "Structured Data Injection" },
    ],
  },
  "performance-ppc-advertising": {
    title: "PERFORMANCE PPC & PAID MEDIA STACK",
    subtitle: "Multi-channel paid acquisition platforms, conversion value tracking, and attribution telemetry.",
    tools: [
      { id: "google-ads", name: "Google Ads", tagline: "High-Intent Keyword Bidding" },
      { id: "meta-ads", name: "Meta Ads", tagline: "Paid Social & Retargeting" },
      { id: "ga4", name: "Google Analytics 4", tagline: "Multi-Touch Conversion Path" },
      { id: "gtm", name: "Google Tag Manager", tagline: "Conversion Value Routing" },
      { id: "hubspot", name: "HubSpot", tagline: "Lead Qualification CRM" },
    ],
  },
  "social-media-management": {
    title: "SOCIAL MEDIA STRATEGY & ADS STACK",
    subtitle: "Paid social campaign management, visual content design tokens, and pipeline tracking.",
    tools: [
      { id: "meta-ads", name: "Meta Ads", tagline: "Community Engagement & Ads" },
      { id: "figma-brand", name: "Figma", tagline: "Social Asset Design Tokens" },
      { id: "photoshop", name: "Adobe Photoshop", tagline: "Visual Graphics & Retouching" },
      { id: "ga4", name: "Google Analytics 4", tagline: "Social Referral Telemetry" },
      { id: "hubspot", name: "HubSpot", tagline: "Social Pipeline Tracking" },
    ],
  },
  "content-strategy-production": {
    title: "CONTENT STRATEGY & COPYWRITING STACK",
    subtitle: "Search volume research, content gap audits, and conversion editorial lead nurturing.",
    tools: [
      { id: "semrush", name: "SEMrush", tagline: "Topic Cluster Discovery" },
      { id: "ahrefs", name: "Ahrefs", tagline: "Content Gap Analysis" },
      { id: "search-console", name: "Search Console", tagline: "Impression & CTR Tracking" },
      { id: "ga4", name: "Google Analytics 4", tagline: "Content Engagement Rates" },
      { id: "hubspot", name: "HubSpot", tagline: "Lead Magnet Nurturing" },
    ],
  },

  // Branding & Design subcategories
  "brand-identity-systems": {
    title: "BRAND IDENTITY & DESIGN SYSTEMS STACK",
    subtitle: "Precision vector identity creation, typography systems, and kinetic brand motion assets.",
    tools: [
      { id: "figma-brand", name: "Figma", tagline: "Vector Design Tokens & Guides" },
      { id: "illustrator", name: "Adobe Illustrator", tagline: "Mathematical Vector Geometry" },
      { id: "photoshop", name: "Adobe Photoshop", tagline: "Brand Imagery & Retouching" },
      { id: "after-effects-design", name: "After Effects", tagline: "Kinetic Logo Animation" },
    ],
  },
  "ui-ux-spatial-design": {
    title: "UI/UX & SPATIAL WEB DESIGN STACK",
    subtitle: "Interactive design component systems, 3D WebGL scenes, and 60 FPS micro-interaction prototypes.",
    tools: [
      { id: "figma-brand", name: "Figma", tagline: "Interactive Component Libraries" },
      { id: "spline-3d", name: "Spline 3D", tagline: "Interactive WebGL 3D" },
      { id: "blender-3d", name: "Blender 3D", tagline: "Photorealistic 3D Assets" },
      { id: "framer", name: "Framer", tagline: "60 FPS Interaction Physics" },
      { id: "after-effects-design", name: "After Effects", tagline: "Micro-Interaction Timing" },
    ],
  },

  // Media Production subcategories
  "commercial-video-production": {
    title: "COMMERCIAL VIDEO PRODUCTION STACK",
    subtitle: "8K cinema camera sensors, DaVinci Resolve color science, and multi-track narrative editing.",
    tools: [
      { id: "red-cinema", name: "RED Digital Cinema (8K)", tagline: "8K RAW Film Sensors" },
      { id: "premiere", name: "Adobe Premiere Pro", tagline: "Cinema Narrative Assembly" },
      { id: "davinci", name: "DaVinci Resolve", tagline: "Color Science & Mastering" },
      { id: "after-effects-media", name: "Adobe After Effects", tagline: "Motion Tracking & Titles" },
    ],
  },
  "motion-graphics-3d-cgi": {
    title: "3D CGI & MOTION GRAPHICS STACK",
    subtitle: "Real-time virtual production in Unreal Engine, particle simulations, and kinetic typography VFX.",
    tools: [
      { id: "unreal", name: "Unreal Engine", tagline: "Real-Time 3D Rendering" },
      { id: "blender-cgi", name: "Blender CGI", tagline: "Particle & Physics Simulations" },
      { id: "after-effects-media", name: "Adobe After Effects", tagline: "Kinetic Typography & VFX" },
      { id: "davinci", name: "DaVinci Resolve", tagline: "HDR Color & Audio Master" },
    ],
  },
};

// Aliases for legacy service IDs
SUBCATEGORY_TOOLS_MAP["web-cloud"] = SUBCATEGORY_TOOLS_MAP["web-development"];
SUBCATEGORY_TOOLS_MAP["ecommerce-platforms"] = SUBCATEGORY_TOOLS_MAP["ecommerce-platform-engineering"];
SUBCATEGORY_TOOLS_MAP["mobile-apps"] = SUBCATEGORY_TOOLS_MAP["mobile-applications"];
SUBCATEGORY_TOOLS_MAP["seo-search"] = SUBCATEGORY_TOOLS_MAP["technical-seo-dominance"];
SUBCATEGORY_TOOLS_MAP["social-media"] = SUBCATEGORY_TOOLS_MAP["social-media-management"];
SUBCATEGORY_TOOLS_MAP["brand-identity"] = SUBCATEGORY_TOOLS_MAP["brand-identity-systems"];
SUBCATEGORY_TOOLS_MAP["commercial-media"] = SUBCATEGORY_TOOLS_MAP["commercial-video-production"];

function mapCategoryToDivision(category?: string): ServiceDivision | null {
  if (!category) return null;
  const c = category.toLowerCase();
  if (
    c.includes("tech") ||
    c.includes("web") ||
    c.includes("cloud") ||
    c.includes("software") ||
    c.includes("dev")
  ) {
    return SERVICE_DIVISIONS[0]; // Technology Solutions
  }
  if (
    c.includes("market") ||
    c.includes("seo") ||
    c.includes("growth") ||
    c.includes("ppc") ||
    c.includes("social")
  ) {
    return SERVICE_DIVISIONS[1]; // Digital Marketing
  }
  if (
    c.includes("brand") ||
    c.includes("design") ||
    c.includes("identity") ||
    c.includes("ui") ||
    c.includes("ux")
  ) {
    return SERVICE_DIVISIONS[2]; // Branding and Design
  }
  if (
    c.includes("media") ||
    c.includes("video") ||
    c.includes("film") ||
    c.includes("motion") ||
    c.includes("cgi")
  ) {
    return SERVICE_DIVISIONS[3]; // Media Production
  }
  return null;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ServiceUniverseSection({
  className = "",
  categoryFilter,
  subcategoryId,
  showCategoryTabs = false,
}: {
  className?: string;
  categoryFilter?: string;
  subcategoryId?: string;
  showCategoryTabs?: boolean;
} = {}) {
  // Normalize subcategory id
  const subKey = (subcategoryId || "").toLowerCase();
  const subcategoryConfig = subKey ? SUBCATEGORY_TOOLS_MAP[subKey] : null;

  // Resolve matching division for category pages
  const matchedDivision = mapCategoryToDivision(categoryFilter);

  // If subcategory config is found, render the exact tools for that subcategory!
  if (subcategoryConfig) {
    return (
      <section
        id="service-universe"
        className={`relative w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-24 text-white overflow-hidden select-none bg-transparent border-t border-white/10 ${className}`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FFD400]/[0.025] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header without filter tabs */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/85 border border-[#FFD400]/40 text-[#FFD400] shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VERIFIED PRODUCTION TECH STACK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.05] text-white">
              {subcategoryConfig.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-[#FFD400]">
                {subcategoryConfig.title.split(" ").slice(-1)[0]}
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-normal mt-3 leading-relaxed text-neutral-300 font-[family-name:var(--font-jakarta)]">
              {subcategoryConfig.subtitle}
            </p>
          </div>

          {/* Clean Focused Tool Grid */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#0c0e14] border border-white/10 shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {subcategoryConfig.tools.map((t) => (
                <div
                  key={t.id}
                  className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FFD400]/70 flex flex-col items-center justify-center p-4 sm:p-5 transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-[0_0_20px_rgba(255,212,0,0.2)] cursor-default"
                  title={t.name}
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center mb-3">
                    <FullColorToolLogo name={t.name} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors font-mono text-center truncate max-w-full">
                    {t.name}
                  </h4>
                  <span className="text-[10px] text-neutral-400 font-light text-center line-clamp-1 mt-0.5 font-[family-name:var(--font-jakarta)]">
                    {t.tagline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If on a specific category page, render ONLY that category's technologies with NO filter tabs
  if (matchedDivision) {
    const Icon = matchedDivision.icon;
    return (
      <section
        id="service-universe"
        className={`relative w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-24 text-white overflow-hidden select-none bg-transparent border-t border-white/10 ${className}`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FFD400]/[0.025] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header without filter tabs */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/85 border border-[#FFD400]/40 text-[#FFD400] shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIVISION 0{matchedDivision.tierNumber} {"//"} PRODUCTION TECHNOLOGY ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.05] text-white">
              {matchedDivision.serviceName}{" "}
              <span className="text-[#FFD400]">TECHNOLOGY ARCHITECTURE</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-normal mt-3 leading-relaxed text-neutral-300 font-[family-name:var(--font-jakarta)]">
              {matchedDivision.tagline}
            </p>
          </div>

          {/* Focused Division Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#0c0e14] border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center p-2 shadow-lg"
                style={{
                  backgroundColor: `${matchedDivision.accentGlow}20`,
                  color: matchedDivision.accentGlow,
                }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span
                  className="text-[10px] font-mono uppercase tracking-widest block font-bold"
                  style={{ color: matchedDivision.accentGlow }}
                >
                  DIVISION 0{matchedDivision.tierNumber} {"//"} ACTIVE ECOSYSTEM
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-[family-name:var(--font-syne)]">
                  {matchedDivision.serviceName}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
              {matchedDivision.tools.map((t) => (
                <div
                  key={t.id}
                  className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FFD400]/70 flex flex-col items-center justify-center p-4 sm:p-5 transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-[0_0_20px_rgba(255,212,0,0.2)] cursor-default"
                  title={t.name}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-2.5">
                    <FullColorToolLogo name={t.name} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-[#FFD400] transition-colors font-mono text-center truncate max-w-full">
                    {t.name}
                  </h4>
                  <span className="text-[10px] text-neutral-400 font-light text-center line-clamp-1 mt-0.5 font-[family-name:var(--font-jakarta)]">
                    {t.tagline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Fallback for general services page: Show all 4 divisions
  return (
    <section
      id="service-universe"
      className={`relative py-20 sm:py-28 lg:py-32 text-white overflow-hidden scroll-mt-20 select-none bg-[#050608] transform-gpu ${className}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.035)_0%,_rgba(255,212,0,0.025)_40%,_transparent_70%)] pointer-events-none transform-gpu" />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/85 border border-[#FFD400]/40 text-[#FFD400] shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SERVICE UNIVERSE // INTEGRATED TECHNOLOGY ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[0.98] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              MULTIVERSE <span className="text-[#FFD400]">TECHNOLOGY ARCHITECTURE</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-normal mt-3 leading-relaxed text-neutral-300 max-w-2xl mx-auto font-[family-name:var(--font-jakarta)]">
              Explore our verified enterprise tech stacks and specialized tool ecosystems across Technology, Digital Marketing, Branding &amp; Design, and Media Production. Official brand logos in genuine colors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {SERVICE_DIVISIONS.map((division) => {
              const Icon = division.icon;

              return (
                <div
                  key={division.id}
                  className="relative rounded-3xl p-6 sm:p-8 bg-[#0c0e14] border border-white/10 hover:border-white/30 transition-colors duration-300 shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center p-2 shadow-lg"
                        style={{
                          backgroundColor: `${division.accentGlow}20`,
                          color: division.accentGlow,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span
                          className="text-[10px] font-mono uppercase tracking-widest block font-bold"
                          style={{ color: division.accentGlow }}
                        >
                          DIVISION 0{division.tierNumber} {"//"} ACTIVE ECOSYSTEM
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-[family-name:var(--font-syne)]">
                          {division.serviceName}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-3.5">
                    {division.tools.map((t) => (
                      <div
                        key={t.id}
                        className="group relative aspect-square rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-[#FFD400]/70 flex flex-col items-center justify-center p-3 transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-[0_0_20px_rgba(255,212,0,0.2)] cursor-default"
                        title={t.name}
                      >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                          <FullColorToolLogo name={t.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none px-2.5 py-1 rounded-md bg-black/95 border border-white/20 text-[11px] font-mono text-white whitespace-nowrap z-30 shadow-2xl">
                          <span className="text-[#FFD400] font-bold">{t.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
