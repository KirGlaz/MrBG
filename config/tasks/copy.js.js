module.exports = () => {
  $.gulp.task('copy:js', () => {
      return $.gulp.src('./src/js/*.*')
          .pipe($.gulp.dest('dist/js'));
  })
}