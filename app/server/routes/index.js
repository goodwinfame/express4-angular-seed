'use strict';

var authRouter = require('./auth');
var publicRouter = require('./public');

module.exports.configure = function (app) {

  app.use('/auth', authRouter);
  app.use('/public', publicRouter);

  app.use('/me', function (req, res, next) {
    res.status(200).json(req.user);
  });

};
