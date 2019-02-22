const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')
const config = require('../config')
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: path.posix.join(
      config.build.assetsSubDirectory,
      'js/[name].[chunkhash].js'
    )
  },
  plugins: [new webpack.HashedModuleIdsPlugin()]
})
