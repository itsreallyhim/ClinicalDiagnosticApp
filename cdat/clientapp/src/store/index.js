import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations } from "vuexfire";
import auth from "./auth";
import user from "./user";
import assessments from "./assessments";
import responses from "./responses";
import questions from "./questions";

Vue.use(Vuex);

export default new Vuex.Store({
  /* TODO: Would be nice to get Loading status working */
  state: {
    loading: true,
  },
  mutations: {
    ...vuexfireMutations,
  },
  getters: {
    loading: (state) => state.loading,
  },
  modules: {
    auth,
    user,
    assessments,
    responses,
    questions,
  },
});
