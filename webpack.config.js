const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

/**
 * 定义webpack输出文件夹
 */
const webpack_output_file_name = 'dist'
/**
 * 定义webpack入口文件夹
 */
const webpack_entry_file_name = 'examples'
module.exports = {
  entry: path.join(__dirname, webpack_entry_file_name, 'entry.js'),
  output: {
    filename: 'bunner.js',
    path: path.join(__dirname, webpack_output_file_name)
  },
  plugins: [
    new CleanWebpackPlugin([webpack_output_file_name]),
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  mode: process.env.NODE_ENV || 'none'
}
