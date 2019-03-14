<template>
  <transition name="fade"
              appear
              @after-leave="handleAfterLeave">

    <div v-show="isVisible"
         class="svt-toast">
      {{message}}
    </div>
  </transition>
</template>

<script>
export default {
  data () {
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
  mounted () {
    this.isVisible = true
    setTimeout(() => {
      this.isVisible = false
    }, this.durationTime)
  },
  computed: {
    durationTime () {
      let duration = Math.abs(this.duration)
      if (!duration) return 2000
      return duration
    }
  },
  methods: {
    handleAfterLeave () {
      this.remove && this.remove()
    }
  },
  beforeDestroy () {
    this.remove && this.remove()
  }
}
</script>
<style lang="stylus" scoped>
$fade_transition()

.svt-toast
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
