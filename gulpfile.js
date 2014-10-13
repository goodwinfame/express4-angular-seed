'use strict';

var gulp = require('gulp');
var sequence = require('run-sequence');

gulp.task('mocha', require('./gulp_tasks/gulp-mocha'));

gulp.task('jshint', require('./gulp_tasks/gulp-jshint'));

gulp.task('test', function (done) {
  sequence('jshint', 'mocha', done);
});
