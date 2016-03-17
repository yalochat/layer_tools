'use strict'

import gulp from 'gulp'
import watch from 'gulp-watch'
import jshint from 'gulp-jshint'
import stylish from 'jshint-stylish'

const src = [
  'lib/**/*.js',
  'test/**/*.js'
]

gulp.task('jshint', () => {
  return watch(src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
})
