const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('../config')
function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}
module.exports = {
  context: path.resolve(__dirname, '..'),
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
        include: [
          resolve('examples'),
          resolve('docs'),
          resolve('packages'),
          resolve('src/components')
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          plugins: ['dynamic-import-webpack']
        }
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        query: {
          limit: 10000,
          name: path.posix.join('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbloId: 'icon-[name]'
        }
      }
    ]
  }
}
