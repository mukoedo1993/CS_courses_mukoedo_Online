const path = require('path') // import path
module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app') // webpack requires absoulte path to work. we need to manually import nodejs 
        // path package.
    },
    mode: 'development',
    watch: true // webpack will keep actively watching us, we do not need to run any other code again on terminal...

}// It should be exported for use.
