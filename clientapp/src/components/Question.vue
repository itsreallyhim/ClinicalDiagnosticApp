<template>
  <section class="mb-6">
    <h2 class=" title">
      <span v-if="number">{{ number }}. </span>{{ question.title }}
    </h2>
    <p class=" subtitle mb-2">{{ question.description }}</p>

    <component
      v-if="question.type != 'QuestionHeading'"
      class="control"
      :is="question.type"
      v-model="question.value"
      v-bind:question="question"
    />

    <component
      class="control subquestion"
      :is="'Question'"
      v-model="subquestion.value"
      v-bind:question="subquestion"
      :number="index + 1"
      v-for="(subquestion, index) in question.children"
      :key="index"
    />
  </section>
</template>

<script>
import Range from "../components/Range";
import PostureCheck from "../components/PostureCheck";
import { QuestionModel } from "../models/Question";
import Question from "../components/Question";

export default {
  components: { Range, PostureCheck, Question },
  name: "Question",
  props: {
    number: {
      default: () => null,
    },
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

.subquestion {
  margin: 1em 0;
}
.subquestion h2 {
  font-size: 1.5em;
}

@media screen and (max-width: 480px) {
  section {
    max-width: 95%;
    margin: 0 auto;
  }

  .title {
    font-size: 1.4em;
  }
  .subtitle {
    font-size: 1em;
  }
}
</style>
