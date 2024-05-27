const { createServer } = require('http');
const readline = require('readline');
const { stdin, stdout } = require('process');
const fs = require('fs');

// create server
const server = createServer((request, response) => {
  response.statusCode = 200;
  // plain text:
  // response.setHeader('Content-Type', 'text/plain');
  // response.end('Hello World');

  // html:
  response.setHeader('Content-Type', 'text/html');
  response.end(
    `<body style="padding: 0; margin:0; background-color: #333;">
      <h1 style='font-weight: bold; font-size: 5rem; color: dodgerblue;'>
        RAUH-Welt Begriff
      </h1>
    </body>`
  );
});
const PORT = 8080;
server.listen(PORT, () => console.log('\n"Server is listening on port 8080"'));

// readline
function greeting() {
  const rl = readline.createInterface(stdin, stdout);
  rl.question('How are you today? ', (answer) => {
    console.log(answer);
    rl.close();
  });
}
setTimeout(greeting, 800);

// file system : write : https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs
const content = 'Message: "Hello from chimera ants!"';
fs.writeFile('message.txt', content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('"File written successfully!"\n');
  }
});

// file system: read: https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) throw console.error(err);
  console.log(data);
});

// npm install: sillyname
const generateName = require('sillyname');
const sillyName = generateName();

console.log('\nMy name is ' + sillyName);

// npm install: superheroes : https://www.npmjs.com/package/superheroes
// import { randomSuperhero } from 'superheroes';
// // const superheroes = require('superheroes'); //this is an es module npm package.. can't use "require" here

// console.log(`My name is ${randomSuperhero()}!`);
