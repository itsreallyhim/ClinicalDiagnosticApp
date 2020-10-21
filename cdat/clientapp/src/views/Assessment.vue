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

          <div
            class="transition duration-500 my-5 p-4 -mx-4 shadow-inner "
            :class="
              submitting
                ? 'bg-gray-500 opacity-50  h-32  overflow-hidden pointer-events-none '
                : 'h-auto'
            "
            :style="{
              'transition-property':
                'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, height',
            }"
          >
            <div class="  border-gray-200 ">
              <dl>
                <div v-for="(question, index) in currentQuestions" :key="index">
                  <question :questionmodel="question"></question>
                </div>
              </dl>
            </div>
          </div>
          <button
            class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-blue focus:outline-none focus:border-blue focus:shadow-outline-indigo active:bg-blue transition duration-150 ease-in-out"
            type="submit"
            :disabled="submitting"
          >
            {{ message }}
          </button>
        </form>
        <div v-if="message == 'Saved'" class="mt-6">
          <h3>Complete the other assessments</h3>
          <div class="my-6 grid gap-6" v-if="otherAssessments != undefined">
            <assessment-card
              v-for="(assessment, index) in otherAssessments"
              :to="`/assessments/${assessment.id}`"
              :key="index"
              :assessment="assessment"
            ></assessment-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Question from "@/components/Question.vue";
import AssessmentCard from "@/layouts/AssessmentCard.vue";

export default {
  name: "AssessmentView",
  components: {
    Question,
    AssessmentCard,
  },
  created() {
    this.updateAssessment();
  },
  data: () => ({
    submitting: false,
    message: "Save Response",
  }),
  watch: {
    $route: "updateAssessment",
    status: "updateStatus",
  },
  computed: {
    ...mapGetters("assessments", [
      "assessments",
      "currentAssessment",
      "currentQuestions",
    ]),
    ...mapGetters("responses", ["responses", "currentResponse", "status"]),
    otherAssessments() {
      return this.assessments.filter((x) => x.id != this.$route.params.formID);
    },
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
      this.submitting = false;
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
