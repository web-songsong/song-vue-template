<template>
  <dir class="wrp">
    <button @click="song">song</button>
    <!-- <svt-toast :show="show" /> -->
  </dir>
</template> 
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    song () {
      console.log(this)
      this.$haha()
    }
  },
  created () {
    console.log('asdf')

  }
}
</script>

<style lang="stylus" scoped>
</style>
