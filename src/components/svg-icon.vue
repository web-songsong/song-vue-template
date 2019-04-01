<template>
  <svg class="svg_icon"
       v-if="icon">
    <use :xlink:href="iconLink" /></svg>
</template>
<script>
export default {
  name: 'svgIcon',
  props: {
    icon: String
  },
  computed: {
    iconLink() {
      return `#${this.icon}`
    }
  }
}
</script>
<style lang="stylus" scoped>
.svg_icon
  width 1em
  height 1em
  vertical-align middle
</style>
