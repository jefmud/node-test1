const fs = require('fs');

function render(req, res, template_file, context={}) {
  // read template_file
  // loop through context items
     // if item-key match, replace with item-value
  // write header
  // write body
  // end
  res.writeHeader(200, {'Content-Type':'text/html'});
  data = getFile(template_file);
  res.write(data);
  res.end();
}

function getFile(template_file) {
  var buf = fs.readFileSync(template_file, encoding='utf-8');
  return buf;
}

module.exports.render = render;
