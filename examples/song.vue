<template>
  <dir class="wrp">
    <button @click="song">song</button>
    <button @click="haha">haha</button>
    <!-- <svt-toast :show="show" /> -->
  </dir>
</template> 
<script>
export default {

  methods: {
    song () {
      this.$Toast({ name: 'asdf' })
    },
    haha () {
      this.$router.push('/song')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
