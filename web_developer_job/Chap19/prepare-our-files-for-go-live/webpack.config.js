// let cssConfig = {
//..."css-loader?url=false"...
//}

//The part above is very important. 


const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  // If in the future the creator of the postcss-hexrgba package
  // releases an update (it is version 2.0.1 as I'm writing this)
  // then it will likely work with PostCSS V8 so you can uncomment
  // the line below and also install the package with npm.
  //require('postcss-hexrgba'),
  require('autoprefixer')
]

let cssConfig = {
  test: /\.css$/i,
  use: ["css-loader?url=false", { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
}

let config = {
  entry: './app/assets/scripts/App.js',
  module: {
    rules: [
      cssConfig
    ]
  }
}

if (currentTask == 'dev') {
  cssConfig.use.unshift('style-loader')
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  }
  config.devServer = {
    before: function(app, server) {
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  }
  config.mode = 'development'
}

if (currentTask == 'build') {
  cssConfig.use.unshift(MiniCssExtractPlugin.loader)
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
  config.mode = 'production'
  config.optimization = {
    splitChunks: {chunks: 'all'},
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()]
  }
  config.plugins = [new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'})]
}

module.exports = config