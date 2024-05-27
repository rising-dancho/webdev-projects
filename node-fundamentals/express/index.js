import fs from 'fs';
import express from 'express';

const app = express();
const PORT = 8080;

app.use('/', (request, response) => {
  return response.send({ app_name: 'pokemon_api' });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
