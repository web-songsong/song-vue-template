const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { webpack_entry_file_name, webpack_output_file_name } = require('./index')

module.exports = {
  entry: path.join(__dirname, webpack_entry_file_name, 'entry.js'),
  output: {
    filename: 'bunner.js',
    path: path.join(__dirname, webpack_output_file_name)
  },
  plugins: [
    new CleanWebpackPlugin([webpack_output_file_name]),
    new HtmlWebpackPlugin()
  ]
}
