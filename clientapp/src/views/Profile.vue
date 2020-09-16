<template>
  <div>
    {{ profile }}
    profile
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
  },
};
</script>

<style></style>
