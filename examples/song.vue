<template>
  <dir class="wrp">
    <svt-input v-model="name"
               placeholder="test_text" />
    {{name}}
    <svt-button @click="song"
                text="song" />
  </dir>
</template> 
<script>
export default {
  data() {
    return {
      name: 'adf'
    }
  },
  methods: {
    song() {
      this.$Toast()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
