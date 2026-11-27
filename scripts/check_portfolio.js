const { MongoClient } = require('d:/Harshit/RND/3D-RND-Admin/node_modules/mongodb');
const uri = 'mongodb://3d-RND:Qwaszx%4012345@127.0.0.1:27017/3d-RND?authSource=3d-RND';

async function check() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('3d-RND');

  const cat = await db.collection('portfolio_categories').find({ slug: 'website-and-web-application-projects' }).toArray();
  console.log('Category website-and-web-application-projects:', JSON.stringify(cat, null, 2));

  const allCats = await db.collection('portfolio_categories').find({}).toArray();
  console.log('All portfolio categories:', allCats.map(c => ({ id: c._id.toString(), slug: c.slug, title: c.title })));

  const projects = await db.collection('portfolio_projects').find({}).toArray();
  console.log('Total projects count:', projects.length);
  console.log('Projects list:', projects.map(p => ({
    id: p._id.toString(),
    slug: p.slug,
    title: p.title,
    client: p.client,
    category: p.category,
    category_slug: p.category_slug
  })));

  const ostech = await db.collection('portfolio_projects').findOne({ slug: 'ostech-automation' });
  console.log('ostech-automation in portfolio_projects:', JSON.stringify(ostech, null, 2));

  const ostechChild = await db.collection('portfolio_child_page').find({}).toArray();
  console.log('All portfolio_child_page count:', ostechChild.length);
  if (ostechChild.length > 0) {
    console.log('Sample portfolio_child_page:', JSON.stringify(ostechChild[0], null, 2));
  }

  await client.close();
}
check();
