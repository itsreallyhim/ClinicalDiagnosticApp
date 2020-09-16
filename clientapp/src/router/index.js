import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
// import Store from "@/store/index";
import Login from "@/views/auth/Login.vue";
import Auth from "@/views/Auth.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/assessment",
    name: "Assessment",
    component: () => import("../views/Assessment.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component:  Auth,
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

// router.beforeEach((to, from, next) => {
//   /* eslint-disable-next-line no-console */
//   console.log(to.name);
//   next();
//   // if (!to.name == "Profile" && !Store.getters.isLoggedIn)
//   //   next({ name: "Home" });
//   // else next();
// });

export default router;
