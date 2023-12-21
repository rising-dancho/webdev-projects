// Values are stored on the stack
const name = 'John Wick';
const age = 30;

// Reference values in an "object" are stored on the heap
const person = { name: 'dancho', age: 32 };

let newName = name; // John Wick : consistently name John Wick because of "const"; re-initialized with "let" to assign a new name
newName = 'Timothy'; // John Wick re-assigned name to "Timothy"

let newPerson = person;
newPerson.name = 'Bradley'; // the heap is actually assigned to "Bradley" now in the heap. so heap is changeable, while stack is not.

console.log(newName);
console.log(person.name);
console.log(newPerson);
// console.log(newPerson);