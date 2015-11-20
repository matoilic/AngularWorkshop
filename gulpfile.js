var gulp = require('gulp');
var connect = require('gulp-connect');
var protractor = require('gulp-protractor');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var path = require('path');
var webpackConfig = require('./webpack.config');

gulp.task('connect', function() {
    var compiler = webpack(webpackConfig);

    connect.server({
        root: [__dirname],
        livereload: false,
        port: 8088,
        middleware: function(connect) {
            return [
                connect().use(webpackDevMiddleware(compiler, {
                    noInfo: true,
                    publicPath: webpackConfig.output.publicPath
                })),
                connect().use(webpackHotMiddleware(compiler))
            ]
        }
    });
});

gulp.task('compile-stylesheets', function() {
    return gulp
        .src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: [
                path.resolve('src'),
                path.resolve('node_modules/bootstrap-sass/assets/stylesheets')
            ]
        }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/stylesheets'));
});

gulp.task('copy-static', function() {
    return gulp
        .src('src/images/**/*.*')
        .pipe(gulp.dest('build/images'));
});

gulp.task('webdriver-update', function(done) {
    var browsers = ['chrome'];

    if(process.platform === 'win32') {
        browsers.push('ie');
    }

    protractor.webdriver_update({browsers: browsers}, done);
});

gulp.task('webdriver-standalone', protractor.webdriver_standalone);

gulp.task('test', ['webdriver-update'], TestE2eTask);

gulp.task('testserver', ServerTask);

function TestE2eTask() {
    return gulp.src('./src/components/**/*.spec.js')
        .pipe(protractor.protractor({
            configFile: 'protractor.conf.js'
        }))
        .on('error',function(err){
            console.log('error message from test e2e', err);
            throw err;
        });
}

var testWebServer;
function ServerTask(){
    testWebServer = gulp.src(__dirname).pipe(server());
}

gulp.task('default', ['compile-stylesheets', 'copy-static', 'connect']);
