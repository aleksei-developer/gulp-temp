export const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: app.path.public.html
    }
  });
}