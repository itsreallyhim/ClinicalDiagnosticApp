import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5ESudIAcm7bCTaF76XFguW0MEtYh1cxg",
  authDomain: "cdat-292904.firebaseapp.com",
  databaseURL: "https://cdat-292904.firebaseio.com",
  projectId: "cdat-292904",
  storageBucket: "cdat-292904.appspot.com",
  messagingSenderId: "737908927812",
  appId: "1:737908927812:web:bfdbe872485c649930fb11",
  measurementId: "G-3E5QM0J07M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

// export const db = firebase
//   .initializeApp({ projectId: "cdat-292904" })
//   .firestore();
