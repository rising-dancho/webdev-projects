let i = 1;

// use when: the number of iterations required is unknown
// while (i<=20){
//     console.log(i);
//     i++;
// }

// Loop over arrays
// const arr = [10,20,30,40];

// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// NESTING while loops
// while (i < 10) {
//   i++;
//   let j = 1;
//   while (j < 10) {
//     console.log(`${i} x ${j} = ${i * j}`);
//     j++;
//   }
// }

// use do while when: you always want the condition to run at least once, even with the condition is not met

do {
  console.log(i);
  i++;
} while (i <= 10);
