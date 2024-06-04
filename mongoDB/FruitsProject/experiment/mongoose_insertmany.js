const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

const orange = new Fruit({
  name: "Orange",
  rating: 6,
  review: "Great for vitamin C."
});

const banana = new Fruit({
  name: "Banana",
  rating: 8,
  review: "Great texture."
});

async function saveFruits() {
  try {
    await Fruit.insertMany([apple, orange, banana]);
    console.log("Successfully saved all the fruits to fruitsDB.");
  } catch (err) {
    console.log(err);
  }
}

saveFruits();
