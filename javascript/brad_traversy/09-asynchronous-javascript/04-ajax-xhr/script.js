const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/rising-dancho/repos');

// readyState has 5 possible values:
// - 0: request not established
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

xhr.onreadystatechange = function () {
  //   console.log(this.readyState);
//   console.log(this.status);
//   console.log(this.responseText);
  if (this.readyState === 4 && this.status === 200) {
    // this.responseText : is a JSON string (array that is read as a string) so needs to be parsed first!
    console.log(JSON.parse(this.responseText));

    const response = JSON.parse(this.responseText);
    response.forEach((repo) => {
      const ul = document.getElementById('results');
      const li = document.createElement('li');

      li.innerHTML = `
          <strong>${repo.name}</strong> - <span>${repo.description}</span>
          - ${repo.owner.login}
          `;

      ul.appendChild(li);
    });
  }
};

xhr.send();
