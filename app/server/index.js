'use strict';

process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('colors');

var s = require('interpolate');

var app = require('./app');

app.listen(process.env.PORT, function () {
  console.log(s('Express server listening on port {PORT} in {NODE_ENV} environment\n'.cyan, process.env));
});
