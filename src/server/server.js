// Import the built-in HTTP module from Node.js
const http = require('http');

// Define a function to handle incoming HTTP requests
const requestHandler = (req, res) => {
  // Set the HTTP status code and content type for the response
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // End the response and send an HTML message to the client
  res.end('<h1>Hello from Node.js server Ravishan!!!</h1>');
};

// Create an HTTP server using the requestHandler function
const server = http.createServer(requestHandler);

// Define a function to start the server
const startServer = () => {
  // Specify the port number on which the server should listen
  const PORT = 3000;

  // Start the server and log a message once it's running
  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

// Export the server, request handler, and startServer function
// This makes them accessible in other files (e.g., for testing)
module.exports = { server, requestHandler, startServer };
