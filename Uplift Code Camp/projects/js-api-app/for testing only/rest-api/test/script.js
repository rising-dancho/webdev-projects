// BASIC FETCH COMMAND
// function createPost() {
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// }

// FETCH WITH CRUD
function createPost({ title, body }) {
  // destructuring post
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
    }),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

window.addEventListener(
  'DOMContentLoaded',
  createPost({ title: 'bitlog', body: 'wowers' })
);
