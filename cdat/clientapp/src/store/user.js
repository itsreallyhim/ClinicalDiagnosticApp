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
  },
  bindProfile: firestoreAction(({ bindFirestoreRef }) => {
    const user = firebase.auth().currentUser;

    return bindFirestoreRef("profile", db.collection("users").doc(user.uid));
  }),

  bindPreviousAssessments: firestoreAction(({ bindFirestoreRef }) => {
    const user = firebase.auth().currentUser;
    return bindFirestoreRef(
      "previousAssessments",
      db
        .collection("responses")
        .orderBy("created_at", "desc")
        .where("owner", "==", db.doc(`/users/${user.uid}`)),
      {
        maxRefDepth: 1,
      }
    );
  }),
  setProfile(_, userProfile, merge = { merge: true }) {
    const user = firebase.auth().currentUser;

    db.collection("users")
      .doc(user.uid)
      .set({ profile: userProfile }, merge);
  },
};
const mutations = {
  // SET_PROFILE(state, profile) {
  //   state.profile = profile;
  // },
};

const getters = {
  profile: (state) => (state.profile ? state.profile.profile : null),
  previousAssessments: (state) => state.previousAssessments,
  role: (state) => (state.profile ? state.profile.role : null),
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
