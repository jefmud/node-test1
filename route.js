const template = require('./template');
const fs = require('fs');

// these are the views

// this is the index route
function index(req, res) {
  res.writeHeader(200, {'Content-Type':'text/html'});
  res.write('This is the index view.');
  res.end();
}

// this is the about route
function about(req, res) {
  res.writeHeader(200, {'Content-Type':'text/html'});
  res.write('This is the ABOUT view.');
  res.end();
}

function page_template(req, res) {
  template.render(req, res, 'html/side_menu.html');
}

function generic_template_view(req, res) {
  template.render(req, res, 'html/index.html');
}

function notFound(req, res) {
  res.writeHeader(404, {'Content-Type':'text/html'});
  res.write('<h1>Not Found</h1>\n');
  res.write('<p>This route was not found.</p>\n');
  res.end();
}

function static(req, res) {
  // this should serve up a file...
  // the request url needs to be decoded
  let local_filename = req.url.slice(1);
  console.log('static request:' + local_filename);
  try {
    // try to open and send buffer
    var buf = fs.readFileSync(local_filename, encoding='utf-8');
    res.writeHeader(200, {'Content-Type':'text/html'});
    res.write(buf);
  } catch (e) {
    // return the error response
    res.writeHeader(404, {'Content-Type':'text/html'});
    res.write( {'request-url':req.url, 'error': e.message} );
  }
  res.end();
}

// exported routes
module.exports.static = static;
module.exports.index = index;
module.exports.about = about;
module.exports.notFound = notFound;
module.exports.generic = generic_template_view;
module.exports.page = page_template;
