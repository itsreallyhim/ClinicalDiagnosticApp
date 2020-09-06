<template>
  <b-field>
    <b-radio-button
      v-model="radioButton"
      :native-value="item.value"
      v-for="(item, index) in items"
      :key="index"
    >
      <span>{{ item.name }}</span>
    </b-radio-button>
  </b-field>
</template>

<script>
const buildDefault = () => {
  let array = [];

  for (let index = 0; index <= 10; index++) {
    array.push({ name: index.toString(), value: index });
  }

  return array;
};

export default {
  props: {
    items: {
      Object,
      default: () => {
        return buildDefault();
      },
    },
  },
  data() {
    return {
      radioButton: "",
    };
  },
  watch: {
    radioButton: function() {
      this.$emit("input", this.radioButton);
    },
  },
};
</script>

<style></style>
