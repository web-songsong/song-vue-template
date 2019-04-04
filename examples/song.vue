<template>
  <div class="wrp">
    <svt-button type="success"
                disabled
                @click="song">aaasdfasdfsdf</svt-button>

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
    song(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
.test
  width 500px
</style>
