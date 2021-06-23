const currentTask = process.env.npm_lifecycle_event // LECTURE 59 

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

// same for dev and build
let config = {

  entry: './app/assets/scripts/App.js', // It points to the poath of the JS file we want webpack to watch, process and bundle.

  module: {
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
  }
}

if ( currentTask == 'dev') {
  config.output = {
    
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app')
  
  }

  config.devServer = {
    before: function(app, server){
      server._watch('./app/**/*.html')
    },  
    contentBase: path.join(__dirname, 'app'),
    hot: true, 
    port: 3000,
    host: '0.0.0.0' 
  }

  config.mode = 'development'
}

if ( currentTask == 'build') {
  config.output = {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist') 
  }

  config.mode = 'production'
  config.optimization = {
    splitChunks: {chunks: 'all'}
  }
}

module.exports = config //course 59TH