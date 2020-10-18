import firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase
  .initializeApp({ projectId: "cdat-292904" })
  .firestore();
