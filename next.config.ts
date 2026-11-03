import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "http://localhost:3014/uploads/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/ecommerce-platforms",
        destination: "/technology-solution/ecommerce-platform-engineering",
        permanent: true,
      },
      {
        source: "/services/web-cloud",
        destination: "/technology-solution/cloud-infrastructure-devops",
        permanent: true,
      },
      {
        source: "/services/mobile-apps",
        destination: "/technology-solution/mobile-applications",
        permanent: true,
      },
      {
        source: "/services/seo-search",
        destination: "/digital-marketing/technical-seo-dominance",
        permanent: true,
      },
      {
        source: "/services/social-media",
        destination: "/digital-marketing/social-media-management",
        permanent: true,
      },
      {
        source: "/services/brand-identity",
        destination: "/branding-design/brand-identity-systems",
        permanent: true,
      },
      {
        source: "/services/commercial-media",
        destination: "/media-production/commercial-video-production",
        permanent: true,
      },
      {
        source: "/services/dedicated-squads",
        destination: "/media-production/dedicated-squads",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
