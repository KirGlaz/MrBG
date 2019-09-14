module.exports = () => {
    $.gulp.task('scss', () => {
        return $.gulp.src('./src/scss/main.scss')
            .pipe($.glp.if($.dev, $.glp.sourcemaps.init()))
            .pipe($.glp.sassGlob())
            .pipe($.glp.sass()).on('error', $.glp.sass.logError)
            .pipe($.glp.autoprefixer())
            .pipe($.glp.if(!$.dev, $.glp.csso()))
            .pipe($.glp.if(!$.dev, $.glp.rename({ suffix: '.min' })))
            .pipe($.glp.if($.dev, $.glp.sourcemaps.write()))
            .pipe($.gulp.dest('dist/css'))
            .pipe($.bSync.stream());
    })
}