<template>
  <div v-if="items.length > 0">
    <Question
      v-for="(item, index) in items"
      :key="index"
      :question="item"
      :number="index + 1"
    />

    <pre>
      {{ items }}
    </pre>

    Sum{{ pageTotal }}
  </div>
  <div v-else>
    <section>
      <h1 class="title">
        Please select an assessment
      </h1>
      <router-link to="/assessment/diagnostic"
        >Diagnostic Assessment</router-link
      >
    </section>
  </div>
</template>

<script>
import Question from "@/components/Question";
import PostureCheck from "../demo/PostureCheck";
export default {
  name: "Assessment",
  components: { Question },
  data() {
    return {};
  },

  computed: {
    items() {
      let items = [];
      switch (this.$route.params.template) {
        case "diagnostic":
          items = PostureCheck;
          break;

        default:
          break;
      }
      return items;
    },
    pageTotal() {
      return this.items.reduce((sum, current) => (sum += current.value), 0);
    },
  },
};
</script>

<style></style>
