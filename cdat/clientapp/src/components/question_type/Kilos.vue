<template>
  <div>
    <number append="kgs" :question="question"></number>
  </div>
</template>

<script>
import Number from "@/components/question_type/Number.vue";
export default {
  name: "kilos",
  props: ["question"],
  components: {
    Number,
  },
};
</script>

<style></style>
