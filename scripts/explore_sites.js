const urls = [
  { name: 'Moultool Systems', url: 'https://moultoolsystems.com/' },
  { name: 'OPPL Packaging Demo', url: 'https://rndtd.com/demos/oppl/' },
  { name: 'HygineLab', url: 'http://hyginelab.com/' },
  { name: 'Jyoti Umbrella', url: 'https://jyoti-umbrella-taupe.vercel.app/' },
  { name: 'TAGA', url: 'https://taga.co.in/' }
];

async function explore() {
  for (const item of urls) {
    console.log('====================================');
    console.log(`EXPLORING: ${item.name} (${item.url})`);
    console.log('====================================');
    try {
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        signal: AbortSignal.timeout(15000)
      });
      console.log('HTTP Status:', res.status);
      const text = await res.text();
      
      const titleMatch = text.match(/<title[^>]*>([^<]+)<\/title>/i);
      console.log('Page Title:', titleMatch ? titleMatch[1].trim() : 'No title');

      const metaDesc = text.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
      console.log('Meta Description:', metaDesc ? metaDesc[1].trim() : 'No meta description');

      const h1s = [];
      const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
      let m;
      while ((m = h1Regex.exec(text)) !== null) {
        h1s.push(m[1].replace(/<[^>]+>/g, '').trim());
      }
      console.log('H1 Headings:', h1s.filter(Boolean));

      const h2s = [];
      const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
      while ((m = h2Regex.exec(text)) !== null) {
        h2s.push(m[1].replace(/<[^>]+>/g, '').trim());
      }
      console.log('H2 Headings (first 6):', h2s.filter(Boolean).slice(0, 6));

      // Extract nav items or main keywords
      const navLinks = [];
      const aRegex = /<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
      while ((m = aRegex.exec(text)) !== null) {
        const linkText = m[2].replace(/<[^>]+>/g, '').trim();
        if (linkText.length > 2 && linkText.length < 30 && !navLinks.includes(linkText)) {
          navLinks.push(linkText);
        }
      }
      console.log('Navigation / Anchor Links (sample):', navLinks.slice(0, 15));

      // Extract text content snippet
      const cleanText = text
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      console.log('Content Snippet (first 400 chars):', cleanText.slice(0, 400));
      console.log('\n');
    } catch (err) {
      console.error(`Failed to fetch ${item.url}:`, err.message);
    }
  }
}

explore();
