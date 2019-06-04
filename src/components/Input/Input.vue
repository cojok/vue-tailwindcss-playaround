<template>
  <input :type="$coerced.iType" :placeholder="placeholder" :class="[element, modifier]" v-model="content" @input="handleInput">
</template>
<script>
const types = [
  'text',
  'button',
  'checkbox',
  'radio',
  'hidden',
  'password',
  'email',
  'number',
  'url',
  'tel',
  'search',
  'range',
  'color',
  'date',
  'time',
  'datetime',
  'datetime-local',
  'month',
  'week'
]
export default {
  name: 'c-input',
  props: {
    placeholder: {
      type: String,
      required: true
    },
    iType: {
      type: String,
      coerce: iType => types.includes(iType) ? iType : 'text'
    },
    value: {}
  },
  data () {
    return {
      element: 'input',
      modifier: 'input--' + (this.iType || 'text'),
      content: this.value
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', this.content)
    }
  }
}
</script>
<style lang="scss" scoped>
  .input {
    @apply shadow border py-2 px-4 text-grey-darker leading-tight;
    &:focus {
      @apply outline-none;
    }
    &:not([type='radio']),
    &:not([type='checkbox']) {
      @apply w-full;
    }
  }
</style>

