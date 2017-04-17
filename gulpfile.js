/**
 * author: wangbinbin
 * */
'use strict';

const gulp = require('gulp');
const spriteSmith = require('gulp.spritesmith');
const zip = require('gulp-zip');
const del = require('del');

gulp.task('css', function() {
    const postcss = require('gulp-postcss');
    return gulp.src('src/css/*.css')
        .pipe(postcss([require('autoprefixer')]))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('sprite', () => {
    const spriteData = gulp.src('imgs/' + 'icon-*.png')
        .pipe(spriteSmith({
            imgName: 'sprite.png',
            cssName: 'sprite.less',
            padding: 2
        }));
    return spriteData.pipe(gulp.dest('dist/imgs/sprite'));
});


gulp.task('zip', () => {
    gulp.src('dist/')
});


gulp.task('watch', () => {
   gulp.watch('src/css/index.css', ['css']);
   gulp.watch('index.html', () => console.log('谁动了我的html...'));
   gulp.watch('js/*.js', () => console.log('谁动了我的js...'));
});

gulp.task('default', ['watch']);