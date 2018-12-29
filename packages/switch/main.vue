<template>
  <div class="switchWrap">
    <span for="switch-off"
          @click="inactiveText.length ? radio = 0 : ''"
          v-if="activeText.length"
          :style="textStyle">{{activeText}}</span>
    <div class="switch"
         :class="[modulType==='big'? 'big':'',modulType==='min'? 'min':'']">
      <input type="radio"
             value="0"
             v-model="radio"
             id="switch-off"
             :disabled="disabled">
      <input type="radio"
             value="1"
             v-model="radio"
             id="switch-on"
             :disabled="disabled">
      <div class="toggle"
           :style="{transitionDuration: animate ? '0.3s' : '0s', background: toogleColor}"></div>
      <div class="scrn acti"
           :class="{ disColor: disabled }"
           :style="{transitionDuration: animate ? '0.3s' : '0s', background: changeActiveColor}"></div>
    </div>
    <span for="switch-on"
          @click="activeText.length ? radio = 1 : ''"
          v-if="inactiveText.length"
          :style="textStyle">{{inactiveText}}</span>
  </div>
</template>
<script>
export default {
  name: 'SvtSwitch',
  data() {
    return {
      radio: this.flag ? '1' : '0'
    }
  },
  props: {
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    textStyle: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      // 禁用状态
      type: Boolean,
      default: false
    },
    animate: {
      // 是否有动画
      type: Boolean,
      default: true
    },
    toogleColor: {
      type: String,
      default: '#fff'
    },
    flag: {
      // 初始状态是激活还是关闭
      type: Boolean,
      default: false
    },
    modulType: {
      // 组件的大小
      type: String,
      default: ''
    },
    activeColor: {
      // 激活时的颜色
      type: String,
      default: ''
    },
    inactiveColor: {
      // 关闭时的颜色
      type: String,
      default: ''
    }
  },
  watch: {
    radio() {
      this.$emit('change', !!+this.radio)
    }
  },
  computed: {
    changeActiveColor() {
      if (+this.radio) return this.activeColor
      return this.inactiveColor
    }
  }
}
</script>
<style lang="stylus" scoped>
// @require './index.styl'
// switch
$switchWidth = 60px
$switchHeight = 30px
// big
$bigWidth = 80px
$bigHeight = 40px
// min
$minWidth = 40px
$minHeight = 20px

*
  margin 0
  padding 0

.switchWrap
  display flex
  align-items center

  span
    margin 0 2%

$switch
  transform translate3d(0, 0, 0)
  position relative

$scrn
  width 100%
  height 100%
  transform translate3d(0, 0, 0)
  border-radius 100vw
  background #409eff
  transition background 0.3s

$toggle
  position absolute
  width 40%
  height 80%
  margin 5%
  border-radius 50%
  background #fff
  z-index 1
  left 0
  transition left 0.3s

$input
  width 100%
  height 100%
  z-index 2
  position absolute
  opacity 0

  &:checked
    z-index 0

  &~:checked
    ~.toggle
      left 50%

    ~.acti
      background #13ce66

.switch
  width $switchWidth
  height $switchHeight
  @extend $switch

  .toggle
    @extend $toggle

  input
    @extend $input

  .scrn
    width $switchWidth
    height $switchHeight
    @extend $scrn

.big
  width $bigWidth
  height $bigHeight
  @extend $switch

  .toggle
    @extend $toggle

  input
    @extend $input

  .scrn
    width $bigWidth
    height $bigHeight
    @extend $scrn

.min
  width $minWidth
  height $minHeight
  @extend $switch

  .toggle
    @extend $toggle

  input
    @extend $input

  .scrn
    width $minWidth
    height $minHeight
    @extend $scrn

.switch
  .disColor
    background #dcdfe6
</style>
