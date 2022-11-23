import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js"
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { script } from "./gulp/tasks/script.js";
import { img } from "./gulp/tasks/img.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { server } from "./gulp/tasks/server.js";

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins
}

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.script, script);
  gulp.watch(path.watch.img, img);
}

const mainTasks = gulp.parallel(html, scss, script, img, fonts);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
// const dev = gulp.series(reset, mainTasks, watcher)

gulp.task('default', dev);