<template>
  <div class="grid-cols-11 gap-2 grid">
    <div class="scale-value">
      <label
        :for="`${question.id}-item0`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >0
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item0`"
          value="0"
        />
      </label>
    </div>
    <div class="scale-value">
      <label
        :for="`${question.id}-item1`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >1
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item1`"
          value="1"
        />
      </label>
    </div>
    <div class="scale-value">
      <label
        :for="`${question.id}-item2`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >2
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item2`"
          value="2"
        />
      </label>
    </div>
    <div class="scale-value">
      <label
        :for="`${question.id}-item3`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >3
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item3`"
          value="3"
        />
      </label>
    </div>
    <div class="scale-value">
      <label
        :for="`${question.id}-item4`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >4
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item4`"
          value="4"
        />
      </label>
    </div>
    <div class="scale-value">
      <label
        :for="`${question.id}-item5`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >5
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item5`"
          value="5"
        />
      </label>
    </div>
    <div class="scale-value">
      <label
        :for="`${question.id}-item6`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >6
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item6`"
          value="6"
        />
      </label>
    </div>
    <div class="scale-value">
      <label
        :for="`${question.id}-item7`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >7
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item7`"
          value="7"
        />
      </label>
    </div>
    <div class="scale-value">
      <label
        :for="`${question.id}-item8`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >8
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item8`"
          value="8"
        />
      </label>
    </div>
    <div class="scale-value">
      <label
        :for="`${question.id}-item9`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >9
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item9`"
          value="9"
        />
      </label>
    </div>
    <div class="">
      <label
        :for="`${question.id}-item10`"
        class="bg-white grid grid-rows-2 items-center justify-center justify-items-center py-2 rounded-sm shadow-xs"
        >10
        <input
          v-model="itemValue"
          type="radio"
          :name="`${question.id}-item`"
          :id="`${question.id}-item10`"
          value="10"
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
