const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`API Key: ${process.env.API_KEY || 'MISSING'}\n`);
});

server.listen(port, () => {
  console.log(`App running on port ${port}`);
});