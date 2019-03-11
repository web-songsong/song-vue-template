const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('../config')
function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}
module.exports = {
  context: path.resolve(__dirname, '..'),
  // entry: './examples/entry.js',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: config.build.assetsRoot
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('examples'),
      main: resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('examples'), resolve('packages')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // include: [
        //   resolve('examples'),
        //   resolve('packages'),
        //   resolve('test'),
        //   resolve('src')
        // ],
        exclude: /node_modules/,
        options: {
          babelrc: false,
          plugins: ['dynamic-import-webpack']
        }
      }
    ]
  }
}
