<template>
  <div>
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'c-card',
  props: {},
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>

</style>
