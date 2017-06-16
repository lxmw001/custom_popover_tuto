var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback'),
    concat = require('gulp-concat'),
  	uglify = require('gulp-uglify'),
  	cleanCSS = require('gulp-clean-css');;

gulp.task('server', function() {
	connect.server({
		root: './app',
		port: 3000,
		livereload: true,
		middleware: function(connect, opt) {
			return [historyApiFallback({})];
		}
	});
});

gulp.task('minifyJS', function () {
  gulp.src('./app/js/**/*.js')
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./app/build/js'))
  .pipe(connect.reload());
});

gulp.task('minifyCss', () => {
  return gulp.src('./app/styles/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./app/build/css'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/js/**/*.js'], ['minifyJS']);
	gulp.watch(['./app/styles/**/*.css'], ['minifyCss']);
});

gulp.task('default', ['server', 'watch']);
