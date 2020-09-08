<template>
  <div>
    <Question v-for="(item, index) in items" :key="index" :question="item" />

    <pre>
      {{ items }}
    </pre>

    Sum{{ pageTotal }}
  </div>
</template>

<script>
import Question from "@/components/Question";
import PostureCheck from "../demo/PostureCheck";
export default {
  name: "Assessment",
  components: { Question },
  data() {
    return {
      items: PostureCheck,
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
