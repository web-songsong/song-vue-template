const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = require('../config')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}
module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './examples/entry.js',
  output: {
    filename: path.posix.join(
      config.build.assetsSubDirectory,
      'js/[name].[chunkhash].js'
    ),
    path: config.build.assetsRoot
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join('index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('examples')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('examples')]
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('examples')],
        options: {
          babelrc: false,
          plugins: ['dynamic-import-webpack']
        }
      }
    ]
  }
}
