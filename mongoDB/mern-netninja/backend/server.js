import express from 'express';

// create express app
const app = express();
const PORT = 8080;

// routes
app.get('/', function (req, res) {
  res.json({message: "backend app"})
});

// listen for requests
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
