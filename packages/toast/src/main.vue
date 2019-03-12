<template>
  <transition name="fade">
    <div v-if="show">
      asf
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
}
</script>
<style lang="stylus" scoped>
$fade_transition()
</style>
