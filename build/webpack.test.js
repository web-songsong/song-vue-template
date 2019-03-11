const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const utils = require('./utils')

module.exports = merge(common, {
  mode: 'development',
  devtool: '#inline-source-map',
  module: {
    rules: utils.styleLoaders()
  }
})
