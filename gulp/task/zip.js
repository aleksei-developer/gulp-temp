import { deleteAsync } from 'del';
import gulpZip from 'gulp-zip';
// const deletedDirectoryPaths = await deleteAsync(`./${app.path.srcFolder}.zip`);

export const zip = () => {
  deleteAsync(`./${app.path.srcFolder}.zip`);
  return app.gulp.src(`${app.path.publicFolder}/**/*.*`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'ZIP',
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(gulpZip(`${app.path.rootFolder}.zip`))
    .pipe(app.gulp.dest('./'))
}