const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')
const utils = require('./utils')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
console.log(utils.assetsPath('style.css'))
module.exports = merge(common, {
  mode: 'none',
  // devtool: 'source-map',
  output: {
    filename: utils.assetsPath('index.js'),
    library: 'svt',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
})
