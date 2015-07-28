var gulp = require('gulp')
    uglify = require('gulp-uglify')
    livereload = require('gulp-livereload');

gulp.task('scripts', function(){
  return gulp.src('scripts/*.js')
             // .pipe(uglify())
             // .pipe(gulp.dest('uglified'))
             .pipe(livereload())
});

gulp.task('styles', function(){
  return gulp.src('styles/*.css')
             .pipe(livereload())
});

gulp.task('html', function(){
  return gulp.src('index.html')
             .pipe(livereload())
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('scripts/*.js', ['scripts']);
  gulp.watch('styles/*.css', ['styles']);
  gulp.watch('index.html', ['html']);
});

gulp.task('default', ['watch']);
// gulp.task('default', function() {
//   gulp.src('scripts/timer.js')
//   .pipe(uglify())
//   .pipe(gulp.dest('scripts'))
// });
