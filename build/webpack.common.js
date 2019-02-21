const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = require('../config')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './examples/entry.js',
  output: {
    filename: '[name].js',
    path: config.build.assetsRoot
  },
  plugins: [
    // new CleanWebpackPlugin([config.build.assetsRoot]),
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
        include: [resolve('src')]
      }
    ]
  }
  // mode: 'none'
}
