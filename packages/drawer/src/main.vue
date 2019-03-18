<template>
  <div class="svt_drawer">
    <transition name="drawer">
      <div class="drawer_content"
           :style="userStyle"
           v-show="visible">
        <slot></slot>
      </div>
    </transition>
    <template v-if="hint">
      <transition name="fade">
        <div class="drawer_hint"
             @click="close"
             :style="userStyle"
             v-show="visible">
        </div>
      </transition>
    </template>

  </div>

</template>
<script>
export default {
  model: {
    prop: 'visible',
    event: 'trigger'
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    userStyle: Object,
    hint: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close() {
      this.$emit('trigger', false)
    }
  }
}
</script>
<style lang="stylus" scoped>
$drawer-transition()
$fade-transition()

.svt_drawer
  .drawer_content
    position fixed
    z-index 999
    background #fff
    height 100%
    top 0
    right 0
    box-shadow -2px 0 3px rgba(0, 0, 0, 0.2)

  .drawer_hint
    position fixed
    z-index 998
    width 100%
    height 100%
    top 0
    left 0
    background rgba(0, 0, 0, 0.3)
</style>
