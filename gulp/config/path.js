const srcFolder = `./src`;
const publicFolder = `./public`;
const rootFolder = nodePath.basename(nodePath.resolve())

import * as nodePath from 'path';

export const path = {
  src: {
    assets: `${srcFolder}/assets/**/*.*`,
    style: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scripts: `${srcFolder}/js/script.js`,
    fonts: `${srcFolder}/fonts/`,
    svgicons:`${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    style: `${srcFolder}/scss/**/*.scss`,
    assets: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.*`,
    scripts: `${srcFolder}/js/**/*.js`,
  },
  public: {
    style: `${publicFolder}/css/`,
    assets: `${publicFolder}/assets/`,
    html: `${publicFolder}/`,
    images: `${publicFolder}/img/`,
    scripts: `${publicFolder}/js/`,
    fonts: `${publicFolder}/fonts/`,
  },
  clean: publicFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  publicFolder: publicFolder,
  ftp: ``
}
