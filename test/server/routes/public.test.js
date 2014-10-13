'use strict';

require('should');

var request = require('supertest');

var app = require('../../../app/server/app');

var server = request.agent(app);

describe('Public Routes', function () {

  context('GET /public/echo', function () {

    it('should response a json with a message', function (done) {

      server
        .get('/public/echo')
        .expect(200, { message: 'SWAG!' })
        .end(done);

    });

  });

  context('POST /public/echo', function () {

    it('should response a json that was sent', function (done) {

      server
        .post('/public/echo')
        .send({ message: 'test', value: 1 })
        .expect(202, { message: 'test', value: 1 })
        .end(done);

    });

    it('should response an empty json if request body is undefined', function (done) {

      server
        .post('/public/echo')
        .expect(202, {})
        .end(done);

    });

  });

});
