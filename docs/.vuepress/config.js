const path = require('path')
const { readdirSync } = require('fs')
const mapping_table = require('./mapping_table')
const list = dirList()

/**
 * 获取docs目录下的所有md文件夹
 *
 * @param {string} [fileDir='']
 * @param {boolean} [flag=true]
 * @returns
 */
function dirList(fileDir = '', flag = true) {
  fileFlag = flag ? 'isDirectory' : 'isFile'
  const dir = path.resolve(__dirname, '..', fileDir)
  const list = []
  readdirSync(dir, { withFileTypes: true }).forEach(fileDirent => {
    if (!fileDirent[fileFlag]()) return
    if (/^[^\.]/g.test(fileDirent.name)) return list.push(fileDirent.name)
  })
  return list
}

/**
 * 根据映射表返回每个文件的sidebar列表
 *
 * @returns Object
 */
function sidebarsGenerate() {
  const sidebar = {}
  list.forEach(item => {
    sidebar[`/${item}/`] = dirList(item, false).map(name => {
      if (name === 'README.md') return ''
      return name.slice(0, -3)
    })
  })
  return sidebar
}

/**
 * 生成nav的链接列表
 *
 * @returns
 */
function navGenerate() {
  return list.map(item => {
    return {
      text: mapping_table[item],
      link: `/${item}/`
    }
  })
}
function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, '../../src/style/common.styl'),
        path.resolve(__dirname, '../../src/style/style.styl')
      ]
    })
}

module.exports = {
  dest: '../ui-dc',
  title: 'song-vue-template',
  description: 'charmingsong',
  themeConfig: {
    nav: navGenerate(),
    sidebar: sidebarsGenerate(),
    repo: 'web-songsong/song-vue-template',
    docsRepo: 'web-songsong/song-vue-template',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '提出您的宝贵意见！'
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStyleResource(config.module.rule('stylus').oneOf(type))
    )
  }
}
