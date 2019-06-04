import Vue from 'vue'
import CoercePropsMixin from 'vue-coerce-props'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.mixin(CoercePropsMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
