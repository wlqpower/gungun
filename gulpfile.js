var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefix = require("gulp-autoprefixer"),
    browserSync = require("browser-sync");
    rev = require("gulp-rev"),
    revCollector = require("gulp-rev-collector");

gulp.task("browser-sync",["sass","build","js"],function(){
    browserSync({
        server:{
            baseDir: 'dis/'
        }
    });
});

gulp.task("build",function(){
    gulp.src("src/*.html")
        .pipe(gulp.dest("dis/"));
});

gulp.task("sass",function(){
    gulp.src("src/scss/*.scss")
        .pipe(autoprefix())
        .pipe(sass())
        .pipe(gulp.dest("dis/css"))
        .pipe(rev())
        .pipe(gulp.dest("dis/css"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dis/rev"))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task("rev",function(){
    return gulp.src(["dis/**/*.json","src/*.html"])
        .pipe(revCollector())
        .pipe(gulp.dest("dis/"))
});

gulp.task("img",function(){
    gulp.src("src/img/*")
        .pipe(gulp.dest("dis/img"));
});

gulp.task("js",function(){
    gulp.src("src/js/*")
        .pipe(gulp.dest("dis/js"));
});

gulp.task("rebuild",["build"],function(){
    browserSync.reload();
});

gulp.task("watch",function(){
    gulp.watch("src/scss/*.scss",["sass"]);
    gulp.watch("src/js/*.js",["js"]);
    gulp.watch("src/img/*",["img"]);
    gulp.watch("**/*.html",['rebuild']);
    gulp.watch("src/*.html",["build"]);
});

gulp.task("default",["browser-sync","img","js","rev","watch"]);
