<template>
  <div class="grid-cols-11 gap-2 grid">
    <div class="scale-value" v-for="n in 11" :key="n">
      <label
        :for="`${question.id}-item${n}`"
        :class="itemValue == n ? ' bg-blue text-white' : ''"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >{{ n }}
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item${n}`"
          :value="n"
        />
      </label>
    </div>
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
