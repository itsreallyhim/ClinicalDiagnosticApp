import { firestoreAction } from "vuexfire";
import db from "@/db";
import firebase from "@/firebase";

const state = {
  comments: [],
};

const actions = {
  loadComments: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      "comments",
      db.collection("comments").orderBy("created_at"),
      {
        maxRefDepth: 2,
      }
    );
  }),

  createComment(_, comment) {
    const user = firebase.auth().currentUser.uid;

    db.collection("comments").set({
      author: db.collection("users").doc(user),
      response: db.collection("responses").doc(comment.response),
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      comment: comment.comment,
    });
  },
};

const getters = {
  comments: (state) => state.comments,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
