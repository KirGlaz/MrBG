module.exports = () => {
    $.gulp.task('biblio', () => {
      return $.gulp.src('./src/biblio/*.js')
        .pipe($.glp.if($.dev, $.glp.sourcemaps.init()))
        .pipe($.glp.concat('biblio.js'))
        .pipe($.glp.babel({
          presets: ['@babel/env']
        }))
        .pipe($.glp.if(!$.dev, $.glp.uglify()))
        .pipe($.glp.if(!$.dev, $.glp.rename({ suffix: '.min' })))
        .pipe($.glp.if($.dev, $.glp.sourcemaps.write()))
        .pipe($.gulp.dest('dist/biblio'))
        .pipe($.bSync.stream());
    })
  }