var gulp = require('gulp');
var jade = require('gulp-jade');
var jadeGlobbing = require('gulp-jade-globbing');

// define tasks here
gulp.task('default', function(){

 gulp.src('./templates/all.jade')
 		.pipe(jadeGlobbing({
 			placeholder: {
      'alltemplates': '**/*.jade'
      }
 		}))
    .pipe(jade())
    .pipe(gulp.dest('./pages/'))

});