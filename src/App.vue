<template>
  <div>
    <hr>
    <!-- 默认状态 -->
    <song-switch />
    <hr>
    <!-- 禁用状态 -->
    <song-switch :disabled="true" />
    <hr>
    <!-- 小状态 -->
    <song-switch modulType="min" />
    <hr>
    <!-- 正常状态 -->
    <song-switch modulType="switch" />
    <hr>
    <!-- 大状态 -->
    <song-switch modulType="big" />
    <hr>
    <!-- 左、右（关闭、激活）有文字 -->
    <song-switch activeText="关闭状态"
                 inactiveText="激活状态"
                 :textStyle="textStyle" />
    <hr>
    <!-- 配合change事件来改变文本 -->
    <song-switch :inactiveText="text"
                 @change="change" />
    <hr>
    <!-- 关闭背景颜色、激活背景颜色 -->
    <song-switch inactiveColor="red"
                 activeColor="yellow" />
    <hr>
    <!-- 是否有动画 -->
    <song-switch :animate="false" />
    <hr>
    <!-- 滑动按钮颜色 -->
    <song-switch toogleColor="pink" />
    <hr>
    <!-- 初始位置 -->
    <song-switch :flag="true" />
  </div>
</template>
<script>
import songSwitch from './components/Switch/index.vue'

export default {
  components: {
    songSwitch
  },
  data() {
    return {
      text: '关闭状态',
      textStyle: {
        color: 'yellow',
        fontSize: '25px'
      }
    }
  },
  methods: {
    change(flag) {
      console.log('callback', flag)

      this.text = flag ? '激活状态' : '关闭状态'
    }
  }
}
</script>
