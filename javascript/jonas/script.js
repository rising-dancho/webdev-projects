const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1992,
  'teacher',
  ['Micheal', 'Peter', 'Steven']
];

// // continue : exit (skip) the current iteration of the loop (skip current count)
// console.log('----ONLY STRINGS----');
// for (let i=0; i<=jonas.length;i++){
//   if(typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// break : terminates the loop or switch statement
console.log('----BREAK UPON SEEING A NUMBER----');
for (let i=0; i<=jonas.length;i++){
  if(typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}
