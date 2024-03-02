// looping through array
let cars = ["fiat", "benz", "honda", "toyota"];
console.log(cars[1]);


let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);
const result = (10 + 5) * randomNum;
console.log(result);



const person = {
  name: 'John',
  age: 25,
  sayHello: function () {
    console.log('Hello ' + this.name + '!');
  },
};

person.sayHello(person.name);

let i = 0;
while (i < 10) {
  if (i === 5) {
    break;
  }
  console.log(i);
  i++;
}

let globalVariable = 'I am a global variable';

function myFunction() {
  let localVariable = 'I am a local variable';
  console.log(globalVariable); // 👈 'I am a global variable'
  console.log(localVariable); // 👈 'I am a local variable'
}

console.log(globalVariable); // 👈 'I am a global variable'
console.log(localVariable); // 🚨 Uncaught ReferenceError: localVariable is not defined

myFunction();