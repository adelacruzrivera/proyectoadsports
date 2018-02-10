var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify');
/*
* Configuracion de la tarea 'demo'
*/

gulp.task('andremo', function () {
    gulp.src('js/source/*.js')
    .pipe(concat('todo.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/build/'))
});

gulp.task('css', function(){
    gulp.src('css/source/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/min'))
});

gulp.task('watch', function(){
    //gulp.watch('css/source/*.scss', ['sass']);
    gulp.watch('css/source/*.css', ['css']);
    gulp.watch('js/source/*.js', ['andremo']);
    //gulp.watch(['./bower.json'], ['wiredep']);
    
});

gulp.task('default', ['watch']);