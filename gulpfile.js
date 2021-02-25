const {series, src, dest, watch} = require('gulp');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

// Image Utilities
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

// CSS Utilities
const sass = require('gulp-dart-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

// JS Utilities
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const cssnano = require('cssnano');

// Paths
const paths = {
    img: 'src/images/**/*',
    sass: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

// ---- Functions ------
// Image
function imageMin() {
    return src(paths.img)
        .pipe(imagemin())
        .pipe(dest('./build/images'))
}

function imageWebp() {
    return src(paths.img)
        .pipe(webp())
        .pipe(dest('./build/images'))
}

// CSS
function css() {
    return src(paths.sass)
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function cssMin() {
    return src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css'))
}

// JS
function js() {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'))
}

function jsMin() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/js'))
}

function watchFiles() {
    watch(paths.sass, css);
    watch(paths.sass, cssMin);
    watch(paths.js, js);
    watch(paths.js, jsMin);
}


// ---- Exports ----
exports.build = series(imageMin, imageWebp, css, cssMin, js, jsMin);
exports.watchFiles = watchFiles;