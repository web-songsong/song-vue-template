<template>
  <div class="svt_input">
    <input :type="type"
           :placeholder="placeholder"
           :style="userStyle"
           :value="value"
           @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        color: 'red'
      }
    }
  },
  props: {
    /* 类型 */
    type: {
      type: String,
      default: 'text'
    },
    /* 输入框占位文本 */
    placeholder: String,
    /* 输入看内容 */
    value: String,
    /* 自定义样式 */
    userStyle: Object
  }
}
</script>
<style lang="stylus" scoped>
.svt_input
  input
    outline none
    width 500px
    height 60px
    margin 0
    padding 0 20px
    vertical-align middle
    background #fff
    border 3px solid #ccc
    border-radius 10px
    font-family Roboto, sans-serif
    font-size 20px
    font-weight 300
    line-height 60px
    color #888
</style>
