const gulp = require ('gulp');
const sass = require ('gulp-sass');
const rename = require ('gulp-rename');
const browserSync = require ('browser-sync').create();


function styles() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./",
           index: "./index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', styles)
}

exports.watch = watch;