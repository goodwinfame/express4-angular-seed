'use strict';

var express = require('express');

var environment = require('./environment');
var routes = require('./routes');

var app = express();

environment.configure(app);
routes.configure(app);

module.exports = app;
