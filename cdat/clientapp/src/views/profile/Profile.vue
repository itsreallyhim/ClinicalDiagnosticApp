<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <card
        class="mt-16"
        :to="{ name: 'Update Profile' }"
        v-if="$route.name != 'Update Profile'"
      >
        <template #icon v-if="'photo' in user">
          <img class="mr-3 rounded-full shadow-md" :src="user.photo" alt="" />
        </template>
        <template #title>My Profile</template>
        <template #description v-if="profile != null">
          <p>Role: {{ profile.role }}</p>
          <p>Date of Birth: {{ profile.dateOfBirth }}</p>
        </template>
        <template #description v-else>
          Please Update your Profile
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
    ...mapGetters("auth", ["user"]),
    ...mapGetters("user", ["profile"]),
  },
};
</script>

<style></style>
