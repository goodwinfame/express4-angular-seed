'use strict';

var publicRouter = require('./public');

module.exports.configure = function (app) {

  app.use('/public', publicRouter);

};
