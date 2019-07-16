const https = require('https');
const http = require('http');
const route = require('./route');

console.log("hello from node!")

var server = http.createServer(function(req, res) {
  // routing
  if (req.url === '/') {
    route.index(req, res);
  } else if (req.url === '/about') {
    route.about(req, res);
  } else if (req.url === '/generic') {
    route.generic(req, res);
  } else if (req.url === '/page') {
    route.page(req, res);
  } else if (req.url === '/static') {
    // static assets route
    route.static(req, res);
  } else {
    // not-matched 404 error route
    route.notFound(req, res);
  }

});

const server_port = 3000;
server.listen(server_port);

console.log("Server is listening on port " + server_port);
