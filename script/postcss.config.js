/**
* 
* Created by maixing on 2019/09/26 11:42:13
*
*/
const AutoPreFixer         = require('autoprefixer');
const CssNaNo              = require('cssnano')
module.exports = {
    plugins: [
        AutoPreFixer({
            overrideBrowserslist: ['> 0.15% in CN'],
            cascade : false
        }),
        CssNaNo()
    ]
}