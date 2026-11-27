const { MongoClient, ObjectId } = require('d:/Harshit/RND/3D-RND-Admin/node_modules/mongodb');
const uri = 'mongodb://3d-RND:Qwaszx%4012345@127.0.0.1:27017/3d-RND?authSource=3d-RND';

async function inspectAndFix() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('3d-RND');

  const catId = '6af53ced127106831d2e0cb2'; // Website & Web Applications

  // List all docs in portfolio_project for this category
  const docs = await db.collection('portfolio_project').find({
    $or: [
      { category: catId },
      { category_slug: 'website-and-web-application-projects' }
    ]
  }).toArray();

  console.log(`Found ${docs.length} docs in portfolio_project for category:`);
  docs.forEach((d, i) => {
    console.log(`[${i+1}] ID: ${d._id} | title: ${d.project_title || d.title} | slug: ${d.slug || d.p_link} | order: ${d.order} | published: ${d.published}`);
  });

  // Let's set order on the 6 real websites so they are strictly 1..6:
  // 1: OSTech
  // 2: Moultool Systems
  // 3: OPPL Packaging
  // 4: HygineLab
  // 5: Jyoti Umbrella
  // 6: TAGA
  const realSites = [
    { match: 'ostech', order: 1, p_link: '/portfolio/ostech-automation', slug: 'ostech-automation' },
    { match: 'moultool', order: 2, p_link: '/portfolio/moultool-systems', slug: 'moultool-systems' },
    { match: 'oppl', order: 3, p_link: '/portfolio/oppl-packaging-solutions', slug: 'oppl-packaging-solutions' },
    { match: 'hyginelab', order: 4, p_link: '/portfolio/hyginelab-commercial-care', slug: 'hyginelab-commercial-care' },
    { match: 'jyoti', order: 5, p_link: '/portfolio/jyoti-umbrella-kinetic-storm', slug: 'jyoti-umbrella-kinetic-storm' },
    { match: 'taga', order: 6, p_link: '/portfolio/taga-luxury-architectural-systems', slug: 'taga-luxury-architectural-systems' },
  ];

  for (const site of realSites) {
    const res = await db.collection('portfolio_project').updateMany(
      {
        $or: [
          { slug: { $regex: site.match, $options: 'i' } },
          { p_link: { $regex: site.match, $options: 'i' } },
          { project_title: { $regex: site.match, $options: 'i' } },
          { title: { $regex: site.match, $options: 'i' } }
        ]
      },
      {
        $set: {
          order: site.order,
          published: true,
          is_featured: true,
          category: catId,
          category_slug: 'website-and-web-application-projects',
          category_title: 'Website & Web Applications',
          p_link: site.p_link,
          slug: site.slug
        }
      }
    );
    console.log(`Updated ${site.slug}: matched ${res.matchedCount}`);
  }

  // Set higher order on older dummy entries so the 6 real sites are always first
  await db.collection('portfolio_project').updateMany(
    {
      category: catId,
      slug: { $nin: ['ostech-automation', 'moultool-systems', 'oppl-packaging-solutions', 'hyginelab-commercial-care', 'jyoti-umbrella-kinetic-storm', 'taga-luxury-architectural-systems'] }
    },
    {
      $set: {
        published: true,
        category: catId,
        category_slug: 'website-and-web-application-projects',
        category_title: 'Website & Web Applications'
      }
    }
  );

  await client.close();
  console.log('Database update complete.');
}

inspectAndFix().catch(console.error);
