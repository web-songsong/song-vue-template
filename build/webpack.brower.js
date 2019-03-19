const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const webpack = require('webpack')
const utils = require('./utils')
module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true,
      usePostCSS: false
    })
  },
  output: {
    filename: utils.assetsPath('index.js'),
    library: 'svt',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/p_svt.css')
    }),
    new ProgressBarPlugin()
  ]
})
