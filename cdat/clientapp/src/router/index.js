import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

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
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
    meta: {
      guest: true,
    },
    beforeRouteLeave(to, from, next) {
      if (!store.state.user.profile) next({ name: "Update Profile" });
      else next();
    },
  },
  {
    path: "/assessments",
    name: "Assessments",
    component: () =>
      import(/* webpackChunkName: "assessments" */ "@/views/Assessments.vue"),
    meta: {
      guest: false,
    },
    children: [
      {
        name: "Assessment",
        path: ":formID",
        component: () =>
          import(/* webpackChunkName: "assessment" */ "@/views/Assessment.vue"),
        meta: {
          guest: false,
        },
      },
    ],
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/views/profile/Profile.vue"),
    children: [
      {
        name: "Update Profile",
        component: () =>
          import(
            /* webpackChunkName: "update-profile" */ "@/views/profile/UpdateProfile.vue"
          ),
        path: "update",
        meta: {
          guest: false,
        },
      },
      {
        name: "Previous Assessments",
        component: () =>
          import(
            /* webpackChunkName: "previous-assessments" */ "@/views/profile/PreviousAssessments.vue"
          ),
        path: "previous-assessments",
        meta: {
          guest: false,
        },
      },
    ],
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
