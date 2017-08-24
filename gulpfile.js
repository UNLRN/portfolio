const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const autoprefixer = require('gulp-autoprefixer');
const cssbeautify = require('gulp-cssbeautify');
const nodemon = require('gulp-nodemon');
// const pug = require('gulp-pug');

gulp.task('sass', function() {
	gulp.src('./src/sass/style.sass')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false,
	}))
	.pipe(cssbeautify({
		indent: '    ',
		autosemicolon: true,
	}))
	.pipe(gulp.dest('./dist/stylesheets'))
	.on('error', gutil.log);
});

// gulp.task('views', function() {
// 	gulp.src('views/**/*.pug')
// 	.pipe(pug());
// });

gulp.task('nodemon', function(done) {
	let running = false;

	return nodemon({
		script: './bin/www',
		exec: 'babel-node --presets es2015',
		ext: 'js',
	}).on('start', function() {
		if (!running) {
			done();
		}
		running = true;
	}).on('restart', function() {
		setTimeout(function() {
			reload();
		}, 500);
	});
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: 'http://localhost:3000/',
		port: 4000,
		notify: false,
	});
});

gulp.task('serve', ['browser-sync'], function() {
    gulp.watch('./src/sass/**/*.sass', ['sass']).on('change', reload);
    gulp.watch('./views/**/*.pug').on('change', reload);
});

gulp.task('default', ['sass', 'serve']);
