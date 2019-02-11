const path = require('path')
const fs = require('fs')
module.exports = {
  dest: '../ui-dc',
  title: 'song-vue-template',
  description: 'charmingsong',
  head: [
    ['link', { rel: 'icon', href: `/ico/favicon.ico` }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: '组件', link: '/components/' },
      { text: 'GitHub', link: 'https://github.com/web-songsong' }
    ],
    sidebar: {
      '/components/': ['', 'switch']
    }
  }
}
