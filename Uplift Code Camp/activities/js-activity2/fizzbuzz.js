let count = '';
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    count += ', FizzBuzz';
  } else if (i % 3 === 0) {
    count += ', Fizz';
  } else if (i % 5 === 0) {
    count += ', Buzz';
  } else {
    if (i === 1) {
      count += i + ' ';
    } else {
      count += ', ' + i + ' ';
    }
  }
}

console.log(count);
