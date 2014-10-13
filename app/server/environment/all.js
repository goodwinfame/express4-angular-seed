'use strict';

module.exports = function (app) {

  app.use(require('body-parser').json());
  app.use(require('body-parser').urlencoded({ extended: true }));

  app.use(require('cookie-parser')());

  app.use(require('express-session')({
    resave: true,
    saveUninitialized: true,
    secret: 'zedxszrd2ecx63fv7ytg5nb86ylokosfysc5',
    key: 'sessionId',
    cookie:{
      httpOnly: true,
      secure: true
    }
  }));

};
