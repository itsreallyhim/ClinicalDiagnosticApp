<template>
  <div>
    <div v-if="'start' in question.scale_meta[0]">
      <div
        class="grid grid-cols-11 h-8  items-center justify-items-center gap-4"
      >
        <p
          class=""
          v-for="(item, index) in question.scale_meta"
          :key="index"
          :style="{
            'grid-column-start': item.start + 1,
            'grid-column-end': item.end + 1,
          }"
        >
          {{ item.label }}
        </p>
      </div>
      <scale :question="question"></scale>
    </div>
    <div v-else class="grid grid-cols-12 ">
      <div
        v-for="(meta, index) in question.scale_meta"
        :key="index"
        class="grid grid-cols-12 col-span-12 gap-2 items-center "
        :class="index != 0 ? 'border-t' : ''"
      >
        <p class="text-xs font-semibold ">
          {{ submeta(meta).label }}
        </p>
        <div
          class="grid grid-cols-11   items-center justify-items-center col-span-11 gap-2  "
        >
          <p
            class="w-full text-center py-2"
            v-for="(sub, index) in submeta(meta).items"
            :key="index"
            :style="{
              'grid-column-start': sub.start + 1,
              'grid-column-end': sub.end + 1,
            }"
          >
            {{ sub.label }}
          </p>
        </div>
      </div>
      <scale
        class="col-start-2 col-span-11 border-t-0"
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
  },
};
</script>

<style></style>
