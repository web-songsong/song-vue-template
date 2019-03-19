<template>
  <div class="svt_button"
       @click="$emit('click',$event)"
       :style="userStyle">
    <slot></slot>
  </div>
</template>
<script >
export default {
  props: {
    /* 颜色 */
    color: String,
    /* 自定义样式 */
    userStyle: Object
  }
}
</script>
<style lang="stylus" scoped>
.svt_button
  $btn()
  width 100%
  height 40px
  margin 0
  background #de615e
  border 0
  font-family Robotoaaa, sans-serif
  font-size 20px
  font-weight 300
  line-height 40px
  color #fff
  border-radius 4px
  text-align center
  opacity 1
  transition opacity 0.5s
</style>