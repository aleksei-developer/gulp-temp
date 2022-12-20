import svgSprite from "gulp-svg-sprite";

export const svgSprites = () => {
  return app.gulp.src(app.path.src.svgicons)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SVG',
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/sprite.svg`,
          example: true
        }
      }
    }))
    .pipe(app.gulp.dest(app.path.public.images))
    .pipe(app.plugins.browserSync.stream());
}