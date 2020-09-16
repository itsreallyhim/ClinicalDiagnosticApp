<template>
  <div class="columns">
    <div class="rangeSelect column ">
      <div class="tags">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          :style="{ 'grid-column': tag.start + '/ span ' + tag.span }"
          :class="tag.note != null ? 'tag' : ''"
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
          :value="item.value"
          :native-value="item.value"
          v-for="(item, index) in items"
          :key="index"
        >
          {{ getTagNote(index) }} {{ item.name }}
        </option>
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
  methods: {
    getTagNote(index) {
      let item = this.tags.filter((item) => {
        return item.start + item.span - 2 >= index;
      })[0];

      if (item) {
        return item.note + ": ";
      } else {
        return null;
      }
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
  margin-bottom: 0.2em;
}
span.tag {
  white-space: normal;
  height: 100%;
  align-items: center;
}

@media screen and (max-width: 480px) {
  .tags {
    display: none;
  }
}
</style>
