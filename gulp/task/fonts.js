import ttf2woff from 'gulp-ttf2woff'
import ttf2woff2 from 'gulp-ttf2woff2'
import fonter from 'gulp-fonter';
import fs from 'fs';

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts`))
}
export const fonts = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)
        .pipe(ttf2woff())
        .pipe(app.gulp.dest(app.path.public.fonts))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(app.path.public.fonts))
}

export const fontsStyle = (done) => {
    let fileContent = `${app.path.srcFolder}/scss/_fonts.scss`;

    fs.readdir(app.path.public.fonts, function (err, items) {
        if (items) {
            fs.writeFile(fileContent, '', cb);
            let newFile;
            for (let i = 0; i < items.length; i++) {
                let fontname = items[i].split('.')[0];
                if (newFile != fontname) {
                    let fontName = fontname.split('-')[0] ? fontname.split('-')[0] : fontname;
                    let fontWeight = fontname.split('-')[1] ? fontname.split('-')[1] : fontname;
                    switch (fontWeight.toLowerCase()) {
                        case 'thin':
                            fontWeight = 100
                            break;
                        case 'extralight':
                            fontWeight = 200
                            break;
                        case 'light':
                            fontWeight = 300
                            break;
                        case 'medium':
                            fontWeight = 500
                            break;
                        case 'semibold':
                            fontWeight = 600
                            break;
                        case 'bold':
                            fontWeight = 700
                            break;
                        case 'extrabold':
                            fontWeight = 800
                            break;
                        case 'black':
                            fontWeight = 900
                            break;
                        default:
                            fontWeight = 400
                    }
                    fs.appendFile(`${app.path.srcFolder}/scss/_fonts.scss`, '@include font("' + fontName + '", "' + fontname + '", "' + fontWeight + '", "normal");\r\n', cb);
                }
                newFile = fontname;
            }
        }
    })

    done();
}

function cb() {
}
