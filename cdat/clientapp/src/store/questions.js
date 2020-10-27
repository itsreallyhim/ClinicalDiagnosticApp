import { firestoreAction } from "vuexfire";
import db from "@/db";

const state = {
  questions: [],
};

const actions = {
  loadQuestions: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef("questions", db.collection("questions"), {
      maxRefDepth: 1,
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
