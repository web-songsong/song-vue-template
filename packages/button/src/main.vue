<template>
  <span class="svt_button"
        :class="[type,round&&'round']">
    <!-- <i v-if="icon"
       class="icon"> -->
    <!-- </i> -->
    <slot></slot>
  </span>
</template>
<script>
import '@/src/icons/qq.svg;
export default {
  data() {
    return {}
  },
  props: {
    type: String,
    round: Boolean,
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
  padding 10px 20px
  border 1px solid #dcdfe6
  border-radius 4px
  text-align center
  color #606266
  font-size 14px

  .icon
    font-size 14px

.round
  border-radius 20px

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
