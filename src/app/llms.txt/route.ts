import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3058';

const DEFAULT_LLM_TXT = `# RND Technosoft

## About Us
RND Technosoft is a full-service digital agency providing web development, custom software, digital marketing, branding, and media production services for businesses worldwide.

## Core Capabilities
- Custom Web & Software Engineering
- 3D Interactive Web Experiences
- Enterprise Digital Solutions
- Sector-Specific Digital Platforms`;

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/seo/settings`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) {
      const json = await res.json();
      const llmContent = json?.data?.llmTxt;
      if (llmContent && typeof llmContent === 'string' && llmContent.trim()) {
        return new NextResponse(llmContent, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
          },
        });
      }
    }
  } catch {}

  return new NextResponse(DEFAULT_LLM_TXT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
