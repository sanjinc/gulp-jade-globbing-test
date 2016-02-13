var gulp = require('gulp');
var jade = require('gulp-jade');
var jadeGlobbing = require('gulp-jade-globbing');

// define tasks here
gulp.task('default', function(){

 gulp.src([
 			'./pages/**/*.jade'
 		])
 		.pipe(jadeGlobbing())
    .pipe(jade())
    .pipe(gulp.dest('./dist/'))

});