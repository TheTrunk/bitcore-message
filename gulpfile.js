'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-hush');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
