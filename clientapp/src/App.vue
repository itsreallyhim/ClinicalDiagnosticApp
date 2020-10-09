<template>
  <div id="app">
    <link rel="stylesheet"
          href="https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css" />

    <b-navbar class="container my-4">
      <template slot="brand">
        <img src="./assets/global-back-care-logo.png"
             alt="Alternate Text"
             class=" mr-4"
             style="width:200px" />
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link"
                       v-for="(route, index) in routes.filter((item) => item.inNav)"
                       :key="index"
                       :to="route.path">
          {{ route.name }}
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item v-if="!loggedIn"
                       tag="router-link"
                       :to="{ name: 'Register' }">
          Register
        </b-navbar-item>
        <b-navbar-item v-if="!loggedIn"
                       tag="router-link"
                       :to="{ name: 'Login' }">
          Login
        </b-navbar-item>
        <b-navbar-item v-if="loggedIn" v-on:click="logout()">
          Logout
        </b-navbar-item>
        <b-navbar-item v-if="loggedIn"
                       tag="router-link"
                       :to="{ name: 'Profile' }">
          Profile
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

  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(
        {
          loggedIn: 'authentication/loggedIn'
        }
      ),
      year() {
        return new Date().getFullYear();
      },
      routes() {
        return router.options.routes;
      },
    },
    methods: {
      logout() {
        this.$store.dispatch('authentication/logout');
      },
    }
  };
</script>
