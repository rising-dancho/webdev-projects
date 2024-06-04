import mongoose from 'mongoose';

// Replace the uri string with your connection string.sasd
const db_name = 'fruits_db';
mongoose.connect(`mongodb://localhost:27017/${db_name}`); //also create or look for your db

// schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// model
const Fruit = mongoose.model('Fruit', fruitSchema);

// document
// const apple = new Fruit({
//   name: 'Apple',
//   rating: 7,
//   review: 'Pretty solid as a fruit.',
// });

// const orange = new Fruit({
//   name: 'Orange',
//   rating: 6,
//   review: 'Great for vitamin C.',
// });

// const banana = new Fruit({
//   name: 'Banana',
//   rating: 8,
//   review: 'Great texture.',
// });

const kiwi = new Fruit({
  name: 'Kiwi',
  rating: 10,
  review: 'The best fruit',
});

async function saveFruits() {
  try {
    await Fruit.insertMany([kiwi]);
    console.log('Successfully saved all the fruits to fruits_db.');
  } catch (err) {
    console.log(err);
  }
}

async function getFruits() {
  try {
    const fruits = await Fruit.find({});
    // console.log(`All fruits: ${all}`);

    // close connection
    mongoose.connection.close();

    // only access the name from the fruits object
    fruits.map((fruit) => {
      console.log(fruit.name);
    });
  } catch (err) {
    console.log(err);
  }
}

// saveFruits();
getFruits();
