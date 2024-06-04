import { MongoClient } from 'mongodb';

// Replace the uri string with your connection string.sasd
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('fruits_db');
    const fruits = database.collection('fruits');

    // INSERT:
    const newFruit = [
      {
        name: 'Apple',
        score: 8,
        review: 'Great fruit!',
      },
      {
        name: 'Orange',
        score: 6,
        review: 'Kinda sour',
      },
      {
        name: 'Banana',
        score: 9,
        review: 'Great stuff!',
      },
    ];
    const result = await fruits.insertMany(newFruit);
    console.log(`# of fruits inserted: ${result.insertedCount}`);

    // FIND:
    const query = {};
    const projection = {
      // Sort returned documents in ascending order by title (A->Z)
      sort: { name: 1 },
      projection: { _id: 0, name: 1, score: 1, review: 1 },
    };

    // Execute query
    const cursor = fruits.find(query, projection);
    // Print a message if no documents were found
    if ((await fruits.countDocuments(cursor)) === 0) {
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
