<template>
  <dir class="wrp">
    <svt-button @click="song">adf</svt-button>
    <svt-drawer v-model="name">
      <div class="test">
        <svt-button @click="name = !name">off</svt-button>
      </div>
    </svt-drawer>
  </dir>
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
      this.name = !this.name
    }
  }
}
</script>

<style lang="stylus" scoped>
.test
  width 500px
</style>
