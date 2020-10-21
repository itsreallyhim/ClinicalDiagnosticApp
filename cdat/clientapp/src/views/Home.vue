<template>
  <div class="home">
    <card :to="{ name: 'Login' }" v-if="!isLoggedIn">
      <template #icon>
        <img
          class="max-w-xs w-full"
          src="@/assets/global-back-care-logo.png"
          alt=""
        />
      </template>
      <template #title>Welcome, </template>
      <template #description
        >Please login or register to complete your Clinical Diagnostic
        Assessment</template
      >
      <template #link>Login Now</template>
    </card>
    <card :to="{ name: 'Assessments' }" v-if="isLoggedIn">
      <template #title>Welcome, {{ user.displayName }}</template>
      <template #description
        >Please complete the Clinical Diagnostic Assessment</template
      >
      <template #link>View Assessments</template>
    </card>

    <card :to="{ name: 'Profile' }" v-if="profile == null">
      <template #title>Complete your Profile</template>
      <template #description>Please complete your profile.</template>
      <template #link>Update your profile </template>
    </card>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/layouts/Card.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Card,
  },
  computed: {
    ...mapGetters("user", ["profile"]),
    ...mapGetters("auth", ["user", "isLoggedIn"]),
  },
};
</script>
