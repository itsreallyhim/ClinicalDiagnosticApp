<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css"
    />

    <b-navbar class="container my-4">
      <template slot="brand">
        <img
          src="./assets/global-back-care-logo.png"
          alt="Alternate Text"
          class=" mr-4"
          style="width:200px"
        />
      </template>
      <template slot="start">
        <b-navbar-item
          tag="router-link"
          v-for="(route, index) in routes.filter((item) => item.inNav)"
          :key="index"
          :to="route.path"
        >
          {{ route.name }}
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'Register' }"
          v-if="!isLoggedIn"
        >
          Register
        </b-navbar-item>
        <b-navbar-item v-if="!isLoggedIn">
          Login
        </b-navbar-item>
        <b-navbar-item v-if="isLoggedIn" @click="logout">
          Logout
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view class="container my-6" />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>&copy; {{ year }} Miller Health</p>
      </div>
    </footer>
  </div>
</template>
<script>
import router from "@/router";
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    routes() {
      return router.options.routes;
    },
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
};
</script>
