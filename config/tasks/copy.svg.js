module.exports = () => {
    $.gulp.task('copy:svg', () => {
        return $.gulp.src('./src/svg/*.*')
            .pipe($.gulp.dest('dist/svg'));
    })
}