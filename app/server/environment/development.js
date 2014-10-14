'use strict';

var path = require('path');
var config = require('config');
var morgan = require('morgan');
var statics = require('serve-static');

module.exports = function (app) {

  app.use(morgan('dev'));

  app.use(statics(path.resolve(process.env.NODE_APP_DIR, config.client)));

};
