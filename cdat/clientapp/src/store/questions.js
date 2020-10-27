import { firestoreAction } from "vuexfire";
import db from "@/db";

const state = {
  questions: [],
};

const actions = {
  loadQuestions: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef("questions", db.collection("questions"), {
      maxRefDepth: 2,
    });
  }),
};

const getters = {
  questions: (state) => {
    return state.questions;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
