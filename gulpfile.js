var gulp = require("gulp"),
	jade = require("gulp-jade"),
	stylus = require("gulp-stylus"),
	uglify = require('gulp-uglify'),
	// changed = require('gulp-changed'),
	// livereload = require('gulp-livereload'),
	connect = require("gulp-connect");

gulp.task("connect", function () {
	connect.server({
		port: 1337,
		livereload: true,
		root: './dist/'
	});
});


gulp.task("jade", function () {
	gulp.src("jade/*.jade")
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('./dist/'))
		.pipe(connect.reload());
});

gulp.task("stylus", function () {
	gulp.src("styl/style.styl")
		.pipe(stylus({compress: true}))
		.pipe(gulp.dest('./dist/css'))
		.pipe(connect.reload());
});

gulp.task('compress', function() {
	gulp.src('scripts/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))

});

gulp.task("watch", function () {
	// gulp.watch(['./dist/*.html'], ['html']);
	gulp.watch("jade/*.jade", ['jade']);
	gulp.watch("styl/style.styl", ['stylus']);
	gulp.watch("scripts/*.js", ['compress']);
});

gulp.task("default", ["jade", "stylus", "compress", "connect", "watch"] );
// gulp.task('default', ['connect', 'watch']);