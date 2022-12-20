import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import sassGlob from 'gulp-sass-glob';
import webpCSS from 'gulp-webpcss';

const sass = gulpSass(dartSass);

export const styles = () => {
  return app.gulp.src(app.path.src.style, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SCSS',
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sassGlob())
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }))
    .pipe(app.plugins.gulpIf(app.isProd,groupCssMediaQueries()))
    .pipe(app.plugins.gulpIf(app.isProd,webpCSS({
      webpClass: '.webp',
      noWebpClass: '.no-webp'
    })))
    .pipe(app.plugins.gulpIf(app.isProd,autoPrefixer({
      grid: true,
      overrideBrowserList: ["last 3 versions"],
      cascade: true
    })))
    .pipe(app.plugins.gulpIf(app.isProd,app.gulp.dest(app.path.public.style)))
    .pipe(app.plugins.gulpIf(app.isProd,cleanCSS()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(app.gulp.dest(app.path.public.style))
    .pipe(app.plugins.browserSync.stream());
}