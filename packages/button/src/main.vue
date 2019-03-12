<template>
  <div class="svt-button"
       :style="userStyle">
    {{text}}
  </div>
</template>
<script >
export default {
  name: 'haha',
  props: {
    color: String,
    text: {
      type: String,
      default: '按钮'
    },
    userStyle: Object
  }
}
</script>
<style lang="stylus" scoped>
.svt-button
  $btn()
  width 100%
  height 60px
  margin 0
  background #de615e
  border 0
  font-family Robotoaaa, sans-serif
  font-size 20px
  font-weight 300
  line-height 60px
  color #fff
  border-radius 4px
  text-align center
  opacity 1
  transition opacity 0.5s

  &:hover
    opacity 0.6
    transition all 0.5s
</style>