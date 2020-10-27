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

    return bindFirestoreRef("profile", db.collection("users").doc(user.uid));
  }),
  bindPreviousAssessments: firestoreAction(({ bindFirestoreRef }) => {
    const user = firebase.auth().currentUser;
    return bindFirestoreRef(
      "previousAssessments",
      db
        .collection("responses")
        .orderBy("created_at")
        .where("owner", "==", db.doc(`/users/${user.uid}`)),
      {
        maxRefDepth: 2,
      }
    );
  }),
  setProfile(_, userProfile) {
    const user = firebase.auth().currentUser;
    console.log(userProfile);
    db.collection("users")
      .doc(user.uid)
      .update({ profile: userProfile });
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
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
