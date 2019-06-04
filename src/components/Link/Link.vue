<template>
  <a :href="href" :target="$coerced.target" class="">
    <slot></slot>
  </a>
</template>
<script>
const targets = [
  '_blank',
  '_parent',
  '_self',
  '_top'
]
export default {
  name: 'c-link',
  props: {
    href: {
      type: String,
      default: '#'
    },
    target: {
      type: String,
      coerce: target => targets.includes(target) ? target : '_self'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

