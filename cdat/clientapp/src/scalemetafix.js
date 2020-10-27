let firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

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
const db = firebase.firestore();

let scale_meta = [
  {
    "0": {
      start: "0",
      end: "1",
      label: "Poor",
      color: null,
    },
    "1": {
      start: "10",
      end: 11,
      label: "Excellent",
      color: null,
    },
    label: "",
  },
  {
    "0": {
      start: "0",
      end: "2",
      label: "Excruciatingly painful",
      color: null,
    },
    "1": {
      start: "5",
      end: "6",
      label: "Painful",
      color: null,
    },
    "2": {
      start: "9",
      end: "11",
      label: "No pain at all",
      color: null,
    },
    label: "",
  },
];

let item = db
  .collection("questions")
  .doc("Painexperienced when right buttock massaged vigorously1603799265295");

let update = item.set({ scale_meta: scale_meta }, { merge: true });

let result = item
  .get()
  .then((item) => item.data())
  .then((item) => console.log(item));
