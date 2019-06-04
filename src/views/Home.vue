<template>
  <div class="home">
    <c-btn class="test">Test</c-btn>
    <c-input i-type="" :placeholder="'This is my custom input'" v-model="model" class="test" button/>
    <c-link target="" href="#">
      <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png"
       alt="MDN logo" />
    </c-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    'c-btn': () => import('@/components/Button/Button.vue'),
    'c-input': () => import('@/components/Input/Input.vue'),
    'c-link': () => import('@/components/Link/Link.vue')
  },
  data () {
    return {
      model: 'test'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
