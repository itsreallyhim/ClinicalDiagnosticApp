<template>
  <div id="app">
    <b-navbar class="container my-4">
      <template slot="brand">
        <img
          src="./assets/logo.png"
          alt="Alternate Text"
          class="image is-64x64 mr-4"
        />
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }"
          >Home</b-navbar-item
        >
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
          About
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/assessment' }"
          >Assessment</b-navbar-item
        >
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
        <b-navbar-item v-if="isLoggedIn">
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
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>
