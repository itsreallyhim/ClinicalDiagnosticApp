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
  data: () => ({}),
  methods: {
    ...mapActions("user", ["bindPreviousAssessments"]),
    result(previousAssessment) {
      let outOf = 0;
      let value = previousAssessment.responses.reduce((total, response) => {
        if (!response.independent) {
          outOf += 10;
          return (total += parseInt(response.answer));
        } else {
          return total;
        }
      }, 0);

      return value + " /" + outOf;
    },
    tidyDate(previousAssessment) {
      return previousAssessment.created_at.toDate().toLocaleString("en-au");
    },
  },
};
</script>

<style></style>
