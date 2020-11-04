// var gulp = require('gulp')
// var uglify = require('gulp-uglify')
// var rename = require('gulp-rename')

// gulp.task('script', function () {
//   gulp.src('src/*.js')
//       .pipe(uglify())
//       .pipe(rename(function (path) {
//         path.basename += '.min'
//       }))
//       .pipe(gulp.dest('dist/'))
// })

// gulp.task('auto', function () {
//   gulp.watch('src/*js', ['script'])
// })

// gulp.task('default', ['script', 'auto'])

const { src, dest, watch, series } = require('gulp');
// const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function script() {
    return src('src/*.js')
        // .pipe(uglify())
        // .pipe(rename(function (path) {
        //     path.basename += '.min';
        // }))
        .pipe(dest('dist/'));
}

function auto() {
    watch(['src/*js'], series('script'))
}

function defaultTask() {
    return series('script', 'auto');
}

exports.script = script;
exports.auto = auto;
exports.default = defaultTask;
