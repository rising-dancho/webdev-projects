// const years = [1991, 2007, 1969, 1985];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   // ages = 2024 - 1991
//   let age = 2024 - years[i];
//   ages.push(age);
//   console.log(ages);
// }

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1992,
  'teacher',
  ['Micheal', 'Peter', 'Steven']
];

// continue
console.log('----ONLY STRINGS----');
for (let i=0; i<=jonas.length;i++){
  if(typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]);
}
