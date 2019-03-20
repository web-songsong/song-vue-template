const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const webpack = require('webpack')
const utils = require('./utils')
module.exports = merge(common, {
  mode: 'none',
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true,
      usePostCSS: true
    })
  },
  output: {
    filename: utils.assetsPath('index.js'),
    // library: {
    //   root: 'MyLibrary',
    //   amd: 'my-library',
    //   commonjs: 'my-common-library'
    // },
    library: 'svt',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  externals: [
    Object.assign(
      {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
      },
      { 'vue-create-api': 'vue-create-api' }
    ),
    nodeExternals()
  ],
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/svt.css')
    }),
    new ProgressBarPlugin()
  ]
})
