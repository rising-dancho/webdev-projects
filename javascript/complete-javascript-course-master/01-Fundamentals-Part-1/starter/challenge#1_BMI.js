// CHALLENGE #1
// Description: 
// -    Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
//      BMI = mass / (height * height) (mass in kg and height in meters).

// Task: 
// -    Your task is to write some code to help them:
//      Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
//      Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
//      Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// mark : 78kg, 1.69m
const massMark = 78; 
const heightMark = 1.69;

// john : 92 kg, 1.95m
const massJohn = 92;
const heightJohn = 1.95;

// Mark's BMI 
const BMIMark = massMark / (heightMark * heightMark);
console.log('(BMI) Mark: ',BMIMark);

// Mark's BMI
const BMIJohn = massJohn / (heightJohn**2);
console.log('(BMI) John:', BMIJohn);

// Who has the larger BMI?
const checkHigherBMI = BMIMark > BMIJohn;
console.log('\nDoes Mark have higher BMI than John?', checkHigherBMI);



