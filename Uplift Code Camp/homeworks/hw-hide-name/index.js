/* HELPER FUNCTIONS */
function createStars(starsLength) {
  // console.log(starsLength);
  let result = '';
  for (let i = 0; i < starsLength; i++) {
    result += '*';
    // console.log(result);
  }
  return result;
}

function hideFirstName(name) {
  let nameArray = name.split(',');
  // console.log(nameArray, typeof nameArray, String(nameArray.length));

  let replaceWithStars = '';
  if (nameArray.length > 1) {
    // looping through the first names
    for (let i = 0; i < nameArray.length; i++) {
      if (nameArray.length > 1) {
        // extracting the characters to be replaced
        let nameSliced = nameArray[i].slice(2, nameArray[i].length - 1);
        // console.log(nameSliced);
        let sliceLength = nameSliced.length;
        let stars = createStars(sliceLength);
        // console.log(nameArray[i]);
        // replaced extracted target characters with stars. and then populated the result per iteration to the replaceWithStars variable
        replaceWithStars += nameArray[i].replace(nameSliced, stars).concat(' ');

        // result:
        // console.log(replaceWithStars);
      }
    }
  } else {
    // getting the characters to be replaced
    let nameSliced = name.slice(2, name.length - 1);
    // console.log(nameSliced);
    // create stars to cover slice length
    let sliceLength = nameSliced.length;
    let stars = createStars(sliceLength);
    // replace sliced characters with **
    replaceWithStars = name.replace(nameSliced, stars);

    // result:
    // console.log(replaceWithStars);
  }
  return replaceWithStars;
}

function hideLastName(name) {
  // getting the characters to be replaced
  let getAllCharsAfterInitialLetter = name.slice(1);
  // console.log(getAllCharsAfterInitialLetter);
  // replace sliced characters with .
  let replaceWithDot = name.replace(getAllCharsAfterInitialLetter, '.');

  // result:
  // console.log(replaceWithDot);
  return replaceWithDot;
}

/* MAIN FUNCTION */
function hideName(name) {
  // checks if there are numbers or special characters existing except period
  const regexNumbersOrOthersExists =
    /[\d_\^~!@#\$%&*\(\)+\-)`={}\\\|;:'"?/>,<\[\]]+/g;
  //checks for 1 letter name: if true, reject
  const regex1LetterNameNotAllowed = /^[a-z]$/gi;
   //checks for 1 word name: if true, reject
  const regex1WordNameNotAllowed = /^[a-z]+$/gi;

  let result = '';
  if (
    regexNumbersOrOthersExists.test(name) ||
    regex1LetterNameNotAllowed.test(name) ||
    regex1WordNameNotAllowed.test(name)
  ) {
    result = 'Input provided is not a valid name';
  } else {
    // split the string to get the firstName
    let nameArray = name.split(' ');
    let firstName = String(nameArray.slice(0, -1));
    // console.log(firstName);

    // split the string to get the lastName
    // taking the very last word in the string: slice(-1)
    let lastName = String(nameArray.slice(-1));
    // console.log(lastName);

    result = `${hideFirstName(firstName.toUpperCase())} ${hideLastName(
      lastName.toUpperCase()
    )}`;
  }

  return console.log(result);
}

hideName("a");
hideName('Anonas Mayaman');
hideName('catalina Bongga');
hideName('Maria Josefina Alvarez');
hideName('Rizal');
hideName('aj3j3j3');
hideName('MinD_ContRoL~!');
hideName('143');


// REFERENCES:
// remove character: https://www.geeksforgeeks.org/how-to-remove-a-character-from-string-in-javascript/
// replace chars: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// split: https://www.w3schools.com/jsref/jsref_split.asp
// createStars: uplift bootcamp
// get last element of an array (variations): https://flexiple.com/javascript/get-last-array-element-javascript
// get all elements of an array except the last one: https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-215.php#:~:text=Use%20Array.,last%20element%20of%20the%20array.
// trying to split an array entry with more than two words: https://stackoverflow.com/questions/9133102/how-to-grab-substring-before-a-specified-character-in-javascript
// iterating over an array: https://www.youtube.com/shorts/Ou0W1dZ6ZJI
// regex validation using if statements: https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex-in-js
// regex testing: regexr.com/7spkm
// regex for sr/jr/ii/iii: https://www.reddit.com/r/Rlanguage/comments/yvosdb/help_i_want_regex_to_capture_the_last_name_with/