'use strict';

process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');

var environment = require('./environment');

var app = express();

environment.configure(app);

module.exports = app;
