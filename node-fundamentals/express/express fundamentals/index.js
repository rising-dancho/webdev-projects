import express from 'express';
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
  res.send('smart: 09234696775');
});

app.get('/about', (req, res) => {
  res.send('<h1>i am bitlog!</h1>');
});

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));
