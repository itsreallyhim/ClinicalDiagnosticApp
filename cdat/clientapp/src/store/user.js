import db from "@/db";
import firebase from "@/firebase";

import { firestoreAction } from "vuexfire";

const state = {
  profile: null,
  previousAssessments: [],
};

const actions = {
  linkProfile({ dispatch }) {
    dispatch("bindProfile");
    dispatch("bindPreviousAssessments");
  },
  bindProfile: firestoreAction(({ bindFirestoreRef }) => {
    const user = firebase.auth().currentUser;

    return bindFirestoreRef(
      "profile",
      db.collection("users").where("id", "==", user.uid)
    );
  }),
  bindPreviousAssessments: firestoreAction(({ bindFirestoreRef }) => {
    const user = firebase.auth().currentUser;
    return bindFirestoreRef(
      "previousAssessments",
      db.collection("responses").where("owner", "==", `/users/${user.uid}`)
    );
  }),
  setProfile(profile) {
    const user = firebase.auth().currentUser;

    db.collection("users")
      .doc(user.uid)
      .update({ profile });
  },
};
const mutations = {
  // SET_PROFILE(state, profile) {
  //   state.profile = profile;
  // },
};

const getters = {
  profile: (state) => state.profile,
  previousAssessments: (state) => state.previousAssessments,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
