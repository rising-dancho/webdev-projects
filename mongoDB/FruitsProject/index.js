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

// schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
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

async function saveFruits() {
  try {
    await Fruit.insertMany([peaches]);
    console.log('Successfully saved all the fruits to fruits_db.');
  } catch (err) {
    console.log(err);
  }
}

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

async function run() {
  try {
    // await saveFruits();
    // await updateFruit();
    await getFruits();
  } finally {
    // close connection
    await mongoose.connection.close();
  }
}

run();
