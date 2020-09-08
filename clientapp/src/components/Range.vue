<template>
  <div class="columns">
    <div class="rangeSelect column is-four-fifths">
      <div class="tags">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          :style="{ 'grid-column': tag.start + '/ span ' + tag.span }"
        >
          {{ tag.note }}
        </span>
      </div>
      <b-field expanded class=" is-hidden-touch radioGrid">
        <b-radio-button
          v-model="radioButton"
          :native-value="item.value"
          v-for="(item, index) in items"
          :key="index"
          expanded
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
    <span class="selectedValue column" v-if="radioButton"
      >{{ radioButton }} points</span
    >
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

const buildDefaultTags = () => {
  let array = [];

  for (let index = 0; index <= 10; index++) {
    array.push({ span: 1, note: null });
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
    tags: {
      Object,
      default: () => {
        return buildDefaultTags();
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

<style scoped>
.rangeSelect {
  display: flex;
  flex-direction: column;
}
.selectedValue {
  font-size: 1.8em;
  font-weight: bold;
  align-self: center;
  text-align: center;
}
.tags {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  text-align: center;
}
</style>
