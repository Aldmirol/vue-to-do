import { SET_AUTH } from "./actions";
import { SET_AUTHIFICATION, SET_ERROR } from "./mutations";

const state = {
  isAutheficated: false,
  errors: []
};

const getters = {
  'isAutheficated'(state) {
    return state.isAutheficated;
  }
}

const actions = {
  [SET_AUTH](context) {
    try {
      localStorage.setItem('isAuthificated', true);
      context.commit(SET_AUTHIFICATION);
    } catch (error) {
      context.commit(SET_ERROR, error);
    }
  }
}

const mutations = {
  [SET_AUTHIFICATION](state) {
    state.isAutheficated = true;
  },
  [SET_ERROR](state,error) {
    state.errors.push(error);
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
