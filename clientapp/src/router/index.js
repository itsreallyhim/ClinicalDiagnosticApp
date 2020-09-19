import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "@/views/auth/Login.vue";
import Auth from "@/views/Auth.vue";
import PreviousAssesment from "../views/profile/PreviousAssessment.vue";
import MyAccount from "../views/profile/MyAccount.vue";
import ActivityFeed from "../views/profile/ActivityFeed.vue";
import Assessment from "../views/Assessment.vue";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    inNav: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    inNav: true,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/assessment",
    name: "Assessment Introduction",
    component: Assessment,
    inNav: true,
    protected: true,
  },
  {
    path: "/assessment/:template",
    name: "Assessment ",
    component: Assessment,
    protected: true,
  },
  {
    path: "/profile",
    name: "",
    inNav: false,
    protected: true,
    component: () => import("../views/Profile.vue"),
    children: [
      {
        name: "Profile",
        path: "",
        inNav: true,
        component: ActivityFeed,
      },
      {
        path: "history",
        name: "History",
        component: PreviousAssesment,
      },
      {
        path: "account",
        name: "My Account",
        component: MyAccount,
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const protectedRoutes = ["Profile", "Assessment"];

router.beforeEach((to, from, next) => {
  if (!store.getters.isLoggedIn && protectedRoutes.includes(to.name)) {
    /* eslint-disable-next-line no-console */
    console.log("Protected");
  }
  next();
});

export default router;
