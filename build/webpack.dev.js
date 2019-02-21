const merge = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    inline: true, //自动刷新
    hot: true,
    progress: false,
    open: true
  }
})
