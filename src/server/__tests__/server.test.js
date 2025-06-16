const http = require('http');
const { requestHandler } = require('../server.js');

test('should respond with expected HTML', done => {
  const req = new http.IncomingMessage();
  const res = new http.ServerResponse(req);

  res.writeHead = jest.fn();
  res.end = jest.fn(() => {
    expect(res.writeHead).toHaveBeenCalledWith(200, { 'Content-Type': 'text/html' });
    expect(res.end).toHaveBeenCalledWith('<h1>Hello from Node.js server. This is a sample application (version 1.1)!!!</h1>');
    done();
  });

  requestHandler(req, res);
});