import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from 'vue-i18n'

Vue.use(Vuetify);
Vue.use(VueI18n)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#637dd0',
        secondary: '#424242',
        accent: '#8c8dd4',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});
