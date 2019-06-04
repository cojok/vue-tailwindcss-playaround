<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Login</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss">
@import './assets/styles/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply .text-grey-darker .mt-8;
}
</style>
