import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-162053829-1',
  router
})

const gauthOption = {
  clientId: "598223967097-q4amponcts0mpsocn313onh2k030fhka.apps.googleusercontent.com",
  scope: 'profile email',
  prompt: 'select_account',
}
Vue.use(GAuth, gauthOption)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
