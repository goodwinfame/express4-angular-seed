'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

function onFinish () {
  return gulp.src('test/server/**/*.test.js')
    .pipe(mocha({ reporter : 'spec' }))
    .pipe(istanbul.writeReports())
    .on('error', process.exit.bind(process, 1));
}

module.exports = function () {
  process.env.NODE_ENV = 'test';
  return gulp.src('app/server/**/*.js')
    .pipe(istanbul())
    .on('finish', onFinish);
};
