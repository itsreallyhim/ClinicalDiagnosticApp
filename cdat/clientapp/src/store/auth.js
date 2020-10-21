import firebase from "@/firebase";

const state = {
  user: {},
  isLoggedIn: false,
};

const actions = {
  async login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
  async logout() {
    await firebase.auth().signOut();
  },
};

const mutations = {
  setUser(state, user) {
    if (user == null) {
      (state.user = {}), (state.isLoggedIn = false);
    } else {
      state.user = user;
      state.isLoggedIn = true;
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
