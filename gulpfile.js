var gulp = require('gulp'),
    connect = require('gulp-connect'),
    protractor = require('gulp-protractor').protractor,
    server = require('gulp-server-livereload');

var sourceFiles = [
    'index.html',
    'src/**/*.*'
];

gulp.task('connect', function() {
    connect.server({
        root: [__dirname],
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




gulp.task('test' ,['testserver'], TestE2eTask);
gulp.task('testserver',ServerTask);

function TestE2eTask(){
    // var sources = [].concat(conf.protractor.files);
    console.log('test e2e ');
    return gulp.src('./src/components/**/*.spec.js')
        .pipe(protractor({
            configFile:"protractor.conf.js",
            // args:['debug']
        }))
        .on('error',function(err){
            console.log('error message from test e2e',err);
            throw err;
        }).on('end',function(){
            if(testWebServer){
                testWebServer.emit('kill');
            }
        });

}

var testWebServer;
function ServerTask(){
    testWebServer = gulp.src(__dirname).pipe(server());
}



gulp.task('default', ['connect', 'watch']);
