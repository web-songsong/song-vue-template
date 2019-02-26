const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('../config')
function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}
module.exports = {
  context: path.resolve(__dirname, '..'),
  // entry: './examples/entry.js',
  entry: './src/components.js',
  output: {
    filename: '[name].js',
    path: config.build.assetsRoot
  },
  plugins: [new VueLoaderPlugin()],
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
        include: [resolve('examples'), resolve('packages')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('examples'), resolve('packages')],
        options: {
          babelrc: false,
          plugins: ['dynamic-import-webpack']
        }
      }
    ]
  }
}
