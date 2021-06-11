const path = require('path') // import path (which is a part of nodejs lib.)

//LECTURE 15
const postCSSPlugins = [
    require('postcss-import'),//lecture 16 new line!!!!!!!!!!!!!
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]
//end of LECTURE 15

module.exports = {  // When webpack loads this file, it knows the JS object we just created is what should be exported and used.

    //START OF LECTURE 15 NEW PART:
    module: {
        // https://webpack.js.org/loaders/css-loader/
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader", {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}],
          },
        ],
      },
    //END OF LECTURE 15.


    entry: './app/assets/scripts/App.js', // It points to the poath of the JS file we want webpack to watch, process and bundle.


    output: {   // control what the bundle file should e named 
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app') // webpack requires absoulte path to work. we need to manually import nodejs
                                             // This makes sure that no matter what operating system you're on, windows, Mac, or Linux, it will be 
                                             // able to generate an absolute path.

        // path package.
    },


    mode: 'development',
    watch: true // webpack will keep actively watching us, we do not need to run any other code again on terminal...

}// It should be exported for use.