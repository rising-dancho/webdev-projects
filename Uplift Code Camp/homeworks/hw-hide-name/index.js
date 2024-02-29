/* HELPER FUNCTIONS */
function createStars(stars) {
  console.log(stars);
  let result = '';
  for (let i = 0; i < stars; i++) {
    result += '*';
    console.log(result);
  }
  return result;
}

function hideFirstName(name) {
  let nameArray = name.split(',');
  console.log(nameArray, typeof nameArray, String(nameArray.length));

  let replaceWithStars = '';
  if (nameArray.length > 1) {
    console.log('GREATER THAN 1');
    for (let i = 0; i < nameArray.length; i++) {
      if (nameArray.length > 1) {
        // console.log(nameArray[i]);
        console.log(nameArray[i].slice(2));
        // getting the characters to be replaced
        let nameSliced = nameArray[i].slice(2);
        console.log(nameSliced);
        // create stars to cover slice length
        let sliceLength = nameSliced.length;
        let stars = createStars(sliceLength);
        // replace sliced characters with **
        replaceWithStars = name.replace(nameSliced, stars);

        // result:
        console.log(replaceWithStars);
      }
    }
  } else {
    console.log('it works!');
    // getting the characters to be replaced
    let nameSliced = name.slice(2, name.length - 1);
    console.log(nameSliced);
    // create stars to cover slice length
    let sliceLength = nameSliced.length;
    let stars = createStars(sliceLength);
    // replace sliced characters with **
    replaceWithStars = name.replace(nameSliced, stars);

    // result:
    console.log(replaceWithStars);
  }

  return replaceWithStars;
}

function hideLastName(name) {
  // getting the characters to be replaced
  let getAllCharsAfterInitialLetter = name.slice(1);
  console.log(getAllCharsAfterInitialLetter);
  // replace sliced characters with .
  let replaceWithDot = name.replace(getAllCharsAfterInitialLetter, '.');

  // result:
  console.log(replaceWithDot);
  return replaceWithDot;
}

/* MAIN FUNCTION */
function hideName(name) {
  // split the string to get the firstName
  let nameArray = name.split(' ');
  // let firstName = nameArray[0];
  let firstName = String(nameArray.slice(0, -1));
  console.log(firstName);

  // split the string to get the lastName
  nameArray = name.split(' ');
  // let lastName = nameArray[nameArray.length-1];
  let lastName = String(nameArray.slice(-1));
  console.log(lastName, typeof lastName);

  return `${hideFirstName(firstName.toUpperCase())} ${hideLastName(
    lastName.toUpperCase()
  )}`;
}

console.log(hideName('Anonas Mayaman'));
console.log(hideName('catalina Bongga'));
console.log(hideName('Maria Josefina Alvarez'));

// REFERENCES:
// remove character: https://www.geeksforgeeks.org/how-to-remove-a-character-from-string-in-javascript/
// replace chars: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// split: https://www.w3schools.com/jsref/jsref_split.asp
// createStars: uplift bootcamp
// get last element of an array (variations): https://flexiple.com/javascript/get-last-array-element-javascript
// get all elements of an array except the last one: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-215.php#:~:text=Use%20Array.,last%20element%20of%20the%20array.
// trying to split an array entry with more than two words: https://stackoverflow.com/questions/54981508/slicing-words-from-string

// let arry = [2, 4, 6 , 8, 10, 12, 14, 16];
// let lastElement = arry.slice(-1);

// console.log(lastElement, typeof String(lastElement));

// //Output: 16
