import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import ru from './locale/ru'
import en from './locale/en.js'

const locale = 'en';

Vue.config.productionTip = false

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale,
  messages: {
    ru,
    en
  }
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
