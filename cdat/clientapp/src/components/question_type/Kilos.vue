<template>
  <div>
    <number append="kgs" v-model="itemValue"></number>
  </div>
</template>

<script>
import Number from "@/components/question_type/Number.vue";
export default {
  name: "kilos",
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
