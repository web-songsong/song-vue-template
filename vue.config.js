const path = require('path')
console.log('asdfasf')
module.exports = {
  productionSourceMap: false,

  css: {
    extract: false,
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
