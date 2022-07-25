const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));

// html task
gulp.task("html", async () => {
    return gulp
            .src("project/index.html")
            .pipe(gulp.dest("dist"))
})

// css task
gulp.task("css", async () => {
    return gulp
            .src("project/style/main.scss")
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("dist/css"))
});


// watch
gulp.task("watch", async () => {
    gulp.watch("project/index.html", gulp.series("html"))
    gulp.watch("project/style/**/*.scss", gulp.series("css"))
});

// default task
gulp.task("default", gulp.series("watch"))