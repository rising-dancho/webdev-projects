import emojipedia from './emojipedia.js';

// console.log(emojipedia); // .js extension is required
// console.log(emojipedia[0].meaning)

// TODO:
// [X] - use map to get each value from emojipedia
// [X] - only return the meaning
// [X] - cut the sentences to only show 100 characters

// ARROW FUNCTIONS dont need "return" keyword if only 1 line.
// ARROW FUNCTIONS dont need "parenthesis" when receiving only 1 parameter.
// ARROW FUNCTIONS are similar to anonymous function, but with no "function" keyword instead uses "=>" before the curly brackets.
// ARROW FUNCTIONS do not that have it's own "this" keyword as compared to other normal functions
let result = emojipedia.map((info) => {
  //   console.log(info.meaning.length);
  //   console.log(info.meaning.substring(0, 100).length);
  return info.meaning.substring(0, 100);
});

console.log(result);
