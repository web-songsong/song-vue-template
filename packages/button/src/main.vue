<template>
  <span class="svt_button"
        :class="[type,round&&'round',circle&&'circle']">
    <svg-icon :icon="icon" />
    <slot></slot>
  </span>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    type: String,
    round: Boolean,
    circle: Boolean,
    icon: String
  },
  computed: {
    typeClass() {}
  }
}
</script>

<style lang="stylus" scoped>
.svt_button
  $btn()
  display inline-block
  padding 12px 20px
  border 1px solid #dcdfe6
  border-radius 4px
  text-align center
  color #606266
  font-size 14px

  .icon
    font-size 14px

.round
  padding 12px 23px
  border-radius 20px

.circle
  padding 12px
  border-radius 50%

.zprimary
  $color-type(primary)

.success
  $color-type(success)

.info
  $color-type(info)

.warning
  $color-type(warning)

.danger
  $color-type(danger)
</style>
