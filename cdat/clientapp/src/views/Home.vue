<template>
  <div class="home">
    <card v-if="user" :to="{ name: 'Assessments' }">
      <template #title>Welcome, {{ user.displayName }}</template>
      <template #description
        >Please complete the Clinical Diagnostic Assessment</template
      >
      <template #link>View Assessmens</template>
    </card>
    <card :to="{ name: 'Profile' }" v-else>
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
    ...mapGetters("auth", ["user"]),
  },
};
</script>
