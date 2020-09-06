<template>
  <section class="mb-6">
    <h2 class=" title">
      {{ question.title }}
    </h2>
    <p class=" subtitle mb-2">{{ question.description }}</p>

    <component
      class="control"
      :is="question.type"
      v-model="question.value"
      v-bind:question="question"
    />
  </section>
</template>

<script>
import Range from "../components/Range";
import PostureCheck from "../components/PostureCheck";
import { QuestionModel } from "../models/Question";

export default {
  components: { Range, PostureCheck },

  props: {
    question: {
      Object,
      required: true,
      default: () => new QuestionModel(),
    },
  },
};
</script>

<style scoped>
section {
  margin-bottom: 8em;
}
</style>
