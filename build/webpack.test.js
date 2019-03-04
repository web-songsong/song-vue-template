const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const utils = require('./utils')
module.exports = merge(common, {
  mode: 'none',
  devtool: 'inline-source-map',
  module: {
    rules: utils.styleLoaders()
  }
})
