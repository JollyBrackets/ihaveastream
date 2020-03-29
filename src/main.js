import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics'
import GAuth from 'vue-google-oauth2'
import VueResource from 'vue-resource';
import VueMoment from 'vue-moment'
import loader from '@/components/Loader.vue'

Vue.component('loader', loader)

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-162053829-1',
  router
})
Vue.use(VueMoment);

const gauthOption = {
  clientId: "598223967097-q4amponcts0mpsocn313onh2k030fhka.apps.googleusercontent.com",
  scope: 'profile email',
  prompt: 'select_account',
}
Vue.use(GAuth, gauthOption)
Vue.use(VueResource);

Vue.http.options.root = process.env.VUE_APP_API_ROOT || 'https://ihaveastream-staging.herokuapp.com'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
