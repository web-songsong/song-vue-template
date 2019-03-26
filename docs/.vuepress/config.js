const path = require('path')
const { exists } = require('fs')
module.exports = {
  title: 'song-vue-template',
  description: 'charmingsong',
  themeConfig: {
    nav: [
      { text: '组件', link: '/component/' },
      {
        text: 'GitHub',
        link: 'https://github.com/web-songsong/song-vue-template'
      }
    ],
    sidebar: {
      '/component/': [['', 'asdf'], 'button']
    }
  }
}

function sidebarsGenerate() {}

function navGenerate() {}

function dirList() {}
