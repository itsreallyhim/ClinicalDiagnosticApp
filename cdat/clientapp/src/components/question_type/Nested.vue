<template>
  <div class="">
    <div class="mb-8" v-for="(question, index) in questions" :key="index">
      <dt class="">
        <h4 class="text-sm font-medium leading-5">
          {{ question.title }}
        </h4>
        <p class="text-xs text-gray-500">{{ question.description }}</p>
      </dt>
      <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
        <component
          :is="question.question_type"
          :key="index"
          :question="question"
        >
        </component>
      </dd>
    </div>
  </div>
</template>

<script>
import Scale from "@/components/question_type/Scale.vue";
import ScaleMeta from "@/components/question_type/ScaleMeta.vue";
import Number from "@/components/question_type/Number.vue";
import Kilos from "@/components/question_type/Kilos.vue";
import Percent from "@/components/question_type/Percent.vue";
import TextResponse from "@/components/question_type/TextResponse.vue";
import Posture from "@/components/question_type/Posture.vue";
import Boolean from "@/components/question_type/Boolean.vue";
import CustomScale from "@/components/question_type/CustomScale.vue";
export default {
  name: "Nested",
  props: ["questions"],
  components: {
    Kilos,
    Number,
    Scale,
    Posture,
    ScaleMeta,
    Percent,
    TextResponse,
    Boolean,
    CustomScale,
  },
};
</script>

<style></style>
