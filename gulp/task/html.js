import fileinclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import webphtml from 'gulp-webp-html-nosvg';

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'HTML',
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(fileinclude())
    .pipe(app.plugins.replace(/@img\//g, '/img/'))
    .pipe(app.plugins.gulpIf(app.isProd,webphtml()))
    .pipe(app.plugins.gulpIf(app.isProd, htmlmin({
      collapseWhitespace: true,
      removeComments: true
    })))
    .pipe(app.gulp.dest(app.path.public.html))
    .pipe(app.plugins.browserSync.stream());
}