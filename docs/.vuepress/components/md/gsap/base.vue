<template>
  <div class="base">
    <svt-gsap @runMain="start" styleColor="#000">asdf</svt-gsap>
  </div>
</template>

<script>
  export default {
    methods: {
      start(fn) {
        setTimeout(() => {
          fn()
        }, 1000)
      }
    }
  }
</script>
