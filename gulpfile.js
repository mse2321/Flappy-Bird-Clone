var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('default', ['jshint', 'sass', 'watch']);

// Build task
gulp.task('build', ['jshint', 'sass', 'html', 'scripts', 'styles', 'images']);

// JavaScript linting task
gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//Transpiling Sass into CSS
gulp.task('sass', function() {
  return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'));
});

// Watch Task
gulp.task('watch', function() {
  gulp.watch('js/*.js', 'js/components/*.js', 'js/entities/*.js', 'js/systems/*.js',['jshint']);
  gulp.watch('css/*.scss', ['sass']);
});

// Minify index
gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  return browserify('js/flappy_bird.js', 'js/components/*.js', 'js/entities/*.js', 'js/systems/*.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build/'));
});

// Styles build task, concatenates all the files
gulp.task('styles', function() {
  return gulp.src('css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('build/'));
});

// Image optimization task
gulp.task('images', function() {
  return gulp.src('pics/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/'));
});