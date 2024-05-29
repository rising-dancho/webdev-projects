import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (res, req) => {
  console.log(res.body);
});

app.get('/', (req, res) => {
  console.log(__dirname + '/public/index.html');
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
