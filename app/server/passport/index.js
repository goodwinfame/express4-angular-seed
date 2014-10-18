'use strict';

var config = require('config');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports.configure = function (app) {

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  passport.use(new TwitterStrategy(config.auth.twitter, function (token, tokenSecret, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }));

};
