'use strict';

var router = require('express').Router();

var passport = require('passport');

router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/' ,
  failureRedirect: '/'
}));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
