import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rndtechnosoft.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/services',
    '/industries',
    '/portfolio',
    '/insights',
    '/blogs',
    '/career',
    '/privacy-policy',
    '/terms-of-service',
    '/cookies-policy',
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return staticEntries;
}
