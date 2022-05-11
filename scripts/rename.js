var rename = require("gulp-rename");
var gulp = require('gulp');
var pinyin = require('./pinyin.js')

// rename via mutating function
gulp.src("./docs/.vuepress/dist/**/*")
  .pipe(rename(function (path) {
    // Updates the object in-place
    console.log(path.dirname)
    // path.dirname =  pinyin.getFullChars(path.dirname)
    // path.basename = pinyin.getFullChars(path.basename);
    // path.extname = ".md";
    path.dirname =  encodeURI(path.dirname)
    path.basename = encodeURI(path.basename);
    // path.extname = ".md";
  }))
  .pipe(gulp.dest("./docs/.vuepress/dist")); // ./dist/main/text/ciao/hello-goodbye.md