// server.js
const http = require('http');

const requestHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from Node.js server Ravishan!!!</h1>');
};

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Export for testing
module.exports = { server, requestHandler };
