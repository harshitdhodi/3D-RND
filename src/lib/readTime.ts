/**
 * Auto-calculate reading time from text or HTML content
 * Average reading speed: ~200 words per minute
 */
export function calculateReadTime(content?: string | null): string {
  if (!content || typeof content !== "string") {
    return "3 min read";
  }

  // Strip HTML tags and common entities
  const clean = content
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

  if (!clean) {
    return "1 min read";
  }

  const words = clean.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

