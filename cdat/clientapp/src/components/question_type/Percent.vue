<template>
  <div>
    <number append="%" step="1" :question="question"></number>
  </div>
</template>

<script>
import Number from "@/components/question_type/Number.vue";
export default {
  name: "percent",
  props: ["question"],
  components: {
    Number,
  },
};
</script>

<style></style>
