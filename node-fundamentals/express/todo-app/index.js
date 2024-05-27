const { createServer } = require('http');
const fs = require('fs');

const PORT = 8081;
const server = createServer((request, response) => {
  let todos = JSON.parse(fs.readFileSync('./data.json'));

  if (request.url === '/api/v1/todos/' && request.method === 'GET') {
    fs.readFile('./data.json', (err, data) => {
      if (err) throw err;
      const statusCode = 200;
      response.writeHead(statusCode, { 'Content-Type': 'application/json' });
      return response.end(data);
    });
  } else if (request.url === '/api/v1/todos/add' && request.method === 'POST') {
    request.on('data', (chunk) => {
      const newTodo = JSON.parse(chunk);
      todos.push(newTodo);

      fs.writeFileSync('./data.json', JSON.stringify(todos));
      // status code: 201 : created file
      response.writeHead(201, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(newTodo));
    });
  }
  // edit an entry based on id: eg. {{HOST}}api/v1/todos/edit/3
  else if (request.url.split('/')[4] === 'edit' && request.method === 'PATCH') {
    const todoToEdit = todos.find((todo) => {
      return request.url.split('/')[5] === todo.id.toString();
    });
    // console.log(todoToEdit);
    request.on('data', (chunk) => {
      const requestBody = JSON.parse(chunk);
      for (let key in requestBody) {
        todoToEdit[key] = requestBody[key];
      }
      fs.writeFileSync('./data.json', JSON.stringify(todos));
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(todoToEdit));
    });
  }
  // delete an entry based on id: eg. {{HOST}}api/v1/todos/remove/3
  else if (
    request.url.split('/')[4] === 'remove' &&
    request.method === 'DELETE'
  ) {
    const idToDelete = request.url.split('/').pop().toString();

    const indexToDelete = todos.findIndex(
      (todo) => todo.id.toString() === idToDelete
    );

    if (indexToDelete !== -1) {
      todos.splice(indexToDelete, 1);
      fs.writeFileSync('./data.json', JSON.stringify(todos));
      response.writeHead(204, { 'Content-Type': 'application/json' });
      return response.end();
    } else {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      return response.end(
        JSON.stringify({
          message: `Todo item with id: ${idToDelete} not found.`,
        })
      );
    }
  }
});

server.listen(PORT, () =>
  console.log(`
Server is listening on port ${PORT}`)
);

// GOTCHA: (getting this error)
// todos.push(newTodo);
// TypeError: todos.push is not a function

// error:
// my data.json was NOT an ARRAY OF OBJECTS. it was just an object.
// solution: (turn the object into an array of objects)
// [{
//   "id": 1,
//   "todo": "Write a task for your todo list",
//   "status": "Started",
//   "completed": false
// }]

// source: https://stackoverflow.com/questions/29696572/uncaught-typeerror-data-push-is-not-a-function
