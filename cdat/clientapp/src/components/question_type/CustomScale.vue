<template>
  <div class="grid grid-cols-12 gap-2">
    <div class="scale-value" v-for="n in question.custom_scale" :key="n">
      <label
        :for="`${question.id}-item${n}`"
        :class="iValue == n ? ' bg-blue text-white' : ''"
        class="grid items-center justify-center grid-rows-2 py-2 bg-white rounded-sm shadow-xs justify-items-center"
        >{{ n }}
        <input
          v-model="iValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item${n}`"
          :value="n"
        />
      </label>
    </div>
    <p class="self-center text-3xl font-bold text-center">
      {{ iValue }}
    </p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "custom-scale",

  props: {
    question: {
      type: Object,
    },
    itemValue: {
      type: Number,
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
