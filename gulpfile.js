const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-rimraf');
const browserSync = require('browser-sync').create();
const urlAdjuster = require('gulp-css-replace-url');

// COMPILE DEV SCSS FILES
gulp.task('sass', function () {
    return gulp.src(['./src/sass/css-kit.scss'])
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "src/",
            index: 'tests.html'
        }
    });

    gulp.watch("src/sass/**/*.scss",  gulp.series('sass'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// COMPILE PROD SCSS FILES AND MINIFY
gulp.task('css-prod', function () {
    return gulp.src(['./src/sass/css-kit.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(urlAdjuster({
            replace:  ['../../resources','resources'],
        }))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});

// COPY RESOURCES TO DIST FOLDER
gulp.task('copy-resources', function() {
    return gulp.src('./src/resources/*/*', {base:'./src/'})
        .pipe(gulp.dest('./dist'));
});

// CLEAN DIST FOLDER
gulp.task('clean-dist', function() {
    return gulp.src("dist/*", { read: false }).pipe(clean());
});


// GULP TASKS
gulp.task('compile-prod', gulp.parallel('css-prod', 'copy-resources'));
gulp.task('copy', gulp.series('copy-resources'));
gulp.task('run-dev', gulp.parallel('sass', 'serve'));
gulp.task('clean-prod', gulp.series('clean-dist'));