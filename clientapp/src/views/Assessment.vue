<template>
  <div>
    <Question
      v-model="item.value"
      v-for="(item, index) in items"
      :key="index"
      :question="item"
    />

    <pre>
      {{ items }}
    </pre>

    Sum{{ pageTotal }}
  </div>
</template>

<script>
import Question from "../components/Question";

export default {
  components: { Question },
  data() {
    return {
      items: [
        {
          type: "Range",
          value: null,
          title: "Question 1",
          description: "Description of Question 1.",
        },
        {
          type: "Range",
          value: null,
          title: "Question 2",
          description: "Description of Question 2",
        },
        {
          type: "PostureCheck",
          value: null,
          title: "Posture Check 1",
          description: "Upload image and rate your posture.",
          image: null,
        },
      ],
    };
  },
  computed: {
    pageTotal() {
      return this.items.reduce((sum, current) => (sum += current.value), 0);
    },
  },
};
</script>

<style></style>
