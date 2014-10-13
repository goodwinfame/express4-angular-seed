'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var reporter = require('jshint-stylish');

module.exports = function (done) {
  return gulp.src([ 'app/**/*.js', 'test/**/*.js' ])
    .pipe(jshint())
    .pipe(jshint.reporter(reporter))
    .pipe(jshint.reporter('fail'))
    .on('error', process.exit.bind(process, 1));
};
