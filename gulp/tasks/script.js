import webpack from "webpack-stream";

export const script = () => {
  return app.gulp.src(app.path.src.script)
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'app.min.js',
      }
    }))
    .pipe(app.gulp.dest(app.path.build.script))
    .pipe(app.plugins.browserSync.stream())
}