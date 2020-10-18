import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy";

import { firestorePlugin } from "vuefire";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(firestorePlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
