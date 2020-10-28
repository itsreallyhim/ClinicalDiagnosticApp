<template>
  <div class="mt-6 overflow-hidden sm:rounded-md">
    <ul class="divide-y">
      <previous-assessment
        v-for="(previousAssessment, index) in previousAssessments"
        :key="index"
        :previousAssessment="previousAssessment"
      >
        <template #title>{{ previousAssessment.assessment.title }}</template>
        <template #description>{{
          previousAssessment.assessment.description
        }}</template>
        <template #date>{{ tidyDate(previousAssessment) }}</template>
        <template #result>{{ result(previousAssessment) }}</template>
      </previous-assessment>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PreviousAssessment from "@/layouts/PreviousAssessment.vue";
export default {
  name: "previous-assessments",
  components: {
    PreviousAssessment,
  },
  mounted() {
    this.bindPreviousAssessments();
  },
  computed: {
    ...mapGetters("user", ["previousAssessments"]),
  },
  data: () => ({
    aggregateTypes: ["scale", "scale-meta", "custom-scale-meta"],
  }),
  methods: {
    ...mapActions("user", ["bindPreviousAssessments"]),
    result(previousAssessment) {
      let responses = previousAssessment.responses.filter(
        (x) =>
          "answer" in x &&
          this.aggregateTypes.includes(x.question.question_type)
      );

      let total = responses.length * 10;
      let value = responses.reduce(
        (total, x) => (total += parseInt(x.answer)),
        0
      );

      return value + " /" + total;
    },
    tidyDate(previousAssessment) {
      return previousAssessment.created_at.toDate().toLocaleString("en-au");
    },
  },
};
</script>

<style></style>
