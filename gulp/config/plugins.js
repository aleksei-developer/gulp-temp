import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';

export const plugins = {
  gulpIf: gulpIf,
  replace: replace,
  browserSync: browserSync,
  plumber: plumber,
  notify: notify,
  newer: newer
}