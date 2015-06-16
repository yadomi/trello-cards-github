var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('concat:callback', function() {
  return gulp.src(['./src/libs/jquery.js', './src/libs/trello.js', './src/callback.js'])
    .pipe(uglify())
    .pipe(concat('callback.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('concat:content', function() {
  return gulp.src(['./src/libs/markdown.js', './src/libs/mustache.js', './src/libs/jquery.js', './src/libs/trello.js', './src/content.js'])
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
