const API_BASE_URL = 'http://localhost:3058';

async function testFetch() {
  const slug = 'website-and-web-application-projects';
  console.log('Testing fetches for slug:', slug);

  const t0 = Date.now();
  try {
    const [catsRes, projectsRes, headingRes, ctaRes] = await Promise.all([
      fetch(`${API_BASE_URL}/api/data/portfolio_categories`).then(r => r.json()),
      fetch(`${API_BASE_URL}/api/data/portfolio_project`).then(r => r.json()),
      fetch(`${API_BASE_URL}/api/data/heading`).then(r => r.json()),
      fetch(`${API_BASE_URL}/api/data/portfolio_cta`).then(r => r.json()),
    ]);

    console.log(`Initial batch took ${Date.now() - t0}ms`);
    console.log('Categories count:', catsRes?.data?.length);
    console.log('Projects count:', projectsRes?.data?.length);

    const catsData = catsRes?.data || [];
    const foundCategory = catsData.find(
      (c) => (c.slug || "").toLowerCase().trim() === slug.toLowerCase().trim()
    );

    if (foundCategory) {
      console.log('Found category:', foundCategory.title, foundCategory.slug);
      const catSlug = foundCategory.slug.toLowerCase().trim();
      const allProjects = projectsRes?.data || [];
      const filtered = allProjects.filter((doc) => {
        const pCat = (doc.category_populated?.slug || doc.category_slug || doc.category || "").toLowerCase().trim();
        return (pCat === catSlug || pCat.includes(catSlug) || catSlug.includes(pCat));
      });
      console.log('Filtered projects count:', filtered.length);
      filtered.forEach((p, i) => console.log(`[${i+1}]`, p.project_title || p.title, '| slug:', p.slug, '| p_link:', p.p_link, '| image:', p.image));

      const t1 = Date.now();
      const [faqsRes, heroRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/data/portfolio_faqs?category_slug=${catSlug}`).then(r => r.json()),
        fetch(`${API_BASE_URL}/api/data/portfolio_hero`).then(r => r.json()),
      ]);
      console.log(`Second batch took ${Date.now() - t1}ms`);
      console.log('FAQs count:', faqsRes?.data?.length);
      console.log('SUCCESS! Everything resolved without hanging.');
    } else {
      console.log('Category NOT found!');
    }
  } catch (err) {
    console.error('Fetch crashed:', err);
  }
}

testFetch();
