import Vue from "vue";
import App from "./App.vue";
// import Buefy from "buefy";
// import "buefy/dist/buefy";
//import firebase from "@/firebase";
// import { db } from "@/db";
import firebase from "@/firebase";
import "@/auth";
import "@/storage";
import "@/assets/style.css";
import "@/assets/fontawesome";

import { firestorePlugin } from "vuefire";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Vue.use(Buefy);
Vue.use(firestorePlugin);

/* eslint-disable-next-line no-unused-vars*/
let app;
firebase.auth().onAuthStateChanged(() => {
  app = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
