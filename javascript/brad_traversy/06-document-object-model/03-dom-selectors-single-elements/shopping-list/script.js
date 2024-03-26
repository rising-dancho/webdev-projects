// document.getElementById();

// returns the element that has the id
console.log(document.getElementById('app-title'));

/* GET ATTRIBUTES */

// returns the specific attribute
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);

// getAttribute method
console.log(document.getElementById('app-title').getAttribute('id'));
// console.log(document.getElementById('app-title').getAttribute('hello')); // getAttribute

/* SET ATTRIBUTES */
// document.getElementById('app-title').id = 'new-id'; // give new id
document.getElementById('app-title').title = 'Shopping Titeng matigas'; // give new id

// changing the name of the class
document.getElementById('app-title').setAttribute('class', 'tite'); // setAttribute

const title = document.getElementById('app-title');

// get/change content
console.log(title.textContent);
title.textContent = 'Hello from nwantiti';
title.innerText = 'Jello from nwantiti';
title.innerHTML = '<i>Jello from nwantiti</i>';

// change styles
title.style.color = '#64BAE9';
title.style.backgroundColor = '#333';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type=text]'));

console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'green';

// use methods on any other elements

const list = document.querySelector('ul');
list.style.backgroundColor = 'grey';

const firstItem = list.querySelector('li');

firstItem.style.backgroundColor = "orange";
