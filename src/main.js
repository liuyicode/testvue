import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resize from './assets/js/resize'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
