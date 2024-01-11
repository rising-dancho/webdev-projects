const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1992,
    'teacher',
    ['Micheal','Peter','Steven']
];

const jose = {
    firstName: 'Jose',
    lastName: 'Perez',
    age: 2024 - 1992,
    job: 'student',
    friends: ['n/a']
};

// console.log(`${jose.firstName}
// ${jose.lastName}
// ${jose.age}
// ${jose.job}
// ${jose.friends}`);

// console.log(`${jose['firstName']}
// ${jose['lastName']}
// ${jose['age']}
// ${jose['job']}
// ${jose['friends']}`);

// const nameKey = 'Name';
// console.log(`${jose['first' + nameKey]}`);
// console.log(`${jose['last' + nameKey]}`);

// const interestedIn = prompt(`What do you want to know about Jose?
// Choose between firstName, lastName, age, job, and friends`);

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else {
//     console.log(`Wrong entry! Please choose between firstName, lastName, age, job, and friends`);
// }

jose.location = 'Philippines';
jose.sport = 'Mauy Thai';


console.log(jose.location);
console.log(jose.sport);