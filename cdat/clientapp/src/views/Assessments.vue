<template>
  <div>
    <div
      class="grid gap-6 my-6"
      v-if="assessments != undefined"
      :class="$route.name == 'Assessments' ? ' sm:grid-cols-3' : 'hidden'"
    >
      <assessment-card
        v-for="(assessment, index) in assessments"
        :to="`/assessments/${assessment.id}`"
        :key="index"
        :assessment="assessment"
      ></assessment-card>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AssessmentCard from "@/layouts/AssessmentCard.vue";

export default {
  name: "Assessments",
  components: {
    AssessmentCard,
  },
  created() {
    this.loadAssessments();
  },
  computed: {
    ...mapGetters("assessments", ["assessments"]),
  },
  methods: {
    ...mapActions("assessments", ["loadAssessments"]),
  },
};
</script>

<style></style>
