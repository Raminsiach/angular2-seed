var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: '.'
        },
        notify: false
    });
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('app/*.ts', browserSync.reload);
});