import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import ru from './locale/ru'
import en from './locale/en.js'
import VeeValidate, {
  Validator
} from 'vee-validate'
import LoginInput from './components/common/LoginInput.vue'
import PasswordInput from './components/common/PasswordInput.vue'
import BaseButton from './components/base/BaseButton.vue'

const locale = 'en';

Vue.config.productionTip = false

Vue.component('login-input', LoginInput);
Vue.component('password-input', PasswordInput);
Vue.component('base-button', BaseButton);

Vue.use(VueI18n);
Vue.use(VeeValidate);

Validator.extend('login-input', {
  getMessage: 'login error',
  validate: value => {
    return value.length <= 8;
  }
});

Validator.extend('password-input', {
  getMessage: 'password error',
  validate: value => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]+$/.test(value) && value.length >= 8
});

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
