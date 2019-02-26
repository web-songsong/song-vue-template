const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const utils = require('./utils')
module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true,
      usePostCSS: true
    })
  },
  output: {
    filename: utils.assetsPath('index.js'),
    library: 'svt',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/svt.css')
    })
  ]
})
