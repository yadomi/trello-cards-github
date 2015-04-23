var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('concat:callback', function() {
  return gulp.src(['./src/jquery.js', './src/trello.js', './src/callback.js'])
    .pipe(uglify())
    .pipe(concat('callback.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('concat:content', function() {
  return gulp.src(['./src/mustache.js', './src/jquery.js', './src/trello.js', './src/content.js'])
    .pipe(uglify())
    .pipe(concat('content.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', function(){
  return gulp.src('./src/background.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
});


gulp.task('default', ['concat:callback', 'concat:content', 'minify']);
