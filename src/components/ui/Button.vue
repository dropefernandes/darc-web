<template lang="pug">
  button.btn(@click.prevent="handleClick" :disabled="disabled") {{ text }}
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    handleClick: {
      type: Function,
      required: true,
      default: () => null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/components/button';
</style>
