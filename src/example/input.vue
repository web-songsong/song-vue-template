<template>
  <div>
    <svt-input placeholder="Username"
               :value.sync="value"
               :user-style='style' />
    <br>
    <svt-input type="password"
               placeholder="password"
               :value.sync="pass" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
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
