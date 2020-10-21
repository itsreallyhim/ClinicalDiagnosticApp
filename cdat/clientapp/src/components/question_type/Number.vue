<template>
  <div class="mt-1 relative rounded-md shadow-sm max-w-xs">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      v-if="prepend"
    >
      <span class="text-gray-500 sm:text-sm sm:leading-5">
        {{ prepend }}
      </span>
    </div>

    <input
      class="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
      type="number"
      name="number"
      id="number"
      v-model="item"
    />

    <div
      class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      v-if="append"
    >
      <span class="text-gray-500 sm:text-sm sm:leading-5" id="price-currency">
        {{ append }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "number",
  model: {
    prop: "itemValue",
    event: "change",
  },
  props: {
    itemValue: {
      Number,
      default: () => null,
    },
    prepend: {
      String,
      default: () => null,
    },
    append: {
      String,
      default: () => null,
    },
  },
  data: () => ({
    item: 0,
  }),
};
</script>

<style></style>
