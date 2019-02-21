const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
const Dashboard = require('webpack-dashboard')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
// const DashboardPlugin = require('webpack-dashboard/plugin')
// const dashboard = new Dashboard()
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: false,
    hot: true,
    progress: false,
    overlay: { warnings: false, errors: true },
    open: true,
    host: '0.0.0.0',
    quiet: true,
    clientLogLevel: 'none' // 浏览器不显示编译过程
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ${
            config.dev.https ? 'https' : 'http'
          }://${config.dev.host}:${config.dev.port}`
        ]
      },
      onErrors: () => {
        const notifier = require('node-notifier')

        return (severity, errors) => {
          if (severity !== 'error') return

          const error = errors[0]
          const filename = error.file && error.file.split('!').pop()

          notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, )
          })
        }
      }
    })
    // new DashboardPlugin(dashboard.setData)
  ]
})
