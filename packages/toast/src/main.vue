<template>
  <transition name="fade"
              appear
              @after-leave="handleAfterLeave">

    <div v-show="isVisible"
         class="toast_wrap">
      {{message}}
    </div>
  </transition>
</template>

<script>
import { routerPush, routerPop } from 'main/js/util.js'
export default {
  data() {
    return {
      isVisible: false
    }
  },
  props: {
    /* 文本信息 */
    message: {
      type: String,
      default: 'message'
    },
    /* 持续时间 */
    duration: Number
  },
  mounted() {
    routerPush(this)
    this.isVisible = true
    setTimeout(() => {
      this.isVisible = false
    }, this.durationTime)
  },
  computed: {
    durationTime() {
      if (!this.duration) return 2000
      return this.duration
    }
  },
  methods: {
    handleAfterLeave() {
      this.remove()
      routerPop(this)
    }
  }
}
</script>
<style lang="stylus" scoped>
$fade_transition()

.toast_wrap
  $btn()
  min-width 380px
  width 80%
  line-height 60px
  color #fff
  background rgba(0, 0, 0, 0.7)
  border-radius 2em
  text-align center
  position fixed
  top 30%
  left 50%
  transform translateX(-50%)
</style>
