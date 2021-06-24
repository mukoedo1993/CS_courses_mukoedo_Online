// let cssConfig = {
//..."css-loader?url=false"...
//}

//The part above is very important. 


const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // course 62nd
const fse = require('fs-extra') // let's leverage this package to search for any HTML file. course 63rd

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

class RunAfterCompile{
  /*copy images... course 63rd*/
  apply(compiler) {
    compiler.hooks.done.tap('Copy images', function() {
      fse.copySync('./app/assets/images', './dist/assets/images') //copy files from the lhs parameter folder to the rhs parameter
                                                                  // folder.
    })
  }
}

let cssConfig = {
  test: /\.css$/i,
  use: ["css-loader?url=false", { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }]
}

let pages = fse.readdirSync('./app').filter( function(file) {
  return file.endsWith('.html')
}).map(function(page) {
  return new HtmlWebpackPlugin({
    filename: page,
    template: `./app/${page}`
  })
}) /*
readdirSync read every single file in this folder.

map will generate a new array in this array.
we want an array with multiple html file names.
*/

let config = {
  entry: './app/assets/scripts/App.js',
  plugins: pages,//course 62nd
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
  config.module.rules.push({
    test: /\.js$/,
    exclude: /(node_modules)/, //ignore the node module folder
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  })

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

  config.plugins.push(new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
                      new RunAfterCompile()
  )
}

module.exports = config