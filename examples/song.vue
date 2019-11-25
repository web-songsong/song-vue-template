<template>
  <div class="main">
    <svt-button>asdf</svt-button>
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
        }, 3000)
      }
    }
  }
</script>

<style lang="stylus"
       scoped>
</style>

