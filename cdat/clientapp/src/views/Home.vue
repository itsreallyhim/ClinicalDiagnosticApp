<template>
  <div class="grid grid-cols-2 gap-8">
    <card :to="{ name: 'Login' }" v-if="!isLoggedIn" class="col-span-2">
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
    <card
      class="col-span-2 bg-blue text-white"
      :to="{ name: 'Assessments' }"
      v-if="isLoggedIn"
    >
      <template #title>Welcome, {{ user.displayName }}</template>
      <template #description
        >Please complete the Clinical Diagnostic Assessment</template
      >
      <template #link>View Assessments</template>
    </card>
    <card
      :to="{ name: 'Previous Assessments' }"
      v-if="isLoggedIn && previousAssessments.length > 0"
    >
      <template #title>Your Previous Assessments</template>
      <template #description
        >You have completed
        {{ previousAssessments.length }} assessments.</template
      >
      <template #link>View Completed Assessments</template>
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
    ...mapGetters("user", ["profile", "previousAssessments"]),
    ...mapGetters("auth", ["user", "isLoggedIn"]),
  },
};
</script>
