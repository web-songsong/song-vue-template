<template>
  <div class="main">
    <svt-gsap></svt-gsap>
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

<style lang="stylus"
       scoped>
</style>

