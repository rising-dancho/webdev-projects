const years = [1991, 2007, 1969, 1985];
const ages = [];

for (let i = 0; i < years.length; i++) {
  // ages = 2024 - 1991
  let age = 2024 - years[i];
  ages.push(age);
  console.log(ages);
}

