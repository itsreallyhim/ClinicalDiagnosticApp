<template>
    <div class="my-6">
        <p class="has-text-weight-bold">{{ question.title }}</p>
        <p class="description">{{ question.description }}</p>
        <component :is="question.type" v-model="question.value" />
    </div>
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
