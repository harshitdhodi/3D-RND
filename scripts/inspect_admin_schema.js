const { MongoClient, ObjectId } = require('d:/Harshit/RND/3D-RND-Admin/node_modules/mongodb');
const uri = 'mongodb://3d-RND:Qwaszx%4012345@127.0.0.1:27017/3d-RND?authSource=3d-RND';

async function check() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('3d-RND');

  // Check fields configured for collection portfolio_project in admin
  const collDef = await db.collection('collections').findOne({ name: 'portfolio_project' });
  console.log('Collection Def:', collDef);

  const fields = await db.collection('fields').find({ collection_id: collDef._id.toString() }).toArray();
  console.log('\nAdmin Fields for portfolio_project:');
  fields.forEach(f => console.log(` - ${f.name} (${f.type}): label="${f.label}"`));

  // Inspect one original document from portfolio_project (e.g. document 1 or 2)
  const origDoc = await db.collection('portfolio_project').findOne({ _id: new ObjectId('6af7fe0d520ad954f0370edb') });
  console.log('\nOriginal Doc in portfolio_project:');
  console.log(origDoc);

  // Inspect another original doc in portfolio_project
  const origDoc2 = await db.collection('portfolio_project').findOne({ _id: new ObjectId('6af7fe0d520ad954f0370edc') });
  console.log('\nOriginal Doc 2 in portfolio_project:');
  console.log(origDoc2);

  // Inspect one new document from portfolio_project
  const newDoc = await db.collection('portfolio_project').findOne({ slug: 'moultool-systems' });
  console.log('\nNew Doc (moultool-systems) in portfolio_project:');
  console.log(newDoc);

  // Check what API returns:
  // Let's check portfolio_categories in MongoDB
  const cats = await db.collection('portfolio_categories').find().toArray();
  console.log('\nPortfolio Categories:');
  cats.forEach(c => console.log(` - _id: ${c._id.toString()} | title: ${c.title} | slug: ${c.slug}`));

  await client.close();
}

check().catch(console.error);
