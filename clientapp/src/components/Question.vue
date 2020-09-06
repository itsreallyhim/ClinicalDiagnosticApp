<template>
  <div class="mb-6">
    <h2 class=" title">
      {{ question.title }}
    </h2>
    <p class=" subtitle mb-2">{{ question.description }}</p>

    <component class="control" :is="question.type" v-model="question.value" />
  </div>
</template>

<script>
import Range from "../components/Range";
import PostureCheck from "../components/PostureCheck";
export default {
  components: { Range, PostureCheck },

  props: {
    question: {
      Object,
      required: true,
    },
  },
};
</script>

<style></style>
