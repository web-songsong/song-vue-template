var path = require('path')
function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}
const webpackTest = require('../build/webpack.test.js')
module.exports = function(config) {
  config.set({
    files: ['./test.js'],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      './test.js': ['webpack', 'sourcemap', 'coverage']
    },
    reporters: ['mocha', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],

      dir: resolve('coverage'),

      combineBrowserReports: true,

      fixWebpackSourcePaths: true,

      skipFilesWithNoCoverage: true,

      'report-config': {
        html: {
          subdir: 'html'
        }
      }
    },
    webpack: webpackTest,

    webpackMiddleware: {
      noInfo: true
    },

    // plugins: [
    //   require('karma-webpack'),
    //   require('karma-mocha'),
    //   require('karma-chai'),
    //   require('karma-chrome-launcher'),
    //   require('karma-mocha-reporter'),
    //   require('karma-coverage-istanbul-reporter'),
    //   require('istanbul-instrumenter-loader'),
    //   require('karma-sourcemap-loader')
    // ],

    browsers: ['Chrome']
  })
}
