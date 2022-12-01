import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import prefixer from 'gulp-autoprefixer';
import bulk from 'gulp-sass-bulk-importer';
import concat from 'gulp-concat';
import merge from 'merge-stream';

const sass = gulpSass(dartSass);

export const scss = () => {
  const cssMain = app.gulp.src('src/style.css');
  const scssAll = app.gulp.src('src/blocks/**/*.scss')
    .pipe(bulk())
    .pipe(sass());
  // const modulesScc = app.gulp.src('node_modules/swiper/swiper-bundle.min.css')

  // return merge(cssMain, modulesScc, scssAll)
  return merge(cssMain, scssAll)
    .pipe(prefixer(
      {
        overrideBrowserslist: ['last 8 versions'],
        browsers: [
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24',
          'Explorer >= 11',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6',
        ],
      }
    ))
    .pipe(cleanCss(
      {
        level: 2
      }
    ))
    .pipe(concat('style.min.css'))
    .pipe(app.gulp.dest(app.path.build.css));
}