const path = require('path')

module.exports = {
  dev: {
    https: false,
    host: '0.0.0.0',
    port: 8080
  },
  build: {
    assetsRoot: path.join(__dirname, '../dist'),
    assetsSubDirectory: 'static'
  }
}
