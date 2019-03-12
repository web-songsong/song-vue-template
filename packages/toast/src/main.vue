<template>
  <transition name="fade"
              appear>

    <div v-if="vi">
      {{vi}}
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    vi: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="stylus" scoped>
$fade_transition()
</style>
