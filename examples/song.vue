<template>
  <div class="main">
    <svt-gsap @runMain="song"/>
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
      song(fn) {
        setTimeout(() => {
          fn()
        },3000)
      }
    }
  }
</script>

<style lang="stylus"
       scoped>
</style>

