const gulp = require('gulp');

// Plugins
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');

gulp.task('docs', shell.task(['jsdoc2md --template README.hbs "lib/**/*.js" > README.md']));

gulp.task('default', () => gulp.src(['test/*.js', 'test/**/*.js'], { read:false }).pipe(mocha({ reporter:'spec' })));
