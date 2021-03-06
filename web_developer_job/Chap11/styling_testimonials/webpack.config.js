const path = require('path') // import path (which is a part of nodejs lib.)

//LECTURE 15
const postCSSPlugins = [
    require('postcss-import'),//lecture 16 new line!!!!!!!!!!!!!
    require('postcss-mixins'), // LECTURE 21 NEW LINE!!!!!!!!!
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
          {
            test: /\.(png|jpg)$/, //course 32nd
  loader: 'url-loader' // course 32nd
          }
        ],
      },
    //END OF LECTURE 15.


    entry: './app/assets/scripts/App.js', // It points to the poath of the JS file we want webpack to watch, process and bundle.

    // START OF LECTURE 20
    devServer : {
      before: function(app, server){
        server._watch('./app/**/*.html')
      },  // It helps us to watch any change happened on HTML file...

      contentBase: path.join(__dirname, 'app'),
      hot: true, // To allow our webpack to inject our javascript into the browser's memory on the fly
      port: 3000,
      host: '0.0.0.0' //This allows devices on the same network to be able to access the web dev server from this computer.
      /*
      View our site on any device connected to the same Wi-Fi /Network as the computer we're working on
      LECTURE 20TH
      */


    },
    //end of lecture 20
    output: {   // control what the bundle file should e named 
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app') // webpack requires absoulte path to work. we need to manually import nodejs
                                             // This makes sure that no matter what operating system you're on, windows, Mac, or Linux, it will be 
                                             // able to generate an absolute path.

        // path package.
    },


    mode: 'development',
    //watch: true //LECTURE 20

}// It should be exported for use.