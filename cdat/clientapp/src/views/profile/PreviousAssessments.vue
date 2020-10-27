<template>
  <div class="m-6 overflow-hidden bg-white shadow sm:rounded-md">
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
        <template #result
          >{{ result(previousAssessment.responses).value }}/{{
            result(previousAssessment.responses).total
          }}</template
        >
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
      let itemsToCount = responses.filter(
        (item) => item.question.question_type == "scale"
      );
      let total = itemsToCount.length * 10;
      let value = itemsToCount.reduce((sum, item) => {
        if (item.question.question_type == "scale") {
          return (sum = sum + Number.parseInt(item.answer));
        } else {
          return sum;
        }
      }, 0);
      return { total, value };
    },
    tidyDate(previousAssessment) {
      return previousAssessment.created_at.toDate().toLocaleString("en-au");
    },
  },
};
</script>

<style></style>
