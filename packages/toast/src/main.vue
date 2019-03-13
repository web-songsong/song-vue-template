<template>
  <transition name="fade"
              appear
              @after-leave="handleAfterLeave">

    <div v-show="isVisible">
      {{isVisible}}
      {{name}}
    </div>
  </transition>
</template>

<script>
import { routerPush, routerPop } from 'main/js/util.js'
export default {
  data () {
    return {
      isVisible: false
    }
  },
  props: {
    name: String
  },
  mounted () {
    routerPush(this)
    this.isVisible = true
    setTimeout(() => {
      this.isVisible = false
    }, 2000)
  },
  methods: {
    handleAfterLeave () {
      this.remove()
      routerPop(this)
    }
  }
}
</script>
<style lang="stylus" scoped>
$fade_transition()
</style>
