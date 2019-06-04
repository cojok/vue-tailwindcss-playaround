<template>
  <c-card class="screen--login w-full flex items-center flex-col bg-white shadow max-w-sm p-3">
    <template v-slot:header>
      <header>Login</header>
    </template>
    <div class="w-full mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <c-input name="username" placeholder="Username" class="login--input w-full py-2 px-3 rounded-lg"/>
    </div>
    <div class="w-full mb-6">
      <label for="password" class="block text-grey-darker text-sm font-bold mb-2">
        Password
      </label>
      <c-input name="password" placeholder="Password" i-type="password" class="password--input w-full py-2 px-3 rounded-lg" />
    </div>
    <template v-slot:footer>
      <div class="flex w-full">
        <c-btn class="flex-1 mr-6">
          Login
        </c-btn>
        <c-btn class="flex-1">
          Register
        </c-btn>
      </div>
    </template>
  </c-card>
</template>
<script>
export default {
  name: 'login',
  components: {
    'c-btn': () => import('@/components/Button/Button.vue'),
    'c-input': () => import('@/components/Input/Input.vue'),
    'c-link': () => import('@/components/Link/Link.vue'),
    'c-card': () => import('@/components/Card/Card.vue')
  },
}
</script>
<style lang="scss" scoped>
button {
  min-width: 100px;
}
</style>

