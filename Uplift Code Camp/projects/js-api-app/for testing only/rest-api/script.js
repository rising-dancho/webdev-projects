const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

function getTodos() {
  fetch(apiUrl + '?_limit=5')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

getTodos();

// fetch(apiUrl + '?_limit=5')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
