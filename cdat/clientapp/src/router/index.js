import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";
import Assessments from "@/views/Assessments";
import Assessment from "@/views/Assessment";
import Profile from "@/views/Profile";

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      guest: true,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true,
    },
    beforeRouteLeave(to, from, next) {
      if (!store.state.auth.profile) next({ name: "Profile" });
      else next();
    },
  },
  {
    path: "/assessments",
    name: "Assessments",
    component: Assessments,
    meta: {
      guest: false,
    },
    children: [
      {
        path: ":formID",
        component: Assessment,
      },
    ],
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      guest: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name == "Login" && store.state.auth.isLoggedIn == true)
    next({ name: "Home" });
  else if (to.meta.guest == false && store.state.auth.isLoggedIn == false)
    next({ name: "Login" });
  else next();
});
export default router;
