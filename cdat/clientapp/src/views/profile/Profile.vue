<template>
  <div>
    <menu-link
      v-if="$route.name != 'Update Profile'"
      :menuitem="{
        to: { name: 'Update Profile' },
        name: 'Update your profile',
        active: $route.name === 'Update Profile',
      }"
    ></menu-link>

    <card
      v-if="$route.name == 'Profile'"
      :to="{ name: 'Previous Assessments' }"
    >
      <template #icon></template>
      <template #title>Previous Assessments</template>
      <template #description>Review your previous assessments</template>
      <template #link>View Previous Assessments</template>
    </card>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuLink from "@/layouts/MenuItem";
import Card from "@/layouts/Card";
export default {
  name: "Profile",
  components: {
    MenuLink,
    Card,
  },
};
</script>

<style></style>
