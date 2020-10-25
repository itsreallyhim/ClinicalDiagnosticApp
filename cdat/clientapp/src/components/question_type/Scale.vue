<template>
  <div class="grid grid-cols-12 gap-2">
    <div class="scale-value" v-for="n in 11" :key="n">
      <label
        :for="`${question.id}-item${n - 1}`"
        :class="itemValue == n - 1 ? ' bg-blue text-white' : ''"
        class="grid items-center justify-center grid-rows-2 py-2 bg-white rounded-sm shadow-xs justify-items-center"
        >{{ n - 1 }}
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item${n - 1}`"
          :value="n - 1"
        />
      </label>
    </div>
    <p class="self-center text-3xl font-bold text-center">
      {{ itemValue }}
    </p>
  </div>
</template>

<script>
export default {
  name: "scale",
  model: {
    prop: "itemValue",
    event: "value",
  },
  props: {
    question: {
      type: Object,
      default: () => ({
        value: null,
      }),
    },
  },
  data: () => ({
    itemValue: null,
  }),
  watch: {
    itemValue(value) {
      this.$emit("value", value);
    },
  },
};
</script>
