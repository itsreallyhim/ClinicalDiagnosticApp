<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <card
        class="mt-16"
        :to="{ name: 'Update Profile' }"
        v-if="$route.name != 'Update Profile'"
      >
        <template #title>My Profile</template>
        <template #description>
          <p>Role: {{ profile.role }}</p>
          <p>Date of Birth: {{ profile.dateOfBirth }}</p>
        </template>
        <template #link>Update Profile</template>
      </card>

      <card
        class="mt-16"
        v-if="$route.name == 'Profile'"
        :to="{ name: 'Previous Assessments' }"
      >
        <template #icon></template>
        <template #title>Previous Assessments</template>
        <template #description>Review your previous assessments</template>
        <template #link>View Previous Assessments</template>
      </card>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Card from "@/layouts/Card";
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  components: {
    Card,
  },
  computed: {
    ...mapGetters("user", ["profile"]),
  },
};
</script>

<style></style>
