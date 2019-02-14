<template>
  <div class="input_wrap">
    <input :type="type"
           :placeholder="placeholder"
           :style="userStyle"
           v-model="val">
  </div>
</template>

<script>
export default {
  data () {
    return {
      val: this.value,
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
  },
  watch: {
    val (val) {
      this.$emit('update:value', val)
    }
  }
}
</script>
<style lang="stylus" scoped>
.input_wrap
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
    font-family Robotoaaa, sans-serif
    font-size 20px
    font-weight 300
    line-height 60px
    color #888
</style>
