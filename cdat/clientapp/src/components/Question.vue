<template>
  <div v-if="question == undefined">
    Loading
  </div>
  <div class="mb-6 sm:grid sm:grid-cols-3 sm:gap-4" v-else>
    <dt class="">
      <h3 class="text-sm font-medium leading-5">
        {{ question.title }}
      </h3>
      <p class="text-xs text-gray-500">{{ question.description }}</p>
    </dt>
    <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
      <component
        v-if="question.question_type != 'nested'"
        :is="question.question_type"
        :question="question"
      ></component>
      <component
        v-else-if="question.question_type == 'nested'"
        :is="'nested'"
        :questions="question.questions"
      >
      </component>
      <div v-else>
        Loading
      </div>
    </dd>
  </div>
</template>

<script>
import Scale from "@/components/question_type/Scale.vue";
import ScaleMeta from "@/components/question_type/ScaleMeta.vue";
import Nested from "@/components/question_type/Nested.vue";
import Number from "@/components/question_type/Number.vue";
import Kilos from "@/components/question_type/Kilos.vue";
import Percent from "@/components/question_type/Percent.vue";
import Posture from "@/components/question_type/Posture.vue";
import TextResponse from "@/components/question_type/TextResponse.vue";
import Boolean from "@/components/question_type/Boolean.vue";

export default {
  name: "Question",
  props: ["questionmodel"],
  components: {
    Scale,
    ScaleMeta,
    Posture,
    Nested,
    Number,
    Kilos,
    Percent,
    TextResponse,
    Boolean,
  },

  computed: {
    question() {
      return this.questionmodel;
    },
  },
};
</script>

<style></style>
