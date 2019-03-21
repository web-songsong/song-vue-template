const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')
const utils = require('./utils')
module.exports = merge(common, {
  mode: 'development',
  entry: './examples/entry.js',
  module: {
    rules: utils.styleLoaders({
      usePostCSS: false
    })
  },
  devServer: {
    contentBase: false,
    hot: true,
    progress: false,
    overlay: { warnings: false, errors: true },
    open: false,
    host: '0.0.0.0',
    quiet: true,
    port: config.dev.port,
    clientLogLevel: 'none' // 浏览器不显示编译过程
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'index.html')
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `浏览器打开地址: ${config.dev.https ? 'https' : 'http'}://${
            config.dev.host
          }:${config.dev.port}`
        ]
      },
      onErrors: () => {
        const notifier = require('node-notifier')

        return (severity, errjors) => {
          if (severity !== 'error') return

          const error = errors[0]
          const filename = error.file && error.file.split('!').pop()

          notifier.notify({
            title: require('../package.json').name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname)
          })
        }
      },
      clearConsole: true
    })
  ]
})
