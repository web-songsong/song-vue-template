const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')
const config = require('../config')
module.exports = merge(common, {
  mode: 'none',
  // devtool: 'source-map',
  output: {
    filename: path.posix.join(config.build.assetsSubDirectory, 'index.js')
  },
  plugins: [new webpack.HashedModuleIdsPlugin()]
})
