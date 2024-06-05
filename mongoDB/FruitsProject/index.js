import mongoose from 'mongoose';

// Replace the uri string with your connection string
const db_name = 'fruits_db';
const uri = `mongodb://localhost:27017/${db_name}`;

mongoose.connect(uri);

// connection events: listens to connected, error, disconnected
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + uri);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

/* ==========================
  - Fruits
  ===========================
 */

// schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// model
const Fruit = mongoose.model('Fruit', fruitSchema);

// document
const peaches = new Fruit({
  name: 'Peaches',
  rating: 10,
  review: 'Awesomesauce!!',
});

// CREATE
async function saveFruits() {
  try {
    await Fruit.insertMany([peaches]);
    console.log('Successfully saved all the fruits to fruits_db.');
  } catch (err) {
    console.log(err);
  }
}

// READ
async function getFruits() {
  try {
    const fruits = await Fruit.find({});
    fruits.map((fruit) => {
      console.log(fruit.name);
    });
  } catch (err) {
    console.log(err);
  }
}

// UPDATE
async function updateFruit() {
  try {
    await Fruit.updateOne(
      { _id: '665f13666ca868330800de1a' }, // no need ObjectId()
      { $set: { name: 'Peach' } } // Added $set to specify the update operation
    );
    console.log('Successfully updated an item from fruits_db.');
  } catch (err) {
    console.log(err);
  }
}

// DELETE
async function deleteFruit() {
  try {
    await Fruit.deleteOne(
      { _id: '665f5ef976a65be7a6e6e378' } // no need ObjectId()
    );
    console.log('Successfully deleted an item from fruits_db.');
  } catch (err) {
    console.log(err);
  }
}

/* ==========================
  - People
  ===========================
 */

// schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },
  age: {
    type: Number,
    required: true,
  },
  favoriteFruit: fruitSchema,
});

// model
const Person = mongoose.model('Person', personSchema);

// FavoriteFruit (relationship): document
const pineapple = new Fruit({
  name: 'Pineapple',
  score: 9,
  review: 'Great fruit!',
});

// document
const person = new Person({
  name: 'King Baldwin IV',
  age: 30,
  favoriteFruit: pineapple,
});

// CREATE
async function createEntry() {
  try {
    await Person.insertMany([person]);
    console.log('Successfully created a person entry to the fruits_db.');
  } catch (err) {
    console.log(err);
  }
}

// READ
async function getPeople() {
  try {
    const people = await Person.find({});
    people.map((person) => {
      console.log(person.name);
    });
  } catch (err) {
    console.log(err);
  }
}

async function run() {
  try {
    // await saveFruits();
    // await updateFruit();
    // await deleteFruit();
    // await createEntry();

    await getFruits();
    console.log('--------------------');
    await getPeople();
  } finally {
    // close connection
    await mongoose.connection.close();
  }
}

run();
