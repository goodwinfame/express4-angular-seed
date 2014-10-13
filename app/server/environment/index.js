'use strict';

var fs = require('fs');
var path = require('path');

function doRequire(app, filepath) {
  var envFile = path.join(__dirname, filepath + '.js');
  return fs.existsSync(envFile) ? require(envFile)(app) : null;
}

module.exports.configure = function (app) {
  doRequire(app, 'all');
  doRequire(app, process.env.NODE_ENV);
};
