import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3058';

const DEFAULT_ROBOTS = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://rndtechnosoft.com/sitemap.xml`;

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/seo/settings`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const json = await res.json();
      const robotsContent = json?.data?.robotsTxt;
      if (robotsContent && typeof robotsContent === 'string' && robotsContent.trim()) {
        return new NextResponse(robotsContent, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
          },
        });
      }
    }
  } catch {}

  return new NextResponse(DEFAULT_ROBOTS, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
