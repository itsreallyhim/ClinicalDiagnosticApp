<template>
  <div class="grid grid-cols-2 gap-8">
    <card :to="{ name: 'Login' }" v-if="!isLoggedIn" class="col-span-2">
      <template #icon>
        <img class="w-full max-w-md mr-8" src="@/assets/Backpain.jpg" alt="" />
      </template>
      <template #title>Welcome, </template>
      <template #description>
        <p class="mb-2">
          You're here, and now all you need to do is register and you'll be
          taken immediately to the online assessment pages.
        </p>
        <p class="mb-2">
          The Clinical Diagnostic Assessment will assist you and your medical,
          fitness and allied health practitioners to work out which muscles are
          responsible for taking your skeleton out of alignment.
        </p>
        <p class="mb-2">
          When you've completed the assessment, our trained assessors or your
          own health and fitness professionals will be able to determine which
          muscles are taking your skeleton out of alignment and prescribe the
          exercises which will get it back into alignment.
        </p>
      </template>
      <template #link>Login Now</template>
    </card>
    <card
      class="col-span-2 text-white bg-blue"
      :to="{ name: 'Assessments' }"
      v-if="isLoggedIn"
    >
      <template #title>Welcome, {{ user.displayName }}</template>
      <template #description>
        <h2 class="my-2 text-lg font-bold">
          Put yourself in charge of your own musculo-skeletal health
        </h2>
        <p class="mb-2">
          You've already viewed the sample template. You're now ready to
          complete the online version.
        </p>
        <p class="mb-2">
          When it's all done and dusted you'll receive your report and a
          complimentary copy of the Fix Back Pain ebook, containing the key
          flexibility and strength exercises you need to do to get your skeleton
          back into better alignment - and your lower back pain free.
        </p>
        <p class="mb-2">
          In the meantime stay tuned, highly tuned and get your skeleton back
          into better alignment. You've nothing to lose except your back pain.
        </p>
      </template>
      <template #link>View Assessments</template>
    </card>
    <card
      class="col-span-2 sm:col-span-1"
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

    <card :to="{ name: 'Profile' }" v-if="profile == null && isLoggedIn">
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
