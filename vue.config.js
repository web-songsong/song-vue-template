const path = require('path')
module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-px2rem')],
        remUnit: 75
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [path.resolve(__dirname, './src/styles/common.styl')]
    }
  }
}
