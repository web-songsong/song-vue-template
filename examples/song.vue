<template>
  <dir class="wrp">
    <svt-button type="warning"
                round>默认按钮默认按钮默认按钮</svt-button>
  </dir>
</template>
<script>
export default {
  data() {
    return {
      name: false,
      icon
    }
  },
  methods: {
    song() {
      this.name = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.test
  width 500px
</style>
