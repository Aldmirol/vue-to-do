import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './module/auth/auth.module';
import profileModule from './module/profile/profile.module';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentError: ''
  },
  mutations: {
    'setCurrentError'(state, error) {
      state.currentError = error;
    }
  },
  actions: {
    'setPageError'(context, error) {
      context.commit('setCurrentError', error);
    }
  },
  getters: {
    'getCurrentError'(state) {
      return state.currentError;
    }
  },
  modules: {
    authModule,
    profileModule
  }
})
