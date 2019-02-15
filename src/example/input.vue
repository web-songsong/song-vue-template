<template>
  <div>
    <svt-input placeholder="Username"
               v-model="valueaaa"
               :user-style='style' />
    <br>
    <svt-input type="password"
               placeholder="password"
               v-model="valuebbb" />
    {{valueaaa}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      valueaaa: '',
      valuebbb: '',
      pass: '',
      style: {
        color: 'red'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
