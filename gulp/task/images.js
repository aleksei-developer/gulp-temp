import imagemin from "gulp-imagemin";
import webp from 'gulp-webp';

export const images = () => {
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.newer(app.path.public.images))
    .pipe(app.plugins.gulpIf(app.isProd,webp()))
    .pipe(app.plugins.gulpIf(app.isProd,app.gulp.dest(app.path.public.images)))
    .pipe(app.plugins.gulpIf(app.isProd,app.gulp.src(app.path.src.images)))
    .pipe(app.plugins.gulpIf(app.isProd,app.plugins.newer(app.path.public.images)))
    .pipe(app.plugins.gulpIf(app.isProd,imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      interlaced: true,
      optimizationLevel: 3
    })))
    .pipe(app.gulp.dest(app.path.public.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.public.images))
    .pipe(app.plugins.browserSync.stream());
}