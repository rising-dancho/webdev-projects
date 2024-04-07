// FETCHING A JSON FILE
// STYLE 1
fetch('./movies.json')
  .then((respose) => {
    // console.log(respose);
    console.dir(respose);
    return respose.json();
  })
  .then((data) => {
    // console.log(data);
  });

// STYLE 2
fetch('./movies.json')
  .then((respose) => respose.json())
  .then((data) => console.log(data));

// FETCHING A TEXT FILE
fetch('./test.txt')
  .then((respose) => respose.text())
  .then((data) => console.log(data));

// FETCHING FROM AN API
fetch('https://randomuser.me/api/')
  .then((respose) => respose.json())
  .then(
    (data) =>
      (document.querySelector(
        'h1'
      ).textContent = `${data.results[0].name.first}, ${data.results[0].name.last}`)
  );

//   document.querySelector("h1").textContent = `${data}`
// data.results[0].name.first
