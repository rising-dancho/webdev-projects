/*
  1. Slice the first 5 characters from the following string:
  Sample String: "WebDevelopment"
  Expected Output: "WebDe"
*/

let job = "WebDevelopment";
// console.log(job.slice(0, 5));

/*
  2. Use substring() to extract the substring between the 3rd and 7th characters (inclusive) from the following string:
  Sample String: "JavaScriptIsFun"
  Expected Output: "aScri"
*/

let sampleString = "JavaScriptIsFun";
console.log(sampleString.substring(3, 8));

/*
  3. Utilize substr() to extract the last 4 characters from the following string:
  Sample String: "ExcitingTimes"
  Expected Output: "imes"
*/

sampleString =  "ExcitingTimes";
console.log(sampleString.substr(9,4));

/*
  4. Use replace() to replace "apple" with "orange" in the following string:
  Sample String: "orange,apple,orange"
  Expected Output: "orange,orange,orange"
*/

sampleString = "orange,apple,orange";
console.log(sampleString.replace("apple","orange"));

/*
  5. Use toUpperCase() to convert the following string to all uppercase:
  Sample String: "hello, world!"
  Expected Output: "HELLO, WORLD!"
*/

sampleString = "hello, world!";
console.log(sampleString.toUpperCase());

/*
  6. Use toLowerCase() to convert the following string to all lowercase:
  Sample String: "ELEPHANTS AND GIRAFFES"
  Expected Output: "elephants and giraffes"
*/

sampleString = "ELEPHANTS AND GIRAFFES";
console.log(sampleString.toLowerCase());


/*
  7. Use concat() to concatenate the two strings and form a complete sentence:
  String 1: "I love "
  String 2: "web development."
  Expected Output: "I love web development."
*/

sampleString = "I love ";
let sampleString2 = "web development.";
console.log(sampleString.concat(sampleString2));

/*
  8. Use trim() to remove any leading or trailing whitespace from the following string:
  Sample String: " Welcome to the web development class! "
  Expected Output: "Welcome to the web development class!"
*/

sampleString = " Welcome to the web development class! ";
console.log(sampleString.trim());
