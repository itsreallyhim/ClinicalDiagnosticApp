import { firestoreAction } from "vuexfire";
import db from "@/db";

const state = {
  assessments: [],

  currentAssessmentID: null,
};

const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef("assessments", db.collection("assessments"), {
      maxRefDepth: 5,
    });
  }),
  setAssessment: ({ commit }, assessmentID) => {
    commit("setAssessment", assessmentID);
  },
};

const mutations = {
  setAssessment: (state, assessmentID) => {
    state.currentAssessmentID = assessmentID;
  },
};

const getters = {
  currentAssessment: (state) => {
    return state.assessments.find((x) => x.id == state.currentAssessmentID);
  },
  currentQuestions: (state) => {
    return state.assessments.find((x) => x.id == state.currentAssessmentID)
      .questions;
  },
  assessments: (state) => {
    return state.assessments;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
