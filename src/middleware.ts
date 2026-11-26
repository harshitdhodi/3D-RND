import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface RedirectRule {
  sourceUrl: string;
  targetUrl: string;
  statusCode?: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3058';

let cachedRedirects: RedirectRule[] = [];
let lastFetchTime = 0;
const CACHE_TTL_MS = 30000; // 30 seconds memory cache

async function getActiveRedirects(): Promise<RedirectRule[]> {
  const now = Date.now();
  if (cachedRedirects.length > 0 && now - lastFetchTime < CACHE_TTL_MS) {
    return cachedRedirects;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/seo/redirects/public`, {
      next: { revalidate: 30 },
      signal: AbortSignal.timeout(3000),
    });

    if (res.ok) {
      const json = await res.json();
      if (json && Array.isArray(json.data)) {
        cachedRedirects = json.data;
        lastFetchTime = now;
        return cachedRedirects;
      }
    }
  } catch {
    // Fail gracefully — never break normal traffic
  }

  return cachedRedirects;
}

function recordHit(sourceUrl: string) {
  fetch(`${API_BASE_URL}/api/seo/redirects/hit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sourceUrl }),
  }).catch(() => {});
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, Next internals, and APIs
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/banner') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/Industries') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const redirects = await getActiveRedirects();
  if (!redirects || redirects.length === 0) {
    return NextResponse.next();
  }

  const normalizedPath = pathname.toLowerCase();
  const rule = redirects.find((r) => {
    if (!r.sourceUrl) return false;
    const src = r.sourceUrl.trim().toLowerCase();
    return src === normalizedPath || src === normalizedPath + '/' || src + '/' === normalizedPath;
  });

  if (rule && rule.targetUrl) {
    // Fire-and-forget hit counter for the admin dashboard
    recordHit(rule.sourceUrl);

    const status = rule.statusCode === 302 ? 302 : 301;
    let target = rule.targetUrl.trim();

    if (target.startsWith('http://') || target.startsWith('https://')) {
      return NextResponse.redirect(new URL(target), status);
    }

    if (!target.startsWith('/')) {
      target = '/' + target;
    }

    return NextResponse.redirect(new URL(target, request.url), status);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
