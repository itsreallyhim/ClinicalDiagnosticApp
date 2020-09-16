<template>
  <div>
    <h1 class="title">
      {{ title }}
    </h1>

    <router-view></router-view>

    <p class="is-size-7">
      Use of this application is in accordance to our Privacy Policy and Terms
      of Use.
    </p>
  </div>
</template>

<script>
export default {
  name: "Auth",
  computed: {
    title() {
      return this.$route.name || "Auth";
    },
  },
};
</script>

<style></style>
