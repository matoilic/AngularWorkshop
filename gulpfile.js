var gulp = require('gulp'),
    connect = require('gulp-connect');

var sourceFiles = [
    'index.html',
    'src/**/*.*'
];

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true,
        port: 8088
    });
});

gulp.task('reload', function() {
    gulp
        .src(sourceFiles)
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(sourceFiles, ['reload']);
});

gulp.task('default', ['connect', 'watch']);
