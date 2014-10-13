'use strict';

var router = require('express').Router();

router.get('/echo', function (request, response, next) {
  response
    .status(200)
    .json({ message: 'SWAG!' });
});

router.post('/echo', function (request, response, next) {
  response
    .status(202)
    .json(request.body);
});

module.exports = router;
