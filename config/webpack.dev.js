const merge = require('webpack-merge')
const common = require('./webpack.common')
const { webpack_output_file_name } = require('./index')
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: webpack_output_file_name,
    hot: true
  }
})
