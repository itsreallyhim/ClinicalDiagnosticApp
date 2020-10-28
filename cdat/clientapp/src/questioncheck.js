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

let item = db.collection("assessments").doc("nM1P7IULPVYULlu70CzJ");

let result = item
  .get()
  .then((item) => item.data())
  .then((item) =>
    item.questions.forEach((x) => {
      x.get().then((x) => console.log(x.data().title));
      // let tempRef = db.collection("questions").doc(x.id);
      // tempRef
      //   .get()
      //   .then((tempRef) => tempRef.data())
      //   .then(console.log(tempRef.title));
    })
  );
