import {
  SET_AUTH,
  GET_PROFILE,
  PURGE_ERROR
} from "./actions";
import {
  SET_AUTHIFICATION,
  SET_ERROR,
  SET_PROFILE,
  PURGE_CURRENT_ERROR
} from "./mutations";
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

const state = {
  isAutheficated: false,
  profile: {},
  error: ''
};

const getters = {
  'isAutheficated'(state) {
    return state.isAutheficated;
  },
  'getProfile'(state) {
    return state.profile;
  },
  'getError'(state) {
    return state.error;
  }
}

const actions = {
  async [SET_AUTH](context, params) {
      try {
        await window.$httpService.auth.signIn(params)
          .then(res => {
            localStorage.setItem('uid', res.user.uid);

            context.commit(SET_AUTHIFICATION);
            context.dispatch(GET_PROFILE);
          })
          .catch(error => {
            context.commit(SET_ERROR, error.code);
          })
      } catch (error) {
        context.commit(SET_ERROR, error);
      }
  },
  [GET_PROFILE](context) {
    try {
      const user = getAuth();
      context.commit(SET_PROFILE, user);
    } catch (error) {
      context.commit(SET_ERROR, error);
    }
  },
  [PURGE_ERROR](context) {
    return context.commit(PURGE_CURRENT_ERROR);
  }
}

const mutations = {
  [SET_AUTHIFICATION](state) {
    state.isAutheficated = true;
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [SET_PROFILE](state, data) {
    const user = data.currentUser;
    state.profile = user;
  },
  [PURGE_CURRENT_ERROR](state) {
    return state.error = '';
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
