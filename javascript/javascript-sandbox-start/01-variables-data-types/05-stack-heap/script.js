// Values are stored on the stack
const name = 'John Wick';
const age = 30;

// Reference values are stored on the heap
const person = {
    name: 'dancho',
    age: 32,
};

let newName = name;
newName = 'Timothy';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName);
console.log(person, newPerson);