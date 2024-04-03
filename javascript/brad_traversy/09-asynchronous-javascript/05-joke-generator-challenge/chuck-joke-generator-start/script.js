// WRONG WAY:
// const jokeBtn = document.getElementById('joke-btn');
// const div = document.getElementById('joke');
// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

// // readyState has 5 possible values:
// // - 0: request not established
// // - 1: server connection established
// // - 2: request received
// // - 3: processing request
// // - 4: request finished and response is ready
// xhr.onreadystatechange = function () {
//   // console.log(this.readyState);
//   // console.log(this.status);
//   //   console.log(this.responseText);
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText, typeof this.responseText);
//     const response = JSON.parse(this.responseText);
//     // console.log(response.value);
//     div.innerHTML = `${response.value}`;
//   }
// };

// function generateJoke() {
//   xhr.send();
// }

// jokeBtn.addEventListener('click', generateJoke);



/* ================================================= */



// CORRECT WAY: ALL xhr methods should all be inside the same function

const jokeBtn = document.getElementById('joke-btn');
const div = document.getElementById('joke');

// readyState has 5 possible values:
// - 0: request not established
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

function generateJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    // console.log(this.readyState);
    // console.log(this.status);
    // console.log(this.responseText);
    if (this.readyState === 4) {
      if (this.status === 200) {
        // console.log(this.responseText, typeof this.responseText);
        const response = JSON.parse(this.responseText);
        // console.log(response.value);
        div.innerHTML = `${response.value}`;
      } else {
        console.log('Whoops! Something went wrong... (not funny)');
      }
    }
  };

  xhr.send();
}

jokeBtn.addEventListener('click', generateJoke);
