import Vue from "vue";
import Vuex from "vuex";

import demoResult from "../demo/results";

import { authentication } from './authentication.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cdat: null,
    loading: false,
    user: {
      profile: {
        name: "Mathias Everson",
        dateOfBirth: new Date(1997, 8, 22),
        sex: "M",
        email: "mathias@mathiaseverson.com",
      },
      previousAssessment: [
        {
          type: "Clinical Diagnostic Audit",
          results: demoResult,
        },
      ],
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
    profile: (state) => {
      return state.user.profile;
    },
    previousAssessment: (state) => {
      return state.user.previousAssessment;
    },
  },
  actions: {
    loadCDAT: ({ commit }) => {
      commit("setLoading", true);
      fetch("/cdat");
    },
  },
    modules: {
        authentication
    }
});
