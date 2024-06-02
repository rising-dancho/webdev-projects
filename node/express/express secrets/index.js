//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3005;
var password = '';
var userAuthorized = false;

// information: logs
function logger(req, res, next) {
  console.log('Request method: ', req.method, '\nRequest url: ', req.url);
  next(); //essentially allows `app.use` to go to the next method
}
app.use(logger);

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  password = `${req.body['password']}`;
  // check password
  if (password === 'ILoveProgramming') {
    userAuthorized = true;
  }
  console.log('User typed-in: ', password);
  next();
}
app.use(bandNameGenerator);

app.get('/', (req, res) => {
  // console.log(__dirname + '/public/index.html');
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/authorized', (req, res) => {
  if (userAuthorized === true) {
    res.sendFile(__dirname + '/public/secret.html');
  } else {
    res.sendFile(__dirname + '/public/index.html');
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
