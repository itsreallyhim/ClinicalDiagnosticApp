<template>
  <div v-if="question != null">
    <div v-if="'start' in question.scale_meta[0]">
      <div class="grid h-8 grid-cols-12 gap-2 mb-4">
        <p
          class="flex items-center justify-center text-xs text-center"
          :class="item.color"
          v-for="(item, index) in question.scale_meta"
          :key="index"
          :style="{
            'grid-column-start':
              Number.parseInt(item.start) == 0
                ? 1
                : Number.parseInt(item.start),
            'grid-column-end': Number.parseInt(item.end) + 1,
          }"
        >
          {{ item.label }}
        </p>
      </div>

      <scale :question="question"></scale>
    </div>
    <div
      v-else
      class="grid "
      :class="
        question.scale_meta[0].label == '' ? 'grid-cols-12' : 'grid-cols-13'
      "
    >
      <div
        v-for="(meta, index) in question.scale_meta"
        :key="index"
        class="grid items-center gap-2 "
        :class="[
          index != 0 ? 'border-t' : '',
          submeta(meta).label == ''
            ? 'grid-cols-11 col-span-11'
            : 'col-span-12 grid-cols-13',
        ]"
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
              'grid-column-start': Number.parseInt(sub.start) + 1,
              'grid-column-end': Number.parseInt(sub.end) + 1,
            }"
          >
            {{ sub.label }}
          </p>
        </div>
      </div>
      <scale
        class="col-span-12 border-t-0"
        :class="question.scale_meta[0].label == '' ? '' : 'col-start-2'"
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
