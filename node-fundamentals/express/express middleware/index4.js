import express from 'express';
// import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = '';

// information: logs
function logger(req, res, next) {
  console.log('Request method: ', req.method, '\nRequest url: ', req.url);
  next(); //essentially allows `app.use` to go to the next method
}
app.use(logger);

// body-parser
app.use(express.urlencoded({ extended: true }));
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = `${req.body['street']}${req.body['pet']}`;
  next();
}
app.use(bandNameGenerator);

app.get('/', (req, res) => {
  // console.log(__dirname + '/public/index.html');
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}👌✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
