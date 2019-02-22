const config = require('../config')
const path = require('path')

exports.assetsPath = function(_path) {
  return path.posix.join(config.build.assetsSubDirectory, _path)
}
