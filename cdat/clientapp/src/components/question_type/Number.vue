<template>
  <div>
    {{ prepend }}
    <input type="number" name="number" id="number" v-model="item" />
    {{ append }}
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
