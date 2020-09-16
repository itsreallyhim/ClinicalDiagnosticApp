import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cdat: null,
    loading: false,
    user: {
      loggedIn: false,
      profile: null,
    },
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  getters: {
    cdat: (state) => {
      return state.cdat;
    },
    loading: (state) => {
      return state.loading;
    },
    isLoggedIn: (state) => {
      return state.user.loggedIn;
    },
    profile: (state) => {
      return state.user.profile;
    },
  },
  actions: {
    loadCDAT: ({ commit }) => {
      commit("setLoading", true);
      fetch("/cdat");
    },
  },
});
