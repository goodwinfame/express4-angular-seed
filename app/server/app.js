'use strict';

var path = require('path');

process.env.NODE_APP_DIR = path.resolve(__dirname, '..');
process.env.NODE_CONFIG_DIR = path.resolve(__dirname, 'config');

var express = require('express');

var environment = require('./environment');
var passport = require('./passport');
var routes = require('./routes');

var app = express();

environment.configure(app);
passport.configure(app);
routes.configure(app);

module.exports = app;
