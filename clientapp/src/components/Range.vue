<template>
  <div>
    <b-field class="is-hidden-touch">
      <b-radio-button
        v-model="radioButton"
        :native-value="item.value"
        v-for="(item, index) in items"
        :key="index"
      >
        <span>{{ item.name }}</span>
      </b-radio-button>
    </b-field>
    <b-select
      class="is-hidden-desktop"
      expanded
      placeholder="Select a value"
      v-model="radioButton"
    >
      <option
        :native-value="item.value"
        v-for="(item, index) in items"
        :key="index"
        >{{ item.name }}</option
      >
    </b-select>
  </div>
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
      radioButton: null,
    };
  },
  watch: {
    radioButton: function() {
      this.$emit("input", this.radioButton);
    },
  },
};
</script>

<style scoped></style>
