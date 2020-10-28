<template>
  <div
    class="flex"
    @click="selected = !selected"
    @keypress.prevent.space="selected = !selected"
  >
    <span
      role="checkbox"
      tabindex="0"
      :aria-checked="selected"
      :class="selected ? 'bg-blue' : 'bg-gray-200'"
      class="relative inline-flex flex-shrink-0 h-6 mr-2 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
    >
      <!-- On: "translate-x-5", Off: "translate-x-0" -->
      <span
        aria-hidden="true"
        :class="selected ? 'translate-x-5' : 'translate-x-0'"
        class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow"
      >
        <span
          :class="
            selected
              ? 'opacity-0 ease-out duration-100 hidden'
              : 'opacity-100 ease-in duration-200'
          "
          class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
        >
          <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <!-- On: "opacity-100 ease-in duration-200", Off: "opacity-0 ease-out duration-100" -->
        <span
          :class="
            selected
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100'
          "
          class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
        >
          <svg
            class="w-3 h-3 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
            />
          </svg>
        </span>
      </span>
    </span>
    <slot>
      {{ selected ? "Agree" : "Disagree" }}
    </slot>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "boolean",

  data: () => ({
    selected: false,
  }),
  props: ["question"],

  watch: {
    selected: "setAnswer",
  },

  methods: {
    ...mapMutations("responses", ["SET_ANSWER"]),
    setAnswer() {
      this.SET_ANSWER({
        question: this.question.id,
        answer: this.iValue ? 1 : 0,
      });
    },
  },
};
</script>

<style></style>
