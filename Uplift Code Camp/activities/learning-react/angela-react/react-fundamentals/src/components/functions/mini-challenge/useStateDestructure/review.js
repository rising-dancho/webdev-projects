import animals, { useAnimals } from './data.js';

const [cat, dog] = animals;
// console.log(cat);
// console.log(dog);

// CALLING destructured objects BY KEY/NAME:
// const { name, sound } = cat; // no other variable must have the same variable name (must be unique)
// console.log(name);
// console.log(sound);

// const { name, sound } = dog;
// console.log(name);
// console.log(sound);

// RENAMING destructured objects:
// const { name: catName, sound: catSound } = cat;
// console.log(catName);
// console.log(catSound);

// SETTING A PROXY OR A DEFAULT VALUE IN CASE AN EXPECTED ENTRY IS MISSING
// const { name = 'FLuffy', sound = 'missing information' } = cat;
// console.log(name, sound);

// feedingRequirement
// APPROACH 1: (longer version)
// const { name, sound, feedingRequirements } = cat;
// // console.log(feedingRequirements)
// const { food, water } = feedingRequirements;
// console.log(food);
// console.log(water);

// APPROACH 2: (shorter version)
const {
  name,
  sound,
  feedingRequirements: { food, water },
} = cat; // almost same syntax as renaming, but this time we destructure
console.log(food);
console.log(water);

// DESTRUCTURE : useAnimals
console.log(useAnimals(cat));

const [animal, makeSound] = useAnimals(cat);

console.log(animal);
makeSound(cat);
