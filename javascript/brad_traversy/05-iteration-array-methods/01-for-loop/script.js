// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (i = 1; i <= 10; i++) {
//   if (i === 7) {
//     console.log(`7 is my lucky number`);
//   } else {
//     console.log('Number: ' + i);
//   }
// }

// ODD: start i at 1;
// EVEN: start i at 0;
// for (i = 1; i <= 10; i += 2) {
//   console.log('Number: ' + i);
// }

// MULTIPLICATION TABLE
// for (let i = 1; i <= 10; i++) {
//   console.log('\nMultiplication Table: ' + i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// LOOP THROUGH AN ARRAY
const names = ['John', 'Ben', 'Dan', 'Ruffa', 'Garne'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'Ruffa') {
    console.log("Sarap ni Ma'am Ruffa!!");
  } else {
    console.log(names[i]);
  }
}
