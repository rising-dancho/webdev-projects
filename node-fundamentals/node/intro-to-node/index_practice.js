const { createServer } = require('http');
const fs = require('fs');

const data = `
<!DOCTYPE html>
<html>
<body>

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=5_KF3m1SXQhMpMYN&autoplay=1&mute=1" titleYouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</body>
</html>
`;
// non-intrusive sound yt: https://www.youtube.com/watch?v=q9luhiQdXLA

// create file: fs.writeFile()
fs.writeFile('index.html', data, (err) => {
  if (err) throw err;
  console.log('index.html created');
});

// create server : reads html file
const PORT = 8080;
const server = createServer((request, response) => {
  // syntax: fs.readFile(path[, options], callback(err, data))
  // source: https://nodejs.org/docs/latest/api/fs.html#fsreadfilepath-options-callback

  fs.readFile('./index.html', (err, data) => {
    if (err) throw err;
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(data); // data read from file
  });
});
    server.listen(PORT, () => console.log('\n"Server is listening on port 8080"'));

// Assuming that 'path/file.txt' is   a regular file.
// source: https://nodejs.org/docs/latest/api/fs.html#fs  unlinkpath-callback
// fs.unlink('./message.txt', (err) => {
//   if (err) throw err;
//   console.log('./message.txt was deleted');
// });

// nodemon:
// install: npm i -D nodemon
// usage: nodemon index.js
// for error: "bash: nodemon: command not found"
// fix: https://stackoverflow.com/questions/35530930/nodemon-not-working-bash-nodemon-command-not-found
// npm install -g --force nodemon
