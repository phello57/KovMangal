import dartSass from "sass"
import gulpSass from "gulp-sass"
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss"; // вывод webp изображений
import autoprefixer from "gulp-autoprefixer"; // Добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; // Группировка медиа запросов



const sass = gulpSass(dartSass)

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "scss",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.replace(/@img\//g,'..img/'))
    .pipe(sass({
      outputStyle: 'expanded'
    }))

    .pipe(groupCssMediaQueries())

    .pipe(webpcss(
      {
        webpClass: ".webp",
        noWebpClass: ".no-webp"
      }
    ))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserlist: ["last 3 versions"],
      cascade: true
    }))

    // Если нужен не сжатый дубль файла стилей
    .pipe(app.gulp.dest("dist/css"))
    .pipe(cleanCss())

    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest("dist/css"))
    .pipe(app.plugins.browsersync.stream())
}