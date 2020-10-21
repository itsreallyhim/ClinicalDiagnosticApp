<template>
  <div>
    <div
      class="mb-6"
      v-if="assessments != undefined"
      :class="assessments == undefined ? '' : 'grid grid-cols-3 gap-6'"
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
    this.init();
  },
  computed: {
    ...mapGetters("assessments", ["assessments"]),
  },
  methods: {
    ...mapActions("assessments", ["init"]),
  },
};
</script>

<style></style>
