import { GET_PROFILE } from "../auth/actions";
import { SET_PROFILE } from "../auth/mutations";
import 'firebase/firestore';

const state = {
  profile: {},
  error: ''
};

const actions = {
  async [GET_PROFILE](context, uid) {
    try {
      const snapShot = await window.$httpService.profile.getProfile(uid);
      const profile = snapShot.data();

      context.commit(SET_PROFILE, profile);
    } catch (error) {
      window.$store.dispatch('setPageError', error);
    }
  }
};

const mutations = {
  [SET_PROFILE](state, profile) {
    state.profile = profile;
  }
}

const getters = {
  'getProfile'(state) {
    return state.profile;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

