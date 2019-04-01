<template>
  <div class="wrp">
    <svt-button type="warning"
                circle
                icon='warning'></svt-button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      name: false
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
