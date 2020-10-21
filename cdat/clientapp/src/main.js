import Vue from "vue";
import App from "./App.vue";
// import Buefy from "buefy";
// import "buefy/dist/buefy";
//import firebase from "@/firebase";
// import { db } from "@/db";
import "@/firebase";
import "@/auth";
import "@/assets/style.css";

import { firestorePlugin } from "vuefire";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Vue.use(Buefy);
Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
