import webpack from 'webpack-stream';

export const scripts = () => {
  return app.gulp.src(app.path.src.scripts)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'JS',
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(webpack({
      mode: app.isProd ? 'production' : 'development',
      output: {
        filename: 'script.min.js',
      },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: "defaults"
                }]
              ]
            }
          }
        }]
      },
      devtool: !app.isProd ? 'source-map' : false
    }))
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(app.gulp.dest(app.path.public.scripts))
    .pipe(app.plugins.browserSync.stream());
}