<template>
  <button :class="[element, modifier]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'c-btn',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      element: 'button',
      modifier: 'button--' + this.type
    }
  }
}
</script>
<style lang="scss" >
.button {
  @apply font-bold py-2 px-4 rounded-full w-full;
   &:focus {
      @apply outline-none;
    }
  &--default {
    @apply bg-grey text-white;
  }
  &--blue {
    @apply bg-blue text-white;
    &:hover {
      @apply bg-blue-dark;
    }
  }
}
</style>
