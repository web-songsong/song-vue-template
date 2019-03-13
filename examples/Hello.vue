<template>
  <div @click="clickHandler">
    {{content}}
    <slot name="other"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SvtHello',
  props: {
    content: {
      type: String,
      default: 'Hello'
    }
  },
  methods: {
    clickHandler (e) {
      this.remove()
      this.$emit('click', e)
    }
  }
}
</script>