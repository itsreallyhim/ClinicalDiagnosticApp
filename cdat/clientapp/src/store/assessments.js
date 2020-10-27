import { firestoreAction } from "vuexfire";
import db from "@/db";

const state = {
  assessments: [],

  currentAssessmentID: null,
};

const actions = {
  loadAssessments: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      "assessments",
      db.collection("assessments").orderBy("order"),
      {
        maxRefDepth: 7,
      }
    );
  }),
  setAssessment: ({ commit }, assessmentID) => {
    commit("SET_ASSESSMENT", assessmentID);
  },
};

const mutations = {
  SET_ASSESSMENT: (state, assessmentID) => {
    state.currentAssessmentID = assessmentID;
  },
};

const getters = {
  currentAssessment: (state) => {
    return state.currentAssessmentID
      ? state.assessments.find((x) => x.id == state.currentAssessmentID)
      : null;
  },
  currentQuestions: (state) => {
    return state.currentAssessmentID
      ? state.assessments.find((x) => x.id == state.currentAssessmentID)
          .questions
      : null;
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
