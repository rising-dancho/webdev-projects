const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'green',
};

// For in loop : object
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue'];

for (const key in colorArr) {
  console.log(key, colorArr[key]);
}
