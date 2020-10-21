<template>
  <div class="assessment">
    <div class="loading" v-if="currentAssessment == undefined">
      <p>
        Loading
      </p>
    </div>
    <div v-else>
      <div v-if="currentQuestions == undefined">
        <p>
          Loading Questions
        </p>
      </div>
      <div v-else>
        <form @submit.prevent="submitResponse">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ currentAssessment.title }}
            </h3>
            <p class="max-w-2xl text-sm leading-5 text-gray-500">
              {{ currentAssessment.description }}
            </p>
          </div>
          <div class="mt-5 border-t border-gray-200 pt-5">
            <dl>
              <div v-for="(question, index) in currentQuestions" :key="index">
                <question :questionmodel="question"></question>
              </div>
            </dl>
          </div>
          <button
            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            type="submit"
            :disabled="submitting"
          >
            {{ message }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Question from "@/components/Question.vue";

export default {
  name: "AssessmentView",
  components: {
    Question,
  },
  created() {
    this.updateAssessment();
  },
  data: () => ({
    submitting: false,
    message: "Save Assessment",
  }),
  watch: {
    $route: "updateAssessment",
    status: "updateStatus",
  },
  computed: {
    ...mapGetters("assessments", ["currentAssessment", "currentQuestions"]),
    ...mapGetters("responses", ["responses", "currentResponse", "status"]),
  },
  methods: {
    ...mapActions("assessments", ["setAssessment"]),
    ...mapActions("responses", ["createResponse", "saveResponse"]),
    updateAssessment() {
      this.setAssessment(this.$route.params.formID);

      this.createResponse(this.$route.params.formID);
    },
    updateStatus() {
      this.message = this.status;
    },
    submitResponse() {
      this.submitting = true;
      this.message = "Saving";
      this.saveResponse();
    },
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? You will loose your current answers!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style scoped>
pre {
  text-align: left;
}
</style>
