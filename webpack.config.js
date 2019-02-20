const path = require('path')

module.exports = {
  entry: './examples/entry.js',
  output: {
    filename: 'bunble.js',
    path: path.join(__dirname, 'dist')
  }
}
