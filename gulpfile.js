var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback');

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

gulp.task('html', function() {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['server', 'watch']);
