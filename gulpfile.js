'use strict';

const path = require('path');
const gulp = require('gulp');
const del = require('del');
const mv = require('mv');
const gutil = require('gutil');

const webpack = require('webpack');
const webpackDistConf = require('./release.js');

const browserSync = require('browser-sync');
const spa = require('browser-sync-spa');
const dist = path.resolve("../libs");

browserSync.use(spa());


gulp.task('clean', () => {
    return del(['./lib', './libTmp', './dist']);
});


gulp.task('build', (done) => {
    const webpackBundler = webpack(webpackDistConf);
    const webpackChangeHandler = (err, stats) => {
        if (err) {
            gutil.log(err);
        }
        gutil.log(stats.toString({
            colors: true,
            chunks: false,
            hash: false,
            version: false
        }));
        mv('./libTmp', './lib', { clobber: true }, (err) => {
            if (err) {
                console.log(err);
            } else {
                del('./libTmp');
            }
            done();
        })
    };

    webpackBundler.run(webpackChangeHandler);
});

gulp.task("copy", function () {
    return gulp.src([
        ".\\dist\\**",
        ".\\lib\\**",
        "./package.json",
    ]).pipe(gulp.dest(dist));
});


gulp.task('cleanLibs', () => {
    return del(["..\\libs\\dist\\**", "..\\libs\\lib\\**", "..\\libs\\package.json", "..\\libs\\README.md"], { force: true });
});

gulp.task('default', gulp.series('clean', "cleanLibs", 'build', "copy"));