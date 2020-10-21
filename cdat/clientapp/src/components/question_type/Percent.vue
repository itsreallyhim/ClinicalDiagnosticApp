<template>
  <div>
    <number append="%" v-model="itemValue"></number>
  </div>
</template>

<script>
import Number from "@/components/question_type/Number.vue";
export default {
  name: "percent",
  props: ["itemValue"],
  components: {
    Number,
  },
  model: {
    prop: "itemValue",
    event: "value",
  },
};
</script>

<style></style>
