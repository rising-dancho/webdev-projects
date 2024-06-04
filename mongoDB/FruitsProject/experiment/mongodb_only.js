import { MongoClient } from 'mongodb';

// Replace the uri string with your connection string.sasd
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // INSERT:
    // const newMovie = {
    //   title: 'Inception',
    //   director: 'Christopher Nolan',
    //   year: 2010,
    // };
    // const result = await movies.insertOne(newMovie);
    // console.log(`New movie added with the _id: ${result.insertedId}`);

    // FIND:
    const query = { runtime: { $gt: 1 } };
    const projection = {
      // Sort returned documents in ascending order by title (A->Z)
      sort: { title: 1 },
      projection: { _id: 0, title: 1, plot: 1, genres: 1, runtime: 1 },
    };
    // Execute query
    const cursor = movies.find(query, projection);
    // Print a message if no documents were found
    if ((await movies.countDocuments(query)) === 0) {
      console.log('No documents found!');
    }

    // Print returned documents
    for await (const doc of cursor) {
      console.dir(doc);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// reference:
//  https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/#:~:text=find()%20.,all%20documents%20in%20the%20collection.
// https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-other-ways-to-connect
