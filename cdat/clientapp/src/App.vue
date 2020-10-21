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
      <template #user>
        {{ user.displayName }}
      </template>
      <template #pagetitle>
        {{ pagetitle }}
      </template>
      <template #login>
        <button @click.prevent="logout" v-if="isLoggedIn">Logout</button>
        <button @click.prevent="login" v-if="!isLoggedIn">Log In</button>
      </template>
      <router-view />
    </main-view>
  </div>
</template>
<script>
import MainView from "@/layouts/Main.vue";
import MenuItem from "@/layouts/MenuItem.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  components: {
    MainView,
    MenuItem,
  },
  data() {
    return {
      menu: [
        {
          to: { name: "Home" },
          name: "Home",
          active: this.$route.name == "Home",
        },
        {
          to: { name: "About" },
          name: "About",
          active: this.$route.name == "About",
        },
        {
          to: { name: "Assessments" },
          name: "Assessments",
          active: this.$route.name == "Assessments",
        },
      ],
    };
  },
  created() {
    this.bindResponses();
  },
  computed: {
    ...mapState("auth", ["user", "isLoggedIn"]),
    pagetitle() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions("auth", ["login", "logout"]),
    ...mapActions("responses", ["bindResponses"]),
  },
};
</script>
<style></style>
