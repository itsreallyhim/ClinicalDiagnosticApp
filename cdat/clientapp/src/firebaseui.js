import firebase from "@/firebase";
const firebaseui = require("firebaseui");
var ui = new firebaseui.auth.AuthUI(firebase.auth());

export default ui;
