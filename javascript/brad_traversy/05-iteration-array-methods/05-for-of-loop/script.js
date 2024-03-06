// Loop thru arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [
  { name: 'Brad', age: 24 },
  { name: 'John', age: 38 },
  { name: 'Golovkin', age: 47 },
];

// NORMAL LOOP (old school)
// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }

// FOR OF LOOP (modern)
// for (const item of items) {
//   console.log(item);
// }

// FOR OF LOOP on an array of objects
for (const user of users) {
  console.log(user);
}

// Loop over strings
const str = 'Hello World';

for(const char of str){
    console.log(char);
}

// Loop over maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key,value] of map){
    console.log([key,value]);
}