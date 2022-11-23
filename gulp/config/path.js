import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
  build: {
    html: './dist/',
    css: './dist/',
    script: './dist/',
    img: './dist/img/',
    fonts: './dist/fonts/'
  },
  src: {
    html: './src/**/*.html',
    css: './src/blocks/**/*.scss',
    script: './src/script.js',
    img: './src/img/**/*.*',
    fonts: './src/fonts/**/*.*'
  },
  watch: {
    html: './src/**/*.html',
    scss: './src/blocks/**/*.scss',
    script: './src/**/*.js',
    img: './src/img/**/*.*',
    fonts: './src/fonts/**/*.*'
  },
  clean: './dist',
  builderFolder: './dist',
  srcFolder: './src',
  rootFolder: rootFolder
}