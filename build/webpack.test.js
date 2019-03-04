const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const utils = require('./utils')
module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  module: {
    rules: utils.styleLoaders()
  }
})
