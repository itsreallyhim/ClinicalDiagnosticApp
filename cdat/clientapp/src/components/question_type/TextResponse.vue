<template>
  <div>
    <textarea
      class="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
      name="text"
      id="text"
      v-model="textVal"
    ></textarea>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "text-response",
  props: {
    question: {
      Object,
    },
  },
  data: () => ({
    textVal: "",
  }),
  methods: {
    ...mapMutations("responses", ["SET_ANSWER"]),
    setAnswer() {
      this.SET_ANSWER({
        question: this.question.id,
        text: this.textVal,
        independent: true,
      });
    },
  },
};
</script>

<style></style>
