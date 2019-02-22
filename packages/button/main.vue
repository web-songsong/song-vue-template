<template>
  <div class="svt-button"
       :style="userStyle">
    {{text}}
  </div>
</template>
<script>
export default {
  props: {
    color: String,
    text: {
      type: String,
      default: '按钮'
    },
    userStyle: Object
  }
}
</script>

