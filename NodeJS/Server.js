const http = require('http');
const hostname = '127.0.0.3';
const port = 3000;

const server = http.createServer((req, res) => {

  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
