var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sync = require('browser-sync'),
    reload = sync.reload,
    uglify = require('gulp-uglify');

gulp.task('styles', function () {
    gulp.src("app/scripts/css/**/*.css")
        .pipe(concat("main.min.css"))
        .pipe(gulp.dest("dist/scripts/css"))
        .pipe(reload({stream: true}));
});

gulp.task('scripts', function () {
    gulp.src("app/scripts/js/*.js")
        .pipe(gulp.dest("dist/scripts/js"))
        .pipe(reload({stream: true}));
});

gulp.task('images', function () {
    gulp.src("images/**/*.*")
        .pipe(gulp.dest("dist/"))
        .pipe(reload({stream: true}));
});

gulp.task('html', function () {
    gulp.src("app/views/**/*.html")
        .pipe(gulp.dest("dist/views"))
        .pipe(reload({stream: true}));
});

gulp.task('index', function () {
    gulp.src("app/index.html")
        .pipe(gulp.dest("dist"))
        .pipe(reload({stream: true}));
});

gulp.task('angular', function () {
    gulp.src("app/scripts/js/app/**/*.js")
        .pipe(gulp.dest("dist/scripts/js/app"))
        .pipe(reload({stream: true}));
});

gulp.task('bower', function () {
    gulp.src("app/bower_components/**/*.*")
        .pipe(gulp.dest("dist/bower_components"))
        .pipe(reload({stream: true}));
});

gulp.task('browser-sync', function () {
    sync({
        port: 3000,
        ui: {
            port: 8080
        },
        server: {
            baseDir: "./dist"
        }
    })
});

gulp.task('watch', function () {
    gulp.watch("app/scripts/css/**/*.css", ['styles']);
    gulp.watch("app/scripts/js/**/*.js", ['scripts']);
    gulp.watch("app/views/**/*.html", ['html']);
    gulp.watch("app/scripts/js/app/**/*.js", ['angular']);
    gulp.watch("app/bower_components/**/*.*", ['bower']);
    gulp.watch("app/index.html", ['index']);
    gulp.watch("app/images/**/*.*", ['images']);
});

gulp.task('default', ['styles', 'scripts', 'images', 'html', 'index', 'angular', 'bower', 'watch', 'browser-sync']);
