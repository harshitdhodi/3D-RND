const { MongoClient } = require('d:/Harshit/RND/3D-RND-Admin/node_modules/mongodb');
const uri = 'mongodb://3d-RND:Qwaszx%4012345@127.0.0.1:27017/3d-RND?authSource=3d-RND';

async function check() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('3d-RND');
  const docs = await db.collection('portfolio_project').find({ category: '6af53ced127106831d2e0cb2' }).toArray();
  console.log('Total docs in category:', docs.length);
  docs.forEach((d, i) => {
    console.log(`[${i+1}] ID: ${d._id} | title: ${d.project_title || d.title} | p_link: ${d.p_link} | image: ${d.image}`);
  });
  await client.close();
}
check();
