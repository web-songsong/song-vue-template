<template>
  <div class="svt_button"
       :class="[type&&type,round&&'round',disabled&&'disabled']"
       @click="$emit('click', $event)">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    type: String,
    round: Boolean,
    disabled: Boolean
  }
}
</script>

<style lang="stylus" scoped>
.svt_button
  $btn()
  $hl(14)
  display inline-block
  border 1px solid #dcdfe6
  padding 12px 20px
  border-radius 4px
  text-align center
  color #606266
  font-size 14px

  .icon
    font-size 14px

.round
  padding 12px 23px
  border-radius 20px

.disabled
  cursor not-allowed
  filter opacity(50%)

.primary
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
