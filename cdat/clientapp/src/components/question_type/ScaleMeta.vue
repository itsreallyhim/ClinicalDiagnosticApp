<template>
  <div>
    <div v-if="'start' in question.scale_meta[0]">
      <div class="grid h-8 grid-cols-12 gap-2 my-2">
        <p
          class="flex items-center justify-center"
          :class="colorClass(item.color)"
          v-for="(item, index) in question.scale_meta"
          :key="index"
          :style="{
            'grid-column-start': item.start + 1,
            'grid-column-end': item.end,
          }"
        >
          {{ item.label }}
        </p>
      </div>
      <scale :question="question"></scale>
    </div>
    <div v-else class="grid grid-cols-13 ">
      <div
        v-for="(meta, index) in question.scale_meta"
        :key="index"
        class="grid items-center col-span-12 gap-2 grid-cols-13 "
        :class="index != 0 ? 'border-t' : ''"
      >
        <p class="text-xs font-semibold ">
          {{ submeta(meta).label }}
        </p>
        <div
          class="grid items-center grid-cols-11 col-span-12 gap-2 justify-items-center "
        >
          <p
            class="w-full py-2 text-center"
            v-for="(sub, index) in submeta(meta).items"
            :key="index"
            :style="{
              'grid-column-start': sub.start + 1,
              'grid-column-end': sub.end,
            }"
          >
            {{ sub.label }}
          </p>
        </div>
      </div>
      <scale
        class="col-span-12 col-start-2 border-t-0"
        :question="question"
      ></scale>
    </div>
  </div>
</template>

<script>
import Scale from "@/components/question_type/Scale.vue";

export default {
  name: "scale-meta",

  components: {
    Scale,
  },
  props: ["question"],

  methods: {
    submeta(array) {
      let { label, ...items } = array;
      return { label, items };
    },
    colorClass(color) {
      let colorCode = "";
      switch (color) {
        case "red":
          colorCode = "bg-red-400";
          break;
        case "green":
          colorCode = "bg-green-400";
          break;
        default:
          colorCode = "";
          break;
      }
      return colorCode;
    },
  },
};
</script>

<style></style>
