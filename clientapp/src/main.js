import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import "es6-promise/auto";
import router from "./router";
import Buefy from "buefy";
import "material-design-icons/iconfont/material-icons.css";
import "buefy/dist/buefy.css";
import store from "./store";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "./vee-validate";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Buefy);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
