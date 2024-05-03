const animals = [
  // if missing value
  // { sound: 'meow' },
  {
    name: 'cat',
    sound: 'meow',
    feedingRequirements: {
      food: 2,
      water: 3,
    },
  },
  { name: 'dog', sound: 'woof' },
];

// SIMILAR TO useState
function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}

export default animals;
export { useAnimals };

// export { animals, useAnimals };