function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 2000) + 1000);
}

// DATA IS NOT IN ORDER
// getData('./movies.json');
// getData('./actors.json');
// getData('./directors.json');

// INORDER TO BE IN ORDER: need to pass in a callback
// CALLBACK HELL
getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data)=>{
        console.log(data);
    });
  });
});
