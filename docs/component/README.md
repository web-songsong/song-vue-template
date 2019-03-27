# 开发指南

## 安装

### npm 安装

```bash
npm i song-vue-template -S
```

### yarn 安装

```bash

yarn add -D song-vue-template

```

## 快速上手

### 组件引入

```js
import Vue from 'vue'
import Svt from 'song-vue-template'
import 'song-vue-template/dist/css/svt.css'
import App from './App.vue'
Vue.use(Svt)
new Vue({
  render: h => h(app)
}).$mount('#app')
```
