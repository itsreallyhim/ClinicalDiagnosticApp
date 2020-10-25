<template>
  <div class="relative max-w-xs mt-1 rounded-md shadow-sm">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      v-if="prepend"
    >
      <span class="text-gray-500 sm:text-sm sm:leading-5">
        {{ prepend }}
      </span>
    </div>

    <input
      class="block w-full pr-12 form-input pl-7 sm:text-sm sm:leading-5"
      type="number"
      name="number"
      id="number"
      min="0"
      :step="step"
      v-model="iValue"
    />

    <div
      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      v-if="append"
    >
      <span class="text-gray-500 sm:text-sm sm:leading-5" id="price-currency">
        {{ append }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "number",

  props: {
    question: {
      Object,
    },
    prepend: {
      String,
      default: () => null,
    },
    append: {
      String,
      default: () => null,
    },
    step: {
      Number,
      default: () => 1,
    },
  },

  data: () => ({
    iValue: null,
  }),
  watch: {
    iValue: "setAnswer",
  },

  methods: {
    ...mapMutations("responses", ["SET_ANSWER"]),
    setAnswer() {
      this.SET_ANSWER({
        question: this.question.id,
        answer: this.iValue,
      });
    },
  },
};
</script>

<style></style>
