<template>
  <div>
    <menu-link
      v-if="this.$route.name != 'Update Profile'"
      :menuitem="{
        to: { name: 'Update Profile' },
        name: 'Update your profile',
        active: this.$route.name === 'Update Profile',
      }"
    ></menu-link>

    <router-view></router-view>
  </div>
</template>

<script>
import MenuLink from "@/layouts/MenuItem";
export default {
  name: "Profile",
  components: {
    MenuLink,
  },
};
</script>

<style></style>
