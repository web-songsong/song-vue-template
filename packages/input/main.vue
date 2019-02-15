<template>
  <div class="svt-input">
    <input :type="type"
           :placeholder="placeholder"
           :style="userStyle"
           :value="value"
           @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  data () {
    return {
      style: {
        color: 'red'
      }
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: String,
    userStyle: Object
  }
}
</script>
<style lang="stylus" scoped>
.svt-input
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
