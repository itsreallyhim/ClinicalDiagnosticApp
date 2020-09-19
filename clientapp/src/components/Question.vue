<template>
    <div class="my-6">
        <p class="has-text-weight-bold">{{ question.title }}</p>
        <p class="description">{{ question.description }}</p>
        <component :is="question.type" v-model="question.value" />
    </div>
</template>

<script>
import Range from "../components/Range";
export default {
  components: { Range },

  props: {
    question: {
      Object,
      required: true,
    },
  },
};
</script>

<style></style>
