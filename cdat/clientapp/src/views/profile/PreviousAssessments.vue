<template>
  <div class="bg-white m-6 shadow overflow-hidden sm:rounded-md">
    <ul>
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
        <template #result
          >{{ result(previousAssessment.responses).value }}/{{
            result(previousAssessment.responses).total
          }}</template
        >
        {{ previousAssessment }}
      </previous-assessment>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PreviousAssessment from "@/layouts/PreviousAssessment.vue";
export default {
  name: "previous-assessments",
  components: {
    PreviousAssessment,
  },
  computed: {
    ...mapGetters("user", ["previousAssessments"]),
  },
  methods: {
    result(responses) {
      let total = responses.length * 10;
      let value = responses.reduce((sum, item) => (sum = sum + item.answer), 0);
      return { total, value };
    },
    tidyDate(previousAssessment) {
      return previousAssessment.created_at.toDate().toLocaleString("en-au");
    },
  },
};
</script>

<style></style>
