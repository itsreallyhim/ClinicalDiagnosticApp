import db from "@/db";
import firebase from "@/firebase";

const state = {
  profile: {},
  previousAssessments: [],
};

const mutations = {
  setProfile(state, profile) {
    state.profile = profile;

    const user = firebase.auth().currentUser;
    console.log("User", user);
    db.collection("users")
      .doc(user)
      .update({ profile });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
