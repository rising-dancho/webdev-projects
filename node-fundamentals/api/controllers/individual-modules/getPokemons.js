const fs = require('fs');

function getPokemons({ response }) {
  fs.readFile('./data.json', (err, data) => {
    if (err) throw err;
    const statusCode = 200;
    response.writeHead(statusCode, { 'Content-Type': 'application/json' });
    return response.end(data);
  });
}

module.exports = getPokemons;
// same idea (in react) as: export default getPokemons;
