export const assets =()=>{
  return app.gulp.src(app.path.src.assets)
  .pipe(app.gulp.dest(app.path.public.assets))
  .pipe(app.plugins.browserSync.stream());
}