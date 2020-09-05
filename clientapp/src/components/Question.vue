<template>
  <div>
    <h2>
      {{ question.title }}
    </h2>
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
