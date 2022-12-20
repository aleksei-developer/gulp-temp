import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

globalThis.app = {
  isProd: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  gulp: gulp,
  path: path,
  plugins: plugins
};

const watcher = () => {
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.assets, assets)
  gulp.watch(path.watch.style, styles)
  gulp.watch(path.watch.scripts, scripts)
  gulp.watch(path.watch.images, images)
}

import { clean } from './gulp/task/clean.js';
import { html } from './gulp/task/html.js';
import { server } from './gulp/task/server.js';
import { assets } from './gulp/task/assets.js';
import { styles } from './gulp/task/styles.js';
import { scripts } from './gulp/task/scripts.js';
import { images } from './gulp/task/images.js';
import { fonts, otfToTtf, fontsStyle } from './gulp/task/fonts.js';
import { svgSprites } from './gulp/task/svgSprites.js'
import { zip } from './gulp/task/zip.js';

export { svgSprites }
export { dev }
export { build }
export { deployZIP }

const font = gulp.series(otfToTtf, fonts, fontsStyle);
const main = gulp.series(font, gulp.parallel(assets, html, styles, scripts, images))
const dev = gulp.series(clean, main, gulp.parallel(watcher, server));
const build = gulp.series(clean, main);
const deployZIP = gulp.series(clean, main, zip);

gulp.task('default', dev)