const path = require('path') // import path (which is a part of nodejs lib.)

module.exports = {  // When webpack loads this file, it knows the JS object we just created is what should be exported and used.

    entry: './app/assets/scripts/App.js', // It points to the poath of the JS file we want webpack to watch, process and bundle.


    output: {   // control what the bundle file should e named 
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app') // webpack requires absoulte path to work. we need to manually import nodejs
                                             // This makes sure that no matter what operating system you're on, windows, Mac, or Linux, it will be 
                                             // able to generate an absolute path.

        // path package.
    },


    mode: 'development',
    watch: true, // webpack will keep actively watching us, we do not need to run any other code again on terminal...


    // COURSE 15TH !!!!!!!!!!!!!!!!!!!!!!
    modules: {
        rules: [
         {
             test: /\.css$/i,    // only interested i files end in dot css.
             use: ['css-loader']        // leverage packages we download from npm
         } // tell webpack what to do if it run into a CSS file.
        ]
    }

}// It should be exported for use.
