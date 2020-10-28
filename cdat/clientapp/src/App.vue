<template>
  <div id="app">
    <main-view>
      <template #menu>
        <menu-item
          v-for="(menuitem, index) in menu"
          :key="index"
          :menuitem="menuitem"
        ></menu-item>
      </template>
      <template #user v-if="isLoggedIn">
        {{ user.displayName }}
      </template>
      <template #pagetitle>
        {{ pagetitle }}
      </template>
      <template #login>
        <button @click.prevent="logout" v-if="isLoggedIn">Logout</button>
        <button @click.prevent="login" v-if="!isLoggedIn">Log In</button>
        <div v-if="user && adminEmails.includes(user.email)">
          <router-link :to="{ name: 'Admin' }">Admin</router-link>
        </div>
      </template>
      <router-view />
    </main-view>
  </div>
</template>
<script>
import MainView from "@/layouts/Main.vue";
import MenuItem from "@/layouts/MenuItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    MainView,
    MenuItem,
  },
  data() {
    return {
      /* TODO: Change to Proper Auth/Roles */
      adminEmails: [
        "u3160264@gmail.com",
        "alistair.g.gibson@gmail.com",
        "stevenmarkbell@gmail.com",
        "john.miller.canberra@gmail.com",
      ],
      menu: [
        {
          to: { name: "Home" },
          name: "Home",
          active: this.$route.name === "Home",
        },
        {
          to: { name: "About" },
          name: "About",
          active: this.$route.name === "About",
        },
        {
          to: { name: "Assessments" },
          name: "Assessments",
          active: this.$route.name === "Assessments",
        },
        {
          to: { name: "Profile" },
          name: "Profile",
          active: this.$route.name === "Profile",
        },
      ],
    };
  },

  computed: {
    ...mapGetters("auth", ["user", "isLoggedIn"]),
    ...mapGetters("user", ["role"]),
    pagetitle() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions("auth", ["login", "logout"]),
  },
  watch: {
    role(role) {
      if (role && role.id == "admin") {
        this.menu.push({
          to: { name: "Admin" },
          name: "Admin",
          active: this.$route.name == "Admin",
        });
      }
    },
  },
};
</script>
<style></style>
