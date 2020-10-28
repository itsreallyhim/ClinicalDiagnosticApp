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
          <p class="capitalize">{{ profile.role }}</p>
          <p class="text-sm">{{ profile.contactNumber }}</p>
          <p class="text-sm">{{ user.email }}</p>
          <h3 class="mt-3 font-semibold">Health Information</h3>
          <p>Date of Birth: {{ profile.dateOfBirth }}</p>
          <p>Gender: {{ profile.gender }}</p>
          <p>Height: {{ profile.height }}cms</p>
          <p>Weight: {{ profile.kilos }}kgs</p>
          <p>Body Fat Percentage: {{ profile.bfp }}%</p>
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
    <div
      class="grid grid-cols-3 gap-4 my-4 text-sm"
      v-if="$route.name == 'Profile'"
    >
      <static-card class="">
        <template #title>Request a copy of your information</template>
        <template #description>
          <p class="mb-1">
            Australian privacy law gives you a general right to access your
            personal information. This includes your health information. We must
            give you access to your personal information when you request it,
            except where the law allows them to refuse your request.
          </p>
          <p class="mb-1">
            <a
              class="text-blue"
              href="https://www.oaic.gov.au/privacy/your-privacy-rights/your-personal-information/access-your-personal-information/"
              >More Information about accessing your personal information.</a
            >
          </p>
        </template>
        <template #link>
          <a
            href="mailto:john@millerhealth.com"
            target="_blank"
            class="font-medium transition duration-150 ease-in-out text-blue hover:text-blue"
          >
            Request a copy of your information
          </a>
        </template>
      </static-card>
      <card class="" :to="{ name: 'Update Profile' }">
        <template #icon></template>
        <template #title>Correct your personal information</template>
        <template #description>
          <p class="mb-1">
            We require that you keep your personal information up to date and
            accurate in accordance to the Australian Privacy Principles.
          </p>
          <p class="mb-1">
            <a
              class="text-blue"
              href="https://www.oaic.gov.au/privacy/australian-privacy-principles-guidelines/chapter-10-app-10-quality-of-personal-information/"
              >More information about about our requirements to maintain your
              information.</a
            >
          </p>
        </template>
        <template #link>Update Your Information</template>
      </card>
      <static-card class="">
        <template #title>Delete your account</template>
        <template #description>
          <p class="mb-1">
            If you wish, your account, and any related information can be
            deleted from the Global Back Care system.
          </p>
          <p class="mb-1">
            Submit a request, and the Global Back Care team will remove your
            data. Please include the following reference in your request.
          </p>

          <p class="mb-1">
            Account Reference: <code>{{ user.id }}</code>
          </p>
        </template>
        <template #link>
          <a
            href="mailto:john@millerhealth.com"
            target="_blank"
            class="font-medium transition duration-150 ease-in-out text-blue hover:text-blue"
          >
            Request your account be deleted.
          </a>
        </template>
      </static-card>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Card from "@/layouts/Card";
import StaticCard from "@/layouts/StaticCard";
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  components: {
    Card,
    StaticCard,
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    ...mapGetters("user", ["profile"]),
  },
};
</script>

<style></style>
