// console.log(window);

// logs only the elements:
// console.dir(window.document);
// logs the methods and properties:
// console.log(window.document);

// console.log(document.body);

console.log(document.links); // array of links
console.log(document.links[0]); // access individual links

// console.log(document.body.innerHTML = "<h1>Tite</h1>");

// document.write('betlogan'); // adds a text at the end

console.log(document.getElementById('main'));

// const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from nwantiti</h1>';

// longhand
// const h1 = document.querySelector('#main h1');
// h1.innerText = 'Hello from nwantiti';

// shorthand
const h1 = document.querySelector('#main h1').innerText = 'Hello from nwantiti';
