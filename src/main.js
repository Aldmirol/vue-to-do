import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import ru from './locale/ru.js'
import en from './locale/en.js'
import VeeValidate, {
  Validator
} from 'vee-validate'
import LoginInput from './components/common/LoginInput.vue'
import PasswordInput from './components/common/PasswordInput.vue'
import BaseButton from './components/base/BaseButton.vue'
import "@/plugins/firebase.js";
import errorsMap  from './plugins/errorsMap.js'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

const locale = 'en';

Vue.config.productionTip = false

Vue.component('login-input', LoginInput);
Vue.component('password-input', PasswordInput);
Vue.component('base-button', BaseButton);
Vue.component('spinner', ClipLoader);

Vue.use(VueI18n);
Vue.use(VeeValidate);

Validator.extend('login-input', {
  getMessage: 'login error',
  validate: value => {
    return value.length <= 30;
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

Vue.prototype.$errorMessage = function (message) {
  const lang = i18n.locale;

  return errorsMap(message, lang);
};

new Vue({
  ClipLoader,
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
