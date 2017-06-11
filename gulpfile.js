var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var minifycss = require( 'gulp-minify-css' );
var uglify = require( 'gulp-uglify' );
var concat = require( 'gulp-concat' );

gulp.task('sass', function() {
  return gulp.src('./build/scss/main.scss')
    .pipe(concat( 'main.min.css' ))
    .pipe(sass())
    .pipe(minifycss())
    .pipe(gulp.dest('./src/assets/css'))
});

gulp.task('scripts', function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    './build/js/main.js'
  ])
    .pipe(concat( 'main.min.js' ))
    .pipe(uglify())
    .pipe(gulp.dest('./src/assets/js'))
});

gulp.task('cop', function() {
  return gulp.src([
    './bower_components/bootstrap-sass/assets/fonts/bootstrap/*',
  ])
  .pipe(gulp.dest('./src/assets/fonts/bootstrap'))
});

gulp.task('watch', function() {
  gulp.watch([
    './build/scss/*.scss',
    './build/scss/common/*.scss',
    './build/scss/components/*.scss',
    './build/scss/layouts/*.scss',
    './build/scss/layouts/pages/*.scss'
  ], ['sass']);
  gulp.watch('./build/js/*.js', ['scripts']);
});

gulp.task( 'default', ['sass', 'scripts', 'cop', 'watch'] );
