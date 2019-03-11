const path = require('path')

module.exports = {
  dev: {
    https: false,
    host: '0.0.0.0',
    port: 8080,
    cssSourceMap: false
  },
  build: {
    componentsPrefix: 'El',
    assetsRoot: path.join(__dirname, '../dist'),
    assetsSubDirectory: ''
  }
}
