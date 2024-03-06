// Break
// for (let i = 1; i <= 20; i++) {
//   if (i === 15) {
//     console.log(`${i} Breaking...`);
//     break;
//   }
//   console.log(i);
// }

// Continue (in other words Skip)
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log(`Skipping ${i}th floor`);
    continue;
  }
  console.log(i);
}
