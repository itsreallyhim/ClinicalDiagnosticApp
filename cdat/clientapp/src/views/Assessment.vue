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
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              {{ currentAssessment.title }}
            </h3>
            <p class="max-w-2xl text-sm leading-5 text-gray-500">
              {{ currentAssessment.description }}
            </p>
          </div>

          <div
            class="p-4 my-5 -mx-4 transition duration-500 "
            :class="
              submitting || saved
                ? 'bg-gray-500 opacity-50  h-32  overflow-hidden pointer-events-none '
                : 'h-auto'
            "
            :style="{
              'transition-property':
                'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, height',
            }"
          >
            <div class="border-gray-200 ">
              <dl>
                <div v-for="(question, index) in currentQuestions" :key="index">
                  <question :questionmodel="question"></question>
                </div>
              </dl>
            </div>

            <div v-if="currentAssessment.scored">
              Your Score: {{ responseTotal }}
            </div>
          </div>
          <button
            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-blue hover:bg-blue focus:outline-none focus:border-blue focus:shadow-outline-indigo active:bg-blue"
            type="submit"
            :disabled="submitting || saved"
          >
            {{ message }}
          </button>
          <pre></pre>
        </form>
        <div v-if="message == 'Saved'" class="mt-6">
          <h3>Complete the other assessments</h3>
          <div class="grid gap-6 my-6" v-if="otherAssessments != undefined">
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
    saved: false,
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
    responseTotal() {
      return this.currentResponse.responses.reduce(
        (total, response) => (total += response.answer),
        0
      );
    },
  },
  methods: {
    ...mapActions("assessments", ["setAssessment"]),
    ...mapActions("responses", [
      "createResponse",
      "saveResponse",
      "emptyResponse",
    ]),
    ...mapActions("user", ["setProfile"]),
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

      /* TODO: Move this to where a better place*/
      if (this.currentAssessment.id == "d4tlCXEdIs9HSsvzbdRZ") {
        this.setProfile({ waiver: true });
      }

      this.submitting = false;
      this.saved = true;
      this.message = "Saved";
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.message != "Saved") {
      const answer = window.confirm(
        "Do you really want to leave? You will loose your current answers!"
      );
      if (answer) {
        this.emptyResponse();
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>

<style scoped>
pre {
  text-align: left;
}
</style>
