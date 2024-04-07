// STYLE 1
// const promise = new Promise((resolve, reject) => {
//   // Do some fake async task
//   setTimeout(() => {
//     console.log('Async task compelete');
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log('Promise consumed');
// });

// STYLE 2
// new Promise((resolve, reject) => {
//   // Do some fake async task
//   setTimeout(() => {
//     console.log('Async task 2 compelete');
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log('Promise 2 consumed');
// });

// GETTING FROM THE PROMISE
// new Promise((resolve, reject) => {
//   // Do some fake async task
//   setTimeout(() => {
//     // make promise pass something
//     resolve({
//       name: 'John',
//       age: 30,
//     });
//   }, 1000);
// }).then((user) => {
//   console.log(user, user.name, user.age);
// });

// HANDLING ERRORS FROM PROMISE
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({
        name: 'John',
        age: 30,
      });
    } else {
      reject('Something went wrong..');
    }
  }, 1000);
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('bitlog');
  });

console.log('Hello from global scope');
