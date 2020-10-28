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

    <static-card
      v-if="isLoggedIn && role && role.id == 'onboarding'"
      class="h-56 col-span-2 text-white bg-blue"
    >
      <template #title>Welcome</template>
      <template #description>
        <p class="mt-3">Unlock your account to complete your assesments.</p>
        <form @submit.prevent="unlock">
          <input
            required
            type="text"
            name="unlockCode"
            id="unlockCode"
            class="my-4 text-blue form-input"
            placeholder="Enter your unlock code."
            v-model="unlockCode"
          />
          <button
            class="inline-flex ml-2 font-medium text-white border border-transparent border-white rounded-md form-input bg-blue hover:bg-blue focus:outline-none focus:border-blue focus:shadow-outline-blue active:bg-blue"
          >
            Submit
          </button>
        </form>
      </template>
    </static-card>

    <card
      class="col-span-2 text-white bg-blue"
      :to="{ name: 'Assessments' }"
      v-if="isLoggedIn && role && role.id != 'onboarding'"
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

    <card
      :to="{ name: 'Assessment', params: { formID: 'd4tlCXEdIs9HSsvzbdRZ' } }"
      v-if="
        (profile == null || (profile && !('waiver' in profile))) && isLoggedIn
      "
      class="bg-red-500"
    >
      <template #title>Complete the Health Waiver</template>
      <template #description
        >Before you can complete any assessments, please complete the health
        waiver.</template
      >
      <template #link>Complete Waiver</template>
    </card>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/layouts/Card.vue";
import StaticCard from "@/layouts/StaticCard.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Card,
    StaticCard,
  },
  created() {
    if (this.isLoggedIn) this.bindPreviousAssessments();
  },
  methods: {
    ...mapActions("user", ["bindPreviousAssessments", "unlockAccount"]),
    unlock() {
      this.unlockAccount(this.unlockCode);
    },
  },
  computed: {
    ...mapGetters("user", ["profile", "role", "previousAssessments"]),
    ...mapGetters("auth", ["user", "isLoggedIn"]),
  },
  data: () => ({
    unlockCode: null,
  }),
};
</script>
