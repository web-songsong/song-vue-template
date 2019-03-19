require('./check-versions')()

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod')
const webpackConfigBrower = require('./webpack.brower')


// const spinner = ora('编译打包中...')
// spinner.start()

rm(path.join(config.build.assetsRoot), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    // spinner.stop()
    if (err) throw err
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    )

    if (stats.hasErrors()) {
      console.log(chalk.red('  失败.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('   ok!!!!\n'))
    console.log(chalk.yellow('  移动端打包成功'))
  })
  webpack(webpackConfigBrower, (err, stats) => {
    // spinner.stop()
    if (err) throw err
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    )

    if (stats.hasErrors()) {
      console.log(chalk.red('  失败.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('   ok!!!!\n'))
    console.log(chalk.yellow('  pc端打包成功'))
  })
})
